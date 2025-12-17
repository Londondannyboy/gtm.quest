import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'GTM Agencies Sydney 2024 | Top Go-To-Market Consultants Sydney Australia',
  description: 'Find the best GTM agencies in Sydney. Compare top Sydney-based go-to-market consultancies serving Australia and APAC markets.',
  keywords: 'GTM agency Sydney, go-to-market agencies Sydney, GTM consultants Sydney, product launch agency Sydney Australia',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-sydney'
  }
}

export const revalidate = 3600

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default async function GTMAgenciesSydneyPage() {
  const agencies = await getAgenciesForLocation('Sydney')
  const stats = await getLocationStats('Sydney')

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
            <Link href="/gtm-agencies-australia" className="hover:text-white transition-colors">Australia</Link>
            {' '}/{' '}
            <span className="text-white">Sydney</span>
          </nav>
        </div>
      </div>

      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">Sydney, Australia</span>
          <h1 className="text-7xl md:text-8xl font-black text-white mb-6 leading-tight">
            GTM Agencies<br />in Sydney
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {stats.totalAgencies} verified go-to-market agencies in Sydney, Australia's leading tech and business hub.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            <div>
              <div className="text-5xl font-black text-white mb-2">{stats.totalAgencies}</div>
              <div className="text-white/60">Agencies</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">A${Math.round((stats.avgMinBudget * 1.5) / 1000)}K+</div>
              <div className="text-white/60">Avg Min Budget</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">APAC</div>
              <div className="text-white/60">Hub</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">AEST</div>
              <div className="text-white/60">Time Zone</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        {agencies.map((agency, i) => {
          const isTopRanked = !!(agency.global_rank && agency.global_rank <= 3)
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
          <h2 className="text-5xl font-black text-white mb-16">Sydney GTM FAQs</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Why choose a Sydney GTM agency?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Sydney agencies serve as APAC gateways, offering timezone advantages for Asian markets while maintaining
                Western business practices. They excel at launches across Australia, New Zealand, and Southeast Asia.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What Sydney districts have GTM agencies?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Sydney CBD hosts enterprise-focused agencies. Surry Hills and Paddington have creative boutique firms.
                North Sydney attracts B2B specialists, while the eastern suburbs house agencies serving SMB markets.
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
              href="/gtm-agencies-australia"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                Australia (All Cities) →
              </h3>
              <p className="text-white/60">
                Explore GTM agencies across Australia.
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
                Discover NYC GTM agencies.
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
                GTM agencies in London, UK.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Build Your Sydney GTM Strategy
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Create a comprehensive APAC go-to-market strategy from Sydney.
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
