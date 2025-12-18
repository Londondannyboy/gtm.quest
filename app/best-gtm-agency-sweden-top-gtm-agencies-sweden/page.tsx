import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best GTM Agency Sweden 2025 | Top Go-To-Market Agencies Sweden',
  description: 'Discover the best go-to-market agencies serving Sweden. Compare top Swedish GTM consultancies for Stockholm and Nordic expansion.',
  keywords: 'best GTM agency Sweden, top go-to-market agencies Stockholm, GTM consultants Sweden, Nordic GTM strategy',
  alternates: {
    canonical: 'https://gtm.quest/best-gtm-agency-sweden-top-gtm-agencies-sweden'
  }
}

export const revalidate = 3600

export default async function GTMAgencySwedenPage() {
  const agencies = await getAgenciesByCategory('GTM Agency', 'Sweden')

  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context": "https://schema.org", "@type": "CollectionPage", "name": "Best GTM Agencies Sweden", "url": "https://gtm.quest/best-gtm-agency-sweden-top-gtm-agencies-sweden"})}} />

      <div className="border-b border-white/10 py-6"><div className="max-w-7xl mx-auto px-6"><nav className="text-white/60 text-sm"><Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">GTM Sweden</span></nav></div></div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40"><img src="https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1920&q=80" alt="Best GTM agencies Sweden - Stockholm waterfront" className="w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Sweden</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>Best GTM<br/>Agencies Sweden</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">Discover the top {totalAgencies} go-to-market agencies Sweden has to offer.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">SEK{Math.round(avgMinBudget / 100)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24"><div className="max-w-7xl mx-auto px-6"><h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">GTM Agencies Sweden: Nordic Innovation Leader</h2><div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl"><p>Sweden ranks #2 globally on the 2026 Global Innovation Index with technology contributing 12% to GDP, employing 400,000+ people, and positioning <a href="https://www.business-sweden.com/about-us/media/press-releases/press-releases/2025/swedish-tech-continues-to-defy-the-economic-downturn/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Stockholm as Europe's "Unicorn Factory"</a> hosting 5,000+ startups generating €41 billion annual revenue. With <a href="https://sweden.se/work-business/business-in-sweden/innovation-in-sweden" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Swedish startups securing €2.4 billion in 2026 venture capital</a> despite broader European funding declines, Sweden maintains exceptional per-capita investment while producing globally dominant companies like Spotify, Klarna, King, and Skype that pioneered product-led growth, freemium models, and consumer-to-enterprise expansion strategies now standard across B2B SaaS.</p><p>Swedish business culture uniquely emphasizes consensus-driven decision making (lagom philosophy), flat organizational hierarchies, and direct communication that accelerates enterprise sales cycles compared to hierarchical Southern European or relationship-intensive Asian markets. Sweden invests over 3% GDP annually in R&D—among world's highest—creating sophisticated buyer expectations around product quality, technical innovation, and sustainability that fundamentally shape GTM strategies. Stockholm's English-fluent workforce, Nordic regional integration, and cultural similarities across Denmark, Norway, and Finland enable efficient pan-Nordic launches serving 27 million population markets before European expansion, while Swedish companies' global outlook demands GTM strategies architecting international scaling from inception rather than domestic-first approaches.</p><p>Top GTM agencies serving Sweden provide critical Nordic capabilities: deep expertise in product-led growth strategies where Swedish buyers expect self-service trials, transparent pricing, and minimal sales friction before enterprise commitments; proven frameworks for consensus-driven enterprise sales requiring stakeholder alignment across technical, financial, and operational teams without hierarchical C-level forcing; sophisticated understanding of Nordic sustainability expectations where environmental and social governance significantly influences enterprise technology adoption decisions; and multilingual positioning spanning Swedish, Danish, Norwegian, and Finnish markets with cultural nuances distinguishing Nordic business practices from broader European approaches. They understand how to leverage Sweden's innovation leadership and unicorn track record for credibility, navigate strong labor protections and privacy regulations influencing enterprise software adoption, and execute launch strategies balancing Sweden's startup-friendly culture with the relationship-driven approaches required for government and large enterprise sectors dominating Nordic B2B markets.</p></div></div></section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16"><h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Agencies Serving Sweden</h2><p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies.</p></div>
        <div className="w-full">{agencies.map((agency, i) => (<AgencyCard key={agency.slug} rank={i + 1} name={agency.name} tagline={(agency as any).b2b_description || agency.description} description={[(agency as any).b2b_description || agency.description]} bestFor={agency.specializations || []} keyServices={(agency as any).key_services || agency.specializations || []} website={agency.website || '#'} primaryColor={(agency as any).primary_color || '#8B5CF6'} logoUrl={(agency as any).logo_url} backdropUrl={(agency as any).backdrop_url} isTopRanked={!!(agency.global_rank && agency.global_rank <= 3)} internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined} serviceAreas={agency.service_areas || []} />))}</div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24"><div className="max-w-4xl mx-auto px-6 text-center"><h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your GTM Strategy</h2><p className="text-2xl text-white/95 mb-12">Create a strategy for Swedish and Nordic markets.</p><Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link></div></section>
    </div>
  )
}
