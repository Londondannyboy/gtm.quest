import { Metadata } from 'next'
import Link from 'next/link'
import { JobsGraph3D } from '@/components/JobsGraph3D'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Go-to-Market Consultant | GTM Strategy Expert | GTM Quest',
  description: 'Expert go-to-market consultants for product launches and market entry. Strategic GTM planning, execution support, and launch management. Get your product to market successfully.',
  keywords: 'go-to-market consultant, gtm consultant, gtm strategy consultant, product launch consultant, market entry strategy, go-to-market expert',
  alternates: { canonical: 'https://gtm.quest/go-to-market-consultant' },
  openGraph: {
    title: 'Go-to-Market Consultant | Expert GTM Strategy',
    description: 'Work with experienced GTM consultants to plan and execute successful product launches and market entry strategies.',
    type: 'website'
  }
}

export default function GoToMarketConsultantPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* 3D Knowledge Graph */}
        <div className="absolute inset-0">
          <JobsGraph3D categoryFilter="GTM" limit={25} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-blue-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Expert Services</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Go-to-Market<br /><span className="text-blue-300">Consultant</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Launch products successfully and enter new markets with expert GTM strategy and execution. Our consultants bring proven frameworks and real-world expertise to maximize your market impact.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors">Get Expert Help</Link>
                <Link href="/gtm-strategy" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-900 transition-colors">View GTM Strategy Guide</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What a Go-to-Market Consultant Does</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">A go-to-market consultant strategizes and executes your product or service launch. They develop comprehensive GTM plans, coordinate cross-functional teams, and guide your company through the complex process of entering new markets or launching new products.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              { title: 'GTM Strategy Development', description: 'Create comprehensive go-to-market plans with positioning, pricing, distribution, and launch timelines.' },
              { title: 'Market Research & Analysis', description: 'Identify target segments, analyze competitive landscape, and validate market opportunity.' },
              { title: 'Product Positioning', description: 'Develop compelling positioning and messaging that resonates with your target market.' },
              { title: 'Launch Planning & Execution', description: 'Orchestrate product launches including marketing campaigns, sales enablement, and partnership activation.' },
              { title: 'Sales & Channel Strategy', description: 'Design go-to-market channels, partner ecosystems, and sales models.' },
              { title: 'Team Coordination', description: 'Lead cross-functional alignment with product, marketing, sales, and operations teams.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire a Go-to-Market Consultant</h2>
          <div className="space-y-4">
            {[
              'Launching a new product or service to market',
              'Entering a new geographic market or customer segment',
              'Significant pivot or repositioning of existing product',
              'Limited in-house GTM expertise or bandwidth',
              'Want to accelerate time-to-market and reduce launch risk',
              'Need expert guidance on pricing, positioning, or distribution strategy',
              'Managing a complex product launch with multiple stakeholders',
              'Scaling from early customers to mainstream market adoption',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white border border-gray-200">
                <span className="text-blue-500 font-bold">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">The GTM Consultant Advantage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Proven Frameworks',
                description: 'Access battle-tested GTM methodologies and frameworks developed across hundreds of launches.'
              },
              {
                icon: '📊',
                title: 'Market Insights',
                description: 'Leverage deep market research and competitive intelligence to inform your strategy.'
              },
              {
                icon: '⚡',
                title: 'Execution Speed',
                description: 'Accelerate your launch timeline with expert planning and cross-functional coordination.'
              },
              {
                icon: '🎪',
                title: 'Team Leadership',
                description: 'Lead and align your organization around a clear, shared GTM vision and roadmap.'
              },
              {
                icon: '💰',
                title: 'Risk Mitigation',
                description: 'Identify and address critical risks before launch to avoid costly mistakes.'
              },
              {
                icon: '🚀',
                title: 'Scalable Growth',
                description: 'Build sustainable GTM models that support growth beyond the initial launch.'
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black mb-8">Expert GTM Consultants for Every Stage</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                stage: 'Pre-Launch (Startups & Scaleups)',
                description: 'Develop initial GTM strategy, position your product, and plan your market entry.',
                services: 'Market research, positioning, pricing strategy, launch planning'
              },
              {
                stage: 'Growth Stage (Series A-C)',
                description: 'Scale your GTM operation, expand into new segments, and accelerate customer acquisition.',
                services: 'Channel strategy, sales playbooks, marketing ops, partner enablement'
              },
              {
                stage: 'Enterprise (Public & Large Private)',
                description: 'Launch new products into established markets and manage complex go-to-market initiatives.',
                services: 'Strategic planning, transformation, organizational alignment, execution oversight'
              },
              {
                stage: 'Global Expansion',
                description: 'Localize your GTM strategy for new regions while maintaining brand consistency.',
                services: 'Market analysis, localization strategy, partner selection, regional launch'
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/10 border border-white/20 rounded-lg">
                <h3 className="font-bold text-white mb-2">{item.stage}</h3>
                <p className="text-white/80 text-sm mb-4">{item.description}</p>
                <p className="text-blue-200 text-xs font-semibold">{item.services}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Common GTM Challenges We Solve</h2>
          <div className="space-y-6">
            {[
              {
                challenge: 'Unclear Market Position',
                solution: 'We help you develop compelling positioning that differentiates your product and resonates with your target market.'
              },
              {
                challenge: 'Pricing Uncertainty',
                solution: 'Expert pricing strategy informed by market research, competitor analysis, and customer willingness to pay.'
              },
              {
                challenge: 'Siloed Teams',
                solution: 'We align product, marketing, and sales teams around a shared GTM vision and execution plan.'
              },
              {
                challenge: 'Channel Confusion',
                solution: 'Strategic guidance on selecting and optimizing go-to-market channels for your specific product and market.'
              },
              {
                challenge: 'Launch Risk',
                solution: 'Comprehensive risk planning and contingency strategies to minimize launch day surprises.'
              },
              {
                challenge: 'Scaling Beyond Launch',
                solution: 'Build repeatable GTM processes that support sustainable growth and new market expansion.'
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">Challenge: {item.challenge}</h3>
                <p className="text-gray-700 text-sm"><strong>Our Solution:</strong> {item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Launch Successfully?</h2>
          <p className="text-xl text-blue-100 mb-10">Connect with an experienced go-to-market consultant to develop your launch strategy and execute flawlessly.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">Get Started Today</Link>
            <Link href="/contact" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-600 transition-colors">Schedule a Call</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Explore More GTM Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'GTM Strategy Guide',
                description: 'Complete framework for developing your go-to-market strategy.',
                link: '/gtm-strategy'
              },
              {
                title: 'SaaS GTM Planning',
                description: 'Specialized strategies for SaaS product launches and expansion.',
                link: '/saas-gtm-plan'
              },
              {
                title: 'Product Launch Playbook',
                description: 'Step-by-step guidance for executing a successful product launch.',
                link: '/product-launch'
              },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
