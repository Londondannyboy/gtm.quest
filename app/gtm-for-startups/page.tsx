import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'GTM Strategy for Startups 2025 | Lean Go-to-Market Guide | GTM Quest',
  description: 'GTM strategy guide for startups. Learn how to launch with limited resources, find your first customers, and build sustainable growth from day one.',
  keywords: 'gtm for startups, startup go-to-market, startup launch strategy, early stage gtm, lean gtm, startup marketing',
  alternates: { canonical: 'https://gtm.quest/gtm-for-startups' },
  openGraph: {
    title: 'GTM for Startups | Launch Strategy Guide',
    description: 'Build your go-to-market strategy with limited resources and unlimited ambition.',
    type: 'website',
    url: 'https://gtm.quest/gtm-for-startups'
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a startup go-to-market strategy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A startup GTM strategy is a lean, focused plan for acquiring your first customers with limited resources. Unlike enterprise GTM, startup GTM emphasizes rapid experimentation, founder-led sales, community building, and product-led growth tactics that don't require large marketing budgets."
      }
    },
    {
      "@type": "Question",
      "name": "How do startups get their first 100 customers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Startups get their first 100 customers through: 1) Personal networks and warm introductions, 2) Founder-led sales with direct outreach, 3) Community engagement where target customers gather, 4) Free trials and product-led growth, 5) Content marketing targeting specific pain points, and 6) Strategic partnerships with complementary products."
      }
    },
    {
      "@type": "Question",
      "name": "How much should a startup spend on go-to-market?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Early-stage startups should focus on time over money, leveraging founder-led sales and organic channels before spending on paid acquisition. A typical pre-seed/seed startup might spend $5K-$20K/month on GTM tools and limited paid experiments, scaling only after finding repeatable acquisition channels with positive unit economics."
      }
    },
    {
      "@type": "Question",
      "name": "When should startups hire a GTM team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hire GTM team members after founders have closed 10-20 customers and can document a repeatable sales process. First hires typically include: 1) A marketing lead for content and demand gen at $1-2M ARR, 2) First sales rep at $500K-$1M ARR with proven founder-sales playbook, and 3) Growth/RevOps at $2-3M ARR to systematize processes."
      }
    }
  ]
}

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Startup Go-to-Market Strategy Guide",
  "description": "Comprehensive guide to startup GTM strategy including lean tactics, first customer acquisition, and scaling approaches.",
  "url": "https://gtm.quest/gtm-for-startups"
}

