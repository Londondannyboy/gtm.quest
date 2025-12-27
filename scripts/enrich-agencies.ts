/**
 * Agency Enrichment Script
 * Uses Crawl4AI to enrich agency data with:
 * - Extended descriptions from about pages
 * - Employee count
 * - Founded year
 * - Logo URL
 */

import { neon, NeonQueryFunction } from '@neondatabase/serverless'

const CRAWL4AI_URL = 'https://crawl4ai-production-6e85.up.railway.app'
const DATABASE_URL = process.env.DATABASE_URL!

type SqlClient = NeonQueryFunction<false, false>

interface Agency {
  id: number
  slug: string
  name: string
  website: string
  description: string
  employee_count: number | null
  founded_year: number | null
  logo_url: string | null
}

interface CrawlResult {
  success: boolean
  url: string
  markdown?: string
  html?: string
  links?: { internal: string[]; external: string[] }
  metadata?: {
    title?: string
    description?: string
    og_image?: string
  }
}

async function crawlPage(url: string): Promise<CrawlResult | null> {
  try {
    const response = await fetch(`${CRAWL4AI_URL}/scrape`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url,
        word_count_threshold: 20,
        remove_overlay_elements: true
      })
    })

    if (!response.ok) {
      console.error(`  ❌ Failed to crawl ${url}: ${response.status}`)
      return null
    }

    return await response.json()
  } catch (error) {
    console.error(`  ❌ Error crawling ${url}:`, error)
    return null
  }
}

function extractEmployeeCount(text: string): number | null {
  // Common patterns for employee count
  const patterns = [
    /(\d{1,3}(?:,\d{3})*)\+?\s*(?:employees|team members|people|staff)/i,
    /team of (\d+)/i,
    /(\d+)\s*(?:\+|plus)\s*(?:employees|people)/i,
    /headcount[:\s]+(\d+)/i,
  ]

  for (const pattern of patterns) {
    const match = text.match(pattern)
    if (match) {
      const num = parseInt(match[1].replace(/,/g, ''))
      if (num >= 1 && num <= 100000) return num
    }
  }
  return null
}

function extractFoundedYear(text: string): number | null {
  const patterns = [
    /(?:founded|established|started|since)\s*(?:in\s*)?(\d{4})/i,
    /(\d{4})\s*(?:-|–)\s*(?:present|today|now)/i,
    /since\s*(\d{4})/i,
  ]

  for (const pattern of patterns) {
    const match = text.match(pattern)
    if (match) {
      const year = parseInt(match[1])
      if (year >= 1900 && year <= 2025) return year
    }
  }
  return null
}

function extractDescription(markdown: string, currentDesc: string): string {
  // Get first 2-3 meaningful paragraphs, up to ~500 chars
  const paragraphs = markdown
    .split(/\n\n+/)
    .filter(p => p.length > 50 && !p.startsWith('#') && !p.startsWith('|'))
    .slice(0, 3)
    .join(' ')
    .slice(0, 500)

  // Only use if significantly longer than current
  if (paragraphs.length > currentDesc.length * 2 && paragraphs.length > 100) {
    return paragraphs.trim()
  }
  return currentDesc
}

