import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best GTM Agency UAE 2025 | GTM Quest',
  description: 'Discover the best go-to-market agencies serving UAE markets. Compare top GTM consultancies for Dubai, Abu Dhabi and Middle East expansion.',
  keywords: 'best GTM agency UAE, top go-to-market agencies Dubai, GTM consultants UAE, product launch Dubai',
  alternates: {
    canonical: 'https://gtm.quest/best-gtm-agency-uae-top-gtm-agencies-uae'
  }
}

export const revalidate = 3600

export default async function GTMAgencyUAEPage() {
  const agencies = await getAgenciesByCategory('GTM Agency', 'UAE')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"Best GTM Agencies UAE","url":"https://gtm.quest/best-gtm-agency-uae-top-gtm-agencies-uae"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">GTM UAE</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&q=80" alt="Best GTM agency UAE - Dubai Marina skyline at sunset" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">United Arab Emirates</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight:900}}>Best GTM Agency UAE 2025</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} go-to-market agencies serving UAE markets—verified experts in Middle East product launches.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">AED{Math.round(avgMinBudget*3.67/1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">GTM Agencies UAE: Gateway to Middle East Markets</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              The UAE commands a $545 billion GDP economy and leads Middle East digital transformation with <a href="https://fintechnews.ae/23350/fintechdubai/uae-fintech-report-2026-summary/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">329 active fintech companies (128.5% increase since 2011)</a> and the government's Digital Economy Strategy targeting GDP doubling by 2031. <a href="https://economymiddleeast.com/news/uae-startups-secure-541-million-capital-h1-2025-up-18-percent/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">UAE startups secured $541 million in H1 2025 (up 18%)</a> with fintech attracting $265.8 million across 35 deals, positioning Dubai as the Middle East's undisputed technology capital hosting half of all MENA fintechs and three major hubs (DIFC, ADGM, Hub71). The UAE's strategic location, world-class infrastructure, zero income tax, and <a href="https://practiceguides.chambers.com/practice-guides/fintech-2025/uae/trends-and-developments" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">progressive regulatory frameworks including open banking and Dubai's Cashless Strategy targeting 90% digital payments by 2026</a> create exceptional conditions for B2B technology launches targeting the broader $30 trillion GCC and MENA markets.
            </p>
            <p>
              UAE business culture blends Western operational efficiency with relationship-driven Middle Eastern traditions, requiring GTM strategies that balance rapid execution with extensive stakeholder engagement across government, enterprise, and family business buyers. Emirati and GCC enterprise buyers expect face-to-face engagement, local market presence through UAE entities or free zone companies, and demonstration of long-term regional commitment beyond transactional vendor relationships. Dubai's position as a global crossroads connecting Europe, Asia, and Africa enables efficient regional expansion, while government initiatives like AI's projected $320 billion economic impact by 2030, Dubai's Universal Blueprint for AI, and extensive smart city investments create fertile ground for enterprise technology adoption across government, financial services, logistics, and retail sectors.
            </p>
            <p>
              Top GTM agencies serving UAE provide critical regional capabilities: deep understanding of GCC business culture requiring relationship-building across extended buying committees involving government stakeholders, family business decision-makers, and Western-trained executives; expertise navigating UAE's business-friendly regulations including free zone structures, data residency requirements, and sector-specific licensing across financial services, healthcare, and government sectors; proven frameworks for staged Middle East expansion starting with UAE market validation before scaling across Saudi Arabia, Egypt, and broader MENA markets; and bilingual positioning capabilities spanning English and Arabic content, messaging that resonates with both local GCC buyers and expatriate decision-makers, and cultural adaptation balancing global technology narratives with regional market sensitivities. They understand how to leverage Dubai and Abu Dhabi's world-class infrastructure and connectivity, build partnerships with local system integrators and government agencies critical for enterprise adoption, and execute launch strategies accommodating the UAE's unique characteristics as a global business hub bridging Western business practices with Middle Eastern relationship-driven culture.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Agencies Serving UAE Markets</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified go-to-market agencies.</p>
        </div>
        <div className="w-full">
          {agencies.map((agency, i) => (
            <AgencyCard
              key={agency.slug}
              rank={i+1}
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

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your GTM Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive strategy for UAE and Middle East markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
