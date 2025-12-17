import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency US 2025 | Top B2B Marketing Agencies US',
  description: 'Discover the best B2B marketing agencies the United States has to offer. Compare top US B2B marketing consultancies with verified credentials, proven results, and specialized expertise.',
  keywords: 'best B2B marketing agency US, top B2B marketing agencies United States, B2B digital marketing US, demand generation USA, B2B lead generation United States',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us'
  }
}

export const revalidate = 3600

export default async function B2BMarketingAgencyUSPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'US')

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
            "name": "Best B2B Marketing Agencies US",
            "description": "Top B2B marketing agencies serving the United States market",
            "url": "https://gtm.quest/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us",
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

      {/* Hero Section with Image */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&q=80"
            alt="Best B2B marketing agencies US - New York City skyline with Manhattan skyscrapers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">United States</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            Best B2B Marketing<br />Agencies US
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} B2B marketing agencies the United States has to offer—verified experts in demand generation, ABM, and revenue growth.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">Top Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">${Math.round(avgMinBudget / 1000)}K+</div>
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
            B2B Marketing Agencies US Guide: Why Choose US-Based Experts?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              The United States remains the world's largest and most competitive B2B technology market, with major tech hubs in New York, San Francisco, Boston, Austin, and Seattle driving innovation across enterprise software, SaaS, fintech, and cybersecurity.<br/><br/>
              US-based B2B marketing agencies bring unparalleled experience navigating the American market's unique dynamics, understanding how US enterprises evaluate vendors, and executing strategies that work across diverse industries and regulatory environments.
            </p>
            <p>
              Whether you're a B2B SaaS company scaling from Series A to growth stage, an enterprise software provider targeting Fortune 500 accounts, or an international firm entering the US market, partnering with a US-based B2B marketing agency provides access to proven playbooks, timezone alignment for real-time collaboration, and deep knowledge of how American businesses buy technology.
            </p>
            <p>
              US agencies excel at building sophisticated demand generation programs for complex enterprise sales cycles, implementing account-based marketing strategies for six and seven-figure deals, and creating content that resonates with American B2B buyers who expect high production value, clear ROI demonstration, and consultative selling approaches.<br/><br/>
              The agencies listed below have been verified for their US market expertise, client results, and transparent approach to B2B partnerships.
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 mt-20 leading-tight">
            Top B2B Marketing Agencies US: What to Look For
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>B2B Experience and Industry Knowledge</h3>
              <p>
                B2B marketing fundamentally differs from B2C in sales cycle length, decision-making complexity, and stakeholder dynamics.<br/><br/>
                The best US B2B agencies demonstrate experience with 6-18 month enterprise sales cycles, understand how to create content for technical buyers versus economic buyers, and can navigate buying committees with 7-15 stakeholders common in American enterprise deals.<br/><br/>
                Look for agencies with case studies in your industry—SaaS requires different approaches than manufacturing, healthcare tech needs different strategies than professional services.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Demand Generation Capabilities</h3>
              <p>
                Effective US B2B marketing agencies build demand generation systems, not just campaigns.<br/><br/>
                This means creating buyer journey frameworks, implementing marketing automation, developing lead scoring models that align with American buying behaviors, and establishing closed-loop reporting between marketing and sales.<br/><br/>
                Ask agencies about their approach to MQLs, SQLs, and pipeline contribution. The best US agencies focus on revenue influence and can demonstrate 3-5x pipeline ROI, not vanity metrics like impressions or clicks.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Technology Stack and Integration</h3>
              <p>
                Modern B2B marketing in the US requires sophisticated technology.<br/><br/>
                Top agencies demonstrate expertise in HubSpot, Salesforce, Marketo, or Pardot for marketing automation.<br/><br/>
                They understand how to implement account-based marketing platforms like Demandbase, 6sense, or Terminus. They know how to integrate marketing technology with your CRM, set up proper attribution tracking, and build dashboards that show real business impact across the full customer journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Cards */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            The Best B2B Marketing Agencies the United States Has to Offer
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {totalAgencies} verified B2B marketing agencies serving US businesses with proven expertise and results.
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
          <h2 className="text-5xl font-black text-white mb-16">US B2B Marketing FAQs</h2>

          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                What is the typical cost of a B2B marketing agency in the US?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                US B2B marketing agencies typically charge ${Math.round(avgMinBudget / 1000)}K+ per month for retainer engagements.<br/><br/>
                Project-based work ranges from $20K-$100K depending on scope. Enterprise-focused agencies may require $30K-$50K+ monthly minimums.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                How long does it take to see results from B2B marketing in the US market?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Expect 3-6 months to see meaningful pipeline impact from demand generation programs. ABM targeting US enterprise accounts typically takes 6-12 months to influence deals due to longer sales cycles and multiple stakeholder approval processes.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                Do US B2B marketing agencies serve international clients?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Yes, many top US agencies work with international B2B companies entering the American market or expanding their US presence. They bring valuable expertise in US buyer behaviors, enterprise sales processes, and regulatory requirements like SOC 2, HIPAA, and industry-specific compliance standards.
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
            Create a comprehensive go-to-market strategy tailored to the US market in minutes.
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
