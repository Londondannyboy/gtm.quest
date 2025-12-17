import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency San Francisco 2025 | Best SF B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in San Francisco. Compare top Silicon Valley B2B marketing consultancies for Bay Area tech companies.',
  keywords: 'B2B marketing agency San Francisco, B2B marketing SF, Silicon Valley B2B marketing, Bay Area marketing agencies',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-san-francisco'
  }
}

export const revalidate = 3600

export default async function B2BMarketingAgencySanFranciscoPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'San Francisco')

  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context": "https://schema.org", "@type": "CollectionPage", "name": "B2B Marketing Agencies San Francisco", "url": "https://gtm.quest/b2b-marketing-agency-san-francisco"})}} />

      <div className="border-b border-white/10 py-6"><div className="max-w-7xl mx-auto px-6"><nav className="text-white/60 text-sm"><Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing SF</span></nav></div></div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40"><img src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1920&q=80" alt="B2B marketing agencies San Francisco - Golden Gate Bridge" className="w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">San Francisco, California</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>B2B Marketing<br/>Agencies SF</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">{totalAgencies} top B2B marketing agencies serving Silicon Valley and the Bay Area.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">SF Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">${Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">SaaS</div><div className="text-white/70 text-lg">Specialization</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24"><div className="max-w-7xl mx-auto px-6"><h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">B2B Marketing in SF: Silicon Valley Innovation Hub</h2><div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl"><p>San Francisco's unparalleled concentration of VC-backed startups, enterprise tech giants, and innovation leaders creates the world's most sophisticated B2B marketing ecosystem. SF agencies understand product-led growth, developer marketing, and scaling from early-stage to enterprise.</p></div></div></section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16"><h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies in San Francisco</h2><p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Silicon Valley.</p></div>
        <div className="w-full">{agencies.map((agency, i) => (<AgencyCard key={agency.slug} rank={i + 1} name={agency.name} tagline={(agency as any).b2b_description || agency.description} description={[(agency as any).b2b_description || agency.description]} bestFor={agency.specializations || []} keyServices={(agency as any).key_services || agency.specializations || []} website={agency.website || '#'} primaryColor={(agency as any).primary_color || '#8B5CF6'} logoUrl={(agency as any).logo_url} backdropUrl={(agency as any).backdrop_url} isTopRanked={!!(agency.global_rank && agency.global_rank <= 3)} internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined} serviceAreas={agency.service_areas || []} />))}</div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24"><div className="max-w-4xl mx-auto px-6 text-center"><h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your SF B2B Strategy</h2><p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Silicon Valley.</p><Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link></div></section>
    </div>
  )
}
