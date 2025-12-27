import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Chicago 2025 | Best Chicago B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in Chicago. Compare top Chicago B2B marketing consultancies for manufacturing, financial services, logistics, and Midwest enterprise.',
  keywords: 'B2B marketing agency Chicago, B2B marketing Chicago, manufacturing marketing agency, industrial B2B marketing, Midwest marketing agencies',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-chicago'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a Chicago B2B marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chicago agencies bring pragmatic, ROI-focused expertise shaped by Midwest business culture. They excel at industrial marketing, manufacturing technology, logistics platforms, and practical B2B campaigns that resonate with conservative, results-driven buyers. Their approach emphasizes measurable business outcomes and straightforward value propositions."
      }
    },
    {
      "@type": "Question",
      "name": "How much do B2B marketing agencies in Chicago charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chicago B2B marketing agencies typically charge $15,000-$35,000+ per month for comprehensive retainers. Project fees range from $40,000-$150,000+ depending on scope and geographic reach across the Midwest. Industrial and manufacturing campaigns often include trade show marketing support and channel partner enablement."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Chicago B2B marketing agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chicago agencies specialize in manufacturing, industrial equipment, logistics and supply chain, financial services, and professional services. They excel at trade show marketing, dealer/distributor programs, technical content for industrial buyers, and marketing to practical, ROI-focused Midwest enterprise decision-makers."
      }
    },
    {
      "@type": "Question",
      "name": "Do Chicago agencies work with companies outside the Midwest?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most Chicago B2B agencies serve national clients, particularly in manufacturing, logistics, and industrial sectors. Many specialize in multi-location marketing, distributor enablement, and channel partner programs. They're valuable for any company targeting industrial buyers or expanding across the Midwest and heartland markets."
      }
    }
  ]
}

export default async function B2BMarketingAgencyChicagoPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Chicago')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"B2B Marketing Agencies Chicago","url":"https://gtm.quest/b2b-marketing-agency-chicago"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Chicago</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80" alt="B2B marketing agencies Chicago - Chicago skyline at night" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Chicago, Illinois</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>B2B Marketing Agencies Chicago</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Chicago—verified experts in manufacturing, logistics, and Midwest enterprise.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Chicago Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">${Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">B2B Marketing Chicago: Manufacturing, Logistics & Enterprise Hub</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Chicago serves as the <a href="https://en.wikipedia.org/wiki/Economy_of_Chicago" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">third-largest metropolitan economy</a> in the United States with $780 billion in GDP, anchored by its strategic position as America's logistics and manufacturing hub. Home to <a href="https://fortune.com/ranking/fortune500/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">36 Fortune 500 companies</a> including Boeing, United Airlines, and McDonald's, Chicago leads in transportation infrastructure, food processing, industrial equipment, and business services.
            </p>
            <p>
              Chicago's B2B marketing landscape reflects the city's pragmatic, results-driven business culture. From <a href="https://en.wikipedia.org/wiki/Chicago_Mercantile_Exchange" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">CME Group's financial markets</a> to major manufacturers, B2B buyers in Chicago value substance over style, expecting agencies who understand multi-location rollouts, distributor marketing, and the long relationship-building cycles typical in manufacturing and industrial sectors. Chicago agencies bring straightforward value propositions aligned with practical, ROI-focused Midwest buyers.
            </p>
            <p>
              The best Chicago B2B marketing agencies specialize in <a href="https://www.industryweek.com/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">industrial marketing</a>, supply chain technology, manufacturing software, logistics platforms, and professional services. They bring deep expertise in trade show marketing, technical content development, dealer and distributor programs, and enterprise sales enablement. With strong connections to major industrial companies and mid-market enterprises across the Midwest, Chicago agencies understand how to drive substantial revenue growth for companies with complex sales cycles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Services in Chicago</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Industrial-strength marketing capabilities for Chicago's manufacturing and enterprise ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-white mb-4">Industrial Marketing</h3>
              <p className="text-white/70 text-lg">Manufacturing equipment, industrial technology, and B2B products marketing to technical and procurement buyers.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-2xl font-bold text-white mb-4">Logistics & Supply Chain</h3>
              <p className="text-white/70 text-lg">Marketing for transportation, warehousing, supply chain software, and logistics technology companies.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-white mb-4">Channel Marketing</h3>
              <p className="text-white/70 text-lg">Dealer programs, distributor enablement, and partner marketing for companies with indirect sales channels.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Trade Show Marketing</h3>
              <p className="text-white/70 text-lg">Event strategy, booth marketing, and lead generation for industrial trade shows and conferences.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in Chicago B2B</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Chicago's diverse industrial base creates opportunities across traditional and emerging sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Manufacturing</h3>
              <p className="text-white/70 text-lg">Industrial equipment, machinery, automotive parts, and manufacturing technology companies across the Midwest.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Financial Services</h3>
              <p className="text-white/70 text-lg">Commodity trading, insurance, commercial banking, and financial technology serving enterprise clients.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-white mb-4">Logistics & Transport</h3>
              <p className="text-white/70 text-lg">Rail, trucking, warehousing, and supply chain technology leveraging Chicago's central location.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Food & Agriculture</h3>
              <p className="text-white/70 text-lg">Food processing, agricultural technology, and food service B2B companies headquartered in Chicago.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose a Chicago B2B Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">Industrial Experience</h3>
              <p className="text-xl text-white/70 leading-relaxed">For manufacturing and industrial companies, prioritize agencies with proven experience in your sector. Look for understanding of technical buying processes, multi-stakeholder sales cycles, and marketing to engineers and procurement teams.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Channel Expertise</h3>
              <p className="text-xl text-white/70 leading-relaxed">Many Chicago B2B companies sell through distributors, dealers, or resellers. Evaluate agencies' experience with channel marketing, partner enablement programs, and co-marketing strategies that drive revenue through indirect channels.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">Midwest Market Knowledge</h3>
              <p className="text-xl text-white/70 leading-relaxed">Chicago agencies understand the pragmatic, relationship-driven Midwest business culture. Assess their track record with companies selling to heartland enterprises and their approach to building trust with conservative, ROI-focused buyers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies in Chicago</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Chicago and the Midwest.</p>
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
            <Link href="/b2b-marketing-agency-san-francisco" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🌉</span>
              <span className="text-white font-semibold">San Francisco</span>
            </Link>
            <Link href="/b2b-marketing-agency-boston" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🏛️</span>
              <span className="text-white font-semibold">Boston</span>
            </Link>
            <Link href="/b2b-marketing-agency-detroit" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🚗</span>
              <span className="text-white font-semibold">Detroit</span>
            </Link>
            <Link href="/b2b-marketing-agency-minneapolis" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🌾</span>
              <span className="text-white font-semibold">Minneapolis</span>
            </Link>
            <Link href="/gtm-agencies-chicago" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🚀</span>
              <span className="text-white font-semibold">GTM Chicago</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Chicago B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Chicago and Midwest markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
