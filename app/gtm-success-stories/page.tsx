import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'GTM Success Stories | Product Launch Case Studies | GTM Quest',
  description: 'Real-world go-to-market success stories and case studies. Learn how companies launched products and entered new markets successfully.',
  keywords: 'gtm success stories, product launch case studies, go-to-market examples, startup success, product launch stories',
  alternates: { canonical: 'https://gtm.quest/gtm-success-stories' },
  openGraph: {
    title: 'GTM Success Stories | Launch Case Studies',
    description: 'Real examples of successful product launches and market entry strategies.',
    type: 'website'
  }
}

export default function GTMSuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-blue-400 text-blue-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Success Stories</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">GTM Success<br /><span className="text-blue-300">Stories</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">Real-world examples of companies that executed winning go-to-market strategies and achieved rapid growth. Learn from their success.</p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">How Companies Executed Winning GTM Strategies</h2>
          <div className="space-y-12">
            {[
              {
                company: 'Intercom',
                year: '2011',
                challenge: 'Product-market fit achieved, but needed to scale customer acquisition. Chat felt crowded with competitors (Zendesk, Olark).',
                strategy: {
                  positioning: 'Positioned as "Messaging Platform for Businesses" - broader than just support chat. Focus on customer communication and conversational marketing.',
                  channels: 'Content marketing (excellent blog), product-led growth (free plan), partnerships (integrated into product platforms), community engagement',
                  execution: 'Built best-in-class documentation and tutorials. Created comprehensive guides on customer communication. Hosted conferences. Built customer community.',
                  pricing: 'Freemium model with powerful free tier, transparent pricing tiers'
                },
                results: {
                  metric: '$200M+ revenue run rate',
                  outcome: 'Grew from 500 customers to 25,000+ customers. Became messaging category leader. Raised $200M in funding. Achieved $2B+ valuation.'
                },
                lessons: [
                  'Content marketing and education drove growth more than ads',
                  'Community building (customers advocating for you) is powerful',
                  'Generous free tier builds trust and drives adoption',
                  'Expanding TAM (from support to all customer communication) opens growth'
                ]
              },
              {
                company: 'Calendly',
                year: '2013',
                challenge: 'Scheduling was a solved problem (Outlook, Google Calendar built-in), but cumbersome and time-wasting for B2B professionals.',
                strategy: {
                  positioning: 'Positioned as "Scheduling Made Simple" - the easiest way to schedule meetings. Focus on time savings.',
                  channels: 'Product-led growth (free tier so good no credit card needed), word-of-mouth virality (shared calendar links), influencer usage, SaaS community',
                  execution: 'Obsessed with ease of use. Every feature removes friction. Built referral mechanics (each shared link is marketing). Minimal onboarding.',
                  pricing: 'Free forever for basic features, simple paid tiers for advanced features'
                },
                results: {
                  metric: '$7B valuation (2023)',
                  outcome: 'From idea to 30,000 paying customers in 3 years. 10M+ users. Profitable by year 2. Minimal paid marketing spend.'
                },
                lessons: [
                  'Free tier so good it drives viral adoption is more powerful than sales team',
                  'Word-of-mouth and virality scale faster than traditional sales',
                  'Make the product so good people want to share it',
                  'Customer delight drives referrals and growth'
                ]
              },
              {
                company: 'Zapier',
                year: '2011',
                challenge: 'Automation and integration space seemed dominated by big players (MuleSoft, Boomi). Needed differentiation.',
                strategy: {
                  positioning: 'Positioned as "Automation for Everyone" - the easiest no-code automation tool. Focus on small business and non-technical users.',
                  channels: 'Community engagement (maker communities, indie hacker communities), SEO and content marketing, product virality (shared zaps), integrations ecosystem',
                  execution: 'Built 5,000+ integrations. Made sharing workflows easy (Zaps are shareable). Hosted regular webinars. Created knowledge base. Engaged communities authentically.',
                  pricing: 'Freemium with generous free tier. Simple usage-based pricing. No enterprise minimums.'
                },
                results: {
                  metric: '$5B+ valuation',
                  outcome: 'Grew to 20M+ users. 5,000+ integrations. No VC funding for 8 years (bootstrapped). Profitable and growing.'
                },
                lessons: [
                  'Community-driven GTM can scale without venture capital',
                  'Integrations ecosystem becomes a competitive moat',
                  'Content and SEO drive sustainable long-term growth',
                  'Authenticity in communities drives adoption'
                ]
              },
              {
                company: 'Airtable',
                year: '2013',
                challenge: 'Database software and spreadsheets were mature markets. How do you compete?',
                strategy: {
                  positioning: 'Positioned as "A Spreadsheet on Steroids" - familiar to everyone, but with database power. Made databases accessible.',
                  channels: 'Product-led growth (free tier), designer and maker communities, content marketing, developer relations, integrations',
                  execution: 'Obsessed with design and UX. Built beautiful templates. Created sample bases. Hosted educational content. Built API-first platform.',
                  pricing: 'Freemium with powerful free tier. Pay-as-you-grow pricing based on features and data.'
                },
                results: {
                  metric: '$8.1B valuation',
                  outcome: 'Grew to 500K+ organizations using Airtable. Became essential tool for SMBs, nonprofits, and enterprises. Raised $735M in funding.'
                },
                lessons: [
                  'Great design and UX drive adoption in crowded markets',
                  'Making complex products simple is powerful GTM',
                  'Developer ecosystem and API-first approach drives extensions',
                  'Community and templates drive viral adoption'
                ]
              },
              {
                company: 'Webflow',
                year: '2013',
                challenge: 'Web design tools existed (Wix, Squarespace, Dreamweaver), but developers wanted code control without coding.',
                strategy: {
                  positioning: 'Positioned as "The Professional Website Platform" - visual design with code-level power. For designers and developers.',
                  channels: 'Designer and developer communities, YouTube tutorials, Webflow community (forum), partnerships with agencies, education (courses and certifications)',
                  execution: 'Created best-in-class educational content. Built Webflow University with free courses. Created certification program. Built thriving community.',
                  pricing: 'Freemium with professional tiers. Site-based pricing aligned with business growth.'
                },
                results: {
                  metric: '$4B+ valuation',
                  outcome: 'Grew to 200K+ creators. Became standard tool for modern web design. 30K+ certified professionals. Raised $140M in funding.'
                },
                lessons: [
                  'Education as GTM - teach users to succeed and they\'ll advocate',
                  'Community-driven growth through certification programs',
                  'Creator economy and user-generated content drives adoption',
                  'Partnering with agencies extends reach'
                ]
              },
            ].map((story, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-blue-500">
                <div className="p-8 md:p-12">
                  <div className="flex items-baseline gap-4 mb-6">
                    <h3 className="text-3xl font-black text-gray-900">{story.company}</h3>
                    <p className="text-sm text-gray-600">Founded {story.year}</p>
                  </div>

                  <div className="mb-8 p-6 bg-red-50 border-l-4 border-red-500 rounded">
                    <h4 className="font-bold text-gray-900 mb-2">The Challenge</h4>
                    <p className="text-gray-700">{story.challenge}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">GTM Strategy</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-xs font-bold text-blue-600 uppercase mb-2">Positioning</p>
                        <p className="text-sm text-gray-700">{story.strategy.positioning}</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <p className="text-xs font-bold text-green-600 uppercase mb-2">Channels</p>
                        <p className="text-sm text-gray-700">{story.strategy.channels}</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <p className="text-xs font-bold text-purple-600 uppercase mb-2">Execution</p>
                        <p className="text-sm text-gray-700">{story.strategy.execution}</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-xs font-bold text-blue-600 uppercase mb-2">Pricing</p>
                        <p className="text-sm text-gray-700">{story.strategy.pricing}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 p-6 bg-green-50 border-l-4 border-green-500 rounded">
                    <h4 className="font-bold text-gray-900 mb-2">Results & Outcome</h4>
                    <p className="text-lg font-bold text-green-900 mb-2">{story.results.metric}</p>
                    <p className="text-gray-700">{story.results.outcome}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">Key Lessons</h4>
                    <ul className="space-y-2">
                      {story.lessons.map((lesson, j) => (
                        <li key={j} className="flex gap-3">
                          <span className="text-blue-500 font-bold">→</span>
                          <span className="text-gray-700">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Patterns */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">What These Success Stories Have in Common</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                pattern: 'Product-Led Growth',
                description: 'Generous free tiers that let users experience value before paying. Free tier drives adoption and word-of-mouth.'
              },
              {
                pattern: 'Community Obsession',
                description: 'Active engagement with user communities. Education, content, forums, and authentic relationships drive growth.'
              },
              {
                pattern: 'Simplicity',
                description: 'Make complex products simple. Excel at UX and ease-of-use. Reduce friction at every step.'
              },
              {
                pattern: 'Clear Positioning',
                description: 'Distinct positioning that resonates with target users. Not trying to be everything to everyone.'
              },
              {
                pattern: 'Ecosystem Play',
                description: 'Integrations, partnerships, and extensibility are core to GTM. Enable others to build on your platform.'
              },
              {
                pattern: 'Content & Education',
                description: 'Invest in helping users succeed. Tutorials, guides, courses, certifications, and community forums.'
              },
              {
                pattern: 'Aligned Organization',
                description: 'Product, pricing, sales, marketing, and support all aligned. Everyone focused on customer success.'
              },
              {
                pattern: 'Organic Growth First',
                description: 'Nail word-of-mouth and organic channels before paid marketing. Build on solid foundation first.'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.pattern}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-6">Build Your Own GTM Success Story</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">You don't need to be a unicorn to succeed. Use the same GTM principles these companies used. Download our framework and start today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/gtm-strategy-template" className="px-10 py-5 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">Get GTM Template</Link>
            <Link href="/what-is-gtm" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-600 transition-colors">Learn GTM Framework</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
