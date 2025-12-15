'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SalesFunnelCalculator() {
  const [visitors, setVisitors] = useState(1000)
  const [visitorsToMQL, setVisitorsToMQL] = useState(10)
  const [mqlToSQL, setMqlToSQL] = useState(25)
  const [sqlToCustomer, setSqlToCustomer] = useState(30)
  const [avgDealSize, setAvgDealSize] = useState(50000)

  const mql = Math.round((visitors * visitorsToMQL) / 100)
  const sql = Math.round((mql * mqlToSQL) / 100)
  const customers = Math.round((sql * sqlToCustomer) / 100)
  const totalRevenue = customers * avgDealSize
  const cac = customers > 0 ? (totalRevenue / customers / 5).toFixed(0) : 0

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black mb-6">Sales Funnel Calculator</h1>
          <p className="text-xl text-purple-100 max-w-2xl">Visualize your sales funnel and understand where you're leaking pipeline. Optimize each stage for maximum conversion.</p>
        </div>
      </div>

      {/* Calculator */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold mb-8">Your Sales Funnel</h2>

            <div className="space-y-6">
              {/* Visitors */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Monthly Visitors</label>
                <input
                  type="number"
                  value={visitors}
                  onChange={(e) => setVisitors(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

              {/* Visitor to MQL */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Visitor to MQL Conversion %</label>
                <div className="flex gap-4 items-center">
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="0.5"
                    value={visitorsToMQL}
                    onChange={(e) => setVisitorsToMQL(parseFloat(e.target.value))}
                    className="flex-1 cursor-pointer"
                  />
                  <span className="text-purple-600 font-bold w-16 text-right">{visitorsToMQL}%</span>
                </div>
              </div>

              {/* MQL to SQL */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">MQL to SQL Conversion %</label>
                <div className="flex gap-4 items-center">
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="0.5"
                    value={mqlToSQL}
                    onChange={(e) => setMqlToSQL(parseFloat(e.target.value))}
                    className="flex-1 cursor-pointer"
                  />
                  <span className="text-purple-600 font-bold w-16 text-right">{mqlToSQL}%</span>
                </div>
              </div>

              {/* SQL to Customer */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">SQL to Customer Conversion %</label>
                <div className="flex gap-4 items-center">
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="0.5"
                    value={sqlToCustomer}
                    onChange={(e) => setSqlToCustomer(parseFloat(e.target.value))}
                    className="flex-1 cursor-pointer"
                  />
                  <span className="text-purple-600 font-bold w-16 text-right">{sqlToCustomer}%</span>
                </div>
              </div>

              {/* Avg Deal Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Average Deal Size ($)</label>
                <input
                  type="number"
                  value={avgDealSize}
                  onChange={(e) => setAvgDealSize(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Funnel Visualization */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="text-xl font-bold mb-6">Your Funnel Breakdown</h3>

              <div className="space-y-4">
                {/* Visitors */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900">Visitors</span>
                    <span className="text-purple-600 font-bold">{visitors.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-3" style={{ width: '100%' }}>
                    <div className="bg-purple-600 h-3 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>

                {/* MQLs */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900">MQLs</span>
                    <span className="text-purple-600 font-bold">{mql.toLocaleString()} ({visitorsToMQL}%)</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-3">
                    <div className="bg-purple-600 h-3 rounded-full" style={{ width: visitorsToMQL + '%' }} />
                  </div>
                </div>

                {/* SQLs */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900">SQLs</span>
                    <span className="text-purple-600 font-bold">{sql.toLocaleString()} ({(mqlToSQL * visitorsToMQL / 100).toFixed(1)}% of visitors)</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-3">
                    <div className="bg-purple-600 h-3 rounded-full" style={{ width: (mqlToSQL * visitorsToMQL / 100) + '%' }} />
                  </div>
                </div>

                {/* Customers */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900">Customers</span>
                    <span className="text-purple-600 font-bold">{customers.toLocaleString()} ({(sqlToCustomer * mqlToSQL * visitorsToMQL / 10000).toFixed(1)}% of visitors)</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-3">
                    <div className="bg-purple-600 h-3 rounded-full" style={{ width: (sqlToCustomer * mqlToSQL * visitorsToMQL / 10000) + '%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <p className="text-gray-600 text-sm font-semibold mb-1">Total Monthly Revenue</p>
                <p className="text-2xl font-bold text-purple-600">${(totalRevenue / 1000).toFixed(0)}K</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <p className="text-gray-600 text-sm font-semibold mb-1">Estimated CAC</p>
                <p className="text-2xl font-bold text-blue-600">${cac}</p>
              </div>
            </div>

            {/* Insights */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h4 className="font-bold text-gray-900 mb-3">Key Insights</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Biggest leak: {visitorsToMQL > mqlToSQL * visitorsToMQL / 100 ? 'Visitor to MQL' : 'MQL to SQL'}</li>
                <li>• Conversion rate: {(sqlToCustomer * mqlToSQL * visitorsToMQL / 10000).toFixed(2)}% overall</li>
                <li>• Revenue per visitor: ${(totalRevenue / visitors).toFixed(2)}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Optimize Your Funnel</h3>
          <p className="mb-6 text-purple-100">Learn proven strategies to improve each stage of your sales funnel.</p>
          <Link href="/articles">
            <button className="bg-white text-purple-700 font-bold px-8 py-3 rounded-lg hover:bg-purple-50 transition">
              View Sales Guides →
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
