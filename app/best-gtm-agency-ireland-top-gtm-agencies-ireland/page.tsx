import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best GTM Agency Ireland 2025 | Top Go-To-Market Agencies Ireland',
  description: 'Discover the best go-to-market agencies Ireland has to offer. Compare top Irish GTM consultancies with verified credentials and specialized expertise.',
  keywords: 'best GTM agency Ireland, top go-to-market agencies Dublin, GTM consultants Ireland, product launch agency Dublin',
  alternates: {
    canonical: 'https://gtm.quest/best-gtm-agency-ireland-top-gtm-agencies-ireland'
  }
}

export const revalidate = 3600

export default async function GTMAgencyIrelandPage() {
  const agencies = await getAgenciesByCategory('GTM Agency', 'Ireland')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"Best GTM Agencies Ireland","url":"https://gtm.quest/best-gtm-agency-ireland-top-gtm-agencies-ireland"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">GTM Ireland</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?w=1920&q=80" alt="Best GTM agencies Ireland - Dublin tech district" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Ireland</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight:900}}>Best GTM<br/>Agencies Ireland</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} go-to-market agencies Ireland has to offer—verified experts in product launches and European expansion.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">€{Math.round(avgMinBudget/1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">GTM Agencies Ireland: Transatlantic Launch Hub</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Ireland's technology sector contributes 13% to GDP with over €48 billion economic impact, positioning <a href="https://connexusrecruit.com/the-rise-of-irelands-tech-sector-tips-for-landing-your-dream-role/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Dublin's "Silicon Docks" as Europe's transatlantic technology gateway</a> hosting Google, Microsoft, Facebook, and over 2,200 tech startups employing 120,000+ people. With <a href="https://tech.eu/2025/03/07/innovation-in-action-irelands-tech-ecosystem/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Irish tech companies raising €400 million in 2024</a> and venture capital surging to $668 million in Q1 2025 (up from just $34 million in Q1 2024), Ireland offers unique GTM advantages: English-language EU market access post-Brexit, favorable corporate tax environment attracting multinational headquarters, and <a href="https://news.microsoft.com/europe/2025/03/13/ai-expected-to-add-e250bn-to-irelands-economy-by-2035-as-ai-use-surges-to-91-according-to-a-report-by-microsoft-and-trinity-college-dublin/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">exceptional AI adoption (91% in 2025, nearly doubling from 49% in 2024)</a> projecting €250 billion GDP contribution by 2035.
            </p>
            <p>
              Irish business culture uniquely blends American-style direct communication with European relationship-building, creating ideal conditions for B2B technology launches targeting both continents. Ireland's relatively small 5 million population forces GTM sophistication—companies cannot succeed domestically alone and must architect international expansion from day one, producing exceptional expertise in transatlantic product launches, regulatory navigation across US and EU frameworks, and capital-efficient scaling strategies. Dublin's timezone bridges US East Coast and European working hours, enabling efficient coordination across Atlantic markets, while Ireland's EU membership provides GDPR-compliant data residency and regulatory advantages for European enterprise sales that UK-based companies lost post-Brexit.
            </p>
            <p>
              Top GTM agencies serving Ireland provide critical transatlantic capabilities: deep expertise launching B2B technology products from Dublin into both US and European markets simultaneously; proven frameworks for capital-efficient GTM execution where Ireland's limited domestic market demands precise targeting and rapid international scaling; sophisticated understanding of US versus EU buyer behaviors, procurement processes, and regulatory requirements that heavily influence enterprise software adoption patterns; and strategic positioning expertise leveraging Ireland's unique advantages including English-language operations, EU market access, favorable tax environment, and concentration of multinational technology companies creating world-class talent density. They understand how to architect product launches that validate in Irish market before rapid US and European expansion, build partnerships with Dublin-based technology vendors and system integrators, and execute GTM strategies balancing Ireland's startup-friendly culture with the relationship-driven enterprise sales approaches required for broader European success.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">The Best GTM Agencies Ireland Has to Offer</h2>
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
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive strategy for Irish and European markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
