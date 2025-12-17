import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { fetchBrandFromBrandDev, BrandAssets } from '@/lib/brand-api'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'GTM Agencies London 2024 | Top Go-To-Market Consultants London UK',
  description: 'Find the best GTM agencies in London. Compare top London-based go-to-market consultancies serving UK and European markets.',
  keywords: 'GTM agency London, go-to-market agencies London, GTM consultants London, product launch agency London, B2B GTM strategy London',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-london'
  }
}

export const revalidate = 3600

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default async function GTMAgenciesLondonPage() {
  const agencies = await getAgenciesForLocation('London')
  const stats = await getLocationStats('London')

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
            <Link href="/gtm-agencies-uk" className="hover:text-white transition-colors">UK</Link>
            {' '}/{' '}
            <span className="text-white">London</span>
          </nav>
        </div>
      </div>

      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">London, United Kingdom</span>
          <h1 className="text-7xl md:text-8xl font-black text-white mb-6 leading-tight">
            GTM Agencies<br />in London
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {stats.totalAgencies} verified go-to-market agencies in London, Europe's leading tech hub.
            From Shoreditch startups to Canary Wharf enterprises.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            <div>
              <div className="text-5xl font-black text-white mb-2">{stats.totalAgencies}</div>
              <div className="text-white/60">Agencies</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">£{(stats.avgMinBudget / 1000).toFixed(0)}K+</div>
              <div className="text-white/60">Avg Min Budget</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">EMEA</div>
              <div className="text-white/60">Market Access</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">GMT</div>
              <div className="text-white/60">Time Zone</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        {agencies.map((agency, i) => {
          const isTopRanked = agency.global_rank && agency.global_rank <= 3
          const website = agency.website || (brandAssets[agency.slug]?.domain ? `https://${brandAssets[agency.slug]?.domain}` : '#')

          return (
            <AgencyCard
              key={agency.slug}
              rank={i + 1}
              name={agency.name}
              tagline={brandAssets[agency.slug]?.slogan || agency.description}
              description={[agency.description]}
              bestFor={agency.specializations || []}
              keyServices={[]}
              website={website}
              brandAssets={brandAssets[agency.slug]}
              isTopRanked={isTopRanked}
              internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined}
            />
          )
        })}
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-16">London GTM FAQs</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Why choose a London-based GTM agency?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                London agencies combine European market access with global reach. They understand UK and EU regulations,
                have strong fintech and enterprise software expertise, and offer easier timezone coordination for European expansion.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What London districts have GTM agencies?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Shoreditch and Old Street (Silicon Roundabout) host startup-focused agencies. Canary Wharf and City of London
                have enterprise B2B specialists. Clerkenwell and King's Cross attract creative GTM agencies with design-led approaches.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Do London agencies work with US companies?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Yes, many London agencies serve US companies expanding to Europe or seeking European market insights.
                They're particularly valuable for transatlantic launches and understanding European buyer behavior.
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
              href="/gtm-agencies-uk"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                UK (All Cities) →
              </h3>
              <p className="text-white/60">
                Explore GTM agencies across the entire UK.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-us"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                United States →
              </h3>
              <p className="text-white/60">
                Discover US-based GTM agencies.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-new-york"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                New York →
              </h3>
              <p className="text-white/60">
                GTM agencies in NYC.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Build Your London GTM Strategy
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Create a comprehensive European market entry strategy.
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
