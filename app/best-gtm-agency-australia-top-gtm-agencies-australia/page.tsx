import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best GTM Agency Australia 2025 | GTM Quest',
  description: 'Discover the best go-to-market agencies Australia has to offer. Compare top Australian GTM consultancies with verified credentials, proven strategies, and specialized expertise.',
  keywords: 'best GTM agency Australia, top go-to-market agencies Australia, GTM consultants Sydney, product launch agency Melbourne, B2B GTM strategy Australia',
  alternates: {
    canonical: 'https://gtm.quest/best-gtm-agency-australia-top-gtm-agencies-australia'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes Australia unique for GTM strategy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Australia offers unique GTM advantages: the world's highest capital efficiency ratio (1.22 unicorns per billion VC invested), English-language market with Western business culture, strategic APAC gateway position, and concentrated enterprise landscape in Sydney/Melbourne enabling efficient account-based strategies. Australia's 26M population forces sophisticated targeting that scales globally."
      }
    },
    {
      "@type": "Question",
      "name": "How much do GTM agencies in Australia typically charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Australian GTM agencies typically charge A$10,000-A$30,000 per month for comprehensive programs, with project-based engagements ranging A$25,000-A$100,000. Full launch programs can range A$50,000-A$200,000. Australia offers cost advantages compared to US agencies—typically 20-30% lower while providing exceptional APAC expansion capabilities."
      }
    },
    {
      "@type": "Question",
      "name": "Can Australian GTM agencies help with APAC expansion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, APAC expansion is Australia's core strength. Sydney and Melbourne agencies excel at using Australia as a beachhead for Southeast Asia, India, and New Zealand expansion—leveraging English-language operations, Western business practices, and timezone overlap with Asian markets without the cultural complexity of launching directly into Asia."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Australian GTM agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Australian GTM agencies specialize in fintech (Australia's open banking and neobank ecosystem), healthtech and aged care technology (strong government investment), mining and resources technology (Australia's mining sector drives innovation), and enterprise SaaS serving the concentrated banking, retail, and telco sectors that dominate Australian enterprise buying."
      }
    }
  ]
}

