import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'What is Go-to-Market (GTM)? Complete Guide | GTM Quest',
  description: 'Complete guide to go-to-market strategy. Learn what GTM is, why it matters, and how to build a winning GTM strategy for your product or service.',
  keywords: 'what is gtm, go-to-market strategy, gtm strategy definition, gtm framework, gtm process',
  alternates: { canonical: 'https://gtm.quest/what-is-gtm' },
  openGraph: {
    title: 'What is Go-to-Market? Complete GTM Guide',
    description: 'Everything you need to know about go-to-market strategy and execution.',
    type: 'website'
  }
}

export default function WhatIsGTMPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-blue-400 text-blue-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Thought Leadership</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">What is<br /><span className="text-blue-300">Go-to-Market?</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">The complete guide to understanding, building, and executing your go-to-market strategy. Learn the frameworks, processes, and best practices used by the world's most successful companies.</p>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg border-2 border-blue-500">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Definition: What is Go-to-Market?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong>Go-to-Market (GTM) is the strategic plan and execution process for bringing a product or service to market and acquiring customers.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              More specifically, GTM is the comprehensive strategy that answers these questions:
            </p>
            <div className="space-y-3">
              {[
                '🎯 Who is your ideal customer?',
                '📍 How will you position your product?',
                '💰 What will you charge?',
                '🚀 How will you reach customers (channels)?',
                '📊 What is your pricing and business model?',
                '🤝 How will you sell and support customers?',
                '📈 How will you measure success?'
              ].map((q, i) => (
                <p key={i} className="text-gray-700">{q}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why GTM Matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Why Go-to-Market Matters</h2>
          <div className="space-y-6">
            {[
              {
                stat: '90%',
                claim: 'of product launches fail',
                reason: 'Most failures are GTM problems, not product problems. Great products die from poor execution.'
              },
              {
                stat: '3x',
                claim: 'faster time-to-revenue',
                reason: 'Companies with clear GTM strategies reach revenue targets 3x faster than those making it up as they go.'
              },
              {
                stat: '50%',
                claim: 'higher customer lifetime value',
                reason: 'GTM that includes positioning and customer success drives better retention and expansion.'
              },
              {
                stat: '10x',
                claim: 'difference in CAC',
                reason: 'Smart GTM channels can reduce customer acquisition cost by 10x versus traditional marketing.'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-4xl font-black text-blue-600">{item.stat}</span>
                  <h3 className="text-xl font-bold text-gray-900">{item.claim}</h3>
                </div>
                <p className="text-gray-700">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GTM vs Marketing vs Sales */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">GTM vs Marketing vs Sales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'GTM (Go-to-Market)',
                definition: 'The overall strategy for bringing a product to market and finding customers',
                scope: 'Strategic, holistic, company-wide',
                timeline: 'Developed before launch, guides all execution',
                includes: 'Positioning, pricing, channels, sales model, customer success',
                focus: 'Market entry and sustainable customer acquisition'
              },
              {
                name: 'Marketing',
                definition: 'The tactics to create awareness and generate demand',
                scope: 'Tactical execution of GTM',
                timeline: 'Ongoing campaigns and initiatives',
                includes: 'Content, ads, campaigns, events, PR',
                focus: 'Building awareness and leads'
              },
              {
                name: 'Sales',
                definition: 'The process to close deals and acquire customers',
                scope: 'Tactical execution of GTM',
                timeline: 'Ongoing customer acquisition',
                includes: 'Prospecting, demos, negotiations, closing',
                focus: 'Converting prospects to customers'
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-500 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.name}</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-bold text-gray-900">Definition</p>
                    <p className="text-gray-700">{item.definition}</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Scope</p>
                    <p className="text-gray-700">{item.scope}</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Timeline</p>
                    <p className="text-gray-700">{item.timeline}</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Includes</p>
                    <p className="text-gray-700">{item.includes}</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Focus</p>
                    <p className="text-gray-700">{item.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GTM Components */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">The Core Components of GTM</h2>
          <div className="space-y-6">
            {[
              {
                num: '1',
                component: 'Product Positioning',
                description: 'How you position your product relative to alternatives and in the minds of customers. What makes you different?',
                examples: 'Positioning statement, key differentiators, value proposition, messaging framework'
              },
              {
                num: '2',
                component: 'Target Market / ICP',
                description: 'Who your ideal customers are. Specific definition of company size, industry, challenges, and buyer personas.',
                examples: 'Company size, industry vertical, job titles, pain points, buying criteria'
              },
              {
                num: '3',
                component: 'Pricing & Revenue Model',
                description: 'How much you charge and how you make money. SaaS, perpetual license, freemium, usage-based, etc.',
                examples: 'Price point, pricing tiers, pricing model, payment terms, monetization strategy'
              },
              {
                num: '4',
                component: 'Go-to-Market Channels',
                description: 'How you reach and acquire customers. Which channels will you focus on?',
                examples: 'Direct sales, content marketing, product-led growth, partnerships, community, ads'
              },
              {
                num: '5',
                component: 'Sales Motion',
                description: 'How your sales process works. Is it direct sales, self-serve, marketplace, partner-led?',
                examples: 'Sales team, account managers, self-serve signup, partner resellers, marketplace'
              },
              {
                num: '6',
                component: 'Customer Success & Retention',
                description: 'How you ensure customers succeed and reduce churn. This drives expansion and referrals.',
                examples: 'Onboarding, customer success managers, support tiers, upsell programs, community'
              },
              {
                num: '7',
                component: 'Launch Plan',
                description: 'The specific tactics and timeline for launch. What happens day 1, week 1, month 1?',
                examples: 'Launch date, announcement channels, PR strategy, partner activations, milestones'
              },
              {
                num: '8',
                component: 'Metrics & Success',
                description: 'How you measure success. What are your KPIs and targets?',
                examples: 'Customer acquisition, revenue, growth rate, retention, NPS, market share'
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-6 p-6 bg-white rounded-lg border border-gray-200">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {item.num}
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.component}</h3>
                  <p className="text-gray-700 mb-3">{item.description}</p>
                  <p className="text-sm text-gray-600"><strong>Examples:</strong> {item.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GTM Frameworks */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Popular GTM Frameworks</h2>
          <div className="space-y-6">
            {[
              {
                name: 'STP Framework (Segmentation, Targeting, Positioning)',
                description: 'Classic marketing framework that defines your market segment, target customer, and positioning.',
                steps: ['Segment the market', 'Choose your target segment', 'Position against alternatives'],
                best_for: 'All businesses, foundational framework'
              },
              {
                name: 'Jobs to be Done (JTBD)',
                description: 'Framework based on understanding the job customers are trying to accomplish, not just demographics.',
                steps: ['Identify the job', 'Map the customer journey', 'Design solution around the job'],
                best_for: 'Product innovation, positioning, messaging'
              },
              {
                name: 'Blue Ocean Strategy',
                description: 'Create uncontested market space instead of competing in existing categories.',
                steps: ['Eliminate', 'Reduce', 'Raise', 'Create'],
                best_for: 'Category creation, differentiation'
              },
              {
                name: 'Product-Market Fit (PMF)',
                description: 'Foundation of GTM - does your product satisfy strong market demand?',
                steps: ['Build MVP', 'Find early customers', 'Validate product-market fit', 'Scale GTM'],
                best_for: 'Startups, new products'
              },
              {
                name: 'Bullseye Model',
                description: 'Identify and focus on your bullseye (most effective GTM channel), then expand.',
                steps: ['Outer ring (test channels)', 'Middle ring (focus channels)', 'Inner ring (bullseye)'],
                best_for: 'Channel selection, lean startups'
              },
              {
                name: 'Customer Development',
                description: 'Systematic process of getting out to talk to customers before, during, and after building.',
                steps: ['Customer discovery', 'Validation', 'Creation', 'Pivot or scale'],
                best_for: 'All businesses, customer-centric approach'
              },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-bold text-gray-900 mb-2">Steps:</p>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    {item.steps.map((step, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <span>{step}</span>
                        {j < item.steps.length - 1 && <span className="text-blue-600">→</span>}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600"><strong>Best for:</strong> {item.best_for}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GTM by Type */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Different Types of GTM Strategies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                type: 'Product-Led Growth (PLG)',
                description: 'Product drives acquisition. Free trials/tiers, self-serve signup, product virality.',
                when: 'Low-cost software, self-explanatory products, wide audience'
              },
              {
                type: 'Sales-Led Growth (SLG)',
                description: 'Sales team drives acquisition. Direct sales, account managers, relationship-based.',
                when: 'Enterprise, high-value deals, complex solutions'
              },
              {
                type: 'Inbound Marketing',
                description: 'Content and marketing drive inbound demand. Buyers come to you.',
                when: 'Competitive markets, long sales cycles, educational products'
              },
              {
                type: 'Community-Led Growth',
                description: 'Community of users drives growth. User networks, community management, word-of-mouth.',
                when: 'Developer tools, niche communities, authentic brands'
              },
              {
                type: 'Channel-Led Growth',
                description: 'Partners and channels drive growth. Resellers, integrations, ecosystems.',
                when: 'B2B, partnerships, complementary products'
              },
              {
                type: 'Account-Based Marketing (ABM)',
                description: 'Focus on specific high-value accounts with personalized campaigns.',
                when: 'Enterprise, large deal values, concentrated markets'
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border border-gray-200 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{item.type}</h3>
                <p className="text-gray-700 text-sm mb-3">{item.description}</p>
                <p className="text-xs text-gray-600"><strong>When to use:</strong> {item.when}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GTM Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">The GTM Development Process</h2>
          <div className="space-y-8">
            {[
              {
                phase: 'Phase 1: Discovery & Validation (Weeks 1-4)',
                activities: [
                  'Talk to 20-30 prospective customers',
                  'Validate problem and need',
                  'Research competitor alternatives',
                  'Understand buying process'
                ]
              },
              {
                phase: 'Phase 2: Strategy Development (Weeks 5-8)',
                activities: [
                  'Define target market and ICP',
                  'Create positioning and messaging',
                  'Choose go-to-market channels',
                  'Determine pricing strategy'
                ]
              },
              {
                phase: 'Phase 3: Launch Planning (Weeks 9-12)',
                activities: [
                  'Create launch timeline',
                  'Develop marketing assets',
                  'Brief sales team',
                  'Coordinate with partners'
                ]
              },
              {
                phase: 'Phase 4: Soft Launch (Weeks 13-16)',
                activities: [
                  'Launch to small group',
                  'Get initial feedback',
                  'Refine positioning if needed',
                  'Build case studies'
                ]
              },
              {
                phase: 'Phase 5: Public Launch (Week 17+)',
                activities: [
                  'Go to market with full campaign',
                  'Generate awareness and demand',
                  'Acquire and onboard customers',
                  'Measure and optimize'
                ]
              },
              {
                phase: 'Phase 6: Optimization (Ongoing)',
                activities: [
                  'Track metrics and KPIs',
                  'Analyze what\'s working',
                  'Optimize channels',
                  'Expand and scale'
                ]
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-500 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{item.phase}</h3>
                <ul className="space-y-2">
                  {item.activities.map((activity, j) => (
                    <li key={j} className="flex gap-3 text-gray-700">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common GTM Mistakes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Common GTM Mistakes to Avoid</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                mistake: 'No Clear Target Customer',
                problem: 'Trying to sell to everyone means you appeal to no one. Unfocused GTM wastes resources.',
                solution: 'Define a specific ICP. Start with a niche and expand.'
              },
              {
                mistake: 'Weak Positioning',
                problem: 'Customers don\'t understand what makes you different. Too many "me too" messages.',
                solution: 'Spend time on positioning. Test messaging with customers.'
              },
              {
                mistake: 'Wrong Channels',
                problem: 'Spending on ads when community channels would work better. Mismatched audience-channel fit.',
                solution: 'Test channels. Find where your customers hang out.'
              },
              {
                mistake: 'No MVP/Validation',
                problem: 'Building elaborate GTM for a product customers don\'t want. Wasting money on marketing bad product.',
                solution: 'Validate problem and solution before GTM. Start small.'
              },
              {
                mistake: 'Ignoring Customer Success',
                problem: 'Getting customers but they churn. No long-term revenue or referrals.',
                solution: 'GTM includes retention. Invest in customer success early.'
              },
              {
                mistake: 'Not Measuring',
                problem: 'No data on what\'s working. Can\'t optimize. Flying blind.',
                solution: 'Set up analytics day 1. Track everything. Measure constantly.'
              },
              {
                mistake: 'Copying Competitors',
                problem: 'Using GTM strategy that works for them but not for you. Different market, different strategy needed.',
                solution: 'Learn from others but customize to your situation.'
              },
              {
                mistake: 'No Team Alignment',
                problem: 'Product, marketing, sales teams pulling in different directions. No shared plan.',
                solution: 'Align team on GTM strategy before execution. Weekly syncs.'
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border border-gray-200 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{item.mistake}</h3>
                <p className="text-sm text-gray-700 mb-3"><strong>Problem:</strong> {item.problem}</p>
                <p className="text-sm text-blue-700"><strong>Solution:</strong> {item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-6">Now Build Your GTM</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Understand what GTM is. Now it's time to develop your strategy. Get our GTM framework and template.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/gtm-strategy-template" className="px-10 py-5 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">Get GTM Template</Link>
            <Link href="/gtm-strategy" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-600 transition-colors">Learn GTM Strategy</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
