import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Seattle 2025 | Best Seattle B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in Seattle. Compare top Seattle B2B marketing consultancies for Pacific Northwest expansion.',
  keywords: 'B2B marketing agency Seattle, B2B marketing Seattle, best B2B marketing Seattle, top B2B marketing agencies Seattle',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-seattle'
  }
}

export const revalidate = 3600

export default async function B2BMarketingAgencySeattlePage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Seattle')

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
            "name": "B2B Marketing Agencies Seattle",
            "url": "https://gtm.quest/b2b-marketing-agency-seattle"
          })
        }}
      />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Seattle</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?w=1920&q=80"
            alt="B2B marketing agencies Seattle - Seattle skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Seattle</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            B2B Marketing<br/>Agencies Seattle
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Seattle and the Pacific Northwest.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">Seattle Agencies</div>
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
            B2B Marketing in Seattle: Cloud, AI & Enterprise Tech Hub
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Seattle's <a href="https://en.wikipedia.org/wiki/Seattle_metropolitan_area" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">metropolitan economy generates $560.4 billion in gross regional product</a>, powered by Amazon and Microsoft headquarters that anchor the region's dominance in cloud computing, enterprise software, and artificial intelligence. The Puget Sound area employs over 193,000 technology workers, creating one of North America's densest concentrations of B2B tech buyers and enterprise decision-makers outside Silicon Valley.
            </p>
            <p>
              Seattle's B2B landscape reflects the Pacific Northwest's unique business culture that values substance over flash, technical depth over marketing hype, and long-term partnerships over transactional relationships. Companies from <a href="https://en.wikipedia.org/wiki/Amazon_(company)" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Amazon Web Services</a> to enterprise SaaS startups expect B2B marketing that demonstrates clear ROI, speaks to technical stakeholders, and aligns with the region's engineering-driven decision-making processes.
            </p>
            <p>
              Seattle B2B marketing agencies excel at cloud infrastructure marketing, developer-focused content strategies, enterprise software positioning, and the technical storytelling required to win over engineering leaders and technical buyers. They understand how to navigate Seattle's consensus-driven corporate cultures while building scalable demand generation programs that support aggressive growth targets in competitive markets.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            B2B Marketing Agencies in Seattle
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Seattle and the Pacific Northwest.</p>
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
          <h2 className="text-5xl font-black text-white mb-16">Seattle B2B Marketing FAQs</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Why choose a Seattle B2B marketing agency?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Seattle agencies understand enterprise tech marketing, cloud infrastructure positioning, and developer-focused content strategies. They excel at technical storytelling, engineering-led sales cycles, and the data-driven marketing approaches that resonate with Pacific Northwest buyers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What's the typical cost in Seattle?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Seattle B2B marketing agencies typically charge $15K-35K+ per month for retainers. Project fees range from $30K-150K+ depending on scope and campaign complexity. Technical content and developer marketing often command premium rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Seattle B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Seattle and Pacific Northwest markets.</p>
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
