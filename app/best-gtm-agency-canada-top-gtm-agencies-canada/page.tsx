import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best GTM Agency Canada 2025 | Top Go-To-Market Agencies Canada',
  description: 'Discover the best go-to-market agencies Canada has to offer. Compare top Canadian GTM consultancies with verified credentials, proven strategies, and specialized expertise.',
  keywords: 'best GTM agency Canada, top go-to-market agencies Canada, GTM consultants Toronto, product launch agency Vancouver, B2B GTM strategy Canada',
  alternates: {
    canonical: 'https://gtm.quest/best-gtm-agency-canada-top-gtm-agencies-canada'
  }
}

export const revalidate = 3600

export default async function GTMAgencyCanadaPage() {
  const agencies = await getAgenciesByCategory('GTM Agency', 'Canada')

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
            "name": "Best GTM Agencies Canada",
            "description": "Top go-to-market agencies serving the Canadian market",
            "url": "https://gtm.quest/best-gtm-agency-canada-top-gtm-agencies-canada",
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
            <span className="text-white">GTM Canada</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Image */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=1920&q=80"
            alt="Best GTM agencies Canada - Vancouver city skyline with mountains and harbor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Canada</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            Best GTM<br />Agencies Canada
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} go-to-market agencies Canada has to offer—verified experts in product launches, GTM strategy, and revenue growth.
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
            GTM Agencies Canada Guide: Why Choose Canadian GTM Experts?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Canada's thriving technology ecosystem has produced world-class GTM expertise, with Toronto, Vancouver, and Montreal serving as innovation hubs for B2B SaaS, AI, fintech, and enterprise software companies.<br/><br/>
              Canadian GTM agencies bring unique advantages including proximity to both US and international markets, strong government support for innovation, sophisticated understanding of cross-border expansion, and proven experience launching products that scale from Canada to global markets.
            </p>
            <p>
              Whether you're a Canadian startup launching your first product, an established company entering new market segments, or an international firm launching into North America via Canada, Canadian GTM agencies provide critical market knowledge combined with North American best practices.<br/><br/>
              The Canadian market serves as an ideal testing ground for products targeting both North American and international markets, with agencies developing launch strategies that balance local focus with global scalability.
            </p>
            <p>
              Canadian agencies excel at product positioning for bilingual markets, building launch strategies that work across provinces with different business cultures, and creating GTM playbooks optimized for both Canadian domestic success and US market expansion.<br/><br/>
              The agencies listed below have been verified for their Canadian market presence, proven launch track records, and specialized capabilities in B2B SaaS, technology products, and cross-border expansion.
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 mt-20 leading-tight">
            Top GTM Agencies Canada: What to Look For
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Launch Experience and Market Entry Expertise</h3>
              <p>
                The best Canadian GTM agencies understand how to launch products efficiently in the Canadian market while positioning for rapid US expansion.<br/><br/>
                They bring experience with Canada's bilingual requirements for Quebec, understand regional differences across provinces, and know how to position products for both Canadian success and cross-border scalability.<br/><br/>
                Look for agencies with case studies showing successful launches in the Canadian market and proven experience supporting companies expanding from Canada into US and international markets.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Positioning and Messaging Capabilities</h3>
              <p>
                Effective GTM agencies in Canada excel at positioning products for North American markets while respecting Canadian market nuances.<br/><br/>
                Top Canadian agencies understand how to develop messaging that works across English and French-speaking markets, create positioning that resonates with both Canadian and US buyers, and build narratives that support efficient cross-border expansion.<br/><br/>
                Ask agencies about their approach to balancing Canadian market specifics with the need for consistent North American positioning as companies scale.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Revenue Architecture and Cross-Border Scaling</h3>
              <p>
                Modern GTM in Canada requires thinking about US expansion from day one for most B2B technology companies.<br/><br/>
                The best Canadian agencies help design GTM motions that work efficiently in Canada while maintaining seamless scalability to the much larger US market.<br/><br/>
                They understand how to build launch strategies leveraging Canada's innovation support programs, adapt international best practices to the Canadian context, and create scalable playbooks for North American growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Cards */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            The Best GTM Agencies Canada Has to Offer
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {totalAgencies} verified go-to-market agencies serving Canadian businesses with proven launch expertise and results.
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
          <h2 className="text-5xl font-black text-white mb-16">Canada GTM FAQs</h2>

          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                What is the typical cost of a GTM agency in Canada?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Canadian GTM agencies typically charge CA${Math.round(avgMinBudget / 1000)}K+ per month for retainer engagements.<br/><br/>
                Project-based GTM strategies range from CA$25K-CA$100K depending on scope. Full launch programs with execution can range from CA$50K-CA$200K for B2B technology products.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                How long does a typical GTM engagement take in Canada?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                GTM strategy development typically takes 4-8 weeks in the Canadian market. Full launch execution spans 3-6 months from positioning through initial traction. Many Canadian companies use their domestic launch as a springboard for US expansion within 6-12 months.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                Do Canadian GTM agencies support US market expansion?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Yes, most Canadian GTM agencies have extensive experience supporting companies expanding from Canada into the US market. Canada's proximity, timezone alignment, and cultural similarities with the US make Canadian agencies valuable partners for North American expansion strategies. Many agencies maintain networks and partnerships in major US markets to support seamless cross-border launches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Build Your GTM Strategy
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
