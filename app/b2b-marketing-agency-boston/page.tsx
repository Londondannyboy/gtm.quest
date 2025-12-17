import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Boston 2025 | Best Boston B2B Marketing Agencies',
  description: 'Best B2B marketing agencies in Boston. Top Boston B2B marketing consultancies for biotech, healthcare tech, and enterprise software.',
  keywords: 'B2B marketing Boston, B2B marketing agency Boston',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-boston'
  }
}

export const revalidate = 3600

export default async function B2BMarketingAgencyBostonPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Boston')

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
            "name": "B2B Marketing Agencies Boston",
            "url": "https://gtm.quest/b2b-marketing-agency-boston"
          })
        }}
      />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Boston</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&q=80"
            alt="B2B marketing agencies Boston - Boston skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Boston, Massachusetts</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            B2B Marketing<br/>Agencies Boston
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Boston and the Northeast.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">Boston Agencies</div>
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
            B2B Marketing in Boston: Biotech, Healthcare & Enterprise Hub
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Boston anchors the <a href="https://en.wikipedia.org/wiki/Massachusetts_Biotechnology_Council" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">world's leading life sciences cluster</a> with over 1,000 biotech companies concentrated along the Route 128 corridor and Cambridge Innovation District. The <a href="https://en.wikipedia.org/wiki/Economy_of_Boston" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Boston metropolitan economy</a> generates $560 billion in GDP, driven by healthcare technology, financial services, higher education, and enterprise software companies serving these regulated industries.
            </p>
            <p>
              Boston's B2B marketing agencies bring specialized expertise in complex, highly-regulated sales environments. They understand FDA compliance for medical device marketing, IRB requirements for clinical research promotion, and the sophisticated buying committees at academic medical centers and pharmaceutical companies. The city's agencies excel at translating deep scientific and technical concepts into compelling value propositions for clinical, research, and business stakeholders. Boston's academic ecosystem provides access to thought leaders, researchers, and practitioners who validate technical messaging and provide credibility to B2B marketing campaigns.
            </p>
            <p>
              The best Boston B2B marketing agencies specialize in healthcare IT, life sciences tools, medical devices, clinical research technology, and enterprise software for regulated industries. They bring expertise in account-based marketing for hospital systems, scientific content marketing, regulatory-compliant campaigns, and long-cycle enterprise sales support. With deep connections to teaching hospitals, research universities, and venture capital firms focused on healthcare and life sciences, Boston agencies understand the unique go-to-market requirements of companies serving these demanding markets.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            B2B Marketing Agencies in Boston
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Boston and the Northeast.</p>
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
          <h2 className="text-5xl font-black text-white mb-16">Boston B2B Marketing FAQs</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Why choose a Boston B2B marketing agency?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Boston agencies bring specialized expertise in life sciences, healthcare technology, and regulated industries. They understand complex sales cycles, scientific marketing, FDA compliance, and marketing to sophisticated medical and research buyers better than generalist agencies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What's the typical cost in Boston?
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Boston B2B marketing agencies typically charge $20K-35K+ per month for retainers. Project fees range from $50K-175K depending on scope and regulatory requirements. Life sciences and healthcare campaigns command premium rates given specialized expertise requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Boston B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Boston and Northeast markets.</p>
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
