import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Spain 2025 | Top B2B Marketing Agencies Spain',
  description: 'Discover the best B2B marketing agencies Spain has to offer. Compare top Spanish B2B marketing consultancies serving Madrid, Barcelona and European markets.',
  keywords: 'best B2B marketing agency Spain, top B2B marketing agencies Madrid, B2B marketing Barcelona',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-spain-top-b2b-marketing-agencies-spain'
  }
}

export const revalidate = 3600

export default async function B2BMarketingAgencySpainPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Spain')

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
            "name": "Best B2B Marketing Agencies Spain",
            "url": "https://gtm.quest/best-b2b-marketing-agency-spain-top-b2b-marketing-agencies-spain"
          })
        }}
      />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Spain</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1920&q=80"
            alt="Best B2B marketing agencies Spain - Barcelona cityscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Spain</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            Best B2B Marketing<br/>Agencies Spain
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} B2B marketing agencies Spain has to offer.
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
            B2B Marketing Agencies Spain: Southern European Innovation Hub
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>Spain operates as <a href="https://en.wikipedia.org/wiki/Economy_of_Spain" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">the Eurozone's fourth-largest economy</a> and serves as Europe's bridge to Latin America's 650 million Spanish-speaking consumers, with Barcelona emerging as Southern Europe's startup capital and Madrid hosting multinational regional headquarters. Spain's unique position connecting European sophistication with Latin American market access, combined with lower operating costs than Northern Europe and government incentives for technology companies, creates opportunities for B2B firms targeting both Spanish domestic markets and using Spain as the cultural gateway to $8 trillion LATAM economies where Spanish language, business culture, and historical relationships provide advantages French or German competitors cannot replicate.</p>
            <p>Spanish B2B marketing agencies navigate a sophisticated market where relationship-based selling remains paramount, enterprise buyers expect personal connections before business discussions, and marketing must demonstrate understanding of Spanish business culture valuing long lunch meetings, regional pride (Catalonia versus Castile dynamics), and consensus-building decision processes slower than Northern European pragmatism but faster than Italian bureaucracy. According to <a href="https://www.ine.es/en/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Spanish National Statistics Institute data</a>, technology services grew 18% annually over the past five years, driven by Spanish companies pursuing digital transformation and Latin American enterprises establishing European operations in Barcelona's tech district 22@ and Madrid's expanding startup ecosystem around IE Business School.</p>
            <p>Top Spanish agencies excel in tourism technology marketing (Spain's 85 million annual visitors create massive hospitality tech opportunities), renewable energy positioning (Spain leads Europe in solar and wind), retail technology for Inditex/Zara supply chain innovation, and professional services firms targeting Latin American expansion where Spanish cultural expertise, language fluency, and understanding of LATAM business protocols—family business structures, corruption navigation, currency instability hedging—provide essential advantages for B2B vendors seeking to expand beyond saturated Western markets into high-growth regions where Spanish agencies' cultural intelligence and established Latin American networks enable market access foreign competitors require years to develop independently.</p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            B2B Marketing Agencies Serving Spain
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your B2B Marketing Strategy</h2>
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
