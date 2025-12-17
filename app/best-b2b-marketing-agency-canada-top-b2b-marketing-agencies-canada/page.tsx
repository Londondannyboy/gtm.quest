import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Canada 2025 | Top B2B Marketing Agencies Canada',
  description: 'Discover the best B2B marketing agencies Canada has to offer. Compare top Canadian B2B marketing consultancies with verified credentials, proven results, and specialized expertise.',
  keywords: 'best B2B marketing agency Canada, top B2B marketing agencies Canada, B2B digital marketing Toronto, demand generation Vancouver, B2B lead generation Canada',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-canada-top-b2b-marketing-agencies-canada'
  }
}

export const revalidate = 3600

export default async function B2BMarketingAgencyCanadaPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Canada')

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

  // Brand assets are now stored in the database - no API calls during page load!

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Best B2B Marketing Agencies Canada",
            "description": "Top B2B marketing agencies serving the Canadian market",
            "url": "https://gtm.quest/best-b2b-marketing-agency-canada-top-b2b-marketing-agencies-canada",
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
            <Link href="/best-gtm-agencies" className="hover:text-white transition-colors">Agencies</Link>
            {' '}/{' '}
            <span className="text-white">B2B Marketing Canada</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Image */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&q=80"
            alt="Best B2B marketing agencies Canada - Toronto skyline with CN Tower"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Canada</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            Best B2B Marketing<br />Agencies Canada
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} B2B marketing agencies Canada has to offer—verified experts in demand generation, ABM, and revenue growth.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">Top Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">CA${Math.round(avgMinBudget / 1000)}K+</div>
              <div className="text-white/70 text-lg">Avg Budget</div>
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

      {/* Educational Content */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            B2B Marketing Agencies Canada Guide: Why Choose Canadian Experts?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Canada operates as <a href="https://en.wikipedia.org/wiki/Economy_of_Canada" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">the world's ninth-largest economy</a> and has emerged as a North American technology powerhouse, with Toronto-Waterloo forming Canada's Silicon Valley, Vancouver establishing itself as a gaming and SaaS hub, and Montreal becoming a global AI research center. According to <a href="https://www.statcan.gc.ca/en/start" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Statistics Canada data</a>, the country's technology sector employs over 1.6 million professionals, with B2B technology companies benefiting from government incentives like SR&ED tax credits, lower operating costs versus US markets, and access to diverse international talent through favorable immigration policies attracting top global engineers and marketers.
            </p>
            <p>
              Canadian B2B marketing agencies navigate unique market dynamics serving both domestic Canadian enterprises and facilitating Canada-US cross-border expansion—a critical capability as 75% of Canadian technology companies target US markets for growth. They understand bilingual marketing requirements for Quebec (where <a href="https://www.canada.ca/en.html" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">federal and provincial regulations</a> mandate French-language business materials), cultural nuances differentiating Canadian business conservatism from American sales aggression, and procurement processes influenced by government-backed programs supporting homegrown technology adoption. Canadian business culture rewards measured, consultative approaches over hyperbolic claims, with enterprise buyers expecting detailed technical validation and typically conducting longer evaluation cycles than US counterparts.
            </p>
            <p>
              Top Canadian agencies excel in financial services technology (Toronto's banking sector drives fintech innovation), resource sector digitalization (energy, mining, forestry companies pursuing Industry 4.0), healthcare technology serving Canada's public health system, and B2B SaaS companies scaling from Canadian market validation into US expansion. They navigate complex challenges including interprovincial regulatory variations, French-language Quebec market requirements, proximity advantages for US market testing while maintaining Canadian operational costs 30-40% lower than comparable US agencies, and understanding how Canadian government procurement processes create unique B2B opportunities for technology vendors with proper certifications and compliance frameworks.
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 mt-20 leading-tight">
            Top B2B Marketing Agencies Canada: What to Look For
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>B2B Experience and North American Market Knowledge</h3>
              <p>
                B2B marketing in Canada requires understanding both domestic dynamics and cross-border considerations for companies scaling into the US market.<br/><br/>
                The best Canadian B2B agencies demonstrate experience with Canadian enterprise buyers, understand how to position for both Canadian and US markets, and can navigate the unique challenges of selling B2B solutions across North American markets.<br/><br/>
                Look for agencies with case studies showing success in the Canadian market and proven experience supporting cross-border expansion.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Demand Generation Capabilities</h3>
              <p>
                Effective Canadian B2B marketing agencies build sophisticated demand generation systems that work across Canadian markets and support North American expansion.<br/><br/>
                This means creating targeted approaches for Canada's major business centers (Toronto, Vancouver, Montreal), implementing bilingual marketing automation where required, and developing lead scoring models appropriate for Canadian B2B buying patterns.<br/><br/>
                Ask agencies about their approach to balancing Canadian market focus with cross-border US expansion considerations.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Technology Stack and Integration</h3>
              <p>
                Modern B2B marketing requires sophisticated technology, and Canadian agencies match their US counterparts in martech expertise.<br/><br/>
                Top Canadian agencies demonstrate expertise in HubSpot, Salesforce, Marketo, or Pardot for marketing automation.<br/><br/>
                They understand how to implement account-based marketing platforms, integrate marketing technology with your CRM, and build attribution models that work across Canadian and North American markets. Many Canadian agencies bring additional bilingual capabilities for Quebec market requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Cards */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            The Best B2B Marketing Agencies Canada Has to Offer
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {totalAgencies} verified B2B marketing agencies serving Canadian businesses with proven expertise and results.
          </p>
        </div>

        <div className="w-full">
          {agencies.map((agency, i) => {
            const isTopRanked = !!(agency.global_rank && agency.global_rank <= 3)
            const website = agency.website || '#'
            const description = (agency as any).b2b_description || agency.description
            const keyServices = (agency as any).key_services || agency.specializations || []
            const isGTMQuest = agency.slug === 'gtmquest'

            return (
              <AgencyCard
                key={agency.slug}
                rank={i + 1}
                name={agency.name}
                tagline={description}
                description={[description]}
                bestFor={agency.specializations || []}
                keyServices={keyServices}
                website={website}
                primaryColor={(agency as any).primary_color || '#8B5CF6'}
                logoUrl={(agency as any).logo_url}
                backdropUrl={(agency as any).backdrop_url}
                isTopRanked={isTopRanked}
                internalLink={isGTMQuest ? '/planner' : undefined}
                serviceAreas={agency.service_areas || []}
              />
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-16">Canada B2B Marketing FAQs</h2>

          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                What is the typical cost of a B2B marketing agency in Canada?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Canadian B2B marketing agencies typically charge CA${Math.round(avgMinBudget / 1000)}K+ per month for retainer engagements.<br/><br/>
                Project-based work ranges from CA$20K-CA$75K depending on scope. Pricing in Canada generally aligns with US rates when accounting for currency exchange.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                How long does it take to see results from B2B marketing in Canada?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Expect 3-6 months to see meaningful pipeline impact from demand generation programs in the Canadian market. ABM targeting Canadian enterprise accounts typically takes 6-12 months to influence deals, similar to US timelines.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                Do Canadian agencies support US market expansion?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Many Canadian B2B marketing agencies have extensive experience supporting companies expanding into the US market. Canada's proximity, timezone alignment, and cultural similarities make Canadian agencies valuable partners for North American growth strategies. Bilingual agencies also bring advantages for companies operating in both English and French-speaking markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Build Your B2B Marketing Strategy
          </h2>
          <p className="text-2xl text-white/95 mb-12">
            Create a comprehensive go-to-market strategy tailored to the Canadian market in minutes.
          </p>
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
