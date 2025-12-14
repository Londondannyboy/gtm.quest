import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Hardware GTM Strategy | Product Launch Guide | GTM Quest',
  description: 'Go-to-market strategy for hardware products. Learn how to launch physical products, manage manufacturing, and acquire customers.',
  keywords: 'hardware gtm, hardware launch strategy, product launch hardware, hardware marketing, IoT gtm',
  alternates: { canonical: 'https://gtm.quest/hardware-gtm-strategy' },
  openGraph: {
    title: 'Hardware GTM Strategy | Launch Guide',
    description: 'Master the unique challenges of launching hardware products.',
    type: 'website'
  }
}

export default function HardwareGTMPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-blue-400 text-blue-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Vertical Guide</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Hardware<br /><span className="text-blue-300">GTM Strategy</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">Master the unique challenges of launching physical products. Navigate manufacturing, supply chains, and customer acquisition for hardware success.</p>
          </div>
        </div>
      </section>

      {/* Hardware GTM Uniqueness */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Why Hardware GTM is Different</h2>
          <div className="space-y-6">
            {[
              {
                challenge: 'Long Development Cycles',
                desc: 'Hardware takes 18-36+ months to develop, manufacture, and launch. You need GTM planning years in advance.'
              },
              {
                challenge: 'Capital Intensive',
                desc: 'Manufacturing requires significant upfront investment (tooling, production runs). GTM funding is often tied to hardware funding.'
              },
              {
                challenge: 'Supply Chain Complexity',
                desc: 'Sourcing, manufacturing, warehousing, logistics. Issues here directly impact GTM (delays, inventory problems, costs).'
              },
              {
                challenge: 'Inventory Risk',
                desc: 'Unlike software, you must predict demand accurately. Overstock ties up capital. Stockouts lose sales.'
              },
              {
                challenge: 'Channel Complexity',
                desc: 'Distribution can be direct (online), retail (Best Buy, Amazon), or partnerships. Each requires different GTM.'
              },
              {
                challenge: 'Lower Iteration Speed',
                desc: 'Software iterates weekly. Hardware iterates on production cycles (months). Less ability to adjust mid-launch.'
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border-l-4 border-blue-500 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{item.challenge}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware GTM Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Hardware GTM Timeline</h2>
          <div className="space-y-6">
            {[
              {
                phase: 'Month -24 to -18: Product Definition & GTM Strategy',
                activities: [
                  'Define target market and customer personas',
                  'GTM positioning and competitive analysis',
                  'Identify distribution channels (direct, retail, partners)',
                  'Plan launch events and PR strategy',
                  'Develop pricing strategy and cost targets'
                ]
              },
              {
                phase: 'Month -18 to -12: Design & Prototype',
                activities: [
                  'Create prototypes and test with customers',
                  'Build pre-launch awareness (teaser content)',
                  'Recruit early adopters for beta testing',
                  'Develop marketing materials and positioning',
                  'Begin retail and partnership discussions'
                ]
              },
              {
                phase: 'Month -12 to -6: Manufacturing & Production',
                activities: [
                  'Finalize manufacturing and tooling',
                  'Produce first commercial run',
                  'Continue building early adopter community',
                  'Create launch materials, videos, content',
                  'Finalize channel agreements and pricing'
                ]
              },
              {
                phase: 'Month -6 to -3: Pre-Launch',
                activities: [
                  'Finalize manufacturing and inventory',
                  'Build PR and media coverage momentum',
                  'Launch pre-orders (build customer list)',
                  'Create unboxing experiences, demos',
                  'Train retail partners and influencers'
                ]
              },
              {
                phase: 'Month -3 to 0: Launch Prep',
                activities: [
                  'Final PR push and influencer seeding',
                  'Website and e-commerce ready',
                  'Customer support trained and ready',
                  'Inventory positioned at distribution points',
                  'Launch day activities planned'
                ]
              },
              {
                phase: 'Month 0+: Launch & Scale',
                activities: [
                  'Coordinated launch across all channels',
                  'Monitor demand and adjust production',
                  'Manage customer reviews and feedback',
                  'Optimize marketing spend and channels',
                  'Plan for next generation and iterations'
                ]
              },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">{item.phase}</h3>
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

      {/* Channel Strategy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Hardware Distribution Channels</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                channel: 'Direct-to-Consumer (DTC)',
                pros: ['Higher margins', 'Direct customer relationship', 'Data and feedback', 'Control experience'],
                cons: ['Expensive marketing', 'Fulfillment complexity', 'Customer support burden'],
                best_for: 'Premium products, strong brand, $200+ price point'
              },
              {
                channel: 'Retail Partnerships',
                pros: ['Wide distribution', 'Credibility boost', 'Display and demos', 'Reduced fulfillment'],
                cons: ['Lower margins', 'Less control', 'Slotting fees', 'Retail conflicts'],
                best_for: 'Consumer products, $50-300, mass market appeal'
              },
              {
                channel: 'Online Marketplaces',
                pros: ['Large audience', 'Easy to launch', 'Instant distribution', 'Reviews and credibility'],
                cons: ['Competition', 'Lower margins', 'Less brand control', 'Fees and policies'],
                best_for: 'Accessories, consumables, $10-200 price range'
              },
              {
                channel: 'B2B & OEM',
                pros: ['Bulk orders', 'Predictable revenue', 'Partnership leverage', 'Long-term contracts'],
                cons: ['Long sales cycles', 'Custom requirements', 'Lower margins', 'Less brand visibility'],
                best_for: 'IoT, industrial, components, enterprise hardware'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">{item.channel}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-green-600 uppercase mb-2">Pros</p>
                    <ul className="space-y-1">
                      {item.pros.map((pro, j) => (
                        <li key={j} className="text-sm text-gray-700">✓ {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-600 uppercase mb-2">Cons</p>
                    <ul className="space-y-1">
                      {item.cons.map((con, j) => (
                        <li key={j} className="text-sm text-gray-700">✗ {con}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-xs font-bold text-blue-600 uppercase mb-2">Best for</p>
                    <p className="text-sm text-gray-700">{item.best_for}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware GTM Best Practices */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Hardware GTM Best Practices</h2>
          <div className="space-y-6">
            {[
              {
                practice: 'Plan GTM 18+ Months in Advance',
                description: 'Start GTM planning before manufacturing decisions. GTM shapes product features, pricing, and positioning.'
              },
              {
                practice: 'Build Pre-Order Hype',
                description: 'Use pre-orders to validate demand, fund manufacturing, and build customer list before launch.'
              },
              {
                practice: 'Invest in Unboxing Experience',
                description: 'Physical product unboxing is shareable and viral. Make it special. Encourage customers to share.'
              },
              {
                practice: 'Create Demo Experiences',
                description: 'People need to touch and feel hardware. Events, retail displays, and influencer partnerships are critical.'
              },
              {
                practice: 'Build Community Early',
                description: 'Engage with early adopters and enthusiasts. Communities drive word-of-mouth for hardware.'
              },
              {
                practice: 'Manage Supply Chain Visibility',
                description: 'Transparent communication about production, shipping, and delivery builds trust and manages expectations.'
              },
              {
                practice: 'Plan for Inventory Management',
                description: 'Balance demand forecasting with inventory. Too much ties up capital. Too little loses sales.'
              },
              {
                practice: 'Consider Hybrid Channels',
                description: 'Most successful hardware uses multiple channels (DTC + retail + online). Balance for reach and margins.'
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{item.practice}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-6">Plan Your Hardware Launch</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Use our GTM framework to plan your hardware launch. Download the template and align your team.</p>
          <Link href="/gtm-strategy-template" className="px-10 py-5 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors inline-block">Get GTM Template</Link>
        </div>
      </section>
    </div>
  )
}
