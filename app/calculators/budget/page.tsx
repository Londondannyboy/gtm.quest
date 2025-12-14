'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function BudgetCalculatorPage() {
  const [totalBudget, setTotalBudget] = useState<number>(50000)
  const [stage, setStage] = useState<string>('launch')
  const [approach, setApproach] = useState<string>('hybrid')
  const [marketType, setMarketType] = useState<string>('b2b')
  const [timeline, setTimeline] = useState<string>('6')
  const [results, setResults] = useState<any>(null)

  // Budget allocation templates based on stage and approach
  const allocationTemplates: Record<string, Record<string, Record<string, number>>> = {
    'pre-launch': {
      'product-led': {
        'Content Marketing': 25,
        'Paid Ads': 15,
        'Sales & Team': 10,
        'Tools & Software': 20,
        'Events & PR': 10,
        'Agency & Consultants': 20,
      },
      'sales-led': {
        'Content Marketing': 15,
        'Paid Ads': 10,
        'Sales & Team': 40,
        'Tools & Software': 15,
        'Events & PR': 10,
        'Agency & Consultants': 10,
      },
      'hybrid': {
        'Content Marketing': 20,
        'Paid Ads': 12,
        'Sales & Team': 25,
        'Tools & Software': 18,
        'Events & PR': 10,
        'Agency & Consultants': 15,
      },
    },
    'launch': {
      'product-led': {
        'Content Marketing': 30,
        'Paid Ads': 25,
        'Sales & Team': 10,
        'Tools & Software': 15,
        'Events & PR': 15,
        'Agency & Consultants': 5,
      },
      'sales-led': {
        'Content Marketing': 15,
        'Paid Ads': 10,
        'Sales & Team': 50,
        'Tools & Software': 10,
        'Events & PR': 10,
        'Agency & Consultants': 5,
      },
      'hybrid': {
        'Content Marketing': 25,
        'Paid Ads': 18,
        'Sales & Team': 30,
        'Tools & Software': 12,
        'Events & PR': 10,
        'Agency & Consultants': 5,
      },
    },
    'growth': {
      'product-led': {
        'Content Marketing': 35,
        'Paid Ads': 30,
        'Sales & Team': 10,
        'Tools & Software': 10,
        'Events & PR': 10,
        'Agency & Consultants': 5,
      },
      'sales-led': {
        'Content Marketing': 15,
        'Paid Ads': 15,
        'Sales & Team': 50,
        'Tools & Software': 10,
        'Events & PR': 5,
        'Agency & Consultants': 5,
      },
      'hybrid': {
        'Content Marketing': 28,
        'Paid Ads': 22,
        'Sales & Team': 30,
        'Tools & Software': 10,
        'Events & PR': 7,
        'Agency & Consultants': 3,
      },
    },
  }

  const calculateBudgetAllocation = () => {
    const template = allocationTemplates[stage]?.[approach] || allocationTemplates['launch']['hybrid']

    const allocation = Object.entries(template).map(([channel, percentage]) => ({
      channel,
      percentage,
      amount: (totalBudget * percentage) / 100,
    }))

    // Calculate monthly spend based on timeline
    const monthlyBudget = totalBudget / parseInt(timeline)

    setResults({
      allocation,
      totalBudget,
      monthlyBudget,
      timeline: parseInt(timeline),
      stage,
      approach,
    })
  }

  const formatCurrency = (value: number) => `$${value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-amber-600 hover:text-amber-700 font-semibold mb-6 inline-flex items-center gap-2">
            ← Back to GTM Quest
          </Link>
          <h1 className="text-4xl font-black text-gray-900 mb-4">GTM Budget Allocator</h1>
          <p className="text-xl text-gray-600">Optimize your go-to-market budget across channels</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Budget Plan</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">
                  Total Budget: {formatCurrency(totalBudget)}
                </label>
                <input
                  type="range"
                  min="5000"
                  max="500000"
                  step="5000"
                  value={totalBudget}
                  onChange={(e) => setTotalBudget(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Company Stage</label>
                <select
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                >
                  <option value="pre-launch">Pre-Launch</option>
                  <option value="launch">Launch</option>
                  <option value="growth">Growth</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">GTM Approach</label>
                <select
                  value={approach}
                  onChange={(e) => setApproach(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                >
                  <option value="product-led">Product-Led Growth</option>
                  <option value="sales-led">Sales-Led</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Timeline (months)</label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                >
                  <option value="3">3 months</option>
                  <option value="6">6 months</option>
                  <option value="12">12 months</option>
                </select>
              </div>

              <button
                onClick={calculateBudgetAllocation}
                className="w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all"
              >
                💰 Calculate Allocation
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div>
            {results ? (
              <div className="space-y-6">
                {/* Budget Summary */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="font-bold text-gray-900 mb-4">Budget Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-gray-700">Total Budget ({results.timeline}m)</span>
                      <span className="font-bold text-gray-900">{formatCurrency(results.totalBudget)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Monthly Average</span>
                      <span className="font-bold text-amber-600">{formatCurrency(results.monthlyBudget)}</span>
                    </div>
                  </div>
                </div>

                {/* Channel Allocation */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="font-bold text-gray-900 mb-4">Recommended Channel Allocation</h3>
                  <div className="space-y-4">
                    {results.allocation.map((item: any, i: number) => (
                      <div key={i}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 font-semibold">{item.channel}</span>
                          <span className="font-bold text-amber-600">{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{formatCurrency(item.amount)}</p>
                      </div>
                    ))}
                  </div>
                </div>

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
                  <div className="text-6xl mb-4">💰</div>
                  <p className="text-gray-600 text-lg">Configure your budget to see recommended allocation</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Educational Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Budget Tips</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-4">
              <span className="text-amber-600 font-bold">•</span>
              <span><strong>Product-Led</strong> focuses on content and paid ads to drive organic adoption</span>
            </li>
            <li className="flex gap-4">
              <span className="text-amber-600 font-bold">•</span>
              <span><strong>Sales-Led</strong> invests heavily in sales team and targeted outreach</span>
            </li>
            <li className="flex gap-4">
              <span className="text-amber-600 font-bold">•</span>
              <span><strong>Hybrid</strong> balances both channels for maximum flexibility</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Use This Budget in Your GTM Plan</h2>
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
