import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best GTM Agency Canada 2025 | GTM Quest',
  description: 'Discover the best go-to-market agencies Canada has to offer. Compare top Canadian GTM consultancies with verified credentials, proven strategies, and specialized expertise.',
  keywords: 'best GTM agency Canada, top go-to-market agencies Canada, GTM consultants Toronto, product launch agency Vancouver, B2B GTM strategy Canada',
  alternates: {
    canonical: 'https://gtm.quest/best-gtm-agency-canada-top-gtm-agencies-canada'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes Canada unique for GTM strategy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Canada offers unique GTM advantages: proximity to the US market (10x larger and adjacent), bilingual capabilities spanning English and French-speaking buyers, world-leading AI ecosystem (especially Montreal), and significant government innovation programs (SR&ED tax credits, Strategic Innovation Fund). Canada is the ideal proving ground before US expansion."
      }
    },
    {
      "@type": "Question",
      "name": "How much do GTM agencies in Canada typically charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Canadian GTM agencies typically charge CA$10,000-CA$30,000 per month for comprehensive programs, with project-based engagements ranging CA$25,000-CA$100,000. Canada offers significant cost advantages—typically 25-35% lower than comparable US agencies while providing excellent cross-border expansion capabilities."
      }
    },
    {
      "@type": "Question",
      "name": "Can Canadian GTM agencies help with US market entry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, US expansion is Canada's core strength. Most Canadian GTM agencies have extensive experience supporting companies expanding from Canada into US markets. Canada's proximity, timezone alignment, cultural similarities, and shared business practices make Canadian agencies ideal partners for North American expansion strategies."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Canadian GTM agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Canadian GTM agencies specialize in AI and machine learning (Montreal's world-leading cluster), fintech and enterprise SaaS (Toronto hub), gaming and digital media (Vancouver), and cleantech/sustainability (national strength). They also excel in enterprise software serving North American markets from Canadian headquarters."
      }
    }
  ]
}

