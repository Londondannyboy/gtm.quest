import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'GTM Agencies US 2025 | Top Go-To-Market Consultants & Agencies USA',
  description: 'Find the best GTM agencies serving the US market. Compare top American go-to-market consultancies with verified credentials and specializations.',
  keywords: 'GTM agency US, go-to-market agencies USA, GTM consultants America, product launch agency US, B2B GTM strategy USA',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-us'
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

export default async function GTMAgenciesUSPage() {
  const agencies = await getAgenciesForLocation('US')
  const stats = await getLocationStats('US')

  const topSpecializations = stats.topSpecializations || []

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "GTM Agencies US",
        "description": "Top GTM agencies serving the United States market",
        "url": "https://gtm.quest/gtm-agencies-us",
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
      })}} />

      {/* Breadcrumb */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' '}/{' '}
            <Link href="/best-gtm-agencies" className="hover:text-white transition-colors">GTM Agencies</Link>
            {' '}/{' '}
            <span className="text-white">US</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Image */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1920&q=80"
            alt="GTM agencies US - New York City skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">United States</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>
            GTM Agencies US 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {stats.totalAgencies} verified go-to-market agencies serving US businesses from Silicon Valley to New York, specializing in B2B SaaS, product launches, and growth strategies.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{stats.totalAgencies}</div>
              <div className="text-white/70 text-lg">Top Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">${Math.round(stats.avgMinBudget / 1000)}K+</div>
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

      {/* Why Choose Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Why Choose a GTM Agency US for Your Business?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              <a href="https://en.wikipedia.org/wiki/Economy_of_the_United_States" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">The United States commands the world's largest economy</a> and serves as the undisputed leader in go-to-market innovation for B2B SaaS and enterprise technology. With the <a href="https://www.statista.com/statistics/505243/worldwide-software-as-a-service-revenue/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">US SaaS market projected to reach $221.5 billion in 2025</a>, American markets set global standards for product launches, positioning strategy, and revenue scaling. Silicon Valley, New York, Boston, and Austin have collectively launched thousands of B2B technology companies, creating battle-tested GTM playbooks.
            </p>
            <p>
              The US venture capital ecosystem fuels relentless GTM experimentation and innovation, with <a href="https://sapphireventures.com/blog/the-state-of-the-saas-capital-markets-2026-in-review-2025-in-focus/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">over $125 billion invested in software venture capital annually</a> and AI companies capturing nearly half of all US VC funding. This capital intensity creates unique GTM challenges: Series A companies now require $2-6M ARR before raising, enterprise buyers complete 67% of their journey before sales engagement, and buying committees routinely involve 7-15 stakeholders. US GTM agencies understand these dynamics intimately.
            </p>
            <p>
              Top US GTM agencies specialize in the most sophisticated launch scenarios: taking products from stealth to Series A traction, entering the US market from international headquarters, pivoting positioning after initial launch struggles, and scaling repeatable revenue engines from $10M to $100M+ ARR. They bring expertise in category creation, competitive differentiation in crowded markets, and demand generation architectures that integrate product-led and sales-led motions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Industries Section */}
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

      {/* How to Choose Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            How to Choose a US GTM Agency
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>01 — Launch Experience and Track Record</h3>
              <p>
                The best US GTM agencies have launched dozens or hundreds of products across different categories, price points, and buyer personas.<br/><br/>
                They understand how to validate product-market fit, develop positioning that differentiates in crowded markets, and execute launch sequences that build early traction.<br/><br/>
                Look for agencies with case studies showing successful launches in your category—enterprise SaaS requires different GTM approaches than PLG or vertical SaaS.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>02 — Positioning and Messaging Capabilities</h3>
              <p>
                Effective GTM agencies excel at strategic positioning—understanding your differentiation, articulating unique value, and developing messaging that resonates with target buyers.<br/><br/>
                Top US agencies use frameworks like positioning canvas, value prop development, and competitive battle cards to ensure your product stands out.<br/><br/>
                Ask agencies about their positioning methodology and how they validate messaging with real buyers before launch.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>03 — Revenue Architecture and Systems Thinking</h3>
              <p>
                Modern GTM requires building repeatable revenue engines, not just one-time campaigns.<br/><br/>
                The best US agencies think systematically about how product, marketing, sales, and customer success work together to drive efficient growth.<br/><br/>
                They help you design GTM motions—whether product-led, sales-led, or hybrid—that align with your product, market, and business model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Directory */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Top GTM Agency US Directory
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {stats.totalAgencies} verified go-to-market agencies serving US businesses with proven launch expertise and results.
          </p>
        </div>

        <div className="w-full">
          {agencies.map((agency, i) => {
            const isTopRanked = !!(agency.global_rank && agency.global_rank <= 3)
            const website = agency.website || '#'

            return (
              <AgencyCard
                key={agency.slug}
                rank={i + 1}
                name={agency.name}
                tagline={agency.description}
                description={[agency.description]}
                bestFor={agency.specializations || []}
                keyServices={[]}
                website={website}
                primaryColor={(agency as any).primary_color || '#8B5CF6'}
                logoUrl={(agency as any).logo_url}
                backdropUrl={(agency as any).backdrop_url}
                isTopRanked={isTopRanked}
                internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined}
                serviceAreas={agency.service_areas || []}
              />
            )
          })}
        </div>
      </section>

      {/* Rendered FAQ Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-16">US GTM FAQs</h2>

          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                Why choose a US-based GTM agency?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                US agencies bring deep expertise in the world's largest tech market, with experience across diverse industries and go-to-market models.<br/><br/>
                They understand American buyer behavior, regulatory landscape, and have connections to US investors, partners, and customers.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                What is the typical cost of a GTM agency in the US?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                US GTM agencies typically charge ${Math.round(stats.avgMinBudget / 1000)}K+ per month for retainer work.<br/><br/>
                Project fees range from $20K-$100K+ depending on scope. Top-tier agencies serving enterprise clients may require $50K+ monthly minimums.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                Which US cities have the best GTM agencies?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                New York, San Francisco, Los Angeles, Boston, and Austin are major hubs. SF/Silicon Valley agencies excel at tech and SaaS.<br/><br/>
                NYC agencies bring B2B enterprise expertise. Austin and Boston have strong startup ecosystems with agencies specialized in early-stage GTM.
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-6" style={{color: '#3B82F6'}}>
                What industries do US GTM agencies specialize in?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Top specializations include {topSpecializations.slice(0, 3).join(', ') || 'B2B SaaS, Enterprise Software, AI/ML'}. US agencies cover every B2B software category from enterprise SaaS to cybersecurity to AI and developer tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schema FAQ Cards */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-12 leading-tight">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-black border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">{faq.name}</h3>
                <p className="text-white/70 text-lg leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Markets */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">Explore GTM Agencies in Related Markets</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/gtm-agencies-new-york" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🗽</span>
              <span className="text-white font-semibold">New York</span>
            </Link>
            <Link href="/gtm-agencies-san-francisco" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🌉</span>
              <span className="text-white font-semibold">San Francisco</span>
            </Link>
            <Link href="/gtm-agencies-uk" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇬🇧</span>
              <span className="text-white font-semibold">United Kingdom</span>
            </Link>
            <Link href="/gtm-agencies-australia" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇦🇺</span>
              <span className="text-white font-semibold">Australia</span>
            </Link>
            <Link href="/best-gtm-agency-canada-top-gtm-agencies-canada" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇨🇦</span>
              <span className="text-white font-semibold">Canada</span>
            </Link>
            <Link href="/best-gtm-agency-germany-top-gtm-agencies-germany" className="bg-zinc-900 border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇩🇪</span>
              <span className="text-white font-semibold">Germany</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">GTM Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/planner" className="bg-black border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">GTM Planner</h3>
              <p className="text-white/60">Build your go-to-market strategy with our AI-powered planning tool.</p>
            </Link>
            <Link href="/best-gtm-agencies" className="bg-black border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">All GTM Agencies</h3>
              <p className="text-white/60">Browse our complete directory of verified GTM agencies worldwide.</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us" className="bg-black border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">B2B Marketing US</h3>
              <p className="text-white/60">Explore B2B marketing agencies serving US markets.</p>
            </Link>
            <Link href="/gtm-consulting" className="bg-black border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">GTM Consulting</h3>
              <p className="text-white/60">Learn about go-to-market consulting services and methodologies.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your US GTM Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a data-driven go-to-market strategy for the American market.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
