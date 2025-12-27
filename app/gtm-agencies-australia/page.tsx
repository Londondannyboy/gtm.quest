import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'GTM Agencies Australia 2025 | Top Go-To-Market Consultants Australia',
  description: 'Find the best GTM agencies serving Australia. Compare top Australian go-to-market consultancies in Sydney, Melbourne, and across APAC.',
  keywords: 'GTM agency Australia, go-to-market agencies Australia, GTM consultants Sydney, Melbourne GTM agencies',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-australia'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes Australia unique for GTM strategy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Australia serves as the strategic gateway to the Asia-Pacific region, offering access to 4.7 billion consumers across APAC. With a sophisticated domestic market, strong fintech and SaaS ecosystems in Sydney and Melbourne, and timezone advantages for Asian markets, Australian GTM agencies excel at regional expansion strategies."
      }
    },
    {
      "@type": "Question",
      "name": "How much do GTM agencies in Australia typically charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Australian GTM agencies typically charge AUD 15,000-40,000 per month for comprehensive programs, with project-based engagements ranging AUD 30,000-150,000. Multi-market APAC expansion programs can exceed AUD 200,000 for comprehensive execution across multiple countries."
      }
    },
    {
      "@type": "Question",
      "name": "Do Australian GTM agencies serve APAC markets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most Australian GTM agencies specialize in APAC expansion. They understand the diverse markets across Singapore, Japan, South Korea, Southeast Asia, and beyond. Their timezone position (AEST) enables effective collaboration with both Asian and Western markets."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Australian GTM agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Australian GTM agencies excel in fintech, enterprise SaaS, mining technology, agriculture technology, and healthcare innovation. Australia's unique industry strengths in resources, healthcare, and financial services create specialized GTM expertise unavailable elsewhere."
      }
    }
  ]
}

