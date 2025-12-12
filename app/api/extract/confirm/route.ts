import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

// POST /api/extract/confirm - Confirm or reject a pending extraction
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { itemId, userId, action, editedData } = body

    if (!itemId || !userId || !action) {
      return NextResponse.json(
        { error: 'itemId, userId, and action required' },
        { status: 400 }
      )
    }

    if (!['confirm', 'reject', 'edit'].includes(action)) {
      return NextResponse.json(
        { error: 'action must be confirm, reject, or edit' },
        { status: 400 }
      )
    }

    // Get the pending item
    const [item] = await sql`
      SELECT id, item_type, extracted_data, confidence
      FROM repo_pending_items
      WHERE id = ${itemId} AND user_id = ${userId} AND status = 'pending'
    `

    if (!item) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 })
    }

    const data = action === 'edit' && editedData ? editedData : item.extracted_data

    if (action === 'confirm' || action === 'edit') {
      // Move to the appropriate confirmed table
      await saveConfirmedItem(userId, item.item_type, data)

      // Update pending item status
      await sql`
        UPDATE repo_pending_items
        SET status = ${action === 'edit' ? 'edited' : 'confirmed'},
            resolved_at = NOW(),
            extracted_data = ${JSON.stringify(data)}
        WHERE id = ${itemId}
      `
    } else if (action === 'reject') {
      await sql`
        UPDATE repo_pending_items
        SET status = 'rejected', resolved_at = NOW()
        WHERE id = ${itemId}
      `
    }

    return NextResponse.json({
      success: true,
      action,
      itemType: item.item_type
    })
  } catch (error) {
    console.error('Confirm API error:', error)
    return NextResponse.json(
      { error: 'Confirmation failed', details: String(error) },
      { status: 500 }
    )
  }
}

// Save confirmed item to the appropriate table
async function saveConfirmedItem(
  userId: string,
  itemType: string,
  data: Record<string, unknown>
) {
  try {
    switch (itemType) {
      case 'skill':
        // First, ensure skill exists in skills table
        const skillName = data.name as string
        const skillCategory = data.category as string || 'other'

        // Upsert skill
        const [skill] = await sql`
          INSERT INTO skills (name, category)
          VALUES (${skillName}, ${skillCategory})
          ON CONFLICT (name) DO UPDATE SET category = COALESCE(skills.category, ${skillCategory})
          RETURNING id
        `

        // Add to user_skills
        await sql`
          INSERT INTO user_skills (
            user_id, skill_id, skill_name_raw, proficiency_level,
            years_experience, context, confidence, confirmed, confirmed_at
          )
          VALUES (
            ${userId},
            ${skill.id},
            ${skillName},
            ${data.proficiency as string || null},
            ${data.yearsExperience as number || null},
            ${data.context as string || null},
            ${data.confidence as number || 0.9},
            true,
            NOW()
          )
          ON CONFLICT (user_id, skill_id) DO UPDATE SET
            proficiency_level = COALESCE(${data.proficiency as string || null}, user_skills.proficiency_level),
            years_experience = COALESCE(${data.yearsExperience as number || null}, user_skills.years_experience),
            context = COALESCE(${data.context as string || null}, user_skills.context),
            confirmed = true,
            confirmed_at = NOW()
        `
        break

      case 'company':
        // First, ensure company exists in employer_companies
        const companyName = data.name as string
        const normalizedName = (data.normalizedName as string) ||
          companyName.toLowerCase().replace(/[^a-z0-9]/g, '-')

        // Upsert employer company
        const [company] = await sql`
          INSERT INTO employer_companies (name, normalized_name)
          VALUES (${companyName}, ${normalizedName})
          ON CONFLICT (normalized_name) DO UPDATE SET name = ${companyName}
          RETURNING id
        `

        // Add to user_experiences
        await sql`
          INSERT INTO user_experiences (
            user_id, employer_id, company_name_raw, role_title, role_type,
            start_year, end_year, is_current, achievements, team_size,
            confidence, confirmed, confirmed_at
          )
          VALUES (
            ${userId},
            ${company.id},
            ${companyName},
            ${data.role as string || null},
            ${data.roleType as string || null},
            ${data.startYear as number || null},
            ${data.endYear as number || null},
            ${data.isCurrent as boolean || false},
            ${data.achievements as string[] || null},
            ${data.teamSize as number || null},
            ${data.confidence as number || 0.9},
            true,
            NOW()
          )
        `
        break

      case 'qualification':
        await sql`
          INSERT INTO user_qualifications (
            user_id, qualification_type, name, institution,
            year_obtained, confidence, confirmed
          )
          VALUES (
            ${userId},
            ${data.type as string},
            ${data.name as string},
            ${data.institution as string || null},
            ${data.year as number || null},
            ${data.confidence as number || 0.9},
            true
          )
        `
        break

      case 'preference':
        const prefType = data.type as string
        const prefValue = data.value as string

        // Get or create user preferences row
        await sql`
          INSERT INTO user_job_preferences (user_id)
          VALUES (${userId})
          ON CONFLICT (user_id) DO NOTHING
        `

        // Update specific preference field
        if (prefType === 'role') {
          await sql`
            UPDATE user_job_preferences
            SET role_types = array_append(
              COALESCE(role_types, ARRAY[]::text[]),
              ${prefValue}
            ),
            updated_at = NOW()
            WHERE user_id = ${userId}
          `
        } else if (prefType === 'location') {
          await sql`
            UPDATE user_job_preferences
            SET preferred_locations = array_append(
              COALESCE(preferred_locations, ARRAY[]::text[]),
              ${prefValue}
            ),
            updated_at = NOW()
            WHERE user_id = ${userId}
          `
        } else if (prefType === 'availability') {
          // Parse "3 days per week" → 3
          const days = parseInt(prefValue) || null
          if (days) {
            await sql`
              UPDATE user_job_preferences
              SET availability_days_per_week = ${days},
              updated_at = NOW()
              WHERE user_id = ${userId}
            `
          }
        } else if (prefType === 'rate') {
          // Parse "£1000-1500/day" → min: 1000, max: 1500
          const rateMatch = prefValue.match(/(\d+).*?(\d+)?/)
          if (rateMatch) {
            const min = parseInt(rateMatch[1]) || null
            const max = parseInt(rateMatch[2]) || min
            await sql`
              UPDATE user_job_preferences
              SET day_rate_min = ${min}, day_rate_max = ${max},
              updated_at = NOW()
              WHERE user_id = ${userId}
            `
          }
        } else if (prefType === 'industry') {
          await sql`
            UPDATE user_job_preferences
            SET industries_preferred = array_append(
              COALESCE(industries_preferred, ARRAY[]::text[]),
              ${prefValue}
            ),
            updated_at = NOW()
            WHERE user_id = ${userId}
          `
        } else if (prefType === 'companyStage') {
          await sql`
            UPDATE user_job_preferences
            SET company_stages = array_append(
              COALESCE(company_stages, ARRAY[]::text[]),
              ${prefValue}
            ),
            updated_at = NOW()
            WHERE user_id = ${userId}
          `
        }
        break
    }
  } catch (error) {
    console.error(`Error saving confirmed ${itemType}:`, error)
    throw error
  }
}
