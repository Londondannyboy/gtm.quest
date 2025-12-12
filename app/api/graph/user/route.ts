import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { buildUserGraph, GraphData } from '@/lib/zep-client'

const sql = neon(process.env.DATABASE_URL!)

// GET /api/graph/user - Get user's knowledge graph
export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('userId')

  if (!userId) {
    return NextResponse.json(
      { error: 'userId required' },
      { status: 400 }
    )
  }

  try {
    // Fetch user's skills (with or without skill_id link)
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

    // Fetch user's companies from user_experiences
    const companies = await sql`
      SELECT DISTINCT
        id::text,
        company_name_raw as name,
        role_title as role
      FROM user_experiences
      WHERE user_id = ${userId}
      LIMIT 10
    `

    // Fetch user's preferences and flatten into key-value pairs
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

    // Flatten preferences into displayable items
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

    // Fetch matched jobs (if any job matching exists)
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

    // Build the graph
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
      preferences, // Already in correct format
      matchedJobs.map(j => ({
        id: String(j.id),
        title: j.title,
        company: j.company,
        matchScore: Number(j.match_score),
      }))
    )

    return NextResponse.json({
      graph,
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
