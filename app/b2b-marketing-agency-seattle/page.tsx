import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Seattle 2025 | Best Seattle B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in Seattle. Compare top Seattle B2B marketing consultancies for cloud computing, enterprise software, and the Amazon/Microsoft ecosystem.',
  keywords: 'B2B marketing agency Seattle, B2B marketing Seattle, best B2B marketing AWS, top B2B marketing agencies Microsoft ecosystem',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-seattle'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a Seattle B2B marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seattle agencies understand cloud infrastructure marketing, developer-focused content strategies, and enterprise software positioning. They excel at technical storytelling, engineering-led sales cycles, and the data-driven marketing approaches that resonate with Pacific Northwest buyers. With deep Amazon and Microsoft ecosystem expertise, Seattle agencies know how to reach enterprise tech decision-makers."
      }
    },
    {
      "@type": "Question",
      "name": "How much do B2B marketing agencies in Seattle charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seattle B2B marketing agencies typically charge $15,000-$40,000+ per month for comprehensive retainers. Project fees range from $35,000-$175,000+ depending on scope and technical complexity. Developer marketing, cloud infrastructure campaigns, and enterprise ABM programs command premium rates reflecting Seattle's specialized technical expertise."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Seattle B2B marketing agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seattle agencies specialize in cloud computing (AWS, Azure), enterprise software, developer tools, AI/ML platforms, and cybersecurity. The region's concentration of Microsoft, Amazon, and enterprise tech companies creates deep expertise in complex B2B sales cycles targeting CTOs, engineering leaders, and technical decision-makers."
      }
    },
    {
      "@type": "Question",
      "name": "Do Seattle agencies work with companies outside the Pacific Northwest?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most Seattle B2B agencies serve national and global clients. Seattle's position as a global cloud computing and enterprise software hub means agencies regularly work with tech companies worldwide. They're particularly valuable for companies targeting enterprise IT buyers or building developer-focused go-to-market strategies."
      }
    }
  ]
}

export default async function B2BMarketingAgencySeattlePage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Seattle')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 12000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"B2B Marketing Agencies Seattle","url":"https://gtm.quest/b2b-marketing-agency-seattle"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Seattle</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?w=1920&q=80" alt="B2B marketing agencies Seattle - Seattle skyline with Space Needle" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Seattle, Washington</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>B2B Marketing Agencies Seattle</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Seattle—verified experts in cloud computing, enterprise software, and technical marketing.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Seattle Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">${Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">B2B Marketing Seattle: Cloud & Enterprise Tech Hub</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Seattle anchors one of the world's most important enterprise technology ecosystems with a <a href="https://en.wikipedia.org/wiki/Seattle_metropolitan_area" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">metropolitan GDP exceeding $560 billion</a>, powered by <a href="https://en.wikipedia.org/wiki/Amazon_(company)" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Amazon</a> and <a href="https://en.wikipedia.org/wiki/Microsoft" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Microsoft</a> headquarters that dominate global cloud computing and enterprise software. The Puget Sound region employs over 193,000 technology workers, creating one of North America's densest concentrations of B2B tech buyers and enterprise decision-makers outside Silicon Valley.
            </p>
            <p>
              Seattle's B2B marketing landscape reflects the Pacific Northwest's pragmatic, engineering-driven business culture. Companies from AWS to enterprise SaaS startups expect marketing that demonstrates clear technical value, speaks authentically to developer and IT audiences, and supports consensus-driven enterprise purchasing decisions. Seattle agencies understand that technical buyers respond to substance over flash—detailed documentation, genuine thought leadership, and campaigns that respect their intelligence.
            </p>
            <p>
              Seattle B2B marketing agencies excel at <a href="https://aws.amazon.com/partners/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">cloud infrastructure marketing</a>, developer-focused content strategies, enterprise software positioning, and the technical storytelling required to win over CTOs, engineering leaders, and technical decision-makers. They bring deep expertise in AWS and Azure ecosystems, DevOps and platform engineering audiences, and the long-cycle enterprise sales motions that characterize Seattle's dominant tech sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Services in Seattle</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Technical marketing capabilities for Seattle's enterprise technology ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Marketing</h3>
              <p className="text-white/70 text-lg">Positioning and demand generation for cloud infrastructure, IaaS, PaaS, and enterprise cloud services.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">👨‍💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Developer Marketing</h3>
              <p className="text-white/70 text-lg">Developer-focused content, community building, and technical advocacy for platform and API companies.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise ABM</h3>
              <p className="text-white/70 text-lg">Account-based marketing for Fortune 500 technology buyers with complex, multi-stakeholder sales cycles.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Content</h3>
              <p className="text-white/70 text-lg">Documentation, technical guides, and engineering-focused thought leadership that builds credibility.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in Seattle B2B</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Seattle's enterprise tech ecosystem creates opportunities across cloud and software sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Computing</h3>
              <p className="text-white/70 text-lg">AWS, Azure, cloud infrastructure, and the massive ecosystem of cloud-native software companies.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Software</h3>
              <p className="text-white/70 text-lg">Enterprise SaaS, productivity tools, collaboration platforms, and business applications at scale.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI & Machine Learning</h3>
              <p className="text-white/70 text-lg">AI platforms, ML infrastructure, intelligent automation, and enterprise AI applications.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-white/70 text-lg">Enterprise security, cloud security, identity management, and security operations platforms.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose a Seattle B2B Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">Technical Credibility</h3>
              <p className="text-xl text-white/70 leading-relaxed">Prioritize agencies with genuine technical depth. Seattle's engineering-driven buyers can spot superficial marketing instantly—choose agencies with team members who understand cloud architecture, developer workflows, and enterprise IT decision-making processes.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Ecosystem Experience</h3>
              <p className="text-xl text-white/70 leading-relaxed">Seattle agencies often specialize in specific ecosystems—AWS partners, Microsoft/Azure ecosystem, or enterprise SaaS. Choose agencies with proven experience in your ecosystem who understand partner dynamics, competitive positioning, and buyer journeys.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">Enterprise Process</h3>
              <p className="text-xl text-white/70 leading-relaxed">Enterprise sales cycles require sustained, strategic marketing support. Evaluate agencies' experience with long-cycle ABM programs, multi-stakeholder nurturing, and the patience required for 12-18 month enterprise deals common in Seattle's tech sector.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies in Seattle</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Seattle and the Pacific Northwest.</p>
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
            <Link href="/b2b-marketing-agency-los-angeles" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🌴</span>
              <span className="text-white font-semibold">Los Angeles</span>
            </Link>
            <Link href="/b2b-marketing-agency-austin" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🤠</span>
              <span className="text-white font-semibold">Austin</span>
            </Link>
            <Link href="/b2b-marketing-agency-boston" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🏛️</span>
              <span className="text-white font-semibold">Boston</span>
            </Link>
            <Link href="/gtm-agencies-seattle" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🚀</span>
              <span className="text-white font-semibold">GTM Seattle</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Seattle B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Seattle and Pacific Northwest markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
