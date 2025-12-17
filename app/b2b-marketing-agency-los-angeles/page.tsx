import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Los Angeles 2025 | Best LA B2B Marketing',
  description: 'Best B2B marketing agencies in Los Angeles. Top LA B2B marketing consultancies for entertainment tech and Southern California.',
  keywords: 'B2B marketing agency Los Angeles, B2B marketing LA',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-los-angeles'
  }
}

export const revalidate = 3600

export default async function B2BMarketingAgencyLosAngelesPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Los Angeles')

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
            "name": "B2B Marketing Agencies Los Angeles",
            "url": "https://gtm.quest/b2b-marketing-agency-los-angeles"
          })
        }}
      />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing LA</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1534190239940-9ba8944ea261?w=1920&q=80"
            alt="B2B marketing agencies Los Angeles - LA skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Los Angeles, California</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            B2B Marketing<br/>Agencies LA
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Los Angeles and Southern California.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">LA Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">${Math.round(avgMinBudget / 1000)}K+</div>
              <div className="text-white/70 text-lg">Avg Min Budget</div>
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
            B2B Marketing in Los Angeles: Entertainment Tech & Creative Hub
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Los Angeles represents the <a href="https://en.wikipedia.org/wiki/Economy_of_Los_Angeles" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">second-largest metropolitan economy</a> in the United States with $1.1 trillion in GDP, combining Hollywood's entertainment dominance with Silicon Beach's technology innovation. The <a href="https://en.wikipedia.org/wiki/Silicon_Beach" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Silicon Beach corridor</a> hosts major tech companies like Snap, Hulu, and SpaceX alongside thousands of B2B startups serving media technology, advertising technology, and content production markets.
            </p>
            <p>
              Los Angeles B2B marketing agencies uniquely blend world-class creative production capabilities with performance marketing expertise. The city's agencies excel at brand storytelling through video content, influencer partnerships, and narrative-driven campaigns that resonate with creative industries. They understand how to market to entertainment companies, production studios, creative agencies, and the complex ecosystem of technology vendors serving media and advertising sectors. LA's creative culture produces marketing campaigns with production values and storytelling depth that agencies in other markets cannot replicate.
            </p>
            <p>
              The top Los Angeles B2B marketing agencies specialize in video marketing strategy, brand positioning for entertainment technology, marketing automation for media companies, and demand generation for creative software platforms. They bring expertise in martech, adtech, production tools, streaming infrastructure, and other categories where Los Angeles companies dominate. With access to Hollywood-caliber production resources and performance marketing talent from major tech companies, LA agencies deliver campaigns that combine creative excellence with measurable revenue impact.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            B2B Marketing Agencies in Los Angeles
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving LA and Southern California.</p>
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

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-16">Los Angeles B2B Marketing FAQs</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Why choose a Los Angeles B2B marketing agency?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                LA agencies combine Hollywood-level creative production with performance marketing expertise. They excel at video marketing, brand storytelling, and campaigns for media tech, entertainment SaaS, and creative industries with unmatched production capabilities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What's the typical cost in Los Angeles?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Los Angeles B2B marketing agencies typically charge $20K-40K+ per month for retainers. Project fees range from $50K-200K depending on creative production requirements and campaign scope. Video-heavy campaigns command premium rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your LA B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Los Angeles and Southern California markets.</p>
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
