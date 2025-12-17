import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesForLocation } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'GTM Agencies Los Angeles 2025 | Top Go-To-Market Agencies LA',
  description: 'Find the best GTM agencies in Los Angeles. Compare top LA go-to-market consultancies serving entertainment tech and Southern California.',
  keywords: 'GTM agency Los Angeles, go-to-market agencies LA, GTM consultants Hollywood, LA tech GTM',
  alternates: { canonical: 'https://gtm.quest/gtm-agencies-los-angeles' }
}

export const revalidate = 3600

export default async function GTMAgenciesLosAngelesPage() {
  const agencies = await getAgenciesForLocation('Los Angeles')

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="border-b border-white/10 py-6"><div className="max-w-7xl mx-auto px-6"><nav className="text-white/60 text-sm"><Link href="/">Home</Link> / <Link href="/best-gtm-agencies">GTM Agencies</Link> / <span className="text-white">Los Angeles</span></nav></div></div>
      
      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">Los Angeles, California</span>
          <h1 className="text-7xl md:text-8xl font-black text-white mb-6 leading-tight">GTM Agencies<br />in Los Angeles</h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">{agencies.length} verified go-to-market agencies serving LA's entertainment tech and creative industries.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            <div><div className="text-5xl font-black text-white mb-2">{agencies.length}</div><div className="text-white/60">Agencies</div></div>
            <div><div className="text-5xl font-black text-white mb-2">Media</div><div className="text-white/60">Tech Focus</div></div>
            <div><div className="text-5xl font-black text-white mb-2">Creative</div><div className="text-white/60">Heritage</div></div>
            <div><div className="text-5xl font-black text-white mb-2">SoCal</div><div className="text-white/60">Market</div></div>
          </div>
        </div>
      </section>

      <section className="bg-black">{agencies.map((agency, i) => (<AgencyCard key={agency.slug} rank={i + 1} name={agency.name} tagline={agency.description} description={[agency.description]} bestFor={agency.specializations || []} keyServices={[]} website={agency.website || '#'} primaryColor={(agency as any).primary_color || '#8B5CF6'} logoUrl={(agency as any).logo_url} backdropUrl={(agency as any).backdrop_url} isTopRanked={!!(agency.global_rank && agency.global_rank <= 3)} internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined} serviceAreas={agency.service_areas || []} />))}</section>

      <section className="bg-gradient-to-r from-purple-600 to-pink-500 py-20"><div className="max-w-4xl mx-auto px-6 text-center"><h2 className="text-4xl md:text-5xl font-black text-white mb-6">Build Your LA GTM Strategy</h2><p className="text-xl text-white/90 mb-10">Create a go-to-market strategy for Los Angeles markets.</p><Link href="/planner" className="inline-flex items-center justify-center px-12 py-6 text-xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link></div></section>
    </div>
  )
}
