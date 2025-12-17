import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Chicago 2025 | Best Chicago B2B Marketing Agencies',
  description: 'Best B2B marketing agencies in Chicago. Top Chicago B2B marketing consultancies for manufacturing, logistics, and enterprise.',
  keywords: 'B2B marketing Chicago, B2B marketing agency Chicago',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-chicago'
  }
}

export const revalidate = 3600

export default async function B2BMarketingAgencyChicagoPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Chicago')

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
            "name": "B2B Marketing Agencies Chicago",
            "url": "https://gtm.quest/b2b-marketing-agency-chicago"
          })
        }}
      />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Chicago</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80"
            alt="B2B marketing agencies Chicago - Chicago skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Chicago, Illinois</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            B2B Marketing<br/>Agencies Chicago
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Chicago and the Midwest.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">Chicago Agencies</div>
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
            B2B Marketing in Chicago: Manufacturing, Logistics & Enterprise
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Chicago serves as the <a href="https://en.wikipedia.org/wiki/Economy_of_Chicago" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">third-largest metropolitan economy</a> in the United States with $780 billion in GDP, anchored by its strategic position as America's logistics and manufacturing hub. The city leads in <a href="https://en.wikipedia.org/wiki/Transportation_in_Chicago" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">transportation infrastructure</a>, food processing, industrial equipment, and business services, creating substantial demand for B2B marketing serving traditional enterprise sectors and industrial technology companies.
            </p>
            <p>
              Chicago B2B marketing agencies bring pragmatic, results-oriented expertise shaped by the city's industrial heritage and Midwest business culture. They excel at marketing industrial equipment, supply chain software, manufacturing technology, and enterprise services to practical, ROI-focused buyers who value substance over style. Chicago agencies understand multi-location rollouts, distributor marketing, channel partner enablement, and the long relationship-building cycles typical in manufacturing and industrial sectors. Their approach emphasizes measurable business outcomes, straightforward value propositions, and marketing strategies aligned with sales team capabilities.
            </p>
            <p>
              The top Chicago B2B marketing agencies specialize in industrial marketing, supply chain technology, manufacturing software, logistics platforms, and professional services marketing. They bring deep expertise in trade show marketing, technical content development, dealer and distributor programs, and enterprise sales enablement. With strong connections to major industrial companies, consulting firms, and mid-market enterprises headquartered across the Midwest, Chicago agencies understand how to market effectively to practical, conservative buyers while driving substantial revenue growth.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            B2B Marketing Agencies in Chicago
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Chicago and the Midwest.</p>
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
          <h2 className="text-5xl font-black text-white mb-16">Chicago B2B Marketing FAQs</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Why choose a Chicago B2B marketing agency?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Chicago agencies bring pragmatic, ROI-focused expertise shaped by Midwest business culture. They excel at industrial marketing, manufacturing technology, logistics platforms, and practical B2B campaigns that resonate with conservative, results-driven buyers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What's the typical cost in Chicago?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Chicago B2B marketing agencies typically charge $18K-32K+ per month for retainers. Project fees range from $40K-150K depending on scope and geographic reach across the Midwest. Industrial and manufacturing campaigns often include trade show support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Chicago B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Chicago and Midwest markets.</p>
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
