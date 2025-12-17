import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency San Francisco 2025 | Best SF B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in San Francisco. Compare top Silicon Valley B2B marketing consultancies for Bay Area tech companies.',
  keywords: 'B2B marketing agency San Francisco, B2B marketing SF, Silicon Valley B2B marketing, Bay Area marketing agencies',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-san-francisco'
  }
}

export const revalidate = 3600

export default async function B2BMarketingAgencySanFranciscoPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'San Francisco')

  const totalAgencies = agencies.length
  const avgMinBudget = agencies
    .filter(a => a.min_budget)
    .reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000

  const specializations = agencies
    .flatMap(a => a.specializations || [])
    .reduce((acc, spec) => {
      acc[spec] = (acc[spec] || 0) + 1
      return acc
    }, {} as Record<string, number>)

  const topSpecializations = Object.entries(specializations)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "B2B Marketing Agencies San Francisco",
            "url": "https://gtm.quest/b2b-marketing-agency-san-francisco"
          })
        }}
      />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing SF</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1920&q=80"
            alt="B2B marketing agencies San Francisco - Golden Gate Bridge"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">San Francisco, California</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            B2B Marketing<br/>Agencies SF
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Silicon Valley and the Bay Area.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">SF Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">${Math.round(avgMinBudget / 1000)}K+</div>
              <div className="text-white/70 text-lg">Avg Min Budget</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">100%</div>
              <div className="text-white/70 text-lg">Verified</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div>
              <div className="text-white/70 text-lg">Specialties</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            B2B Marketing in San Francisco: SaaS & Tech Capital
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              San Francisco anchors the <a href="https://en.wikipedia.org/wiki/San_Francisco_Bay_Area" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Bay Area economy</a>, home to the world's highest concentration of SaaS unicorns, venture capital firms, and enterprise software companies. The city's <a href="https://en.wikipedia.org/wiki/Technology_companies_in_the_San_Francisco_Bay_Area" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">technology ecosystem</a> generates over $400 billion in economic output annually, making it the premier market for B2B marketing innovation focused on software, developer tools, and cloud infrastructure.
            </p>
            <p>
              San Francisco's unique business culture values product-led growth, design thinking, and rapid experimentation. B2B marketing agencies here pioneered strategies for freemium conversion, bottoms-up enterprise adoption, and developer community building. The city's agencies understand the nuances of selling to technical buyers, navigating complex procurement processes at high-growth companies, and positioning products in saturated competitive markets where differentiation requires surgical precision.
            </p>
            <p>
              The best San Francisco B2B marketing agencies specialize in SaaS go-to-market strategy, product marketing for technical audiences, account-based marketing for enterprise software, and growth marketing for venture-backed companies. They excel at messaging for developer tools, API platforms, infrastructure software, and horizontal SaaS products targeting multiple industries. With direct access to portfolio companies from Sequoia, a16z, and Greylock, SF agencies test strategies at the cutting edge of B2B marketing evolution.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            B2B Marketing Agencies in San Francisco
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Silicon Valley.</p>
        </div>

        <div className="w-full">
          {agencies.map((agency, i) => (
            <AgencyCard
              key={agency.slug}
              rank={i + 1}
              name={agency.name}
              tagline={(agency as any).b2b_description || agency.description}
              description={[(agency as any).b2b_description || agency.description]}
              bestFor={agency.specializations || []}
              keyServices={(agency as any).key_services || agency.specializations || []}
              website={agency.website || '#'}
              primaryColor={(agency as any).primary_color || '#8B5CF6'}
              logoUrl={(agency as any).logo_url}
              backdropUrl={(agency as any).backdrop_url}
              isTopRanked={!!(agency.global_rank && agency.global_rank <= 3)}
              internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined}
              serviceAreas={agency.service_areas || []}
            />
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-16">San Francisco B2B Marketing FAQs</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Why choose a San Francisco B2B marketing agency?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                SF agencies pioneered modern B2B marketing tactics including product-led growth, developer marketing, and bottom-up enterprise adoption. They understand SaaS metrics, venture-backed growth expectations, and marketing to technical buyers better than agencies anywhere else globally.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What's the typical cost in San Francisco?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                San Francisco B2B marketing agencies typically charge $25K-50K+ per month for retainers. Project fees range from $75K-300K+ depending on scope. Premium positioning, experienced teams, and proven SaaS expertise command the industry's highest rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your SF B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Silicon Valley and Bay Area markets.</p>
          <Link
            href="/planner"
            className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl"
          >
            Start Free →
          </Link>
        </div>
      </section>
    </div>
  )
}
