import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best GTM Agency US 2025 | GTM Quest',
  description: 'Discover the best go-to-market agencies the United States has to offer. Compare top US GTM consultancies with verified credentials, proven strategies, and specialized expertise.',
  keywords: 'best GTM agency US, top go-to-market agencies United States, GTM consultants USA, product launch agency US, B2B GTM strategy United States',
  alternates: {
    canonical: 'https://gtm.quest/best-gtm-agency-us-top-gtm-agencies-us'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes the US unique for GTM strategy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The US offers unparalleled GTM advantages: the world's largest economy ($28+ trillion GDP), the most mature enterprise software market ($221.5B SaaS revenue in 2025), and the global center for GTM innovation. Silicon Valley, New York, Boston, and Austin have launched thousands of B2B technology companies, creating battle-tested playbooks for every GTM motion."
      }
    },
    {
      "@type": "Question",
      "name": "How much do GTM agencies in the US typically charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "US GTM agencies typically charge $15,000-$50,000 per month for comprehensive programs, with project-based engagements ranging $30,000-$150,000. Comprehensive launch programs with full execution can exceed $200,000 for enterprise products. US pricing reflects the market's sophistication and the agencies' proven track records."
      }
    },
    {
      "@type": "Question",
      "name": "Do US GTM agencies work with international companies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, leading US GTM agencies frequently work with international companies entering the American market. They bring critical expertise in US buyer behavior, competitive dynamics, pricing expectations, and go-to-market channels that differ significantly from European, Asian, or other markets. US market entry is their specialty."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do US GTM agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "US GTM agencies cover every B2B software category: enterprise SaaS and infrastructure, fintech and payments, cybersecurity, healthcare technology, vertical SaaS, AI and developer tools, and more. The US market's depth means you can find agencies with deep expertise in almost any technology vertical."
      }
    }
  ]
}

