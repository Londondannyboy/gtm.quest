import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { AgencyCard } from '@/components/AgencyCard'

// Map headquarters to city page slugs
function getLocationLinks(headquarters: string): { city?: string; country?: string; b2b?: string; cityName?: string } {
  const hq = headquarters?.toLowerCase() || ''

  const cityMap: Record<string, { city: string; country: string; b2b: string; cityName: string }> = {
    'london': { city: 'gtm-agencies-london', country: 'gtm-agencies-uk', b2b: 'b2b-marketing-agency-london', cityName: 'London' },
    'new york': { city: 'gtm-agencies-new-york', country: 'gtm-agencies-us', b2b: 'b2b-marketing-agency-new-york', cityName: 'New York' },
    'san francisco': { city: 'gtm-agencies-san-francisco', country: 'gtm-agencies-us', b2b: 'b2b-marketing-agency-san-francisco', cityName: 'San Francisco' },
    'boston': { city: 'gtm-agencies-boston', country: 'gtm-agencies-us', b2b: 'b2b-marketing-agency-boston', cityName: 'Boston' },
    'chicago': { city: 'gtm-agencies-chicago', country: 'gtm-agencies-us', b2b: 'b2b-marketing-agency-chicago', cityName: 'Chicago' },
    'austin': { city: 'gtm-agencies-austin', country: 'gtm-agencies-us', b2b: 'b2b-marketing-agency-austin', cityName: 'Austin' },
    'los angeles': { city: 'gtm-agencies-los-angeles', country: 'gtm-agencies-us', b2b: 'b2b-marketing-agency-los-angeles', cityName: 'Los Angeles' },
    'seattle': { city: 'gtm-agencies-seattle', country: 'gtm-agencies-us', b2b: 'b2b-marketing-agency-seattle', cityName: 'Seattle' },
    'berlin': { city: 'gtm-agencies-berlin', country: 'gtm-agencies-europe', b2b: 'b2b-marketing-agency-berlin', cityName: 'Berlin' },
    'munich': { city: 'gtm-agencies-munich', country: 'gtm-agencies-europe', b2b: 'b2b-marketing-agency-munich', cityName: 'Munich' },
    'paris': { city: 'gtm-agencies-paris', country: 'gtm-agencies-europe', b2b: 'b2b-marketing-agency-paris', cityName: 'Paris' },
    'amsterdam': { city: 'gtm-agencies-amsterdam', country: 'gtm-agencies-europe', b2b: 'b2b-marketing-agency-amsterdam', cityName: 'Amsterdam' },
    'barcelona': { city: 'gtm-agencies-barcelona', country: 'gtm-agencies-europe', b2b: 'b2b-marketing-agency-barcelona', cityName: 'Barcelona' },
    'madrid': { city: 'gtm-agencies-madrid', country: 'gtm-agencies-europe', b2b: 'b2b-marketing-agency-madrid', cityName: 'Madrid' },
    'milan': { city: 'gtm-agencies-milan', country: 'gtm-agencies-europe', b2b: 'b2b-marketing-agency-milan', cityName: 'Milan' },
    'rome': { city: 'gtm-agencies-rome', country: 'gtm-agencies-europe', b2b: 'b2b-marketing-agency-rome', cityName: 'Rome' },
    'stockholm': { city: 'gtm-agencies-stockholm', country: 'gtm-agencies-europe', b2b: 'b2b-marketing-agency-stockholm', cityName: 'Stockholm' },
    'sydney': { city: 'gtm-agencies-sydney', country: 'gtm-agencies-australia', b2b: 'b2b-marketing-agency-sydney', cityName: 'Sydney' },
  }

  for (const [key, value] of Object.entries(cityMap)) {
    if (hq.includes(key)) return value
  }

  const usStates = ['al', 'ak', 'az', 'ar', 'ca', 'co', 'ct', 'de', 'fl', 'ga', 'hi', 'id', 'il', 'in', 'ia', 'ks', 'ky', 'la', 'me', 'md', 'ma', 'mi', 'mn', 'ms', 'mo', 'mt', 'ne', 'nv', 'nh', 'nj', 'nm', 'ny', 'nc', 'nd', 'oh', 'ok', 'or', 'pa', 'ri', 'sc', 'sd', 'tn', 'tx', 'ut', 'vt', 'va', 'wa', 'wv', 'wi', 'wy']
  if (usStates.some(state => hq.includes(`, ${state}`) || hq.endsWith(` ${state}`))) {
    return { country: 'gtm-agencies-us' }
  }

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

// Map specializations to internal strategy pages
function getSpecializationLinks(specializations: string[]): { name: string; href: string }[] {
  const specMap: Record<string, string> = {
    'gtm strategy': '/gtm-strategy',
    'go-to-market': '/what-is-gtm',
    'b2b': '/b2b-gtm-strategy',
    'saas': '/gtm-for-startups',
    'startup': '/gtm-for-startups',
    'enterprise': '/enterprise-gtm-strategy',
    'abm': '/b2b-gtm-strategy',
    'account-based': '/b2b-gtm-strategy',
    'demand generation': '/b2b-gtm-strategy',
    'product launch': '/gtm-strategy-examples',
    'positioning': '/gtm-strategy',
    'messaging': '/gtm-strategy-template',
  }

  const links: { name: string; href: string }[] = []
  const seen = new Set<string>()

  for (const spec of specializations) {
    const specLower = spec.toLowerCase()
    for (const [keyword, href] of Object.entries(specMap)) {
      if (specLower.includes(keyword) && !seen.has(href)) {
        seen.add(href)
        links.push({ name: spec, href })
        break
      }
    }
  }

  return links.slice(0, 4)
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
    return { title: 'Agency Not Found | GTM Quest' }
  }

  const title = `${agency.name} - Go-to-Market Agency Profile & Review | GTM Quest`
  const description = agency.description?.slice(0, 155) + '...' ||
    `Learn about ${agency.name}, a go-to-market agency specializing in ${agency.specializations?.slice(0, 3).join(', ') || 'GTM strategy'}.`

  return {
    title,
    description,
    keywords: [
      agency.name,
      `${agency.name} reviews`,
      'GTM agency',
      'go-to-market agency',
      agency.headquarters,
      ...(agency.specializations || [])
    ].join(', '),
    alternates: {
      canonical: `https://gtm.quest/agency/${agency.slug}`
    },
    openGraph: {
      title,
      description,
      url: `https://gtm.quest/agency/${agency.slug}`,
      siteName: 'GTM Quest',
      type: 'profile',
    }
  }
}

