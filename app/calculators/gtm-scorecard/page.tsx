'use client'

import { useState } from 'react'
import Link from 'next/link'

const categories = [
  { name: 'Strategy & Positioning', items: ['Clear ICP defined', 'Value proposition clarity', 'Competitive positioning', 'Target market size'] },
  { name: 'Sales & Team', items: ['Sales team structure', 'Sales process maturity', 'Sales enablement', 'Sales forecast accuracy'] },
  { name: 'Marketing & Demand', items: ['Demand generation strategy', 'Content marketing', 'Brand awareness', 'Lead quality'] },
  { name: 'Product & GTM Fit', items: ['Product-market fit', 'GTM-product alignment', 'Pricing strategy', 'Go-live readiness'] },
  { name: 'Metrics & Analytics', items: ['CAC tracking', 'LTV calculation', 'Pipeline visibility', 'Revenue attribution'] },
  { name: 'Execution & Process', items: ['Go-to-market playbook', 'Team alignment', 'Launch timeline', 'Post-launch tracking'] }
]

export default function GTMScorecard() {
  const [scores, setScores] = useState<Record<string, number>>({})
  const [calculated, setCalculated] = useState(false)

  const handleScore = (key: string, value: number) => {
    setScores(prev => ({ ...prev, [key]: value }))
  }

  const calculateTotal = () => {
    const values = Object.values(scores).filter((v): v is number => typeof v === 'number')
    if (values.length === 0) return 0
    return ((values.reduce((a, b) => a + b, 0) / values.length) as number).toFixed(1)
  }

  const total = calculateTotal()

  const getGrade = (score: number | string) => {
    const numScore = typeof score === 'string' ? parseFloat(score) : score
    if (numScore >= 80) return { grade: 'A', color: 'text-green-600', bg: 'bg-green-50' }
    if (numScore >= 70) return { grade: 'B', color: 'text-blue-600', bg: 'bg-blue-50' }
    if (numScore >= 60) return { grade: 'C', color: 'text-yellow-600', bg: 'bg-yellow-50' }
    return { grade: 'D', color: 'text-red-600', bg: 'bg-red-50' }
  }

  const gradeInfo = getGrade(parseFloat(total))

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black mb-6">Go-to-Market Scorecard</h1>
          <p className="text-xl text-purple-100 max-w-2xl">Assess your GTM maturity across 6 critical dimensions. Identify gaps and prioritize improvements.</p>
        </div>
      </div>

      {/* Scorecard */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left side - Assessment */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-8">Rate Your GTM Maturity</h2>
              <p className="text-gray-600 mb-8">Score each item from 1-10 (1=Weak, 10=Excellent)</p>

              <div className="space-y-8">
                {categories.map((category, catIdx) => (
                  <div key={catIdx} className="pb-8 border-b border-gray-200 last:border-0">
                    <h3 className="text-lg font-bold text-purple-600 mb-4">{category.name}</h3>
                    <div className="space-y-3">
                      {category.items.map((item, itemIdx) => {
                        const key = catIdx + '_' + itemIdx
                        return (
                          <div key={key} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                            <label className="text-gray-700 font-medium">{item}</label>
                            <input
                              type="range"
                              min="1"
                              max="10"
                              value={scores[key] || 5}
                              onChange={(e) => handleScore(key, parseInt(e.target.value))}
                              className="w-24 cursor-pointer"
                            />
                            <span className="text-purple-600 font-bold w-8 text-center">{scores[key] || 5}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Score */}
          <div className="space-y-8">
            <div className={`rounded-2xl p-8 text-center ${gradeInfo.bg}`}>
              <p className="text-gray-600 text-sm font-semibold mb-2">YOUR GTM SCORE</p>
              <div className={`text-6xl font-black ${gradeInfo.color} mb-2`}>{total}</div>
              <div className={`text-3xl font-bold ${gradeInfo.color} mb-4`}>{gradeInfo.grade}</div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    parseFloat(total) >= 80 ? 'bg-green-600' :
                    parseFloat(total) >= 70 ? 'bg-blue-600' :
                    parseFloat(total) >= 60 ? 'bg-yellow-600' :
                    'bg-red-600'
                  }`}
                  style={{ width: total + '%' }}
                />
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h4 className="font-bold text-gray-900 mb-4">What's Next?</h4>
              {parseFloat(total) >= 80 && (
                <p className="text-gray-700 text-sm">Your GTM is strong. Focus on scaling and optimizing execution.</p>
              )}
              {parseFloat(total) >= 70 && parseFloat(total) < 80 && (
                <p className="text-gray-700 text-sm">Good foundation. Identify weak areas and improve systematically.</p>
              )}
              {parseFloat(total) >= 60 && parseFloat(total) < 70 && (
                <p className="text-gray-700 text-sm">Need improvements. Create action plan to address gaps.</p>
              )}
              {parseFloat(total) < 60 && (
                <p className="text-gray-700 text-sm">Major gaps detected. Prioritize GTM strategy and team alignment.</p>
              )}

              <Link href="/articles">
                <button className="mt-4 w-full bg-purple-600 text-white font-bold py-2 rounded-lg hover:bg-purple-700 transition">
                  View GTM Guides →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
