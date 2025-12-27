import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Barcelona 2025 | Best Barcelona B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in Barcelona. Compare top Barcelona B2B marketing consultancies for Catalonia, startup ecosystems, and European expansion.',
  keywords: 'B2B marketing agency Barcelona, B2B marketing Barcelona, best B2B marketing Barcelona, top B2B marketing agencies Barcelona, startup marketing Barcelona',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-barcelona'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a Barcelona B2B marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Barcelona agencies understand startup growth marketing, European expansion strategies, and multilingual campaign execution. They excel at design-driven positioning, technology sector marketing, and the agile approaches required for fast-growing companies. The city's innovation ecosystem and international talent pool create agencies with unique expertise in scaling B2B brands across Mediterranean and global markets."
      }
    },
    {
      "@type": "Question",
      "name": "How much do B2B marketing agencies in Barcelona charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Barcelona B2B marketing agencies typically charge 8,000-25,000 EUR per month for comprehensive retainers. Project fees range from 15,000-80,000 EUR depending on scope and campaign complexity. Multi-market European campaigns and design-intensive projects command higher rates reflecting Barcelona's creative excellence."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Barcelona B2B marketing agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Barcelona agencies specialize in technology startups, fintech, healthtech, mobility, and design-led B2B companies. The city's position as Southern Europe's startup capital creates deep expertise in growth marketing, product-led strategies, and scaling B2B brands from seed stage to international expansion."
      }
    },
    {
      "@type": "Question",
      "name": "Do Barcelona agencies work with companies outside Spain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Barcelona's international character means most agencies serve clients across Europe and globally. The city's multilingual talent pool and experience with Mobile World Congress attendees make Barcelona agencies particularly valuable for companies targeting pan-European markets or seeking creative, design-forward B2B positioning."
      }
    }
  ]
}

export default async function B2BMarketingAgencyBarcelonaPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Barcelona')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"B2B Marketing Agencies Barcelona","url":"https://gtm.quest/b2b-marketing-agency-barcelona"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Barcelona</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1920&q=80" alt="B2B marketing agencies Barcelona - Barcelona skyline with Sagrada Familia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Barcelona</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>B2B Marketing Agencies Barcelona</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Barcelona—verified experts in startup growth and design-led B2B marketing.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Barcelona Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">€{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">B2B Marketing Barcelona: Innovation Hub & Design Capital</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Barcelona has emerged as Southern Europe's premier innovation hub with a <a href="https://en.wikipedia.org/wiki/Economy_of_Barcelona" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">metropolitan GDP exceeding €170 billion</a> and over 2,000 active startups driving growth across fintech, healthtech, and mobility sectors. The city hosts <a href="https://www.mwcbarcelona.com/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Mobile World Congress</a>, attracting 100,000+ technology professionals annually and establishing Barcelona as a global technology showcase.
            </p>
            <p>
              Barcelona's B2B marketing landscape blends Catalan entrepreneurial spirit with world-class design sensibility. From the <a href="https://en.wikipedia.org/wiki/22@Barcelona" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">22@ innovation district</a> to historic Born tech startups, B2B buyers value creative excellence combined with measurable results, innovative approaches balanced with proven methodologies, and marketing strategies that resonate across Spanish, European, and global markets. The city's design heritage creates uniquely aesthetic-conscious B2B marketing that stands out in crowded markets.
            </p>
            <p>
              Barcelona B2B marketing agencies excel at startup growth marketing, design-led brand positioning, and multilingual European campaigns. They bring expertise in technology sector marketing, event-driven demand generation around MWC and other global conferences, and the agile, creative approaches that resonate with Barcelona's fast-moving startup ecosystem. Their international talent pools and multicultural perspectives make them ideal partners for companies seeking pan-European expansion.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Services in Barcelona</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Creative, design-led marketing capabilities for Barcelona's innovation ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Startup Growth</h3>
              <p className="text-white/70 text-lg">Product-led growth marketing for seed to Series B startups scaling across European and global markets.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-4">Design-Led Branding</h3>
              <p className="text-white/70 text-lg">Barcelona's design heritage applied to B2B brand positioning that differentiates in crowded markets.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4">European Expansion</h3>
              <p className="text-white/70 text-lg">Multilingual campaign execution for companies expanding from Barcelona across EU markets.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-white mb-4">Event Marketing</h3>
              <p className="text-white/70 text-lg">MWC and conference-driven demand generation leveraging Barcelona's event ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in Barcelona B2B</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Barcelona's innovation ecosystem creates opportunities across high-growth technology sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Tech Startups</h3>
              <p className="text-white/70 text-lg">Southern Europe's largest startup ecosystem with 2,000+ active companies and €1B+ annual funding.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech</h3>
              <p className="text-white/70 text-lg">Growing fintech hub with payment processors, neobanks, and B2B financial services innovation.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-white mb-4">Healthtech</h3>
              <p className="text-white/70 text-lg">Emerging healthtech cluster combining Barcelona's biomedical research with technology innovation.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-4">Design & Creative</h3>
              <p className="text-white/70 text-lg">Design-led B2B companies leveraging Barcelona's creative heritage and international talent.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose a Barcelona B2B Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">Startup Experience</h3>
              <p className="text-xl text-white/70 leading-relaxed">Prioritize agencies with proven startup growth experience. Barcelona's ecosystem demands agencies who understand product-led growth, agile marketing methodologies, and the rapid iteration cycles required for scaling B2B companies from early stage to market leadership.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Design Excellence</h3>
              <p className="text-xl text-white/70 leading-relaxed">Barcelona's design heritage sets high creative standards. Evaluate agencies' portfolio quality, brand positioning capabilities, and ability to create B2B marketing that combines aesthetic excellence with strategic substance and measurable results.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">International Reach</h3>
              <p className="text-xl text-white/70 leading-relaxed">Barcelona agencies often serve pan-European markets. Choose partners with multilingual capabilities, experience in cross-border campaigns, and understanding of how to adapt messaging across different European business cultures.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies in Barcelona</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Barcelona and Catalonia.</p>
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
            <Link href="/b2b-marketing-agency-madrid" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇪🇸</span>
              <span className="text-white font-semibold">Madrid</span>
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
            <Link href="/b2b-marketing-agency-berlin" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇩🇪</span>
              <span className="text-white font-semibold">Berlin</span>
            </Link>
            <Link href="/b2b-marketing-agency-amsterdam" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇳🇱</span>
              <span className="text-white font-semibold">Amsterdam</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Barcelona B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Barcelona and European markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
