import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Marketplace GTM Strategy | Platform Launch Guide | GTM Quest',
  description: 'Go-to-market strategy for marketplaces and platforms. Learn how to launch two-sided marketplaces and build network effects.',
  keywords: 'marketplace gtm, platform gtm, two-sided marketplace, marketplace strategy, network effects gtm',
  alternates: { canonical: 'https://gtm.quest/marketplace-gtm-strategy' },
  openGraph: {
    title: 'Marketplace GTM Strategy | Platform Guide',
    description: 'Master the unique challenges of launching two-sided marketplaces.',
    type: 'website'
  }
}

export default function MarketplaceGTMPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-blue-400 text-blue-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Vertical Guide</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Marketplace<br /><span className="text-blue-300">GTM Strategy</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">Master two-sided marketplaces. Learn how to bootstrap liquidity, acquire both sides, and create network effects for exponential growth.</p>
          </div>
        </div>
      </section>

      {/* Marketplace Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">The Chicken & Egg Problem</h2>
          <div className="bg-white p-8 rounded-lg border-2 border-blue-500 mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Two-sided marketplaces face the fundamental "chicken and egg" problem: You need buyers to attract sellers, and you need sellers to attract buyers. But neither side will join until the other side is there.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Success requires breaking this deadlock through strategic GTM that focuses on one side first, then expanding to the other.
            </p>
          </div>

          <h3 className="text-2xl font-black text-gray-900 mb-6">Core Marketplace Challenges</h3>
          <div className="space-y-4">
            {[
              {
                challenge: 'Bootstrap Problem',
                desc: 'You need critical mass on both sides simultaneously, but building is slower initially'
              },
              {
                challenge: 'Supply Quality',
                desc: 'Bad supply (low-quality sellers/products) kills buyer trust. Quality control is essential GTM'
              },
              {
                challenge: 'Demand Generation',
                desc: 'Buyer acquisition is expensive. Need profitable unit economics or will burn cash'
              },
              {
                challenge: 'Network Effects',
                desc: 'Positive feedback loops take time. Negative feedback (bad experiences) happen immediately'
              },
              {
                challenge: 'Platform Risk',
                desc: 'Built on your platform but not your business. Participants can leave for competitors'
              },
              {
                challenge: 'Pricing Complexity',
                desc: 'Two-sided pricing is tricky. Too much on one side, they leave. Too little, you don\'t profit'
              },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-gradient-to-r from-red-50 to-blue-50 border-l-4 border-red-500 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-1">{item.challenge}</h4>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace GTM Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Marketplace GTM Strategies</h2>
          <div className="space-y-8">
            {[
              {
                strategy: 'Focus on One Side First (Asymmetric Growth)',
                description: 'Bootstrap by focusing intensely on one side (usually supply). Once supply is robust, demand becomes easier to acquire.',
                examples: [
                  'Uber started by recruiting drivers first in San Francisco. Once supply was reliable, buyer acquisition was easy.',
                  'Airbnb focused on supply (hosts) first. Great selection made acquiring guests much easier.',
                  'Etsy started with curated sellers before promoting to buyers.'
                ],
                tactics: [
                  'Hand-recruit sellers/providers with incentives',
                  'Quality over quantity - start with high-quality supply',
                  'Once supply is strong, launch buyer acquisition campaigns'
                ]
              },
              {
                strategy: 'Manual & Hand-Curated Initially',
                description: 'Don\'t wait for algorithms. Manually curate, recruit, and support early participants. This builds trust and quality.',
                examples: [
                  'Task Rabbit founders hand-recruited first taskers from local communities',
                  'DoorDash founders personally delivered food to test the platform',
                  'Airbnb spent time with early hosts to improve listings'
                ],
                tactics: [
                  'Founders/team are first sellers/providers',
                  'Personal outreach and recruitment',
                  'Direct support and feedback loops'
                ]
              },
              {
                strategy: 'Create Abundance on Supply Side',
                description: 'Make supply abundant to reduce friction for buyers. Abundance is the GTM message.',
                examples: [
                  'DoorDash: "Restaurants near you, delivered in 30 minutes"',
                  'Instacart: "Everything you need from your favorite local stores"',
                  'TaskRabbit: "Help for any task, available now"'
                ],
                tactics: [
                  'Subsidize supply-side acquisition heavily initially',
                  'Recruit multiple suppliers in each category',
                  'Focus on availability and speed'
                ]
              },
              {
                strategy: 'Geographic Focus & Density',
                description: 'Dominate one geography completely before expanding. Network effects are localized.',
                examples: [
                  'Uber perfected San Francisco, then expanded city by city',
                  'Airbnb dominated NYC before national expansion',
                  'DoorDash owned college towns before going national'
                ],
                tactics: [
                  'Pick one city/region for initial focus',
                  'Achieve deep penetration before expanding',
                  'Build defensibility through network effects locally'
                ]
              },
              {
                strategy: 'Incentivize Early Participation',
                description: 'Use subsidies and incentives to get both sides on board. Phase out as network effects take hold.',
                examples: [
                  'Uber: Heavy driver incentives, discounts for early riders',
                  'Airbnb: Guaranteed income programs for hosts initially',
                  'Lyft: Sign-up bonuses and ride credits for riders'
                ],
                tactics: [
                  'Subsidize one side (usually supply) heavily',
                  'Sign-up bonuses for both sides',
                  'First-ride/service guarantees and incentives',
                  'Gradually reduce as network effects strengthen'
                ]
              },
              {
                strategy: 'Use Content & Community for Demand',
                description: 'Content, education, and community building drives buyer acquisition without expensive CAC.',
                examples: [
                  'TaskRabbit: Content about DIY projects, when to hire help',
                  'Airbnb: Travel guides and experiences content',
                  'Etsy: Community forums, tutorials, seller stories'
                ],
                tactics: [
                  'Create content for first-time buyer problems',
                  'Build community around the platform',
                  'Showcase successful transactions and stories'
                ]
              },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{item.strategy}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>

                {item.examples && (
                  <div className="mb-4">
                    <p className="font-bold text-gray-900 text-sm mb-2">Real Examples:</p>
                    <ul className="space-y-1">
                      {item.examples.map((ex, j) => (
                        <li key={j} className="text-gray-700 text-sm">• {ex}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="p-4 bg-white rounded border border-blue-200">
                  <p className="font-bold text-gray-900 text-sm mb-2">Tactics:</p>
                  <ul className="space-y-1">
                    {item.tactics.map((tactic, j) => (
                      <li key={j} className="text-gray-700 text-sm">→ {tactic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Marketplace GTM Metrics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                metric: 'GMV (Gross Merchandise Value)',
                description: 'Total transaction value on your platform. Primary growth metric for marketplaces.'
              },
              {
                metric: 'Take Rate',
                description: 'Percentage of each transaction you keep. Typically 15-30% depending on marketplace.'
              },
              {
                metric: 'Network Effect Strength',
                description: 'How much does value increase with more participants? Measured by growth acceleration.'
              },
              {
                metric: 'Buyer Retention',
                description: 'What % of buyers return? High retention indicates strong supply quality and experience.'
              },
              {
                metric: 'Seller Retention',
                description: 'What % of sellers stay active? Supply quality depends on retaining good sellers.'
              },
              {
                metric: 'Transaction Growth',
                description: 'Growth in number of transactions month-over-month. Leading indicator of platform health.'
              },
              {
                metric: 'Liquidity (Supply/Demand Ratio)',
                description: 'Is there enough supply for all buyers? Critical metric for marketplace health.'
              },
              {
                metric: 'Unit Economics',
                description: 'CAC, LTV, payback period. Can you sustain the business at your take rate?'
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

      {/* Marketplace Competitive Moats */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Building Competitive Moats</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Marketplaces are vulnerable to competition. Once you prove the model works, competitors enter. Build moats early.
          </p>
          <div className="space-y-4">
            {[
              {
                moat: 'Network Effects',
                description: 'More participants make the platform more valuable. Becomes self-reinforcing and hard to disrupt.'
              },
              {
                moat: 'Supply Concentration',
                description: 'Best suppliers/providers choose your platform. Quality and exclusivity keep them.'
              },
              {
                moat: 'Brand Trust',
                description: 'Brand becomes synonym for category (Uber = ride-sharing, Airbnb = home-sharing).'
              },
              {
                moat: 'Data & Learning',
                description: 'Algorithms improve with more data. Matching gets better, UX improves, retention increases.'
              },
              {
                moat: 'Switching Costs',
                description: 'Suppliers invested effort (reputation, reviews, logistics). Hard to switch.'
              },
              {
                moat: 'Geographic Density',
                description: 'Own specific geographies so completely that expansion is uneconomical for competitors.'
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{item.moat}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-6">Launch Your Marketplace</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Master two-sided marketplace GTM. Use our framework to bootstrap supply, acquire demand, and build network effects.</p>
          <Link href="/gtm-strategy-template" className="px-10 py-5 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors inline-block">Get GTM Template</Link>
        </div>
      </section>
    </div>
  )
}
