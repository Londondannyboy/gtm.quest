import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'McKinsey GTM Strategy | Go-to-Market Framework | GTM Quest',
  description: 'Understand McKinsey\'s go-to-market strategy approach. Learn the framework and methodologies used by McKinsey for GTM consulting.',
  keywords: 'mckinsey gtm, mckinsey go-to-market strategy, mckinsey framework, mckinsey gtm approach',
  alternates: { canonical: 'https://gtm.quest/mckinsey-gtm-strategy' },
  openGraph: {
    title: 'McKinsey GTM Strategy Framework',
    description: 'Understanding the GTM approach used by McKinsey & Company.',
    type: 'website'
  }
}

export default function McKinseyGTMPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-blue-400 text-blue-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Framework</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">McKinsey<br /><span className="text-blue-300">GTM Strategy</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">Understand the go-to-market framework and methodologies used by McKinsey & Company for successful market entry and product launches.</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">McKinsey's GTM Approach</h2>
          <div className="bg-white p-8 rounded-lg border-2 border-blue-500 mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              McKinsey & Company is one of the world's most influential management consulting firms. Their go-to-market frameworks are used by companies across industries to launch products, enter new markets, and accelerate growth. While McKinsey doesn't publish their exact GTM framework, their approach is grounded in rigorous market analysis, customer insights, and systematic execution.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This guide explains McKinsey's GTM philosophy and key principles so you can apply them to your own launches.
            </p>
          </div>

          <h3 className="text-2xl font-black text-gray-900 mb-6">Core Principles</h3>
          <div className="space-y-4">
            {[
              {
                principle: 'Customer-Centric Approach',
                description: 'McKinsey emphasizes deep customer research and insight. Before designing any GTM, they spend time understanding customer needs, pain points, buying behaviors, and decision processes.'
              },
              {
                principle: 'Data-Driven Decision Making',
                description: 'Every element of GTM is backed by data. Market size estimates, competitive analysis, pricing analysis, and channel selection are all grounded in quantitative research.'
              },
              {
                principle: 'Segmentation and Targeting',
                description: 'Rather than a one-size-fits-all approach, McKinsey segments the market and targets specific, attractive segments. Different GTM approaches for different segments.'
              },
              {
                principle: 'Competitive Positioning',
                description: 'Clear differentiation vs. alternatives. McKinsey helps clients understand their competitive advantage and articulate it clearly to customers.'
              },
              {
                principle: 'Systemic Alignment',
                description: 'GTM isn\'t just marketing. McKinsey aligns product, pricing, distribution, sales, and customer success around the same strategy.'
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">{item.principle}</h4>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* McKinsey Framework */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">The McKinsey GTM Framework (Inferred)</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            While McKinsey doesn't publicly release proprietary frameworks, their GTM work typically follows this systematic approach:
          </p>

          <div className="space-y-6">
            {[
              {
                phase: 'Phase 1: Market Assessment & Opportunity Sizing',
                focus: 'Understanding the market landscape',
                activities: [
                  'Market size estimation (TAM, SAM, SOM)',
                  'Growth trends and market dynamics',
                  'Customer segmentation and profiling',
                  'Competitive landscape analysis',
                  'Pricing benchmarking',
                  'Channel analysis and trends'
                ],
                deliverable: 'Market opportunity assessment and investment decision'
              },
              {
                phase: 'Phase 2: Customer Insight & Requirements',
                focus: 'Understanding customer needs and buying behavior',
                activities: [
                  'Deep customer interviews (20+ interviews)',
                  'Buyer journey mapping',
                  'Buying committee analysis (roles, influence)',
                  'Decision criteria and trade-offs',
                  'Willingness to pay analysis',
                  'Customer job mapping (JTBD framework)'
                ],
                deliverable: 'Detailed customer personas and positioning requirements'
              },
              {
                phase: 'Phase 3: Competitive & Positioning Analysis',
                focus: 'Understanding alternatives and defining positioning',
                activities: [
                  'Competitive offering analysis (features, pricing, positioning)',
                  'Win/loss analysis of existing customers',
                  'Competitive blind spots and opportunities',
                  'Positioning options analysis',
                  'Messaging framework development',
                  'Value proposition testing'
                ],
                deliverable: 'Positioning and messaging strategy'
              },
              {
                phase: 'Phase 4: GTM Strategy Development',
                focus: 'Designing the complete go-to-market approach',
                activities: [
                  'Target customer selection (by segment)',
                  'Channel strategy (direct sales, indirect, community, etc.)',
                  'Sales motion design (discovery, demo, negotiation)',
                  'Pricing and packaging strategy',
                  'Launch sequencing and phasing',
                  'Metrics and KPIs definition'
                ],
                deliverable: 'Comprehensive GTM strategy and roadmap'
              },
              {
                phase: 'Phase 5: Execution Planning & Organization',
                focus: 'Operationalizing the GTM strategy',
                activities: [
                  'Sales and marketing function design',
                  'Team roles and responsibilities',
                  'Sales enablement and training',
                  'Marketing campaigns and tactics',
                  'Launch timeline and milestones',
                  'Success metrics and tracking'
                ],
                deliverable: 'Implementation roadmap and organizational structure'
              },
              {
                phase: 'Phase 6: Launch & Monitoring',
                focus: 'Executing and refining based on market response',
                activities: [
                  'Launch execution across channels',
                  'Daily/weekly performance monitoring',
                  'Rapid optimization based on data',
                  'Market response analysis',
                  'Competitive reaction assessment',
                  'Course correction as needed'
                ],
                deliverable: 'Launch results and optimization plan'
              },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-black text-gray-900">{item.phase}</h3>
                    <p className="text-sm text-blue-600 font-semibold mt-1">{item.focus}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Key Activities:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {item.activities.map((activity, j) => (
                      <li key={j} className="flex gap-2 text-gray-700 text-sm">
                        <span className="text-blue-500 font-bold">✓</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-blue-100 rounded-lg">
                  <p className="text-sm font-bold text-blue-900">
                    <strong>Deliverable:</strong> {item.deliverable}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">What Makes McKinsey's GTM Approach Different</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                aspect: 'Rigor & Methodology',
                description: 'Systematic, proven frameworks. Not intuition-based. Every conclusion backed by data and customer research.'
              },
              {
                aspect: 'Breadth of Perspective',
                description: 'Experience across industries and markets. They bring best practices from other sectors to yours.'
              },
              {
                aspect: 'Executive Engagement',
                description: 'Works directly with C-suite. Ensures GTM strategy drives organizational alignment and resource commitment.'
              },
              {
                aspect: 'Quantitative Analysis',
                description: 'Market sizing, pricing analysis, financial modeling. Quantifies the opportunity and validates assumptions.'
              },
              {
                aspect: 'Implementation Focus',
                description: 'Doesn\'t just create strategy - helps execute it. Hands-on during launch phase.'
              },
              {
                aspect: 'Long-Term Perspective',
                description: 'Plans for sustainable growth, not just initial launch. Includes retention, expansion, and scaling.'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{item.aspect}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* McKinsey Tools & Concepts */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">McKinsey Tools & Concepts Used in GTM</h2>
          <div className="space-y-6">
            {[
              {
                tool: 'Market Segmentation & Attractiveness (Bubble Charts)',
                how_used: 'Identify which customer segments are most attractive to enter based on market size and growth'
              },
              {
                tool: 'Ansoff Matrix',
                how_used: 'Define whether strategy is market penetration, product development, diversification, or expansion'
              },
              {
                tool: '3-Horizons Framework',
                how_used: 'Balance GTM efforts across core business (Horizon 1), emerging opportunities (Horizon 2), and experimental ideas (Horizon 3)'
              },
              {
                tool: 'Value Chain Analysis',
                how_used: 'Understand where to compete and where to partner in the ecosystem'
              },
              {
                tool: 'BCG Matrix',
                how_used: 'Prioritize products/channels/segments based on market growth and relative market share'
              },
              {
                tool: 'Scenario Planning',
                how_used: 'Develop GTM contingency plans for different market outcomes'
              },
              {
                tool: 'Customer Journey Mapping',
                how_used: 'Understand all touchpoints and optimize marketing and sales interventions'
              },
              {
                tool: 'Pricing Strategy Framework',
                how_used: 'Determine optimal pricing based on value, cost, competition, and customer willingness to pay'
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{item.tool}</h3>
                <p className="text-gray-700 text-sm">{item.how_used}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Use McKinsey Approach */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Use a McKinsey-Style GTM Approach</h2>
          <div className="bg-white p-8 rounded-lg border-2 border-blue-500">
            <h3 className="font-bold text-gray-900 mb-6">Best for:</h3>
            <ul className="space-y-3 mb-8">
              {[
                'Enterprise launches (high stakes, large investment)',
                'Market entry into new geographies or industries',
                'New business unit or division launches',
                'Competitive repositioning or market shift',
                'Complex B2B products with long sales cycles',
                'Multi-stakeholder decision-making required',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-gray-900 mb-6">Cost/Timeline:</h3>
            <p className="text-gray-700 mb-4">
              A McKinsey GTM engagement typically costs £200k-£500k+ and takes 2-4 months. This investment makes sense for markets worth £50M+ and deals with significant organizational impact.
            </p>

            <h3 className="font-bold text-gray-900 mb-3">Alternative (Lower Cost):</h3>
            <p className="text-gray-700">
              For startups and smaller companies, many of McKinsey's principles can be applied at a much lower cost through boutique GTM consultants, agencies, or doing it yourself using their frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Apply These Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Apply McKinsey's Principles to Your GTM (No Consulting Fee)</h2>
          <div className="space-y-6">
            {[
              {
                principle: '1. Start with Market Research',
                action: 'Interview 20+ prospective customers before finalizing strategy. Understand their needs, buying process, and decision criteria.'
              },
              {
                principle: '2. Quantify the Opportunity',
                action: 'Build a TAM/SAM/SOM model. Size your addressable market and set realistic targets.'
              },
              {
                principle: '3. Analyze Competition',
                action: 'Map competitor offerings, positioning, pricing. Identify your differentiation and unique value.'
              },
              {
                principle: '4. Develop Clear Positioning',
                action: 'Write a positioning statement. Test it with customers. Refine messaging based on feedback.'
              },
              {
                principle: '5. Segment Your Market',
                action: 'Don\'t target everyone. Identify highest-value segments. Develop tailored GTM for each.'
              },
              {
                principle: '6. Align Organization',
                action: 'Make sure product, pricing, sales, marketing, and support all align with GTM strategy.'
              },
              {
                principle: '7. Measure Everything',
                action: 'Set KPIs before launch. Track them daily. Be ready to adjust based on data.'
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{item.principle}</h3>
                <p className="text-gray-700 text-sm">{item.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-6">Apply McKinsey Principles Without McKinsey Costs</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Use McKinsey's rigorous GTM framework without the six-figure consulting fee. Download our template and get expert guidance.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/gtm-strategy-template" className="px-10 py-5 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">Get GTM Template</Link>
            <Link href="/go-to-market-consultant" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-600 transition-colors">Talk to GTM Expert</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
