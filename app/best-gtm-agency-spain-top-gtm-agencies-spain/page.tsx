import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best GTM Agency Spain 2025 | Top Go-To-Market Agencies Spain',
  description: 'Discover the best go-to-market agencies serving Spain. Compare top Spanish GTM consultancies for Madrid, Barcelona and European expansion.',
  keywords: 'best GTM agency Spain, top go-to-market agencies Madrid, GTM consultants Barcelona, Spain GTM strategy',
  alternates: {
    canonical: 'https://gtm.quest/best-gtm-agency-spain-top-gtm-agencies-spain'
  }
}

export const revalidate = 3600

export default async function GTMAgencySpainPage() {
  const agencies = await getAgenciesByCategory('GTM Agency', 'Spain')

  const totalAgencies = agencies.length
  const avgMinBudget = agencies
    .filter(a => a.min_budget)
    .reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000

  const specializations = agencies
    .flatMap(a => a.specializations || [])
    .reduce((acc, spec) => {
      acc[spec] = (acc[spec] || 0) + 1
      return acc
    }, {} as Record<string, number>)

  const topSpecializations = Object.entries(specializations)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Best GTM Agencies Spain",
            "url": "https://gtm.quest/best-gtm-agency-spain-top-gtm-agencies-spain"
          })
        }}
      />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">GTM Spain</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1920&q=80"
            alt="Best GTM agencies Spain - Barcelona Sagrada Familia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Spain</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            Best GTM<br/>Agencies Spain
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} go-to-market agencies Spain has to offer.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">Top Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">€{Math.round(avgMinBudget / 1000)}K+</div>
              <div className="text-white/70 text-lg">Avg Budget</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">100%</div>
              <div className="text-white/70 text-lg">Verified</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div>
              <div className="text-white/70 text-lg">Specialties</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            GTM Agencies Spain: Gateway to Southern Europe & LATAM
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Spain's technology ecosystem generated <a href="https://techfundingnews.com/spains-tech-boom-e14-8b-impact-8580-startups-but-where-are-the-women/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">€14.8 billion economic impact in 2025 across 8,580 active firms employing 108,000+ people</a>, with <a href="https://vcwire.tech/2025/06/03/spanish-tech-ecosystem-grows-by-22-according-to-report/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">startups raising €2.92 billion in 2024 (up from €1.82 billion in 2023)</a> and Madrid attracting 85.3% of foreign tech investment to establish itself as Southern Europe's leading innovation hub. Spain ranks #14 globally in the Global Startup Ecosystem Index with Madrid and Barcelona emerging as fierce rivals—Madrid edging Barcelona in total tech firms (1,560 vs 1,553) for the first time while <a href="https://salesforceeurope.com/blog/your-tech-expansion-into-spain" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Catalonia maintains highest regional firm concentration (2,351)</a> creating complementary strengths across finance/enterprise (Madrid) and innovation/design (Barcelona).
            </p>
            <p>
              Spanish business culture emphasizes relationship-building, personal connections, and extended evaluation cycles that require patient, consultative GTM approaches fundamentally different from UK or Nordics transactional efficiency. Spanish enterprise buyers expect face-to-face meetings, local market presence, and demonstration of long-term commitment through Spanish-speaking teams and regional partnerships before major technology commitments. Spain's bilingual requirements create unique GTM complexity—Castilian Spanish dominates Madrid and national business, while Catalan language and cultural identity significantly influence Barcelona enterprise sales, demanding positioning strategies that respect regional differences. Spain's strategic position as Latin America's European gateway enables unique LATAM expansion opportunities leveraging shared language, business culture, and historical connections across Mexico, Colombia, Argentina, and broader Spanish-speaking markets representing 500+ million consumers.
            </p>
            <p>
              Top GTM agencies serving Spain provide critical Southern European and LATAM capabilities: deep understanding of relationship-driven Spanish enterprise sales requiring extended courtship periods, multiple stakeholder meetings, and personal rapport-building before contracts; expertise navigating Spain's regional market variations spanning Madrid's finance and government buyers through Barcelona's innovation-focused startups and Basque Country's industrial manufacturing base; bilingual positioning and messaging capabilities across Castilian Spanish, Catalan, and English-language business contexts; and proven frameworks for staged LATAM expansion leveraging Spain as a European base for broader Spanish-speaking market entry. They understand how to balance Spain's Mediterranean business culture emphasizing work-life balance and relationship primacy with the execution velocity required for B2B technology success, build partnerships with Spanish system integrators and technology vendors, and execute launch strategies that accommodate Spain's economic recovery challenges while capitalizing on the country's surging startup ecosystem momentum and strategic positioning bridging Europe, Africa, and Latin American markets.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            GTM Agencies Serving Spain
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies.</p>
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

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your GTM Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a strategy for Spanish and European markets.</p>
          <Link
            href="/planner"
            className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl"
          >
            Start Free →
          </Link>
        </div>
      </section>
    </div>
  )
}
