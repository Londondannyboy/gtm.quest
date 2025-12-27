import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency UK 2025 | GTM Quest',
  description: 'Find the best B2B marketing agency UK has for your business. Compare top B2B marketing agencies in the UK for London and European markets.',
  keywords: 'best B2B marketing agency UK, top B2B marketing agencies UK, B2B digital marketing UK, demand generation UK, B2B lead generation UK',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk'
  }
}

export const revalidate = 3600

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default async function B2BMarketingAgencyUKPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'UK')

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
            "name": "Best B2B Marketing Agencies UK",
            "description": "Top B2B marketing agencies serving the UK market",
            "url": "https://gtm.quest/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk",
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
            <span className="text-white">B2B Marketing UK</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Image */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80"
            alt="Best B2B marketing agency UK - London cityscape with Thames River and iconic landmarks"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">United Kingdom</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            Best B2B Marketing Agency UK 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} B2B marketing agencies the UK has to offer. Find the right B2B marketing agency UK businesses trust for growth.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">Top Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">£{Math.round(avgMinBudget / 1000)}K+</div>
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
            Why Choose a B2B Marketing Agency UK for Your Business?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              The United Kingdom operates as <a href="https://en.wikipedia.org/wiki/Economy_of_the_United_Kingdom" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Europe's second-largest economy</a> and maintains its position as the <a href="https://www.bbc.co.uk/news/business" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">global capital for financial services and fintech innovation</a>, with London's financial district generating over £200 billion annually. British B2B agencies navigate a unique market landscape shaped by post-Brexit regulatory independence, Commonwealth trade relationships spanning 56 nations, and a business culture that values measured decision-making, detailed vendor evaluation, and long-term partnership commitments over transactional relationships.
            </p>
            <p>
              UK-based B2B marketing agencies understand the distinct characteristics of British enterprise buyers: longer evaluation cycles compared to US markets, preference for case study-driven proof points rather than aspirational messaging, and complex stakeholder dynamics where technical teams, procurement departments, and C-suite executives each play critical roles in purchase decisions. Research from <a href="https://www.ft.com/companies" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Financial Times analysis</a> shows UK B2B buyers prioritize vendor stability, GDPR compliance expertise, and understanding of British professional services standards when selecting technology and consulting partners.
            </p>
            <p>
              Top UK agencies excel in serving financial services technology, professional services firms, manufacturing enterprises, and B2B SaaS companies pursuing European expansion. They understand how to position offerings for both UK domestic market opportunities and as EMEA headquarters targeting continental Europe, while navigating region-specific challenges like VAT considerations for EU cross-border sales, UK-specific data protection requirements, and the relationship-driven nature of British enterprise sales that rewards consultative approaches over aggressive American-style closing tactics.
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 mt-20 leading-tight">
            Top B2B Marketing Agencies UK: What to Look For
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>B2B Experience and Industry Knowledge</h3>
              <p>
                B2B marketing fundamentally differs from B2C in sales cycle length, decision-making complexity, and stakeholder dynamics.<br/><br/>
                The best B2B agencies demonstrate experience with long sales cycles, understand how to create content for technical buyers versus economic buyers, and can navigate buying committees with 5-10 stakeholders.<br/><br/>
                Look for agencies with case studies in your industry—enterprise software requires different approaches than professional services or industrial equipment.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Demand Generation Capabilities</h3>
              <p>
                Effective B2B marketing agencies build demand generation systems, not just campaigns.<br/><br/>
                This means creating buyer journey frameworks, implementing marketing automation, developing lead scoring models, and establishing closed-loop reporting between marketing and sales.<br/><br/>
                Ask agencies about their approach to MQLs, SQLs, and pipeline contribution. The best agencies focus on revenue influence, not vanity metrics like impressions or clicks.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Technology Stack and Integration</h3>
              <p>
                Modern B2B marketing requires sophisticated technology.<br/><br/>
                Top agencies demonstrate expertise in HubSpot, Salesforce, Marketo, or Pardot for marketing automation.<br/><br/>
                They understand how to implement account-based marketing platforms like Demandbase or 6sense. They know how to integrate marketing technology with your CRM, set up proper attribution tracking, and build dashboards that show real business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Cards */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Top B2B Marketing Agency UK Directory
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {totalAgencies} verified B2B marketing agencies serving UK businesses with proven expertise and results.
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
          <h2 className="text-5xl font-black text-white mb-16">UK B2B Marketing FAQs</h2>

          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                What is the typical cost of a B2B marketing agency in the UK?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                UK B2B marketing agencies typically charge £{Math.round(avgMinBudget / 1000)}K+ per month for retainer engagements.<br/><br/>
                Project-based work ranges from £15K-£75K depending on scope.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                How long does it take to see results from B2B marketing?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Expect 3-6 months to see meaningful pipeline impact from demand generation programs. ABM targeting enterprise accounts may take 6-12 months to influence deals.
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
            Create a comprehensive go-to-market strategy tailored to the UK market in minutes.
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
