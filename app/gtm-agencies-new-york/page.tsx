import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'GTM Agencies New York 2024 | Top NYC Go-To-Market Consultants',
  description: 'Find the best GTM agencies in New York City. Compare top Manhattan-based go-to-market consultancies serving enterprise B2B and tech markets.',
  keywords: 'GTM agency NYC, go-to-market agencies New York, GTM consultants Manhattan, NYC product launch agency',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-new-york'
  }
}

export const revalidate = 3600

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default async function GTMAgenciesNYCPage() {
  const agencies = await getAgenciesForLocation('New York')
  const stats = await getLocationStats('New York')

  const brandAssets: Record<string, BrandAssets | null> = {}
  for (const agency of agencies) {
    if (agency.brand_dev_domain) {
      try {
        brandAssets[agency.slug] = await fetchBrandFromBrandDev(agency.brand_dev_domain)
        await sleep(500)
      } catch (error) {
        console.error(`Error fetching brand for ${agency.slug}:`, error)
        brandAssets[agency.slug] = null
      }
    }
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' '}/{' '}
            <Link href="/best-gtm-agencies" className="hover:text-white transition-colors">GTM Agencies</Link>
            {' '}/{' '}
            <Link href="/gtm-agencies-us" className="hover:text-white transition-colors">US</Link>
            {' '}/{' '}
            <span className="text-white">New York</span>
          </nav>
        </div>
      </div>

      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">New York City, USA</span>
          <h1 className="text-7xl md:text-8xl font-black text-white mb-6 leading-tight">
            GTM Agencies<br />in NYC
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {stats.totalAgencies} verified go-to-market agencies in New York City, the B2B enterprise capital.
            From Manhattan to Brooklyn's tech scene.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            <div>
              <div className="text-5xl font-black text-white mb-2">{stats.totalAgencies}</div>
              <div className="text-white/60">Agencies</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">${(stats.avgMinBudget / 1000).toFixed(0)}K+</div>
              <div className="text-white/60">Avg Min Budget</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">B2B</div>
              <div className="text-white/60">Specialty</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">EST</div>
              <div className="text-white/60">Time Zone</div>
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
            />
          )
        })}
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-16">NYC GTM FAQs</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Why choose a New York GTM agency?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                NYC agencies excel at enterprise B2B, fintech, and complex sales cycles. They have deep connections to
                Fortune 500 companies and understand sophisticated buyer journeys.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What makes NYC agencies different from SF?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                NYC agencies focus more on enterprise B2B and complex sales, while SF agencies lean toward consumer tech
                and early-stage startups. NYC brings traditional business expertise combined with modern GTM tactics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-12">Other Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/gtm-agencies-us"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                US (All Cities) →
              </h3>
              <p className="text-white/60">
                Explore GTM agencies across all US cities.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-london"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                London →
              </h3>
              <p className="text-white/60">
                Discover GTM agencies in London.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-sydney"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                Sydney →
              </h3>
              <p className="text-white/60">
                GTM agencies in Sydney, Australia.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Build Your NYC GTM Strategy
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Create an enterprise-focused go-to-market strategy for the New York market.
          </p>
          <Link
            href="/planner"
            className="inline-flex items-center justify-center px-12 py-6 text-xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl"
          >
            Start Free →
          </Link>
        </div>
      </section>
    </div>
  )
}
