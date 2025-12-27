import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Austin 2025 | Best Austin B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in Austin. Compare top Austin B2B marketing consultancies for tech startups, enterprise SaaS, and the Texas tech ecosystem.',
  keywords: 'B2B marketing agency Austin, B2B marketing Austin, best B2B marketing Silicon Hills, top B2B marketing agencies Texas tech',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-austin'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose an Austin B2B marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Austin agencies combine Silicon Valley sophistication with entrepreneurial creativity and accessible pricing. They excel at startup and growth-stage marketing, product-led growth, community building, and scrappy go-to-market strategies that maximize impact with efficient budgets. Austin's tech boom has attracted top marketing talent offering premium expertise at more competitive rates."
      }
    },
    {
      "@type": "Question",
      "name": "How much do B2B marketing agencies in Austin charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Austin B2B marketing agencies typically charge $12,000-$35,000+ per month for comprehensive retainers, offering 20-30% cost savings versus coastal markets. Project fees range from $30,000-$150,000+ depending on scope. Austin provides premium expertise and Silicon Valley-caliber strategies at more accessible price points for high-growth B2B companies."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Austin B2B marketing agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Austin agencies specialize in enterprise SaaS, developer tools, semiconductors, cleantech, and emerging technology categories. The region's startup ecosystem creates deep expertise in growth-stage marketing, product-led growth, and building scalable go-to-market motions for companies competing against better-funded incumbents."
      }
    },
    {
      "@type": "Question",
      "name": "Do Austin agencies work with companies outside Texas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most Austin B2B agencies serve national and global clients. Austin's emergence as a major tech hub means agencies work with companies across the US and internationally. They're particularly valuable for growth-stage companies seeking premium marketing expertise with more efficient cost structures than coastal alternatives."
      }
    }
  ]
}

export default async function B2BMarketingAgencyAustinPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Austin')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"B2B Marketing Agencies Austin","url":"https://gtm.quest/b2b-marketing-agency-austin"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Austin</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1920&q=80" alt="B2B marketing agencies Austin - Austin skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Austin, Texas</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>B2B Marketing Agencies Austin</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Austin—verified experts in startup growth, enterprise SaaS, and the Texas tech ecosystem.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Austin Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">${Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">B2B Marketing Austin: Tech Hub & Startup Ecosystem</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Austin has emerged as <a href="https://en.wikipedia.org/wiki/Silicon_Hills" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">America's fastest-growing technology hub</a>, with a metropolitan GDP exceeding $170 billion and tech employment growth outpacing every major US city. The region has attracted major relocations from <a href="https://en.wikipedia.org/wiki/Oracle_Corporation" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Oracle</a>, Tesla, and Apple alongside thousands of startups, creating a dynamic B2B ecosystem combining Silicon Valley innovation with Texas business pragmatism.
            </p>
            <p>
              Austin's B2B marketing landscape reflects the city's entrepreneurial culture that values authenticity, community building, and creative problem-solving. The <a href="https://www.sxsw.com/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">SXSW ecosystem</a> has created a unique marketing culture emphasizing genuine connections, content-driven strategies, and grassroots community development over polished corporate approaches. Austin agencies understand how to help growth-stage companies compete against better-funded incumbents through superior positioning and efficient channel strategies.
            </p>
            <p>
              Austin B2B marketing agencies specialize in <a href="https://openviewpartners.com/product-led-growth/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">product-led growth</a>, startup go-to-market strategy, enterprise SaaS positioning, and community-driven marketing approaches. They bring expertise in developer tools, emerging technology categories, and the scrappy, high-impact campaigns that help early and growth-stage companies establish market presence. With strong connections to Austin's venture ecosystem and lower overhead costs, Austin agencies deliver Silicon Valley-caliber strategies at more accessible price points.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Services in Austin</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Growth-focused marketing capabilities for Austin's startup and enterprise tech ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Growth Marketing</h3>
              <p className="text-white/70 text-lg">Scalable demand generation and pipeline acceleration for high-growth SaaS and technology companies.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold text-white mb-4">Product-Led Growth</h3>
              <p className="text-white/70 text-lg">PLG strategy, user acquisition, and conversion optimization for product-driven go-to-market motions.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-white mb-4">Community Building</h3>
              <p className="text-white/70 text-lg">Developer communities, user groups, and grassroots marketing that builds authentic brand advocates.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-4">GTM Strategy</h3>
              <p className="text-white/70 text-lg">Go-to-market planning for startups and growth-stage companies entering new markets or segments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in Austin B2B</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Austin's diverse tech ecosystem creates opportunities across high-growth sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise SaaS</h3>
              <p className="text-white/70 text-lg">Business software, productivity tools, and enterprise applications from Austin's growing SaaS ecosystem.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Developer Tools</h3>
              <p className="text-white/70 text-lg">DevOps platforms, API tools, developer infrastructure, and engineering productivity software.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Semiconductors</h3>
              <p className="text-white/70 text-lg">Chip design, semiconductor manufacturing, and the hardware ecosystem anchored by Samsung and NXP.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-white mb-4">Cleantech</h3>
              <p className="text-white/70 text-lg">Renewable energy, sustainability software, and clean technology driven by Tesla's Austin presence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose an Austin B2B Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">Growth Stage Fit</h3>
              <p className="text-xl text-white/70 leading-relaxed">Match agency experience to your growth stage. Austin excels at startup and growth-stage marketing—look for agencies with proven experience scaling companies from seed through Series B and beyond, with case studies showing measurable pipeline impact.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">PLG Expertise</h3>
              <p className="text-xl text-white/70 leading-relaxed">If you're pursuing product-led growth, prioritize agencies with genuine PLG experience. Evaluate their understanding of freemium conversion, user activation, and the unique marketing requirements of product-driven go-to-market motions.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">Scrappy Execution</h3>
              <p className="text-xl text-white/70 leading-relaxed">Austin's culture values efficient execution over polished process. Look for agencies that can move fast, test rapidly, and deliver results without the overhead and bureaucracy common at larger coastal agencies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies in Austin</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Austin and Texas.</p>
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
            <Link href="/b2b-marketing-agency-san-francisco" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🌉</span>
              <span className="text-white font-semibold">San Francisco</span>
            </Link>
            <Link href="/b2b-marketing-agency-new-york" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🗽</span>
              <span className="text-white font-semibold">New York</span>
            </Link>
            <Link href="/b2b-marketing-agency-seattle" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🌲</span>
              <span className="text-white font-semibold">Seattle</span>
            </Link>
            <Link href="/b2b-marketing-agency-los-angeles" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🌴</span>
              <span className="text-white font-semibold">Los Angeles</span>
            </Link>
            <Link href="/b2b-marketing-agency-denver" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🏔️</span>
              <span className="text-white font-semibold">Denver</span>
            </Link>
            <Link href="/gtm-agencies-austin" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🚀</span>
              <span className="text-white font-semibold">GTM Austin</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Austin B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Austin and Texas markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
