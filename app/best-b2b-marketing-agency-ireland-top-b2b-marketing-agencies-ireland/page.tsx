import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Ireland 2025 | GTM Quest',
  description: 'Find the best B2B marketing agency Ireland has for your business. Compare top B2B marketing agencies in Ireland for Dublin and European markets.',
  keywords: 'best B2B marketing agency Ireland, top B2B marketing agencies Dublin, B2B digital marketing Ireland, demand generation Dublin, B2B lead generation Ireland',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-ireland-top-b2b-marketing-agencies-ireland'
  }
}

export const revalidate = 3600

export default async function B2BMarketingAgencyIrelandPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Ireland')

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
            "name": "Best B2B Marketing Agencies Ireland",
            "description": "Top B2B marketing agencies serving the Irish market",
            "url": "https://gtm.quest/best-b2b-marketing-agency-ireland-top-b2b-marketing-agencies-ireland",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": agencies.map((agency, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Organization",
                  "name": agency.name,
                  "url": `https://gtm.quest/agency/${agency.slug}`
                }
              }))
            }
          })
        }}
      />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' '}/{' '}
            <Link href="/best-gtm-agencies" className="hover:text-white transition-colors">Agencies</Link>
            {' '}/{' '}
            <span className="text-white">B2B Marketing Ireland</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1549918864-48ac978761a4?w=1920&q=80"
            alt="Best B2B marketing agency Ireland - Dublin city center and River Liffey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Ireland</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            Best B2B Marketing Agency Ireland 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} B2B marketing agencies Ireland has to offer. Find the right B2B marketing agency Ireland businesses trust for growth.
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
            Why Choose a B2B Marketing Agency Ireland for Your Business?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Ireland operates as <a href="https://en.wikipedia.org/wiki/Economy_of_the_Republic_of_Ireland" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">one of Europe's fastest-growing economies</a> and has established Dublin as the undisputed EMEA headquarters capital, hosting over 1,700 multinational corporations including all major US technology giants (Google, Apple, Meta, Microsoft, Amazon, LinkedIn) alongside pharmaceutical leaders Pfizer, Johnson & Johnson, and Abbott. Ireland's 12.5% corporate tax rate, English-speaking workforce with 99.5% literacy, and positioning as the only English-language jurisdiction remaining in the EU post-Brexit creates unmatched advantages for B2B technology companies requiring European market access while maintaining American-style business culture and operational flexibility that German or French regulatory environments cannot match.
            </p>
            <p>
              Irish B2B marketing agencies serve a concentrated, sophisticated market where €500 million+ technology companies operate European divisions employing 5,000-20,000 people, creating enterprise buyers with Silicon Valley-level technical sophistication combined with European regulatory compliance requirements. According to <a href="https://www.cso.ie/en/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Central Statistics Office Ireland</a>, the country's ICT services sector has grown 180% over the past decade, making it the fastest-expanding B2B market in Western Europe. The Irish business environment rewards relationship-based selling, consultative approaches, and marketing that demonstrates understanding of Ireland's unique position bridging American commercial pragmatism with European regulatory frameworks—a delicate balance that foreign vendors frequently misjudge by either treating Ireland as merely another European market or assuming American sales tactics translate directly without cultural adaptation.
            </p>
            <p>
              Top Irish agencies excel in enterprise technology marketing for multinational EMEA operations, pharmaceutical B2B positioning (Ireland's life sciences sector generates €99 billion annually), financial services technology serving Dublin's IFSC financial district, and professional services firms targeting Ireland's concentration of Fortune 500 European headquarters. <a href="https://enterprise.gov.ie/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Enterprise Ireland</a> reports that Irish technology exports reached €140 billion in 2023, with B2B services driving 65% of growth. They navigate unique challenges including servicing both Irish domestic SMEs and massive multinational divisions with European-wide mandates, understanding how Irish procurement processes blend European public tender requirements with American-style vendor evaluation speed, and leveraging Ireland's position as the testing ground where US companies validate European market strategies before broader continental expansion—making Irish market success a critical proof point for subsequent launches in Germany, France, and Benelux markets.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Top B2B Marketing Agency Ireland Directory
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {totalAgencies} verified B2B marketing agencies serving Irish and European businesses.
          </p>
        </div>

        <div className="w-full">
          {agencies.map((agency, i) => {
            const isTopRanked = !!(agency.global_rank && agency.global_rank <= 3)
            const website = agency.website || '#'
            const description = (agency as any).b2b_description || agency.description
            const keyServices = (agency as any).key_services || agency.specializations || []
            const isGTMQuest = agency.slug === 'gtmquest'

            return (
              <AgencyCard
                key={agency.slug}
                rank={i + 1}
                name={agency.name}
                tagline={description}
                description={[description]}
                bestFor={agency.specializations || []}
                keyServices={keyServices}
                website={website}
                primaryColor={(agency as any).primary_color || '#8B5CF6'}
                logoUrl={(agency as any).logo_url}
                backdropUrl={(agency as any).backdrop_url}
                isTopRanked={isTopRanked}
                internalLink={isGTMQuest ? '/planner' : undefined}
                serviceAreas={agency.service_areas || []}
              />
            )
          })}
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-16">Ireland B2B Marketing FAQs</h2>
          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                What is the typical cost of a B2B marketing agency in Ireland?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Irish B2B marketing agencies typically charge €{Math.round(avgMinBudget / 1000)}K+ per month for retainer engagements. Project-based work ranges from €20K-€80K depending on scope.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                Do Irish agencies support both European and US market expansion?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Yes, Irish B2B marketing agencies bring unique advantages in supporting both European and transatlantic expansion. Ireland's position as a bridge between EU and US markets, combined with English-language operations and timezone flexibility, makes Irish agencies valuable partners for companies scaling across both regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Build Your B2B Marketing Strategy
          </h2>
          <p className="text-2xl text-white/95 mb-12">
            Create a comprehensive go-to-market strategy for Irish and European markets.
          </p>
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
