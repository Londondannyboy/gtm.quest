import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Stockholm 2025 | Best Stockholm B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in Stockholm. Compare top Nordic B2B marketing consultancies for SaaS, fintech, and Spotify/Klarna ecosystem expansion.',
  keywords: 'B2B marketing agency Stockholm, B2B marketing Stockholm, best B2B marketing Stockholm, Nordic B2B marketing, Swedish SaaS marketing',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-stockholm'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a Stockholm B2B marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stockholm agencies understand product-led growth, Nordic business culture, and the Spotify/Klarna ecosystem that has produced more unicorns per capita than any city except Silicon Valley. They excel at SaaS marketing, fintech positioning, and the authentic, value-driven approaches required to succeed with progressive Nordic buyers who prioritize sustainability and transparency."
      }
    },
    {
      "@type": "Question",
      "name": "How much do B2B marketing agencies in Stockholm charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stockholm B2B marketing agencies typically charge EUR15,000-EUR38,000+ per month for comprehensive retainers. Project fees range from EUR30,000-EUR150,000+ depending on scope and campaign complexity. Nordic-wide campaigns, product-led growth programs, and sustainability positioning command premium rates reflecting Stockholm's tech-forward market."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Stockholm B2B marketing agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stockholm agencies specialize in SaaS and enterprise software (Spotify, Klarna ecosystem), fintech and payments, cleantech and sustainability, gaming (King, Mojang heritage), and healthtech. The city's unicorn concentration creates deep expertise in product-led growth, freemium models, and scaling B2B companies from Nordic markets to global expansion."
      }
    },
    {
      "@type": "Question",
      "name": "Do Stockholm agencies work with companies outside Sweden?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Stockholm B2B agencies serve international clients targeting Nordic markets (Sweden, Norway, Denmark, Finland) and companies scaling from the Nordics to Europe and globally. They're particularly valuable for SaaS companies seeking product-led growth expertise, US companies entering European markets through the Nordics, and any brand prioritizing sustainability messaging."
      }
    }
  ]
}

export default async function B2BMarketingAgencyStockholmPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Stockholm')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 11000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"B2B Marketing Agencies Stockholm","url":"https://gtm.quest/b2b-marketing-agency-stockholm"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Stockholm</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1920&q=80" alt="B2B marketing agencies Stockholm - Stockholm waterfront and Gamla Stan" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Stockholm, Sweden</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>B2B Marketing Agencies Stockholm</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Stockholm—verified experts in SaaS growth, Nordic tech, and the Spotify/Klarna ecosystem.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Stockholm Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{'\u20AC'}{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">B2B Marketing Stockholm: The Nordic Unicorn Factory</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Stockholm has produced <a href="https://en.wikipedia.org/wiki/List_of_unicorn_startup_companies" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">more unicorn companies per capita than any city except Silicon Valley</a>, including global technology leaders Spotify, Klarna, King, and Skype. With <a href="https://www.business-sweden.com/insights/reports/tech-ecosystem-sweden/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">combined startup valuations exceeding EUR239 billion</a>, the Swedish capital has created a concentrated ecosystem of fast-scaling B2B technology companies and sophisticated enterprise buyers who understand product-led growth.
            </p>
            <p>
              Stockholm's B2B marketing environment reflects Nordic business culture that values transparency, sustainability, and egalitarian relationships over hierarchical sales processes. From <a href="https://en.wikipedia.org/wiki/Spotify" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Spotify's</a> freemium growth model to Klarna's fintech innovation, B2B buyers in Stockholm expect marketing that demonstrates authentic value, environmental responsibility, and collaborative partnerships rather than aggressive sales tactics. Swedish buyers are highly educated, digitally sophisticated, and resistant to traditional enterprise sales approaches.
            </p>
            <p>
              Stockholm B2B marketing agencies excel at product-led growth strategies, sustainability-focused positioning, and Nordic-first European expansion tactics. They bring expertise in <a href="https://www.eu-startups.com/2024/01/stockholm-startup-ecosystem/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">SaaS growth playbooks</a>, fintech marketing, and the authentic, value-driven approaches that resonate with Sweden's progressive business culture while scaling across international markets. Understanding the "lagom" principle—balanced, just-enough positioning rather than hyperbolic claims—is essential for any marketing success in Stockholm.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Services in Stockholm</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Growth-focused marketing capabilities for Stockholm's SaaS ecosystem and Nordic tech companies.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Product-Led Growth</h3>
              <p className="text-white/70 text-lg">Freemium optimization, self-serve funnels, and PLG playbooks proven in Stockholm's unicorn ecosystem.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech Marketing</h3>
              <p className="text-white/70 text-lg">B2B marketing for payment tech, banking software, and financial infrastructure following Klarna's lead.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-white mb-4">Sustainability Positioning</h3>
              <p className="text-white/70 text-lg">ESG-focused messaging and cleantech marketing for Nordic buyers who prioritize environmental responsibility.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Nordic Expansion</h3>
              <p className="text-white/70 text-lg">Pan-Nordic go-to-market strategies across Sweden, Norway, Denmark, and Finland markets.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in Stockholm B2B</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Stockholm's tech-forward ecosystem creates opportunities across high-growth Nordic sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">SaaS & Enterprise Software</h3>
              <p className="text-white/70 text-lg">Spotify, Klarna, and 40+ unicorns have created Europe's densest SaaS ecosystem.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech & Payments</h3>
              <p className="text-white/70 text-lg">Klarna, Trustly, and iZettle have established Stockholm as Europe's fintech capital.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-white mb-4">Gaming & Entertainment</h3>
              <p className="text-white/70 text-lg">King, Mojang, and Dice heritage makes Stockholm a global gaming powerhouse.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold text-white mb-4">Cleantech & Sustainability</h3>
              <p className="text-white/70 text-lg">Northvolt and climate tech startups leveraging Sweden's environmental leadership.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose a Stockholm B2B Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">Product-Led Experience</h3>
              <p className="text-xl text-white/70 leading-relaxed">Prioritize agencies with proven SaaS and product-led growth experience. Stockholm's ecosystem runs on freemium, self-serve, and trial-based models—choose agencies who understand conversion optimization, activation metrics, and the growth loops that power Nordic unicorns.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Nordic Cultural Fit</h3>
              <p className="text-xl text-white/70 leading-relaxed">Swedish buyers reject aggressive sales tactics and hyperbolic claims. Select agencies that understand "lagom" positioning—balanced, authentic messaging that builds trust through transparency and substance rather than traditional enterprise sales approaches.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">Sustainability Fluency</h3>
              <p className="text-xl text-white/70 leading-relaxed">ESG and sustainability aren't optional in Nordic markets—they're expected. Choose agencies that can authentically integrate environmental responsibility into B2B messaging without greenwashing, meeting Swedish buyers' high standards for corporate responsibility.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies in Stockholm</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Stockholm and the Nordic region.</p>
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
            <Link href="/b2b-marketing-agency-copenhagen" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇩🇰</span>
              <span className="text-white font-semibold">Copenhagen</span>
            </Link>
            <Link href="/b2b-marketing-agency-oslo" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇳🇴</span>
              <span className="text-white font-semibold">Oslo</span>
            </Link>
            <Link href="/b2b-marketing-agency-helsinki" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇫🇮</span>
              <span className="text-white font-semibold">Helsinki</span>
            </Link>
            <Link href="/b2b-marketing-agency-amsterdam" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇳🇱</span>
              <span className="text-white font-semibold">Amsterdam</span>
            </Link>
            <Link href="/b2b-marketing-agency-london" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇬🇧</span>
              <span className="text-white font-semibold">London</span>
            </Link>
            <Link href="/gtm-agencies-stockholm" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🚀</span>
              <span className="text-white font-semibold">GTM Stockholm</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Stockholm B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Stockholm, the Nordics, and European SaaS markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
