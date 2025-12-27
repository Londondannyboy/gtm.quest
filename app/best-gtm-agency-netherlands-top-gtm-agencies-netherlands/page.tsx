import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best GTM Agency Netherlands 2025 | GTM Quest',
  description: 'Discover the best go-to-market agencies Netherlands has to offer. Compare top Dutch GTM consultancies with verified credentials, proven strategies, and specialized expertise.',
  keywords: 'best GTM agency Netherlands, top go-to-market agencies Amsterdam, GTM consultants Netherlands, product launch agency Amsterdam, B2B GTM strategy Netherlands',
  alternates: {
    canonical: 'https://gtm.quest/best-gtm-agency-netherlands-top-gtm-agencies-netherlands'
  }
}

export const revalidate = 3600

export default async function GTMAgencyNetherlandsPage() {
  const agencies = await getAgenciesByCategory('GTM Agency', 'Netherlands')

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
            "name": "Best GTM Agencies Netherlands",
            "description": "Top go-to-market agencies serving the Netherlands market",
            "url": "https://gtm.quest/best-gtm-agency-netherlands-top-gtm-agencies-netherlands",
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
            <span className="text-white">GTM Netherlands</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1559564484-e48bf1087ca0?w=1920&q=80"
            alt="Best GTM agencies Netherlands - Amsterdam modern architecture and canals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Netherlands</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            Best GTM Agency Netherlands 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} go-to-market agencies the Netherlands has to offer—verified experts in product launches, GTM strategy, and European expansion.
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
            GTM Agencies Netherlands: European Launch Excellence
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              <a href="https://en.wikipedia.org/wiki/Economy_of_the_Netherlands" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">The Netherlands commands Europe's fifth-largest economy</a> and serves as the continent's premier technology gateway, with <a href="https://techleap.nl/reports/state-of-dutch-tech-report-2025" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Dutch startups raising €3.1 billion in 2026</a> (up 47% from 2023) while broader European startup investment declined 5%, positioning Amsterdam as Europe's fourth-largest startup hub behind London, Berlin, and Paris. The <a href="https://www.iamsterdam.com/en/business/state-of-dutch-tech-in-2025" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Amsterdam-Delta area has produced $86 billion in startup fundraising since 2000</a>, hosting European headquarters for IBM, Microsoft, Google, Oracle, Cisco, Uber, and Netflix, creating unparalleled expertise in pan-European GTM execution that spans English-language business culture, world-leading digital infrastructure, and strategic positioning between UK, German, and Nordics markets.
            </p>
            <p>
              Dutch business culture uniquely balances American-style pragmatism with European relationship-building, creating ideal conditions for B2B technology launches that require both rapid execution and deep stakeholder engagement. The Netherlands produced two new unicorns in 2026 (Mews and DataSnipper) with exceptional capital efficiency, demonstrating GTM sophistication that maximizes growth with minimal venture funding. Dutch buyers expect direct communication, data-driven business cases, and proof-of-concept validation before enterprise commitments, fundamentally different from UK markets where executive relationships often accelerate deals or German markets where engineering validation dominates. Amsterdam's Schiphol connectivity enables efficient field marketing across European capitals, while Dutch GTM agencies' multilingual capabilities span English, German, French, and local languages critical for broader European expansion from a Netherlands anchoring hub.
            </p>
            <p>
              Top GTM agencies serving Netherlands provide critical pan-European capabilities: deep expertise launching B2B technology products from Amsterdam across diverse European markets with different languages, business cultures, and regulatory frameworks; proven frameworks for staged European expansion starting with Benelux validation before scaling to DACH, Nordics, and Southern European regions; sophisticated understanding of European data residency, GDPR compliance, and cross-border contracting requirements that heavily influence enterprise software adoption; and bilingual positioning strategies that balance global technology narratives with local market nuances across English, Dutch, German, and French-speaking buyers. They understand how to leverage Netherlands' strategic position as Europe's digital gateway, build partnerships with European system integrators and technology vendors, and execute launch strategies that accommodate the Netherlands' relatively small 17 million population market while positioning for the critical European expansion imperative that defines success for Dutch B2B technology companies.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            The Best GTM Agencies the Netherlands Has to Offer
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {totalAgencies} verified go-to-market agencies serving Dutch and European businesses.
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
          <h2 className="text-5xl font-black text-white mb-16">Netherlands GTM FAQs</h2>
          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                What is the typical cost of a GTM agency in the Netherlands?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Netherlands GTM agencies typically charge €{Math.round(avgMinBudget / 1000)}K+ per month for retainer engagements. Project-based GTM strategies range from €25K-€100K. Full European launch programs can range from €75K-€250K.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                Do Netherlands agencies support pan-European launches?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Yes, Netherlands-based GTM agencies specialize in pan-European product launches. The Netherlands' central location, multilingual talent pool, and business infrastructure make Dutch agencies ideal partners for companies launching across European markets simultaneously.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Build Your GTM Strategy
          </h2>
          <p className="text-2xl text-white/95 mb-12">
            Create a comprehensive go-to-market strategy for European markets in minutes.
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
