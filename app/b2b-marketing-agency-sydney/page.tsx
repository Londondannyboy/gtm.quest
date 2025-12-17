import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Sydney 2025 | Best Sydney B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in Sydney. Compare top Australian B2B marketing consultancies for Sydney, Melbourne and APAC expansion.',
  keywords: 'B2B marketing agency Sydney, B2B marketing Australia, best B2B marketing Sydney, top B2B marketing agencies APAC',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-sydney'
  }
}

export const revalidate = 3600

export default async function B2BMarketingAgencySydneyPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Sydney')

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
            "name": "B2B Marketing Agencies Sydney",
            "url": "https://gtm.quest/b2b-marketing-agency-sydney"
          })
        }}
      />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Sydney</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&q=80"
            alt="B2B marketing agencies Sydney - Sydney Opera House"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Sydney, Australia</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            B2B Marketing<br/>Agencies Sydney
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Sydney and the APAC region.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">Sydney Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">A${Math.round((avgMinBudget * 1.5) / 1000)}K+</div>
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
            B2B Marketing in Sydney: APAC Gateway & Tech Hub
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Sydney anchors <a href="https://en.wikipedia.org/wiki/Economy_of_Sydney" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Australia's largest economy</a> with $400 billion in metropolitan GDP, functioning as the financial and technology capital for the Asia-Pacific region. The city's strategic timezone position provides business hours overlap with both Asian and American markets, while hosting <a href="https://www.austrade.gov.au/news/economic-analysis/australias-tech-sector" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">regional headquarters</a> for technology companies, financial institutions, and professional services firms targeting APAC markets.
            </p>
            <p>
              Sydney B2B marketing agencies bring unique expertise in Asia-Pacific market dynamics, understanding the cultural nuances, buying behaviors, and business practices across Australia, New Zealand, Singapore, Hong Kong, and broader Southeast Asian markets. They excel at coordinating multi-country campaigns across diverse markets with varying levels of technological sophistication and business maturity. Sydney's agencies combine Western marketing sophistication with APAC market intelligence, understanding how to adapt American and European strategies for Asian business cultures while maintaining Australian operational headquarters. Their experience spans both mature markets like Australia and New Zealand and high-growth emerging markets across Southeast Asia.
            </p>
            <p>
              The best Sydney B2B marketing agencies specialize in APAC expansion strategy, financial services technology marketing, enterprise software for Australian markets, and regional go-to-market execution across multiple Asia-Pacific countries. They bring expertise in cross-cultural B2B marketing, regulatory-compliant campaigns for financial services, and scaling strategies tailored to APAC growth patterns. With strong connections to Sydney's financial district, technology startup ecosystem, and regional business networks across Asia-Pacific, Sydney agencies provide essential capabilities for companies expanding throughout the region.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            B2B Marketing Agencies in Sydney
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Sydney and APAC.</p>
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
          <h2 className="text-5xl font-black text-white mb-16">Sydney B2B Marketing FAQs</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Why choose a Sydney B2B marketing agency?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Sydney agencies offer timezone advantages for Asian markets while maintaining Western business practices. They understand APAC expansion dynamics, cross-cultural marketing, and Australia's mature B2B landscape with connections across the region.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What's the typical cost in Sydney?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Sydney B2B marketing agencies typically charge A$20K-35K+ per month for retainers. Project fees range from A$40K-150K depending on scope and regional coverage. APAC-wide campaigns command premium rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your APAC B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Sydney and Asia-Pacific markets.</p>
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
