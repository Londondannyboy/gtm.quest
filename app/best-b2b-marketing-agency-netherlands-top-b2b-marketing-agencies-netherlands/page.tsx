import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Netherlands 2025 | Top B2B Marketing Agencies Netherlands',
  description: 'Discover the best B2B marketing agencies Netherlands has to offer. Compare top Dutch B2B marketing consultancies with verified credentials, proven results, and specialized expertise.',
  keywords: 'best B2B marketing agency Netherlands, top B2B marketing agencies Amsterdam, B2B digital marketing Netherlands, demand generation Amsterdam, B2B lead generation Netherlands',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-netherlands-top-b2b-marketing-agencies-netherlands'
  }
}

export const revalidate = 3600

export default async function B2BMarketingAgencyNetherlandsPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Netherlands')

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
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Best B2B Marketing Agencies Netherlands",
            "description": "Top B2B marketing agencies serving the Netherlands market",
            "url": "https://gtm.quest/best-b2b-marketing-agency-netherlands-top-b2b-marketing-agencies-netherlands",
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

      {/* Breadcrumb */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' '}/{' '}
            <Link href="/best-gtm-agencies" className="hover:text-white transition-colors">Agencies</Link>
            {' '}/{' '}
            <span className="text-white">B2B Marketing Netherlands</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Image */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1920&q=80"
            alt="Best B2B marketing agencies Netherlands - Amsterdam canals and historic architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Netherlands</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            Best B2B Marketing<br />Agencies Netherlands
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} B2B marketing agencies the Netherlands has to offer—verified experts in demand generation, ABM, and revenue growth.
          </p>

          {/* Quick Stats */}
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

      {/* Educational Content */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            B2B Marketing Agencies Netherlands Guide: Why Choose Dutch Experts?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              The Netherlands has emerged as a major European technology hub, with Amsterdam serving as a fintech and SaaS center connecting Western Europe to global markets. The Dutch business environment combines English language proficiency, strong digital infrastructure, and strategic positioning for pan-European expansion.<br/><br/>
              Netherlands-based B2B marketing agencies bring deep understanding of European market dynamics, GDPR compliance expertise, multilingual capabilities, and sophisticated knowledge of selling B2B solutions across diverse European markets.
            </p>
            <p>
              Whether you're a Dutch B2B company scaling across Europe, an international firm entering European markets via the Netherlands, or a European organization targeting the sophisticated Dutch business market, partnering with a Netherlands-based B2B marketing agency provides timezone alignment, cultural expertise, and deep knowledge of European business regulations.<br/><br/>
              Dutch agencies excel at navigating multilingual European markets, understanding regional differences across EU countries, and building strategies that work across both Northern European and broader continental markets.
            </p>
            <p>
              The agencies listed below have been verified for their Netherlands market presence, B2B expertise, client results, and transparent approach to partnerships. Many bring valuable pan-European experience for companies expanding across the continent.<br/><br/>
              The Netherlands' business-friendly environment, English proficiency, and strategic location make it an ideal base for European B2B marketing operations.
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 mt-20 leading-tight">
            Top B2B Marketing Agencies Netherlands: What to Look For
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>B2B Experience and European Market Knowledge</h3>
              <p>
                B2B marketing in the Netherlands requires understanding both domestic dynamics and pan-European considerations for companies scaling across the continent.<br/><br/>
                The best Dutch B2B agencies demonstrate experience with European enterprise buyers, understand how to position for both Dutch and broader European markets, and can navigate the complexities of multilingual, multi-country B2B sales.<br/><br/>
                Look for agencies with case studies showing success across European markets and proven experience supporting cross-border expansion within the EU.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Demand Generation Capabilities</h3>
              <p>
                Effective Netherlands B2B marketing agencies build sophisticated demand generation systems that work across European markets.<br/><br/>
                This means creating targeted approaches for the Netherlands' concentrated business centers (Amsterdam, Rotterdam, Utrecht), implementing multilingual marketing automation, and developing lead scoring models appropriate for European B2B buying patterns.<br/><br/>
                Ask agencies about their approach to balancing Dutch market focus with broader European expansion strategies and GDPR-compliant demand generation.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Technology Stack and Integration</h3>
              <p>
                Modern B2B marketing requires sophisticated technology, and Dutch agencies match their UK and US counterparts in martech expertise.<br/><br/>
                Top Netherlands agencies demonstrate expertise in HubSpot, Salesforce, Marketo, or Pardot for marketing automation.<br/><br/>
                They understand how to implement account-based marketing platforms, integrate marketing technology with your CRM, and build attribution models that work across European markets. Dutch agencies bring particular strength in multilingual implementation and GDPR compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Cards */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            The Best B2B Marketing Agencies the Netherlands Has to Offer
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {totalAgencies} verified B2B marketing agencies serving Dutch and European businesses with proven expertise and results.
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

      {/* FAQ */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-16">Netherlands B2B Marketing FAQs</h2>

          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                What is the typical cost of a B2B marketing agency in the Netherlands?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Netherlands B2B marketing agencies typically charge €{Math.round(avgMinBudget / 1000)}K+ per month for retainer engagements.<br/><br/>
                Project-based work ranges from €20K-€75K depending on scope. Dutch agency pricing generally aligns with other Western European markets.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                How long does it take to see results from B2B marketing in the Netherlands?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Expect 3-6 months to see meaningful pipeline impact from demand generation programs. ABM targeting European enterprise accounts typically takes 6-12 months to influence deals, with Dutch companies often moving faster than Southern European markets but more deliberately than UK buyers.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                Do Netherlands agencies support pan-European expansion?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Yes, Netherlands-based B2B marketing agencies frequently support companies expanding across Europe. The Netherlands' central location, excellent infrastructure, and English proficiency make Dutch agencies ideal partners for pan-European B2B growth strategies. Many agencies offer multilingual capabilities and understand diverse European business cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Build Your B2B Marketing Strategy
          </h2>
          <p className="text-2xl text-white/95 mb-12">
            Create a comprehensive go-to-market strategy tailored to the Netherlands and European markets in minutes.
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
