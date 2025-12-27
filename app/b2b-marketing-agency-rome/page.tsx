import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Rome 2025 | Best Rome B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in Rome. Compare top Rome B2B marketing consultancies for Italian government, enterprise, and tourism technology.',
  keywords: 'B2B marketing agency Rome, B2B marketing Rome, best B2B marketing Rome, top B2B marketing agencies Rome, government tech marketing Italy',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-rome'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a Rome B2B marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rome agencies understand Italian government sector marketing, public procurement processes, and institutional relationship-building. They excel at navigating complex stakeholder environments, tourism technology positioning, and the formal approaches required for Italy's public sector and large enterprise accounts. Rome's status as Italy's administrative capital creates unique expertise in government tech marketing."
      }
    },
    {
      "@type": "Question",
      "name": "How much do B2B marketing agencies in Rome charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rome B2B marketing agencies typically charge 8,000-25,000 EUR per month for comprehensive retainers. Project fees range from 15,000-80,000 EUR depending on scope and campaign complexity. Government sector and institutional marketing programs often require specialized expertise and longer engagement timelines."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Rome B2B marketing agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rome agencies specialize in government technology, public sector enterprises, tourism technology, telecommunications, and energy infrastructure. The capital's concentration of ministries and state enterprises creates deep expertise in public procurement marketing, institutional positioning, and the long-term relationship building essential for government contracts."
      }
    },
    {
      "@type": "Question",
      "name": "Do Rome agencies work with private sector companies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, while Rome's strength is government and institutional marketing, agencies also serve private enterprises, tourism technology companies, and businesses targeting Italy's public sector as customers. Rome agencies are particularly valuable for companies selling to government, utilities, or large Italian enterprises that value institutional credibility."
      }
    }
  ]
}

export default async function B2BMarketingAgencyRomePage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Rome')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"B2B Marketing Agencies Rome","url":"https://gtm.quest/b2b-marketing-agency-rome"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Rome</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1920&q=80" alt="B2B marketing agencies Rome - Rome skyline with Colosseum" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Rome</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>B2B Marketing Agencies Rome</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Rome—verified experts in government tech and Italian enterprise marketing.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Rome Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">€{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">B2B Marketing Rome: Government Tech & Enterprise Hub</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Rome serves as <a href="https://en.wikipedia.org/wiki/Rome" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Italy's political and administrative capital</a>, hosting all government ministries, major public sector enterprises, and Italian headquarters for telecommunications, energy, and infrastructure companies. The city's economy centers on public administration, professional services, and established enterprise sectors that require sophisticated B2B marketing for complex institutional environments.
            </p>
            <p>
              Rome's B2B marketing landscape reflects the capital's unique blend of governmental gravitas and modern enterprise needs. From <a href="https://en.wikipedia.org/wiki/EUR,_Rome" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">EUR business district</a> corporate headquarters to emerging government technology initiatives, B2B buyers value marketing that demonstrates institutional credibility, navigates formal decision-making hierarchies, and builds long-term relationships essential for success in Italy's public sector. Tourism technology represents a growing B2B opportunity in the world's most-visited city.
            </p>
            <p>
              Rome B2B marketing agencies excel at government sector positioning, public procurement marketing, and relationship strategies for complex stakeholder environments. They bring expertise in professional services marketing, <a href="https://en.wikipedia.org/wiki/Digital_transformation" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">digital transformation campaigns</a> for traditional enterprises, and the patience and cultural fluency required to navigate Rome's institutional buyers while supporting broader Italian and Mediterranean market expansion.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Services in Rome</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Institutional-grade marketing capabilities for Rome's government and enterprise ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Government Marketing</h3>
              <p className="text-white/70 text-lg">Specialized positioning for companies selling to Italian government ministries and public sector enterprises.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Public Procurement</h3>
              <p className="text-white/70 text-lg">Marketing support for public tender processes and government contract positioning.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Tourism Tech</h3>
              <p className="text-white/70 text-lg">B2B marketing for travel technology, hospitality platforms, and cultural heritage tech companies.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
              <p className="text-white/70 text-lg">Positioning for companies enabling digital modernization in traditional Italian enterprises.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in Rome B2B</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Rome's institutional ecosystem creates opportunities across government and established enterprise sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Government Tech</h3>
              <p className="text-white/70 text-lg">Italy's administrative capital with all ministries and major public sector technology initiatives.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Telecommunications</h3>
              <p className="text-white/70 text-lg">Major Italian telecom companies and infrastructure providers headquartered in Rome.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Tourism Technology</h3>
              <p className="text-white/70 text-lg">B2B platforms serving Italy's massive tourism industry and cultural heritage sector.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Energy & Utilities</h3>
              <p className="text-white/70 text-lg">Eni, Enel, and Italian energy companies with Rome headquarters and European reach.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose a Rome B2B Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">Institutional Experience</h3>
              <p className="text-xl text-white/70 leading-relaxed">Prioritize agencies with proven government and public sector experience. Rome's institutional environment requires agencies who understand formal procurement processes, multi-level stakeholder relationships, and the credibility-building essential for public sector success.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Relationship Networks</h3>
              <p className="text-xl text-white/70 leading-relaxed">Rome's business culture emphasizes personal connections and trust. Choose agencies with established networks in your target sectors, understanding that success often depends on relationships built over years rather than months.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">Cultural Fluency</h3>
              <p className="text-xl text-white/70 leading-relaxed">Italian business culture values respect for hierarchy and established protocols. Evaluate agencies' cultural intelligence and ability to navigate formal business environments while still creating impactful, results-driven campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies in Rome</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Rome and Italy.</p>
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
            <Link href="/b2b-marketing-agency-milan" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇮🇹</span>
              <span className="text-white font-semibold">Milan</span>
            </Link>
            <Link href="/b2b-marketing-agency-madrid" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇪🇸</span>
              <span className="text-white font-semibold">Madrid</span>
            </Link>
            <Link href="/b2b-marketing-agency-paris" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇫🇷</span>
              <span className="text-white font-semibold">Paris</span>
            </Link>
            <Link href="/b2b-marketing-agency-munich" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇩🇪</span>
              <span className="text-white font-semibold">Munich</span>
            </Link>
            <Link href="/b2b-marketing-agency-vienna" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇦🇹</span>
              <span className="text-white font-semibold">Vienna</span>
            </Link>
            <Link href="/b2b-marketing-agency-barcelona" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇪🇸</span>
              <span className="text-white font-semibold">Barcelona</span>
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
            <Link href="/best-b2b-marketing-agency-europe" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">B2B Marketing Europe</h3>
              <p className="text-white/60">Explore B2B marketing agencies across European markets.</p>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Rome B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Italian government and enterprise markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
