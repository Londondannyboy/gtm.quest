import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { fetchBrandFromBrandDev, BrandAssets } from '@/lib/brand-api'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency US 2025 | Top B2B Marketing Agencies United States',
  description: 'Find the best B2B marketing agencies serving the US market. Compare top B2B marketing consultancies with verified credentials, specializations, and proven results.',
  keywords: 'B2B marketing agency US, B2B marketing agencies USA, B2B digital marketing United States, demand generation US, B2B lead generation USA',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-us'
  }
}

export const revalidate = 3600 // Revalidate every hour

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default async function B2BMarketingAgencyUSPage() {
  // Fetch B2B Marketing agencies serving US
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'US')

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

  // Fetch brand assets for each agency
  const brandAssets: Record<string, BrandAssets | null> = {}
  for (const agency of agencies) {
    if (agency.brand_dev_domain) {
      try {
        brandAssets[agency.slug] = await fetchBrandFromBrandDev(agency.brand_dev_domain)
        await sleep(500) // Rate limit
      } catch (error) {
        console.error(`Error fetching brand for ${agency.slug}:`, error)
        brandAssets[agency.slug] = null
      }
    }
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "B2B Marketing Agencies US",
            "description": "Top B2B marketing agencies serving the United States market",
            "url": "https://gtm.quest/b2b-marketing-agency-us",
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
            <span className="text-white">B2B Marketing US</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">United States</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            B2B Marketing<br />Agencies in the US
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {totalAgencies} verified B2B marketing agencies serving US businesses with expertise in demand generation, account-based marketing, and revenue growth.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            <div>
              <div className="text-5xl font-black text-white mb-2">{totalAgencies}</div>
              <div className="text-white/60">Agencies</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">${Math.round(avgMinBudget / 1000)}K+</div>
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
            Why Choose a B2B Marketing Agency in the United States?
          </h2>
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              The United States remains the world's largest and most competitive B2B market, with major tech hubs in San Francisco, New York, Boston, Austin, and Seattle driving innovation across SaaS, enterprise software, and technology services. US-based B2B marketing agencies bring unmatched expertise in scaling high-velocity sales organizations, building sophisticated demand generation engines, and navigating the unique dynamics of selling to American businesses.
            </p>
            <p>
              Whether you're a venture-backed startup preparing to scale from $1M to $10M ARR, an established SaaS company expanding into enterprise accounts, or a services firm building predictable pipeline generation, partnering with a US-based B2B marketing agency provides access to proven playbooks, cutting-edge marketing technology, and deep experience with American buying behaviors that fundamentally differ from other markets.
            </p>
            <p>
              US agencies lead globally in modern B2B marketing approaches—account-based marketing, product-led growth, community-driven demand generation, and revenue operations. The agencies listed below have been verified for their B2B expertise, measurable client results, and transparent approach to partnerships. Many have worked with category-defining B2B companies and bring battle-tested frameworks for scaling revenue.
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 mt-16">
            What to Look for in a B2B Marketing Agency
          </h2>
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Proven B2B SaaS Experience</h3>
              <p>
                The best US B2B marketing agencies have deep SaaS experience and understand subscription business models, expansion revenue, and product-led growth dynamics. They know how to calculate customer acquisition cost, lifetime value, and payback periods. They understand the difference between land-and-expand strategies versus enterprise sales motions. Look for agencies that speak your language—ARR, MRR, NDR, GRR—and can show how their marketing programs influence these metrics directly.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Full-Funnel Demand Generation</h3>
              <p>
                Effective B2B agencies build complete demand generation systems from awareness through closed-won revenue. This means orchestrating content marketing, paid acquisition, SEO, account-based marketing, and sales enablement into cohesive buyer journeys. The best agencies don't optimize marketing in isolation—they align with sales on lead definitions, service level agreements, and revenue targets. Ask agencies how they think about demand creation versus demand capture, and how they measure marketing's contribution to pipeline and revenue.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Marketing Technology Excellence</h3>
              <p>
                Modern B2B marketing requires sophisticated technology stacks. Top US agencies demonstrate expertise in HubSpot, Salesforce, Marketo, or Pardot ecosystems. They know how to implement account-based marketing platforms, set up proper attribution modeling, and integrate marketing automation with your CRM. They build dashboards that show real business impact, not vanity metrics. Technical competence separates agencies that can scale your marketing from those that just run campaigns.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Strategic Partnership Approach</h3>
              <p>
                B2B marketing agencies should function as strategic partners, not outsourced execution teams. The best agencies understand your business model, competitive landscape, and growth objectives before proposing tactics. They challenge assumptions based on experience with similar companies. They bring perspective on what's working in the market right now. If an agency leads with a standard service package before understanding your unique situation, they're probably not the right fit.
              </p>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 mt-16">
            How to Choose the Right B2B Marketing Agency in the US
          </h2>
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              Selecting a B2B marketing agency represents a significant investment—typically $10K-$50K+ per month for comprehensive retainers. Making the wrong choice costs money, market momentum, and team morale. Here's a systematic approach to evaluating agencies and making the right decision.
            </p>
            <p>
              <strong>Define your goals and gaps precisely.</strong> Are you building demand generation from scratch, scaling what's working, or fixing what's broken? Do you need full-service support or specialized capabilities like ABM, content, or paid acquisition? Understanding exactly what you need prevents agencies from overselling services or underdelivering on expectations. Be specific about revenue targets, timeline, and constraints.
            </p>
            <p>
              <strong>Evaluate case studies with skepticism.</strong> Ask for examples of companies similar to yours—not just in industry but in growth stage, complexity, and challenges. Request specific metrics: pipeline generated, conversion rate improvements, CAC reduction, deal velocity increases. Generic case studies with vague "increased brand awareness" claims signal weak results. The best agencies share detailed outcome data and explain both successes and failures.
            </p>
            <p>
              <strong>Meet the team who will do the work.</strong> Many agencies sell with experienced partners but execute with junior staff. Insist on meeting your account strategist, campaign managers, and content creators before signing. Assess their B2B knowledge, strategic thinking, and communication style. Ask about their process for the first 90 days. Chemistry matters when you'll be collaborating daily on critical business objectives.
            </p>
            <p>
              <strong>Understand their methodology and frameworks.</strong> Ask agencies how they develop strategy, what deliverables you receive, and how they measure success. Agencies with repeatable frameworks demonstrate maturity and efficiency. Those who promise completely custom approaches for everyone often lack structure. Look for agencies that balance proven processes with flexibility to adapt to your unique situation.
            </p>
          </div>
        </div>
      </section>

      {/* Agency Cards */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-5xl font-black text-white mb-12">
            Top B2B Marketing Agencies in the US
          </h2>
        </div>
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

      {/* FAQ Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-16">US B2B Marketing FAQs</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What is the typical cost of a B2B marketing agency in the US?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                US B2B marketing agencies typically charge ${Math.round(avgMinBudget / 1000)}K+ per month for retainer engagements including strategy, execution, and reporting. Specialized services like ABM program design or content strategy projects range from $20K-$100K depending on scope. Enterprise demand generation programs with dedicated teams can exceed $150K monthly for comprehensive multi-channel execution across large organizations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                How long does it take to see results from B2B marketing?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                B2B marketing operates on longer timelines than B2C given complex sales cycles. Expect 3-6 months to see meaningful pipeline impact from demand generation programs. Account-based marketing targeting enterprise accounts may take 6-12 months to influence closed deals. Quick wins like improved website conversion rates or better lead quality can appear within 30-90 days, but sustainable revenue growth requires consistent execution and patience.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Should I hire an agency or build an in-house marketing team?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                This depends on your stage and budget. Pre-$5M ARR companies often get more value from agencies who bring diverse expertise and proven playbooks. $5M-$20M ARR companies typically build hybrid models with in-house leadership and agency support for specialized capabilities. Post-$20M ARR companies usually transition to in-house teams while retaining agencies for specific initiatives. Agencies provide faster ramp-up and lower risk than hiring full teams.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What industries do US B2B marketing agencies specialize in?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Top specializations include {topSpecializations.slice(0, 3).join(', ')}. US B2B agencies have particular depth in B2B SaaS, enterprise software, fintech, cybersecurity, healthcare technology, and professional services. Many agencies develop vertical expertise to understand buyer personas, competitive dynamics, and regulatory requirements specific to industries they serve.
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
              href="/b2b-marketing-agency-new-york"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                New York →
              </h3>
              <p className="text-white/60">
                Find B2B marketing agencies in New York City, a major tech and finance hub.
              </p>
            </Link>

            <Link
              href="/b2b-marketing-agency-uk"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                United Kingdom →
              </h3>
              <p className="text-white/60">
                Explore B2B marketing agencies serving the UK market.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-us"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                GTM Agencies US →
              </h3>
              <p className="text-white/60">
                Discover go-to-market agencies in the US market.
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
            Create a comprehensive go-to-market strategy tailored to the US market in minutes.
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
