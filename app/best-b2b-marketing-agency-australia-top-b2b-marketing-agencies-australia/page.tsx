import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Australia 2025 | GTM Quest',
  description: 'Find the best B2B marketing agency Australia has for your business. Compare top B2B marketing agencies in Australia for Sydney, Melbourne, and APAC markets.',
  keywords: 'best B2B marketing agency Australia, top B2B marketing agencies Australia, B2B digital marketing Sydney, demand generation Melbourne, B2B lead generation Australia',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-australia-top-b2b-marketing-agencies-australia'
  }
}

export const revalidate = 3600

export default async function B2BMarketingAgencyAustraliaPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Australia')

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

  // Brand assets are now stored in the database - no API calls during page load!

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Best B2B Marketing Agencies Australia",
            "description": "Top B2B marketing agencies serving the Australian market",
            "url": "https://gtm.quest/best-b2b-marketing-agency-australia-top-b2b-marketing-agencies-australia",
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
            <span className="text-white">B2B Marketing Australia</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Image */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&q=80"
            alt="Best B2B marketing agency Australia - Sydney Opera House and Harbour Bridge skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Australia</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            Best B2B Marketing Agency Australia 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} B2B marketing agencies Australia has to offer. Find the right B2B marketing agency Australia businesses trust for growth.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">Top Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">A${Math.round(avgMinBudget / 1000)}K+</div>
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
            Why Choose a B2B Marketing Agency Australia for Your Business?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Australia operates as <a href="https://en.wikipedia.org/wiki/Economy_of_Australia" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">the world's 13th-largest economy</a> and serves as the Asia-Pacific region's financial services hub, with Sydney ranking as the third-largest financial center in Asia after Hong Kong and Singapore. According to <a href="https://www.abs.gov.au/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Australian Bureau of Statistics data</a>, professional services and technology sectors generate over $180 billion annually, with B2B companies benefiting from Australia's strategic timezone positioning—enabling real-time collaboration with Asian markets during business hours while maintaining connectivity to US West Coast markets through evening operations, a 16-hour working day advantage no other developed economy can match.
            </p>
            <p>
              Australian B2B marketing agencies navigate unique market characteristics shaped by geographic isolation, sophisticated enterprise buyers demanding international-quality solutions, and dual market orientation serving both domestic Australian needs and APAC regional expansion. Australian business culture combines British-influenced corporate governance with American-style commercial pragmatism, creating enterprise buyers who expect detailed business cases and ROI validation but move faster than European counterparts once convinced—evaluation cycles typically span 3-6 months versus 12-18 months common in Germany or Japan, making Australia an ideal testing ground for APAC market entry strategies.
            </p>
            <p>
              Top Australian agencies excel in financial services technology (big four banks ANZ, Commonwealth, NAB, Westpac drive fintech innovation), mining and resources sector digitalization (Australia's $300+ billion mining industry pursues automation and AI), professional services firms serving Asia-Pacific markets, and B2B SaaS companies using Australia as an APAC beachhead before expanding into Singapore, Japan, and India. They understand how to position for both Australian domestic opportunities and broader APAC expansion, navigate unique challenges including <a href="https://www.australia.gov.au/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Australian regulatory requirements</a> like mandatory data sovereignty for government contractors, and leverage Australia's English-language advantage when marketing to Southeast Asian enterprises seeking Western-style business partnerships without American vendor pricing premiums.
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 mt-20 leading-tight">
            Top B2B Marketing Agencies Australia: What to Look For
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>B2B Experience and APAC Market Knowledge</h3>
              <p>
                B2B marketing in Australia requires understanding both domestic market dynamics and broader APAC considerations for companies with regional expansion plans.<br/><br/>
                The best Australian B2B agencies demonstrate experience with Australian enterprise buyers, understand how to position for both domestic and international growth, and can navigate cultural differences across APAC markets.<br/><br/>
                Look for agencies with case studies in your industry and proven experience helping Australian companies scale regionally or internationally.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Demand Generation Capabilities</h3>
              <p>
                Effective Australian B2B marketing agencies build sophisticated demand generation systems adapted to the smaller Australian market size.<br/><br/>
                This means creating targeted account-based approaches, implementing marketing automation that aligns with Australian business hours and buying patterns, and developing lead scoring models appropriate for Australia's B2B landscape.<br/><br/>
                Ask agencies about their approach to balancing broad demand generation with the account-based precision often required in Australia's concentrated B2B markets.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Technology Stack and Integration</h3>
              <p>
                Modern B2B marketing requires sophisticated technology, and Australian agencies increasingly match their US and UK counterparts in martech expertise.<br/><br/>
                Top Australian agencies demonstrate expertise in HubSpot, Salesforce, Marketo, or other leading marketing automation platforms.<br/><br/>
                They understand how to implement account-based marketing platforms, integrate marketing technology with your CRM, and build attribution models that demonstrate ROI in the Australian context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Cards */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Top B2B Marketing Agency Australia Directory
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {totalAgencies} verified B2B marketing agencies serving Australian businesses with proven expertise and results.
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
          <h2 className="text-5xl font-black text-white mb-16">Australia B2B Marketing FAQs</h2>

          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                What is the typical cost of a B2B marketing agency in Australia?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Australian B2B marketing agencies typically charge A${Math.round(avgMinBudget / 1000)}K+ per month for retainer engagements.<br/><br/>
                Project-based work ranges from A$20K-A$80K depending on scope. Costs in Australia generally sit between UK and US pricing, reflecting the local market size and cost structure.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                How long does it take to see results from B2B marketing in Australia?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Expect 3-6 months to see meaningful pipeline impact from demand generation programs in the Australian market. Given Australia's smaller addressable markets, account-based approaches may show results faster than broad demand generation, though enterprise deals still typically take 6-12 months to close.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                Do Australian B2B agencies support APAC expansion?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Many Australian B2B marketing agencies have experience supporting regional expansion into Southeast Asia, New Zealand, and broader APAC markets. Australia's timezone position and cultural proximity to Asian markets makes Australian agencies valuable partners for APAC growth strategies.
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
            Create a comprehensive go-to-market strategy tailored to the Australian market in minutes.
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
