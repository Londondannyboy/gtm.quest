import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Enterprise GTM Strategy | Large Deal GTM | GTM Quest',
  description: 'Go-to-market strategy for selling to large enterprises. Navigate complex buying processes, RFPs, and procurement for high-value deals.',
  keywords: 'enterprise gtm, enterprise sales strategy, large deal gtm, enterprise software gtm, big deal selling',
  alternates: { canonical: 'https://gtm.quest/enterprise-gtm-strategy' },
  openGraph: {
    title: 'Enterprise GTM Strategy | Large Deal Guide',
    description: 'Master selling to large enterprises with complex buying processes.',
    type: 'website'
  }
}

export default function EnterpriseGTMPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-blue-400 text-blue-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Enterprise Guide</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Enterprise<br /><span className="text-blue-300">GTM Strategy</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">Master the art of selling to large enterprises. Navigate RFPs, procurement, and buying committees for six-figure and seven-figure deals.</p>
          </div>
        </div>
      </section>

      {/* Enterprise Sales Characteristics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Enterprise Sales is a Different Game</h2>
          <div className="space-y-6">
            {[
              {
                aspect: 'Deal Value',
                description: '$100k-$10M+ annual contracts. Each deal significantly impacts company metrics. Stakes are high.'
              },
              {
                aspect: 'Buying Committee',
                description: '5-15+ stakeholders: CFO, CIO, VP of Operations, end users, procurement, legal. Each with different priorities.'
              },
              {
                aspect: 'Sales Cycle',
                description: '3-12+ months. Complex evaluation, budget approval, RFP process, legal negotiations, implementation.'
              },
              {
                aspect: 'Risk Aversion',
                description: 'Enterprises are risk-averse. They want proof (case studies, references), compliance certifications, and financial stability.'
              },
              {
                aspect: 'Procurement Rigor',
                description: 'Vendor evaluation frameworks, RFPs, security audits, compliance checks. Process-heavy and slow.'
              },
              {
                aspect: 'Implementation Complexity',
                description: 'Enterprise deals include implementation, training, and support. Your GTM includes post-sale success.'
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border-l-4 border-blue-500 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.aspect}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise GTM Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Enterprise GTM Approach</h2>
          <div className="space-y-8">
            {[
              {
                element: '1. Target Account Strategy',
                description: 'Identify 50-200 ideal enterprise accounts. Develop deep knowledge about each: their strategies, challenges, decision makers.',
                actions: [
                  'Research top accounts deeply (LinkedIn, news, earnings reports)',
                  'Map organizational structure and influence',
                  'Identify economic buyers, users, and influencers',
                  'Develop account-level strategies'
                ]
              },
              {
                element: '2. Executive Relationships',
                description: 'Enterprise sales is relationship-driven. Build trust with key stakeholders before formal sales process.',
                actions: [
                  'Use warm introductions (advisors, board members, partners)',
                  'Invite to executive events and briefings',
                  'Share relevant insights and research',
                  'Build credibility and relationship'
                ]
              },
              {
                element: '3. Thought Leadership & Authority',
                description: 'Demonstrate expertise and thought leadership. Enterprises want partners, not just vendors.',
                actions: [
                  'Publish research and industry insights',
                  'Speak at industry conferences',
                  'Host executive roundtables',
                  'Build analyst relationships (Gartner, Forrester)'
                ]
              },
              {
                element: '4. RFP Response Excellence',
                description: 'When RFP comes, be prepared. Excellence in RFP response can make or break enterprise deals.',
                actions: [
                  'Develop strong RFP response process and templates',
                  'Customize responses to each company\'s needs',
                  'Include ROI calculations and implementation plans',
                  'Include customer references and case studies'
                ]
              },
              {
                element: '5. Reference Customers',
                description: 'Enterprises demand references. You need happy customers at similar companies willing to advocate.',
                actions: [
                  'Build strong relationships with reference customers',
                  'Get permission to use them as references',
                  'Provide talking points and briefing materials',
                  'Incentivize reference calls (they take time)'
                ]
              },
              {
                element: '6. Implementation & Success',
                description: 'Post-sale success is part of enterprise GTM. Customer success drives expansion and references.',
                actions: [
                  'Dedicated implementation team',
                  'Executive sponsor from your side',
                  'Customer success manager for the account',
                  'Regular executive business reviews'
                ]
              },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">{item.element}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.actions.map((action, j) => (
                    <div key={j} className="flex gap-3">
                      <span className="text-blue-500 font-bold">→</span>
                      <span className="text-gray-700 text-sm">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Sales Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Enterprise GTM Metrics to Track</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                metric: 'Pipeline Value',
                description: 'Total value of opportunities in pipeline. Enterprise sales focus on creating and managing large pipelines.'
              },
              {
                metric: 'Deal Velocity',
                description: 'How fast deals move through stages. Track days at each stage to identify bottlenecks.'
              },
              {
                metric: 'Win Rate',
                description: 'Percentage of deals closed. Enterprise win rates are typically 10-30%. Track by stage.'
              },
              {
                metric: 'Sales Cycle Length',
                description: 'Average time from first contact to close. Enterprise cycles are typically 6-12 months.'
              },
              {
                metric: 'CAC (Customer Acquisition Cost)',
                description: 'Total cost to acquire one customer (salary, marketing, tools). Enterprise CAC is high but offset by LTV.'
              },
              {
                metric: 'LTV (Lifetime Value)',
                description: 'Total revenue from one customer over lifetime. Enterprise customers have high LTV.'
              },
              {
                metric: 'Quota Attainment',
                description: 'Percentage of sales reps hitting quota. Track by rep, team, and territory.'
              },
              {
                metric: 'Reference Availability',
                description: 'Number of active reference customers. Critical for winning enterprise deals.'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.metric}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Enterprise Pricing & Negotiation</h2>
          <div className="space-y-8">
            <div className="p-8 bg-blue-50 border-2 border-blue-500 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-4 text-lg">Pricing Strategy</h3>
              <ul className="space-y-3">
                {[
                  'Value-based pricing: Price based on customer ROI, not competitor pricing',
                  'Customization: Price varies by company size, usage, and specific needs',
                  'Multi-year discounts: Offer 20-30% discounts for 3-year commitments',
                  'Professional services: Include implementation, training, and custom development',
                  'Support tiers: Premium support and SLAs are part of enterprise contracts'
                ].map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-blue-900">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-purple-50 border-2 border-purple-500 rounded-lg">
              <h3 className="font-bold text-purple-900 mb-4 text-lg">Negotiation Tactics</h3>
              <ul className="space-y-3">
                {[
                  'Anchor high: Start with premium pricing, be prepared to negotiate down',
                  'Bundle value: Offer extras (support, training, custom features) instead of lowering price',
                  'Create urgency: Limited offers, year-end deadlines, price increases next quarter',
                  'Multi-year locks: Multi-year deals are revenue wins and customer lock-in',
                  'Approval paths: Get approval from economic buyer before detailed negotiation'
                ].map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span className="text-purple-900">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-6">Build Your Enterprise GTM</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Master enterprise sales with a strategic GTM approach. Use our framework to target, win, and scale enterprise deals.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/gtm-strategy-template" className="px-10 py-5 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">Get GTM Template</Link>
            <Link href="/go-to-market-consultant" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-600 transition-colors">Talk to Expert</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
