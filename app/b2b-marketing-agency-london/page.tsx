import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency London 2025 | Top B2B Marketing Agencies London UK',
  description: 'Find the best B2B marketing agencies in London. Compare top London-based B2B marketing consultancies with verified credentials, specializations, and proven results.',
  keywords: 'B2B marketing agency London, B2B marketing agencies London UK, B2B digital marketing London, demand generation London, B2B lead generation London',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-london'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a London B2B marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "London agencies combine European market access with global reach. They understand UK and EU regulations, have strong fintech and enterprise software expertise, and offer easier timezone coordination for European expansion. London's position as Europe's tech and finance capital creates unparalleled B2B marketing sophistication."
      }
    },
    {
      "@type": "Question",
      "name": "How much do B2B marketing agencies in London charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "London B2B marketing agencies typically charge £10,000-£50,000+ per month for retainer engagements including strategy, execution, and reporting. Specialized projects like ABM program design or European market entry strategies range from £20,000-£100,000 depending on scope."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do London B2B marketing agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "London agencies specialize in fintech, financial services technology, cybersecurity, regtech, and enterprise SaaS given London's position as Europe's financial and business hub. Many develop deep vertical expertise within these sectors."
      }
    },
    {
      "@type": "Question",
      "name": "Do London agencies serve companies outside the UK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most London B2B marketing agencies serve global markets, particularly companies expanding from UK into Europe or entering the UK market from US or other regions. They bring valuable expertise on European market entry, GDPR compliance, and cross-border marketing strategies."
      }
    }
  ]
}

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

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"B2B Marketing Agencies London","url":"https://gtm.quest/b2b-marketing-agency-london"})}} />

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

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80" alt="B2B marketing agencies London - City of London skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">London, United Kingdom</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>B2B Marketing Agencies London</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} verified B2B marketing agencies in London—Europe's leading hub for fintech, enterprise software, and global B2B marketing.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">£{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
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

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Services in London</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">World-class marketing capabilities for Europe's leading business hub.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4">European Expansion</h3>
              <p className="text-white/70 text-lg">Pan-European GTM strategies from London hub, covering DACH, Nordics, and Southern Europe.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech Marketing</h3>
              <p className="text-white/70 text-lg">Specialized campaigns for London's world-leading fintech and financial services ecosystem.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise ABM</h3>
              <p className="text-white/70 text-lg">Account-based marketing for Canary Wharf enterprises and Fortune 500 European HQs.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-4">GDPR-Compliant</h3>
              <p className="text-white/70 text-lg">Privacy-first marketing strategies meeting European regulatory requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in London B2B</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">London's diverse economy creates opportunities across high-value sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech & Finance</h3>
              <p className="text-white/70 text-lg">Europe's largest financial center—banks, fintechs, insurtech, and wealth management.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-white/70 text-lg">Security software, regtech, and compliance solutions for regulated industries.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise SaaS</h3>
              <p className="text-white/70 text-lg">B2B software companies serving European enterprise from Tech City and beyond.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Services</h3>
              <p className="text-white/70 text-lg">Law firms, consultancies, and business services concentrated in the City.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Top B2B Marketing Agencies in London</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving London and European markets.</p>
        </div>
        <div className="w-full">
          {agencies.map((agency, i) => (
            <AgencyCard
              key={agency.slug}
              rank={i + 1}
              name={agency.name}
              tagline={(agency as any).b2b_description || agency.description}
              description={[(agency as any).b2b_description || agency.description]}
              bestFor={agency.specializations || []}
              keyServices={(agency as any).key_services || agency.specializations || []}
              website={agency.website || '#'}
              primaryColor={(agency as any).primary_color || '#8B5CF6'}
              logoUrl={(agency as any).logo_url}
              backdropUrl={(agency as any).backdrop_url}
              isTopRanked={!!(agency.global_rank && agency.global_rank <= 3)}
              internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined}
              serviceAreas={agency.service_areas || []}
            />
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-12 leading-tight">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-black border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">{faq.name}</h3>
                <p className="text-white/70 text-lg leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">Explore Related Markets</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/b2b-marketing-agency-new-york" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🗽</span>
              <span className="text-white font-semibold">New York</span>
            </Link>
            <Link href="/b2b-marketing-agency-berlin" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇩🇪</span>
              <span className="text-white font-semibold">Berlin</span>
            </Link>
            <Link href="/b2b-marketing-agency-paris" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇫🇷</span>
              <span className="text-white font-semibold">Paris</span>
            </Link>
            <Link href="/b2b-marketing-agency-amsterdam" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇳🇱</span>
              <span className="text-white font-semibold">Amsterdam</span>
            </Link>
            <Link href="/b2b-marketing-agency-san-francisco" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🌉</span>
              <span className="text-white font-semibold">San Francisco</span>
            </Link>
            <Link href="/gtm-agencies-london" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🚀</span>
              <span className="text-white font-semibold">GTM London</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">B2B Marketing Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/planner" className="bg-black border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">GTM Planner</h3>
              <p className="text-white/60">Build your go-to-market strategy with our AI-powered planning tool.</p>
            </Link>
            <Link href="/best-gtm-agencies" className="bg-black border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">All Agencies</h3>
              <p className="text-white/60">Browse our complete directory of verified agencies worldwide.</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="bg-black border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">B2B Marketing UK</h3>
              <p className="text-white/60">Explore B2B marketing agencies across the United Kingdom.</p>
            </Link>
            <Link href="/b2b-gtm-strategy" className="bg-black border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">B2B GTM Strategy</h3>
              <p className="text-white/60">Learn about B2B go-to-market strategy frameworks.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your London B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive B2B marketing strategy for London and European markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
