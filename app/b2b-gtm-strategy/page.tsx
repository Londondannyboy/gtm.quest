import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'B2B Go-to-Market Strategy 2025 | Enterprise GTM Guide | GTM Quest',
  description: 'Complete B2B GTM strategy guide. Learn how to sell to enterprises, navigate buying committees, and close long sales cycles with proven frameworks and tactics.',
  keywords: 'b2b gtm strategy, b2b go-to-market, enterprise gtm, b2b sales strategy, account-based marketing, b2b marketing',
  alternates: { canonical: 'https://gtm.quest/b2b-gtm-strategy' },
  openGraph: {
    title: 'B2B GTM Strategy | Enterprise Sales Guide',
    description: 'Master the complexities of B2B sales and navigate enterprise buying cycles with proven GTM frameworks.',
    type: 'website',
    url: 'https://gtm.quest/b2b-gtm-strategy'
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a B2B go-to-market strategy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A B2B go-to-market strategy is a comprehensive plan for bringing products or services to business customers. It encompasses target market definition, positioning, pricing, sales channels, and customer acquisition tactics specifically designed for business-to-business sales cycles, which typically involve multiple stakeholders, longer timelines, and higher deal values than B2C."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical B2B sales cycle take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B2B sales cycles typically range from 3-12 months depending on deal size and complexity. SMB deals may close in 1-3 months, mid-market in 3-6 months, and enterprise deals often take 6-12+ months. The cycle includes awareness, evaluation, committee approval, legal review, and implementation planning stages."
      }
    },
    {
      "@type": "Question",
      "name": "What are the main B2B GTM strategies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The five main B2B GTM strategies are: 1) Account-Based Marketing (ABM) for high-value enterprise accounts, 2) Inbound/Content Marketing for thought leadership and organic demand, 3) Sales-Led Growth for relationship-driven enterprise sales, 4) Product-Led Growth (PLG) for self-serve adoption, and 5) Channel/Partner-Led for ecosystem-driven distribution."
      }
    },
    {
      "@type": "Question",
      "name": "How do you navigate B2B buying committees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Navigate buying committees by: 1) Mapping all stakeholders and their roles (Champion, Economic Buyer, User, Decision Maker), 2) Understanding each person's priorities and concerns, 3) Creating tailored content and messaging for each persona, 4) Building relationships with champions who advocate internally, and 5) Providing ROI tools and business cases that address executive concerns."
      }
    }
  ]
}

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "B2B Go-to-Market Strategy Guide",
  "description": "Comprehensive guide to B2B GTM strategy including frameworks, tactics, and best practices for enterprise sales.",
  "url": "https://gtm.quest/b2b-gtm-strategy"
}

