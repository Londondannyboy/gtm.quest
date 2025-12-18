import Link from 'next/link'
import { Metadata } from 'next'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Complete GTM Strategy Guide 2025 | GTM Quest',
  description: 'The ultimate guide to go-to-market strategy. Learn proven GTM frameworks, best practices, and tactics used by successful product launches. Free comprehensive guide from one of the leading GTM agencies in the UK.',
  keywords: 'gtm strategy, go-to-market strategy, gtm framework, product launch strategy, market entry',
}

export default function GTMStrategyPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <Link href="/" className="text-blue-400 hover:text-blue-300 font-semibold mb-6 inline-flex items-center gap-2">
              ← Back to GTM Quest
            </Link>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              The Complete GTM Strategy Guide
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Everything you need to know about go-to-market strategy. Learn from successful product launches and build your winning GTM plan.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {/* Main Content */}
            <div className="space-y-12">
              {/* Section 1 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Go-To-Market Strategy?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A go-to-market (GTM) strategy is your comprehensive plan for launching and scaling a product or service. It defines how you'll reach customers, what channels you'll use, how you'll position your product, and how you'll measure success.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Think of GTM as the bridge between what you've built and the customers who need it. It encompasses product positioning, pricing strategy, sales approach, marketing tactics, and customer success operations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A strong GTM strategy increases your chances of a successful launch. Research shows that <strong>85% of product launches fail due to poor GTM execution</strong>, not product problems. That's where most companies go wrong.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The Three GTM Approaches</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Product-Led Growth</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Users discover and adopt your product with minimal sales involvement.
                    </p>
                    <p className="text-sm text-blue-600 font-semibold">Examples: Slack, Figma</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Sales-Led</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Your sales team directly sells to customers.
                    </p>
                    <p className="text-sm text-green-600 font-semibold">Examples: Salesforce, HubSpot</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Hybrid</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Combination of both approaches for maximum reach.
                    </p>
                    <p className="text-sm text-purple-600 font-semibold">Best for: Mid-market</p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Building Your GTM Plan: 5-Step Framework</h2>
                <div className="space-y-6">
                  {[
                    {
                      num: '1',
                      title: 'Define Your Market & ICP',
                      desc: 'Identify your total addressable market (TAM), serviceable available market (SAM), and ideal customer profile (ICP).'
                    },
                    {
                      num: '2',
                      title: 'Craft Your Positioning',
                      desc: 'How will you position your product? What problem do you solve? What makes you different?'
                    },
                    {
                      num: '3',
                      title: 'Choose Your Approach',
                      desc: 'Will you go product-led, sales-led, or hybrid? This decision shapes everything else.'
                    },
                    {
                      num: '4',
                      title: 'Build Your Channel Strategy',
                      desc: 'Which channels will you use? Content, paid ads, sales outreach, partnerships?'
                    },
                    {
                      num: '5',
                      title: 'Set Your Metrics & Goals',
                      desc: 'Define your north star metric, leading indicators, and 6-month/12-month goals.'
                    },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-500 text-white font-bold text-lg">
                          {step.num}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-700">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* GTM Components Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Core GTM Components</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A complete GTM strategy includes eight critical components that must work together:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Product Positioning', desc: 'How you position your product vs. alternatives. What makes you different?' },
                    { title: 'Target Market/ICP', desc: 'Who is your ideal customer? Specific definition of company size, industry, role.' },
                    { title: 'Pricing & Revenue Model', desc: 'How much will you charge? SaaS, perpetual license, freemium, usage-based?' },
                    { title: 'Go-to-Market Channels', desc: 'How will you reach customers? Direct sales, content, product-led, partnerships, ads?' },
                    { title: 'Sales Motion', desc: 'How will you sell? Direct sales, self-serve, marketplace, partner-led?' },
                    { title: 'Customer Success', desc: 'How will you ensure customers succeed and reduce churn?' },
                    { title: 'Launch Plan', desc: 'Specific timeline and tactics for launch. What happens day 1, week 1, month 1?' },
                    { title: 'Metrics & KPIs', desc: 'How will you measure success? Acquisition, retention, revenue targets?' }
                  ].map((component, i) => (
                    <div key={i} className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">{component.title}</h4>
                      <p className="text-gray-700 text-sm">{component.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Positioning Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Positioning: Your Most Important Decision</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Your positioning statement is the foundation of your entire GTM. It answers: "For [customer], [product] is the [category] that [solves problem] unlike [competitor]."
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <p className="text-gray-700 mb-4">
                    <strong>Why positioning matters:</strong> It shapes your messaging, pricing, target customer selection, and channel strategy. Everything flows from positioning.
                  </p>
                  <p className="text-gray-700">
                    <strong>How to get it right:</strong> Interview 20+ prospective customers. Understand their alternative solutions. Find what's uniquely valuable about your approach. Test your positioning with real customers.
                  </p>
                </div>
              </div>

              {/* Channel Strategy Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Channel Strategy: Where You Win</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Your channels are where customer acquisition happens. Different channels have different CAC, conversion rates, and fit different GTM approaches:
                </p>
                <div className="space-y-4">
                  {[
                    { channel: 'Content Marketing', cac: 'Medium', fit: 'All (especially B2B)', desc: 'Blog, guides, SEO - drives inbound demand' },
                    { channel: 'Direct Sales', cac: 'High', fit: 'Enterprise, high-value deals', desc: 'Sales team outreach - relationship-driven' },
                    { channel: 'Product-Led Growth', cac: 'Low', fit: 'B2B SaaS, tools', desc: 'Free tier/trial - users experience value first' },
                    { channel: 'Paid Ads', cac: 'Varies', fit: 'B2C, e-commerce', desc: 'Google/Facebook ads - scalable but expensive' },
                    { channel: 'Partnerships', cac: 'Medium', fit: 'Platform plays', desc: 'Integrate or partner with complementary products' },
                    { channel: 'Community', cac: 'Low', fit: 'Developer tools', desc: 'Authentic engagement in niche communities' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-gray-50 border border-gray-200 rounded">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h4 className="font-bold text-gray-900">{item.channel}</h4>
                        <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">CAC: {item.cac}</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-1"><strong>Best for:</strong> {item.fit}</p>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common GTM Mistakes */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Common GTM Mistakes to Avoid</h2>
                <div className="space-y-4">
                  {[
                    { mistake: 'No Clear Target Customer', solution: 'Define a specific ICP. Start narrow and expand.' },
                    { mistake: 'Weak Positioning', solution: 'Invest time in positioning. Test with customers repeatedly.' },
                    { mistake: 'Wrong Channels', solution: 'Test channels. Find where your customers actually are.' },
                    { mistake: 'No MVP Validation', solution: 'Validate problem before building GTM.' },
                    { mistake: 'Ignoring Customer Success', solution: 'GTM includes retention. Invest in customer success.' },
                    { mistake: 'No Metrics', solution: 'Set KPIs before launch. Measure everything.' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                      <h4 className="font-bold text-gray-900 mb-1">❌ {item.mistake}</h4>
                      <p className="text-gray-700 text-sm">✅ {item.solution}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* GTM Timeline */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">GTM Timeline: When to Do What</h2>
                <div className="space-y-4">
                  {[
                    { phase: 'Months -6 to -3', activities: 'Customer research, positioning, channel selection, launch planning' },
                    { phase: 'Months -3 to 0', activities: 'Content creation, partner recruitment, sales enablement, marketing prep' },
                    { phase: 'Month 0 (Launch)', activities: 'Coordinated launch across all channels, PR, influencer seeding, monitoring' },
                    { phase: 'Months 1-3 (Scale)', activities: 'Optimize channels, analyze what\'s working, adjust spend, iterate' },
                    { phase: 'Months 3-6 (Expand)', activities: 'Double down on winning channels, expand to adjacent segments' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                      <h4 className="font-bold text-gray-900 mb-1">{item.phase}</h4>
                      <p className="text-gray-700 text-sm">{item.activities}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Metrics */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Key GTM Metrics to Track</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { metric: 'CAC (Customer Acquisition Cost)', desc: 'Total cost to acquire one customer. Should decrease over time as you optimize.' },
                    { metric: 'LTV (Lifetime Value)', desc: 'Total revenue from one customer. LTV should be 3-5x your CAC.' },
                    { metric: 'Churn Rate', desc: 'What % of customers cancel each month? Lower is better.' },
                    { metric: 'Conversion Rate', desc: 'What % of prospects become customers? Varies by channel.' },
                    { metric: 'Sales Cycle Length', desc: 'Days from first contact to close. Indicates sales efficiency.' },
                    { metric: 'MRR/ARR', desc: 'Monthly/annual recurring revenue. Your revenue growth metric.' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">{item.metric}</h4>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Resources */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Dive Deeper Into GTM</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Go-to-Market Consultant', link: '/go-to-market-consultant', desc: 'Work with an expert to develop your custom GTM strategy.' },
                    { title: 'GTM Strategy Template', link: '/gtm-strategy-template', desc: 'Download our one-page canvas to plan your GTM.' },
                    { title: 'B2B GTM Strategy', link: '/b2b-gtm-strategy', desc: 'Specialized guidance for complex B2B sales.' },
                    { title: 'GTM for Startups', link: '/gtm-for-startups', desc: 'Lean GTM framework for resource-constrained launches.' }
                  ].map((item, i) => (
                    <Link key={i} href={item.link} className="p-4 bg-blue-50 border border-blue-200 rounded-lg hover:shadow-lg transition-shadow">
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-700 text-sm mb-2">{item.desc}</p>
                      <span className="text-blue-600 font-semibold text-sm">Explore →</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-50 rounded-xl p-8 border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-3 text-2xl">Ready to Build Your GTM Plan?</h3>
                <p className="text-gray-700 mb-6">
                  Use our free GTM Strategy Generator to create a personalized go-to-market plan. As one of the <span className="font-semibold">best GTM agencies in the UK</span>, we've built this tool to help companies like yours succeed.
                </p>
                <Link
                  href="/planner"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-600 transition-all"
                >
                  🚀 Generate Your GTM Plan
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
