import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency San Francisco 2025 | Best SF B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in San Francisco. Compare top Silicon Valley B2B marketing consultancies for SaaS, tech startups, and VC-backed companies.',
  keywords: 'B2B marketing agency San Francisco, B2B marketing SF, Silicon Valley B2B marketing, Bay Area marketing agencies, SaaS marketing agency',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-san-francisco'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a San Francisco B2B marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SF agencies pioneered modern B2B marketing tactics including product-led growth, developer marketing, and bottom-up enterprise adoption. They understand SaaS metrics, venture-backed growth expectations, and marketing to technical buyers better than agencies anywhere else globally. Silicon Valley's concentration of successful startups means SF agencies have battle-tested playbooks for every growth stage."
      }
    },
    {
      "@type": "Question",
      "name": "How much do B2B marketing agencies in San Francisco charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "San Francisco B2B marketing agencies typically charge $25,000-$50,000+ per month for comprehensive retainers. Project fees range from $75,000-$300,000+ depending on scope. Premium positioning, experienced teams with successful exit experience, and proven SaaS expertise command the industry's highest rates."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do San Francisco B2B marketing agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SF agencies specialize in SaaS, developer tools, cloud infrastructure, fintech, and enterprise software. They excel at product-led growth strategies, developer community building, and marketing to technical buyers. Many have deep expertise in vertical SaaS, API platforms, and infrastructure-as-a-service companies."
      }
    },
    {
      "@type": "Question",
      "name": "Do San Francisco agencies work with companies outside the Bay Area?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most SF B2B agencies serve national and global clients, particularly VC-backed companies regardless of location. Many specialize in helping non-SF startups adopt Silicon Valley marketing practices. They're particularly valuable for companies seeking Series A-C growth marketing expertise and PLG strategies."
      }
    }
  ]
}

export default async function B2BMarketingAgencySanFranciscoPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'San Francisco')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 15000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"B2B Marketing Agencies San Francisco","url":"https://gtm.quest/b2b-marketing-agency-san-francisco"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing SF</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1920&q=80" alt="B2B marketing agencies San Francisco - Golden Gate Bridge and Bay Area skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">San Francisco, California</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>B2B Marketing Agencies SF</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Silicon Valley—verified experts in SaaS, PLG, and venture-backed growth.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">SF Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">${Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">B2B Marketing SF: The Global SaaS Capital</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              San Francisco anchors the <a href="https://en.wikipedia.org/wiki/Silicon_Valley" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">world's premier technology ecosystem</a> with a Bay Area GDP exceeding $1.1 trillion—larger than most countries. The region is home to <a href="https://news.crunchbase.com/venture/unicorn-board/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">over 200 unicorn startups</a> and the highest concentration of venture capital globally, with firms like Sequoia, Andreessen Horowitz, and Greylock deploying billions annually. This creates unparalleled demand for B2B marketing agencies who understand hypergrowth, product-led growth, and the specific requirements of VC-backed companies.
            </p>
            <p>
              San Francisco's B2B marketing landscape reflects Silicon Valley's unique culture of innovation and rapid experimentation. From <a href="https://www.saastr.com/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">SaaS-native companies</a> to developer tool startups, B2B buyers in SF expect agencies who understand metrics like CAC payback, net revenue retention, and product-qualified leads. The city's agencies pioneered strategies for freemium conversion, bottom-up enterprise adoption, and community-led growth that are now being replicated worldwide but remain most refined in their birthplace.
            </p>
            <p>
              The best San Francisco B2B marketing agencies bring deep expertise in <a href="https://openviewpartners.com/product-led-growth/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">product-led growth methodology</a>, developer marketing, technical content creation, and account-based marketing for enterprise software. They understand how to market API platforms, infrastructure tools, and horizontal SaaS products to technical and business buyers alike. With direct relationships to portfolio companies across the venture ecosystem, SF agencies operate at the cutting edge of B2B marketing evolution.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Services in San Francisco</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Growth-stage marketing capabilities for Silicon Valley's venture ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Product-Led Growth</h3>
              <p className="text-white/70 text-lg">PLG strategy, freemium optimization, self-serve conversion, and product-qualified lead programs for SaaS companies.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">👨‍💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Developer Marketing</h3>
              <p className="text-white/70 text-lg">Technical content, API documentation, developer community building, and DevRel programs for infrastructure companies.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-4">Growth Marketing</h3>
              <p className="text-white/70 text-lg">Demand generation, paid acquisition, SEO, and conversion optimization for Series A-C stage companies.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise ABM</h3>
              <p className="text-white/70 text-lg">Account-based programs for SaaS companies moving upmarket from SMB to enterprise segments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in SF B2B</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Silicon Valley's technology ecosystem creates specialized opportunities across high-growth sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold text-white mb-4">SaaS & Cloud</h3>
              <p className="text-white/70 text-lg">Enterprise software, cloud platforms, and B2B SaaS companies from seed to IPO stage.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-white mb-4">Developer Tools</h3>
              <p className="text-white/70 text-lg">APIs, SDKs, infrastructure platforms, and developer-focused products requiring technical marketing.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech</h3>
              <p className="text-white/70 text-lg">Payments, banking infrastructure, wealth management, and B2B financial technology companies.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI & ML</h3>
              <p className="text-white/70 text-lg">Artificial intelligence platforms, machine learning tools, and AI-native enterprise software.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose an SF B2B Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">SaaS Experience</h3>
              <p className="text-xl text-white/70 leading-relaxed">Prioritize agencies with proven SaaS and tech company experience. Look for understanding of metrics like CAC, LTV, NRR, and product-qualified leads. Ask about their experience with PLG companies and bottom-up enterprise motions.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Growth Stage Fit</h3>
              <p className="text-xl text-white/70 leading-relaxed">SF agencies often specialize by company stage—seed, Series A, growth, or pre-IPO. Choose agencies who understand your specific growth challenges, whether it's finding PMF, scaling demand gen, or building enterprise sales.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">Technical Depth</h3>
              <p className="text-xl text-white/70 leading-relaxed">For developer tools and infrastructure companies, verify agencies can market to technical audiences. Evaluate their ability to create technical content, understand your product architecture, and build developer community.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies in San Francisco</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Silicon Valley and the Bay Area.</p>
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
            <Link href="/b2b-marketing-agency-new-york" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🗽</span>
              <span className="text-white font-semibold">New York</span>
            </Link>
            <Link href="/b2b-marketing-agency-boston" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🏛️</span>
              <span className="text-white font-semibold">Boston</span>
            </Link>
            <Link href="/b2b-marketing-agency-los-angeles" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🌴</span>
              <span className="text-white font-semibold">Los Angeles</span>
            </Link>
            <Link href="/b2b-marketing-agency-seattle" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🌲</span>
              <span className="text-white font-semibold">Seattle</span>
            </Link>
            <Link href="/b2b-marketing-agency-austin" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🤠</span>
              <span className="text-white font-semibold">Austin</span>
            </Link>
            <Link href="/gtm-agencies-san-francisco" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🚀</span>
              <span className="text-white font-semibold">GTM SF</span>
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
            <Link href="/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">B2B Marketing US</h3>
              <p className="text-white/60">Explore B2B marketing agencies across the United States.</p>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your SF B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Silicon Valley and Bay Area markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
