import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Paris 2025 | Best Paris B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in Paris. Compare top Paris B2B marketing consultancies for La French Tech ecosystem, luxury tech, and European expansion.',
  keywords: 'B2B marketing agency Paris, B2B marketing Paris, best B2B marketing Paris, top B2B marketing agencies Paris, French tech marketing, luxury B2B marketing',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-paris'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a Paris B2B marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paris agencies understand French business culture and La French Tech ecosystem. They excel at luxury B2B positioning, European market expansion, and relationship-driven marketing that resonates with French enterprise buyers. Paris is home to Station F (world's largest startup campus) and CAC 40 headquarters, creating unique expertise across startup and enterprise marketing."
      }
    },
    {
      "@type": "Question",
      "name": "How much do B2B marketing agencies in Paris charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paris B2B marketing agencies typically charge 15,000-45,000 EUR per month for comprehensive retainers. Project fees range from 35,000-180,000 EUR depending on scope and campaign complexity. Premium luxury tech positioning and pan-European campaigns command higher rates reflecting Paris's sophisticated market expectations."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Paris B2B marketing agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paris agencies specialize in luxury tech, enterprise SaaS, aerospace and defense, sustainable technology, and financial services. The city's unique position at the intersection of technology and traditional French industries like luxury, wine, and aerospace creates distinctive expertise in premium B2B positioning and complex stakeholder marketing."
      }
    },
    {
      "@type": "Question",
      "name": "Do Paris agencies work with companies outside France?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Paris agencies serve clients across Europe and globally. Paris's position as Europe's second-largest economy and its post-Brexit emergence as a financial hub make agencies valuable for companies entering French markets or seeking pan-European expansion with a sophisticated, relationship-driven approach."
      }
    }
  ]
}

export default async function B2BMarketingAgencyParisPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Paris')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 15000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"B2B Marketing Agencies Paris","url":"https://gtm.quest/b2b-marketing-agency-paris"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Paris</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80" alt="B2B marketing agencies Paris - Eiffel Tower and Paris skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Paris</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>B2B Marketing Agencies Paris</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Paris—verified experts in La French Tech and European enterprise markets.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Paris Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{'\u20AC'}{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">B2B Marketing Paris: French Tech Excellence & European Gateway</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Paris anchors the <a href="https://en.wikipedia.org/wiki/Economy_of_Paris" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Ile-de-France region's trillion-euro economy</a>, representing nearly one-third of France's GDP and positioning it as Europe's wealthiest metropolitan area. The city serves as European headquarters for major technology and luxury companies, while <a href="https://en.wikipedia.org/wiki/La_D%C3%A9fense" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">La Defense business district</a> ranks among the world's most attractive locations for multinational corporations.
            </p>
            <p>
              Paris's B2B marketing landscape combines French business sophistication with the explosive growth of <a href="https://lafrenchtech.com/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">La French Tech</a>—the government-backed initiative that has transformed Paris into Europe's leading startup hub by unicorn count. Station F, the world's largest startup campus, anchors an ecosystem of over 10,000 startups while CAC 40 companies including LVMH, TotalEnergies, and BNP Paribas maintain their headquarters here, creating unique marketing opportunities across the growth spectrum.
            </p>
            <p>
              Paris B2B marketing agencies excel at navigating France's relationship-driven business culture, creating campaigns that balance creative excellence with strategic depth, and positioning brands for both French enterprise buyers and pan-European expansion. They bring expertise in <a href="https://en.wikipedia.org/wiki/Luxury_goods" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">luxury B2B positioning</a>, technology sector marketing, and the sophisticated stakeholder engagement required to succeed in France's consensus-oriented corporate environments.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Services in Paris</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Sophisticated marketing capabilities for Paris's diverse enterprise and startup ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-white mb-4">Luxury Tech Marketing</h3>
              <p className="text-white/70 text-lg">Premium B2B positioning for technology companies serving luxury, fashion, and high-end consumer brands headquartered in Paris.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">La French Tech Growth</h3>
              <p className="text-white/70 text-lg">Startup marketing expertise for Station F ecosystem companies scaling across European and global markets.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🇪🇺</div>
              <h3 className="text-2xl font-bold text-white mb-4">European Expansion</h3>
              <p className="text-white/70 text-lg">Pan-European campaign execution with multilingual content and localization for French, German, and Southern European markets.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Stakeholder Marketing</h3>
              <p className="text-white/70 text-lg">Relationship-driven campaigns for complex French enterprise sales cycles with consensus-oriented decision-making.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in Paris B2B</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Paris's unique industry mix creates opportunities across luxury, technology, and traditional French sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">👜</div>
              <h3 className="text-2xl font-bold text-white mb-4">Luxury & Fashion Tech</h3>
              <p className="text-white/70 text-lg">B2B solutions for LVMH, Kering, and global luxury brands—from supply chain tech to digital experience platforms.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Aerospace & Defense</h3>
              <p className="text-white/70 text-lg">Airbus, Dassault, Thales, and the concentration of European aerospace and defense technology headquarters.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Financial Services</h3>
              <p className="text-white/70 text-lg">Post-Brexit European financial hub with major banking, insurance, and fintech operations relocating to Paris.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-white mb-4">Sustainable Tech</h3>
              <p className="text-white/70 text-lg">Cleantech, energy transition, and sustainability solutions aligned with France's climate leadership.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose a Paris B2B Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">French Market Fluency</h3>
              <p className="text-xl text-white/70 leading-relaxed">Prioritize agencies who understand French business culture and relationship dynamics. France's consensus-oriented decision-making requires marketing that builds trust over time and engages multiple stakeholders with sophistication.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Creative Excellence</h3>
              <p className="text-xl text-white/70 leading-relaxed">Paris's heritage in design and luxury sets high aesthetic standards. Choose agencies who can deliver creative work that meets French expectations for elegance and sophistication while driving measurable B2B results.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">European Network</h3>
              <p className="text-xl text-white/70 leading-relaxed">Evaluate agencies' ability to support pan-European expansion. The best Paris agencies combine local French expertise with capabilities to execute across neighboring markets including Germany, Benelux, and Southern Europe.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies in Paris</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Paris and French markets.</p>
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
            <Link href="/b2b-marketing-agency-amsterdam" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇳🇱</span>
              <span className="text-white font-semibold">Amsterdam</span>
            </Link>
            <Link href="/b2b-marketing-agency-new-york" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🗽</span>
              <span className="text-white font-semibold">New York</span>
            </Link>
            <Link href="/b2b-marketing-agency-san-francisco" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🌉</span>
              <span className="text-white font-semibold">San Francisco</span>
            </Link>
            <Link href="/gtm-agencies-paris" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🚀</span>
              <span className="text-white font-semibold">GTM Paris</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Paris B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Paris and European markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free</Link>
        </div>
      </section>
    </div>
  )
}
