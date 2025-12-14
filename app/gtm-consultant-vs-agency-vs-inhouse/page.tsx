import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'GTM Consultant vs Agency vs In-House | Comparison Guide | GTM Quest',
  description: 'Compare GTM consultant, agency, and in-house approaches. Understand costs, benefits, and when to use each strategy for product launches.',
  keywords: 'gtm consultant vs agency, in-house gtm, go-to-market consultant vs agency, gtm strategy options, gtm agency',
  alternates: { canonical: 'https://gtm.quest/gtm-consultant-vs-agency-vs-inhouse' },
  openGraph: {
    title: 'GTM Consultant vs Agency vs In-House',
    description: 'Understand the pros and cons of each approach to building your go-to-market strategy.',
    type: 'website'
  }
}

export default function GTMComarisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-blue-400 text-blue-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Comparison Guide</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">GTM Consultant<br /><span className="text-blue-300">vs Agency vs In-House</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">Understand the pros, cons, and costs of each approach. Choose the right strategy for your business stage and needs.</p>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-6 py-4 text-left font-bold">Factor</th>
                  <th className="px-6 py-4 text-left font-bold">Consultant</th>
                  <th className="px-6 py-4 text-left font-bold">Agency</th>
                  <th className="px-6 py-4 text-left font-bold">In-House</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { factor: 'Cost (Project)', consultant: '£15k-50k', agency: '£30k-150k+', inHouse: '£50k-100k+/year' },
                  { factor: 'Time to Implement', consultant: '2-6 weeks', agency: '4-12 weeks', inHouse: '2-3 months (hiring) + ongoing' },
                  { factor: 'Deep Expertise', consultant: '⭐⭐⭐⭐⭐', agency: '⭐⭐⭐⭐', inHouse: '⭐⭐⭐ (depends on hire)' },
                  { factor: 'Flexibility', consultant: '⭐⭐⭐⭐⭐', agency: '⭐⭐⭐⭐', inHouse: '⭐⭐⭐' },
                  { factor: 'Scalability', consultant: '⭐⭐⭐', agency: '⭐⭐⭐⭐', inHouse: '⭐⭐⭐⭐⭐' },
                  { factor: 'Cultural Fit', consultant: '⭐⭐⭐', agency: '⭐⭐⭐', inHouse: '⭐⭐⭐⭐⭐' },
                  { factor: 'Long-term Value', consultant: '⭐⭐⭐⭐', agency: '⭐⭐⭐', inHouse: '⭐⭐⭐⭐⭐' },
                  { factor: 'Accountability', consultant: '⭐⭐⭐⭐', agency: '⭐⭐⭐⭐⭐', inHouse: '⭐⭐⭐⭐' },
                ].map((row, i) => (
                  <tr key={i} className="bg-white hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-900">{row.factor}</td>
                    <td className="px-6 py-4 text-gray-700">{row.consultant}</td>
                    <td className="px-6 py-4 text-gray-700">{row.agency}</td>
                    <td className="px-6 py-4 text-gray-700">{row.inHouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deep Dive Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Detailed Comparison</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultant Column */}
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-8 p-6 bg-blue-50 rounded-lg">👤 GTM Consultant</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">✓ Best For</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Quick GTM strategy & roadmap</li>
                    <li>• Limited budget launches</li>
                    <li>• Specific GTM expertise gaps</li>
                    <li>• Executive coaching</li>
                    <li>• Strategic guidance and advice</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">✓ Pros</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Cost-effective for strategy</li>
                    <li>• Fast execution</li>
                    <li>• Deep expertise and experience</li>
                    <li>• Flexible engagement</li>
                    <li>• Objective outside perspective</li>
                    <li>• Work with your team</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">✗ Cons</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Limited ongoing support</li>
                    <li>• Strategy only, not execution</li>
                    <li>• Dependency on availability</li>
                    <li>• Knowledge leaves after engagement</li>
                    <li>• Limited scalability</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">💰 Investment</h4>
                  <p className="text-sm font-mono bg-blue-50 p-3 rounded">
                    £15k-50k<br/>per engagement
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">⏱️ Timeline</h4>
                  <p className="text-sm text-gray-700">
                    2-6 weeks to deliver strategy
                  </p>
                </div>
              </div>
            </div>

            {/* Agency Column */}
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-8 p-6 bg-purple-50 rounded-lg">🏢 GTM Agency</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">✓ Best For</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Full-service launch execution</li>
                    <li>• Marketing campaign creation</li>
                    <li>• Content and creative assets</li>
                    <li>• Multiple channel management</li>
                    <li>• Ongoing campaign optimization</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">✓ Pros</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• End-to-end execution</li>
                    <li>• Multi-disciplinary team</li>
                    <li>• Creative asset development</li>
                    <li>• Campaign management</li>
                    <li>• Ongoing optimization</li>
                    <li>• Accountability and reporting</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">✗ Cons</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Higher cost</li>
                    <li>• Longer engagement cycles</li>
                    <li>• May lack deep product knowledge</li>
                    <li>• Resource constraints</li>
                    <li>• Account management overhead</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">💰 Investment</h4>
                  <p className="text-sm font-mono bg-purple-50 p-3 rounded">
                    £30k-150k+<br/>per campaign
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">⏱️ Timeline</h4>
                  <p className="text-sm text-gray-700">
                    4-12 weeks for full campaign
                  </p>
                </div>
              </div>
            </div>

            {/* In-House Column */}
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-8 p-6 bg-green-50 rounded-lg">🏭 In-House Team</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">✓ Best For</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Ongoing GTM execution</li>
                    <li>• Multiple product launches</li>
                    <li>• Brand consistency</li>
                    <li>• Long-term growth strategy</li>
                    <li>• Cross-functional leadership</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">✓ Pros</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Deep company knowledge</li>
                    <li>• Scalable for multiple launches</li>
                    <li>• Cultural integration</li>
                    <li>• Long-term learning</li>
                    <li>• Team ownership</li>
                    <li>• Direct accountability</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">✗ Cons</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• High upfront cost</li>
                    <li>• Long hiring process</li>
                    <li>• Potential expertise gaps</li>
                    <li>• Slower to scale expertise</li>
                    <li>• Turnover risk</li>
                    <li>• Fixed costs regardless of usage</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">💰 Investment</h4>
                  <p className="text-sm font-mono bg-green-50 p-3 rounded">
                    £50k-100k+<br/>per year (salary)
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">⏱️ Timeline</h4>
                  <p className="text-sm text-gray-700">
                    2-3 months hiring + onboarding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Choose Each */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">When to Choose Each Approach</h2>

          <div className="space-y-8">
            <div className="bg-blue-50 border-2 border-blue-500 p-8 rounded-lg">
              <h3 className="text-xl font-black text-gray-900 mb-4">Choose a GTM Consultant When:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• You need GTM strategy but have limited budget (seed to Series A)</li>
                <li>• You have internal execution capacity but lack strategic guidance</li>
                <li>• You need quick, focused expertise on a specific problem</li>
                <li>• You want to validate your go-to-market approach before scaling</li>
                <li>• You're unsure about positioning, pricing, or channel strategy</li>
                <li>• You need executive coaching for your founder/product team</li>
                <li>• Timeline is tight and you need expertise immediately</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-2 border-purple-500 p-8 rounded-lg">
              <h3 className="text-xl font-black text-gray-900 mb-4">Choose a GTM Agency When:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• You have the budget for full-service execution (Series B+)</li>
                <li>• You need campaign development, creative assets, and content</li>
                <li>• You want to focus internally on product while agency handles launch</li>
                <li>• You need multi-channel launch coordination</li>
                <li>• You want external accountability and reporting</li>
                <li>• You need design, copywriting, and marketing expertise under one roof</li>
                <li>• You're launching multiple products and need sustained support</li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-500 p-8 rounded-lg">
              <h3 className="text-xl font-black text-gray-900 mb-4">Choose In-House When:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• You're planning multiple product launches over time</li>
                <li>• You can afford dedicated GTM leadership ($50k-150k+/year)</li>
                <li>• You need deep company and product knowledge</li>
                <li>• You're at Series B+ with established product-market fit</li>
                <li>• You want to build proprietary GTM processes and IP</li>
                <li>• You need cross-functional GTM leadership across teams</li>
                <li>• Long-term brand consistency and cultural integration matter</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid Approaches */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Hybrid Approaches (Best of Both Worlds)</h2>

          <div className="space-y-6">
            {[
              {
                title: 'Consultant + In-House (Early Stage)',
                description: 'Bring in a consultant for 3-6 months to develop GTM strategy and coach your team, then hand off execution to your emerging in-house capability. Cost-effective way to build GTM muscle.',
                ideal: 'Seed to Series A companies with execution capacity but limited GTM expertise'
              },
              {
                title: 'Consultant + Agency (Time Pressure)',
                description: 'Consultant develops strategy and provides creative direction, agency executes campaigns and manages day-to-day. Best of both strategic and operational worlds.',
                ideal: 'Companies with short launch timelines and complex go-to-market needs'
              },
              {
                title: 'In-House + Agency (Scaling)',
                description: 'Your in-house GTM leader sets strategy, agency provides specialized execution and capacity. Clear division of strategy vs. execution.',
                ideal: 'Series B+ companies with established GTM leadership needing execution capacity'
              },
              {
                title: 'Consultant + In-House + Agency (Complex Launches)',
                description: 'Consultant develops strategy, in-house team coordinates, agency executes specialized campaigns. Most expensive but powerful for complex products.',
                ideal: 'Enterprise companies with high-stakes, multi-market launches'
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-3">{item.description}</p>
                <p className="text-sm text-gray-600"><strong>Ideal for:</strong> {item.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Total Cost of Ownership Comparison</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                approach: 'Consultant Only',
                costs: [
                  'Strategy engagement: £20k',
                  'Execution (your team): Internal cost',
                  'Total Year 1: £20k-30k'
                ],
                note: 'Cheapest upfront, but relies on your team for execution'
              },
              {
                approach: 'Agency Only',
                costs: [
                  'Strategy + execution: £50k-100k',
                  'Ongoing optimization: £20k-30k/month',
                  'Total Year 1: £290k-460k'
                ],
                note: 'Highest cost, most comprehensive but least control'
              },
              {
                approach: 'In-House Hire',
                costs: [
                  'Salary + benefits: £60k-100k',
                  'Hiring cost: £5k-10k',
                  'Total Year 1: £65k-110k'
                ],
                note: 'High upfront, but scales for multiple launches'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border-2 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-4">{item.approach}</h3>
                <div className="space-y-2 mb-6 font-mono text-sm">
                  {item.costs.map((cost, j) => (
                    <p key={j} className="text-gray-700">{cost}</p>
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic border-t pt-4">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Decision Framework</h2>

          <div className="bg-gray-50 p-8 rounded-lg space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Ask Yourself These Questions:</h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'What\'s your budget?',
                  a: 'Budget determines which options are viable. Consultants are cheapest, in-house is middle-ground, agencies are most expensive.'
                },
                {
                  q: 'What do you need most?',
                  a: 'Strategy? → Consultant. Execution? → Agency. Both long-term? → In-house. All together? → Hybrid.'
                },
                {
                  q: 'Do you have internal execution capacity?',
                  a: 'Strong internal team? Hire a consultant for strategy. Weak team? Need agency support or in-house hire.'
                },
                {
                  q: 'How many launches ahead?',
                  a: 'Single launch? Consultant/agency. Multiple launches? In-house hire makes sense.'
                },
                {
                  q: 'How urgently do you need to launch?',
                  a: 'Tight timeline? Agency can scale fastest. Flexible timeline? Consultant is cheaper and works with your team.'
                },
                {
                  q: 'Do you need creative assets?',
                  a: 'Yes? Agency has design/copy/creative in-house. No? Consultant might be sufficient.'
                },
                {
                  q: 'How complex is your go-to-market?',
                  a: 'Simple? Consultant. Complex (multi-market, multiple channels)? Agency or in-house.'
                },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-blue-500 pl-6 py-4">
                  <h4 className="font-bold text-gray-900 mb-2">{item.q}</h4>
                  <p className="text-gray-700">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-6">Ready to Plan Your GTM?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Get expert guidance on your go-to-market strategy. Whether you choose a consultant, agency, or build in-house, we can help.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/go-to-market-consultant" className="px-10 py-5 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">Work With a Consultant</Link>
            <Link href="/contact" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-600 transition-colors">Schedule Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
