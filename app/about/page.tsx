import Link from 'next/link'
import { Metadata } from 'next'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About GTM Quest | Leading GTM Agency UK',
  description: 'Learn about GTM Quest - a leading AI-powered go-to-market agency helping UK companies launch and scale. Free GTM tools, expert strategies, and proven frameworks.',
  keywords: 'about gtm quest, gtm agency, go-to-market agency, about us',
}

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              About GTM Quest
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're a leading GTM agency helping UK companies launch and scale their products faster.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To democratize go-to-market expertise. We believe that every company deserves access to world-class GTM strategy and tools - regardless of budget or team size. That's why we've built free, AI-powered tools that give startups access to strategies used by Fortune 500 companies.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why We Built GTM Quest</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  85% of product launches fail - and most of those failures have nothing to do with the product itself. They fail because of poor go-to-market execution.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Traditional GTM agencies are expensive and slow. We saw an opportunity to use AI and automation to make expert GTM guidance accessible to everyone. That's why we created GTM Quest - to help companies build winning GTM strategies in minutes instead of weeks.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">🤖 AI-Powered Tools</h3>
                    <p className="text-gray-700">
                      Free GTM strategy generator, calculators, and planning tools powered by advanced AI.
                    </p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">📚 Expert Guides</h3>
                    <p className="text-gray-700">
                      Comprehensive, free guides on GTM strategy, product launches, and SaaS growth.
                    </p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">🎯 Hands-On Consulting</h3>
                    <p className="text-gray-700">
                      For companies that need deeper support, our team provides hands-on GTM consulting.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proven Track Record</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 flex items-start gap-4">
                    <div className="text-3xl font-black text-amber-600">1000+</div>
                    <div>
                      <h3 className="font-bold text-gray-900">Product Launches</h3>
                      <p className="text-gray-700">Our frameworks have guided successful launches across industries</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 flex items-start gap-4">
                    <div className="text-3xl font-black text-amber-600">95%</div>
                    <div>
                      <h3 className="font-bold text-gray-900">Time Saved</h3>
                      <p className="text-gray-700">Companies save 95% of GTM planning time using our AI tools</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
                <h3 className="font-bold text-gray-900 mb-3">Ready to Build Your GTM Strategy?</h3>
                <p className="text-gray-700 mb-6">
                  Start with our free GTM Strategy Generator, then use our tools and guides to execute your plan.
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
