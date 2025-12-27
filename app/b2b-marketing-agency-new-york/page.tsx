import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency New York 2025 | Best NYC B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in New York City. Compare top NYC B2B marketing consultancies for Manhattan, Brooklyn and Northeast expansion.',
  keywords: 'B2B marketing agency New York, B2B marketing NYC, best B2B marketing Manhattan, top B2B marketing agencies Brooklyn',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-new-york'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a New York B2B marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NYC agencies understand enterprise marketing at scale, with deep expertise in financial services, media, and Fortune 500 marketing. They excel at brand positioning, executive thought leadership, and complex stakeholder marketing campaigns. New York's concentration of decision-makers and capital creates unparalleled expertise in high-value enterprise account marketing."
      }
    },
    {
      "@type": "Question",
      "name": "How much do B2B marketing agencies in NYC charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "New York B2B marketing agencies typically charge $20,000-$50,000+ per month for comprehensive retainers. Project fees range from $50,000-$250,000+ depending on scope and campaign complexity. Premium positioning, brand strategy, and enterprise ABM programs command higher rates reflecting NYC's sophisticated market."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do NYC B2B marketing agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NYC agencies specialize in financial services (Wall Street), media and advertising, enterprise SaaS, professional services, and healthcare/pharma. The city's Fortune 500 concentration creates deep expertise in complex B2B sales cycles and multi-stakeholder enterprise marketing campaigns."
      }
    },
    {
      "@type": "Question",
      "name": "Do NYC agencies work with companies outside New York?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most NYC B2B agencies serve national and global clients. New York's position as a global business capital means agencies regularly work with companies across the US and internationally. They're particularly valuable for companies targeting Fortune 500 accounts or seeking premium brand positioning."
      }
    }
  ]
}

export default async function B2BMarketingAgencyNewYorkPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'New York')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 15000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"B2B Marketing Agencies New York","url":"https://gtm.quest/b2b-marketing-agency-new-york"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing NYC</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1920&q=80" alt="B2B marketing agencies New York - NYC skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">New York City</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>B2B Marketing Agencies NYC</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving New York City—verified experts in enterprise marketing and Fortune 500 campaigns.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">NYC Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">${Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">B2B Marketing NYC: Finance, Tech & Enterprise Hub</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              New York City anchors one of the world's largest metropolitan economies with a <a href="https://en.wikipedia.org/wiki/Economy_of_New_York_City" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">GDP exceeding $2 trillion</a>, larger than most countries. The city serves as global headquarters for <a href="https://fortune.com/ranking/fortune500/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">73 Fortune 500 companies</a> and dominates industries including financial services, media, advertising, and enterprise technology. Manhattan's concentration of decision-makers and capital creates unparalleled opportunities for B2B marketers targeting high-value enterprise accounts.
            </p>
            <p>
              NYC's B2B marketing landscape reflects the city's sophistication and competitive intensity. From <a href="https://en.wikipedia.org/wiki/Wall_Street" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Wall Street</a> financial institutions to Silicon Alley tech companies, B2B buyers expect premium positioning, executive-level thought leadership, and sophisticated account-based marketing approaches. The city's advertising heritage (home to the world's largest ad agencies) means marketing standards remain exceptionally high, with buyers accustomed to world-class creative execution and strategic depth that agencies in smaller markets rarely match.
            </p>
            <p>
              New York B2B marketing agencies excel at navigating complex stakeholder environments, building C-suite relationships, and executing multi-channel campaigns that break through noise in the world's most competitive media market. They bring expertise in <a href="https://www.hubspot.com/state-of-marketing" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">financial services marketing</a>, enterprise SaaS positioning, professional services brand building, and the high-stakes messaging required to win deals measured in millions of dollars. NYC agencies understand that enterprise buyers in Manhattan have seen everything—and know how to cut through that sophistication with genuine value.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Services in NYC</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Enterprise-grade marketing capabilities for New York's Fortune 500 ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise ABM</h3>
              <p className="text-white/70 text-lg">Account-based marketing for Fortune 500 targets with complex buying committees and multi-stakeholder sales cycles.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Executive Positioning</h3>
              <p className="text-white/70 text-lg">C-suite thought leadership and executive brand building for NYC's demanding enterprise audience.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Financial Services</h3>
              <p className="text-white/70 text-lg">Specialized marketing for Wall Street institutions, fintech, and financial technology companies.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Demand Generation</h3>
              <p className="text-white/70 text-lg">High-value pipeline creation for enterprise sales teams targeting Northeast and national accounts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in NYC B2B</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">New York's diverse enterprise ecosystem creates opportunities across high-value sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-bold text-white mb-4">Financial Services</h3>
              <p className="text-white/70 text-lg">Wall Street banks, asset managers, insurance, and fintech—the world's largest financial center.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📺</div>
              <h3 className="text-2xl font-bold text-white mb-4">Media & Advertising</h3>
              <p className="text-white/70 text-lg">Global media headquarters, ad agencies, and martech companies concentrated in Manhattan.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Tech</h3>
              <p className="text-white/70 text-lg">Silicon Alley SaaS companies and enterprise software serving NYC's Fortune 500 concentration.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Services</h3>
              <p className="text-white/70 text-lg">Law firms, consulting, accounting, and business services headquartered in New York.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose a NYC B2B Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">Enterprise Experience</h3>
              <p className="text-xl text-white/70 leading-relaxed">Prioritize agencies with proven Fortune 500 and enterprise experience. NYC's sophisticated buyers require agencies who understand complex procurement, multi-stakeholder sales, and the executive-level positioning that wins seven-figure deals.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Industry Specialization</h3>
              <p className="text-xl text-white/70 leading-relaxed">NYC agencies often specialize in specific verticals—financial services, media, professional services, or enterprise tech. Choose agencies with deep expertise in your industry who understand buyer personas, competitive dynamics, and regulatory requirements.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">Creative Excellence</h3>
              <p className="text-xl text-white/70 leading-relaxed">NYC's advertising heritage sets high creative standards. Evaluate agencies' portfolio quality, strategic thinking, and ability to create campaigns that stand out in the world's most competitive media market.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies in New York</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving NYC and the Northeast.</p>
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
            <Link href="/b2b-marketing-agency-boston" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🏛️</span>
              <span className="text-white font-semibold">Boston</span>
            </Link>
            <Link href="/b2b-marketing-agency-chicago" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🏙️</span>
              <span className="text-white font-semibold">Chicago</span>
            </Link>
            <Link href="/b2b-marketing-agency-london" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇬🇧</span>
              <span className="text-white font-semibold">London</span>
            </Link>
            <Link href="/b2b-marketing-agency-los-angeles" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🌴</span>
              <span className="text-white font-semibold">Los Angeles</span>
            </Link>
            <Link href="/gtm-agencies-new-york" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🚀</span>
              <span className="text-white font-semibold">GTM NYC</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your NYC B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for New York and Northeast markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
