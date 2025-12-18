'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ROICalculatorPage() {
  const [launchBudget, setLaunchBudget] = useState<number>(50000)
  const [expectedTraffic, setExpectedTraffic] = useState<number>(10000)
  const [conversionRate, setConversionRate] = useState<number>(2)
  const [avgPrice, setAvgPrice] = useState<number>(99)
  const [ltv, setLtv] = useState<number>(3000)
  const [results, setResults] = useState<any>(null)

  const calculateROI = () => {
    // Calculate customers
    const signups = Math.floor((expectedTraffic * conversionRate) / 100)
    const monthlyRevenue = signups * avgPrice

    // Annualized
    const year1Revenue = monthlyRevenue * 12
    const year1Profit = year1Revenue - launchBudget
    const paybackMonths = launchBudget / (monthlyRevenue || 1)

    // Customer metrics
    const totalLTV = signups * ltv
    const cacTarget = launchBudget / (signups || 1)
    const ltv_cac_ratio = Math.round((ltv / (cacTarget || 1)) * 10) / 10

    // Projections
    const projections = [
      {
        month: 'Month 1',
        customers: Math.round(signups * 0.2),
        revenue: Math.round(monthlyRevenue * 0.2),
        cumulativeRevenue: Math.round(monthlyRevenue * 0.2),
      },
      {
        month: 'Month 3',
        customers: Math.round(signups * 0.6),
        revenue: Math.round(monthlyRevenue * 0.6),
        cumulativeRevenue: Math.round(monthlyRevenue * 1.8),
      },
      {
        month: 'Month 6',
        customers: Math.round(signups),
        revenue: Math.round(monthlyRevenue),
        cumulativeRevenue: Math.round(monthlyRevenue * 6),
      },
    ]

    // Sensitivity analysis
    const scenarios = [
      {
        name: 'Pessimistic (50% of projections)',
        multiplier: 0.5,
      },
      {
        name: 'Expected',
        multiplier: 1,
      },
      {
        name: 'Optimistic (150% of projections)',
        multiplier: 1.5,
      },
    ]

    setResults({
      signups,
      monthlyRevenue,
      year1Revenue,
      year1Profit,
      paybackMonths,
      totalLTV,
      cacTarget,
      ltv_cac_ratio,
      projections,
      scenarios: scenarios.map(s => ({
        ...s,
        revenue: Math.round(year1Revenue * s.multiplier),
        profit: Math.round(year1Revenue * s.multiplier - launchBudget),
        roi: Math.round((((year1Revenue * s.multiplier - launchBudget) / launchBudget) * 100 * s.multiplier)),
      })),
    })
  }

  const formatCurrency = (value: number) => `$${value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold mb-6 inline-flex items-center gap-2">
            ← Back to GTM Quest
          </Link>
          <h1 className="text-4xl font-black text-gray-900 mb-4">Launch ROI Estimator</h1>
          <p className="text-xl text-gray-600">Project your launch success and break-even timeline</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Launch Assumptions</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">
                  Launch Budget: {formatCurrency(launchBudget)}
                </label>
                <input
                  type="range"
                  min="5000"
                  max="500000"
                  step="5000"
                  value={launchBudget}
                  onChange={(e) => setLaunchBudget(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">
                  Expected Traffic (first month): {expectedTraffic.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={expectedTraffic}
                  onChange={(e) => setExpectedTraffic(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">
                  Conversion Rate: {conversionRate}%
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="20"
                  step="0.5"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">
                  Average Price Per Customer: ${avgPrice}/month
                </label>
                <input
                  type="range"
                  min="9"
                  max="999"
                  step="10"
                  value={avgPrice}
                  onChange={(e) => setAvgPrice(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">
                  Customer Lifetime Value: {formatCurrency(ltv)}
                </label>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={ltv}
                  onChange={(e) => setLtv(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <button
                onClick={calculateROI}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-600 transition-all"
              >
                📈 Calculate ROI & Projections
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div>
            {results ? (
              <div className="space-y-6">
                {/* Key Metrics */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Launch Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-gray-700">Expected Customers</span>
                      <span className="font-bold text-gray-900">{results.signups.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-gray-700">Monthly Revenue</span>
                      <span className="font-bold text-green-600">{formatCurrency(results.monthlyRevenue)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Break-Even Timeline</span>
                      <span className={`font-bold ${results.paybackMonths < 12 ? 'text-green-600' : 'text-blue-600'}`}>
                        {results.paybackMonths < 1 ? '<1 month' : `${Math.round(results.paybackMonths)} months`}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Year 1 Projection */}
                <div className="bg-green-50 rounded-xl shadow-lg p-6 border border-green-200">
                  <h3 className="font-bold text-gray-900 mb-4">Year 1 Projection</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Revenue</span>
                      <span className="font-bold text-green-600 text-lg">{formatCurrency(results.year1Revenue)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Launch Cost</span>
                      <span className="font-bold text-gray-900">-{formatCurrency(launchBudget)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-green-300">
                      <span className="text-gray-700">Net Profit</span>
                      <span className={`font-bold text-lg ${results.year1Profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {formatCurrency(results.year1Profit)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CAC & LTV */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Customer Economics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">CAC (Cost per Customer)</p>
                      <p className="font-bold text-gray-900">{formatCurrency(results.cacTarget)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">LTV</p>
                      <p className="font-bold text-gray-900">{formatCurrency(ltv)}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm text-gray-600">LTV:CAC Ratio</p>
                      <p className={`font-bold text-lg ${results.ltv_cac_ratio >= 3 ? 'text-green-600' : 'text-blue-600'}`}>
                        {results.ltv_cac_ratio}:1
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {results.ltv_cac_ratio >= 3 ? '✓ Healthy ratio' : '⚠ Needs improvement'}
                      </p>
                    </div>
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
                  <div className="text-6xl mb-4">📈</div>
                  <p className="text-gray-600 text-lg">Configure your launch parameters to see projections</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sensitivity Analysis */}
        {results && (
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sensitivity Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {results.scenarios.map((scenario: any, i: number) => (
                <div key={i} className={`rounded-xl p-6 ${i === 1 ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
                  <h3 className="font-bold text-gray-900 mb-4">{scenario.name}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Revenue</span>
                      <span className="font-bold">{formatCurrency(scenario.revenue)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Profit</span>
                      <span className="font-bold">{formatCurrency(scenario.profit)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">ROI</span>
                      <span className={`font-bold ${scenario.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {scenario.roi >= 0 ? '+' : ''}{scenario.roi}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-blue-500 rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Use This Analysis in Your GTM Plan</h2>
          <Link
            href="/planner"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-white text-blue-600 hover:bg-gray-100 transition-all"
          >
            🚀 Create Complete GTM Plan
          </Link>
        </div>
      </div>
    </div>
  )
}
