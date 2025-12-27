import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Sydney 2025 | Best Sydney B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in Sydney. Compare top Australian B2B marketing consultancies for Sydney, APAC gateway expansion, and fintech marketing.',
  keywords: 'B2B marketing agency Sydney, B2B marketing Australia, best B2B marketing Sydney, APAC B2B marketing, Australian fintech marketing',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-sydney'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a Sydney B2B marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sydney agencies offer unique timezone advantages for APAC markets while maintaining Western business practices. They understand cross-cultural marketing across Australia, New Zealand, Singapore, and Southeast Asia, combining Australian operational headquarters with deep regional market intelligence for companies expanding throughout Asia-Pacific."
      }
    },
    {
      "@type": "Question",
      "name": "How much do B2B marketing agencies in Sydney charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sydney B2B marketing agencies typically charge A$20,000-A$45,000+ per month for comprehensive retainers. Project fees range from A$40,000-A$180,000+ depending on scope and regional coverage. APAC-wide campaigns, multi-country expansion programs, and fintech marketing command premium rates reflecting Sydney's strategic regional position."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Sydney B2B marketing agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sydney agencies specialize in fintech and financial services (major banks, neobanks), enterprise software and SaaS, mining and resources technology, professional services, and healthtech. The city's position as APAC financial hub creates deep expertise in regulated industry marketing and cross-border B2B campaigns across diverse Asian markets."
      }
    },
    {
      "@type": "Question",
      "name": "Do Sydney agencies work with companies outside Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Sydney B2B agencies serve international clients targeting APAC markets and companies scaling from Australia globally. They're particularly valuable for US and European companies entering Asia-Pacific through Australia, companies targeting the ANZ market, and any business seeking APAC expansion with English-speaking operational headquarters."
      }
    }
  ]
}

export default async function B2BMarketingAgencySydneyPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Sydney')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 12000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"B2B Marketing Agencies Sydney","url":"https://gtm.quest/b2b-marketing-agency-sydney"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Sydney</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&q=80" alt="B2B marketing agencies Sydney - Sydney Opera House and Harbour Bridge" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Sydney, Australia</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>B2B Marketing Agencies Sydney</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Sydney—verified experts in APAC expansion, fintech, and Australian enterprise marketing.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Sydney Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">A${Math.round((avgMinBudget * 1.5) / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">B2B Marketing Sydney: Australia's Tech Hub & APAC Gateway</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Sydney anchors <a href="https://en.wikipedia.org/wiki/Economy_of_Sydney" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Australia's largest economy with A$600+ billion in metropolitan GDP</a>, functioning as the financial and technology capital for the Asia-Pacific region. The city's strategic timezone position provides business hours overlap with both Asian and American markets, while hosting regional headquarters for global technology companies, <a href="https://www.austrade.gov.au/international/invest/why-australia/fintech" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">major financial institutions</a>, and professional services firms targeting APAC markets.
            </p>
            <p>
              Sydney's B2B marketing landscape combines Western marketing sophistication with deep APAC market intelligence. Agencies here understand the cultural nuances, buying behaviors, and business practices across Australia, New Zealand, Singapore, Hong Kong, and broader Southeast Asian markets. They excel at coordinating multi-country campaigns across diverse markets with varying levels of technological sophistication and business maturity. Sydney's <a href="https://www.sydney.com/business-events/why-sydney/economy" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">concentration of ASX-listed companies</a> and the big four banks creates sophisticated enterprise buyers who expect world-class marketing.
            </p>
            <p>
              The best Sydney B2B marketing agencies specialize in APAC expansion strategy, <a href="https://fintechaustralia.org.au/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">fintech and financial services marketing</a>, enterprise software for Australian markets, and regional go-to-market execution across multiple Asia-Pacific countries. They bring expertise in cross-cultural B2B marketing, regulatory-compliant campaigns for financial services, and scaling strategies tailored to APAC growth patterns. With strong connections to Sydney's financial district, thriving startup ecosystem, and regional business networks, Sydney agencies provide essential capabilities for companies expanding throughout Asia-Pacific.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Services in Sydney</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">APAC-focused marketing capabilities for Sydney's financial services ecosystem and tech companies.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌏</div>
              <h3 className="text-2xl font-bold text-white mb-4">APAC Expansion</h3>
              <p className="text-white/70 text-lg">Multi-country go-to-market strategies across Australia, New Zealand, Singapore, and Southeast Asian markets.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech Marketing</h3>
              <p className="text-white/70 text-lg">B2B marketing for neobanks, payment platforms, and financial technology serving Australia's sophisticated banking sector.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise ABM</h3>
              <p className="text-white/70 text-lg">Account-based marketing for ASX 200 companies and regional enterprise headquarters in Sydney.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold text-white mb-4">Cross-Cultural B2B</h3>
              <p className="text-white/70 text-lg">Culturally nuanced marketing campaigns adapted for diverse APAC business environments and buyer expectations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in Sydney B2B</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Sydney's diverse economy creates opportunities across high-value APAC enterprise sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-bold text-white mb-4">Financial Services</h3>
              <p className="text-white/70 text-lg">Big four banks, insurers, wealth managers, and 600+ fintech startups in Australia's financial capital.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Technology</h3>
              <p className="text-white/70 text-lg">Atlassian, Canva, and a growing ecosystem of SaaS companies scaling from Sydney globally.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">⛏️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Mining & Resources Tech</h3>
              <p className="text-white/70 text-lg">Mining technology, ESG solutions, and industrial software for Australia's resources sector.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-white mb-4">Healthtech</h3>
              <p className="text-white/70 text-lg">Digital health platforms, telehealth, and medical technology serving APAC healthcare markets.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose a Sydney B2B Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">APAC Market Experience</h3>
              <p className="text-xl text-white/70 leading-relaxed">Prioritize agencies with proven multi-country APAC experience. Sydney's value lies in regional reach—choose agencies who understand market entry strategies, cultural adaptation, and the regulatory requirements across Australia, New Zealand, Singapore, and Southeast Asian markets.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Industry Specialization</h3>
              <p className="text-xl text-white/70 leading-relaxed">Sydney agencies often specialize in specific verticals—fintech, enterprise software, mining tech, or professional services. Select agencies with deep expertise in your industry who understand Australian regulatory requirements and APAC buyer personas.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">Regional Network</h3>
              <p className="text-xl text-white/70 leading-relaxed">Evaluate agencies' connections across APAC markets. The best Sydney agencies have established relationships with media, partners, and local market experts across the region, enabling effective multi-country campaign execution from Australian headquarters.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies in Sydney</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Sydney and the APAC region.</p>
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

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-12 leading-tight">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">{faq.name}</h3>
                <p className="text-white/70 text-lg leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">Explore Related Markets</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/b2b-marketing-agency-melbourne" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇦🇺</span>
              <span className="text-white font-semibold">Melbourne</span>
            </Link>
            <Link href="/b2b-marketing-agency-singapore" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇸🇬</span>
              <span className="text-white font-semibold">Singapore</span>
            </Link>
            <Link href="/b2b-marketing-agency-hong-kong" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇭🇰</span>
              <span className="text-white font-semibold">Hong Kong</span>
            </Link>
            <Link href="/b2b-marketing-agency-tokyo" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇯🇵</span>
              <span className="text-white font-semibold">Tokyo</span>
            </Link>
            <Link href="/b2b-marketing-agency-auckland" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇳🇿</span>
              <span className="text-white font-semibold">Auckland</span>
            </Link>
            <Link href="/gtm-agencies-sydney" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🚀</span>
              <span className="text-white font-semibold">GTM Sydney</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">B2B Marketing Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/planner" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">GTM Planner</h3>
              <p className="text-white/60">Build your go-to-market strategy with our AI-powered planning tool.</p>
            </Link>
            <Link href="/best-gtm-agencies" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">All Agencies</h3>
              <p className="text-white/60">Browse our complete directory of verified agencies worldwide.</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-apac" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">B2B Marketing APAC</h3>
              <p className="text-white/60">Explore B2B marketing agencies across Asia-Pacific markets.</p>
            </Link>
            <Link href="/b2b-gtm-strategy" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">B2B GTM Strategy</h3>
              <p className="text-white/60">Learn about B2B go-to-market strategy frameworks.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your APAC B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Sydney, Australia, and Asia-Pacific markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