export default function GTMForStartupsPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(collectionSchema)}} />

      {/* Hero Section with Stats */}
      <section className="bg-gradient-to-br from-emerald-900 via-teal-800 to-slate-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-emerald-200 hover:text-white mb-8 transition-colors text-sm">
            <span className="mr-2">&larr;</span> Back to Home
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-emerald-400 text-emerald-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Startup Guide</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Go-to-Market<br /><span className="text-emerald-300">For Startups</span></h1>
              <p className="text-xl text-emerald-100 leading-relaxed max-w-xl mb-10">Launch with limited resources and find your first customers. Build a GTM strategy that scales from zero to product-market fit without breaking the bank.</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-black text-white">90%</div>
                  <div className="text-emerald-200 text-sm">Fail Without GTM</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white">100</div>
                  <div className="text-emerald-200 text-sm">First Customers Goal</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white">8-12wk</div>
                  <div className="text-emerald-200 text-sm">To First Revenue</div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-3xl flex items-center justify-center border border-emerald-400/30">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">STARTUP</div>
                  <div className="text-2xl text-emerald-200">Launch Smart, Scale Fast</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Startup GTM - 3 paragraphs with external links */}
      <section className="py-20 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-10">Why Startup GTM is Different</h2>
          <div className="space-y-8 text-xl text-white/90 leading-relaxed">
            <p>
              Startup go-to-market fundamentally differs from established company GTM because you're operating with extreme constraints and uncertainty. According to <a href="https://www.cbinsights.com/research/startup-failure-reasons-top/" className="text-emerald-400 hover:text-emerald-300 underline" target="_blank" rel="noopener">CB Insights research</a>, 35% of startups fail because there's no market need, and another 20% get outcompeted. Both failures stem from GTM problems: either not validating the market before building or executing poorly against competitors who understand the customer better.
            </p>
            <p>
              The lean startup methodology, popularized by <a href="https://theleanstartup.com/" className="text-emerald-400 hover:text-emerald-300 underline" target="_blank" rel="noopener">Eric Ries</a> and <a href="https://steveblank.com/2010/01/25/whats-a-startup-first-principles/" className="text-emerald-400 hover:text-emerald-300 underline" target="_blank" rel="noopener">Steve Blank's customer development framework</a>, provides the foundation for startup GTM. The core principle: validate your assumptions with real customers before investing heavily in go-to-market. This means founder-led sales, rapid iteration, and proving demand with 10-20 paying customers before building scalable GTM infrastructure.
            </p>
            <p>
              Modern startup GTM has evolved with the rise of product-led growth. Companies like <a href="https://www.openviewpartners.com/product-led-growth/" className="text-emerald-400 hover:text-emerald-300 underline" target="_blank" rel="noopener">Slack, Figma, and Notion</a> demonstrated that great products can acquire customers with minimal sales teams. This shifts startup GTM focus from outbound sales to product experience, onboarding optimization, and community building. The most successful startups combine product-led acquisition with strategic sales engagement, meeting customers where they are rather than forcing them through traditional funnels.
            </p>
          </div>
        </div>
      </section>

      {/* Key Components - 4 Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Core Elements of Startup GTM</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">Every successful startup GTM requires these four foundational elements.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Laser-Focused ICP',
                description: 'Define one specific customer segment to dominate before expanding. Start with a niche you can own. Be specific about company size, industry, pain point, and buying trigger. Validate with 20+ conversations.',
                icon: '01'
              },
              {
                title: 'Founder-Led Sales',
                description: 'Founders must sell the first 10-20 customers personally. This builds deep customer understanding, validates positioning, and creates the playbook for future sales hires. No one sells your vision better than you.',
                icon: '02'
              },
              {
                title: 'Community & Content',
                description: 'Build audience before you need customers. Share your journey, help people solve problems, establish expertise. Communities and content compound over time and reduce CAC as you scale.',
                icon: '03'
              },
              {
                title: 'Product-Led Motion',
                description: 'Make your product the primary acquisition channel. Free tiers, trials, and self-serve onboarding let customers experience value before talking to sales. Focus on activation and retention metrics.',
                icon: '04'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-5xl font-black text-emerald-100 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GTM Channels for Startups - 4 Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Best GTM Channels for Startups</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">Focus your limited resources on channels that work best for early-stage companies.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                channel: 'Direct Outreach & Networks',
                description: 'Personal connections, warm intros from investors/advisors, LinkedIn outreach. Highest conversion, lowest cost.',
                bestFor: 'B2B, Services, High-ACV products',
                investment: 'Time only - $0 direct cost',
                color: 'emerald'
              },
              {
                channel: 'Product-Led Growth',
                description: 'Free tier or trial drives acquisition. Users self-onboard and convert to paid based on value received.',
                bestFor: 'SaaS, Developer tools, SMB products',
                investment: 'Engineering time for onboarding optimization',
                color: 'blue'
              },
              {
                channel: 'Community & Content',
                description: 'Build audience through helpful content, community engagement, and authentic presence in relevant spaces.',
                bestFor: 'All startups with 6+ month horizon',
                investment: 'Founder time + $500-2K/mo for tools',
                color: 'purple'
              },
              {
                channel: 'Strategic Partnerships',
                description: 'Partner with complementary products, integrations, and co-marketing. Leverage their audience.',
                bestFor: 'Platforms, integrations, ecosystem plays',
                investment: 'Business development time',
                color: 'orange'
              }
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-xl border-l-4 ${
                item.color === 'emerald' ? 'border-emerald-500 bg-emerald-50' :
                item.color === 'blue' ? 'border-blue-500 bg-blue-50' :
                item.color === 'purple' ? 'border-purple-500 bg-purple-50' :
                'border-orange-500 bg-orange-50'
              }`}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.channel}</h3>
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
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">The Startup GTM Roadmap</h2>
          <p className="text-xl text-gray-600 mb-12">Follow this proven path from idea to first 100 customers.</p>

          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black">01</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Validate Problem & Market (Weeks 1-4)</h3>
                <p className="text-gray-700 mb-4">Talk to 30+ potential customers before building. Confirm they have the problem, understand their current solutions, and gauge willingness to pay. Don't build until you have strong signals of demand.</p>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600"><strong>Success criteria:</strong> 70%+ validate the problem, 10+ would pay, clear ICP definition, documented buying process</p>
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black">02</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Build MVP & Land First Customers (Weeks 5-12)</h3>
                <p className="text-gray-700 mb-4">Build the minimum product that solves the core problem. Launch to beta users from your validation interviews. Get 10-20 paying customers through founder-led sales. Document every interaction.</p>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600"><strong>Success criteria:</strong> Working MVP, 10-20 paying customers, 80%+ retention, clear value proposition validated</p>
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black">03</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Repeatable Channels (Months 4-6)</h3>
                <p className="text-gray-700 mb-4">Test 2-3 acquisition channels. Double down on what works, kill what doesn't. Build the playbook for each channel. Start content and community building for long-term leverage.</p>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600"><strong>Success criteria:</strong> 1-2 working channels, documented playbooks, 100+ customers, first hire plan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries/Use Cases - 4 Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Startup GTM by Stage</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">Adjust your GTM approach based on your startup stage and traction.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                stage: 'Pre-Seed / Idea Stage',
                approach: 'Customer development focus. Talk to 50+ potential customers. Validate problem and willingness to pay before building.',
                keyTactics: ['Customer discovery interviews', 'Landing page tests', 'Wait list building']
              },
              {
                stage: 'Seed / MVP Stage',
                approach: 'Founder-led sales exclusively. Close 10-20 customers personally. Document every objection and success pattern.',
                keyTactics: ['Personal network activation', 'Direct outreach', 'Beta user programs']
              },
              {
                stage: 'Series A / Product-Market Fit',
                approach: 'Repeatable acquisition proven. First GTM hires. Scale what works and experiment with new channels.',
                keyTactics: ['Channel playbook documentation', 'First marketing hire', 'Content scaling']
              },
              {
                stage: 'Growth Stage',
                approach: 'Full GTM team building. Multi-channel strategy. Marketing and sales alignment. Customer success focus.',
                keyTactics: ['Team building', 'Revenue operations', 'Expansion revenue programs']
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.stage}</h3>
                <p className="text-gray-700 mb-4">{item.approach}</p>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-2">Key tactics:</p>
                  <ul className="space-y-1">
                    {item.keyTactics.map((tactic, j) => (
                      <li key={j} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="text-emerald-500">-</span> {tactic}
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
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">Startup GTM FAQs</h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What is a startup go-to-market strategy?</h3>
              <p className="text-gray-700">A startup GTM strategy is a lean, focused plan for acquiring your first customers with limited resources. Unlike enterprise GTM, startup GTM emphasizes rapid experimentation, founder-led sales, community building, and product-led growth tactics that don't require large marketing budgets.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How do startups get their first 100 customers?</h3>
              <p className="text-gray-700">Startups get their first 100 customers through: 1) Personal networks and warm introductions, 2) Founder-led sales with direct outreach, 3) Community engagement where target customers gather, 4) Free trials and product-led growth, 5) Content marketing targeting specific pain points, and 6) Strategic partnerships with complementary products.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How much should a startup spend on go-to-market?</h3>
              <p className="text-gray-700">Early-stage startups should focus on time over money, leveraging founder-led sales and organic channels before spending on paid acquisition. A typical pre-seed/seed startup might spend $5K-$20K/month on GTM tools and limited paid experiments, scaling only after finding repeatable acquisition channels with positive unit economics.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">When should startups hire a GTM team?</h3>
              <p className="text-gray-700">Hire GTM team members after founders have closed 10-20 customers and can document a repeatable sales process. First hires typically include: 1) A marketing lead for content and demand gen at $1-2M ARR, 2) First sales rep at $500K-$1M ARR with proven founder-sales playbook, and 3) Growth/RevOps at $2-3M ARR to systematize processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources - 6 Links */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Related Resources</h2>
          <p className="text-xl text-gray-600 mb-12">Explore more GTM guides for startup success.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'B2B GTM Strategy', href: '/b2b-gtm-strategy', desc: 'Comprehensive B2B go-to-market fundamentals' },
              { title: 'SaaS GTM Playbook', href: '/saas-gtm-plan', desc: 'Complete guide to SaaS go-to-market' },
              { title: 'GTM Strategy Template', href: '/gtm-strategy-template', desc: 'Download our startup GTM planning template' },
              { title: 'Product Launch Guide', href: '/product-launch', desc: 'Step-by-step product launch checklist' },
              { title: 'GTM Strategy Examples', href: '/gtm-strategy-examples', desc: 'Real startup GTM case studies' },
              { title: 'What is GTM?', href: '/what-is-gtm', desc: 'Complete GTM fundamentals' }
            ].map((item, i) => (
              <Link key={i} href={item.href} className="group p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <span className="text-emerald-600 text-sm font-semibold">Learn more &rarr;</span>
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
              { title: 'GTM Agencies', href: '/best-gtm-agencies', desc: 'Find startup GTM partners' },
              { title: 'GTM Consultant', href: '/go-to-market-consultant', desc: 'Work with startup experts' },
              { title: 'GTM Tools', href: '/gtm-tools-comparison', desc: 'Technology stack for startups' }
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Launch Your Startup?</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">Build your GTM strategy and start acquiring customers today. Use our free planner to create a tailored go-to-market plan for your startup.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/planner" className="px-10 py-5 bg-white text-emerald-600 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors rounded-lg">Create GTM Strategy</Link>
            <Link href="/go-to-market-consultant" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-emerald-600 transition-colors rounded-lg">Talk to Expert</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
