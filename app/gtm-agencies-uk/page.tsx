import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'GTM Agencies UK 2025 | Top Go-To-Market Consultants & Agencies UK',
  description: 'Find the best GTM agencies serving the UK market. Compare top go-to-market consultancies with verified credentials, brand profiles, and specializations.',
  keywords: 'GTM agency UK, go-to-market agencies UK, GTM consultants UK, product launch agency UK, B2B GTM strategy UK',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-uk'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes the UK unique for GTM strategy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The UK serves as the gateway to European markets, combining world-class financial services expertise, a thriving tech sector, and access to 450+ million consumers across Europe. London alone hosts over 50,000 tech companies and is ranked second globally for venture capital investment outside the US."
      }
    },
    {
      "@type": "Question",
      "name": "How much do GTM agencies in the UK typically charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "UK GTM agencies typically charge GBP 10,000-40,000 per month for comprehensive programs, with project-based engagements ranging GBP 25,000-100,000. Enterprise GTM strategies for multi-market European launches can exceed GBP 150,000 for comprehensive execution."
      }
    },
    {
      "@type": "Question",
      "name": "Do UK GTM agencies serve international markets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most UK GTM agencies serve global markets. Many have experience launching products across US, European, and APAC markets. They offer particular expertise in transatlantic launches and European market entry, understanding both UK-specific regulations and broader EMEA dynamics."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do UK GTM agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "UK GTM agencies excel in fintech, enterprise SaaS, healthtech, and B2B services. The UK's position as a global financial center means agencies have deep expertise in regulated industries, complex compliance requirements, and sophisticated enterprise sales cycles."
      }
    }
  ]
}

