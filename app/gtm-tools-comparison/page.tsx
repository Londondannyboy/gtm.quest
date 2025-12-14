import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'GTM Tools Comparison | Free vs Paid Tools | GTM Quest',
  description: 'Compare go-to-market tools and platforms. GTM software comparison guide for product launches, strategy, and market entry.',
  keywords: 'gtm tools, go-to-market tools, gtm software, gtm platform comparison, free gtm tools',
  alternates: { canonical: 'https://gtm.quest/gtm-tools-comparison' },
  openGraph: {
    title: 'GTM Tools & Platforms Comparison',
    description: 'Find the right tools for your go-to-market strategy.',
    type: 'website'
  }
}

export default function GTMToolsComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-blue-400 text-blue-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Comparison</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">GTM Tools<br /><span className="text-blue-300">Comparison</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">Compare GTM tools, platforms, and software. Find the right solution for your go-to-market strategy without breaking the budget.</p>
          </div>
        </div>
      </section>

      {/* GTM Tool Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">GTM Tool Categories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: 'Strategy & Planning',
                tools: [
                  { name: 'GTM Canvas (Free)', desc: 'Our free GTM template - download and use immediately' },
                  { name: 'Lucidchart', desc: 'Visualize GTM strategy, customer journeys, org structures' },
                  { name: 'Miro', desc: 'Collaborative whiteboarding for GTM planning' },
                  { name: 'Notion', desc: 'Build GTM documentation and playbooks' }
                ]
              },
              {
                category: 'Marketing & Campaigns',
                tools: [
                  { name: 'Mailchimp (Free)', desc: 'Email marketing and basic automation' },
                  { name: 'HubSpot', desc: 'Full marketing platform with CRM integration' },
                  { name: 'Marketo', desc: 'Enterprise marketing automation' },
                  { name: 'Unbounce', desc: 'Landing page builder for campaigns' }
                ]
              },
              {
                category: 'Sales & CRM',
                tools: [
                  { name: 'HubSpot CRM (Free)', desc: 'Free CRM for managing prospects and customers' },
                  { name: 'Salesforce', desc: 'Enterprise CRM for complex sales orgs' },
                  { name: 'Pipedrive', desc: 'Sales pipeline management and tracking' },
                  { name: 'Close', desc: 'CRM focused on sales velocity' }
                ]
              },
              {
                category: 'Data & Analytics',
                tools: [
                  { name: 'Google Analytics (Free)', desc: 'Website traffic and user behavior tracking' },
                  { name: 'Mixpanel', desc: 'Product analytics and cohort analysis' },
                  { name: 'Amplitude', desc: 'User behavior analytics and retention' },
                  { name: 'Tableau', desc: 'Data visualization and dashboards' }
                ]
              },
              {
                category: 'Content & SEO',
                tools: [
                  { name: 'Google Docs (Free)', desc: 'Collaborative content creation' },
                  { name: 'Airtable', desc: 'Content management and workflow tracking' },
                  { name: 'SEMrush', desc: 'Keyword research and SEO optimization' },
                  { name: 'Grammarly', desc: 'Content editing and quality assurance' }
                ]
              },
              {
                category: 'Customer Communication',
                tools: [
                  { name: 'Intercom (Free plan)', desc: 'Customer messaging and support' },
                  { name: 'Slack', desc: 'Internal team communication' },
                  { name: 'Drift', desc: 'Live chat and conversational marketing' },
                  { name: 'Calendly', desc: 'Meeting scheduling automation' }
                ]
              },
            ].map((cat, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">{cat.category}</h3>
                <div className="space-y-3">
                  {cat.tools.map((tool, j) => (
                    <div key={j} className="pb-3 border-b border-gray-100 last:border-0">
                      <p className="font-semibold text-gray-900 text-sm">{tool.name}</p>
                      <p className="text-gray-600 text-xs">{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Paid */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Free vs Paid Tools</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border-2 border-green-500 p-8 rounded-lg">
              <h3 className="text-2xl font-black text-green-900 mb-6">✓ Start Free</h3>
              <p className="text-green-900 mb-6">Many great GTM tools have free tiers. Start here before investing in paid tools.</p>
              <div className="space-y-3">
                {[
                  'Google Analytics',
                  'HubSpot CRM & Marketing Free',
                  'Mailchimp (up to 500 contacts)',
                  'Airtable (limited rows)',
                  'Notion (personal use)',
                  'Slack (limited history)',
                  'GTM Canvas Template (download)',
                  'Intercom (basic chat)'
                ].map((tool, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-green-900">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-500 p-8 rounded-lg">
              <h3 className="text-2xl font-black text-blue-900 mb-6">💰 Invest in Paid</h3>
              <p className="text-blue-900 mb-6">When you have proven GTM need and budget, these paid tools accelerate growth.</p>
              <div className="space-y-3">
                {[
                  'HubSpot Professional (marketing automation)',
                  'Salesforce (complex sales org)',
                  'Pipedrive (sales pipeline)',
                  'Marketo (enterprise marketing)',
                  'Mixpanel (advanced analytics)',
                  'SEMrush (competitive intelligence)',
                  'Drift (conversational marketing)',
                  'Tableau (business intelligence)'
                ].map((tool, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-blue-600 font-bold">→</span>
                    <span className="text-blue-900">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Popular GTM Tools - Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-6 py-4 text-left font-bold">Tool</th>
                  <th className="px-6 py-4 text-left font-bold">Best For</th>
                  <th className="px-6 py-4 text-left font-bold">Free Plan</th>
                  <th className="px-6 py-4 text-left font-bold">Starting Price</th>
                  <th className="px-6 py-4 text-left font-bold">Learning Curve</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { tool: 'HubSpot', best: 'All-in-one marketing + CRM', free: '✓ Generous', price: '$50/mo', curve: 'Easy' },
                  { tool: 'Salesforce', best: 'Enterprise sales orgs', free: '✗ Trial only', price: '$165/mo', curve: 'Hard' },
                  { tool: 'Pipedrive', best: 'Sales teams, pipeline management', free: '✓ Limited', price: '$12.50/mo', curve: 'Easy' },
                  { tool: 'Marketo', best: 'Enterprise marketing automation', free: '✗ Trial only', price: '$1,200/mo', curve: 'Hard' },
                  { tool: 'Mixpanel', best: 'Product analytics, retention', free: '✓ Limited', price: '$999/mo', curve: 'Medium' },
                  { tool: 'Amplitude', best: 'Behavioral analytics', free: '✓ Limited', price: '$1,495/mo', curve: 'Medium' },
                  { tool: 'Mailchimp', best: 'Email marketing, basic automation', free: '✓ 500 contacts', price: '$20/mo', curve: 'Very Easy' },
                  { tool: 'Intercom', best: 'Customer communication', free: '✓ Basic', price: '$39/mo', curve: 'Easy' },
                ].map((row, i) => (
                  <tr key={i} className="bg-white hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-900">{row.tool}</td>
                    <td className="px-6 py-4 text-gray-700 text-sm">{row.best}</td>
                    <td className="px-6 py-4 text-gray-700">{row.free}</td>
                    <td className="px-6 py-4 text-gray-700">{row.price}</td>
                    <td className="px-6 py-4 text-gray-700">{row.curve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Choose the Right Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">How to Choose GTM Tools</h2>
          <div className="space-y-6">
            {[
              {
                step: '1. Define Your Needs',
                tips: [
                  'What GTM functions do you need? (strategy, marketing, sales, analytics)',
                  'How many team members will use this tool?',
                  'What\'s your budget? (startup vs enterprise)',
                  'What integrations do you need?'
                ]
              },
              {
                step: '2. Start Free',
                tips: [
                  'Every tool should have a free tier or trial',
                  'Don\'t commit to paid until you\'ve tested',
                  'Free tiers often have 90% of features you need',
                  'Use multiple free tools rather than one paid tool'
                ]
              },
              {
                step: '3. Evaluate in Context',
                tips: [
                  'Test with actual GTM workflows',
                  'Does it integrate with your other tools?',
                  'Is the learning curve acceptable?',
                  'Is customer support helpful?'
                ]
              },
              {
                step: '4. Make Decision',
                tips: [
                  'Choose the simplest tool that solves your problem',
                  'Avoid over-engineering (don\'t buy features you won\'t use)',
                  'Consider total cost of ownership (integration, training, switching)',
                  'Plan for scaling (will it grow with you?)'
                ]
              },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 rounded-lg">
                <h3 className="text-xl font-black text-gray-900 mb-4">{item.step}</h3>
                <ul className="space-y-2">
                  {item.tips.map((tip, j) => (
                    <li key={j} className="flex gap-3 text-gray-700">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-6">Start Your GTM Without Expensive Tools</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">You don't need expensive GTM software to build a winning go-to-market strategy. Download our free GTM template and start today.</p>
          <Link href="/gtm-strategy-template" className="px-10 py-5 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors inline-block">Get Free GTM Template</Link>
        </div>
      </section>
    </div>
  )
}
