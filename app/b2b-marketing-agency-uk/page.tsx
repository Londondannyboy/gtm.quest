import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { fetchBrandFromBrandDev, BrandAssets } from '@/lib/brand-api'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency UK 2025 | Top B2B Marketing Agencies UK',
  description: 'Find the best B2B marketing agencies serving the UK market. Compare top B2B marketing consultancies with verified credentials, specializations, and proven results.',
  keywords: 'B2B marketing agency UK, B2B marketing agencies UK, B2B digital marketing UK, demand generation UK, B2B lead generation UK',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-uk'
  }
}

export const revalidate = 3600 // Revalidate every hour

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default async function B2BMarketingAgencyUKPage() {
  // Fetch B2B Marketing agencies serving UK
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'UK')

  // Calculate stats
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
            "name": "B2B Marketing Agencies UK",
            "description": "Top B2B marketing agencies serving the UK market",
            "url": "https://gtm.quest/b2b-marketing-agency-uk",
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

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">United Kingdom</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            B2B Marketing<br />Agencies in the UK
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {totalAgencies} verified B2B marketing agencies serving UK businesses with expertise in demand generation, account-based marketing, and revenue growth.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            <div>
              <div className="text-5xl font-black text-white mb-2">{totalAgencies}</div>
              <div className="text-white/60">Agencies</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">£{Math.round(avgMinBudget / 1000)}K+</div>
              <div className="text-white/60">Avg Min Budget</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">100%</div>
              <div className="text-white/60">Verified</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">{topSpecializations.length}+</div>
              <div className="text-white/60">Specializations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content - Following SalesCaptain Pattern */}
      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Why Choose a B2B Marketing Agency in the UK?
          </h2>
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              The UK remains one of Europe's most dynamic markets for B2B technology and services, with London serving as a global fintech hub and Manchester, Edinburgh, and Cambridge emerging as significant tech centers. UK-based B2B marketing agencies bring deep understanding of European market dynamics, GDPR compliance, cross-border expansion strategies, and the unique challenges of selling to British and European businesses.
            </p>
            <p>
              Whether you're a B2B SaaS company preparing for European expansion, an enterprise software provider targeting UK enterprises, or a services firm building systematic demand generation, partnering with a UK-based B2B marketing agency provides timezone alignment, cultural fluency, and on-the-ground market intelligence that remote agencies struggle to replicate.
            </p>
            <p>
              UK agencies excel at navigating the complexities of multi-stakeholder B2B sales cycles, building sophisticated account-based marketing programs for enterprise targets, and creating demand generation engines that align marketing with sales revenue goals. The agencies listed below have been verified for their B2B expertise, client results, and transparent approach to partnerships.
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 mt-16">
            What to Look for in a B2B Marketing Agency
          </h2>
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">B2B Experience and Industry Knowledge</h3>
              <p>
                B2B marketing fundamentally differs from B2C in sales cycle length, decision-making complexity, and stakeholder dynamics. The best B2B agencies demonstrate experience with long sales cycles, understand how to create content for technical buyers versus economic buyers, and can navigate buying committees with 5-10 stakeholders. Look for agencies with case studies in your industry—enterprise software requires different approaches than professional services or industrial equipment.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Demand Generation Capabilities</h3>
              <p>
                Effective B2B marketing agencies build demand generation systems, not just campaigns. This means creating buyer journey frameworks, implementing marketing automation, developing lead scoring models, and establishing closed-loop reporting between marketing and sales. Ask agencies about their approach to MQLs, SQLs, and pipeline contribution. The best agencies focus on revenue influence, not vanity metrics like impressions or clicks.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Technology Stack and Integration</h3>
              <p>
                Modern B2B marketing requires sophisticated technology. Top agencies demonstrate expertise in HubSpot, Salesforce, Marketo, or Pardot for marketing automation. They understand how to implement account-based marketing platforms like Demandbase or 6sense. They know how to integrate marketing technology with your CRM, set up proper attribution tracking, and build dashboards that show real business impact. Technical competence separates agencies that execute from those that just advise.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Strategic Thinking and Business Acumen</h3>
              <p>
                B2B marketing agencies should function as strategic partners, not just execution teams. The best agencies start by understanding your business model, revenue goals, and competitive positioning before proposing tactics. They challenge assumptions, provide perspective from working with similar companies, and design programs that ladder up to business objectives. If an agency leads with tactics before understanding your strategy, walk away.
              </p>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 mt-16">
            How to Choose the Right B2B Marketing Agency in the UK
          </h2>
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              Choosing a B2B marketing agency represents a significant investment—typically £10K-£50K+ per month for full-service retainers. Making the wrong choice costs not just money but also market momentum and team morale. Here's how to evaluate agencies systematically.
            </p>
            <p>
              <strong>Start with your goals and gaps.</strong> Are you building demand generation from scratch, scaling a working system, or pivoting strategy? Do you need full-service support or specific capabilities like ABM or content marketing? Understanding what you actually need prevents agencies from selling you services you don't require.
            </p>
            <p>
              <strong>Evaluate case studies critically.</strong> Ask agencies for examples of companies similar to yours in complexity, industry, and growth stage. Request specific metrics: pipeline generated, conversion rates improved, deal velocity increased. Generic case studies with vague "increased awareness" claims signal weak results. The best agencies share detailed outcome data.
            </p>
            <p>
              <strong>Meet the actual team.</strong> Many agencies sell with senior partners but execute with junior staff. Insist on meeting the people who will actually work on your account—strategists, content creators, campaign managers. Assess their B2B knowledge, communication style, and strategic thinking. Chemistry matters when you'll be collaborating weekly.
            </p>
            <p>
              <strong>Understand their methodology.</strong> Ask agencies to walk through their process for the first 90 days. How do they develop strategy? What deliverables do you receive? How do they measure success and report results? Agencies with repeatable frameworks demonstrate maturity; those who promise custom approaches for everyone often lack structure.
            </p>
          </div>
        </div>
      </section>

      {/* Agency Cards */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-5xl font-black text-white mb-12">
            Top B2B Marketing Agencies in the UK
          </h2>
        </div>
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
          <h2 className="text-5xl font-black text-white mb-16">UK B2B Marketing FAQs</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What is the typical cost of a B2B marketing agency in the UK?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                UK B2B marketing agencies typically charge £{Math.round(avgMinBudget / 1000)}K+ per month for retainer engagements that include strategy, execution, and reporting. Project-based work like ABM program setup or website redesigns ranges from £15K-£75K depending on scope. Enterprise demand generation programs with dedicated teams can exceed £100K monthly for comprehensive multi-channel execution.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                How long does it take to see results from B2B marketing?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                B2B marketing operates on longer timelines than B2C due to extended sales cycles. Expect 3-6 months to see meaningful pipeline impact from demand generation programs. Account-based marketing targeting enterprise accounts may take 6-12 months to influence deals. Quick wins like improved conversion rates or better lead quality can appear within 30-60 days, but sustainable revenue growth requires patience and consistent execution.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Do UK agencies serve international markets?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Yes, most UK B2B marketing agencies serve global markets, particularly companies expanding from UK into Europe, US, or APAC regions. UK agencies bring valuable perspective on European market entry, GDPR compliance, and cross-border marketing strategies. Many have experience launching B2B products across multiple regions simultaneously.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What industries do UK B2B marketing agencies specialize in?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Top specializations include {topSpecializations.slice(0, 3).join(', ')}. UK B2B agencies have particular strength in B2B SaaS, fintech, enterprise software, professional services, and industrial technology given the UK's established position in these sectors. Many agencies focus on specific verticals to develop deep industry expertise.
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
              href="/b2b-marketing-agency-london"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                London →
              </h3>
              <p className="text-white/60">
                Find B2B marketing agencies in London, the UK's tech and startup hub.
              </p>
            </Link>

            <Link
              href="/b2b-marketing-agency-us"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                United States →
              </h3>
              <p className="text-white/60">
                Explore B2B marketing agencies serving the US market.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-uk"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                GTM Agencies UK →
              </h3>
              <p className="text-white/60">
                Discover go-to-market agencies in the UK market.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Build Your B2B Marketing Strategy
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