export default async function GTMAgencyCanadaPage() {
  const agencies = await getAgenciesByCategory('GTM Agency', 'Canada')

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"Best GTM Agencies Canada","url":"https://gtm.quest/best-gtm-agency-canada-top-gtm-agencies-canada"})}} />

      {/* Breadcrumb */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' '}/{' '}
            <Link href="/best-gtm-agencies" className="hover:text-white transition-colors">Agencies</Link>
            {' '}/{' '}
            <span className="text-white">GTM Canada</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Image */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=1920&q=80"
            alt="Best GTM agencies Canada - Vancouver city skyline with mountains and harbor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Canada</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            Best GTM Agency Canada 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} go-to-market agencies Canada has to offer—verified experts in product launches, GTM strategy, and revenue growth.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">Top Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">CA${Math.round(avgMinBudget / 1000)}K+</div>
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
            GTM Agencies Canada Guide: Why Choose Canadian GTM Experts?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              <a href="https://en.wikipedia.org/wiki/Economy_of_Canada" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Canada ranks as the world's ninth-largest economy</a> with US$2.39 trillion GDP and serves as North America's innovation proving ground where <a href="https://www.bdc.ca/en/about/analysis-research/canada-venture-capital-landscape-2026" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">$6.9 billion in venture capital flowed to 660 deals in 2023</a>, creating battle-tested GTM expertise across Toronto's fintech and enterprise SaaS hubs, Vancouver's gaming and consumer technology clusters, and Montreal's world-leading AI ecosystem. Canadian GTM agencies offer strategic advantages for companies targeting North American expansion: proximity to US markets without US market intensity, sophisticated bilingual capabilities spanning English and French-speaking buyers, and proven frameworks for capital-efficient launches that test positioning before scaling across the 10x-larger US market adjacent to Canada's border.
            </p>
            <p>
              Toronto, hosting 15% of Canadian startups, serves as the epicenter for B2B technology launches, with government initiatives like the Innovation Superclusters and Strategic Innovation Fund providing non-dilutive R&D support that accelerates product development and GTM execution. Canadian buyers demonstrate distinctive purchasing behaviors—more conservative and relationship-driven than US enterprise buyers, requiring longer proof-of-concept cycles and local references, but also more willing to support early-stage vendors who demonstrate Canadian presence and commitment. The Canadian market's bilingual requirements create unique GTM complexity: Quebec enterprises expect French-language sales materials, localized product interfaces, and francophone account teams, while Western provinces mirror US buying patterns with English-only needs.
            </p>
            <p>
              Top GTM agencies serving Canada bring critical capabilities for both domestic success and cross-border scaling: deep expertise navigating Canadian procurement processes where government and enterprise buyers prioritize domestic vendors through innovation programs and local content requirements; proven frameworks for staged North American expansion starting with Canadian market validation before US entry; bilingual positioning and messaging capabilities spanning Quebec's French-speaking enterprise market through to Western Canada's resource and technology sectors; and sophisticated understanding of Canadian tax incentives (SR&ED credits), government innovation programs, and export development funding that can significantly improve GTM unit economics. They understand how to leverage Canada's position as a trusted gateway for international companies entering North America, build partnerships with Canadian system integrators and technology vendors critical for enterprise adoption, and execute launch strategies that balance Canadian market nuances with the imperative for rapid US expansion that defines success trajectories for most Canadian B2B technology companies.
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 mt-20 leading-tight">
            Top GTM Agencies Canada: What to Look For
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Launch Experience and Market Entry Expertise</h3>
              <p>
                The best Canadian GTM agencies understand how to launch products efficiently in the Canadian market while positioning for rapid US expansion.<br/><br/>
                They bring experience with Canada's bilingual requirements for Quebec, understand regional differences across provinces, and know how to position products for both Canadian success and cross-border scalability.<br/><br/>
                Look for agencies with case studies showing successful launches in the Canadian market and proven experience supporting companies expanding from Canada into US and international markets.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Positioning and Messaging Capabilities</h3>
              <p>
                Effective GTM agencies in Canada excel at positioning products for North American markets while respecting Canadian market nuances.<br/><br/>
                Top Canadian agencies understand how to develop messaging that works across English and French-speaking markets, create positioning that resonates with both Canadian and US buyers, and build narratives that support efficient cross-border expansion.<br/><br/>
                Ask agencies about their approach to balancing Canadian market specifics with the need for consistent North American positioning as companies scale.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Revenue Architecture and Cross-Border Scaling</h3>
              <p>
                Modern GTM in Canada requires thinking about US expansion from day one for most B2B technology companies.<br/><br/>
                The best Canadian agencies help design GTM motions that work efficiently in Canada while maintaining seamless scalability to the much larger US market.<br/><br/>
                They understand how to build launch strategies leveraging Canada's innovation support programs, adapt international best practices to the Canadian context, and create scalable playbooks for North American growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Services for Canadian Markets</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Specialized go-to-market capabilities for Canada's North American technology ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🇺🇸</div>
              <h3 className="text-2xl font-bold text-white mb-4">US Market Entry</h3>
              <p className="text-white/70 text-lg">Cross-border expansion using Canada as proving ground for the 10x-larger US market.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Bilingual GTM</h3>
              <p className="text-white/70 text-lg">English and French positioning for Quebec enterprise markets and federal government buyers.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation Programs</h3>
              <p className="text-white/70 text-lg">GTM strategies leveraging SR&ED credits, Strategic Innovation Fund, and government incentives.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Sales</h3>
              <p className="text-white/70 text-lg">B2B strategies for Canada's concentrated enterprise landscape and government procurement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries for GTM in Canada</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Canada's diverse economy creates exceptional GTM opportunities across high-growth sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI & Machine Learning</h3>
              <p className="text-white/70 text-lg">World-leading AI research—Montreal's ecosystem includes Mila, Element AI alumni, and hundreds of AI startups.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech & Banking</h3>
              <p className="text-white/70 text-lg">Open banking innovation and enterprise SaaS—Toronto's financial district drives fintech adoption.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-white mb-4">Gaming & Digital Media</h3>
              <p className="text-white/70 text-lg">Gaming studios and digital media—Vancouver's cluster includes EA, Activision, and indie studios.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-white mb-4">CleanTech & Sustainability</h3>
              <p className="text-white/70 text-lg">Renewable energy and sustainability tech—national strength with government support and investment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            The Best GTM Agencies Canada Has to Offer
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {totalAgencies} verified go-to-market agencies serving Canadian businesses with proven launch expertise and results.
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
          <h2 className="text-5xl font-black text-white mb-16">Canada GTM FAQs</h2>

          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                What is the typical cost of a GTM agency in Canada?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Canadian GTM agencies typically charge CA${Math.round(avgMinBudget / 1000)}K+ per month for retainer engagements.<br/><br/>
                Project-based GTM strategies range from CA$25K-CA$100K depending on scope. Full launch programs with execution can range from CA$50K-CA$200K for B2B technology products.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                How long does a typical GTM engagement take in Canada?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                GTM strategy development typically takes 4-8 weeks in the Canadian market. Full launch execution spans 3-6 months from positioning through initial traction. Many Canadian companies use their domestic launch as a springboard for US expansion within 6-12 months.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                Do Canadian GTM agencies support US market expansion?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Yes, most Canadian GTM agencies have extensive experience supporting companies expanding from Canada into the US market. Canada's proximity, timezone alignment, and cultural similarities with the US make Canadian agencies valuable partners for North American expansion strategies. Many agencies maintain networks and partnerships in major US markets to support seamless cross-border launches.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-12 leading-tight">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">{faq.name}</h3>
                <p className="text-white/70 text-lg leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">Explore GTM Agencies in Related Markets</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/best-gtm-agency-us-top-gtm-agencies-us" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇺🇸</span>
              <span className="text-white font-semibold">United States</span>
            </Link>
            <Link href="/best-gtm-agency-uk-top-gtm-agencies-uk" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇬🇧</span>
              <span className="text-white font-semibold">UK</span>
            </Link>
            <Link href="/best-gtm-agency-australia-top-gtm-agencies-australia" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇦🇺</span>
              <span className="text-white font-semibold">Australia</span>
            </Link>
            <Link href="/best-gtm-agency-ireland-top-gtm-agencies-ireland" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇮🇪</span>
              <span className="text-white font-semibold">Ireland</span>
            </Link>
            <Link href="/best-gtm-agency-germany-top-gtm-agencies-germany" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇩🇪</span>
              <span className="text-white font-semibold">Germany</span>
            </Link>
            <Link href="/best-gtm-agency-france-top-gtm-agencies-france" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇫🇷</span>
              <span className="text-white font-semibold">France</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">GTM Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/planner" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">GTM Planner</h3>
              <p className="text-white/60">Build your go-to-market strategy with our AI-powered planning tool.</p>
            </Link>
            <Link href="/best-gtm-agencies" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">All GTM Agencies</h3>
              <p className="text-white/60">Browse our complete directory of verified GTM agencies worldwide.</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-canada-top-b2b-marketing-agencies-canada" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">B2B Marketing Canada</h3>
              <p className="text-white/60">Explore B2B marketing agencies serving Canadian markets.</p>
            </Link>
            <Link href="/gtm-consulting" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">GTM Consulting</h3>
              <p className="text-white/60">Learn about go-to-market consulting services and methodologies.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your GTM Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive go-to-market strategy tailored to the Canadian market.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
