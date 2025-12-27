import { MetadataRoute } from 'next'
import { createDbQuery } from '@/lib/db'
import { NON_SEO_DIRECTORIES, EXCLUDED_PAGES, STATIC_PAGE_SLUGS } from '@/lib/seo-policy'
import fs from 'fs'
import path from 'path'

export const revalidate = 3600 // Revalidate every hour

// =============================================================================
// SEO POLICY: See lib/seo-policy.ts for full documentation
// =============================================================================

// Use centralized policy for excluded directories
const EXCLUDED_DIRS = NON_SEO_DIRECTORIES

// Convert static page slugs to a Set for fast lookup
const STATIC_SLUGS_SET = new Set(STATIC_PAGE_SLUGS)

// Dynamic route patterns to exclude (contain brackets)
const isDynamicRoute = (dir: string) => dir.includes('[') && dir.includes(']')

// Determine priority based on URL patterns
function getPriority(slug: string): number {
  // Homepage
  if (slug === '') return 1

  // Main agency directory
  if (slug === 'best-gtm-agencies') return 0.95

  // Regional hub pages
  if (slug === 'gtm-agencies-europe' || slug === 'gtm-agencies-uk' || slug === 'gtm-agencies-us' || slug === 'gtm-agencies-australia') return 0.92

  // Major city pages (tier 1)
  if (['gtm-agencies-london', 'gtm-agencies-new-york', 'gtm-agencies-san-francisco', 'gtm-agencies-berlin'].includes(slug)) return 0.9

  // City pages (tier 2)
  if (slug.startsWith('gtm-agencies-')) return 0.85

  // B2B marketing agency pages
  if (slug.startsWith('b2b-marketing-agency-')) return 0.85

  // Strategy content pages
  if (slug.includes('-gtm-strategy') || slug.includes('gtm-strategy')) return 0.88

  // Tool pages
  if (slug === 'planner' || slug === 'chat') return 0.85

  // Article/resource pages
  if (slug.startsWith('go-to-market-') || slug.startsWith('what-is-')) return 0.8

  // Utility pages
  if (['privacy', 'terms', 'contact', 'about'].includes(slug)) return 0.5

  // Default
  return 0.75
}

// Determine change frequency based on URL patterns
function getChangeFrequency(slug: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  // Homepage and main directory
  if (slug === '' || slug === 'best-gtm-agencies') return 'daily'

  // Agency pages (may get new agencies)
  if (slug.startsWith('gtm-agencies-') || slug.startsWith('b2b-marketing-agency-')) return 'weekly'

  // Strategy pages
  if (slug.includes('strategy')) return 'weekly'

  // Legal pages
  if (['privacy', 'terms'].includes(slug)) return 'yearly'

  // Most content pages
  return 'monthly'
}

// Recursively find all page.tsx files in the app directory
function findAllPages(dir: string, baseDir: string): string[] {
  const pages: string[] = []

  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)

      if (entry.isDirectory()) {
        // Skip excluded directories and dynamic routes
        if (EXCLUDED_DIRS.includes(entry.name) || isDynamicRoute(entry.name)) {
          continue
        }

        // Recurse into subdirectories
        pages.push(...findAllPages(fullPath, baseDir))
      } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
        // Found a page - extract the route
        const relativePath = path.relative(baseDir, dir)

        // Skip individually excluded pages
        if (EXCLUDED_PAGES.includes(relativePath)) {
          continue
        }

        pages.push(relativePath)
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error)
  }

  return pages
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gtm.quest'
  const appDir = path.join(process.cwd(), 'app')

  // Auto-discover all static pages
  const discoveredPages = findAllPages(appDir, appDir)

  // Track URLs to prevent duplicates
  const seenUrls = new Set<string>()

  const staticPages: MetadataRoute.Sitemap = discoveredPages.map(slug => {
    const url = slug === '' ? baseUrl : `${baseUrl}/${slug}`
    seenUrls.add(url)
    return {
      url,
      lastModified: new Date(),
      changeFrequency: getChangeFrequency(slug),
      priority: getPriority(slug),
    }
  })

  // Sort by priority (highest first)
  staticPages.sort((a, b) => (b.priority || 0) - (a.priority || 0))

  try {
    const sql = createDbQuery()

    // Fetch all published GTM agencies
    const agencies = await sql`
      SELECT slug, updated_at FROM companies
      WHERE app = 'gtm' AND status = 'published'
      ORDER BY updated_at DESC
      LIMIT 500
    `

    const agencyUrls: MetadataRoute.Sitemap = agencies
      .filter((agency: any) => {
        const url = `${baseUrl}/agency/${agency.slug}`
        if (seenUrls.has(url)) return false
        seenUrls.add(url)
        return true
      })
      .map((agency: any) => ({
        url: `${baseUrl}/agency/${agency.slug}`,
        lastModified: agency.updated_at ? new Date(agency.updated_at) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))

    // Fetch all published GTM articles/resources
    const articles = await sql`
      SELECT slug, published_at FROM articles
      WHERE status = 'published' AND app = 'gtm'
      ORDER BY published_at DESC
      LIMIT 500
    `

    // Only add articles that don't already exist as static pages
    const articleUrls: MetadataRoute.Sitemap = articles
      .filter((article: any) => {
        if (STATIC_SLUGS_SET.has(article.slug)) return false
        const url = `${baseUrl}/${article.slug}`
        if (seenUrls.has(url)) return false
        seenUrls.add(url)
        return true
      })
      .map((article: any) => ({
        url: `${baseUrl}/${article.slug}`,
        lastModified: article.published_at ? new Date(article.published_at) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))

    // Log sitemap stats for monitoring
    console.log(`[Sitemap] Generated: ${staticPages.length} static, ${agencyUrls.length} agencies, ${articleUrls.length} articles`)

    return [...staticPages, ...agencyUrls, ...articleUrls]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return staticPages
  }
}
