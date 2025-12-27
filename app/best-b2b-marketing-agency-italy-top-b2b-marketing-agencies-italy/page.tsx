import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Italy 2025 | GTM Quest',
  description: 'Find the best B2B marketing agency Italy has for your business. Compare top B2B marketing agencies in Italy for Milan, Rome, and European markets.',
  keywords: 'best B2B marketing agency Italy, top B2B marketing agencies Milan, B2B marketing Rome',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-italy-top-b2b-marketing-agencies-italy'
  }
}

export const revalidate = 3600

export default async function B2BMarketingAgencyItalyPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Italy')

  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context": "https://schema.org", "@type": "CollectionPage", "name": "Best B2B Marketing Agencies Italy", "url": "https://gtm.quest/best-b2b-marketing-agency-italy-top-b2b-marketing-agencies-italy"})}} />

      <div className="border-b border-white/10 py-6"><div className="max-w-7xl mx-auto px-6"><nav className="text-white/60 text-sm"><Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Italy</span></nav></div></div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40"><img src="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1920&q=80" alt="Best B2B marketing agency Italy - Milan cathedral" className="w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Italy</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>Best B2B Marketing Agency Italy 2025</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">Discover the top {totalAgencies} B2B marketing agencies Italy has to offer. Find the right B2B marketing agency Italy businesses trust for growth.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">€{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24"><div className="max-w-7xl mx-auto px-6"><h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose a B2B Marketing Agency Italy for Your Business?</h2><div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl"><p>Italy operates as <a href="https://en.wikipedia.org/wiki/Economy_of_Italy" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Europe's third-largest economy</a> and maintains global leadership in luxury manufacturing, fashion technology, industrial machinery, and design innovation—creating a distinctive B2B landscape where aesthetic excellence, family business traditions, and technical precision intersect. Milan's design district, Bologna's packaging machinery cluster, and Turin's automotive engineering create B2B niches where Italian agencies' understanding of design-driven enterprise marketing, Made in Italy brand leverage, and Southern European relationship-based sales cultures provide advantages Northern European competitors cannot replicate.</p><p>Italian B2B agencies navigate complex market dynamics including slower decision-making processes than Northern Europe, emphasis on personal relationships over transactional efficiency, regional business culture variations (Milan's efficiency versus Rome's bureaucracy), and Italian buyers' sophisticated design sensibility expecting marketing materials matching luxury brand standards. According to <a href="https://www.istat.it/en/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Italian National Institute of Statistics</a>, technology services grew 12% annually with B2B companies increasingly pursuing digital transformation despite traditional resistance to change.</p><p>Top Italian agencies excel in luxury technology marketing, fashion/textile B2B positioning, industrial machinery for manufacturing automation, and food technology serving Italy's €140 billion food industry. They understand how Italian family businesses make decisions through informal networks rather than formal processes, appreciate the importance of aesthetic presentation in B2B contexts where even enterprise software demos must exhibit design sophistication, and leverage Italy's unique position as the bridge between Germanic efficiency and Mediterranean relationship culture—making Italian market success essential for B2B vendors targeting Southern European markets where cultural understanding matters more than features or pricing.</p></div></div></section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16"><h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Top B2B Marketing Agency Italy Directory</h2><p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies.</p></div>
        <div className="w-full">{agencies.map((agency, i) => (<AgencyCard key={agency.slug} rank={i + 1} name={agency.name} tagline={(agency as any).b2b_description || agency.description} description={[(agency as any).b2b_description || agency.description]} bestFor={agency.specializations || []} keyServices={(agency as any).key_services || agency.specializations || []} website={agency.website || '#'} primaryColor={(agency as any).primary_color || '#8B5CF6'} logoUrl={(agency as any).logo_url} backdropUrl={(agency as any).backdrop_url} isTopRanked={!!(agency.global_rank && agency.global_rank <= 3)} internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined} serviceAreas={agency.service_areas || []} />))}</div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24"><div className="max-w-4xl mx-auto px-6 text-center"><h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your B2B Marketing Strategy</h2><p className="text-2xl text-white/95 mb-12">Create a strategy for Italian and European markets.</p><Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link></div></section>
    </div>
  )
}
