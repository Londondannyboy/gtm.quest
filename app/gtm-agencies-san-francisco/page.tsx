import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesForLocation } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'GTM Agencies San Francisco 2025 | Top Go-To-Market Agencies SF',
  description: 'Find the best GTM agencies in San Francisco. Compare top Silicon Valley go-to-market consultancies serving SF Bay Area tech companies.',
  keywords: 'GTM agency San Francisco, go-to-market agencies SF, GTM consultants Silicon Valley, Bay Area GTM agencies',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-san-francisco'
  }
}

export const revalidate = 3600

export default async function GTMAgenciesSanFranciscoPage() {
  const agencies = await getAgenciesForLocation('San Francisco')

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">GTM Agencies</Link> / <span className="text-white">San Francisco</span>
          </nav>
        </div>
      </div>

      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">San Francisco, California</span>
          <h1 className="text-7xl md:text-8xl font-black text-white mb-6 leading-tight">
            GTM Agencies<br />in San Francisco
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {agencies.length} verified go-to-market agencies serving Silicon Valley and the Bay Area tech ecosystem.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            <div>
              <div className="text-5xl font-black text-white mb-2">{agencies.length}</div>
              <div className="text-white/60">Agencies</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">SaaS</div>
              <div className="text-white/60">Specialization</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">VC</div>
              <div className="text-white/60">Backed Focus</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">Bay Area</div>
              <div className="text-white/60">Market Access</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        {agencies.map((agency, i) => {
          const isTopRanked = !!(agency.global_rank && agency.global_rank <= 3)
          const website = agency.website || '#'

          return (
            <AgencyCard
              key={agency.slug}
              rank={i + 1}
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
              serviceAreas={agency.service_areas || []}
            />
          )
        })}
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-16">San Francisco GTM FAQs</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Why choose a San Francisco GTM agency?</h3>
              <p className="text-lg text-white/70 leading-relaxed">
                SF agencies understand VC-backed startup dynamics, product-led growth, and scaling from seed to Series C. They have deep networks in the Bay Area tech ecosystem and experience with hyper-growth GTM strategies.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">What's the typical cost in San Francisco?</h3>
              <p className="text-lg text-white/70 leading-relaxed">
                San Francisco GTM agencies typically charge $25K-50K+ per month. Project fees range from $75K-300K+ depending on scope and complexity. Premium rates reflect Bay Area expertise and talent costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Build Your Bay Area GTM Strategy</h2>
          <p className="text-xl text-white/90 mb-10">Create a go-to-market strategy for Silicon Valley and beyond.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-12 py-6 text-xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">
            Start Free →
          </Link>
        </div>
      </section>
    </div>
  )
}