export const revalidate = 3600

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

  // Get related agencies (same specialization or location)
  const relatedAgencies = await sql`
    SELECT name, slug, headquarters, specializations
    FROM companies
    WHERE app = 'gtm'
      AND status = 'published'
      AND slug != ${slug}
      AND (
        headquarters ILIKE ${`%${agency.headquarters?.split(',')[0] || ''}%`}
        OR specializations && ${agency.specializations || []}::text[]
      )
    ORDER BY global_rank ASC NULLS LAST
    LIMIT 6
  ` as Agency[]

  const website = agency.website || '#'
  const isTopRanked = !!(agency.global_rank && agency.global_rank <= 3)
  const locationLinks = getLocationLinks(agency.headquarters || '')
  const specLinks = getSpecializationLinks(agency.specializations || [])

  // Enhanced schema markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": agency.name,
    "description": agency.description,
    "url": website,
    "@id": `https://gtm.quest/agency/${agency.slug}`,
    "image": agency.logo_url || undefined,
    "address": agency.headquarters ? {
      "@type": "PostalAddress",
      "addressLocality": agency.headquarters.split(',')[0]?.trim(),
      "addressRegion": agency.headquarters.split(',')[1]?.trim(),
    } : undefined,
    "foundingDate": agency.founded_year ? `${agency.founded_year}` : undefined,
    "numberOfEmployees": agency.employee_count ? {
      "@type": "QuantitativeValue",
      "value": agency.employee_count
    } : undefined,
    "knowsAbout": agency.specializations,
    "areaServed": agency.service_areas,
    "priceRange": agency.min_budget ? `$${agency.min_budget.toLocaleString()}+` : undefined,
  }

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gtm.quest" },
      { "@type": "ListItem", "position": 2, "name": "GTM Agencies", "item": "https://gtm.quest/best-gtm-agencies" },
      { "@type": "ListItem", "position": 3, "name": agency.name, "item": `https://gtm.quest/agency/${agency.slug}` }
    ]
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="text-white/60 hover:text-white">Home</Link></li>
            <li className="text-white/40">/</li>
            <li><Link href="/best-gtm-agencies" className="text-white/60 hover:text-white">GTM Agencies</Link></li>
            {locationLinks.country && (
              <>
                <li className="text-white/40">/</li>
                <li>
                  <Link href={`/${locationLinks.country}`} className="text-white/60 hover:text-white">
                    {locationLinks.country.includes('uk') ? 'UK' : locationLinks.country.includes('us') ? 'US' : locationLinks.country.includes('europe') ? 'Europe' : 'Australia'}
                  </Link>
                </li>
              </>
            )}
            {locationLinks.cityName && (
              <>
                <li className="text-white/40">/</li>
                <li>
                  <Link href={`/${locationLinks.city}`} className="text-white/60 hover:text-white">
                    {locationLinks.cityName}
                  </Link>
                </li>
              </>
            )}
            <li className="text-white/40">/</li>
            <li className="text-white font-medium">{agency.name}</li>
          </ol>
        </div>
      </nav>

      {/* Agency Card */}
      <AgencyCard
        rank={agency.global_rank || 0}
        name={agency.name}
        tagline={agency.description?.split('.')[0] + '.'}
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* About Section */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">About {agency.name}</h2>
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-white/80 leading-relaxed text-lg">
                  {agency.description}
                </p>
              </div>

              {/* External Link to Agency */}
              {agency.website && agency.website !== '#' && (
                <div className="mt-8">
                  <a
                    href={agency.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Visit {agency.name} Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </section>

            {/* Specializations with Links */}
            {agency.specializations && agency.specializations.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">Specializations</h2>
                <div className="flex flex-wrap gap-3">
                  {agency.specializations.map((spec, i) => {
                    const link = specLinks.find(s => s.name === spec)
                    return link ? (
                      <Link
                        key={i}
                        href={link.href}
                        className="px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 rounded-lg transition-colors"
                      >
                        {spec}
                      </Link>
                    ) : (
                      <span key={i} className="px-4 py-2 bg-white/10 text-white/80 rounded-lg">
                        {spec}
                      </span>
                    )
                  })}
                </div>
              </section>
            )}

            {/* Service Areas */}
            {agency.service_areas && agency.service_areas.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">Service Areas</h2>
                <div className="flex flex-wrap gap-3">
                  {agency.service_areas.map((area, i) => (
                    <span key={i} className="px-4 py-2 bg-white/10 text-white/80 rounded-lg">
                      {area}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Related Strategy Content */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Learn More About GTM Strategy</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/gtm-strategy" className="p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors">
                  <h3 className="font-bold text-white mb-1">GTM Strategy Guide</h3>
                  <p className="text-white/60 text-sm">Complete framework for go-to-market success</p>
                </Link>
                <Link href="/gtm-strategy-template" className="p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors">
                  <h3 className="font-bold text-white mb-1">GTM Strategy Template</h3>
                  <p className="text-white/60 text-sm">Free template to build your GTM plan</p>
                </Link>
                <Link href="/gtm-strategy-examples" className="p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors">
                  <h3 className="font-bold text-white mb-1">GTM Examples</h3>
                  <p className="text-white/60 text-sm">Real-world go-to-market case studies</p>
                </Link>
                <Link href="/go-to-market-consultant" className="p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors">
                  <h3 className="font-bold text-white mb-1">Hiring a GTM Consultant</h3>
                  <p className="text-white/60 text-sm">When and how to bring in expert help</p>
                </Link>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">

            {/* Agency Details Card */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Agency Details</h3>
              <dl className="space-y-4">
                {agency.headquarters && (
                  <div>
                    <dt className="text-white/60 text-sm">Headquarters</dt>
                    <dd className="text-white font-medium">{agency.headquarters}</dd>
                  </div>
                )}
                {agency.founded_year && (
                  <div>
                    <dt className="text-white/60 text-sm">Founded</dt>
                    <dd className="text-white font-medium">{agency.founded_year}</dd>
                  </div>
                )}
                {agency.employee_count && (
                  <div>
                    <dt className="text-white/60 text-sm">Team Size</dt>
                    <dd className="text-white font-medium">{agency.employee_count}+ employees</dd>
                  </div>
                )}
                {agency.pricing_model && (
                  <div>
                    <dt className="text-white/60 text-sm">Pricing Model</dt>
                    <dd className="text-white font-medium">{agency.pricing_model}</dd>
                  </div>
                )}
                {agency.min_budget && (
                  <div>
                    <dt className="text-white/60 text-sm">Minimum Budget</dt>
                    <dd className="text-white font-medium">${agency.min_budget.toLocaleString()}+</dd>
                  </div>
                )}
                {agency.global_rank && (
                  <div>
                    <dt className="text-white/60 text-sm">GTM Quest Ranking</dt>
                    <dd className="text-white font-medium">#{agency.global_rank}</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Location Links */}
            {(locationLinks.city || locationLinks.country || locationLinks.b2b) && (
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Find More Agencies</h3>
                <div className="space-y-3">
                  {locationLinks.city && (
                    <Link
                      href={`/${locationLinks.city}`}
                      className="block px-4 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors"
                    >
                      GTM Agencies in {locationLinks.cityName}
                    </Link>
                  )}
                  {locationLinks.b2b && (
                    <Link
                      href={`/${locationLinks.b2b}`}
                      className="block px-4 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors"
                    >
                      B2B Marketing in {locationLinks.cityName}
                    </Link>
                  )}
                  {locationLinks.country && (
                    <Link
                      href={`/${locationLinks.country}`}
                      className="block px-4 py-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg transition-colors"
                    >
                      All {locationLinks.country.includes('uk') ? 'UK' : locationLinks.country.includes('us') ? 'US' : locationLinks.country.includes('europe') ? 'European' : 'Australian'} Agencies
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-2">Need a GTM Strategy?</h3>
              <p className="text-white/70 text-sm mb-4">
                Use our AI-powered planner to create your go-to-market strategy in minutes.
              </p>
              <Link
                href="/planner"
                className="block w-full px-4 py-3 bg-white text-black font-bold rounded-lg text-center hover:bg-gray-200 transition-colors"
              >
                Try GTM Planner Free
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Agencies */}
      {relatedAgencies.length > 0 && (
        <section className="border-t border-white/10 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-8">Similar GTM Agencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedAgencies.map((related) => (
                <Link
                  key={related.slug}
                  href={`/agency/${related.slug}`}
                  className="p-6 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors"
                >
                  <h3 className="font-bold text-white mb-2">{related.name}</h3>
                  <p className="text-white/60 text-sm mb-3">{related.headquarters}</p>
                  <div className="flex flex-wrap gap-2">
                    {related.specializations?.slice(0, 2).map((spec, i) => (
                      <span key={i} className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded">
                        {spec}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            Explore All GTM Agencies
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Browse our curated directory of 200+ go-to-market agencies, consultants, and specialists.
          </p>
          <Link
            href="/best-gtm-agencies"
            className="inline-block px-12 py-6 text-2xl font-black rounded-xl bg-white text-black hover:bg-gray-200 transition-all"
          >
            View All Agencies
          </Link>
        </div>
      </section>
    </div>
  )
}
