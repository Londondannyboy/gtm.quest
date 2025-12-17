import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Belgium 2025 | Top B2B Marketing Agencies Belgium',
  description: 'Discover the best B2B marketing agencies Belgium has to offer. Compare top Belgian B2B marketing consultancies for Brussels and EU markets.',
  keywords: 'best B2B marketing agency Belgium, top B2B marketing agencies Brussels, B2B marketing Belgium',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-belgium-top-b2b-marketing-agencies-belgium'
  }
}

export const revalidate = 3600

export default async function B2BMarketingAgencyBelgiumPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Belgium')

  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context": "https://schema.org", "@type": "CollectionPage", "name": "Best B2B Marketing Agencies Belgium", "url": "https://gtm.quest/best-b2b-marketing-agency-belgium-top-b2b-marketing-agencies-belgium"})}} />

      <div className="border-b border-white/10 py-6"><div className="max-w-7xl mx-auto px-6"><nav className="text-white/60 text-sm"><Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Belgium</span></nav></div></div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40"><img src="https://images.unsplash.com/photo-1559564484-e48bf598d128?w=1920&q=80" alt="B2B marketing Belgium - Brussels Grand Place" className="w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Belgium</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>Best B2B Marketing<br/>Agencies Belgium</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">Discover the top {totalAgencies} B2B marketing agencies Belgium has to offer.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">€{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24"><div className="max-w-7xl mx-auto px-6"><h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">B2B Marketing Agencies Belgium: EU Capital & Multilingual Expertise</h2><div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl"><p>Belgium's position as <a href="https://en.wikipedia.org/wiki/Economy_of_Belgium" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">the de facto capital of the European Union</a>, hosting the European Commission, NATO, and countless international organizations, makes Brussels one of the world's most important B2B marketing hubs for institutional and government relations. Belgian B2B agencies possess unparalleled expertise in navigating EU regulatory frameworks, multilingual campaigns, and stakeholder communications.</p><p>With three official languages (Dutch, French, German) and English as the business lingua franca, Belgian agencies excel at creating sophisticated multilingual B2B campaigns that resonate across diverse European markets. According to <a href="https://statbel.fgov.be/en" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Statistics Belgium</a>, the country's strategic location at Europe's crossroads drives 85% of GDP from services, with B2B professional services and EU-facing industries experiencing double-digit growth. The Belgian market combines Flemish pragmatism with Walloon creativity, creating a unique blend of analytical rigor and creative execution in B2B marketing strategies.</p><p>Belgian B2B agencies particularly excel in EU policy communications, public affairs marketing, pharmaceutical and life sciences positioning (given Belgium's strong biotech sector), and complex multinational campaigns that require cultural adaptation across language groups. They leverage <a href="https://www.belgium.be/en" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Belgium's neutral diplomatic tradition</a> to help B2B vendors understand the intricacies of marketing to EU institutions, international organizations, and enterprises operating across multiple European jurisdictions.</p></div></div></section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16"><h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies Serving Belgium</h2><p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies.</p></div>
        <div className="w-full">{agencies.map((agency, i) => (<AgencyCard key={agency.slug} rank={i + 1} name={agency.name} tagline={(agency as any).b2b_description || agency.description} description={[(agency as any).b2b_description || agency.description]} bestFor={agency.specializations || []} keyServices={(agency as any).key_services || agency.specializations || []} website={agency.website || '#'} primaryColor={(agency as any).primary_color || '#8B5CF6'} logoUrl={(agency as any).logo_url} backdropUrl={(agency as any).backdrop_url} isTopRanked={!!(agency.global_rank && agency.global_rank <= 3)} internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined} serviceAreas={agency.service_areas || []} />))}</div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24"><div className="max-w-4xl mx-auto px-6 text-center"><h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Belgian B2B Marketing Strategy</h2><p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Belgium and EU markets.</p><Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link></div></section>
    </div>
  )
}
