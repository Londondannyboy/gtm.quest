import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'GTM Agencies UK 2024 | Top Go-To-Market Consultants & Agencies UK',
  description: 'Find the best GTM agencies serving the UK market. Compare top go-to-market consultancies with verified credentials, brand profiles, and specializations.',
  keywords: 'GTM agency UK, go-to-market agencies UK, GTM consultants UK, product launch agency UK, B2B GTM strategy UK',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-uk'
  }
}

export const revalidate = 3600 // Revalidate every hour

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default async function GTMAgenciesUKPage() {
  // Fetch agencies serving UK
  const agencies = await getAgenciesForLocation('UK')
  const stats = await getLocationStats('UK')

  // Brand assets now stored in database - no API calls!

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "GTM Agencies UK",
            "description": "Top GTM agencies serving the UK market",
            "url": "https://gtm.quest/gtm-agencies-uk",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": agencies.map((agency, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Organization",
                  "name": agency.name,
                  "url": `https://gtm.quest/agency/${agency.slug}`
                }
              }))
            }
          })
        }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' '}/{' '}
            <Link href="/best-gtm-agencies" className="hover:text-white transition-colors">GTM Agencies</Link>
            {' '}/{' '}
            <span className="text-white">UK</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">United Kingdom</span>
          <h1 className="text-7xl md:text-8xl font-black text-white mb-6 leading-tight">
            GTM Agencies<br />in the UK
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {stats.totalAgencies} verified go-to-market agencies serving UK businesses with expertise in B2B SaaS, product launches, and revenue growth.
          </p>

          {/* Quick Stats */}
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
              <div className="text-5xl font-black text-white mb-2">100%</div>
              <div className="text-white/60">Verified</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">{stats.topSpecializations.length}+</div>
              <div className="text-white/60">Specializations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Cards */}
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

      {/* FAQ Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-16">UK GTM FAQs</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Why choose a UK-based GTM agency?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                UK GTM agencies understand the European market dynamics, regulatory environment, and business culture.
                They have experience launching products across EMEA and can navigate UK-specific considerations like GDPR,
                VAT, and cross-border expansion into Europe.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What's the typical cost of a GTM agency in the UK?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                UK GTM agencies typically charge £{(stats.avgMinBudget / 1000).toFixed(0)}K+ per month for retainer engagements.
                Project-based work ranges from £15K-£50K depending on scope. Enterprise GTM strategies can exceed £100K for
                comprehensive multi-market launches.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Do UK agencies serve international markets?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Yes, most UK GTM agencies serve global markets. Many have experience launching products across US, European,
                and APAC markets. The agencies listed here all have "Global" in their service areas, meaning they can support
                international GTM strategies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What industries do UK GTM agencies specialize in?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Top specializations include {stats.topSpecializations.slice(0, 3).join(', ')}. UK agencies have particular
                strength in B2B SaaS, fintech, enterprise software, and healthcare technology given the UK's strong position
                in these sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Locations */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-12">Other Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/gtm-agencies-london"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                London →
              </h3>
              <p className="text-white/60">
                Find GTM agencies in London, the UK's tech and startup hub.
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
                Explore GTM agencies serving the US market.
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
                Discover GTM agencies in the Australian market.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Build Your GTM Strategy
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Create a comprehensive go-to-market strategy tailored to the UK market in minutes.
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
