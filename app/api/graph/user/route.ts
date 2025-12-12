import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import {
  buildUserGraph,
  getUserGraphNodes,
  getUserGraphEdges,
  convertZepToGraphData,
  syncUserProfileToZep,
  getZepClient,
  GraphData,
} from '@/lib/zep-client'

const sql = neon(process.env.DATABASE_URL!)

// GET /api/graph/user - Get user's knowledge graph (from Zep or local fallback)
export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('userId')
  const source = request.nextUrl.searchParams.get('source') || 'auto' // 'zep', 'local', or 'auto'

  if (!userId) {
    return NextResponse.json(
      { error: 'userId required' },
      { status: 400 }
    )
  }

  try {
    // Try Zep first if available and not explicitly requesting local
    const zepClient = getZepClient()

    if (zepClient && source !== 'local') {
      try {
        const [zepNodes, zepEdges] = await Promise.all([
          getUserGraphNodes(userId),
          getUserGraphEdges(userId),
        ])

        // If we have Zep data, use it
        if (zepNodes.length > 0 || zepEdges.length > 0) {
          const graph = convertZepToGraphData(userId, zepNodes, zepEdges)

          return NextResponse.json({
            graph,
            source: 'zep',
            stats: {
              nodeCount: zepNodes.length,
              edgeCount: zepEdges.length,
              skillCount: zepNodes.filter(n => n.labels?.some(l => l.toLowerCase().includes('skill'))).length,
              companyCount: zepNodes.filter(n => n.labels?.some(l => l.toLowerCase().includes('company'))).length,
              preferenceCount: zepNodes.filter(n => n.labels?.some(l => l.toLowerCase().includes('preference'))).length,
              matchedJobCount: 0, // Jobs come from local matching
            },
          })
        }
      } catch (zepError) {
        console.warn('Zep fetch failed, falling back to local:', zepError)
      }
    }

    // Fall back to local database graph
    const skills = await sql`
      SELECT
        us.id,
        COALESCE(s.name, us.skill_name_raw) as name,
        COALESCE(s.category, 'other') as category,
        us.confidence
      FROM user_skills us
      LEFT JOIN skills s ON us.skill_id = s.id
      WHERE us.user_id = ${userId}
      ORDER BY us.confidence DESC NULLS LAST
      LIMIT 20
    `

    const companies = await sql`
      SELECT DISTINCT
        id::text,
        company_name_raw as name,
        role_title as role
      FROM user_experiences
      WHERE user_id = ${userId}
      LIMIT 10
    `

    const prefsResult = await sql`
      SELECT
        role_types,
        preferred_locations,
        remote_preference,
        industries_preferred
      FROM user_job_preferences
      WHERE user_id = ${userId}
      LIMIT 1
    `

    const preferences: Array<{ type: string; value: string }> = []
    if (prefsResult.length > 0) {
      const p = prefsResult[0]
      if (p.remote_preference) {
        preferences.push({ type: 'Work Style', value: p.remote_preference })
      }
      if (p.role_types && Array.isArray(p.role_types)) {
        p.role_types.slice(0, 3).forEach((r: string) => {
          preferences.push({ type: 'Role', value: r })
        })
      }
      if (p.preferred_locations && Array.isArray(p.preferred_locations)) {
        p.preferred_locations.slice(0, 2).forEach((l: string) => {
          preferences.push({ type: 'Location', value: l })
        })
      }
      if (p.industries_preferred && Array.isArray(p.industries_preferred)) {
        p.industries_preferred.slice(0, 2).forEach((i: string) => {
          preferences.push({ type: 'Industry', value: i })
        })
      }
    }

    const matchedJobs = await sql`
      SELECT
        j.id,
        j.title,
        j.company_name as company,
        0.85 as match_score
      FROM jobs j
      WHERE j.is_active = true
      ORDER BY j.posted_date DESC NULLS LAST
      LIMIT 5
    `

    const graph: GraphData = await buildUserGraph(
      userId,
      skills.map(s => ({
        id: String(s.id),
        name: s.name || 'Unknown Skill',
        category: s.category || 'other',
        confidence: Number(s.confidence) || 0.8,
      })),
      companies.map(c => ({
        id: c.id,
        name: c.name || 'Unknown Company',
        role: c.role,
      })),
      preferences,
      matchedJobs.map(j => ({
        id: String(j.id),
        title: j.title,
        company: j.company,
        matchScore: Number(j.match_score),
      }))
    )

    return NextResponse.json({
      graph,
      source: 'local',
      stats: {
        skillCount: skills.length,
        companyCount: companies.length,
        preferenceCount: preferences.length,
        matchedJobCount: matchedJobs.length,
      },
    })
  } catch (error) {
    console.error('User graph error:', error)
    return NextResponse.json(
      { error: 'Failed to build user graph', details: String(error) },
      { status: 500 }
    )
  }
}

// POST /api/graph/user - Sync user profile to Zep
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, syncToZep = true } = body

    if (!userId) {
      return NextResponse.json(
        { error: 'userId required' },
        { status: 400 }
      )
    }

    // Fetch user data from database
    const skills = await sql`
      SELECT
        COALESCE(s.name, us.skill_name_raw) as name,
        COALESCE(s.category, 'other') as category,
        us.years_experience,
        us.proficiency_level
      FROM user_skills us
      LEFT JOIN skills s ON us.skill_id = s.id
      WHERE us.user_id = ${userId}
        AND us.confirmed = true
    `

    const experiences = await sql`
      SELECT
        company_name_raw as company,
        role_title as role,
        start_year,
        end_year,
        is_current
      FROM user_experiences
      WHERE user_id = ${userId}
        AND confirmed = true
    `

    const prefsResult = await sql`
      SELECT
        role_types,
        preferred_locations,
        remote_preference,
        day_rate_min,
        day_rate_max,
        industries_preferred
      FROM user_job_preferences
      WHERE user_id = ${userId}
      LIMIT 1
    `

    const preferences = prefsResult.length > 0 ? {
      roleTypes: prefsResult[0].role_types,
      locations: prefsResult[0].preferred_locations,
      remotePreference: prefsResult[0].remote_preference,
      dayRateMin: prefsResult[0].day_rate_min,
      dayRateMax: prefsResult[0].day_rate_max,
      industries: prefsResult[0].industries_preferred,
    } : {}

    // Sync to Zep if enabled
    let zepSynced = false
    if (syncToZep) {
      zepSynced = await syncUserProfileToZep(userId, {
        skills: skills.map(s => ({
          name: s.name,
          category: s.category,
          yearsExperience: s.years_experience,
          proficiency: s.proficiency_level,
        })),
        experiences: experiences.map(e => ({
          company: e.company,
          role: e.role,
          startYear: e.start_year,
          endYear: e.end_year,
          isCurrent: e.is_current,
        })),
        preferences,
      })
    }

    return NextResponse.json({
      success: true,
      zepSynced,
      profile: {
        skillCount: skills.length,
        experienceCount: experiences.length,
        hasPreferences: prefsResult.length > 0,
      },
    })
  } catch (error) {
    console.error('User sync error:', error)
    return NextResponse.json(
      { error: 'Failed to sync user profile', details: String(error) },
      { status: 500 }
    )
  }
}
