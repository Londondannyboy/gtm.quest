import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

// Pydantic AI Gateway for company knowledge
const GATEWAY_URL = process.env.GATEWAY_URL || 'https://gateway.pydantic.dev/proxy/chat/'
const GATEWAY_API_KEY = process.env.PYDANTIC_AI_GATEWAY_API_KEY || process.env.PYDANTIC_GATEWAY_API_KEY

export interface CompanyValidationResult {
  found: boolean
  source: 'database' | 'ai_knowledge' | 'web_search' | 'not_found'
  company?: {
    id?: number
    name: string
    normalizedName: string
    domain?: string
    industry?: string
    size?: string
    headquarters?: string
    linkedinUrl?: string
    description?: string
    logo?: string
    validated: boolean
  }
  needsConfirmation: boolean
  suggestedUrl?: string
  confidence: number
  confirmationQuestion?: string // Question to ask user
}

// Step 1: Check if company exists in database
export async function checkCompanyInDatabase(companyName: string): Promise<CompanyValidationResult | null> {
  const normalizedName = normalizeCompanyName(companyName)

  try {
    const [existing] = await sql`
      SELECT id, name, normalized_name, domain, industry, size_range,
             headquarters, linkedin_url, validated, logo_url
      FROM employer_companies
      WHERE normalized_name = ${normalizedName}
         OR LOWER(name) = ${companyName.toLowerCase()}
      LIMIT 1
    `

    if (existing) {
      return {
        found: true,
        source: 'database',
        company: {
          id: existing.id,
          name: existing.name,
          normalizedName: existing.normalized_name,
          domain: existing.domain,
          industry: existing.industry,
          size: existing.size_range,
          headquarters: existing.headquarters,
          linkedinUrl: existing.linkedin_url,
          logo: existing.logo_url,
          validated: existing.validated
        },
        needsConfirmation: !existing.validated,
        suggestedUrl: existing.domain,
        confidence: existing.validated ? 0.95 : 0.7,
        confirmationQuestion: existing.validated
          ? undefined
          : `I have ${existing.name} in our records with website ${existing.domain}. Is that correct?`
      }
    }

    return null
  } catch (error) {
    console.error('Database company check error:', error)
    return null
  }
}

// Step 2: Ask AI model about the company (GPT-4 knows most companies)
export async function lookupCompanyViaAI(companyName: string): Promise<CompanyValidationResult> {
  if (!GATEWAY_API_KEY) {
    return {
      found: false,
      source: 'not_found',
      needsConfirmation: true,
      confidence: 0
    }
  }

  try {
    const response = await fetch(GATEWAY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GATEWAY_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are a company information lookup assistant. Given a company name, provide accurate information about it.

Always respond with valid JSON in this exact format:
{
  "known": true/false,
  "confidence": 0.0-1.0,
  "name": "Official company name",
  "domain": "company.com (without https://)",
  "industry": "Industry sector",
  "headquarters": "City, Country",
  "size": "Company size estimate (e.g., '1000-5000 employees')",
  "description": "One sentence about what they do"
}

If you're not confident about a company, set known=false and confidence=0.`
          },
          {
            role: 'user',
            content: `What do you know about the company "${companyName}"? Provide their official website domain and key info.`
          }
        ],
        temperature: 0.1,
        max_tokens: 500,
        response_format: { type: 'json_object' }
      })
    })

    if (!response.ok) {
      console.error('AI lookup error:', await response.text())
      return {
        found: false,
        source: 'not_found',
        needsConfirmation: true,
        confidence: 0
      }
    }

    const data = await response.json()
    const text = data.choices?.[0]?.message?.content

    if (!text) {
      return {
        found: false,
        source: 'not_found',
        needsConfirmation: true,
        confidence: 0
      }
    }

    const aiResult = JSON.parse(text)

    if (!aiResult.known || aiResult.confidence < 0.5) {
      // AI doesn't know this company well - might need web search
      return {
        found: false,
        source: 'not_found',
        needsConfirmation: true,
        confidence: aiResult.confidence || 0,
        confirmationQuestion: `I'm not sure about "${companyName}". Can you tell me their website?`
      }
    }

    return {
      found: true,
      source: 'ai_knowledge',
      company: {
        name: aiResult.name || companyName,
        normalizedName: normalizeCompanyName(aiResult.name || companyName),
        domain: aiResult.domain,
        industry: aiResult.industry,
        size: aiResult.size,
        headquarters: aiResult.headquarters,
        description: aiResult.description,
        validated: false
      },
      needsConfirmation: true,
      suggestedUrl: aiResult.domain,
      confidence: aiResult.confidence,
      confirmationQuestion: `You mentioned ${companyName}. I believe their website is ${aiResult.domain} - is that right?`
    }
  } catch (error) {
    console.error('AI company lookup error:', error)
    return {
      found: false,
      source: 'not_found',
      needsConfirmation: true,
      confidence: 0
    }
  }
}