export default function B2BGTMPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(collectionSchema)}} />

      {/* Hero Section with Image and Stats */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm">
            <span className="mr-2">&larr;</span> Back to Home
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-400 text-blue-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Enterprise Guide</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">B2B<br /><span className="text-blue-300">GTM Strategy</span></h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-xl mb-10">Navigate complex buying committees, long sales cycles, and enterprise procurement. Master the unique challenges of B2B go-to-market with proven frameworks.</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-black text-white">5-15</div>
                  <div className="text-blue-200 text-sm">Avg Stakeholders</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white">6-12mo</div>
                  <div className="text-blue-200 text-sm">Sales Cycle</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white">68%</div>
                  <div className="text-blue-200 text-sm">Research Online First</div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-3xl flex items-center justify-center border border-blue-400/30">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">B2B</div>
                  <div className="text-2xl text-blue-200">Enterprise Sales Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding B2B GTM - 3 paragraphs with external links */}
      <section className="py-20 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-10">Understanding B2B Go-to-Market Strategy</h2>
          <div className="space-y-8 text-xl text-white/90 leading-relaxed">
            <p>
              B2B go-to-market strategy fundamentally differs from consumer marketing because of the complexity inherent in business purchasing decisions. According to <a href="https://www.gartner.com/en/sales/insights/b2b-buying-journey" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Gartner research</a>, the average B2B buying group involves 6-10 decision makers, each armed with independently gathered information. This creates a fragmented buying journey where your GTM must address multiple personas with different priorities, from technical evaluators to financial decision-makers.
            </p>
            <p>
              The shift toward digital-first B2B buying has transformed how companies approach go-to-market. <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-new-b2b-growth-equation" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">McKinsey's research</a> shows that 70% of B2B decision makers prefer remote human interactions or digital self-service, fundamentally changing the role of sales in the GTM motion. Successful B2B companies now blend product-led experiences with high-touch sales engagement, meeting buyers where they are in their journey rather than forcing them through traditional sales funnels.
            </p>
            <p>
              The economics of B2B GTM also differ substantially. With customer lifetime values often exceeding $100,000 and acquisition costs to match, the margin for error is slim. <a href="https://www.forrester.com/blogs/b2b-buying-study-2023/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Forrester's B2B buying studies</a> indicate that buyers are 57% through their purchase decision before engaging with sales, meaning your content marketing, product experience, and digital presence must do heavy lifting before human sellers enter the picture. This reality demands an integrated GTM approach where marketing, sales, and customer success operate as one revenue engine.
            </p>
          </div>
        </div>
      </section>

      {/* Key Components - 4 Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Key Components of B2B GTM</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">Every successful B2B go-to-market strategy requires these four foundational elements working in harmony.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Ideal Customer Profile (ICP)',
                description: 'Define the companies most likely to buy and succeed with your product. Include firmographics (size, industry, geography), technographics (tech stack, tools), and behavioral signals (growth stage, recent funding, hiring patterns).',
                icon: '01'
              },
              {
                title: 'Multi-Stakeholder Messaging',
                description: 'Create distinct value propositions for each persona in the buying committee. Technical buyers need depth, executives need ROI, users need usability, and procurement needs compliance and security assurances.',
                icon: '02'
              },
              {
                title: 'Sales & Marketing Alignment',
                description: 'Define clear handoff criteria, shared metrics, and integrated campaigns. B2B success requires seamless coordination between demand generation, SDR outreach, account executives, and customer success teams.',
                icon: '03'
              },
              {
                title: 'Revenue Operations Infrastructure',
                description: 'Build the tech stack and processes to track the entire buyer journey. CRM, marketing automation, sales engagement, and analytics must work together to measure and optimize your GTM motion.',
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

      {/* B2B GTM Strategies Section - 4 Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">B2B GTM Strategy Types</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">Choose the right GTM motion based on your product, market, and resources.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                strategy: 'Account-Based Marketing (ABM)',
                description: 'Focus on specific high-value accounts with personalized campaigns. Best for enterprise deals worth $100k+ annually.',
                bestFor: 'Enterprise, Complex Sales, High ACV',
                metrics: 'Account engagement, Pipeline per account, Win rate',
                color: 'blue'
              },
              {
                strategy: 'Sales-Led Growth',
                description: 'Traditional outbound with SDRs, AEs, and relationship-driven selling. Best for complex products requiring explanation.',
                bestFor: 'Mid-Market, Enterprise, Services',
                metrics: 'SQL rate, Pipeline velocity, Quota attainment',
                color: 'green'
              },
              {
                strategy: 'Product-Led Growth (PLG)',
                description: 'Let the product drive acquisition through free tiers and trials. Sales assists conversion rather than driving it.',
                bestFor: 'SaaS, Developer Tools, SMB',
                metrics: 'PQL rate, Trial conversion, Expansion revenue',
                color: 'purple'
              },
              {
                strategy: 'Channel & Partner-Led',
                description: 'Leverage partners, resellers, and integrations for distribution. Best for ecosystem plays and geographic expansion.',
                bestFor: 'Platforms, International, Regulated Industries',
                metrics: 'Partner revenue, Sourced pipeline, Co-sell rate',
                color: 'orange'
              }
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-xl border-l-4 ${
                item.color === 'blue' ? 'border-blue-500 bg-blue-50' :
                item.color === 'green' ? 'border-green-500 bg-green-50' :
                item.color === 'purple' ? 'border-purple-500 bg-purple-50' :
                'border-orange-500 bg-orange-50'
              }`}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.strategy}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-gray-900">Best for:</strong> <span className="text-gray-600">{item.bestFor}</span></p>
                  <p><strong className="text-gray-900">Key metrics:</strong> <span className="text-gray-600">{item.metrics}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Implement - Numbered Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">How to Build Your B2B GTM</h2>
          <p className="text-xl text-gray-600 mb-12">Follow this proven three-phase approach to launch your B2B go-to-market strategy.</p>

          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black">01</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Discovery & Market Validation</h3>
                <p className="text-gray-700 mb-4">Conduct 30+ customer interviews to validate your ICP and understand the buying process. Map the typical buying committee, identify key pain points, and document the competitive landscape. This foundation prevents costly pivots later.</p>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600"><strong>Key outputs:</strong> ICP document, Buyer personas, Competitive battlecards, Pricing validation</p>
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black">02</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">GTM Strategy & Sales Process Design</h3>
                <p className="text-gray-700 mb-4">Choose your primary GTM motion (ABM, Sales-Led, PLG, or Channel). Design your sales process stages, define qualification criteria (BANT, MEDDIC, etc.), create enablement materials, and establish your tech stack.</p>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600"><strong>Key outputs:</strong> GTM playbook, Sales process map, Lead scoring model, Content strategy</p>
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black">03</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Launch & Iterate</h3>
                <p className="text-gray-700 mb-4">Start with a focused pilot targeting 50-100 accounts. Measure everything: response rates, meeting rates, pipeline velocity, and win rates. Use data to refine messaging, targeting, and process before scaling spend.</p>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600"><strong>Key outputs:</strong> Performance dashboards, Optimization playbook, Scaling plan, Team hiring roadmap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries/Use Cases - 4 Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">B2B GTM by Industry</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">Different industries require tailored B2B GTM approaches based on their unique dynamics.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                industry: 'Enterprise SaaS',
                approach: 'Hybrid PLG + Sales-Led with strong customer success. Focus on land-and-expand strategy with clear upgrade paths.',
                keyTactics: ['Free tier to paid conversion', 'Usage-based expansion', 'Executive sponsorship programs']
              },
              {
                industry: 'Financial Services Tech',
                approach: 'Sales-Led with heavy compliance focus. Long sales cycles require patience and relationship building.',
                keyTactics: ['Security and compliance certifications', 'Reference customer programs', 'RFP response excellence']
              },
              {
                industry: 'Healthcare & Life Sciences',
                approach: 'Channel-heavy with regulatory expertise. Partners often required for market access.',
                keyTactics: ['Partner ecosystem development', 'Regulatory pre-clearance', 'Clinical validation studies']
              },
              {
                industry: 'Manufacturing & Industrial',
                approach: 'Traditional sales-led with strong technical presales. Demos and POCs critical to deal progression.',
                keyTactics: ['Trade show presence', 'Technical POC programs', 'Distributor relationships']
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.industry}</h3>
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
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">B2B GTM Strategy FAQs</h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What is a B2B go-to-market strategy?</h3>
              <p className="text-gray-700">A B2B go-to-market strategy is a comprehensive plan for bringing products or services to business customers. It encompasses target market definition, positioning, pricing, sales channels, and customer acquisition tactics specifically designed for business-to-business sales cycles, which typically involve multiple stakeholders, longer timelines, and higher deal values than B2C.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How long does a typical B2B sales cycle take?</h3>
              <p className="text-gray-700">B2B sales cycles typically range from 3-12 months depending on deal size and complexity. SMB deals may close in 1-3 months, mid-market in 3-6 months, and enterprise deals often take 6-12+ months. The cycle includes awareness, evaluation, committee approval, legal review, and implementation planning stages.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What are the main B2B GTM strategies?</h3>
              <p className="text-gray-700">The five main B2B GTM strategies are: 1) Account-Based Marketing (ABM) for high-value enterprise accounts, 2) Inbound/Content Marketing for thought leadership and organic demand, 3) Sales-Led Growth for relationship-driven enterprise sales, 4) Product-Led Growth (PLG) for self-serve adoption, and 5) Channel/Partner-Led for ecosystem-driven distribution.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How do you navigate B2B buying committees?</h3>
              <p className="text-gray-700">Navigate buying committees by: 1) Mapping all stakeholders and their roles (Champion, Economic Buyer, User, Decision Maker), 2) Understanding each person's priorities and concerns, 3) Creating tailored content and messaging for each persona, 4) Building relationships with champions who advocate internally, and 5) Providing ROI tools and business cases that address executive concerns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources - 6 Links */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Related Resources</h2>
          <p className="text-xl text-gray-600 mb-12">Explore more GTM guides and frameworks to accelerate your strategy.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Enterprise GTM Strategy', href: '/enterprise-gtm-strategy', desc: 'Specialized tactics for large enterprise sales' },
              { title: 'GTM Strategy Template', href: '/gtm-strategy-template', desc: 'Download our comprehensive GTM planning template' },
              { title: 'GTM for Startups', href: '/gtm-for-startups', desc: 'Lean GTM approaches for early-stage companies' },
              { title: 'SaaS GTM Playbook', href: '/saas-gtm-plan', desc: 'Complete guide to SaaS go-to-market' },
              { title: 'McKinsey GTM Framework', href: '/mckinsey-gtm-strategy', desc: 'Strategic consulting approach to GTM' },
              { title: 'Product Launch Guide', href: '/product-launch', desc: 'Step-by-step product launch checklist' }
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
              { title: 'GTM Agencies', href: '/best-gtm-agencies', desc: 'Find expert GTM partners' },
              { title: 'What is GTM?', href: '/what-is-gtm', desc: 'Complete GTM fundamentals' },
              { title: 'GTM Consultant', href: '/go-to-market-consultant', desc: 'Work with GTM experts' }
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
          <h2 className="text-3xl md:text-4xl font-black mb-6">Master Your B2B GTM</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Build a winning B2B go-to-market strategy. Navigate buying committees, long sales cycles, and complex deals with confidence using our proven frameworks.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/planner" className="px-10 py-5 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors rounded-lg">Create GTM Strategy</Link>
            <Link href="/go-to-market-consultant" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-600 transition-colors rounded-lg">Work With Expert</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
