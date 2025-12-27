import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Madrid 2025 | Best Madrid B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in Madrid. Compare top Madrid B2B marketing consultancies for Spanish enterprise, fintech, and LATAM gateway expansion.',
  keywords: 'B2B marketing agency Madrid, B2B marketing Madrid, best B2B marketing Madrid, top B2B marketing agencies Madrid, enterprise marketing Spain',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-madrid'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a Madrid B2B marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Madrid agencies understand Spanish enterprise culture, LATAM market expansion, and multinational corporate marketing. They excel at relationship-driven campaigns, financial services positioning, and the formal approaches required for Spanish corporate hierarchies. Madrid's position as gateway to Latin America makes local agencies invaluable for companies seeking Spanish-speaking market expansion."
      }
    },
    {
      "@type": "Question",
      "name": "How much do B2B marketing agencies in Madrid charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Madrid B2B marketing agencies typically charge 10,000-30,000 EUR per month for comprehensive retainers. Project fees range from 20,000-100,000 EUR depending on scope and campaign complexity. Enterprise accounts and LATAM expansion campaigns command higher rates reflecting Madrid's strategic importance."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Madrid B2B marketing agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Madrid agencies specialize in financial services (Spain's banking headquarters), telecommunications, energy, and enterprise technology. The capital's concentration of IBEX 35 companies and multinational headquarters creates deep expertise in complex B2B sales cycles, government relations, and pan-Iberian marketing campaigns."
      }
    },
    {
      "@type": "Question",
      "name": "Do Madrid agencies work with companies expanding to Latin America?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Madrid's position as the primary gateway between Europe and Latin America makes local agencies especially valuable for LATAM expansion. Spanish companies expanding to Mexico, Colombia, Chile, and other Spanish-speaking markets rely on Madrid agencies for culturally-adapted campaigns that leverage shared language while respecting regional differences."
      }
    }
  ]
}

export default async function B2BMarketingAgencyMadridPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Madrid')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 12000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"B2B Marketing Agencies Madrid","url":"https://gtm.quest/b2b-marketing-agency-madrid"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Madrid</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80" alt="B2B marketing agencies Madrid - Madrid skyline with Gran Via" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Madrid</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>B2B Marketing Agencies Madrid</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Madrid—verified experts in Spanish enterprise and LATAM gateway marketing.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Madrid Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">€{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">B2B Marketing Madrid: Enterprise Capital & LATAM Gateway</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Madrid anchors Spain's economic engine with a <a href="https://en.wikipedia.org/wiki/Economy_of_Madrid" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">metropolitan GDP exceeding €230 billion</a>, representing over 17% of Spain's total economy. The capital hosts headquarters for Spain's largest banks, telecommunications companies, and <a href="https://en.wikipedia.org/wiki/IBEX_35" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">IBEX 35 corporations</a>, while serving as the primary European gateway for companies expanding into Latin American markets.
            </p>
            <p>
              Madrid's B2B marketing landscape reflects Spanish enterprise culture's emphasis on relationships and trust. From the <a href="https://en.wikipedia.org/wiki/AZCA" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">AZCA business district</a> corporate headquarters to emerging fintech hubs, B2B buyers value personal relationships combined with professional excellence, formal approaches that respect hierarchies, and marketing strategies that support both domestic leadership and international expansion. The city's growing technology sector adds dynamism to traditional enterprise marketing.
            </p>
            <p>
              Madrid B2B marketing agencies excel at navigating Spanish corporate culture, creating bilingual campaigns for Iberian and LATAM markets, and building the long-term relationships essential for enterprise success in Spain. They bring expertise in financial services marketing, telecommunications positioning, and the cultural intelligence required to connect European companies with 500+ million Spanish-speaking consumers across Latin America.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Services in Madrid</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Enterprise-grade marketing capabilities for Spain's corporate capital and LATAM expansion.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Marketing</h3>
              <p className="text-white/70 text-lg">Complex B2B campaigns for IBEX 35 companies and multinational corporate accounts in Spain.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌎</div>
              <h3 className="text-2xl font-bold text-white mb-4">LATAM Expansion</h3>
              <p className="text-white/70 text-lg">Gateway marketing for European companies entering Latin American markets through Madrid.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Financial Services</h3>
              <p className="text-white/70 text-lg">Specialized marketing for Spanish banks, insurers, and fintech companies headquartered in Madrid.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Telecom & Energy</h3>
              <p className="text-white/70 text-lg">B2B positioning for Spain's telecommunications and energy giants serving European markets.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in Madrid B2B</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Madrid's enterprise ecosystem creates opportunities across established and emerging sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-white mb-4">Banking & Finance</h3>
              <p className="text-white/70 text-lg">Spain's banking headquarters with Santander, BBVA, and major financial institutions.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech</h3>
              <p className="text-white/70 text-lg">Emerging fintech hub with payment processors, neobanks, and B2B financial innovation.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Telecommunications</h3>
              <p className="text-white/70 text-lg">Telefonica headquarters and major telecom companies serving Spanish-speaking markets.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Energy</h3>
              <p className="text-white/70 text-lg">Iberdrola, Repsol, and Spanish energy companies leading European sustainability initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose a Madrid B2B Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">Enterprise Experience</h3>
              <p className="text-xl text-white/70 leading-relaxed">Prioritize agencies with proven IBEX 35 and large enterprise experience. Madrid's corporate culture requires agencies who understand formal decision-making processes, multi-stakeholder relationships, and the patience required for enterprise sales cycles in Spanish business culture.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">LATAM Capabilities</h3>
              <p className="text-xl text-white/70 leading-relaxed">If targeting Latin American markets, choose agencies with proven LATAM expansion experience. They should understand regional differences between Mexico, Colombia, Argentina, and other markets while leveraging the shared language and cultural bridges Madrid provides.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">Relationship Focus</h3>
              <p className="text-xl text-white/70 leading-relaxed">Spanish business culture emphasizes personal relationships. Evaluate agencies' approach to relationship-building, their network within your target industries, and their ability to create campaigns that blend modern demand generation with traditional relationship marketing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies in Madrid</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Madrid and Spain.</p>
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
            <Link href="/b2b-marketing-agency-barcelona" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇪🇸</span>
              <span className="text-white font-semibold">Barcelona</span>
            </Link>
            <Link href="/b2b-marketing-agency-milan" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇮🇹</span>
              <span className="text-white font-semibold">Milan</span>
            </Link>
            <Link href="/b2b-marketing-agency-london" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇬🇧</span>
              <span className="text-white font-semibold">London</span>
            </Link>
            <Link href="/b2b-marketing-agency-paris" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇫🇷</span>
              <span className="text-white font-semibold">Paris</span>
            </Link>
            <Link href="/b2b-marketing-agency-mexico-city" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇲🇽</span>
              <span className="text-white font-semibold">Mexico City</span>
            </Link>
            <Link href="/b2b-marketing-agency-lisbon" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇵🇹</span>
              <span className="text-white font-semibold">Lisbon</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Madrid B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Spanish and LATAM markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
