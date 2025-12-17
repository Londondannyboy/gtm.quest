import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Munich 2025 | Best Munich B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in Munich. Compare top Munich B2B marketing consultancies for Bavaria and German expansion.',
  keywords: 'B2B marketing agency Munich, B2B marketing Munich, best B2B marketing Munich, top B2B marketing agencies Munich',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-munich'
  }
}

export const revalidate = 3600

export default async function B2BMarketingAgencyMunichPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Munich')

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
            "name": "B2B Marketing Agencies Munich",
            "url": "https://gtm.quest/b2b-marketing-agency-munich"
          })
        }}
      />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Munich</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1595867818082-083862f3d630?w=1920&q=80"
            alt="B2B marketing agencies Munich - Munich skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Munich</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            B2B Marketing<br/>Agencies Munich
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Munich and Bavaria.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">Munich Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">€{Math.round(avgMinBudget / 1000)}K+</div>
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
            B2B Marketing in Munich: Germany's Corporate & Innovation Powerhouse
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Munich stands as <a href="https://en.wikipedia.org/wiki/Economy_of_Munich" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Germany's wealthiest city with GDP per capita of €86,000</a>, hosting global headquarters for BMW, Siemens, Allianz, and other DAX-listed corporations that define German industrial and technological excellence. The Bavarian capital combines deep-pocketed enterprise buyers with thriving technology sectors in automotive innovation, industrial IoT, and enterprise software.
            </p>
            <p>
              Munich's B2B marketing landscape reflects Bavarian business culture that values quality, precision, and long-term relationships over short-term tactics. From <a href="https://en.wikipedia.org/wiki/Siemens" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Siemens</a> enterprise technology divisions to automotive tech startups, B2B buyers expect marketing that demonstrates technical depth, engineering excellence, and the systematic approaches that align with German procurement processes and relationship-building timelines.
            </p>
            <p>
              Munich B2B marketing agencies excel at enterprise account-based marketing, technical content for engineering audiences, and relationship-building strategies that support long sales cycles. They bring expertise in automotive sector marketing, industrial technology positioning, and the premium brand approaches required to succeed in Germany's most affluent and quality-focused business environment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            B2B Marketing Agencies in Munich
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Munich and Bavaria.</p>
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
          <h2 className="text-5xl font-black text-white mb-16">Munich B2B Marketing FAQs</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Why choose a Munich B2B marketing agency?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Munich agencies understand enterprise German buyers, automotive sector dynamics, and industrial technology marketing. They excel at account-based marketing, technical content development, and the relationship-building approaches required to win high-value enterprise accounts in quality-focused markets.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What's the typical cost in Munich?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Munich B2B marketing agencies typically charge €15K-40K+ per month for retainers. Project fees range from €35K-175K+ depending on scope and campaign complexity. Premium positioning and enterprise account programs command higher rates reflecting Munich's affluent market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Munich B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Munich and German markets.</p>
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
