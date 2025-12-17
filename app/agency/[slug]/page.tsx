import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { createDbQuery } from '@/lib/db'
import { AgencyCard } from '@/components/AgencyCard'

interface AgencyPageProps {
  params: Promise<{ slug: string }>
}

interface Agency {
  id: number
  slug: string
  name: string
  description: string
  headquarters: string
  logo_url: string | null
  specializations: string[]
  global_rank: number
  employee_count: number | null
  founded_year: number | null
  website: string | null
  service_areas: string[]
  brand_dev_domain: string | null
  pricing_model: string | null
  min_budget: number | null
}

export async function generateStaticParams() {
  const sql = createDbQuery()
  const agencies = await sql`
    SELECT slug FROM companies
    WHERE app = 'gtm' AND status = 'published'
  `
  return agencies.map((agency: any) => ({ slug: agency.slug }))
}

export async function generateMetadata({ params }: AgencyPageProps): Promise<Metadata> {
  const { slug } = await params
  const sql = createDbQuery()
  const agencies = await sql`
    SELECT * FROM companies
    WHERE slug = ${slug} AND app = 'gtm' AND status = 'published'
  `

  const agency = agencies[0] as Agency | undefined

  if (!agency) {
    return {
      title: 'Agency Not Found | GTM Quest',
    }
  }

  return {
    title: `${agency.name} - GTM Agency Profile | GTM Quest`,
    description: agency.description || `Learn about ${agency.name}, a top go-to-market agency specializing in GTM strategy and product launches.`,
    keywords: [
      agency.name,
      'GTM agency',
      'go-to-market agency',
      ...(agency.specializations || [])
    ].join(', '),
    alternates: {
      canonical: `https://gtm.quest/agency/${agency.slug}`
    }
  }
}

export const revalidate = 3600 // Revalidate every hour

export default async function AgencyPage({ params }: AgencyPageProps) {
  const { slug } = await params
  const sql = createDbQuery()

  const agencies = await sql`
    SELECT * FROM companies
    WHERE slug = ${slug} AND app = 'gtm' AND status = 'published'
  `

  const agency = agencies[0] as Agency | undefined

  if (!agency) {
    notFound()
  }

  // Brand assets now stored in database - no API calls!
  const website = agency.website || '#'
  const isTopRanked = !!(agency.global_rank && agency.global_rank <= 3)

  return (
    <div className="bg-black min-h-screen">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": agency.name,
            "description": agency.description,
            "url": website
          })
        }}
      />

      {/* Header */}
      <div className="border-b border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <a href="/" className="text-white/60 hover:text-white transition-colors">
            ← Back to GTM Agencies
          </a>
        </div>
      </div>

      {/* Agency Card - Reusing the same component from home page */}
      <AgencyCard
        rank={agency.global_rank || 0}
        name={agency.name}
        tagline={agency.description}
        description={[agency.description]}
        bestFor={agency.specializations || []}
        keyServices={[]}
        website={website}
        primaryColor={(agency as any).primary_color || '#8B5CF6'}
        logoUrl={(agency as any).logo_url}
        backdropUrl={(agency as any).backdrop_url}
        isTopRanked={isTopRanked}
        internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined}
      />

      {/* Additional Details Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Service Areas */}
          {agency.service_areas && agency.service_areas.length > 0 && (
            <div>
              <h3 className="text-4xl font-black text-white mb-8">Service Areas</h3>
              <div className="flex flex-wrap gap-3">
                {agency.service_areas.map((area, i) => (
                  <span
                    key={i}
                    className="px-6 py-3 bg-white/10 text-white rounded-lg text-lg"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Pricing Model */}
          {agency.pricing_model && (
            <div>
              <h3 className="text-4xl font-black text-white mb-8">Pricing Model</h3>
              <p className="text-2xl text-white/80">{agency.pricing_model}</p>
              {agency.min_budget && (
                <p className="text-lg text-white/60 mt-4">
                  Minimum Budget: ${agency.min_budget.toLocaleString()}+
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Related Agencies CTA */}
      <div className="border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-black text-white mb-8">
            Explore More GTM Agencies
          </h3>
          <a
            href="/best-gtm-agencies"
            className="inline-block px-12 py-6 text-2xl font-black rounded-xl bg-white text-black hover:bg-gray-200 transition-all"
          >
            View All Agencies →
          </a>
        </div>
      </div>
    </div>
  )
}
