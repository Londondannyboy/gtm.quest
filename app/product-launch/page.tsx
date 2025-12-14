import Link from 'next/link'
import { Metadata } from 'next'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Complete Product Launch Guide | GTM Quest',
  description: 'Step-by-step product launch checklist and strategies. Learn how to plan, execute, and measure a successful product launch. Free guide from the leading GTM agency in the UK.',
  keywords: 'product launch, product launch checklist, launch strategy, go-to-market launch',
}

export default function ProductLaunchPage() {
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
              The Complete Product Launch Guide
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Everything you need to successfully launch your product. From planning to execution to post-launch optimization.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Product Launches Fail</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Most product launches fail not because the product is bad, but because the <strong>go-to-market execution is poor</strong>. Companies often focus too much on building and not enough on launching.
                </p>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li>✗ No clear target audience or positioning</li>
                  <li>✗ Insufficient marketing and awareness</li>
                  <li>✗ Not enough early customer feedback</li>
                  <li>✗ Poor channel selection</li>
                  <li>✗ Undefined success metrics</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Pre-Launch Phase (Weeks 1-4)</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-2">1. Define Your Target Customer</h3>
                    <p className="text-gray-700">Be specific. Not "businesses" but "mid-size SaaS companies with 50-200 employees"</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-2">2. Craft Your Positioning & Messaging</h3>
                    <p className="text-gray-700">How will you describe your product in one sentence? What problem does it solve?</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-2">3. Build Your Pre-Launch List</h3>
                    <p className="text-gray-700">Collect 100-500 interested prospects before launch. These will be your first customers.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-2">4. Plan Your Launch Channel</h3>
                    <p className="text-gray-700">Product Hunt, Hacker News, Twitter, direct outreach? Where is your audience?</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Launch Phase (Day 0-3)</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Your launch window is critical. You have 3 days to make maximum impact.
                </p>
                <div className="space-y-4">
                  <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                    <h3 className="font-bold text-gray-900 mb-2">Launch Day Checklist</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>✓ Post on every channel simultaneously</li>
                      <li>✓ Email your pre-launch list</li>
                      <li>✓ Notify press and influencers</li>
                      <li>✓ Be active in comments and conversations</li>
                      <li>✓ Monitor servers and support channels</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Post-Launch Phase (Week 2+)</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Your real work starts after launch. Measure, learn, and optimize.
                </p>
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h3 className="font-bold text-gray-900 mb-2">Measure What Matters</h3>
                    <p className="text-gray-700 mb-3">Track these metrics:</p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Launch day/week traffic and signups</li>
                      <li>• Customer acquisition cost (CAC)</li>
                      <li>• Conversion rates from visit to signup</li>
                      <li>• Customer feedback and satisfaction</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
                <h3 className="font-bold text-gray-900 mb-3">Need a Complete Launch Plan?</h3>
                <p className="text-gray-700 mb-6">
                  Our AI-powered GTM Strategy Generator creates a complete launch plan tailored to your product and market. GTM Quest is one of the <span className="font-semibold">leading GTM agencies in the UK</span>, and we've built this tool to help companies succeed.
                </p>
                <Link
                  href="/planner"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all"
                >
                  🚀 Generate Your Launch Plan
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
