import { MetadataRoute } from 'next'
import { createDbQuery } from '@/lib/db'

export const revalidate = 3600 // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gtm.quest'

  // Static pages for GTM Quest
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Articles page
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // New content pages - Tier 1
    {
      url: `${baseUrl}/go-to-market-consultant`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/gtm-strategy-template`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/gtm-strategy-examples`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // New content pages - Tier 2
    {
      url: `${baseUrl}/gtm-consultant-vs-agency-vs-inhouse`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/gtm-for-startups`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/b2b-gtm-strategy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/what-is-gtm`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // New content pages - Tier 3
    {
      url: `${baseUrl}/mckinsey-gtm-strategy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/seo-checklist`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    // Additional vertical pages
    {
      url: `${baseUrl}/gtm-tools-comparison`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/gtm-success-stories`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hardware-gtm-strategy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/enterprise-gtm-strategy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/marketplace-gtm-strategy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Existing pages
    {
      url: `${baseUrl}/gtm-strategy`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/product-launch`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/saas-gtm-plan`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/chat`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/agencies`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    // B2B Marketing Agency Country Pages - 28 markets
    {
      url: `${baseUrl}/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-france-top-b2b-marketing-agencies-france`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-canada-top-b2b-marketing-agencies-canada`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-australia-top-b2b-marketing-agencies-australia`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-singapore-top-b2b-marketing-agencies-singapore`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.78,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-netherlands-top-b2b-marketing-agencies-netherlands`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.78,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-czech-republic-top-b2b-marketing-agencies-czech-republic`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-austria-top-b2b-marketing-agencies-austria`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-belgium-top-b2b-marketing-agencies-belgium`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-denmark-top-b2b-marketing-agencies-denmark`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-finland-top-b2b-marketing-agencies-finland`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-hong-kong-top-b2b-marketing-agencies-hong-kong`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-hungary-top-b2b-marketing-agencies-hungary`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-ireland-top-b2b-marketing-agencies-ireland`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-italy-top-b2b-marketing-agencies-italy`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-japan-top-b2b-marketing-agencies-japan`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-malaysia-top-b2b-marketing-agencies-malaysia`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-new-zealand-top-b2b-marketing-agencies-new-zealand`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-norway-top-b2b-marketing-agencies-norway`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-poland-top-b2b-marketing-agencies-poland`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-saudi-arabia-top-b2b-marketing-agencies-saudi-arabia`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-south-korea-top-b2b-marketing-agencies-south-korea`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-spain-top-b2b-marketing-agencies-spain`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-sweden-top-b2b-marketing-agencies-sweden`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-switzerland-top-b2b-marketing-agencies-switzerland`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-b2b-marketing-agency-uae-top-b2b-marketing-agencies-uae`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    // GTM Agency Country Pages - 28 markets
    {
      url: `${baseUrl}/best-gtm-agency-us-top-gtm-agencies-us`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/best-gtm-agency-uk-top-gtm-agencies-uk`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/best-gtm-agency-germany-top-gtm-agencies-germany`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-gtm-agency-france-top-gtm-agencies-france`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-gtm-agency-canada-top-gtm-agencies-canada`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-gtm-agency-australia-top-gtm-agencies-australia`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-gtm-agency-singapore-top-gtm-agencies-singapore`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.78,
    },
    {
      url: `${baseUrl}/best-gtm-agency-netherlands-top-gtm-agencies-netherlands`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.78,
    },
    {
      url: `${baseUrl}/best-gtm-agency-czech-republic-top-gtm-agencies-czech-republic`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-gtm-agency-austria-top-gtm-agencies-austria`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-gtm-agency-belgium-top-gtm-agencies-belgium`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-gtm-agency-denmark-top-gtm-agencies-denmark`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-gtm-agency-finland-top-gtm-agencies-finland`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-gtm-agency-hong-kong-top-gtm-agencies-hong-kong`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-gtm-agency-hungary-top-gtm-agencies-hungary`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-gtm-agency-ireland-top-gtm-agencies-ireland`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-gtm-agency-italy-top-gtm-agencies-italy`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-gtm-agency-japan-top-gtm-agencies-japan`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-gtm-agency-malaysia-top-gtm-agencies-malaysia`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-gtm-agency-new-zealand-top-gtm-agencies-new-zealand`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-gtm-agency-norway-top-gtm-agencies-norway`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-gtm-agency-poland-top-gtm-agencies-poland`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-gtm-agency-saudi-arabia-top-gtm-agencies-saudi-arabia`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-gtm-agency-south-korea-top-gtm-agencies-south-korea`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-gtm-agency-spain-top-gtm-agencies-spain`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-gtm-agency-sweden-top-gtm-agencies-sweden`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-gtm-agency-switzerland-top-gtm-agencies-switzerland`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-gtm-agency-uae-top-gtm-agencies-uae`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  try {
    const sql = createDbQuery()

    // Fetch all published GTM agencies
    const agencies = await sql`
      SELECT slug, updated_at FROM companies
      WHERE app = 'gtm' AND status = 'published'
      ORDER BY updated_at DESC
      LIMIT 500
    `

    const agencyUrls: MetadataRoute.Sitemap = agencies.map((agency: any) => ({
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

    const articleUrls: MetadataRoute.Sitemap = articles.map((article: any) => ({
      url: `${baseUrl}/${article.slug}`,
      lastModified: article.published_at ? new Date(article.published_at) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    return [...staticPages, ...agencyUrls, ...articleUrls]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Return static pages if database query fails
    return staticPages
  }
}
