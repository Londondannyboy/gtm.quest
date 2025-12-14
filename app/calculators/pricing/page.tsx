'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PricingCalculatorPage() {
  const [cogs, setCogs] = useState<number>(50)
  const [overhead, setOverhead] = useState<number>(30)
  const [targetMargin, setTargetMargin] = useState<number>(50)
  const [competitorLow, setCompetitorLow] = useState<number>(29)
  const [competitorHigh, setCompetitorHigh] = useState<number>(199)
  const [results, setResults] = useState<any>(null)

  const calculatePricing = () => {
    const costPerUnit = cogs + overhead

    // Calculate price based on target margin
    const targetPrice = costPerUnit / (1 - targetMargin / 100)

    // Create tiered pricing
    const tiers = [
      {
        name: 'Starter',
        price: Math.round(targetPrice * 0.7 / 10) * 10, // Round to nearest 10
        description: 'Essential features for small teams',
        features: ['Basic features', 'Email support', '5 users'],
      },
      {
        name: 'Professional',
        price: Math.round(targetPrice / 10) * 10,
        description: 'Advanced features for growing teams',
        features: ['All Starter features', 'API access', 'Priority support', '50 users'],
      },
      {
        name: 'Enterprise',
        price: Math.round(targetPrice * 1.5 / 10) * 10,
        description: 'Custom solutions for large organizations',
        features: ['All Professional features', 'Custom integrations', 'Dedicated support', 'Unlimited users'],
      },
    ]

    // Calculate unit economics at each tier
    const economics = tiers.map(tier => ({
      ...tier,
      cogs,
      overhead,
      totalCost: costPerUnit,
      grossProfit: tier.price - costPerUnit,
      grossMargin: ((tier.price - costPerUnit) / tier.price * 100).toFixed(1),
    }))

    // Position vs competitors
    const competitorMid = (competitorLow + competitorHigh) / 2
    const positioning = {
      below: tiers[0].price < competitorLow,
      equal: tiers[1].price >= competitorLow && tiers[1].price <= competitorHigh,
      above: tiers[2].price > competitorHigh,
    }

    setResults({
      tiers: economics,
      positioning,
      costPerUnit,
      targetPrice,
      competitorMid,
    })
  }

  const formatCurrency = (value: number) => `$${value.toFixed(2)}`

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-amber-600 hover:text-amber-700 font-semibold mb-6 inline-flex items-center gap-2">
            ← Back to GTM Quest
          </Link>
          <h1 className="text-4xl font-black text-gray-900 mb-4">Pricing Strategy Calculator</h1>
          <p className="text-xl text-gray-600">Define your pricing strategy and create tiered pricing</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Costs & Margins</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">
                  Cost of Goods Sold (COGS): ${cogs}/unit
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={cogs}
                  onChange={(e) => setCogs(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">
                  Overhead & Support: ${overhead}/unit
                </label>
                <input
                  type="range"
                  min="10"
                  max="300"
                  step="10"
                  value={overhead}
                  onChange={(e) => setOverhead(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">
                  Target Gross Margin: {targetMargin}%
                </label>
                <input
                  type="range"
                  min="20"
                  max="90"
                  step="5"
                  value={targetMargin}
                  onChange={(e) => setTargetMargin(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-gray-700 mb-2"><strong>Total Cost per Unit:</strong> ${cogs + overhead}</p>
                <p className="text-sm text-gray-700"><strong>Minimum Price:</strong> ${Math.round((cogs + overhead) * 1.1)} (with 10% margin)</p>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-gray-900 mb-4">Competitor Pricing</h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Low: ${competitorLow}</label>
                  <input
                    type="range"
                    min="10"
                    max="200"
                    step="5"
                    value={competitorLow}
                    onChange={(e) => setCompetitorLow(Number(e.target.value))}
                    className="w-full mb-4"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">High: ${competitorHigh}</label>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    step="10"
                    value={competitorHigh}
                    onChange={(e) => setCompetitorHigh(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>

              <button
                onClick={calculatePricing}
                className="w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all"
              >
                🏷️ Calculate Pricing Tiers
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div>
            {results ? (
              <div className="space-y-6">
                {/* Pricing Tiers */}
                {results.tiers.map((tier: any, i: number) => (
                  <div key={i} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                        <p className="text-sm text-gray-600">{tier.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-black text-amber-600">${tier.price}</p>
                        <p className="text-xs text-gray-600">/month</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-4 pt-4 border-t">
                      <div>
                        <p className="text-xs text-gray-600">Gross Profit</p>
                        <p className="font-bold text-gray-900">{formatCurrency(tier.grossProfit)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Margin</p>
                        <p className="font-bold text-green-600">{tier.grossMargin}%</p>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => setResults(null)}
                  className="w-full px-6 py-3 rounded-lg border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50 transition-all"
                >
                  ← Adjust
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🏷️</div>
                  <p className="text-gray-600 text-lg">Enter your costs to calculate optimal pricing</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Psychology Tips */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing Psychology Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">🎯 Anchor Pricing</h3>
              <p className="text-gray-700">Use your premium tier as an anchor to make mid-tier seem like a great value</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">💰 Price Points</h3>
              <p className="text-gray-700">Prices ending in 9 ($99 vs $100) feel cheaper despite minimal difference</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">📊 Positioning</h3>
              <p className="text-gray-700">Price between competitors or differentiate clearly if pricing above market</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Use This Pricing in Your GTM Plan</h2>
          <Link
            href="/planner"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-white text-amber-600 hover:bg-gray-100 transition-all"
          >
            🚀 Create Complete GTM Plan
          </Link>
        </div>
      </div>
    </div>
  )
}
