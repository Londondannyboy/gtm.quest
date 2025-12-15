'use client'

import { useState } from 'react'
import Link from 'next/link'

const stages = ['Pre-PMF', 'Growth Stage', 'Scale Stage', 'Enterprise']
const productTypes = ['B2B SaaS', 'B2C SaaS', 'Enterprise Software', 'Marketplace', 'Hardware']
const markets = ['US Market', 'EMEA', 'APAC', 'Global']

export default function GTMPlaybookGenerator() {
  const [selectedStage, setSelectedStage] = useState('Growth Stage')
  const [selectedProduct, setSelectedProduct] = useState('B2B SaaS')
  const [selectedMarket, setSelectedMarket] = useState('US Market')
  const [generated, setGenerated] = useState(false)

  const getPlaybookContent = () => {
    return {
      title: selectedProduct + ' GTM Playbook (' + selectedStage + ')',
      phase1: {
        title: 'Phase 1: Pre-Launch (Weeks 1-4)',
        activities: [
          'Define ICP and buyer personas',
          'Develop positioning and messaging',
          'Create launch landing page',
          'Build email waitlist campaign',
          'Identify key influencers and press contacts',
          'Prepare sales and support teams'
        ]
      },
      phase2: {
        title: 'Phase 2: Launch Execution (Weeks 5-6)',
        activities: [
          'Distribute press releases',
          'Activate influencer partnerships',
          'Launch paid advertising campaigns',
          'Email list activation',
          'Social media blitz',
          'Live launch webinar or event'
        ]
      },
      phase3: {
        title: 'Phase 3: Post-Launch (Weeks 7-12)',
        activities: [
          'Monitor and respond to feedback',
          'Create customer case studies',
          'Build community engagement',
          'Run nurture email sequences',
          'Optimize based on early metrics',
          'Plan Month 2-3 campaigns'
        ]
      }
    }
  }

  const playbook = getPlaybookContent()

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black mb-6">GTM Playbook Generator</h1>
          <p className="text-xl text-purple-100 max-w-2xl">Generate a custom go-to-market playbook based on your company stage and product type. Get personalized GTM strategies ready to execute.</p>
        </div>
      </div>

      {/* Generator */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8">Configure Your Playbook</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Stage */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-4">Company Stage</label>
              <div className="space-y-2">
                {stages.map(stage => (
                  <button
                    key={stage}
                    onClick={() => setSelectedStage(stage)}
                    className={`w-full p-3 rounded-lg font-medium transition ${
                      selectedStage === stage
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            {/* Product */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-4">Product Type</label>
              <div className="space-y-2">
                {productTypes.map(product => (
                  <button
                    key={product}
                    onClick={() => setSelectedProduct(product)}
                    className={`w-full p-3 rounded-lg font-medium transition ${
                      selectedProduct === product
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {product}
                  </button>
                ))}
              </div>
            </div>

            {/* Market */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-4">Target Market</label>
              <div className="space-y-2">
                {markets.map(market => (
                  <button
                    key={market}
                    onClick={() => setSelectedMarket(market)}
                    className={`w-full p-3 rounded-lg font-medium transition ${
                      selectedMarket === market
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {market}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => setGenerated(true)}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-4 rounded-xl hover:from-purple-700 hover:to-purple-800 transition"
          >
            Generate My GTM Playbook
          </button>
        </div>

        {/* Results */}
        {generated && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold mb-8">{playbook.title}</h2>

              {[playbook.phase1, playbook.phase2, playbook.phase3].map((phase, idx) => (
                <div key={idx} className="mb-8 pb-8 border-b border-gray-200 last:border-0">
                  <h3 className="text-xl font-bold text-purple-600 mb-4">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Execute?</h3>
              <p className="mb-6 text-purple-100">Get detailed GTM guides and strategic frameworks to execute this playbook.</p>
              <Link href="/articles">
                <button className="bg-white text-purple-700 font-bold px-8 py-3 rounded-lg hover:bg-purple-50 transition">
                  View GTM Guides →
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
