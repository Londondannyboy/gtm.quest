import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Enterprise GTM Strategy 2025 | Large Deal Sales Guide | GTM Quest',
  description: 'Go-to-market strategy for selling to large enterprises. Navigate complex buying processes, RFPs, procurement, and buying committees for high-value deals.',
  keywords: 'enterprise gtm, enterprise sales strategy, large deal gtm, enterprise software gtm, big deal selling, enterprise go-to-market',
  alternates: { canonical: 'https://gtm.quest/enterprise-gtm-strategy' },
  openGraph: {
    title: 'Enterprise GTM Strategy | Large Deal Guide',
    description: 'Master selling to large enterprises with complex buying processes and high-value deals.',
    type: 'website',
    url: 'https://gtm.quest/enterprise-gtm-strategy'
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is enterprise go-to-market strategy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprise GTM strategy is a specialized approach for selling high-value products and services to large organizations. It involves navigating complex procurement processes, building executive relationships, managing 6-12+ month sales cycles, and coordinating with multiple stakeholders including C-suite executives, procurement teams, and technical evaluators."
      }
    },
    {
      "@type": "Question",
      "name": "How long is the typical enterprise sales cycle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprise sales cycles typically range from 6-18 months depending on deal size and complexity. Deals over $500K can take 12+ months, involving multiple evaluation phases, RFP processes, security audits, legal negotiations, and procurement approval. Building pipeline 12-18 months ahead of revenue targets is essential."
      }
    },
    {
      "@type": "Question",
      "name": "What deal sizes qualify as enterprise sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprise deals typically start at $100,000 annual contract value (ACV) and can exceed $10M+ for comprehensive platform deals. The defining characteristics include complex buying committees, formal procurement processes, extensive security and compliance requirements, and multi-year contract negotiations."
      }
    },
    {
      "@type": "Question",
      "name": "How do you win enterprise RFPs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Win enterprise RFPs by: 1) Building relationships before the RFP drops to influence requirements, 2) Creating a dedicated RFP response team with subject matter experts, 3) Providing comprehensive responses with clear differentiation, 4) Including detailed implementation plans and ROI analysis, 5) Leveraging reference customers at similar enterprises, and 6) Following up proactively to address concerns."
      }
    }
  ]
}

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Enterprise Go-to-Market Strategy Guide",
  "description": "Comprehensive guide to enterprise GTM strategy including sales tactics, RFP response, and executive engagement.",
  "url": "https://gtm.quest/enterprise-gtm-strategy"
}