// Step 3: Web search fallback via Serper.dev - fast Google search
export async function searchCompanyViaSerper(companyName: string): Promise<CompanyValidationResult> {
  const serperApiKey = process.env.SERPER_API_KEY

  if (!serperApiKey) {
    // No Serper configured - ask user directly
    return {
      found: false,
      source: 'not_found',
      needsConfirmation: true,
      confidence: 0,
      confirmationQuestion: `I don't have information about "${companyName}". What's their website?`
    }
  }

  try {
    // Serper.dev API - very fast Google search
    const response = await fetch('https://google.serper.dev/search', {
      method: 'POST',
      headers: {
        'X-API-KEY': serperApiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        q: `${companyName} company official website`,
        num: 5
      })
    })

    if (!response.ok) {
      console.error('Serper error:', await response.text())
      return {
        found: false,
        source: 'not_found',
        needsConfirmation: true,
        confidence: 0
      }
    }

    const data = await response.json()
    const organicResults = data.organic || []

    // Also check knowledge graph if available
    const knowledgeGraph = data.knowledgeGraph
    if (knowledgeGraph?.website) {
      const domain = extractDomain(knowledgeGraph.website)
      return {
        found: true,
        source: 'web_search',
        company: {
          name: knowledgeGraph.title || companyName,
          normalizedName: normalizeCompanyName(companyName),
          domain: domain,
          description: knowledgeGraph.description,
          validated: false
        },
        needsConfirmation: true,
        suggestedUrl: domain,
        confidence: 0.85, // Knowledge graph is usually accurate
        confirmationQuestion: `You mentioned ${companyName}. Their website is ${domain} - is that right?`
      }
    }

    if (organicResults.length === 0) {
      return {
        found: false,
        source: 'not_found',
        needsConfirmation: true,
        confidence: 0,
        confirmationQuestion: `I couldn't find "${companyName}" online. Can you tell me their website?`
      }
    }

    // Get the first result's domain
    const topResult = organicResults[0]
    const domain = extractDomain(topResult.link)

    return {
      found: true,
      source: 'web_search',
      company: {
        name: companyName,
        normalizedName: normalizeCompanyName(companyName),
        domain: domain,
        description: topResult.snippet,
        validated: false
      },
      needsConfirmation: true,
      suggestedUrl: domain,
      confidence: 0.6,
      confirmationQuestion: `I found ${companyName} at ${domain}. Is that their website?`
    }
  } catch (error) {
    console.error('Serper error:', error)
    return {
      found: false,
      source: 'not_found',
      needsConfirmation: true,
      confidence: 0
    }
  }
}

// After user confirms, save the company
export async function confirmAndSaveCompany(
  companyName: string,
  confirmedDomain: string,
  additionalInfo?: {
    industry?: string
    size?: string
    headquarters?: string
  }
): Promise<{ success: boolean; companyId?: number; error?: string }> {
  const normalizedName = normalizeCompanyName(companyName)

  try {
    const [result] = await sql`
      INSERT INTO employer_companies (
        name, normalized_name, domain, industry, size_range,
        headquarters, validated, validated_at, validation_source
      )
      VALUES (
        ${companyName},
        ${normalizedName},
        ${confirmedDomain},
        ${additionalInfo?.industry || null},
        ${additionalInfo?.size || null},
        ${additionalInfo?.headquarters || null},
        true,
        NOW(),
        'user_confirmed'
      )
      ON CONFLICT (normalized_name) DO UPDATE SET
        domain = COALESCE(${confirmedDomain}, employer_companies.domain),
        industry = COALESCE(${additionalInfo?.industry || null}, employer_companies.industry),
        validated = true,
        validated_at = NOW()
      RETURNING id
    `

    return { success: true, companyId: result.id }
  } catch (error) {
    console.error('Error saving company:', error)
    return { success: false, error: String(error) }
  }
}

// Trigger full company scrape after confirmation (for enrichment)
export async function triggerCompanyEnrichment(
  companyId: number,
  domain: string
): Promise<{ success: boolean; jobId?: string }> {
  const crawlUrl = process.env.CRAWL4AI_SERVICE_URL

  if (!crawlUrl) {
    return { success: false }
  }

  try {
    const response = await fetch(`${crawlUrl}/crawl`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url: `https://${domain}`,
        companyId: companyId,
        extractFields: ['description', 'industry', 'size', 'headquarters', 'linkedin', 'logo']
      })
    })

    if (response.ok) {
      const data = await response.json()
      return { success: true, jobId: data.jobId }
    }
  } catch (error) {
    console.error('Company enrichment error:', error)
  }

  return { success: false }
}

// Main validation function - orchestrates the flow
export async function validateCompany(companyName: string): Promise<CompanyValidationResult> {
  // Step 1: Check database first (instant)
  const dbResult = await checkCompanyInDatabase(companyName)
  if (dbResult) {
    return dbResult
  }

  // Step 2: Ask AI model - knows most major companies (fast)
  const aiResult = await lookupCompanyViaAI(companyName)
  if (aiResult.found && aiResult.confidence >= 0.7) {
    return aiResult
  }

  // Step 3: Web search via Serper.dev for unknown companies (fast)
  const webResult = await searchCompanyViaSerper(companyName)
  if (webResult.found) {
    return webResult
  }

  // Step 4: Can't find - ask user to spell out URL
  return {
    found: false,
    source: 'not_found',
    needsConfirmation: true,
    confidence: 0,
    confirmationQuestion: `I don't recognize "${companyName}". Could you spell out their website for me?`
  }
}

// Helper: Normalize company name for matching
function normalizeCompanyName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/\b(ltd|limited|inc|incorporated|llc|plc|corp|corporation|co|company)\b/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .trim()
}

// Helper: Extract domain from URL
function extractDomain(url: string): string {
  try {
    const parsed = new URL(url)
    return parsed.hostname.replace(/^www\./, '')
  } catch {
    return url.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0]
  }
}
