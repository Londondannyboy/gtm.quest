import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Amsterdam 2025 | Best Amsterdam B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in Amsterdam. Compare top Amsterdam B2B marketing consultancies for fintech, logistics tech, and pan-European expansion.',
  keywords: 'B2B marketing agency Amsterdam, B2B marketing Amsterdam, best B2B marketing Amsterdam, top B2B marketing agencies Amsterdam, fintech marketing, pan-European marketing',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-amsterdam'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose an Amsterdam B2B marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Amsterdam agencies understand pan-European marketing from Europe's most international business hub. They excel at fintech positioning, logistics tech marketing, and multilingual campaigns that work across diverse European markets. Amsterdam's concentration of European headquarters and its English-speaking talent pool create unparalleled expertise in scaling B2B companies across the continent."
      }
    },
    {
      "@type": "Question",
      "name": "How much do B2B marketing agencies in Amsterdam charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Amsterdam B2B marketing agencies typically charge 12,000-38,000 EUR per month for comprehensive retainers. Project fees range from 28,000-160,000 EUR depending on scope and campaign complexity. Amsterdam offers excellent value for pan-European campaigns with strong execution quality across multiple markets."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Amsterdam B2B marketing agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Amsterdam agencies specialize in fintech and payments (led by Adyen and Mollie), logistics and supply chain tech (leveraging Port of Rotterdam and Schiphol), enterprise SaaS, and e-commerce technology. The city's position as Europe's gateway creates unique expertise in internationally-focused B2B marketing."
      }
    },
    {
      "@type": "Question",
      "name": "Do Amsterdam agencies work with companies outside the Netherlands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Amsterdam agencies are inherently international. The city serves as European headquarters for hundreds of global companies, and agencies regularly execute campaigns across all European markets. They're particularly valuable for companies entering Europe or seeking a central hub for pan-European B2B marketing operations."
      }
    }
  ]
}

export default async function B2BMarketingAgencyAmsterdamPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Amsterdam')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 12000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"B2B Marketing Agencies Amsterdam","url":"https://gtm.quest/b2b-marketing-agency-amsterdam"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Amsterdam</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1920&q=80" alt="B2B marketing agencies Amsterdam - Amsterdam canal houses" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Amsterdam</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>B2B Marketing Agencies Amsterdam</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Amsterdam—verified experts in fintech, logistics tech, and pan-European expansion.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Amsterdam Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{'\u20AC'}{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">B2B Marketing Amsterdam: Europe's Pan-European Gateway</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Amsterdam has established itself as <a href="https://en.wikipedia.org/wiki/Economy_of_the_Netherlands" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Europe's premier gateway for international business</a>, with over 2,500 international companies choosing the city as their European headquarters. The Netherlands consistently ranks as the world's most competitive economy, and Amsterdam's combination of strategic location, multilingual talent, and business-friendly environment makes it the natural hub for companies expanding across European markets.
            </p>
            <p>
              Amsterdam's B2B marketing landscape reflects Dutch business culture—direct, pragmatic, and internationally-minded. Home to global payments leader <a href="https://www.adyen.com/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Adyen</a>, e-commerce giant Booking.com, and navigation pioneer TomTom, the city's tech ecosystem values clear value propositions, data-driven decision-making, and marketing that performs across borders. The <a href="https://en.wikipedia.org/wiki/Port_of_Rotterdam" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Port of Rotterdam</a> and Schiphol Airport make Amsterdam-Rotterdam the logistics heart of Europe.
            </p>
            <p>
              Amsterdam B2B marketing agencies excel at fintech positioning, logistics and supply chain tech marketing, and creating multilingual campaigns that work seamlessly across European markets. They bring expertise in payment technology marketing, SaaS growth tactics, and the pragmatic, results-focused approaches required to succeed in the Netherlands' globally-oriented business environment while supporting expansion into Germany, France, UK, and Nordic markets.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Services in Amsterdam</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Internationally-focused marketing capabilities for Amsterdam's diverse tech and trade ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech & Payments Marketing</h3>
              <p className="text-white/70 text-lg">Specialized positioning for payment technology, banking infrastructure, and financial services companies in Europe's fintech capital.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Logistics Tech Marketing</h3>
              <p className="text-white/70 text-lg">B2B marketing for supply chain, freight tech, and logistics platforms leveraging Amsterdam-Rotterdam's trade hub position.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Pan-European Campaigns</h3>
              <p className="text-white/70 text-lg">Multilingual campaign execution across European markets from a central hub with native speakers in all major languages.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-4">SaaS Growth Marketing</h3>
              <p className="text-white/70 text-lg">Product-led growth, performance marketing, and demand generation for enterprise SaaS companies scaling across Europe.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in Amsterdam B2B</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Amsterdam's strategic position creates unique B2B opportunities across technology and trade sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech & Payments</h3>
              <p className="text-white/70 text-lg">Adyen, Mollie, Bunq, and Europe's leading concentration of payment technology and financial infrastructure companies.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-white mb-4">Logistics & Supply Chain</h3>
              <p className="text-white/70 text-lg">Europe's logistics heart with Port of Rotterdam, Schiphol, and pioneering supply chain technology companies.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold text-white mb-4">E-commerce Tech</h3>
              <p className="text-white/70 text-lg">Booking.com legacy plus thriving ecosystem of commerce platforms, marketplaces, and retail technology companies.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise SaaS</h3>
              <p className="text-white/70 text-lg">European headquarters for global SaaS companies plus homegrown B2B software serving European enterprise markets.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose an Amsterdam B2B Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">Pan-European Capability</h3>
              <p className="text-xl text-white/70 leading-relaxed">Prioritize agencies with proven multi-market execution. Amsterdam agencies should demonstrate ability to run campaigns across Germany, France, UK, Nordics, and Benelux markets with native language content and cultural adaptation.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Industry Vertical Focus</h3>
              <p className="text-xl text-white/70 leading-relaxed">Amsterdam agencies often specialize in specific sectors—fintech, logistics, e-commerce, or enterprise SaaS. Choose agencies with deep expertise in your industry who understand the competitive landscape and buyer personas in European markets.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">Data-Driven Approach</h3>
              <p className="text-xl text-white/70 leading-relaxed">Dutch business culture values pragmatism and measurable results. Evaluate agencies' analytical capabilities, their approach to attribution and ROI measurement, and their ability to optimize campaigns based on performance data.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies in Amsterdam</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Amsterdam and pan-European markets.</p>
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
            <Link href="/b2b-marketing-agency-london" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇬🇧</span>
              <span className="text-white font-semibold">London</span>
            </Link>
            <Link href="/b2b-marketing-agency-berlin" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇩🇪</span>
              <span className="text-white font-semibold">Berlin</span>
            </Link>
            <Link href="/b2b-marketing-agency-paris" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇫🇷</span>
              <span className="text-white font-semibold">Paris</span>
            </Link>
            <Link href="/b2b-marketing-agency-new-york" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🗽</span>
              <span className="text-white font-semibold">New York</span>
            </Link>
            <Link href="/b2b-marketing-agency-san-francisco" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🌉</span>
              <span className="text-white font-semibold">San Francisco</span>
            </Link>
            <Link href="/gtm-agencies-amsterdam" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🚀</span>
              <span className="text-white font-semibold">GTM Amsterdam</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Amsterdam B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Amsterdam and pan-European markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free</Link>
        </div>
      </section>
    </div>
  )
}