export default function EnterpriseGTMPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(collectionSchema)}} />

      {/* Hero Section with Stats */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm">
            <span className="mr-2">&larr;</span> Back to Home
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-400 text-blue-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Enterprise Guide</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Enterprise<br /><span className="text-blue-300">GTM Strategy</span></h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-xl mb-10">Master the art of selling to large enterprises. Navigate RFPs, procurement processes, and buying committees to close six and seven-figure deals.</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-black text-white">$100K+</div>
                  <div className="text-blue-200 text-sm">Deal Size</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white">6-18mo</div>
                  <div className="text-blue-200 text-sm">Sales Cycle</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white">15+</div>
                  <div className="text-blue-200 text-sm">Stakeholders</div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square bg-gradient-to-br from-blue-400/20 to-slate-600/20 rounded-3xl flex items-center justify-center border border-blue-400/30">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">ENTERPRISE</div>
                  <div className="text-2xl text-blue-200">Strategic Sales Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Enterprise GTM - 3 paragraphs with external links */}
      <section className="py-20 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-10">Understanding Enterprise Sales</h2>
          <div className="space-y-8 text-xl text-white/90 leading-relaxed">
            <p>
              Enterprise sales represents the pinnacle of B2B go-to-market complexity. According to <a href="https://www.gartner.com/en/sales/insights/buying-groups" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Gartner's enterprise buying research</a>, the average enterprise purchase now involves 11+ stakeholders, each with distinct evaluation criteria and veto power. This creates what researchers call "buying paralysis" where the biggest competitor isn't a rival vendor but rather the status quo and inability to reach internal consensus.
            </p>
            <p>
              The economics of enterprise GTM demand patience and precision. <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-big-reset-data-driven-sales-in-the-new-b2b-growth-era" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">McKinsey analysis</a> shows that enterprise customer acquisition costs often exceed $100,000, meaning only high-value, long-term contracts provide positive unit economics. The key is extreme focus on ideal customers who will expand and renew, building a portfolio of reference accounts that accelerate future sales cycles through peer validation.
            </p>
            <p>
              Modern enterprise buying has shifted dramatically toward digital-first engagement. <a href="https://www.forrester.com/blogs/the-buying-committee-is-dead-long-live-the-buying-collective/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Forrester research</a> indicates that enterprise buyers complete 70% of their evaluation before engaging sales, consuming content, comparing vendors, and building internal consensus through digital channels. This reality demands that enterprise GTM strategies invest heavily in thought leadership, analyst relations, and digital experiences that support complex buying journeys rather than relying solely on traditional sales outreach.
            </p>
          </div>
        </div>
      </section>

      {/* Key Components - 4 Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Core Elements of Enterprise GTM</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">Successfully selling to enterprises requires mastering these four foundational capabilities.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Target Account Strategy',
                description: 'Identify 50-200 ideal enterprise accounts. Research each deeply including organizational structure, strategic priorities, technology landscape, and key decision makers. Develop account-specific penetration strategies.',
                icon: '01'
              },
              {
                title: 'Executive Relationship Building',
                description: 'Establish C-level relationships before formal sales processes. Use warm introductions through advisors, board members, and partners. Provide value through insights and thought leadership, not just product pitches.',
                icon: '02'
              },
              {
                title: 'RFP & Procurement Excellence',
                description: 'Build systematic RFP response capabilities with templates, win themes, and cross-functional teams. Develop relationships with procurement to understand evaluation criteria and influence requirements before RFPs drop.',
                icon: '03'
              },
              {
                title: 'Reference Customer Program',
                description: 'Cultivate a portfolio of reference customers willing to advocate. Enterprises require peer validation before major purchases. Invest in customer success to create enthusiastic references across industries and use cases.',
                icon: '04'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-5xl font-black text-blue-100 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise GTM Approach - 4 Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Enterprise GTM Motions</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">Choose your primary enterprise GTM approach based on product complexity and market dynamics.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                approach: 'Account-Based Everything',
                description: 'Treat each enterprise account as a market of one. Personalized campaigns, custom content, dedicated resources.',
                bestFor: 'Fortune 500, $500K+ ACV, Complex platforms',
                investment: 'High: $50K+ per target account annually',
                color: 'blue'
              },
              {
                approach: 'Land & Expand',
                description: 'Win a small initial deal in one division, prove value, then expand across the enterprise.',
                bestFor: 'SaaS, Department-level entry, Usage-based pricing',
                investment: 'Medium: Focus resources on expansion motions',
                color: 'green'
              },
              {
                approach: 'Partner & Channel',
                description: 'Leverage system integrators, consultancies, and resellers who have existing enterprise relationships.',
                bestFor: 'New market entry, Limited sales capacity, Complex implementations',
                investment: 'Variable: Revenue share vs. direct investment',
                color: 'purple'
              },
              {
                approach: 'Thought Leadership Led',
                description: 'Establish category authority through research, events, and executive visibility. Enterprise buyers come to you.',
                bestFor: 'New categories, Disruptive solutions, Long sales cycles',
                investment: 'High upfront: Content, events, analyst relations',
                color: 'orange'
              }
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-xl border-l-4 ${
                item.color === 'blue' ? 'border-blue-500 bg-blue-50' :
                item.color === 'green' ? 'border-green-500 bg-green-50' :
                item.color === 'purple' ? 'border-purple-500 bg-purple-50' :
                'border-orange-500 bg-orange-50'
              }`}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.approach}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-gray-900">Best for:</strong> <span className="text-gray-600">{item.bestFor}</span></p>
                  <p><strong className="text-gray-900">Investment:</strong> <span className="text-gray-600">{item.investment}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Implement - Numbered Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Building Your Enterprise GTM</h2>
          <p className="text-xl text-gray-600 mb-12">Follow this three-phase approach to launch enterprise sales successfully.</p>

          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black">01</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Foundation & Readiness Assessment</h3>
                <p className="text-gray-700 mb-4">Ensure your product and organization are enterprise-ready. This includes security certifications (SOC 2, ISO 27001), compliance frameworks, SLA guarantees, and professional services capabilities. Conduct win/loss analysis on early enterprise deals to understand buyer requirements.</p>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600"><strong>Key outputs:</strong> Security certifications, Enterprise product roadmap, Implementation methodology, Reference customer strategy</p>
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black">02</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Account Strategy & Team Building</h3>
                <p className="text-gray-700 mb-4">Define your target account list (100-200 accounts), map organizational structures, and identify entry points. Hire experienced enterprise sellers with industry relationships and rolodexes. Build support infrastructure including solutions engineers, legal support, and customer success.</p>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600"><strong>Key outputs:</strong> Target account list, Account plans, Hiring plan, Compensation structure, Territory design</p>
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black">03</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Execution & Optimization</h3>
                <p className="text-gray-700 mb-4">Launch account-based programs with personalized outreach, executive engagement, and value-driven content. Establish regular pipeline reviews, forecast accuracy tracking, and deal desk processes. Optimize based on win/loss data and pipeline velocity metrics.</p>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600"><strong>Key outputs:</strong> Pipeline dashboards, Win/loss analysis, Forecast models, Playbooks by deal stage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries/Use Cases - 4 Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Enterprise GTM by Segment</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">Different enterprise segments require tailored GTM approaches.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                segment: 'Fortune 500 / Global 2000',
                approach: 'Multi-stakeholder ABM with dedicated account teams. Focus on strategic initiatives and board-level priorities.',
                keyTactics: ['Executive sponsorship programs', 'Custom roadmap commitments', 'Strategic partnership positioning']
              },
              {
                segment: 'Large Enterprise (1000-10000 employees)',
                approach: 'Balanced ABM and inbound. Department-level entry with enterprise expansion path.',
                keyTactics: ['Land-and-expand motions', 'Champion development', 'Business case templates']
              },
              {
                segment: 'Public Sector & Government',
                approach: 'Contract vehicle focused. FedRAMP certification, GSA schedules, and specialized BD teams.',
                keyTactics: ['Contract vehicle strategy', 'Partner ecosystems', 'Compliance-first positioning']
              },
              {
                segment: 'Regulated Industries',
                approach: 'Compliance-led GTM. Security certifications, audit support, and industry-specific expertise.',
                keyTactics: ['Industry certifications', 'Reference customer programs', 'Regulatory expertise']
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.segment}</h3>
                <p className="text-gray-700 mb-4">{item.approach}</p>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-2">Key tactics:</p>
                  <ul className="space-y-1">
                    {item.keyTactics.map((tactic, j) => (
                      <li key={j} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="text-blue-500">-</span> {tactic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Rendered */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">Enterprise GTM FAQs</h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What is enterprise go-to-market strategy?</h3>
              <p className="text-gray-700">Enterprise GTM strategy is a specialized approach for selling high-value products and services to large organizations. It involves navigating complex procurement processes, building executive relationships, managing 6-12+ month sales cycles, and coordinating with multiple stakeholders including C-suite executives, procurement teams, and technical evaluators.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How long is the typical enterprise sales cycle?</h3>
              <p className="text-gray-700">Enterprise sales cycles typically range from 6-18 months depending on deal size and complexity. Deals over $500K can take 12+ months, involving multiple evaluation phases, RFP processes, security audits, legal negotiations, and procurement approval. Building pipeline 12-18 months ahead of revenue targets is essential.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What deal sizes qualify as enterprise sales?</h3>
              <p className="text-gray-700">Enterprise deals typically start at $100,000 annual contract value (ACV) and can exceed $10M+ for comprehensive platform deals. The defining characteristics include complex buying committees, formal procurement processes, extensive security and compliance requirements, and multi-year contract negotiations.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How do you win enterprise RFPs?</h3>
              <p className="text-gray-700">Win enterprise RFPs by: 1) Building relationships before the RFP drops to influence requirements, 2) Creating a dedicated RFP response team with subject matter experts, 3) Providing comprehensive responses with clear differentiation, 4) Including detailed implementation plans and ROI analysis, 5) Leveraging reference customers at similar enterprises, and 6) Following up proactively to address concerns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources - 6 Links */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Related Resources</h2>
          <p className="text-xl text-gray-600 mb-12">Explore more GTM guides for enterprise success.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'B2B GTM Strategy', href: '/b2b-gtm-strategy', desc: 'Comprehensive B2B go-to-market fundamentals' },
              { title: 'McKinsey GTM Framework', href: '/mckinsey-gtm-strategy', desc: 'Strategic consulting approach to GTM' },
              { title: 'GTM Strategy Template', href: '/gtm-strategy-template', desc: 'Download our enterprise GTM planning template' },
              { title: 'SaaS GTM Playbook', href: '/saas-gtm-plan', desc: 'Enterprise SaaS go-to-market tactics' },
              { title: 'GTM Success Stories', href: '/gtm-success-stories', desc: 'Learn from enterprise GTM wins' },
              { title: 'GTM Tools Comparison', href: '/gtm-tools-comparison', desc: 'Technology stack for enterprise sales' }
            ].map((item, i) => (
              <Link key={i} href={item.href} className="group p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <span className="text-blue-600 text-sm font-semibold">Learn more &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section - 4 Internal Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">GTM Resources</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'GTM Planner', href: '/planner', desc: 'AI-powered GTM strategy generator' },
              { title: 'GTM Agencies', href: '/best-gtm-agencies', desc: 'Find enterprise GTM partners' },
              { title: 'What is GTM?', href: '/what-is-gtm', desc: 'Complete GTM fundamentals' },
              { title: 'GTM Consultant', href: '/go-to-market-consultant', desc: 'Work with enterprise experts' }
            ].map((item, i) => (
              <Link key={i} href={item.href} className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow text-center">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Build Your Enterprise GTM</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Master enterprise sales with a strategic GTM approach. Target, win, and scale six and seven-figure deals with our proven frameworks.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/planner" className="px-10 py-5 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors rounded-lg">Create GTM Strategy</Link>
            <Link href="/go-to-market-consultant" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-600 transition-colors rounded-lg">Talk to Expert</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