export default async function GTMAgenciesAustraliaPage() {
  const agencies = await getAgenciesForLocation('Australia')
  const stats = await getLocationStats('Australia')

  const topSpecializations = stats.topSpecializations || []

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "GTM Agencies Australia",
        "description": "Top GTM agencies serving the Australian market and APAC region",
        "url": "https://gtm.quest/gtm-agencies-australia",
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
            <span className="text-white">Australia</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Image */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&q=80"
            alt="GTM agencies Australia - Sydney Opera House and Harbour Bridge"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Australia</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            GTM Agencies Australia 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {stats.totalAgencies} verified go-to-market agencies serving the Australian market and APAC region with expertise in regional expansion and growth strategies.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{stats.totalAgencies}</div>
              <div className="text-white/70 text-lg">Top Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">A${Math.round((stats.avgMinBudget * 1.5) / 1000)}K+</div>
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
            Why Choose a GTM Agency Australia for Your Business?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              <a href="https://www.austrade.gov.au/international/invest/why-australia" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Australia serves as the strategic gateway to Asia-Pacific markets</a>, offering unique advantages for B2B technology companies. With <a href="https://www.abs.gov.au/statistics/economy" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Australia's $1.7 trillion GDP economy</a> and sophisticated enterprise buyer base, Australian GTM agencies bring expertise in launching products that work across diverse APAC markets—from Singapore and Japan to Southeast Asian growth economies.
            </p>
            <p>
              The Australian tech ecosystem has grown substantially, with <a href="https://techcouncil.com.au/insights/aus-tech-ecosystem/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">over 8,000 tech startups and a thriving SaaS sector</a> concentrated in Sydney and Melbourne. This creates unique GTM dynamics: Australian B2B buyers expect global-standard products with local support, enterprise sales cycles typically span 3-6 months, and companies must navigate varied regulatory frameworks across APAC. Australian GTM agencies understand how to position for these sophisticated buyers while building scalable regional expansion strategies.
            </p>
            <p>
              Top Australian GTM agencies specialize in APAC market entry, helping US and European companies establish Australian beachheads for regional expansion. They bring expertise in adapting messaging for Australian business culture (direct, ROI-focused, relationship-driven), navigating timezone challenges across APAC, and building go-to-market motions that scale from Australia to Singapore, Japan, and beyond. The agencies below have demonstrated mastery of Australian market dynamics and proven track records in regional technology launches.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Services for Australian Markets</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Expert go-to-market capabilities for Australia and the broader Asia-Pacific region.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌏</div>
              <h3 className="text-2xl font-bold text-white mb-4">APAC Expansion</h3>
              <p className="text-white/70 text-lg">Multi-market regional strategies spanning Singapore, Japan, South Korea, and Southeast Asia.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Sales</h3>
              <p className="text-white/70 text-lg">ASX 200 targeting, account-based marketing, and complex B2B deal orchestration for Australian enterprises.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Market Entry</h3>
              <p className="text-white/70 text-lg">US/UK company Australian market entry, local positioning, and regional go-to-market strategy.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-white mb-4">Partner Channels</h3>
              <p className="text-white/70 text-lg">APAC channel development, distributor relationships, and partner-led GTM strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries for GTM in Australia</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Australia's diverse economy creates opportunities across multiple high-growth verticals.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech</h3>
              <p className="text-white/70 text-lg">Digital banking, payments, and wealthtech—Australia leads APAC in fintech innovation.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise SaaS</h3>
              <p className="text-white/70 text-lg">Cloud software and B2B platforms serving Australian enterprises and APAC markets.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">⛏️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Mining Tech</h3>
              <p className="text-white/70 text-lg">Resource technology, automation, and sustainability solutions for the mining sector.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-white mb-4">Healthtech</h3>
              <p className="text-white/70 text-lg">Healthcare innovation, telehealth platforms, and clinical software solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            How to Choose an Australian GTM Agency
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>01 — APAC Market Understanding</h3>
              <p>
                The best Australian GTM agencies understand the nuances of APAC markets—not just Australia, but Singapore, Japan, and Southeast Asia.<br/><br/>
                They know how buyer behavior differs across the region, how to adapt messaging for different cultures, and how to coordinate multi-market launches across timezones.<br/><br/>
                Ask about their experience with regional expansion and specific APAC markets you're targeting.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>02 — Local Enterprise Relationships</h3>
              <p>
                Australian enterprise sales require strong local relationships and understanding of ASX 200 procurement processes.<br/><br/>
                Top agencies have established networks with enterprise buyers, understand Australian business culture (direct, relationship-focused), and can navigate lengthy procurement cycles.<br/><br/>
                Look for agencies with proven case studies in Australian enterprise deals.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>03 — Timezone and Global Coordination</h3>
              <p>
                Australian agencies excel at bridging Eastern and Western markets, with AEST enabling effective collaboration across APAC and with US/UK headquarters.<br/><br/>
                The best agencies have processes for managing global stakeholders, coordinating launches across timezones, and maintaining momentum despite geographic distance.<br/><br/>
                This is especially critical for international companies establishing Australian operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Directory */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Top GTM Agency Australia Directory
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {stats.totalAgencies} verified go-to-market agencies serving Australian businesses with proven launch expertise and results.
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
          <h2 className="text-5xl font-black text-white mb-16">Australia GTM FAQs</h2>

          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                Why choose an Australian GTM agency?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Australian agencies understand the APAC market dynamics and offer timezone advantages for Asian expansion.<br/><br/>
                They excel at launching products across Australia, New Zealand, and Southeast Asian markets with deep local expertise.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                What is the typical cost of a GTM agency in Australia?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Australian GTM agencies typically charge A${Math.round((stats.avgMinBudget * 1.5) / 1000)}K+ per month for retainer engagements.<br/><br/>
                Project fees range from A$30K-150K depending on scope and market coverage across APAC.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                Which Australian cities have GTM agencies?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Sydney and Melbourne are the primary hubs for GTM agencies in Australia. Sydney hosts the largest tech ecosystem and financial services expertise.<br/><br/>
                Melbourne brings strong enterprise software and creative agency capabilities. Brisbane and Perth have emerging tech scenes with specialized industry focus.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                What industries do Australian GTM agencies specialize in?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Top specializations include {topSpecializations.slice(0, 3).join(', ') || 'Fintech, Enterprise SaaS, Mining Technology'}. Australian agencies have particular strength in fintech, resources technology, and healthcare innovation given the country's strong position in these sectors.
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
            <Link href="/gtm-agencies-sydney" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇦🇺</span>
              <span className="text-white font-semibold">Sydney</span>
            </Link>
            <Link href="/gtm-agencies-us" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇺🇸</span>
              <span className="text-white font-semibold">United States</span>
            </Link>
            <Link href="/gtm-agencies-uk" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇬🇧</span>
              <span className="text-white font-semibold">United Kingdom</span>
            </Link>
            <Link href="/best-gtm-agency-singapore-top-gtm-agencies-singapore" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇸🇬</span>
              <span className="text-white font-semibold">Singapore</span>
            </Link>
            <Link href="/best-gtm-agency-germany-top-gtm-agencies-germany" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇩🇪</span>
              <span className="text-white font-semibold">Germany</span>
            </Link>
            <Link href="/best-gtm-agency-canada-top-gtm-agencies-canada" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇨🇦</span>
              <span className="text-white font-semibold">Canada</span>
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
            <Link href="/best-b2b-marketing-agency-australia-top-b2b-marketing-agencies-australia" className="bg-black border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">B2B Marketing Australia</h3>
              <p className="text-white/60">Explore B2B marketing agencies serving Australian markets.</p>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your APAC GTM Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive go-to-market strategy for Australia and the Asia-Pacific region.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
