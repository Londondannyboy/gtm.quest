import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Munich 2025 | Best Munich B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in Munich. Compare top Munich B2B marketing consultancies for Bavaria, German enterprise, and automotive tech expansion.',
  keywords: 'B2B marketing agency Munich, B2B marketing Munich, best B2B marketing Munich, top B2B marketing agencies Bavaria, German B2B marketing',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-munich'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a Munich B2B marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Munich agencies understand German enterprise culture, automotive sector dynamics, and Bavarian industrial excellence. They excel at account-based marketing for DAX corporations, technical content for engineering audiences, and the relationship-driven approaches required to win high-value contracts with Germany's most prestigious companies including BMW, Siemens, and Allianz."
      }
    },
    {
      "@type": "Question",
      "name": "How much do B2B marketing agencies in Munich charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Munich B2B marketing agencies typically charge EUR15,000-EUR40,000+ per month for comprehensive retainers. Project fees range from EUR35,000-EUR175,000+ depending on scope and campaign complexity. Enterprise ABM programs and automotive sector marketing command premium rates reflecting Munich's affluent corporate environment."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Munich B2B marketing agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Munich agencies specialize in automotive technology (BMW, Audi suppliers), industrial manufacturing (Siemens ecosystem), enterprise software, insurance and financial services (Allianz, Munich Re), and deep tech sectors like aerospace and defense. The city's DAX corporation concentration creates expertise in complex B2B sales cycles and multi-stakeholder enterprise campaigns."
      }
    },
    {
      "@type": "Question",
      "name": "Do Munich agencies work with companies outside Germany?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Munich B2B agencies serve international clients targeting the DACH region (Germany, Austria, Switzerland) and broader European markets. They're particularly valuable for companies entering German enterprise markets, automotive supply chains, or seeking to establish credibility with German engineering-focused buyers who demand technical depth and quality positioning."
      }
    }
  ]
}

export default async function B2BMarketingAgencyMunichPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Munich')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 12000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"B2B Marketing Agencies Munich","url":"https://gtm.quest/b2b-marketing-agency-munich"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Munich</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1595867818082-083862f3d630?w=1920&q=80" alt="B2B marketing agencies Munich - Munich skyline with Frauenkirche" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Munich, Germany</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>B2B Marketing Agencies Munich</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Munich—verified experts in German enterprise, automotive tech, and Bavarian industrial marketing.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Munich Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{'\u20AC'}{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">B2B Marketing Munich: Germany's Corporate & Innovation Powerhouse</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Munich stands as <a href="https://en.wikipedia.org/wiki/Economy_of_Munich" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Germany's wealthiest city with GDP per capita exceeding EUR86,000</a>, hosting global headquarters for BMW, Siemens, Allianz, Munich Re, and other DAX-listed corporations that define German industrial and technological excellence. The Bavarian capital combines deep-pocketed enterprise buyers with thriving technology sectors in <a href="https://www.invest-in-bavaria.com/en/industries/automotive" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">automotive innovation</a>, industrial IoT, and enterprise software—creating unparalleled opportunities for B2B marketers targeting high-value accounts.
            </p>
            <p>
              Munich's B2B marketing landscape reflects Bavarian business culture that values quality, precision, and long-term relationships over short-term tactics. From <a href="https://en.wikipedia.org/wiki/Siemens" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Siemens</a> enterprise technology divisions to automotive tech startups in the BMW ecosystem, B2B buyers expect marketing that demonstrates technical depth, engineering excellence, and the systematic approaches that align with German procurement processes. Munich's concentration of engineering talent means B2B content must meet exceptionally high standards for technical accuracy.
            </p>
            <p>
              Munich B2B marketing agencies excel at enterprise account-based marketing, technical content for engineering audiences, and relationship-building strategies that support long sales cycles typical of German enterprise deals. They bring expertise in <a href="https://www.gtai.de/en/invest/industries/automotive" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">automotive sector marketing</a>, industrial technology positioning, and the premium brand approaches required to succeed in Germany's most affluent and quality-focused business environment. Understanding German business etiquette and the preference for substance over hype is essential for any marketing success in Bavaria.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Services in Munich</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Enterprise-grade marketing capabilities for Bavaria's DAX corporation ecosystem and Mittelstand companies.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-white mb-4">Automotive Marketing</h3>
              <p className="text-white/70 text-lg">Specialized B2B marketing for BMW, Audi suppliers and automotive technology companies in Bavaria's mobility cluster.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-white mb-4">Industrial Tech ABM</h3>
              <p className="text-white/70 text-lg">Account-based marketing for Siemens ecosystem partners and Industry 4.0 technology companies.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Content</h3>
              <p className="text-white/70 text-lg">Engineering-grade content marketing that meets German technical standards and builds credibility with STEM buyers.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Relationships</h3>
              <p className="text-white/70 text-lg">Long-cycle relationship marketing aligned with German business culture and enterprise procurement timelines.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in Munich B2B</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Bavaria's diverse industrial ecosystem creates opportunities across high-value German enterprise sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚙</div>
              <h3 className="text-2xl font-bold text-white mb-4">Automotive Tech</h3>
              <p className="text-white/70 text-lg">BMW, Audi, and hundreds of Tier 1-3 suppliers driving electric and autonomous vehicle innovation.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Industrial Manufacturing</h3>
              <p className="text-white/70 text-lg">Siemens-led ecosystem of industrial automation, IoT, and smart manufacturing technology.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Insurance & Reinsurance</h3>
              <p className="text-white/70 text-lg">Allianz, Munich Re, and insurtech companies in Europe's insurance capital.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Aerospace & Defense</h3>
              <p className="text-white/70 text-lg">Airbus, MTU, and aerospace suppliers concentrated in Bavaria's defense cluster.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose a Munich B2B Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">German Enterprise Experience</h3>
              <p className="text-xl text-white/70 leading-relaxed">Prioritize agencies with proven DAX corporation and Mittelstand experience. German enterprise buyers require agencies who understand formal procurement processes, technical decision-making committees, and the long relationship-building cycles typical of Bavarian business culture.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Technical Credibility</h3>
              <p className="text-xl text-white/70 leading-relaxed">Munich's engineering culture demands marketing with technical substance. Choose agencies that can create credible content for STEM audiences, understand industrial technology, and avoid the hyperbole that German buyers immediately reject.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">Industry Specialization</h3>
              <p className="text-xl text-white/70 leading-relaxed">Munich agencies often specialize in specific verticals—automotive, industrial tech, insurance, or aerospace. Select agencies with deep expertise in your industry who understand competitive dynamics, buyer personas, and regulatory requirements in German markets.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies in Munich</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Munich, Bavaria, and the DACH region.</p>
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
            <Link href="/b2b-marketing-agency-berlin" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇩🇪</span>
              <span className="text-white font-semibold">Berlin</span>
            </Link>
            <Link href="/b2b-marketing-agency-frankfurt" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🏦</span>
              <span className="text-white font-semibold">Frankfurt</span>
            </Link>
            <Link href="/b2b-marketing-agency-london" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇬🇧</span>
              <span className="text-white font-semibold">London</span>
            </Link>
            <Link href="/b2b-marketing-agency-zurich" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇨🇭</span>
              <span className="text-white font-semibold">Zurich</span>
            </Link>
            <Link href="/b2b-marketing-agency-amsterdam" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇳🇱</span>
              <span className="text-white font-semibold">Amsterdam</span>
            </Link>
            <Link href="/gtm-agencies-munich" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🚀</span>
              <span className="text-white font-semibold">GTM Munich</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Munich B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Munich, Bavaria, and German enterprise markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
