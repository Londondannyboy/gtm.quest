import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'GTM Agencies Austin 2025 | Top Go-To-Market Agencies Austin',
  description: 'Find the best GTM agencies in Austin. Compare top Austin go-to-market consultancies for SaaS, tech startups, and the thriving Texas tech scene.',
  keywords: 'GTM agency Austin, go-to-market agencies Austin, GTM consultants Austin, product launch agency Austin, SaaS GTM Austin',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-austin'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose an Austin GTM agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Austin GTM agencies combine startup energy with enterprise experience. As the fastest-growing tech hub in the US, Austin agencies understand rapid scaling, product-led growth, and the unique dynamics of VC-backed companies. They offer competitive rates compared to coastal cities while delivering sophisticated go-to-market capabilities."
      }
    },
    {
      "@type": "Question",
      "name": "How much do GTM agencies in Austin charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Austin GTM agencies typically charge $10,000-$30,000+ per month for comprehensive retainers. Project fees range from $35,000-$125,000+ depending on scope. Austin offers excellent value compared to Bay Area or NYC agencies while maintaining high quality, making it attractive for scaling startups managing burn rate."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Austin GTM agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Austin agencies specialize in SaaS, B2B technology, cybersecurity, fintech, and enterprise software. The city's major tech employers like Dell, Oracle, and Atlassian, plus hundreds of funded startups, create deep expertise in technology go-to-market strategies. Austin agencies also serve the growing semiconductor and clean tech sectors."
      }
    },
    {
      "@type": "Question",
      "name": "Do Austin GTM agencies work with companies outside Texas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Austin GTM agencies serve clients nationwide and globally. Many agencies work with companies across all US time zones and internationally. Austin's tech-forward culture means agencies are comfortable with remote collaboration while offering central US timezone advantages for coast-to-coast coordination."
      }
    }
  ]
}

