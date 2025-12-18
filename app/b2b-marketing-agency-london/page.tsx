import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { fetchBrandFromBrandDev, BrandAssets } from '@/lib/brand-api'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency London 2025 | Top B2B Marketing Agencies London UK',
  description: 'Find the best B2B marketing agencies in London. Compare top London-based B2B marketing consultancies with verified credentials, specializations, and proven results.',
  keywords: 'B2B marketing agency London, B2B marketing agencies London UK, B2B digital marketing London, demand generation London, B2B lead generation London',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-london'
  }
}

export const revalidate = 3600 // Revalidate every hour

export default async function B2BMarketingAgencyLondonPage() {
  // Fetch B2B Marketing agencies serving London
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'London')

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
            "name": "B2B Marketing Agencies London",
            "description": "Top B2B marketing agencies in London",
            "url": "https://gtm.quest/b2b-marketing-agency-london",
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
            <span className="text-white">B2B Marketing London</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">London, United Kingdom</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            B2B Marketing<br />Agencies in London
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {totalAgencies} verified B2B marketing agencies in London with expertise in demand generation, account-based marketing, and revenue growth.
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
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            B2B Marketing in London: Europe's Tech & Finance Capital
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              London dominates as <a href="https://en.wikipedia.org/wiki/Economy_of_London" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Europe's largest financial center</a> with $730 billion in GDP, anchoring the continent's technology ecosystem alongside traditional strengths in financial services, professional services, and media. The city hosts over <a href="https://techcrunch.com/2023/06/15/london-tech-ecosystem/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">40,000 technology companies</a> across fintech, enterprise software, cybersecurity, and AI, creating the most sophisticated B2B marketing landscape outside North America.
            </p>
            <p>
              London's unique position bridging American innovation and European markets shapes its B2B marketing culture. Agencies here blend Silicon Valley growth tactics with European sophistication, understanding both aggressive revenue scaling and the compliance requirements, cultural nuances, and buying behaviors across diverse European markets. The city's concentration of venture capital, Fortune 500 European headquarters, and international corporations creates marketing environments that span early-stage startup growth marketing to complex enterprise ABM programs for global accounts. London agencies excel at navigating GDPR, cross-border campaigns, and multi-language go-to-market strategies.
            </p>
            <p>
              The best London B2B marketing agencies specialize in fintech positioning, enterprise SaaS for financial services, cybersecurity marketing, and European market expansion strategy. They bring expertise in regulatory-compliant campaigns, thought leadership for financial services audiences, account-based marketing for multinational enterprises, and scaling B2B companies across EMEA. With access to the City's financial institutions, Tech City's startup ecosystem, and Canary Wharf's enterprise concentration, London agencies deliver globally-competitive B2B marketing with deep European market intelligence.
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 mt-16">
            What to Look for in a London B2B Marketing Agency
          </h2>
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">European Market Expertise</h3>
              <p>
                London agencies should demonstrate deep understanding of European market dynamics, regulatory requirements, and cross-border business development. The best agencies have experience launching products across UK, DACH, Nordics, and Southern Europe. They understand how buying behaviors differ between UK enterprises and continental European companies. They know how to navigate GDPR, localization requirements, and multi-language marketing. Ask agencies about their approach to European expansion and experience with your target markets.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">B2B Technology Specialization</h3>
              <p>
                London's B2B agencies often specialize in specific sectors where the city dominates—fintech, financial services technology, cybersecurity, regtech, and enterprise SaaS. Look for agencies with demonstrated experience in your industry who understand buyer personas, competitive dynamics, and regulatory constraints specific to your sector. Generic marketing agencies struggle with complex B2B sales cycles and technical products. Specialized agencies speak your language and understand your challenges intimately.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Full-Service or Specialized Capabilities</h3>
              <p>
                Decide whether you need full-service support (strategy, execution, reporting) or specialized capabilities (ABM, content, paid acquisition). Full-service agencies provide turnkey solutions and become extensions of your team. Specialized agencies excel in specific disciplines and integrate with your existing marketing function. Both models work—the right choice depends on your internal capabilities, budget, and growth stage. Be clear about what you need before evaluating agencies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Proven Results and Case Studies</h3>
              <p>
                The best London agencies share detailed case studies with specific metrics—pipeline generated, conversion rates improved, CAC reduced, deal velocity increased. They explain their methodology, challenges encountered, and how they overcame obstacles. Generic case studies with vague claims signal weak results. Ask for examples of companies similar to yours in size, industry, and challenges. Strong agencies have portfolio depth across multiple client situations.
              </p>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 mt-16">
            How to Choose the Right B2B Marketing Agency in London
          </h2>
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              Selecting a B2B marketing agency represents a significant investment—typically £10K-£50K+ per month for comprehensive retainers. Making the wrong choice costs money, market momentum, and team morale. London's competitive market means you have excellent options, but also requires careful evaluation to find the right fit.
            </p>
            <p>
              <strong>Start with clear objectives and constraints.</strong> Define your revenue targets, timeline, budget, and internal capabilities before contacting agencies. Are you building demand generation from scratch or scaling what works? Do you need European market entry support or UK market penetration? Understanding precisely what you need prevents agencies from overselling services and ensures alignment from the start.
            </p>
            <p>
              <strong>Evaluate cultural and working style fit.</strong> You'll collaborate closely with your agency—weekly calls, shared documents, strategic discussions. Meet the team who will actually work on your account. Assess their communication style, strategic thinking, and B2B knowledge. London agencies range from buttoned-up consultancies to scrappy startups. Find an agency whose culture matches yours for productive partnership.
            </p>
            <p>
              <strong>Understand pricing models and commitments.</strong> London agencies typically charge monthly retainers (£10K-£50K+), project fees (£15K-£100K), or hybrid models combining retainer and performance incentives. Ask about minimum commitments, ramp-up periods, and contract terms. Understand exactly what's included in pricing—strategy, execution, reporting, technology costs. Hidden costs and scope creep destroy agency relationships.
            </p>
            <p>
              <strong>Check references and validate results.</strong> Ask agencies for client references at similar companies. Call references and ask specific questions about results achieved, working relationship quality, challenges encountered, and whether they'd hire the agency again. Strong agencies have multiple satisfied clients who enthusiastically recommend them. Weak agencies struggle to provide references or offer only generic testimonials.
            </p>
          </div>
        </div>
      </section>

      {/* Agency Cards */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-5xl font-black text-white mb-12">
            Top B2B Marketing Agencies in London
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
          <h2 className="text-5xl font-black text-white mb-16">London B2B Marketing FAQs</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What is the typical cost of a B2B marketing agency in London?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                London B2B marketing agencies typically charge £{Math.round(avgMinBudget / 1000)}K+ per month for retainer engagements including strategy, execution, and reporting. Specialized projects like ABM program design or European market entry strategies range from £20K-£100K depending on scope. Enterprise demand generation programs can exceed £150K monthly for comprehensive multi-market execution across Europe.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Do London agencies serve companies outside the UK?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Yes, most London B2B marketing agencies serve global markets, particularly companies expanding from UK into Europe or entering the UK market from US or other regions. London agencies bring valuable expertise on European market entry, GDPR compliance, localization, and cross-border marketing strategies. Many have experience launching products across multiple European markets simultaneously.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                How do London agencies compare to US agencies?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                London agencies typically have stronger European market expertise and cross-border marketing experience, while US agencies often lead in cutting-edge B2B tactics and marketing technology innovation. London agencies excel at navigating regulatory complexity and multi-country campaigns. For European expansion, London agencies provide advantages US-based agencies cannot match. For purely UK or global strategies, both can work effectively.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What industries do London B2B marketing agencies specialize in?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Top specializations include {topSpecializations.slice(0, 3).join(', ')}. London agencies have particular depth in fintech, financial services technology, cybersecurity, regtech, enterprise SaaS, and professional services given London's position as Europe's financial and business hub. Many agencies develop deep vertical expertise within these sectors.
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
              href="/b2b-marketing-agency-uk"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                United Kingdom →
              </h3>
              <p className="text-white/60">
                Find B2B marketing agencies across the UK.
              </p>
            </Link>

            <Link
              href="/b2b-marketing-agency-us"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                United States →
              </h3>
              <p className="text-white/60">
                Explore B2B marketing agencies serving the US market.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-london"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                GTM Agencies London →
              </h3>
              <p className="text-white/60">
                Discover go-to-market agencies in London.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-500 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Build Your B2B Marketing Strategy
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Create a comprehensive go-to-market strategy tailored to the London market in minutes.
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
