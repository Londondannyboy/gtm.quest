import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { AgencyCard } from '@/components/AgencyCard'

// Map headquarters to city page slugs
function getLocationLinks(headquarters: string): { city?: string; country?: string; b2b?: string } {
  const hq = headquarters?.toLowerCase() || ''

  const cityMap: Record<string, { city: string; country: string; b2b: string }> = {
    // UK
    'london': { city: 'gtm-agencies-london', country: 'gtm-agencies-uk', b2b: 'b2b-marketing-agency-london' },
    // US Major Cities
    'new york': { city: 'gtm-agencies-new-york', country: 'gtm-agencies-us', b2b: 'b2b-marketing-agency-new-york' },
    'san francisco': { city: 'gtm-agencies-san-francisco', country: 'gtm-agencies-us', b2b: 'b2b-marketing-agency-san-francisco' },
    'boston': { city: 'gtm-agencies-boston', country: 'gtm-agencies-us', b2b: 'b2b-marketing-agency-boston' },
    'chicago': { city: 'gtm-agencies-chicago', country: 'gtm-agencies-us', b2b: 'b2b-marketing-agency-chicago' },
    'austin': { city: 'gtm-agencies-austin', country: 'gtm-agencies-us', b2b: 'b2b-marketing-agency-austin' },
    'los angeles': { city: 'gtm-agencies-los-angeles', country: 'gtm-agencies-us', b2b: 'b2b-marketing-agency-los-angeles' },
    'seattle': { city: 'gtm-agencies-seattle', country: 'gtm-agencies-us', b2b: 'b2b-marketing-agency-seattle' },
    // Europe
    'berlin': { city: 'gtm-agencies-berlin', country: 'gtm-agencies-europe', b2b: 'b2b-marketing-agency-berlin' },
    'munich': { city: 'gtm-agencies-munich', country: 'gtm-agencies-europe', b2b: 'b2b-marketing-agency-munich' },
    'paris': { city: 'gtm-agencies-paris', country: 'gtm-agencies-europe', b2b: 'b2b-marketing-agency-paris' },
    'amsterdam': { city: 'gtm-agencies-amsterdam', country: 'gtm-agencies-europe', b2b: 'b2b-marketing-agency-amsterdam' },
    'barcelona': { city: 'gtm-agencies-barcelona', country: 'gtm-agencies-europe', b2b: 'b2b-marketing-agency-barcelona' },
    'madrid': { city: 'gtm-agencies-madrid', country: 'gtm-agencies-europe', b2b: 'b2b-marketing-agency-madrid' },
    'milan': { city: 'gtm-agencies-milan', country: 'gtm-agencies-europe', b2b: 'b2b-marketing-agency-milan' },
    'rome': { city: 'gtm-agencies-rome', country: 'gtm-agencies-europe', b2b: 'b2b-marketing-agency-rome' },
    'stockholm': { city: 'gtm-agencies-stockholm', country: 'gtm-agencies-europe', b2b: 'b2b-marketing-agency-stockholm' },
    // Australia
    'sydney': { city: 'gtm-agencies-sydney', country: 'gtm-agencies-australia', b2b: 'b2b-marketing-agency-sydney' },
  }

  // First check for city matches (more specific)
  for (const [key, value] of Object.entries(cityMap)) {
    if (hq.includes(key)) return value
  }

  // US state abbreviations map to country-level (fallback for non-major cities)
  const usStates = ['al', 'ak', 'az', 'ar', 'ca', 'co', 'ct', 'de', 'fl', 'ga', 'hi', 'id', 'il', 'in', 'ia', 'ks', 'ky', 'la', 'me', 'md', 'ma', 'mi', 'mn', 'ms', 'mo', 'mt', 'ne', 'nv', 'nh', 'nj', 'nm', 'ny', 'nc', 'nd', 'oh', 'ok', 'or', 'pa', 'ri', 'sc', 'sd', 'tn', 'tx', 'ut', 'vt', 'va', 'wa', 'wv', 'wi', 'wy']
  if (usStates.some(state => hq.includes(`, ${state}`) || hq.endsWith(` ${state}`))) {
    return { country: 'gtm-agencies-us' }
  }

  // Fallback to country detection
  if (hq.includes('uk') || hq.includes('united kingdom') || hq.includes('england')) {
    return { country: 'gtm-agencies-uk' }
  }
  if (hq.includes('us') || hq.includes('usa') || hq.includes('united states') || hq.includes('america')) {
    return { country: 'gtm-agencies-us' }
  }
  if (hq.includes('australia')) {
    return { country: 'gtm-agencies-australia' }
  }

  return {}
}

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
  const locationLinks = getLocationLinks(agency.headquarters || '')

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

      {/* Location-Based Links for SEO */}
      {(locationLinks.city || locationLinks.country || locationLinks.b2b) && (
        <div className="border-t border-white/10 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-white mb-6">
              Find More Agencies in {agency.headquarters}
            </h3>
            <div className="flex flex-wrap gap-4">
              {locationLinks.city && (
                <Link
                  href={`/${locationLinks.city}`}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                >
                  GTM Agencies in {agency.headquarters.split(',')[0]}
                </Link>
              )}
              {locationLinks.b2b && (
                <Link
                  href={`/${locationLinks.b2b}`}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                >
                  B2B Marketing Agencies in {agency.headquarters.split(',')[0]}
                </Link>
              )}
              {locationLinks.country && (
                <Link
                  href={`/${locationLinks.country}`}
                  className="px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg transition-colors"
                >
                  All {locationLinks.country.includes('uk') ? 'UK' : locationLinks.country.includes('us') ? 'US' : locationLinks.country.includes('europe') ? 'European' : 'Australian'} Agencies
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

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