export default async function GTMAgencyAustraliaPage() {
  const agencies = await getAgenciesByCategory('GTM Agency', 'Australia')

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"Best GTM Agencies Australia","url":"https://gtm.quest/best-gtm-agency-australia-top-gtm-agencies-australia"})}} />

      {/* Breadcrumb */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' '}/{' '}
            <Link href="/best-gtm-agencies" className="hover:text-white transition-colors">Agencies</Link>
            {' '}/{' '}
            <span className="text-white">GTM Australia</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Image */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=1920&q=80"
            alt="Best GTM agency Australia - Melbourne city skyline and Yarra River"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Australia</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            Best GTM Agency Australia 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} go-to-market agencies Australia has to offer—verified experts in product launches, GTM strategy, and revenue growth.
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
            Why Choose a GTM Agency Australia for Your Business?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              <a href="https://en.wikipedia.org/wiki/Economy_of_Australia" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Australia commands a $1.78 trillion GDP economy</a> and leads globally in capital-efficient technology innovation, with the country now creating 1.22 unicorns per billion dollars of venture capital—the world's highest ratio—demonstrating exceptional GTM execution capabilities. The <a href="https://www.cutthrough.com/insights/state-of-australian-startup-funding-2026" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Australian venture market invested $4.0 billion across 414 deals in 2026</a> (up 11% from 2023), with NSW startups capturing 65% of total funding as Sydney's Tech Central emerges as the Southern Hemisphere's premier innovation hub backed by Google's $1 billion Digital Future Initiative and government-led infrastructure development.
            </p>
            <p>
              Australian GTM agencies excel in scenarios demanding capital efficiency and precise market execution—the country's 26 million population creates natural constraints forcing sophisticated audience targeting, message testing, and conversion optimization absent in larger markets where companies can succeed through scale rather than efficiency. Australian buyers demonstrate relationship-driven purchasing behaviors similar to UK enterprise markets, expecting face-to-face engagement, local market presence, and Australian customer references before committing to enterprise software purchases. Geographic concentration in Sydney, Melbourne, Brisbane, and Perth enables efficient field marketing and account-based strategies, while cultural similarities to US and UK markets make Australia an ideal international expansion beachhead for companies testing APAC entry without the language barriers, regulatory complexity, or cultural distance of Asian markets.
            </p>
            <p>
              Top GTM agencies serving Australia provide strategic capabilities for domestic launches and regional expansion: deep expertise navigating Australia's concentrated enterprise landscape where major banks, retailers, and resource companies dominate buyer committees; proven frameworks for capital-efficient GTM execution using account-based strategies, precise digital targeting, and conversion-focused content marketing rather than broad awareness campaigns; sophisticated understanding of Australia's position as an APAC gateway where successful Australian market entry provides credibility for broader regional expansion into Southeast Asia, India, and New Zealand; and bilingual capabilities spanning Australian business culture with its direct communication style through to the relationship-driven, consensus-based approaches required for APAC success. They understand how to leverage Australia's strengths in fintech, healthtech, and SaaS while navigating market challenges including geographic isolation, smaller addressable markets requiring precise targeting, and the imperative for international expansion that defines growth trajectories for most Australian B2B technology companies.
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 mt-20 leading-tight">
            Top GTM Agencies Australia: What to Look For
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Launch Experience and Market Entry Expertise</h3>
              <p>
                The best Australian GTM agencies understand how to launch products efficiently in smaller markets and position for regional expansion from day one.<br/><br/>
                They bring experience with Australia's concentrated enterprise markets, understand the relationship-driven nature of Australian B2B sales, and know how to position products for both local success and international scalability.<br/><br/>
                Look for agencies with case studies showing successful launches in the Australian market and experience supporting companies expanding into APAC from an Australian base.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Positioning and Messaging Capabilities</h3>
              <p>
                Effective GTM agencies in Australia excel at positioning products for the local market while maintaining global relevance.<br/><br/>
                Top Australian agencies understand how to adapt messaging for Australian business culture, develop positioning that works across both Australian and APAC markets, and create narratives that resonate locally while supporting international expansion.<br/><br/>
                Ask agencies about their approach to balancing local market nuances with the need for consistent global positioning as companies scale.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Revenue Architecture and Regional Scaling</h3>
              <p>
                Modern GTM in Australia requires thinking beyond the domestic market from day one.<br/><br/>
                The best Australian agencies help design GTM motions that work efficiently in Australia's smaller market while maintaining flexibility for regional expansion.<br/><br/>
                They understand how to build launch strategies that account for Australia's geographic spread, adapt international best practices to local conditions, and create scalable playbooks for APAC growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Services for Australian Markets</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Specialized go-to-market capabilities for Australia's capital-efficient technology ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌏</div>
              <h3 className="text-2xl font-bold text-white mb-4">APAC Expansion</h3>
              <p className="text-white/70 text-lg">Regional market entry using Australia as beachhead for Southeast Asia, India, and New Zealand expansion.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Account-Based GTM</h3>
              <p className="text-white/70 text-lg">Precision targeting for Australia's concentrated enterprise landscape—major banks, retailers, and telcos.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Capital-Efficient Launch</h3>
              <p className="text-white/70 text-lg">GTM execution maximizing impact with limited resources—Australia's specialty and global best practice.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Sales</h3>
              <p className="text-white/70 text-lg">Relationship-driven B2B strategies for Australian enterprise buyers expecting local presence and references.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries for GTM in Australia</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Australia's diverse economy creates exceptional GTM opportunities across high-growth sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech & Banking</h3>
              <p className="text-white/70 text-lg">Open banking, neobanks, and payments—Australia's big four banks drive fintech innovation and enterprise adoption.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-white mb-4">HealthTech & Aged Care</h3>
              <p className="text-white/70 text-lg">Digital health and aged care technology—strong government investment and aging population driving innovation.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">⛏️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Mining & Resources Tech</h3>
              <p className="text-white/70 text-lg">Mining automation, sustainability tech, and resources innovation—Australia's mining sector leads global adoption.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise SaaS</h3>
              <p className="text-white/70 text-lg">B2B software serving concentrated enterprise—banking, retail, and telco sectors dominate Australian buying.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Top GTM Agency Australia Directory
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {totalAgencies} verified go-to-market agencies serving Australian businesses with proven launch expertise and results.
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
          <h2 className="text-5xl font-black text-white mb-16">Australia GTM FAQs</h2>

          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                What is the typical cost of a GTM agency in Australia?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Australian GTM agencies typically charge A${Math.round(avgMinBudget / 1000)}K+ per month for retainer engagements.<br/><br/>
                Project-based GTM strategies range from A$25K-A$100K depending on scope. Full launch programs with execution can range from A$50K-A$200K for B2B technology products.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                How long does a typical GTM engagement take in Australia?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                GTM strategy development typically takes 4-8 weeks in the Australian market. Full launch execution spans 3-6 months from positioning through initial traction. Given Australia's smaller market size, companies often see faster time-to-market compared to US or European launches.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                Do Australian GTM agencies support APAC expansion?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Many Australian GTM agencies have experience supporting regional expansion into New Zealand, Southeast Asia, and broader APAC markets. Australia's timezone and cultural position make Australian agencies particularly valuable for companies using Australia as a launchpad for Asia-Pacific growth.
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
            <Link href="/best-gtm-agency-singapore-top-gtm-agencies-singapore" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇸🇬</span>
              <span className="text-white font-semibold">Singapore</span>
            </Link>
            <Link href="/best-gtm-agency-uk-top-gtm-agencies-uk" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇬🇧</span>
              <span className="text-white font-semibold">UK</span>
            </Link>
            <Link href="/best-gtm-agency-us-top-gtm-agencies-us" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇺🇸</span>
              <span className="text-white font-semibold">United States</span>
            </Link>
            <Link href="/best-gtm-agency-canada-top-gtm-agencies-canada" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇨🇦</span>
              <span className="text-white font-semibold">Canada</span>
            </Link>
            <Link href="/best-gtm-agency-ireland-top-gtm-agencies-ireland" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇮🇪</span>
              <span className="text-white font-semibold">Ireland</span>
            </Link>
            <Link href="/best-gtm-agency-uae-top-gtm-agencies-uae" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇦🇪</span>
              <span className="text-white font-semibold">UAE</span>
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
            <Link href="/best-b2b-marketing-agency-australia-top-b2b-marketing-agencies-australia" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">B2B Marketing Australia</h3>
              <p className="text-white/60">Explore B2B marketing agencies serving Australian markets.</p>
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
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive go-to-market strategy tailored to the Australian market.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
