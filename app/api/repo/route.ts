import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

// GET /api/repo - Get user's complete Repo data
export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('userId')

  if (!userId) {
    return NextResponse.json({ error: 'userId required' }, { status: 400 })
  }

  try {
    // Fetch all user data in parallel
    const [skills, experiences, qualifications, preferences, pendingItems] = await Promise.all([
      // Skills with skill details
      sql`
        SELECT us.*, s.name as skill_name, s.category as skill_category
        FROM user_skills us
        LEFT JOIN skills s ON us.skill_id = s.id
        WHERE us.user_id = ${userId}
        ORDER BY us.confirmed DESC, us.confidence DESC
      `,

      // Experiences with company details
      sql`
        SELECT ue.*, ec.name as company_name, ec.industry, ec.logo_url
        FROM user_experiences ue
        LEFT JOIN employer_companies ec ON ue.employer_id = ec.id
        WHERE ue.user_id = ${userId}
        ORDER BY ue.is_current DESC, ue.end_year DESC NULLS FIRST
      `,

      // Qualifications
      sql`
        SELECT * FROM user_qualifications
        WHERE user_id = ${userId}
        ORDER BY year_obtained DESC NULLS LAST
      `,

      // Preferences
      sql`
        SELECT * FROM user_job_preferences
        WHERE user_id = ${userId}
      `,

      // Pending confirmations
      sql`
        SELECT id, item_type, extracted_data, confidence, created_at
        FROM repo_pending_items
        WHERE user_id = ${userId} AND status = 'pending'
        ORDER BY confidence DESC
      `
    ])

    // Calculate Repo completeness score
    const completeness = calculateCompleteness({
      skills: skills.length,
      experiences: experiences.length,
      qualifications: qualifications.length,
      hasPreferences: preferences.length > 0
    })

    return NextResponse.json({
      skills,
      experiences,
      qualifications,
      preferences: preferences[0] || null,
      pendingItems,
      stats: {
        totalSkills: skills.length,
        confirmedSkills: skills.filter((s: Record<string, any>) => s.confirmed).length,
        totalExperiences: experiences.length,
        pendingCount: pendingItems.length,
        completeness
      }
    })
  } catch (error) {
    console.error('Repo API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch repo', details: String(error) },
      { status: 500 }
    )
  }
}

function calculateCompleteness(data: {
  skills: number
  experiences: number
  qualifications: number
  hasPreferences: boolean
}): number {
  let score = 0
  const maxScore = 100

  // Skills (up to 30 points)
  score += Math.min(30, data.skills * 5)

  // Experiences (up to 30 points)
  score += Math.min(30, data.experiences * 10)

  // Qualifications (up to 20 points)
  score += Math.min(20, data.qualifications * 10)

  // Preferences (20 points)
  if (data.hasPreferences) score += 20

  return Math.round((score / maxScore) * 100)
}
