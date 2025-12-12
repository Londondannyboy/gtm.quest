import { NextRequest, NextResponse } from 'next/server'
import { extractFromTranscript, extractIncremental } from '@/lib/extract-profile'
import { validateCompany } from '@/lib/company-validation'
import { ExtractionResult, ExtractedCompany } from '@/lib/extraction-types'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

// POST /api/extract - Extract profile data from transcript
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { transcript, userId, sessionId, incremental, existingData } = body

    if (!transcript) {
      return NextResponse.json({ error: 'Transcript required' }, { status: 400 })
    }

    let result: ExtractionResult

    if (incremental && existingData) {
      // Incremental extraction - only extract new info
      result = await extractIncremental(transcript, existingData)
    } else {
      // Full extraction
      result = await extractFromTranscript(transcript)
    }

    // Enrich companies with validation data
    const enrichedCompanies = await enrichCompaniesWithValidation(result.companies)
    result.companies = enrichedCompanies.companies
    const companyQuestions = enrichedCompanies.questions

    // If we have a userId, save pending items to database
    if (userId && result) {
      await savePendingExtractions(userId, sessionId, result)
    }

    return NextResponse.json({
      success: true,
      extraction: result,
      pendingCount:
        result.skills.length +
        result.companies.length +
        result.qualifications.length +
        result.preferences.length,
      // Include company validation questions for follow-up
      companyQuestions
    })
  } catch (error) {
    console.error('Extraction API error:', error)
    return NextResponse.json(
      { error: 'Extraction failed', details: String(error) },
      { status: 500 }
    )
  }
}

// Save extracted items as pending confirmations
async function savePendingExtractions(
  userId: string,
  sessionId: string | undefined,
  result: ExtractionResult
) {
  const items: { type: string; data: unknown; confidence: number }[] = []

  // Collect all items
  result.skills.forEach(skill => {
    items.push({ type: 'skill', data: skill, confidence: skill.confidence })
  })

  result.companies.forEach(company => {
    items.push({ type: 'company', data: company, confidence: company.confidence })
  })

  result.qualifications.forEach(qual => {
    items.push({ type: 'qualification', data: qual, confidence: qual.confidence })
  })

  result.preferences.forEach(pref => {
    items.push({ type: 'preference', data: pref, confidence: pref.confidence })
  })

  // Insert each as a pending item
  for (const item of items) {
    try {
      await sql`
        INSERT INTO repo_pending_items (user_id, item_type, extracted_data, confidence, status)
        VALUES (${userId}, ${item.type}, ${JSON.stringify(item.data)}, ${item.confidence}, 'pending')
        ON CONFLICT DO NOTHING
      `
    } catch (error) {
      console.error('Error saving pending item:', error)
    }
  }

  // Update or create extraction session
  if (sessionId) {
    try {
      await sql`
        UPDATE extraction_sessions
        SET pending_extractions = pending_extractions || ${JSON.stringify(result)}::jsonb
        WHERE id = ${sessionId} AND user_id = ${userId}
      `
    } catch (error) {
      console.error('Error updating session:', error)
    }
  }
}

// Enrich extracted companies with validation data
async function enrichCompaniesWithValidation(companies: ExtractedCompany[]): Promise<{
  companies: ExtractedCompany[]
  questions: { companyName: string; question: string; suggestedUrl?: string }[]
}> {
  const enriched: ExtractedCompany[] = []
  const questions: { companyName: string; question: string; suggestedUrl?: string }[] = []

  for (const company of companies) {
    try {
      const validation = await validateCompany(company.name)

      // Merge validation data into company
      const enrichedCompany: ExtractedCompany = {
        ...company,
        normalizedName: validation.company?.normalizedName || company.normalizedName,
        needsValidation: validation.needsConfirmation,
        confidence: Math.max(company.confidence, validation.confidence)
      }

      enriched.push(enrichedCompany)

      // If needs confirmation, add to questions
      if (validation.needsConfirmation && validation.confirmationQuestion) {
        questions.push({
          companyName: company.name,
          question: validation.confirmationQuestion,
          suggestedUrl: validation.suggestedUrl
        })
      }
    } catch (error) {
      console.error(`Error validating company ${company.name}:`, error)
      enriched.push(company)
    }
  }

  return { companies: enriched, questions }
}

// GET /api/extract/pending - Get pending confirmations for user
export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('userId')

  if (!userId) {
    return NextResponse.json({ error: 'userId required' }, { status: 400 })
  }

  try {
    const pending = await sql`
      SELECT id, item_type, extracted_data, confidence, created_at
      FROM repo_pending_items
      WHERE user_id = ${userId} AND status = 'pending'
      ORDER BY confidence DESC, created_at DESC
    `

    return NextResponse.json({ pending })
  } catch (error) {
    console.error('Error fetching pending:', error)
    return NextResponse.json({ error: 'Failed to fetch pending items' }, { status: 500 })
  }
}
