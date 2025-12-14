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
            <Link href="/" className="text-amber-400 hover:text-amber-300 font-semibold mb-6 inline-flex items-center gap-2">
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
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white font-bold text-lg">
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

              {/* CTA */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
                <h3 className="font-bold text-gray-900 mb-3">Ready to Build Your GTM Plan?</h3>
                <p className="text-gray-700 mb-6">
                  Use our free GTM Strategy Generator to create a personalized go-to-market plan. As one of the <span className="font-semibold">best GTM agencies in the UK</span>, we've built this tool to help companies like yours succeed.
                </p>
                <Link
                  href="/planner"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all"
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
