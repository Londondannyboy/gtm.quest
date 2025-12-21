import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fractional Ownership Guide 2025 | What It Is & How It Works',
  description: 'Complete guide to fractional ownership. Learn how shared ownership works for property, aircraft, art, and more. Pros, cons, costs, and what to consider.',
  keywords: 'fractional ownership, fractional ownership property, what is fractional ownership, fractional ownership uk, shared ownership, fractional real estate',
  alternates: {
    canonical: 'https://gtm.quest/fractional-ownership-guide',
  },
}

export default function FractionalOwnershipGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Fractional Ownership Guide</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Fractional Ownership: The Complete Guide for 2025
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Everything you need to know about fractional ownership - from luxury properties and aircraft to art and collectibles. Learn how shared ownership is changing how people access premium assets.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              12 min read
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Updated December 2024
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-16 z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="font-medium text-gray-500">Jump to:</span>
            <a href="#what-is" className="text-purple-600 hover:text-purple-700">What is it?</a>
            <a href="#how-it-works" className="text-purple-600 hover:text-purple-700">How it works</a>
            <a href="#types" className="text-purple-600 hover:text-purple-700">Types</a>
            <a href="#pros-cons" className="text-purple-600 hover:text-purple-700">Pros & Cons</a>
            <a href="#costs" className="text-purple-600 hover:text-purple-700">Costs</a>
            <a href="#vs-timeshare" className="text-purple-600 hover:text-purple-700">vs Timeshare</a>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">

            {/* What is Fractional Ownership */}
            <section id="what-is" className="mb-16">
              <h2 className="text-3xl font-black text-gray-900 mb-6">What is Fractional Ownership?</h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong>Fractional ownership</strong> is a method of shared asset ownership where multiple parties each hold a percentage stake in a high-value asset. Unlike renting or leasing, fractional owners have genuine equity in the asset and share both the costs and benefits proportionally.
              </p>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100 mb-8">
                <h3 className="font-bold text-purple-900 mb-2">Simple Definition</h3>
                <p className="text-purple-800">
                  Fractional ownership = You own a real share of an asset (typically 1/4 to 1/12), with deeded rights, rather than just paying for access or usage time.
                </p>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The concept has existed for decades in aviation (jet cards and fractional aircraft ownership) but has exploded across industries in recent years. Today you can fractionally own:
              </p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>Vacation properties</strong> - Second homes, ski chalets, beach houses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>Aircraft</strong> - Private jets through programs like NetJets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>Yachts and boats</strong> - Luxury vessels with shared maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>Art and collectibles</strong> - Fine art, classic cars, rare wines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>Investment properties</strong> - Commercial real estate via REITs</span>
                </li>
              </ul>
            </section>

            {/* How it Works */}
            <section id="how-it-works" className="mb-16">
              <h2 className="text-3xl font-black text-gray-900 mb-6">How Fractional Ownership Works</h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The mechanics vary by asset type, but the core structure is similar:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl font-black text-gray-900 mb-2">1. Purchase</div>
                  <p className="text-gray-600">
                    You buy a fraction (often 1/4, 1/8, or 1/12) of the asset. This is a real ownership stake, typically with a deed or certificate.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl font-black text-gray-900 mb-2">2. Usage Rights</div>
                  <p className="text-gray-600">
                    Your ownership percentage determines your usage time. A 1/4 share typically means 13 weeks per year, scheduled via a rotation system.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl font-black text-gray-900 mb-2">3. Shared Costs</div>
                  <p className="text-gray-600">
                    Maintenance, insurance, management fees, and property taxes are split among owners proportionally.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl font-black text-gray-900 mb-2">4. Exit Options</div>
                  <p className="text-gray-600">
                    You can typically sell your share back to the management company, to other owners, or on the open market.
                  </p>
                </div>
              </div>
            </section>

            {/* Types */}
            <section id="types" className="mb-16">
              <h2 className="text-3xl font-black text-gray-900 mb-6">Types of Fractional Ownership</h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Fractional Ownership</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The most common form. Multiple buyers purchase shares in a vacation property, typically through a developer or management company. Each owner has deeded rights to their fraction.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-8">
                <h4 className="font-bold text-blue-900 mb-2">UK Property Examples</h4>
                <p className="text-blue-800">
                  Companies like The Hideaways Club offer fractional ownership of luxury UK properties from £80,000 per share, including properties in the Cotswolds, Lake District, and Cornwall.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Aircraft Fractional Ownership</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Pioneered by NetJets in 1986, fractional jet ownership lets you buy a share of a private aircraft. Your share entitles you to a set number of flight hours annually, with access to a fleet of similar aircraft.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Art & Collectibles</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Platforms like Masterworks and Showpiece allow fractional investment in fine art, classic cars, and collectibles. These are typically structured as securities, making them more like investments than ownership-for-use.
              </p>
            </section>

            {/* Pros and Cons */}
            <section id="pros-cons" className="mb-16">
              <h2 className="text-3xl font-black text-gray-900 mb-6">Pros and Cons of Fractional Ownership</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advantages
                  </h3>
                  <ul className="space-y-3 text-green-800">
                    <li><strong>Lower entry cost</strong> - Access luxury assets at a fraction of full price</li>
                    <li><strong>Reduced hassle</strong> - Management company handles maintenance</li>
                    <li><strong>Real ownership</strong> - You have equity that can appreciate</li>
                    <li><strong>Shared expenses</strong> - Split ongoing costs with other owners</li>
                    <li><strong>Diversification</strong> - Own multiple properties instead of one</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Disadvantages
                  </h3>
                  <ul className="space-y-3 text-red-800">
                    <li><strong>Limited flexibility</strong> - Usage time is scheduled, not on-demand</li>
                    <li><strong>Shared decision-making</strong> - Major decisions require consensus</li>
                    <li><strong>Resale challenges</strong> - May be harder to sell than full ownership</li>
                    <li><strong>Ongoing fees</strong> - Management fees add to total cost</li>
                    <li><strong>Less control</strong> - Can't modify or personalize freely</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Costs */}
            <section id="costs" className="mb-16">
              <h2 className="text-3xl font-black text-gray-900 mb-6">Fractional Ownership Costs</h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Costs vary significantly by asset type and fraction size. Here are typical ranges in the UK market:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 px-4 py-3 text-left font-bold">Asset Type</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-bold">Typical Share Cost</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-bold">Annual Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Vacation Property (1/8 share)</td>
                      <td className="border border-gray-200 px-4 py-3">£80,000 - £300,000</td>
                      <td className="border border-gray-200 px-4 py-3">£5,000 - £15,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Private Jet (1/16 share)</td>
                      <td className="border border-gray-200 px-4 py-3">£400,000 - £1,500,000</td>
                      <td className="border border-gray-200 px-4 py-3">£50,000 - £200,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Yacht (1/10 share)</td>
                      <td className="border border-gray-200 px-4 py-3">£50,000 - £500,000</td>
                      <td className="border border-gray-200 px-4 py-3">£10,000 - £50,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Fine Art (fractional shares)</td>
                      <td className="border border-gray-200 px-4 py-3">£500 - £50,000</td>
                      <td className="border border-gray-200 px-4 py-3">1-2% of value</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* vs Timeshare */}
            <section id="vs-timeshare" className="mb-16">
              <h2 className="text-3xl font-black text-gray-900 mb-6">Fractional Ownership vs Timeshare</h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                While often confused, fractional ownership and timeshares are fundamentally different:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 px-4 py-3 text-left font-bold">Aspect</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-bold">Fractional Ownership</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-bold">Timeshare</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">What you own</td>
                      <td className="border border-gray-200 px-4 py-3">Actual equity stake (deed)</td>
                      <td className="border border-gray-200 px-4 py-3">Right to use time only</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">Appreciation</td>
                      <td className="border border-gray-200 px-4 py-3">You benefit from value increase</td>
                      <td className="border border-gray-200 px-4 py-3">No ownership upside</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">Typical owners</td>
                      <td className="border border-gray-200 px-4 py-3">4-12 per property</td>
                      <td className="border border-gray-200 px-4 py-3">52+ (one per week)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">Exit strategy</td>
                      <td className="border border-gray-200 px-4 py-3">Can sell share on market</td>
                      <td className="border border-gray-200 px-4 py-3">Often very difficult to resell</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">Property quality</td>
                      <td className="border border-gray-200 px-4 py-3">Usually luxury tier</td>
                      <td className="border border-gray-200 px-4 py-3">Varies widely</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="font-bold text-amber-900 mb-2">Key Distinction</h3>
                <p className="text-amber-800">
                  Fractional ownership means you own a piece of the actual asset. Timeshares typically only give you the right to use a property for a specific period each year - you don't own any part of the property itself.
                </p>
              </div>
            </section>

            {/* For Executives CTA */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Thinking About Fractional Work?</h2>
                <p className="text-purple-100 mb-6">
                  Just as fractional ownership lets you access premium assets without full commitment, fractional executive roles let companies access senior expertise on a part-time basis. Explore opportunities as a fractional CFO, CMO, CTO and more.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/people"
                    className="inline-flex items-center px-6 py-3 bg-white text-purple-700 font-bold rounded-lg hover:bg-purple-50 transition-all"
                  >
                    Browse Executives →
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center px-6 py-3 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition-all"
                  >
                    How Fractional Hiring Works
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </article>

      {/* Related Content */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/fractional-cfo-services" className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Fractional CFO Guide</h3>
              <p className="text-gray-600 text-sm">Everything you need to know about hiring a fractional CFO</p>
            </Link>
            <Link href="/fractional-cmo-services" className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Fractional CMO Guide</h3>
              <p className="text-gray-600 text-sm">Complete guide to fractional marketing leadership</p>
            </Link>
            <Link href="/how-it-works" className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">How It Works</h3>
              <p className="text-gray-600 text-sm">Learn how to hire fractional executives</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
