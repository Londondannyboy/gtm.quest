import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Germany 2025 | GTM Quest',
  description: 'Find the best B2B marketing agency Germany has for your business. Compare top B2B marketing agencies in Germany for Berlin, Munich, and DACH markets.',
  keywords: 'best B2B marketing agency Germany, top B2B marketing agencies Berlin, B2B marketing Munich, demand generation Germany',
  alternates: { canonical: 'https://gtm.quest/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany' }
}

export const revalidate = 3600

export default async function B2BMarketingAgencyGermanyPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Germany')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"Best B2B Marketing Agencies Germany","url":"https://gtm.quest/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany"})}} />
      <div className="border-b border-white/10 py-6"><div className="max-w-7xl mx-auto px-6"><nav className="text-white/60 text-sm"><Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Germany</span></nav></div></div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40"><img src="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1920&q=80" alt="Best B2B marketing agency Germany - Berlin Brandenburg Gate" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Germany</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight:900}}>Best B2B Marketing Agency Germany 2025</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">Discover the top {totalAgencies} B2B marketing agencies Germany has to offer. Find the right B2B marketing agency Germany businesses trust for growth.</p>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose a B2B Marketing Agency Germany for Your Business?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Germany commands <a href="https://en.wikipedia.org/wiki/Economy_of_Germany" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Europe's largest economy</a> and maintains global leadership in precision manufacturing, automotive engineering, and industrial technology. The <a href="https://en.wikipedia.org/wiki/Mittelstand" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Mittelstand tradition</a> of family-owned enterprises—comprising 99% of German businesses—creates a distinctive B2B landscape where long-term partnerships, engineering rigor, and technical excellence outweigh short-term cost considerations, requiring marketing approaches fundamentally different from Anglo-American transactional models.
            </p>
            <p>
              German B2B agencies understand the extended evaluation cycles characteristic of German enterprise purchasing, where technical validation, engineering committee approvals, and detailed specification reviews can span 12-24 months for complex industrial systems and enterprise software. According to <a href="https://www.destatis.de/EN/Home/_node.html" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">German Federal Statistical Office data</a>, Germany's industrial sector drives 27% of GDP—far higher than other developed economies—creating unique B2B dynamics where technical specifications and engineering validation dominate purchasing decisions. Marketing to German buyers demands deep technical content, engineering-grade documentation, TÜV or ISO certifications, and case studies demonstrating Ingenieurkunst (engineering excellence) rather than marketing hyperbole—a distinction that separates successful German market entries from failed launches by foreign vendors unfamiliar with Germanic business culture.
            </p>
            <p>
              Top German agencies excel in serving automotive suppliers, industrial automation companies, manufacturing enterprises, and B2B technology firms targeting DACH (Germany, Austria, Switzerland) markets. They navigate complex challenges including multilingual content requirements (German business documentation standards demand native-level German technical writing), Industry 4.0 positioning, sustainability and circular economy messaging increasingly required for German procurement approval, and understanding regional variations between northern German business pragmatism and southern Bavarian relationship-driven commerce. The agencies below demonstrate proven capabilities serving German enterprises and international companies pursuing German market expansion.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Top B2B Marketing Agency Germany Directory</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies with German market expertise.</p>
        </div>
        <div className="w-full">
          {agencies.map((agency, i) => (
            <AgencyCard key={agency.slug} rank={i+1} name={agency.name} tagline={(agency as any).b2b_description || agency.description} description={[(agency as any).b2b_description || agency.description]} bestFor={agency.specializations || []} keyServices={(agency as any).key_services || agency.specializations || []} website={agency.website || '#'} primaryColor={(agency as any).primary_color || '#8B5CF6'} logoUrl={(agency as any).logo_url} backdropUrl={(agency as any).backdrop_url} isTopRanked={!!(agency.global_rank && agency.global_rank <= 3)} internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined} serviceAreas={agency.service_areas || []} />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your B2B Marketing Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive strategy for German and European markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
