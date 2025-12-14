import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Go-to-Market Strategy Examples | Real GTM Case Studies | GTM Quest',
  description: 'Real-world go-to-market strategy examples and case studies. Learn from Slack, Stripe, HubSpot, Salesforce, and other successful GTM strategies.',
  keywords: 'gtm strategy examples, gtm case studies, go-to-market examples, slack gtm, stripe gtm, hubspot gtm, salesforce gtm strategy',
  alternates: { canonical: 'https://gtm.quest/gtm-strategy-examples' },
  openGraph: {
    title: 'GTM Strategy Examples | Real Case Studies',
    description: 'Learn from proven go-to-market strategies used by successful companies.',
    type: 'website'
  }
}

export default function GTMStrategyExamplesPage() {
  const caseStudies = [
    {
      company: 'Slack',
      logo: '💬',
      year: 2013,
      market: 'Enterprise Communication Platform',
      challenge: 'Breaking into a market dominated by legacy communication tools. Needed to show why existing solutions (email, IRC) were inadequate.',
      gtmStrategy: {
        positioning: 'The Platform Where Work Happens - positioning Slack not just as a chat tool but as a central hub for team communication and productivity.',
        targetMarket: 'Tech teams (especially engineering) in mid-market companies who were already using multiple communication tools.',
        channels: 'Product-led growth through free tier, engineering community partnerships (HackerNews, Product Hunt), organic word-of-mouth.',
        pricing: 'Freemium model with powerful free tier to drive adoption, premium pricing for storage and features.',
        launch: 'Soft launch to early users, then orchestrated Product Hunt launch, followed by strategic outbound to target companies.'
      },
      keyInsights: [
        'PLG (Product-Led Growth) approach overcame cold-start problem by letting users experience value immediately',
        'Free tier was so good that teams often expanded usage before converting to paid',
        'Focused on engineering teams first, then expanded to other departments',
        'Integration ecosystem became a critical part of GTM (400+ integrations)'
      ],
      results: '500M revenue in 2023 from $0 market presence in 2013'
    },
    {
      company: 'Stripe',
      logo: '💳',
      year: 2011,
      market: 'Payment Infrastructure',
      challenge: 'Developers thought payment processing was solved (PayPal, Square). Had to convince them there was a better way.',
      gtmStrategy: {
        positioning: 'The Developer-Friendly Payment Infrastructure - 7 lines of code vs pages of integration documentation.',
        targetMarket: 'Developers and engineering teams building online businesses, marketplaces, and SaaS platforms.',
        channels: 'Developer communities (HackerNews, GitHub, technical blogs), documentation excellence, API-first design, partnerships with hosting platforms.',
        pricing: 'Simple percentage-based pricing (2.9% + $0.30), no setup fees or monthly minimums - lower barrier than competitors.',
        launch: 'Public launch at Y Combinator, strong presence at developer conferences, open and transparent communication.'
      },
      keyInsights: [
        'GTM wasn\'t about traditional sales - it was about making the product irresistible to developers',
        'Documentation, code examples, and SDKs were part of GTM, not just support',
        'Went after the untapped market of online marketplaces and SaaS (not just established ecommerce)',
        'Partnerships with Shopify, Amazon, and others accelerated adoption'
      ],
      results: '$95B valuation, serving millions of businesses globally'
    },
    {
      company: 'HubSpot',
      logo: '🎯',
      year: 2006,
      market: 'Inbound Marketing Software',
      challenge: 'Traditional marketing was expensive (cold calling, ads, events). Needed to show there was a better way.',
      gtmStrategy: {
        positioning: 'Inbound Methodology - attract customers through valuable content, not outbound interruption. The entire company was built on this.',
        targetMarket: 'Small to mid-market B2B companies looking to grow without large sales teams.',
        channels: 'Content marketing (blog with 400+ articles), free tools and resources, webinars, certification programs, passionate customer advocacy.',
        pricing: 'Started with open-source tools, freemium model, then tier-based SaaS pricing for premium features.',
        launch: 'Validated inbound methodology first through own practice, then productized it, then taught it to market.'
      },
      keyInsights: [
        'Company itself was a GTM example - they blogged, optimized SEO, created content before launch',
        'Free tools (Landing Page Builder, Email Tracking, Social Tools) drove adoption and brand awareness',
        'Customer success and support became part of GTM through certification programs and community building',
        'Built a developer ecosystem early (APIs, app marketplace, integrations)'
      ],
      results: 'IPO in 2014, $300M+ recurring revenue by 2020s'
    },
    {
      company: 'Salesforce',
      logo: '☁️',
      year: 1999,
      market: 'Cloud CRM (when cloud was new)',
      challenge: 'Cloud computing didn\'t exist as a category. Had to convince enterprises that cloud-based software was safe, reliable, and better than on-premise.',
      gtmStrategy: {
        positioning: 'The End of Software - you don\'t install software, you access it online with no infrastructure to maintain.',
        targetMarket: 'Sales teams and enterprises looking to replace expensive Siebel installations with a flexible, cloud-based alternative.',
        channels: 'Direct sales to enterprises, customer conferences (Dreamforce - launched early to build community), analyst relations, partnerships.',
        pricing: 'Subscription model (SaaS wasn\'t common then), per-user pricing that was lower than on-premise licenses.',
        launch: 'Trade shows and direct sales force targeting CIOs and sales leaders, focusing on risk mitigation and TCO.'
      },
      keyInsights: [
        'Had to overcome huge skepticism about cloud security and reliability - made it a core GTM message',
        'Dreamforce became a key GTM channel - creating customer community and competitive barrier',
        'Partnerships with big systems integrators helped overcome enterprise sales cycles',
        'Customer success and expansion became critical to GTM as retention and upsell drove growth'
      ],
      results: '$200B+ market cap, dominated enterprise SaaS for two decades'
    },
    {
      company: 'Notion',
      logo: '📝',
      year: 2016,
      market: 'Workspace Productivity (all-in-one)',
      challenge: 'Market had entrenched players (Google Docs, Asana, Jira). Creating "yet another productivity app" seemed doomed.',
      gtmStrategy: {
        positioning: 'All-in-One Workspace - Replace your Docs, Spreadsheets, Wikis, and Databases with one flexible tool.',
        targetMarket: 'Knowledge workers, small teams, startup founders, educators (later expanded to enterprises).',
        channels: 'Community-driven (Reddit, Twitter), free tiers for students/educators, user-generated templates, template marketplace.',
        pricing: 'Aggressive free tier strategy, affordable paid plans ($8-32/seat/month), free for personal use.',
        launch: 'Organic growth via community love, fan-created content and templates, strategic influencer partnerships without feeling inauthentic.'
      },
      keyInsights: [
        'Succeeded without traditional sales team through authentic community building',
        'Templates and customization community became a GTM moat - users became marketers',
        'Free tier and education focus built multi-generational brand loyalty',
        'Focused on delighting passionate users rather than broad market appeal initially'
      ],
      results: '$10B valuation, 100M+ monthly active users without traditional marketing spend'
    },
    {
      company: 'Figma',
      logo: '🎨',
      year: 2016,
      market: 'Design Collaboration Software',
      challenge: 'Design tools were mature (Adobe XD, Sketch). Browser-based design seemed impossible. How to convince designers to switch tools?',
      gtmStrategy: {
        positioning: 'The Browser-Based Design Tool - collaborate in real-time, no installs, no files, no licensing nightmares.',
        targetMarket: 'Design teams at tech companies, particularly those using remote/distributed teams (especially post-COVID).',
        channels: 'Designer communities (Designer Hangout, Dribbble), design-focused Twitter, YouTube tutorials, integrations ecosystem.',
        pricing: 'Free tier for individuals, team pricing that was transparent and competitively priced versus Sketch.',
        launch: 'Slow, deliberate growth with beta access, word-of-mouth from influential designers, strategic conference presence.'
      },
      keyInsights: [
        'Timing was critical - COVID accelerated remote work, making collaboration features more valuable',
        'Built in public - sharing progress, getting feedback, creating FOMO',
        'Free tier for students and open-source projects built brand loyalty in next generation',
        'Multiplayer/collaboration features weren\'t just product features, they were core GTM messages'
      ],
      results: '$10B valuation, became design industry standard within 5 years'
    }
  ]

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://gtm.quest"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "GTM Strategy Examples",
        item: "https://gtm.quest/gtm-strategy-examples"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-blue-400 text-blue-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Case Studies</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Go-to-Market<br /><span className="text-blue-300">Strategy Examples</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">Learn from real-world GTM strategies of successful companies. Understand how they positioned products, chose channels, and acquired early customers.</p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left side - Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl">{study.logo}</span>
                      <div>
                        <h2 className="text-3xl font-black text-gray-900">{study.company}</h2>
                        <p className="text-sm text-gray-600">{study.year} • {study.market}</p>
                      </div>
                    </div>

                    <div className="mt-8 space-y-6">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">The Challenge</h3>
                        <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900 mb-4">GTM Strategy</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="text-xs font-bold text-blue-600 uppercase">Positioning</p>
                            <p className="text-sm text-gray-700">{study.gtmStrategy.positioning}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-blue-600 uppercase">Target Market</p>
                            <p className="text-sm text-gray-700">{study.gtmStrategy.targetMarket}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-blue-600 uppercase">Channels</p>
                            <p className="text-sm text-gray-700">{study.gtmStrategy.channels}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-blue-600 uppercase">Pricing</p>
                            <p className="text-sm text-gray-700">{study.gtmStrategy.pricing}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-blue-600 uppercase">Launch Approach</p>
                            <p className="text-sm text-gray-700">{study.gtmStrategy.launch}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Key Insights & Results */}
                  <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4">Key GTM Insights</h3>
                      <ul className="space-y-3">
                        {study.keyInsights.map((insight, j) => (
                          <li key={j} className="flex gap-3">
                            <span className="text-blue-500 font-bold text-lg leading-none mt-1">→</span>
                            <span className="text-gray-700 text-sm">{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 p-6 bg-white rounded-lg border-2 border-blue-500">
                      <p className="text-xs font-bold text-blue-600 uppercase mb-2">Outcome</p>
                      <p className="text-lg font-bold text-gray-900">{study.results}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common GTM Patterns */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">Common GTM Patterns Across Winners</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                pattern: 'Clear Problem Articulation',
                explanation: 'Every successful GTM starts by showing that existing solutions are inadequate. Before promoting your solution, make the problem obvious.'
              },
              {
                pattern: 'Product-First Positioning',
                explanation: 'Instead of selling features, define how your product changes the way customers work. Position the outcome, not the features.'
              },
              {
                pattern: 'Niche-to-Mainstream Expansion',
                explanation: 'Start with a specific user segment where your solution is 10x better. Build deep traction, then expand to adjacent segments.'
              },
              {
                pattern: 'Community as Distribution',
                explanation: 'Build passionate early adopters who become marketers. Communities (developers, designers, founders) drove growth more than ads.'
              },
              {
                pattern: 'Free as GTM Channel',
                explanation: 'Aggressive free tiers or freemium models let users experience value risk-free. Conversion comes from value realization, not sales pressure.'
              },
              {
                pattern: 'Authentic Communication',
                explanation: 'Transparency and authenticity resonate with buyers. Share wins and challenges, not polished corporate messaging.'
              },
              {
                pattern: 'Integration Ecosystem',
                explanation: 'Products that integrate with tools customers already use have lower switching costs and faster adoption.'
              },
              {
                pattern: 'Customer Education as GTM',
                explanation: 'Teaching customers how to succeed (content, webinars, certifications) builds deeper relationships than transactional sales.'
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 border-l-4 border-blue-500 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">{item.pattern}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons for Your Business */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Apply These Lessons to Your GTM</h2>
          <div className="bg-white p-10 rounded-lg border-2 border-blue-500">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">1. Start with a Clear Problem</h3>
                <p className="text-gray-700">What is your customers' biggest pain? Make them feel it viscerally before showing your solution. Which company did this best in the examples? (Stripe made complex payment integration obvious.)</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">2. Define Your Niche</h3>
                <p className="text-gray-700">Who has the pain most acutely? Which specific user group should you target first? (Slack started with tech teams, Figma with design teams, Notion with knowledge workers.)</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">3. Choose Authentic Channels</h3>
                <p className="text-gray-700">Don't just copy competitors' channels. Where do your target users hang out? What content will genuinely help them? (Developer communities for Stripe, design platforms for Figma, Reddit for Notion.)</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">4. Make Your Free Tier Powerful</h3>
                <p className="text-gray-700">If you have a free tier, make it so good that users can deliver real value with it. The paid tier should feel like an obvious upgrade, not a paywall.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">5. Build Your Community First</h3>
                <p className="text-gray-700">Your best marketers will be passionate users. How can you empower them to share? (Templates, integrations, community features, recognition.)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-6">Build Your GTM Strategy</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Learn from these winning strategies and apply them to your own product launch. Download our GTM framework.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/gtm-strategy" className="px-10 py-5 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">Read GTM Guide</Link>
            <Link href="/gtm-strategy-template" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-600 transition-colors">Get Template</Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Dive Deeper Into GTM</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Go-to-Market Consultant',
                description: 'Work with experts to develop your custom GTM strategy based on these proven patterns.',
                link: '/go-to-market-consultant'
              },
              {
                title: 'GTM Strategy Template',
                description: 'Download our one-page canvas to plan your positioning, pricing, channels, and launch.',
                link: '/gtm-strategy-template'
              },
              {
                title: 'Product Launch Guide',
                description: 'Step-by-step playbook for executing your launch successfully.',
                link: '/product-launch'
              },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <span className="text-blue-600 font-semibold text-sm">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