function extractLogoUrl(html: string, baseUrl: string): string | null {
  // Look for logo in common patterns
  const patterns = [
    /<link[^>]+rel=["'](?:icon|apple-touch-icon|shortcut icon)["'][^>]+href=["']([^"']+)["']/i,
    /<img[^>]+(?:class|id)=["'][^"']*logo[^"']*["'][^>]+src=["']([^"']+)["']/i,
    /<img[^>]+src=["']([^"']+logo[^"']+)["']/i,
  ]

  for (const pattern of patterns) {
    const match = html.match(pattern)
    if (match) {
      let logoUrl = match[1]
      // Make absolute URL
      if (logoUrl.startsWith('//')) {
        logoUrl = 'https:' + logoUrl
      } else if (logoUrl.startsWith('/')) {
        const base = new URL(baseUrl)
        logoUrl = `${base.origin}${logoUrl}`
      } else if (!logoUrl.startsWith('http')) {
        logoUrl = new URL(logoUrl, baseUrl).href
      }
      return logoUrl
    }
  }
  return null
}

async function enrichAgency(agency: Agency, sql: SqlClient): Promise<boolean> {
  console.log(`\n🔍 Enriching: ${agency.name} (${agency.website})`)

  // Try about page first, then homepage
  const urlsToTry = [
    agency.website + '/about',
    agency.website + '/about-us',
    agency.website + '/company',
    agency.website
  ]

  let result: CrawlResult | null = null
  let usedUrl = ''

  for (const url of urlsToTry) {
    result = await crawlPage(url)
    if (result?.success && result.markdown && result.markdown.length > 100) {
      usedUrl = url
      break
    }
    // Small delay between attempts
    await new Promise(r => setTimeout(r, 500))
  }

  if (!result?.success || !result.markdown) {
    console.log(`  ⚠️ Could not crawl any page for ${agency.name}`)
    return false
  }

  console.log(`  ✅ Got content from ${usedUrl} (${result.markdown.length} chars)`)

  // Extract data
  const fullText = result.markdown + ' ' + (result.html || '')

  const updates: Record<string, any> = {}

  // Employee count
  if (!agency.employee_count) {
    const employees = extractEmployeeCount(fullText)
    if (employees) {
      updates.employee_count = employees
      console.log(`  📊 Found employee count: ${employees}`)
    }
  }

  // Founded year
  if (!agency.founded_year) {
    const founded = extractFoundedYear(fullText)
    if (founded) {
      updates.founded_year = founded
      console.log(`  📅 Found founded year: ${founded}`)
    }
  }

  // Extended description
  const newDesc = extractDescription(result.markdown, agency.description)
  if (newDesc !== agency.description) {
    updates.description = newDesc
    console.log(`  📝 Extended description: ${agency.description.length} → ${newDesc.length} chars`)
  }

  // Logo URL
  if (!agency.logo_url && result.html) {
    const logo = extractLogoUrl(result.html, agency.website)
    if (logo) {
      updates.logo_url = logo
      console.log(`  🖼️ Found logo: ${logo.slice(0, 60)}...`)
    }
  }

  // Update database if we found anything
  if (Object.keys(updates).length > 0) {
    // Build individual updates since neon uses tagged templates
    if (updates.employee_count !== undefined) {
      await sql`UPDATE companies SET employee_count = ${updates.employee_count} WHERE id = ${agency.id}`
    }
    if (updates.founded_year !== undefined) {
      await sql`UPDATE companies SET founded_year = ${updates.founded_year} WHERE id = ${agency.id}`
    }
    if (updates.description !== undefined) {
      await sql`UPDATE companies SET description = ${updates.description} WHERE id = ${agency.id}`
    }
    if (updates.logo_url !== undefined) {
      await sql`UPDATE companies SET logo_url = ${updates.logo_url} WHERE id = ${agency.id}`
    }
    console.log(`  💾 Updated ${Object.keys(updates).length} fields`)
    return true
  }

  console.log(`  ℹ️ No new data to update`)
  return false
}

async function main() {
  if (!DATABASE_URL) {
    console.error('❌ DATABASE_URL not set')
    process.exit(1)
  }

  const sql = neon(DATABASE_URL)

  // Get agencies that need enrichment
  const agencies = await sql`
    SELECT id, slug, name, website, description, employee_count, founded_year, logo_url
    FROM companies
    WHERE app = 'gtm'
      AND status = 'published'
      AND website IS NOT NULL
      AND website != ''
    ORDER BY global_rank ASC NULLS LAST
    LIMIT 3
  ` as Agency[]

  console.log(`\n🚀 Starting enrichment for ${agencies.length} agencies\n`)
  console.log('=' .repeat(60))

  let enriched = 0
  let failed = 0

  for (const agency of agencies) {
    try {
      const success = await enrichAgency(agency, sql)
      if (success) enriched++
    } catch (error) {
      console.error(`  ❌ Error enriching ${agency.name}:`, error)
      failed++
    }

    // Delay between agencies to be nice to crawl4ai
    await new Promise(r => setTimeout(r, 1000))
  }

  console.log('\n' + '='.repeat(60))
  console.log(`\n✅ Done! Enriched: ${enriched}, Failed: ${failed}, Total: ${agencies.length}`)
}

main().catch(console.error)