export default async function GTMAgenciesAustinPage() {
  const agencies = await getAgenciesForLocation('Austin')
  const stats = await getLocationStats('Austin')

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"GTM Agencies Austin","url":"https://gtm.quest/gtm-agencies-austin"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' '}/{' '}
            <Link href="/best-gtm-agencies" className="hover:text-white transition-colors">GTM Agencies</Link>
            {' '}/{' '}
            <Link href="/gtm-agencies-us" className="hover:text-white transition-colors">US</Link>
            {' '}/{' '}
            <span className="text-white">Austin</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1920&q=80" alt="GTM agencies Austin - Austin Texas skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Austin, Texas</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>GTM Agencies<br/>in Austin</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {stats.totalAgencies} verified go-to-market agencies serving Austin's booming SaaS, startup, and enterprise tech ecosystem.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{stats.totalAgencies}</div><div className="text-white/70 text-lg">Austin Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">${Math.round(stats.avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">SaaS</div><div className="text-white/70 text-lg">Focus</div></div>
            <div><div className="text-6xl font-black text-white mb-3">CST</div><div className="text-white/70 text-lg">Time Zone</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose an Austin GTM Agency?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Austin has emerged as the <a href="https://en.wikipedia.org/wiki/Silicon_Hills" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">fastest-growing tech hub in America</a>, attracting major tech companies and thousands of startups. With Tesla, Oracle, and Dell headquarters, plus a thriving startup ecosystem, the <a href="https://en.wikipedia.org/wiki/Economy_of_Austin,_Texas" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Austin metropolitan economy</a> has grown to nearly $200 billion GDP. This growth has created a robust ecosystem of go-to-market agencies with deep technology expertise.
            </p>
            <p>
              Austin GTM agencies understand the unique challenges of scaling technology companies. They bring experience with product-led growth, freemium-to-paid conversion, and the aggressive growth targets that VC-backed companies face. The city's agencies combine startup agility with the enterprise experience gained from serving major technology employers. This blend creates agencies that can support companies from Series A through enterprise scale.
            </p>
            <p>
              The best Austin GTM agencies offer exceptional value compared to coastal cities. Lower cost of living means competitive rates without sacrificing talent quality. They understand central timezone advantages for national campaigns, bring deep <a href="https://www.saastr.com/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">SaaS marketing expertise</a>, and maintain the scrappy, results-oriented culture that defines Austin's tech scene. For companies watching burn rate while pursuing aggressive growth, Austin agencies deliver the sweet spot of quality and value.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Services in Austin</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Go-to-market capabilities for Austin's SaaS and technology ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Market Strategy</h3>
              <p className="text-white/70 text-lg">GTM planning for SaaS, B2B tech, and startups at every stage from seed to growth.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Product Launch</h3>
              <p className="text-white/70 text-lg">Product-led growth launches, beta programs, and market entry strategies for tech products.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Demand Generation</h3>
              <p className="text-white/70 text-lg">Pipeline building, SaaS marketing funnels, and scalable demand gen programs.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Growth Marketing</h3>
              <p className="text-white/70 text-lg">Conversion optimization, product-led growth, and scaling strategies for funded startups.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in Austin</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Austin's tech ecosystem spans startups to enterprise technology giants.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">SaaS & Software</h3>
              <p className="text-white/70 text-lg">Hundreds of SaaS companies from early-stage to unicorns, creating deep B2B software expertise.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-white/70 text-lg">Growing cluster of security companies including CrowdStrike, SailPoint, and emerging vendors.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Fintech</h3>
              <p className="text-white/70 text-lg">Payments, lending, and financial technology companies leveraging Austin's tech talent.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Tech</h3>
              <p className="text-white/70 text-lg">Dell, Oracle, and the enterprise technology ecosystem supporting Fortune 500 customers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose an Austin GTM Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">Startup Experience</h3>
              <p className="text-xl text-white/70 leading-relaxed">Prioritize agencies with proven startup scaling experience. Austin agencies should understand the urgency of VC timelines, the importance of capital efficiency, and how to balance aggressive growth with sustainable unit economics.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">SaaS Expertise</h3>
              <p className="text-xl text-white/70 leading-relaxed">Evaluate agencies' understanding of SaaS metrics and models. The best Austin agencies speak fluently about CAC, LTV, NDR, and the marketing strategies that drive efficient customer acquisition and expansion revenue.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">Scrappy Execution</h3>
              <p className="text-xl text-white/70 leading-relaxed">Look for agencies with Austin's results-oriented culture. The best agencies move fast, test constantly, and prioritize measurable outcomes over elaborate strategies. They should feel like an extension of your team.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Agencies in Austin</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{stats.totalAgencies} verified agencies serving Austin and Texas.</p>
        </div>
        <div className="w-full">
          {agencies.map((agency, i) => (
            <AgencyCard
              key={agency.slug}
              rank={i + 1}
              name={agency.name}
              tagline={agency.description}
              description={[agency.description]}
              bestFor={agency.specializations || []}
              keyServices={[]}
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
            <Link href="/gtm-agencies-san-francisco" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">San Francisco</span>
            </Link>
            <Link href="/gtm-agencies-new-york" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">New York</span>
            </Link>
            <Link href="/gtm-agencies-seattle" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">Seattle</span>
            </Link>
            <Link href="/gtm-agencies-chicago" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">Chicago</span>
            </Link>
            <Link href="/gtm-agencies-us" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">US (All)</span>
            </Link>
            <Link href="/b2b-marketing-agency-austin" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">B2B Austin</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">GTM Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/planner" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">GTM Planner</h3>
              <p className="text-white/60">Build your go-to-market strategy with our AI-powered planning tool.</p>
            </Link>
            <Link href="/best-gtm-agencies" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">All Agencies</h3>
              <p className="text-white/60">Browse our complete directory of verified GTM agencies worldwide.</p>
            </Link>
            <Link href="/gtm-agencies-us" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">GTM Agencies US</h3>
              <p className="text-white/60">Explore go-to-market agencies across the United States.</p>
            </Link>
            <Link href="/b2b-gtm-strategy" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">B2B GTM Strategy</h3>
              <p className="text-white/60">Learn about B2B go-to-market strategy frameworks.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Austin GTM Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a go-to-market strategy for Austin's SaaS and startup ecosystem.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
