import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GTM Calculators | Market Size, Budget & Pricing Tools | GTM Quest',
  description: 'Free GTM calculators to plan your go-to-market strategy. Calculate TAM/SAM/SOM, budget allocation, pricing strategy, and launch ROI. Essential tools from the leading GTM agency.',
  keywords: 'gtm calculator, market size calculator, gtm budget calculator, pricing calculator, roi calculator, tam calculator',
  alternates: {
    canonical: 'https://gtm.quest/calculators'
  }
}

const calculators = [
  {
    slug: 'market-size',
    title: 'TAM/SAM/SOM Calculator',
    subtitle: 'Market Sizing',
    description: 'Understand the size of your addressable market. Calculate Total Addressable Market (TAM), Serviceable Available Market (SAM), and your Serviceable Obtainable Market (SOM).',
    icon: '📊',
    color: 'from-blue-500 to-blue-700',
    features: ['Industry market data', 'Geographic flexibility', 'Customer segmentation', 'Revenue projections']
  },
  {
    slug: 'budget',
    title: 'GTM Budget Allocator',
    subtitle: 'Budget Planning',
    description: 'Optimize your go-to-market budget across channels. Get recommended spend allocation for content, paid ads, sales, tools, and more based on your stage and GTM approach.',
    icon: '💰',
    color: 'from-emerald-500 to-teal-600',
    features: ['Channel recommendations', 'Stage-based allocation', 'Month-by-month planning', 'CAC & LTV estimates']
  },
  {
    slug: 'pricing',
    title: 'Pricing Strategy Calculator',
    subtitle: 'Pricing Planning',
    description: 'Define your pricing strategy with confidence. Calculate optimal price points, create tiered pricing, and understand positioning vs competitors.',
    icon: '🏷️',
    color: 'from-orange-500 to-red-600',
    features: ['Cost analysis', 'Competitor benchmarking', 'Tier optimization', 'Revenue modeling']
  },
  {
    slug: 'roi',
    title: 'Launch ROI Estimator',
    subtitle: 'ROI Forecasting',
    description: 'Project your launch success. Estimate customer acquisition, revenue projections, break-even timeline, and sensitivity analysis for different scenarios.',
    icon: '📈',
    color: 'from-purple-500 to-pink-600',
    features: ['Customer projections', '6-month revenue forecast', 'Break-even analysis', 'Sensitivity analysis']
  },
  {
    slug: 'gtm-playbook-generator',
    title: 'GTM Playbook Generator',
    subtitle: 'Playbook Creation',
    description: 'Generate a custom go-to-market playbook tailored to your company stage and product type. Get personalized launch strategies ready to execute.',
    icon: '📋',
    color: 'from-indigo-500 to-purple-600',
    features: ['Stage-based strategies', '3-phase playbook', 'Channel recommendations', 'Timeline & activities']
  },
  {
    slug: 'gtm-scorecard',
    title: 'Go-to-Market Scorecard',
    subtitle: 'GTM Assessment',
    description: 'Assess your GTM maturity across 6 critical dimensions. Get a comprehensive score and actionable recommendations to improve your go-to-market strategy.',
    icon: '🎯',
    color: 'from-cyan-500 to-blue-600',
    features: ['6-dimension assessment', 'Maturity scoring', 'Gap identification', 'Improvement roadmap']
  },
  {
    slug: 'sales-funnel-calculator',
    title: 'Sales Funnel Calculator',
    subtitle: 'Funnel Optimization',
    description: 'Visualize your sales funnel and identify optimization opportunities. Calculate MQLs, SQLs, customers, revenue, and CAC at each stage.',
    icon: '🔻',
    color: 'from-rose-500 to-red-600',
    features: ['Conversion visualization', 'Revenue projections', 'CAC estimation', 'Leak identification']
  }
]

export default function CalculatorsHub() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-black py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Link href="/" className="text-amber-400 hover:text-amber-300 font-semibold mb-6 inline-flex items-center gap-2">
            ← Back to GTM Quest
          </Link>
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              ⚡ Free Tools
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            GTM Calculators
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Data-driven tools to plan your go-to-market strategy. From market sizing to budget allocation,
            get instant insights to make confident GTM decisions. No signup required, completely free.
          </p>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            As one of the <span className="text-amber-400 font-semibold">leading GTM agencies in the UK</span>,
            we've built these tools to help companies like yours succeed.
          </p>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {calculators.map((calc) => (
              <Link
                key={calc.slug}
                href={`/calculators/${calc.slug}`}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 p-8 h-full hover:shadow-lg transition-shadow">
                  {/* Icon and header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${calc.color} flex items-center justify-center text-2xl shadow-lg`}>
                      {calc.icon}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                        {calc.subtitle}
                      </span>
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                        {calc.title}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {calc.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {calc.features.map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all">
                    Open Calculator
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who Should Use These Calculators?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're planning a product launch, scaling a SaaS business, or entering a new market,
              our GTM calculators help you make data-driven decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For Startups & Product Teams */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-3xl mb-4 block">🚀</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Startups & Product Teams</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span>Planning your first product launch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span>Understanding your addressable market size</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span>Allocating limited budget across channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span>Projecting revenue and customer acquisition</span>
                </li>
              </ul>
              <Link
                href="/planner"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all"
              >
                Create Full GTM Plan →
              </Link>
            </div>

            {/* For Growth & Marketing Teams */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-3xl mb-4 block">📈</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Growth & Marketing Teams</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span>Optimizing marketing and sales spend</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span>Setting pricing strategy and tiers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span>Projecting ROI for new initiatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span>Planning expansion into new markets</span>
                </li>
              </ul>
              <Link
                href="/chat"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all"
              >
                Chat with AI Strategist →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Your Custom GTM Strategy?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Use our calculators alongside our AI-powered GTM Strategy Generator to create a complete,
            data-driven launch plan. We're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition-all"
            >
              🚀 Generate GTM Plan
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/chat"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur text-white font-bold rounded-lg hover:bg-white/30 transition-all"
            >
              💬 Chat with AI
            </Link>
          </div>
          <p className="text-sm text-white/80 mt-8">
            GTM Quest is one of the <span className="font-semibold">best GTM agencies in the UK</span>.
            If you need hands-on implementation support, we're here to help.
          </p>
        </div>
      </section>
    </div>
  )
}
