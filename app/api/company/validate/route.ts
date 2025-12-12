import { NextRequest, NextResponse } from 'next/server'
import { validateCompany, confirmAndSaveCompany, triggerCompanyEnrichment } from '@/lib/company-validation'

// POST /api/company/validate - Validate a company name
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { companyName, action, confirmedDomain, userId } = body

    if (!companyName) {
      return NextResponse.json({ error: 'companyName required' }, { status: 400 })
    }

    // Action: validate - Look up company
    if (!action || action === 'validate') {
      const result = await validateCompany(companyName)
      return NextResponse.json(result)
    }

    // Action: confirm - User confirmed the company info
    if (action === 'confirm') {
      if (!confirmedDomain) {
        return NextResponse.json({ error: 'confirmedDomain required' }, { status: 400 })
      }

      const saveResult = await confirmAndSaveCompany(companyName, confirmedDomain)

      if (saveResult.success && saveResult.companyId) {
        // Trigger background enrichment (non-blocking)
        triggerCompanyEnrichment(saveResult.companyId, confirmedDomain).catch(err => {
          console.error('Enrichment trigger error:', err)
        })
      }

      return NextResponse.json(saveResult)
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    console.error('Company validation error:', error)
    return NextResponse.json(
      { error: 'Validation failed', details: String(error) },
      { status: 500 }
    )
  }
}