export default async function GTMAgenciesUKPage() {
  const agencies = await getAgenciesForLocation('UK')
  const stats = await getLocationStats('UK')

  const topSpecializations = stats.topSpecializations || []

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
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
      })}} />

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

      {/* Hero Section with Image */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80"
            alt="GTM agencies UK - London skyline with Tower Bridge"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">United Kingdom</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            GTM Agencies UK 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {stats.totalAgencies} verified go-to-market agencies serving UK businesses with expertise in B2B SaaS, product launches, and European market expansion.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{stats.totalAgencies}</div>
              <div className="text-white/70 text-lg">Top Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">GBP{Math.round(stats.avgMinBudget / 1000)}K+</div>
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

      {/* Why Choose Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Why Choose a GTM Agency UK for Your Business?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              <a href="https://www.gov.uk/government/publications/digital-economy-facts/digital-economy-facts" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">The United Kingdom is Europe's largest technology market</a> and serves as the primary gateway for companies expanding into European markets. With <a href="https://technation.io/report/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">London ranking as the world's second-largest tech ecosystem</a> behind only Silicon Valley, UK GTM agencies bring unparalleled expertise in launching B2B products across diverse European markets while navigating complex regulatory environments including GDPR and financial services compliance.
            </p>
            <p>
              The UK venture capital ecosystem has matured significantly, with <a href="https://www.beauhurst.com/research/equity-investment-uk/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">over GBP 15 billion invested in UK startups annually</a>. This creates unique GTM challenges: UK B2B buyers are sophisticated and research-driven, enterprise sales cycles typically span 4-9 months, and multi-stakeholder buying committees require targeted account-based approaches. UK GTM agencies understand how to navigate these dynamics while leveraging the UK's position as a bridge between US innovation and European adoption.
            </p>
            <p>
              Top UK GTM agencies specialize in cross-border expansion, fintech launches requiring regulatory expertise, and enterprise software targeting FTSE 350 companies. They bring expertise in positioning for UK buyers who prioritize ROI and business case justification, demand generation that works across UK and EU markets, and sales enablement for complex B2B environments. The agencies below have demonstrated mastery of UK market dynamics and proven track records launching technology products across EMEA.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Services for UK Markets</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Expert go-to-market capabilities for the UK and European technology markets.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">European Market Entry</h3>
              <p className="text-white/70 text-lg">UK-to-Europe expansion strategies, localization, and multi-market launch coordination.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech GTM</h3>
              <p className="text-white/70 text-lg">Regulatory-compliant launches for FCA-authorized products and financial services technology.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Sales</h3>
              <p className="text-white/70 text-lg">FTSE 350 targeting, account-based marketing, and complex B2B deal orchestration.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Transatlantic Expansion</h3>
              <p className="text-white/70 text-lg">US company UK entry and UK company US expansion with cross-border expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries for GTM in the UK</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">The UK's diverse economy creates opportunities across multiple high-growth verticals.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech</h3>
              <p className="text-white/70 text-lg">Digital banking, payments, and wealthtech—the UK is Europe's leading fintech hub.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise SaaS</h3>
              <p className="text-white/70 text-lg">Cloud software and B2B platforms serving UK enterprises and global markets.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-white mb-4">Healthtech</h3>
              <p className="text-white/70 text-lg">NHS digital transformation, clinical software, and healthcare innovation.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-white/70 text-lg">Security software, identity management, and GDPR compliance solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            How to Choose a UK GTM Agency
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>01 — UK Market Expertise</h3>
              <p>
                The best UK GTM agencies understand British business culture and buyer psychology.<br/><br/>
                They know how to position for UK enterprises that prioritize risk mitigation and proven ROI, how to navigate lengthy procurement processes, and how to build credibility with conservative decision-makers.<br/><br/>
                Ask about their experience with UK-headquartered companies and FTSE-listed enterprise clients.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>02 — European Expansion Capability</h3>
              <p>
                UK agencies should offer pathways to European markets including Germany, France, and the Nordics.<br/><br/>
                Look for agencies with multi-lingual capabilities, understanding of local market dynamics, and experience coordinating cross-border launches.<br/><br/>
                The best agencies help you use the UK as a beachhead for broader EMEA expansion.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>03 — Regulatory and Compliance Knowledge</h3>
              <p>
                UK GTM often involves navigating complex regulatory environments—GDPR, FCA, NHS frameworks, and sector-specific requirements.<br/><br/>
                Top agencies understand how to position products within regulatory constraints and build compliant GTM motions.<br/><br/>
                This is especially critical for fintech, healthtech, and enterprise security products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Directory */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Top GTM Agency UK Directory
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {stats.totalAgencies} verified go-to-market agencies serving UK businesses with proven launch expertise and results.
          </p>
        </div>

        <div className="w-full">
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
                serviceAreas={agency.service_areas || []}
              />
            )
          })}
        </div>
      </section>

      {/* Rendered FAQ Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-16">UK GTM FAQs</h2>

          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                Why choose a UK-based GTM agency?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                UK GTM agencies understand the European market dynamics, regulatory environment, and business culture.<br/><br/>
                They have experience launching products across EMEA and can navigate UK-specific considerations like GDPR, FCA regulations, and cross-border expansion into Europe.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                What is the typical cost of a GTM agency in the UK?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                UK GTM agencies typically charge GBP{Math.round(stats.avgMinBudget / 1000)}K+ per month for retainer engagements.<br/><br/>
                Project-based work ranges from GBP 15K-50K depending on scope. Enterprise GTM strategies can exceed GBP 100K for comprehensive multi-market launches.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                Do UK agencies serve international markets?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Yes, most UK GTM agencies serve global markets. Many have experience launching products across US, European, and APAC markets. The agencies listed here all have global service capabilities, meaning they can support international GTM strategies.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                What industries do UK GTM agencies specialize in?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Top specializations include {topSpecializations.slice(0, 3).join(', ') || 'B2B SaaS, Fintech, Enterprise Software'}. UK agencies have particular strength in fintech, enterprise software, and healthcare technology given the UK's strong position in these sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schema FAQ Cards */}
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

      {/* Related Markets */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">Explore GTM Agencies in Related Markets</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/gtm-agencies-london" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇬🇧</span>
              <span className="text-white font-semibold">London</span>
            </Link>
            <Link href="/gtm-agencies-us" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇺🇸</span>
              <span className="text-white font-semibold">United States</span>
            </Link>
            <Link href="/gtm-agencies-australia" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇦🇺</span>
              <span className="text-white font-semibold">Australia</span>
            </Link>
            <Link href="/best-gtm-agency-germany-top-gtm-agencies-germany" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇩🇪</span>
              <span className="text-white font-semibold">Germany</span>
            </Link>
            <Link href="/best-gtm-agency-france-top-gtm-agencies-france" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇫🇷</span>
              <span className="text-white font-semibold">France</span>
            </Link>
            <Link href="/best-gtm-agency-ireland-top-gtm-agencies-ireland" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇮🇪</span>
              <span className="text-white font-semibold">Ireland</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">GTM Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/planner" className="bg-black border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">GTM Planner</h3>
              <p className="text-white/60">Build your go-to-market strategy with our AI-powered planning tool.</p>
            </Link>
            <Link href="/best-gtm-agencies" className="bg-black border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">All GTM Agencies</h3>
              <p className="text-white/60">Browse our complete directory of verified GTM agencies worldwide.</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="bg-black border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">B2B Marketing UK</h3>
              <p className="text-white/60">Explore B2B marketing agencies serving UK markets.</p>
            </Link>
            <Link href="/gtm-consulting" className="bg-black border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">GTM Consulting</h3>
              <p className="text-white/60">Learn about go-to-market consulting services and methodologies.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your UK GTM Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive go-to-market strategy tailored to the UK and European markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
