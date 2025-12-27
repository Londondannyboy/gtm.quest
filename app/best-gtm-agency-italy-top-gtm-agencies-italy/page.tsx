import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best GTM Agency Italy 2025 | GTM Quest',
  description: 'Discover the best go-to-market agencies serving Italy. Compare top Italian GTM consultancies for Milan, Rome and European expansion.',
  keywords: 'best GTM agency Italy, top go-to-market agencies Milan, GTM consultants Rome, Italy GTM strategy',
  alternates: {
    canonical: 'https://gtm.quest/best-gtm-agency-italy-top-gtm-agencies-italy'
  }
}

export const revalidate = 3600

export default async function GTMAgencyItalyPage() {
  const agencies = await getAgenciesByCategory('GTM Agency', 'Italy')

  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context": "https://schema.org", "@type": "CollectionPage", "name": "Best GTM Agencies Italy", "url": "https://gtm.quest/best-gtm-agency-italy-top-gtm-agencies-italy"})}} />

      <div className="border-b border-white/10 py-6"><div className="max-w-7xl mx-auto px-6"><nav className="text-white/60 text-sm"><Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">GTM Italy</span></nav></div></div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40"><img src="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1920&q=80" alt="Best GTM agency Italy - Milan cityscape" className="w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Italy</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>Best GTM Agency Italy 2025</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">Discover the top {totalAgencies} go-to-market agencies Italy has to offer.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">€{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24"><div className="max-w-7xl mx-auto px-6"><h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">GTM Agencies Italy: Design-Led European Market</h2><div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl"><p>Italy's technology sector contributed <a href="https://tech.eu/2025/06/19/italys-tech-ecosystem-innovation-growth-and-emerging-opportunities/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">6.8% to GDP in 2023 and is heading toward 8.5% by end of 2026</a>, with <a href="https://tech.eu/2025/08/13/italy-s-tech-ecosystem-picking-up-with-768m-raised-in-2025/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Italian startups raising over €1.3 billion in 2026</a> and €504 million in Q1 2025 alone, positioning Milan as Europe's emerging innovation hub responsible for 40% of total Italian tech investment alongside Rome's cybersecurity excellence and Turin's automotive technology strengths. Italy's legendary design heritage (Made in Italy brand) extends beyond fashion and manufacturing into enterprise technology, where <a href="https://foundersfactory.com/articles/italy-startup-hub/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Italian buyers uniquely emphasize user experience aesthetics, interface elegance, and brand positioning</a> alongside functional requirements—creating distinctive GTM demands where product design quality significantly influences enterprise adoption decisions.</p><p>Italian business culture prioritizes personal relationships, family business traditions, and extended trust-building cycles that require patient, relationship-driven GTM strategies fundamentally different from Northern European or American transactional approaches. Italian enterprise buyers expect multiple face-to-face meetings, demonstrations of long-term commitment through local presence and Italian-speaking teams, and extensive relationship cultivation across technical, financial, and executive stakeholders before major technology purchases. Italy's regional market diversity demands nuanced positioning—Milan's international business culture mirrors London or Paris, Rome's government and public sector requires navigating bureaucracy and political relationships, while Northern industrial regions (Turin, Bologna) emphasize manufacturing and engineering excellence with different buyer priorities than Southern markets. Italian procurement often involves extended evaluation cycles spanning 12-18 months as consensus builds across stakeholder groups and family business decision-makers balance innovation with risk aversion inherited from centuries of business tradition.</p><p>Top GTM agencies serving Italy provide critical Southern European capabilities: deep understanding of relationship-driven Italian enterprise sales requiring extensive courtship, multiple stakeholder meetings, and personal rapport-building before contracts; expertise navigating Italy's fragmented regional markets spanning Milan's international business hub through Rome's government sectors and Northern industrial manufacturing concentrations; bilingual positioning capabilities across Italian and English with cultural sensitivity to design aesthetics, brand heritage, and family business values that heavily influence technology adoption; and proven frameworks balancing Italy's relationship-intensive business culture with the execution velocity required for B2B technology success. They understand how to leverage Italy's design excellence and Made in Italy prestige for credibility, navigate complex Italian procurement processes involving multiple stakeholder approvals and bureaucratic requirements, and execute launch strategies that accommodate Italy's economic challenges while capitalizing on the country's surging startup ecosystem momentum and strategic position as Southern Europe's design and manufacturing capital bridging Northern European efficiency with Mediterranean relationship-driven culture.</p></div></div></section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16"><h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Agencies Serving Italy</h2><p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies.</p></div>
        <div className="w-full">{agencies.map((agency, i) => (<AgencyCard key={agency.slug} rank={i + 1} name={agency.name} tagline={(agency as any).b2b_description || agency.description} description={[(agency as any).b2b_description || agency.description]} bestFor={agency.specializations || []} keyServices={(agency as any).key_services || agency.specializations || []} website={agency.website || '#'} primaryColor={(agency as any).primary_color || '#8B5CF6'} logoUrl={(agency as any).logo_url} backdropUrl={(agency as any).backdrop_url} isTopRanked={!!(agency.global_rank && agency.global_rank <= 3)} internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined} serviceAreas={agency.service_areas || []} />))}</div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24"><div className="max-w-4xl mx-auto px-6 text-center"><h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your GTM Strategy</h2><p className="text-2xl text-white/95 mb-12">Create a strategy for Italian and European markets.</p><Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link></div></section>
    </div>
  )
}
