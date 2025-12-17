import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'GTM Agencies US 2024 | Top Go-To-Market Consultants & Agencies USA',
  description: 'Find the best GTM agencies serving the US market. Compare top American go-to-market consultancies with verified credentials and specializations.',
  keywords: 'GTM agency US, go-to-market agencies USA, GTM consultants America, product launch agency US, B2B GTM strategy USA',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-us'
  }
}

export const revalidate = 3600

export default async function GTMAgenciesUSPage() {
  const agencies = await getAgenciesForLocation('US')
  const stats = await getLocationStats('US')

  return (
    <div className="bg-black text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "GTM Agencies US",
            "description": "Top GTM agencies serving the United States market",
            "url": "https://gtm.quest/gtm-agencies-us"
          })
        }}
      />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' '}/{' '}
            <Link href="/best-gtm-agencies" className="hover:text-white transition-colors">GTM Agencies</Link>
            {' '}/{' '}
            <span className="text-white">US</span>
          </nav>
        </div>
      </div>

      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">United States</span>
          <h1 className="text-7xl md:text-8xl font-black text-white mb-6 leading-tight">
            GTM Agencies<br />in the US
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {stats.totalAgencies} verified go-to-market agencies serving US businesses from Silicon Valley to New York,
            specializing in B2B SaaS, product launches, and growth strategies.
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
              <div className="text-5xl font-black text-white mb-2">50+</div>
              <div className="text-white/60">Cities Served</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">24/7</div>
              <div className="text-white/60">Support</div>
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
          <h2 className="text-5xl font-black text-white mb-16">US GTM FAQs</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Why choose a US-based GTM agency?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                US agencies bring deep expertise in the world's largest tech market, with experience across diverse
                industries and go-to-market models. They understand American buyer behavior, regulatory landscape,
                and have connections to US investors, partners, and customers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What's the typical cost of a GTM agency in the US?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                US GTM agencies typically charge ${(stats.avgMinBudget / 1000).toFixed(0)}K+ per month for retainer work.
                Project fees range from $20K-$100K+ depending on scope. Top-tier agencies serving enterprise clients may
                require $50K+ monthly minimums.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Which US cities have the best GTM agencies?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                New York, San Francisco, Los Angeles, Boston, and Austin are major hubs. SF/Silicon Valley agencies excel
                at tech and SaaS. NYC agencies bring B2B enterprise expertise. Austin and Boston have strong startup ecosystems
                with agencies specialized in early-stage GTM.
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
              href="/gtm-agencies-new-york"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                New York →
              </h3>
              <p className="text-white/60">
                GTM agencies in NYC, the B2B enterprise capital.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-uk"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                United Kingdom →
              </h3>
              <p className="text-white/60">
                Explore GTM agencies in the UK and Europe.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-australia"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                Australia →
              </h3>
              <p className="text-white/60">
                Discover GTM agencies in Australia and APAC.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Build Your US GTM Strategy
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Create a data-driven go-to-market strategy for the American market.
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
