import Link from 'next/link'
import { Metadata } from 'next'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'SaaS GTM Strategy & Playbook | GTM Quest',
  description: 'Complete SaaS go-to-market strategy guide. Learn GTM tactics for recurring revenue, subscription models, and SaaS product launches. Free guide from top GTM agency in the UK.',
  keywords: 'saas gtm, saas go-to-market, saas strategy, saas launch, subscription marketing',
}

export default function SaaSGTMPage() {
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
              SaaS Go-To-Market Playbook
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Build a winning SaaS GTM strategy with proven tactics for recurring revenue, customer retention, and sustainable growth.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why SaaS GTM is Different</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  SaaS has unique characteristics that require a different GTM approach than traditional software or services:
                </p>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li>💰 <strong>Recurring Revenue Model:</strong> Success depends on retention, not just acquisition</li>
                  <li>📊 <strong>Metrics-Driven:</strong> Everything is measured (MRR, churn, LTV, CAC)</li>
                  <li>🔄 <strong>Continuous Optimization:</strong> Product and GTM evolve together</li>
                  <li>👥 <strong>Customer Success Critical:</strong> Happy customers = growth through expansion</li>
                  <li>🚀 <strong>Fast Iteration:</strong> Test, measure, improve weekly</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">SaaS GTM Approaches</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Product-Led SaaS</h3>
                    <p className="text-gray-700 mb-4">
                      Users self-onboard and adopt through the product experience.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>✓ Lower CAC</li>
                      <li>✓ Faster onboarding</li>
                      <li>✓ Viral potential</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Sales-Led SaaS</h3>
                    <p className="text-gray-700 mb-4">
                      Sales team drives enterprise deals and complex sales.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>✓ Higher ARR</li>
                      <li>✓ Larger deals</li>
                      <li>✓ Relationship-based</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Key SaaS Metrics You Must Track</h2>
                <div className="space-y-4">
                  {[
                    {
                      metric: 'Monthly Recurring Revenue (MRR)',
                      desc: 'Total revenue from active subscriptions. Track growth month-over-month.'
                    },
                    {
                      metric: 'Churn Rate',
                      desc: 'Percentage of customers who cancel each month. Lower is better. Industry average: 5-7%.'
                    },
                    {
                      metric: 'Customer Lifetime Value (LTV)',
                      desc: 'Total revenue you expect from an average customer before they churn.'
                    },
                    {
                      metric: 'Customer Acquisition Cost (CAC)',
                      desc: 'How much you spend on sales/marketing to acquire one customer.'
                    },
                    {
                      metric: 'LTV:CAC Ratio',
                      desc: 'LTV divided by CAC. Target: 3:1 or higher for profitability.'
                    },
                  ].map((item) => (
                    <div key={item.metric} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <h3 className="font-bold text-gray-900 mb-2">{item.metric}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The SaaS GTM Playbook: 6 Phases</h2>
                <div className="space-y-4">
                  {[
                    { phase: 'Founding', focus: 'Validate problem, build MVP, talk to customers' },
                    { phase: 'Beta', focus: 'Acquire first 100 users, refine product, establish product-market fit' },
                    { phase: 'Launch', focus: 'Public availability, initial marketing blitz, press coverage' },
                    { phase: 'Growth', focus: 'Acquire customers at scale, optimize conversion funnel' },
                    { phase: 'Expansion', focus: 'Increase ARPU, expand to new markets/segments' },
                    { phase: 'Scale', focus: 'International expansion, enterprise focus, optimization' },
                  ].map((item) => (
                    <div key={item.phase} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 font-bold text-amber-600">{item.phase}</div>
                      <div className="text-gray-700">{item.focus}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
                <h3 className="font-bold text-gray-900 mb-3">Ready to Build Your SaaS GTM Plan?</h3>
                <p className="text-gray-700 mb-6">
                  Use our GTM Strategy Generator to create a customized go-to-market plan for your SaaS product. As one of the <span className="font-semibold">best GTM agencies in the UK</span>, we've helped dozens of SaaS companies achieve product-market fit and scale.
                </p>
                <Link
                  href="/planner"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all"
                >
                  🚀 Generate Your SaaS GTM Plan
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
