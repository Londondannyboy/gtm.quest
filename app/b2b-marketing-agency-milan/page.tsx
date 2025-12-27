import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Milan 2025 | Best Milan B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in Milan. Compare top Milan B2B marketing consultancies for fashion tech, finance, and design-led B2B marketing.',
  keywords: 'B2B marketing agency Milan, B2B marketing Milan, best B2B marketing Milan, top B2B marketing agencies Milan, fashion tech marketing Italy',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-milan'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a Milan B2B marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Milan agencies understand Italian business sophistication, design-led B2B branding, and luxury sector marketing. They excel at combining aesthetic excellence with strategic rigor, fashion tech positioning, and the relationship-focused approaches required for Italy's business capital. Milan's design heritage creates uniquely creative B2B agencies that stand out in global markets."
      }
    },
    {
      "@type": "Question",
      "name": "How much do B2B marketing agencies in Milan charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Milan B2B marketing agencies typically charge 12,000-35,000 EUR per month for comprehensive retainers. Project fees range from 25,000-150,000 EUR depending on scope and campaign complexity. Design-led branding and fashion tech positioning command premium rates reflecting Milan's creative excellence and business sophistication."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Milan B2B marketing agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Milan agencies specialize in fashion technology, luxury B2B, financial services, design-led manufacturing, and professional services. The city's unique position as Italy's financial capital and global fashion hub creates agencies with expertise in combining aesthetic sophistication with business results across high-value B2B sectors."
      }
    },
    {
      "@type": "Question",
      "name": "Do Milan agencies work with technology companies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Milan's growing tech sector and startup ecosystem attracts agencies with both design heritage and technology marketing expertise. Fashion tech, fintech, and design-led SaaS companies particularly benefit from Milan agencies' ability to combine visual sophistication with performance-driven B2B marketing strategies."
      }
    }
  ]
}

export default async function B2BMarketingAgencyMilanPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Milan')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 12000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"B2B Marketing Agencies Milan","url":"https://gtm.quest/b2b-marketing-agency-milan"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Milan</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=1920&q=80" alt="B2B marketing agencies Milan - Milan skyline with Duomo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Milan</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>B2B Marketing Agencies Milan</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Milan—verified experts in fashion tech, finance, and design-led B2B.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Milan Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">€{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">B2B Marketing Milan: Fashion Tech, Finance & Design Excellence</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Milan drives Italy's economy as the nation's undisputed financial and business capital, with <a href="https://en.wikipedia.org/wiki/Economy_of_Milan" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Lombardy's GDP exceeding €400 billion</a>—roughly 22% of Italy's total economy. The city commands Italy's stock exchange, major banks, and serves as global headquarters for fashion houses while attracting 40% of Italian technology investment. Milan's unique combination of financial sophistication and design heritage creates an unparalleled B2B marketing environment.
            </p>
            <p>
              Milan's B2B marketing landscape blends Italian design sensibility with international business sophistication. From the <a href="https://en.wikipedia.org/wiki/Porta_Nuova_(Milan)" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Porta Nuova business district</a> to fashion tech startups, B2B buyers value marketing that combines aesthetic excellence with strategic substance, relationship-building with measurable results, and approaches that work across Italian corporate culture and broader European expansion goals. The city's <a href="https://en.wikipedia.org/wiki/Milan_Fashion_Week" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">fashion industry heritage</a> influences even technical B2B sectors.
            </p>
            <p>
              Milan B2B marketing agencies excel at design-led brand positioning, luxury sector B2B marketing, and creative campaigns that differentiate offerings in sophisticated markets. They bring expertise in fashion technology, financial services positioning, and the relationship-focused approaches required to navigate Italy's consensus-driven business environment while supporting international growth across European and global markets.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Services in Milan</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Design-led marketing capabilities for Milan's business and fashion tech ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">👗</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fashion Tech</h3>
              <p className="text-white/70 text-lg">B2B marketing for fashion technology, luxury supply chain, and design-led commerce platforms.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-4">Design-Led Branding</h3>
              <p className="text-white/70 text-lg">Milan's design heritage applied to B2B brand positioning that commands premium positioning.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Financial Services</h3>
              <p className="text-white/70 text-lg">Specialized marketing for Italian banks, asset managers, and fintech companies headquartered in Milan.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-white mb-4">Industrial B2B</h3>
              <p className="text-white/70 text-lg">Manufacturing and industrial marketing for Lombardy's engineering and production sector.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in Milan B2B</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Milan's diverse economy creates opportunities across luxury, finance, and technology sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">👗</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fashion & Luxury</h3>
              <p className="text-white/70 text-lg">Global fashion capital with B2B opportunities across luxury supply chain and fashion technology.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-white mb-4">Banking & Finance</h3>
              <p className="text-white/70 text-lg">Italy's financial center with Borsa Italiana, major banks, and growing fintech sector.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-4">Design & Creative</h3>
              <p className="text-white/70 text-lg">Industrial design, furniture, and creative industries with global B2B reach.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Tech & Startups</h3>
              <p className="text-white/70 text-lg">Italy's largest startup ecosystem attracting 40% of national technology investment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose a Milan B2B Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">Design Excellence</h3>
              <p className="text-xl text-white/70 leading-relaxed">Milan's design heritage sets exceptional creative standards. Prioritize agencies with strong portfolio quality, brand positioning capabilities, and ability to create B2B marketing that combines Italian aesthetic sensibility with strategic effectiveness and measurable results.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Industry Expertise</h3>
              <p className="text-xl text-white/70 leading-relaxed">Milan agencies often specialize in specific verticals—fashion tech, financial services, design-led manufacturing, or luxury B2B. Choose agencies with deep expertise in your industry who understand buyer personas and competitive dynamics.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">International Reach</h3>
              <p className="text-xl text-white/70 leading-relaxed">Milan serves as gateway to European markets. Evaluate agencies' experience with pan-European campaigns, multilingual capabilities, and understanding of how Italian sophistication translates across different European business cultures.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies in Milan</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Milan and Northern Italy.</p>
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
            <Link href="/b2b-marketing-agency-rome" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇮🇹</span>
              <span className="text-white font-semibold">Rome</span>
            </Link>
            <Link href="/b2b-marketing-agency-paris" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇫🇷</span>
              <span className="text-white font-semibold">Paris</span>
            </Link>
            <Link href="/b2b-marketing-agency-zurich" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇨🇭</span>
              <span className="text-white font-semibold">Zurich</span>
            </Link>
            <Link href="/b2b-marketing-agency-munich" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇩🇪</span>
              <span className="text-white font-semibold">Munich</span>
            </Link>
            <Link href="/b2b-marketing-agency-barcelona" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇪🇸</span>
              <span className="text-white font-semibold">Barcelona</span>
            </Link>
            <Link href="/b2b-marketing-agency-london" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇬🇧</span>
              <span className="text-white font-semibold">London</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Milan B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Italian and European markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