export default async function GTMAgencyUSPage() {
  const agencies = await getAgenciesByCategory('GTM Agency', 'US')

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"Best GTM Agencies US","url":"https://gtm.quest/best-gtm-agency-us-top-gtm-agencies-us"})}} />

      {/* Breadcrumb */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' '}/{' '}
            <Link href="/best-gtm-agencies" className="hover:text-white transition-colors">Agencies</Link>
            {' '}/{' '}
            <span className="text-white">GTM US</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Image */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1920&q=80"
            alt="Best GTM agency US - San Francisco Golden Gate Bridge and skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">United States</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            Best GTM Agency US 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} go-to-market agencies the United States has to offer—verified experts in product launches, GTM strategy, and revenue growth.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">Top Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">${Math.round(avgMinBudget / 1000)}K+</div>
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
            Why Choose a GTM Agency US for Your Business?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              <a href="https://en.wikipedia.org/wiki/Economy_of_the_United_States" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">The United States commands the world's largest economy</a> and serves as the undisputed leader in go-to-market innovation for B2B SaaS and enterprise technology. With the <a href="https://www.statista.com/statistics/505243/worldwide-software-as-a-service-revenue/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">US SaaS market projected to reach $221.5 billion in 2025</a> revenue alone, American markets set global standards for product launches, positioning strategy, and revenue scaling. Silicon Valley, New York, Boston, and Austin have collectively launched thousands of B2B technology companies, creating battle-tested GTM playbooks that span product-led growth, sales-led enterprise motions, and hybrid approaches across every software category from infrastructure to vertical SaaS.
            </p>
            <p>
              The US venture capital ecosystem fuels relentless GTM experimentation and innovation, with <a href="https://sapphireventures.com/blog/the-state-of-the-saas-capital-markets-2026-in-review-2025-in-focus/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">$125 billion invested in software venture capital in 2026</a> and AI companies capturing 46% of all US VC funding. This capital intensity creates unique GTM challenges: Series A companies now require $2-6M ARR before raising (up from $1-2M historically), enterprise buyers complete 67% of their journey before sales engagement, and buying committees routinely involve 7-15 stakeholders across technical, financial, and executive roles. US GTM agencies understand these dynamics intimately—how to build pipeline for 6-18 month sales cycles, execute account-based strategies for Fortune 1000 targets, and create content marketing engines that drive qualified pipeline at scale.
            </p>
            <p>
              Top US GTM agencies specialize in the most sophisticated launch scenarios: taking products from stealth to Series A traction, entering the US market from international headquarters, pivoting positioning after initial launch struggles, and scaling repeatable revenue engines from $10M to $100M+ ARR. They bring expertise in category creation, competitive differentiation in crowded markets, messaging frameworks that resonate with American buyers' ROI focus, and demand generation architectures that integrate product-led and sales-led motions. The agencies below have demonstrated mastery of US market dynamics, proven track records launching B2B technology products, and specialized capabilities serving SaaS, fintech, infrastructure, and enterprise software companies.
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 mt-20 leading-tight">
            Top GTM Agencies US: What to Look For
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Launch Experience and Market Entry Expertise</h3>
              <p>
                The best US GTM agencies have launched dozens or hundreds of products across different categories, price points, and buyer personas.<br/><br/>
                They understand how to validate product-market fit, develop positioning that differentiates in crowded markets, and execute launch sequences that build early traction.<br/><br/>
                Look for agencies with case studies showing successful launches in your category—enterprise SaaS requires different GTM approaches than PLG, vertical SaaS, or horizontal platforms.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Positioning and Messaging Capabilities</h3>
              <p>
                Effective GTM agencies excel at strategic positioning—understanding your differentiation, articulating unique value, and developing messaging that resonates with target buyers.<br/><br/>
                Top US agencies use frameworks like positioning canvas, value prop development, and competitive battle cards to ensure your product stands out in the market.<br/><br/>
                Ask agencies about their positioning methodology and how they validate messaging with real buyers before launch.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>Revenue Architecture and Systems Thinking</h3>
              <p>
                Modern GTM requires building repeatable revenue engines, not just one-time campaigns.<br/><br/>
                The best US agencies think systematically about how product, marketing, sales, and customer success work together to drive efficient growth.<br/><br/>
                They help you design GTM motions—whether product-led, sales-led, or hybrid—that align with your product, market, and business model.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Services for US Markets</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">World-class go-to-market capabilities for the most competitive technology market globally.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Product-Led Growth</h3>
              <p className="text-white/70 text-lg">Self-serve acquisition funnels, viral loops, and freemium-to-paid conversion optimization strategies.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Sales</h3>
              <p className="text-white/70 text-lg">Account-based marketing, 7-15 stakeholder buying committee navigation, and complex deal orchestration.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Category Creation</h3>
              <p className="text-white/70 text-lg">New market positioning, competitive differentiation, and thought leadership for emerging categories.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4">US Market Entry</h3>
              <p className="text-white/70 text-lg">International company positioning, US buyer behavior adaptation, and cross-border expansion strategies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries for GTM in the US</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">The world's most sophisticated B2B technology market creates opportunities across every vertical.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise SaaS</h3>
              <p className="text-white/70 text-lg">Cloud software, infrastructure, and B2B platforms—the US hosts the world's largest enterprise software market.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech & Payments</h3>
              <p className="text-white/70 text-lg">Digital banking, payments, and wealth tech—the US fintech ecosystem leads global innovation.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-white/70 text-lg">Security software, identity management, and compliance—massive enterprise demand and rapid growth.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI & Developer Tools</h3>
              <p className="text-white/70 text-lg">Artificial intelligence, machine learning, and developer platforms—capturing 46% of US VC funding.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Top GTM Agency US Directory
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {totalAgencies} verified go-to-market agencies serving US businesses with proven launch expertise and results.
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
          <h2 className="text-5xl font-black text-white mb-16">US GTM FAQs</h2>

          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                What is the typical cost of a GTM agency in the US?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                US GTM agencies typically charge ${Math.round(avgMinBudget / 1000)}K+ per month for retainer engagements.<br/><br/>
                Project-based GTM strategies range from $30K-$150K depending on scope. Comprehensive launch programs with full execution can exceed $200K for enterprise products.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                How long does a typical GTM engagement take?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                GTM strategy development typically takes 4-8 weeks. Full launch execution spans 3-6 months from positioning through initial traction. Enterprise launches or market entry programs may require 6-12 months for comprehensive execution.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                Do US GTM agencies work with international companies?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Yes, leading US GTM agencies frequently work with international companies entering the American market. They bring critical expertise in US buyer behavior, competitive dynamics, pricing expectations, and go-to-market channels that differ significantly from European, Asian, or other markets.
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
            <Link href="/best-gtm-agency-uk-top-gtm-agencies-uk" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇬🇧</span>
              <span className="text-white font-semibold">UK</span>
            </Link>
            <Link href="/best-gtm-agency-canada-top-gtm-agencies-canada" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇨🇦</span>
              <span className="text-white font-semibold">Canada</span>
            </Link>
            <Link href="/best-gtm-agency-germany-top-gtm-agencies-germany" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇩🇪</span>
              <span className="text-white font-semibold">Germany</span>
            </Link>
            <Link href="/best-gtm-agency-australia-top-gtm-agencies-australia" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇦🇺</span>
              <span className="text-white font-semibold">Australia</span>
            </Link>
            <Link href="/best-gtm-agency-france-top-gtm-agencies-france" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇫🇷</span>
              <span className="text-white font-semibold">France</span>
            </Link>
            <Link href="/best-gtm-agency-singapore-top-gtm-agencies-singapore" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇸🇬</span>
              <span className="text-white font-semibold">Singapore</span>
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
            <Link href="/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">B2B Marketing US</h3>
              <p className="text-white/60">Explore B2B marketing agencies serving US markets.</p>
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
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive go-to-market strategy tailored to the US market.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
