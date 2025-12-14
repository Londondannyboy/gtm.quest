import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Go-to-Market Strategy for Startups | GTM Guide | GTM Quest',
  description: 'GTM strategy guide for startups. Learn how to launch with limited resources, find your first customers, and build sustainable growth from day one.',
  keywords: 'gtm for startups, startup go-to-market, startup launch strategy, early stage gtm, lean gtm',
  alternates: { canonical: 'https://gtm.quest/gtm-for-startups' },
  openGraph: {
    title: 'GTM for Startups | Launch Strategy Guide',
    description: 'Build your go-to-market strategy with limited resources and unlimited ambition.',
    type: 'website'
  }
}

export default function GTMForStartupsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-blue-400 text-blue-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Startup Guide</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Go-to-Market<br /><span className="text-blue-300">For Startups</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">Launch with limited resources and find your first customers. Build a GTM strategy that scales from zero to product-market fit.</p>
          </div>
        </div>
      </section>

      {/* The Startup GTM Challenge */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">The Startup GTM Challenge</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                challenge: 'Limited Budget',
                description: 'You can\'t outspend larger competitors. You need smart, creative strategies that work with minimal marketing spend.',
                icon: '💸'
              },
              {
                challenge: 'Unknown Brand',
                description: 'Nobody knows who you are. You need to build credibility and trust from scratch through authentic engagement.',
                icon: '🤷'
              },
              {
                challenge: 'Limited Team',
                description: 'You probably have 1-2 people on GTM. Everything needs to be leveraged - you can\'t do everything.',
                icon: '👥'
              },
              {
                challenge: 'Uncertain Product-Market Fit',
                description: 'You\'re still figuring out what customers want. Your GTM needs to be flexible and data-driven.',
                icon: '🔍'
              },
              {
                challenge: 'Long Sales Cycles',
                description: 'B2B sales can take months. You need revenue fast but can\'t wait for slow deals.',
                icon: '📅'
              },
              {
                challenge: 'Skepticism',
                description: 'Enterprise customers are cautious about unproven startups. You need to prove viability and build confidence.',
                icon: '⚠️'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.challenge}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup GTM Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Core Principles for Startup GTM</h2>
          <div className="space-y-8">
            {[
              {
                principle: '1. Focus, Focus, Focus',
                description: 'You can\'t do everything. Pick ONE target customer segment and dominate it. Once you own that segment, expand to the next. Example: Slack started with tech teams, not enterprises.',
                tactics: [
                  'Define your Ideal Customer Profile (ICP) precisely',
                  'Focus 80% of effort on that one segment',
                  'Build products and messaging specifically for them',
                  'Only expand after achieving traction'
                ]
              },
              {
                principle: '2. Lean on Community',
                description: 'Communities are cheaper than ads and more effective than cold outreach. Find where your customers hang out and provide genuine value.',
                tactics: [
                  'Join relevant communities (Reddit, Discord, forums, Slack groups)',
                  'Provide helpful answers without promoting',
                  'Share your learnings transparently',
                  'Let community members become your advocates'
                ]
              },
              {
                principle: '3. Content First, Promotion Second',
                description: 'Instead of ads, create content your customers want to read. Blog posts, videos, guides, and resources attract customers while building authority.',
                tactics: [
                  'Start a blog targeting your customers\' pain points',
                  'Optimize for search terms they\'re already searching',
                  'Create free tools and templates',
                  'Share knowledge freely (it builds credibility)'
                ]
              },
              {
                principle: '4. Product is Your Best Marketing',
                description: 'Make your product so good that people want to tell others about it. Free tiers, trials, and demos let people experience value risk-free.',
                tactics: [
                  'Offer a generous free tier or trial',
                  'Make onboarding so good people succeed in minutes',
                  'Implement referral mechanics (make sharing easy)',
                  'Focus on WOW moments in the product'
                ]
              },
              {
                principle: '5. Sales to Early Customers',
                description: 'Get out and talk to customers directly. Early revenue comes from direct relationships, not inbound marketing.',
                tactics: [
                  'Talk to 20-30 prospective customers before launch',
                  'Use these conversations to refine messaging',
                  'Build relationships with key influencers',
                  'Ask customers for introductions (warm outreach beats cold)'
                ]
              },
              {
                principle: '6. Data-Driven Iteration',
                description: 'Test everything. What works for one startup won\'t work for another. Measure, learn, and adjust quickly.',
                tactics: [
                  'Set up analytics immediately',
                  'Track which channels drive highest quality customers',
                  'Run small tests before big investments',
                  'Kill things that don\'t work (fast fail)'
                ]
              },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-lg">
                <h3 className="text-xl font-black text-gray-900 mb-3">{item.principle}</h3>
                <p className="text-gray-700 mb-6">{item.description}</p>
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase mb-3">Tactical Actions:</p>
                  <ul className="space-y-2">
                    {item.tactics.map((tactic, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-blue-500 font-bold">→</span>
                        <span className="text-gray-700 text-sm">{tactic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Go-to-Market Channels for Startups */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">GTM Channels for Startups (Ranked by ROI)</h2>
          <div className="space-y-6">
            {[
              {
                rank: '🥇',
                channel: 'Direct Sales (Warm Introductions)',
                investment: '⏱️ Time',
                roi: '⭐⭐⭐⭐⭐',
                description: 'Get introduced to prospective customers by advisors, investors, or early customers. Warm intros have 10x higher conversion than cold outreach.',
                best_for: 'B2B SaaS, Enterprise, High-value deals',
                how_to: 'Ask advisors, investors, and early customers for introductions. Build a list of 50 target companies.'
              },
              {
                rank: '🥈',
                channel: 'Product-Led Growth (Free Tier)',
                investment: '💰 Product Development',
                roi: '⭐⭐⭐⭐⭐',
                description: 'Let users try your product free. If it\'s good, they\'ll upgrade. This is how Slack, Figma, and Notion grew without sales teams.',
                best_for: 'B2B SaaS, Developer Tools, Collaboration Software',
                how_to: 'Create a generous free tier with real value. Track how many free users convert to paid.'
              },
              {
                rank: '3️⃣',
                channel: 'Community & Engagement',
                investment: '⏱️ Time',
                roi: '⭐⭐⭐⭐',
                description: 'Participate authentically in communities where your customers hang out. Share knowledge, help people, and build relationships.',
                best_for: 'All startups, especially Developer Tools',
                how_to: 'Join Reddit communities, Slack groups, Discord servers. Help people solve problems (don\'t sell).'
              },
              {
                rank: '4️⃣',
                channel: 'Content Marketing',
                investment: '⏱️ Time + 💰 Tools',
                roi: '⭐⭐⭐⭐',
                description: 'Write blog posts and create content for problems your customers search for. This drives organic traffic and demonstrates expertise.',
                best_for: 'All startups with 6+ month horizon',
                how_to: 'Start a blog. Target keywords your customers search. Write helpful, honest content.'
              },
              {
                rank: '5️⃣',
                channel: 'Email & Partnerships',
                investment: '⏱️ Time',
                roi: '⭐⭐⭐',
                description: 'Build strategic partnerships with complementary companies. Co-market, share customer lists, and grow together.',
                best_for: 'Tools, SaaS, Services',
                how_to: 'Identify 20 complementary companies. Propose partnership ideas that benefit both parties.'
              },
              {
                rank: '6️⃣',
                channel: 'Founder Networks & Events',
                investment: '⏱️ Time',
                roi: '⭐⭐⭐',
                description: 'Get out to networking events, pitch competitions, and founder communities. Meet potential customers and partners.',
                best_for: 'All startups, especially early stage',
                how_to: 'Go to startup events, pitch competitions, investor events. Build genuine relationships.'
              },
              {
                rank: '7️⃣',
                channel: 'Paid Ads (Last)',
                investment: '💰💰 Budget',
                roi: '⭐⭐',
                description: 'Only after organic channels are working well. Ads are expensive for startups and won\'t fix broken product or positioning.',
                best_for: 'Startups with product-market fit and profitable CAC',
                how_to: 'Test small budgets first. Only scale if CAC < LTV/3.'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{item.rank}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{item.channel}</h3>
                      <p className="text-xs text-gray-600">{item.investment}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-blue-600">{item.roi}</span>
                </div>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Best for:</p>
                    <p className="text-gray-600">{item.best_for}</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">How to do it:</p>
                    <p className="text-gray-600">{item.how_to}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lean Startup GTM Framework */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">The Lean Startup GTM Framework</h2>
          <div className="bg-white p-8 rounded-lg border-2 border-blue-500">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-black text-gray-900 mb-4">Week 1-2: Validate Customer Problem</h3>
                <p className="text-gray-700 mb-4">Before building, talk to 20-30 prospective customers. Confirm they have the problem and would pay to solve it.</p>
                <div className="bg-gray-50 p-4 rounded space-y-2 text-sm">
                  <p><strong>Actions:</strong> Schedule calls, ask about their current solution, understand their pain, gauge willingness to pay</p>
                  <p><strong>Success:</strong> 70%+ of interviewees validate the problem exists</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-black text-gray-900 mb-4">Week 3-4: Build MVP (Minimum Viable Product)</h3>
                <p className="text-gray-700 mb-4">Build the simplest version that solves the core problem. Perfection is the enemy of shipping.</p>
                <div className="bg-gray-50 p-4 rounded space-y-2 text-sm">
                  <p><strong>Actions:</strong> Build ONE core feature, get it working, prepare for feedback</p>
                  <p><strong>Success:</strong> People can use it to solve their problem within 5 minutes</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-black text-gray-900 mb-4">Week 5-6: Beta Launch to 50-100 Users</h3>
                <p className="text-gray-700 mb-4">Release to friendly beta users. Get feedback. These should be warm intros from your network.</p>
                <div className="bg-gray-50 p-4 rounded space-y-2 text-sm">
                  <p><strong>Actions:</strong> Email your network, gather feedback, fix critical issues, iterate rapidly</p>
                  <p><strong>Success:</strong> Users love it and start inviting others</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-black text-gray-900 mb-4">Week 7-8: Product Launch & Go Public</h3>
                <p className="text-gray-700 mb-4">Launch publicly. Share your story on Product Hunt, Twitter, relevant communities. Let word spread.</p>
                <div className="bg-gray-50 p-4 rounded space-y-2 text-sm">
                  <p><strong>Actions:</strong> Launch on Product Hunt, tweet your journey, post in communities, start your blog</p>
                  <p><strong>Success:</strong> 100+ users from organic channels in first week</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-black text-gray-900 mb-4">Month 2+: Iterate on Product & GTM</h3>
                <p className="text-gray-700 mb-4">Based on user behavior, double down on what works. Kill what doesn\'t. Improve retention and CAC.</p>
                <div className="bg-gray-50 p-4 rounded space-y-2 text-sm">
                  <p><strong>Actions:</strong> Analyze usage, improve onboarding, build features users ask for, optimize CAC</p>
                  <p><strong>Success:</strong> Week-over-week user growth, improve retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startup GTM Template */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Your Startup GTM One-Pager</h2>
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 space-y-6">
            {[
              {
                q: 'Who is your ideal customer?',
                tips: 'Be specific. Job title, company size, industry, challenges. Start with ONE segment.'
              },
              {
                q: 'What problem do you solve better than anyone?',
                tips: 'What is your unfair advantage? Why you, not competitors?'
              },
              {
                q: 'How will you reach them?',
                tips: 'List your top 3 channels. Where do they hang out? Who can introduce you?'
              },
              {
                q: 'What\'s your positioning statement?',
                tips: 'Fill in: "For [customer], [product] is the [category] that [solves problem] unlike [competitor]."'
              },
              {
                q: 'How will you get first 100 customers?',
                tips: 'Specific channels. Personal outreach, community, product-led growth, partnerships?'
              },
              {
                q: 'What\'s your pricing?',
                tips: 'How much will customers pay? What\'s your revenue goal for year 1?'
              },
              {
                q: 'How will you measure success?',
                tips: 'Key metrics: Users, MRR, retention, CAC, LTV. What are your month 1, 3, 6 targets?'
              },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-bold text-gray-900 mb-2">{item.q}</h4>
                <p className="text-gray-600 text-sm italic">{item.tips}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-6">Ready to Launch Your Startup?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Download our GTM framework and get expert guidance on validating your market and acquiring your first customers.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/gtm-strategy-template" className="px-10 py-5 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">Get GTM Template</Link>
            <Link href="/go-to-market-consultant" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-600 transition-colors">Talk to Expert</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
