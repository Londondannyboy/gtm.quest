import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'B2B Go-to-Market Strategy | Enterprise GTM Guide | GTM Quest',
  description: 'Complete B2B GTM strategy guide. Learn how to sell to enterprises, navigate buying committees, and close long sales cycles successfully.',
  keywords: 'b2b gtm strategy, b2b go-to-market, enterprise gtm, b2b sales strategy, account-based marketing',
  alternates: { canonical: 'https://gtm.quest/b2b-gtm-strategy' },
  openGraph: {
    title: 'B2B GTM Strategy | Enterprise Sales Guide',
    description: 'Master the complexities of B2B sales and navigate enterprise buying cycles.',
    type: 'website'
  }
}

export default function B2BGTMPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-blue-400 text-blue-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Enterprise Guide</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">B2B<br /><span className="text-blue-300">GTM Strategy</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">Navigate complex buying committees, long sales cycles, and enterprise procurement. Master the unique challenges of B2B go-to-market.</p>
          </div>
        </div>
      </section>

      {/* What Makes B2B Different */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">What Makes B2B GTM Different</h2>
          <div className="space-y-6">
            {[
              {
                factor: 'Multiple Stakeholders',
                b2c: 'One buyer makes the decision',
                b2b: 'Buying committee with 5-15 people (CFO, CIO, users, managers)',
                implication: 'Your GTM must appeal to multiple personas with different needs'
              },
              {
                factor: 'Long Sales Cycles',
                b2c: 'Days to weeks',
                b2b: '3-9 months (or longer)',
                implication: 'You need nurturing, relationship building, and persistence'
              },
              {
                factor: 'Large Deal Values',
                b2c: '£20-500',
                b2b: '£10k-£500k+ annually',
                implication: 'Buyers do extensive due diligence and comparison'
              },
              {
                factor: 'Procurement Processes',
                b2c: 'Simple purchasing',
                b2b: 'RFP, vendor comparison, legal review, contracts',
                implication: 'Your sales process must accommodate compliance requirements'
              },
              {
                factor: 'Relationship-Driven',
                b2c: 'Transactional',
                b2b: 'Deep relationships with key contacts',
                implication: 'Trust and reputation drive purchasing decisions'
              },
              {
                factor: 'Reference Ability',
                b2c: 'Reviews on third-party sites',
                b2b: 'Direct references to similar companies',
                implication: 'Case studies and customer advocacy are critical'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{item.factor}</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-3">
                  <div>
                    <p className="text-xs font-bold text-gray-600 uppercase mb-1">B2C</p>
                    <p className="text-gray-700">{item.b2c}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-600 uppercase mb-1">B2B</p>
                    <p className="text-gray-700">{item.b2b}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase mb-1">GTM Impact</p>
                    <p className="text-gray-700">{item.implication}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B GTM Strategies */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">B2B GTM Strategies</h2>
          <div className="space-y-8">
            {[
              {
                strategy: 'Account-Based Marketing (ABM)',
                description: 'Focus on specific high-value accounts rather than casting a wide net. Personalize everything.',
                best_for: 'Enterprise sales, accounts worth £100k+, long sales cycles',
                how_it_works: [
                  'Identify 20-50 ideal target accounts',
                  'Develop deep buyer personas for each account',
                  'Create personalized marketing campaigns for each',
                  'Align sales and marketing efforts on same accounts',
                  'Track engagement metrics for each account',
                  'Measure success by deals closed, not leads generated'
                ],
                pros: ['High deal values', 'Clear ROI', 'Focused resources', 'Strong alignment'],
                cons: ['Time-intensive', 'Smaller volume', 'Needs market research', 'Long implementation']
              },
              {
                strategy: 'Inbound & Content Marketing',
                description: 'Attract buyers through valuable content, thought leadership, and educational resources.',
                best_for: 'Mid-market, companies with 6+ month sales cycles, competitive markets',
                how_it_works: [
                  'Create content targeting buyer personas',
                  'Publish case studies and whitepapers',
                  'Build SEO to attract organic traffic',
                  'Host webinars and virtual events',
                  'Build email nurture sequences',
                  'Track engagement and quality of leads'
                ],
                pros: ['Scalable', 'Builds authority', 'Cost-effective', 'Inbound leads'],
                cons: ['Long to see ROI', 'Needs consistent content', 'Competitive', 'Lower conversion initially']
              },
              {
                strategy: 'Sales-Led Growth',
                description: 'Traditional outbound sales with targeted prospecting, personal outreach, and relationship building.',
                best_for: 'Enterprise, high-value deals, mature markets, complex solutions',
                how_it_works: [
                  'Build ideal customer list (150-300 accounts)',
                  'Research accounts and key decision makers',
                  'Personalized outreach (emails + calls)',
                  'Build relationships before pitching',
                  'Discover needs through discovery calls',
                  'Navigate buying committee'
                ],
                pros: ['Faster deals', 'Relationship-based', 'High ACV', 'Predictable pipeline'],
                cons: ['Expensive (sales team)', 'Longer ramp', 'Personality dependent', 'Harder to scale']
              },
              {
                strategy: 'Product-Led Growth (PLG)',
                description: 'Let the product speak for itself. Free tier or trial drives adoption before sales involvement.',
                best_for: 'Self-serve segments, low-touch deals, wide appeal products',
                how_it_works: [
                  'Create powerful free tier or trial',
                  'Focus on onboarding and activation',
                  'Track product usage and engagement',
                  'Identify users ready for upgrade',
                  'Light-touch sales to engaged users',
                  'Build expansion revenue'
                ],
                pros: ['Scalable', 'Low CAC', 'Proof of value', 'Good retention'],
                cons: ['Lower ACV', 'Needs great product', 'Adoption risk', 'No handholding']
              },
              {
                strategy: 'Channel/Partner-Led',
                description: 'Sell through partners, resellers, integrations, or referral programs.',
                best_for: 'Platforms, ecosystems, complementary products, market expansion',
                how_it_works: [
                  'Identify strategic partners',
                  'Develop partner programs',
                  'Provide sales tools and support',
                  'Enable partners to sell effectively',
                  'Incentivize partner growth',
                  'Measure partner pipeline'
                ],
                pros: ['Expanded reach', 'Leverage partner networks', 'Lower CAC', 'New markets'],
                cons: ['Less control', 'Lower margins', 'Partner dependent', 'Longer setup']
              },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-black text-gray-900 mb-2">{item.strategy}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>

                <div className="mb-4 p-4 bg-blue-100 rounded">
                  <p className="text-sm font-bold text-blue-900">Best for: {item.best_for}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">How It Works:</h4>
                  <ol className="space-y-1 text-sm text-gray-700">
                    {item.how_it_works.map((step, j) => (
                      <li key={j} className="ml-4">
                        <span className="font-bold text-blue-600">{j + 1}.</span> {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">✓ Pros:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {item.pros.map((pro, j) => (
                        <li key={j}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">✗ Cons:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {item.cons.map((con, j) => (
                        <li key={j}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Sales Cycle */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">The B2B Sales Cycle Stages</h2>
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
            {[
              {
                stage: '1. Awareness',
                timeline: 'Weeks 1-2',
                key_activity: 'Buyer identifies a need or problem',
                your_role: 'Thought leadership, content, industry events, analyst reports'
              },
              {
                stage: '2. Interest & Exploration',
                timeline: 'Weeks 3-6',
                key_activity: 'Buyer researches solutions and companies',
                your_role: 'Website, content, case studies, product demos, webinars'
              },
              {
                stage: '3. Evaluation & Comparison',
                timeline: 'Weeks 7-10',
                key_activity: 'Buyer compares you to competitors',
                your_role: 'Sales demos, RFP responses, technical deep-dives, references'
              },
              {
                stage: '4. Justification & Committee',
                timeline: 'Weeks 11-14',
                key_activity: 'Buyer presents to buying committee',
                your_role: 'Executive briefings, ROI calculations, risk mitigation, contract negotiation'
              },
              {
                stage: '5. Purchase Decision',
                timeline: 'Weeks 15+',
                key_activity: 'Committee approves, legal reviews, deal closes',
                your_role: 'Remove blockers, negotiate terms, prepare onboarding'
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-gray-200 last:border-b-0">
                <div className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-900 text-lg">{item.stage}</h3>
                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{item.timeline}</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-bold text-gray-600 uppercase mb-1">Buyer Activity</p>
                      <p className="text-gray-700">{item.key_activity}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-blue-600 uppercase mb-1">Your GTM Role</p>
                      <p className="text-gray-700">{item.your_role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B GTM Best Practices */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">B2B GTM Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                practice: 'Develop Buyer Personas',
                description: 'Create detailed profiles of each buyer type in the buying committee. Understand their goals, challenges, and what success looks like for them.'
              },
              {
                practice: 'Build Case Studies & References',
                description: 'Enterprise buyers want to talk to similar companies. Develop 3-5 detailed case studies and maintain relationships with willing references.'
              },
              {
                practice: 'Create ROI Tools',
                description: 'Enterprise buyers need to justify spending to CFO. Build ROI calculators, payback period models, and TCO comparisons.'
              },
              {
                practice: 'Map the Buying Committee',
                description: 'Understand who influences each account. Map roles (Champion, Economic Buyer, User, Decision Maker) and develop relationships with each.'
              },
              {
                practice: 'Align Sales & Marketing',
                description: 'In B2B, sales and marketing must work together. Agree on lead quality, scoring, and handoff process.'
              },
              {
                practice: 'Develop Sales Enablement',
                description: 'Equip your sales team with materials: competitive battlecards, response templates, technical resources, sales scripts.'
              },
              {
                practice: 'Nurture with Content',
                description: 'Not all leads are ready to buy. Create nurture sequences that educate and build trust before sales engagement.'
              },
              {
                practice: 'Track Pipeline Metrics',
                description: 'Monitor pipeline health: conversion rates by stage, sales cycle length, deal velocity, win/loss rates.'
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{item.practice}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-6">Master Your B2B GTM</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Build a winning B2B go-to-market strategy. Navigate buying committees, long sales cycles, and complex deals with confidence.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/gtm-strategy" className="px-10 py-5 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">Learn GTM Framework</Link>
            <Link href="/go-to-market-consultant" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-600 transition-colors">Work With Expert</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
