import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Berlin 2025 | Best Berlin B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in Berlin. Compare top Berlin B2B marketing consultancies for German startup ecosystem, DACH expansion, and Industry 4.0 marketing.',
  keywords: 'B2B marketing agency Berlin, B2B marketing Berlin, best B2B marketing Berlin, top B2B marketing agencies Berlin, DACH marketing, German startup marketing',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-berlin'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a Berlin B2B marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Berlin agencies understand Europe's largest startup ecosystem and German B2B marketing dynamics. They excel at DACH region expansion, Industry 4.0 marketing, and growth strategies for venture-backed companies. Berlin's concentration of tech talent and international founders creates unparalleled expertise in scaling across European markets."
      }
    },
    {
      "@type": "Question",
      "name": "How much do B2B marketing agencies in Berlin charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Berlin B2B marketing agencies typically charge 12,000-35,000 EUR per month for comprehensive retainers. Project fees range from 25,000-150,000 EUR depending on scope and campaign complexity. Berlin offers strong value compared to London or Paris while maintaining high execution quality for DACH markets."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Berlin B2B marketing agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Berlin agencies specialize in enterprise SaaS, fintech, mobility tech, healthtech, and Industry 4.0 manufacturing. The city's startup ecosystem creates deep expertise in product-led growth, performance marketing, and scaling strategies for companies targeting German enterprise buyers and pan-European expansion."
      }
    },
    {
      "@type": "Question",
      "name": "Do Berlin agencies work with companies outside Germany?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Berlin agencies serve clients across Europe and globally. The city's international character and English-speaking talent pool make agencies particularly valuable for companies entering the DACH region (Germany, Austria, Switzerland) or seeking pan-European expansion from a central European base."
      }
    }
  ]
}

export default async function B2BMarketingAgencyBerlinPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Berlin')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 12000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"B2B Marketing Agencies Berlin","url":"https://gtm.quest/b2b-marketing-agency-berlin"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Berlin</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1920&q=80" alt="B2B marketing agencies Berlin - Berlin skyline with TV Tower" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Berlin</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>B2B Marketing Agencies Berlin</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Berlin—verified experts in German startup ecosystem and DACH expansion.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Berlin Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{'\u20AC'}{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">B2B Marketing Berlin: Europe's Startup Capital & DACH Gateway</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Berlin has established itself as <a href="https://en.wikipedia.org/wiki/Startup_company#Berlin" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Europe's leading startup ecosystem</a> with over 3,000 active startups and more than 10 billion EUR in technology investment over the past five years. The city hosts unicorns including N26, Zalando, HelloFresh, and Trade Republic, while attracting talent from across Europe to work in fintech, mobility, healthtech, and enterprise software sectors. Berlin's startup density exceeds that of London on a per-capita basis.
            </p>
            <p>
              Berlin's B2B marketing landscape reflects the city's unique blend of German engineering precision and international startup energy. From <a href="https://factoryberlin.com/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Factory Berlin</a> coworking spaces to corporate innovation labs of Siemens and Deutsche Telekom, B2B buyers value data-driven results over creative polish, product-led growth over traditional demand generation, and marketing approaches that scale across the <a href="https://en.wikipedia.org/wiki/DACH" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">DACH region</a> (Germany, Austria, Switzerland) with its 100 million consumers and Europe's strongest B2B purchasing power.
            </p>
            <p>
              Berlin B2B marketing agencies excel at growth marketing for scaling startups, multilingual European campaigns, and <a href="https://en.wikipedia.org/wiki/Industry_4.0" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Industry 4.0</a> marketing that connects tech innovation with Germany's manufacturing powerhouse. They bring expertise in technology sector positioning, performance marketing, and the metrics-focused approaches required to compete in Europe's most dynamic and cost-conscious startup environment while serving German Mittelstand enterprises.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Services in Berlin</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Growth-focused marketing capabilities for Berlin's startup ecosystem and German enterprise markets.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Startup Growth Marketing</h3>
              <p className="text-white/70 text-lg">Product-led growth, performance marketing, and scaling strategies for venture-backed companies targeting European expansion.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-white mb-4">Industry 4.0 Marketing</h3>
              <p className="text-white/70 text-lg">B2B marketing for manufacturing tech, IoT, and digital transformation solutions targeting German Mittelstand enterprises.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🇩🇪</div>
              <h3 className="text-2xl font-bold text-white mb-4">DACH Expansion</h3>
              <p className="text-white/70 text-lg">Localized campaigns for Germany, Austria, and Switzerland markets with native language content and cultural expertise.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Performance Marketing</h3>
              <p className="text-white/70 text-lg">Data-driven demand generation, paid acquisition, and conversion optimization for B2B SaaS and tech companies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in Berlin B2B</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Berlin's diverse tech ecosystem creates opportunities across high-growth sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech & Banking</h3>
              <p className="text-white/70 text-lg">N26, Trade Republic, Raisin, and Europe's fastest-growing digital banking and investment platforms.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-white mb-4">Mobility Tech</h3>
              <p className="text-white/70 text-lg">Automotive software, e-mobility, logistics tech, and transportation innovation from the heart of Europe.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise SaaS</h3>
              <p className="text-white/70 text-lg">Celonis, Contentful, Personio, and B2B software companies scaling from Berlin to global markets.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-white mb-4">Healthtech & Biotech</h3>
              <p className="text-white/70 text-lg">Digital health platforms, medical devices, and life sciences innovation serving European healthcare systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose a Berlin B2B Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">DACH Market Expertise</h3>
              <p className="text-xl text-white/70 leading-relaxed">Prioritize agencies with proven German market experience. Understanding DACH business culture, German-language content creation, and the formal procurement processes of German enterprises is essential for B2B success in the region.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Startup & Scale-up Experience</h3>
              <p className="text-xl text-white/70 leading-relaxed">Berlin agencies often specialize in different growth stages. Choose agencies with experience matching your company stage—whether early-stage growth hacking, Series B scaling, or enterprise-grade marketing for established tech companies.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">Technical Depth</h3>
              <p className="text-xl text-white/70 leading-relaxed">Berlin's engineering culture demands agencies who understand technical products. Evaluate agencies' ability to translate complex technology into compelling B2B narratives that resonate with German technical decision-makers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies in Berlin</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Berlin and the DACH region.</p>
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
            <Link href="/b2b-marketing-agency-amsterdam" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇳🇱</span>
              <span className="text-white font-semibold">Amsterdam</span>
            </Link>
            <Link href="/b2b-marketing-agency-paris" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇫🇷</span>
              <span className="text-white font-semibold">Paris</span>
            </Link>
            <Link href="/b2b-marketing-agency-london" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇬🇧</span>
              <span className="text-white font-semibold">London</span>
            </Link>
            <Link href="/b2b-marketing-agency-new-york" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🗽</span>
              <span className="text-white font-semibold">New York</span>
            </Link>
            <Link href="/b2b-marketing-agency-san-francisco" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🌉</span>
              <span className="text-white font-semibold">San Francisco</span>
            </Link>
            <Link href="/gtm-agencies-berlin" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🚀</span>
              <span className="text-white font-semibold">GTM Berlin</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Berlin B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Berlin, DACH, and European markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free</Link>
        </div>
      </section>
    </div>
  )
}
