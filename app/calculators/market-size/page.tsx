'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MarketSizeCalculatorPage() {
  const [industry, setIndustry] = useState<string>('')
  const [geography, setGeography] = useState<string>('')
  const [targetSegment, setTargetSegment] = useState<string>('')
  const [pricePoint, setPricePoint] = useState<number>(99)
  const [conversionRate, setConversionRate] = useState<number>(2)
  const [penetrationRate, setPenetrationRate] = useState<number>(10)
  const [results, setResults] = useState<any>(null)

  // Market data based on industry
  const marketData: Record<string, Record<string, number>> = {
    saas: {
      global: 600000000000, // $600B
      us: 250000000000, // $250B
      uk: 15000000000, // $15B
      europe: 100000000000, // $100B
    },
    ecommerce: {
      global: 5000000000000, // $5T
      us: 1500000000000, // $1.5T
      uk: 150000000000, // $150B
      europe: 800000000000, // $800B
    },
    fintech: {
      global: 500000000000, // $500B
      us: 200000000000, // $200B
      uk: 15000000000, // $15B
      europe: 80000000000, // $80B
    },
    healthtech: {
      global: 500000000000, // $500B
      us: 200000000000, // $200B
      uk: 12000000000, // $12B
      europe: 80000000000, // $80B
    },
    'b2b-services': {
      global: 2000000000000, // $2T
      us: 800000000000, // $800B
      uk: 50000000000, // $50B
      europe: 400000000000, // $400B
    },
  }

  const segmentMultipliers: Record<string, number> = {
    'enterprise-1000+': 0.25,
    'mid-market-100-999': 0.4,
    'smb-10-99': 0.2,
    'startup-1-9': 0.08,
    'consumer': 1.0,
  }

  const calculateMarketSize = () => {
    if (!industry || !geography || !targetSegment) {
      alert('Please select all fields')
      return
    }

    const tam = marketData[industry]?.[geography] || 0
    const segmentFactor = segmentMultipliers[targetSegment] || 0.3
    const sam = tam * segmentFactor

    // SOM based on conversion and penetration
    const som = (sam * (conversionRate / 100) * (penetrationRate / 100))

    // Calculate customer metrics
    const avgRevenue = pricePoint * 12 // Annual per customer
    const potentialCustomers = Math.floor(sam / avgRevenue)
    const achievableCustomers = Math.floor(som / avgRevenue)

    setResults({
      tam,
      sam,
      som,
      potentialCustomers,
      achievableCustomers,
      avgRevenuePerCustomer: avgRevenue,
      pricePoint,
    })
  }

  const formatCurrency = (value: number) => {
    if (value >= 1000000000000) return `$${(value / 1000000000000).toFixed(1)}T`
    if (value >= 1000000000) return `$${(value / 1000000000).toFixed(1)}B`
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`
    return `$${value.toFixed(0)}`
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-amber-600 hover:text-amber-700 font-semibold mb-6 inline-flex items-center gap-2">
            ← Back to GTM Quest
          </Link>
          <h1 className="text-4xl font-black text-gray-900 mb-4">TAM/SAM/SOM Calculator</h1>
          <p className="text-xl text-gray-600">Understand the size of your addressable market</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Parameters</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Industry</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                >
                  <option value="">Select your industry</option>
                  <option value="saas">SaaS</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="fintech">FinTech</option>
                  <option value="healthtech">HealthTech</option>
                  <option value="b2b-services">B2B Services</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Geography</label>
                <select
                  value={geography}
                  onChange={(e) => setGeography(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                >
                  <option value="">Select geography</option>
                  <option value="global">Global</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="europe">Europe</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Target Customer Segment</label>
                <select
                  value={targetSegment}
                  onChange={(e) => setTargetSegment(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                >
                  <option value="">Select segment</option>
                  <option value="enterprise-1000+">Enterprise (1000+ employees)</option>
                  <option value="mid-market-100-999">Mid-Market (100-999 employees)</option>
                  <option value="smb-10-99">SMB (10-99 employees)</option>
                  <option value="startup-1-9">Startup (1-9 employees)</option>
                  <option value="consumer">Consumer</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">
                  Annual Price Point: ${pricePoint.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="10"
                  max="10000"
                  step="10"
                  value={pricePoint}
                  onChange={(e) => setPricePoint(Number(e.target.value))}
                  className="w-full"
                />
                <p className="text-sm text-gray-600 mt-2">Monthly cost: ${(pricePoint / 12).toFixed(2)}</p>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">
                  Conversion Rate: {conversionRate}%
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="20"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full"
                />
                <p className="text-sm text-gray-600 mt-2">% of addressable market you can realistically convert</p>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">
                  Market Penetration: {penetrationRate}%
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                  value={penetrationRate}
                  onChange={(e) => setPenetrationRate(Number(e.target.value))}
                  className="w-full"
                />
                <p className="text-sm text-gray-600 mt-2">% of addressable market you can penetrate</p>
              </div>

              <button
                onClick={calculateMarketSize}
                className="w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all"
              >
                📊 Calculate Market Size
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div>
            {results ? (
              <div className="space-y-6">
                {/* TAM Card */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
                  <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-2">TAM</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Total Addressable Market</h3>
                  <p className="text-4xl font-black text-blue-600 mb-4">{formatCurrency(results.tam)}</p>
                  <p className="text-sm text-gray-700">The total market opportunity if you captured 100% of {geography}</p>
                </div>

                {/* SAM Card */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl p-8 border border-amber-200">
                  <p className="text-amber-600 text-sm font-semibold uppercase tracking-wide mb-2">SAM</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Serviceable Addressable Market</h3>
                  <p className="text-4xl font-black text-amber-600 mb-4">{formatCurrency(results.sam)}</p>
                  <p className="text-sm text-gray-700">The portion of TAM you can realistically serve with your product/strategy</p>
                </div>

                {/* SOM Card */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 border border-green-200">
                  <p className="text-green-600 text-sm font-semibold uppercase tracking-wide mb-2">SOM</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Serviceable Obtainable Market</h3>
                  <p className="text-4xl font-black text-green-600 mb-4">{formatCurrency(results.som)}</p>
                  <p className="text-sm text-gray-700">Your realistic revenue target in the next 3-5 years</p>
                </div>

                {/* Customer Metrics */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h4 className="font-bold text-gray-900 mb-4">Customer Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b">
                      <span className="text-gray-700">Potential Customers (SAM)</span>
                      <span className="font-bold text-gray-900">{results.potentialCustomers.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b">
                      <span className="text-gray-700">Achievable Customers (SOM)</span>
                      <span className="font-bold text-gray-900">{results.achievableCustomers.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Annual Revenue per Customer</span>
                      <span className="font-bold text-gray-900">${results.avgRevenuePerCustomer.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <button
                    onClick={() => setResults(null)}
                    className="flex-1 px-6 py-3 rounded-lg border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50 transition-all"
                  >
                    ← Adjust
                  </button>
                  <Link
                    href="/planner"
                    className="flex-1 px-6 py-3 rounded-lg bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-all text-center"
                  >
                    Refine Plan →
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-600 text-lg">Fill in your market parameters to calculate TAM/SAM/SOM</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Educational Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Market Size</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">TAM (Total Addressable Market)</h3>
              <p className="text-gray-700 leading-relaxed">
                The total annual revenue opportunity available if you could capture 100% of a given market. TAM is useful for understanding the scale of the opportunity.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">SAM (Serviceable Available Market)</h3>
              <p className="text-gray-700 leading-relaxed">
                The portion of TAM that you can realistically reach with your products and services. SAM focuses on your specific customer segment and value proposition.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">SOM (Serviceable Obtainable Market)</h3>
              <p className="text-gray-700 leading-relaxed">
                Your realistic revenue target based on conversion and penetration rates. SOM is your actionable goal for the next 3-5 years.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-gray-50 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Q: How accurate is this calculator?</h3>
              <p className="text-gray-700">
                This calculator provides realistic estimates based on industry benchmarks. However, your specific market size depends on many factors including competitive landscape, pricing, and go-to-market strategy. Use these numbers as a guide, not gospel.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Q: Should I use TAM, SAM, or SOM for my business plan?</h3>
              <p className="text-gray-700">
                Use SAM for your business plan (realistic addressable market), SOM for your first 3-5 year goals, and TAM to understand the maximum opportunity. Investors typically focus on SAM and SOM.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Q: How do I improve my conversion rate assumption?</h3>
              <p className="text-gray-700">
                Test your product with real customers, analyze competitor conversion rates, and look at historical data. Start conservative (1-2%), then increase as you optimize. Most consumer products convert at 2-5%, B2B at 0.5-3%.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Q: Is this calculator free?</h3>
              <p className="text-gray-700">
                Yes! This calculator is completely free. As a leading <Link href="/" className="text-amber-600 hover:text-amber-700 font-semibold">GTM agency</Link>, we provide free tools to help companies succeed with their go-to-market strategy.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Use This Data in Your GTM Plan</h2>
          <p className="text-lg mb-6">
            Now that you understand your market size, use this calculator with our GTM Strategy Generator to create a data-driven go-to-market plan.
          </p>
          <p className="text-sm mb-6">
            We're one of the <span className="font-semibold">leading GTM agencies</span> helping UK companies understand and penetrate their markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/planner"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-white text-amber-600 hover:bg-gray-100 transition-all"
            >
              🚀 Create GTM Plan
            </Link>
            <Link
              href="/chat"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-white/20 backdrop-blur text-white hover:bg-white/30 transition-all"
            >
              💬 Chat with AI
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
