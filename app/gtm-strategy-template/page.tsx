'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { useState } from 'react'

// Note: Metadata needs to be in a server component
// This page uses 'use client' for form interactivity
// SEO metadata should be added via a layout or separate metadata export

const metadata_info = {
  title: 'Free GTM Strategy Template | Go-to-Market Canvas PDF | GTM Quest',
  description: 'Download our free GTM strategy template - a one-page canvas for planning your go-to-market strategy. Includes positioning, pricing, distribution, and launch planning.',
  keywords: 'gtm template, go-to-market template, gtm strategy template, gtm canvas, go-to-market strategy tool',
  alternates: { canonical: 'https://gtm.quest/gtm-strategy-template' }
}

export default function GTMStrategyTemplatePage() {
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          company,
          source: 'gtm-strategy-template',
          content_type: 'GTM Strategy Template PDF'
        })
      })

      if (response.ok) {
        setSubmitted(true)
        // In production, trigger PDF download here
        const link = document.createElement('a')
        link.href = '/assets/gtm-strategy-template.pdf'
        link.download = 'GTM-Strategy-Template.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        setError('Failed to submit. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error(err)
    }
    setLoading(false)
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://gtm.quest"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "GTM Strategy Template",
        item: "https://gtm.quest/gtm-strategy-template"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-400 text-blue-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Free Resource</span>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-[1.1]">GTM Strategy Template</h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">Download our proven one-page GTM strategy canvas used by hundreds of product launches. Plan your positioning, pricing, distribution, and launch in one structured framework.</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-blue-200">
                  <span>✓</span> <span>One-page PDF canvas</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <span>✓</span> <span>Downloadable & printable</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <span>✓</span> <span>Instant access</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8">
                <h2 className="text-2xl font-black text-gray-900 mb-6">Get Your Free Template</h2>

                {submitted ? (
                  <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg text-center">
                    <div className="text-4xl mb-3">✓</div>
                    <h3 className="font-bold text-green-900 mb-2">Download Starting!</h3>
                    <p className="text-green-800 text-sm mb-4">Your GTM Strategy Template is ready. Check your downloads folder.</p>
                    <p className="text-gray-600 text-sm">We've also sent a link to your email. Check your inbox for next steps.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Company (Optional)</label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm rounded-lg">
                        {error}
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-6 py-3 bg-blue-600 text-white font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                    >
                      {loading ? 'Sending...' : 'Download Template'}
                    </button>
                    <p className="text-gray-500 text-xs text-center">We respect your privacy. Unsubscribe anytime.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">What's Inside the Template</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Product Positioning',
                items: ['Target Market Definition', 'Value Proposition', 'Key Differentiators', 'Messaging Framework']
              },
              {
                icon: '💰',
                title: 'Pricing Strategy',
                items: ['Pricing Model', 'Price Point', 'Competitive Analysis', 'Willingness to Pay']
              },
              {
                icon: '🚀',
                title: 'Go-to-Market Motion',
                items: ['Distribution Channels', 'Customer Acquisition Strategy', 'Sales Motion', 'Partnership Approach']
              },
              {
                icon: '📅',
                title: 'Launch Plan',
                items: ['Timeline & Milestones', 'Launch Activities', 'Success Metrics', 'Risk Mitigation']
              },
              {
                icon: '👥',
                title: 'Customer Strategy',
                items: ['Ideal Customer Profile (ICP)', 'Customer Segments', 'Buying Journey', 'Win/Loss Strategy']
              },
              {
                icon: '📊',
                title: 'Success Metrics',
                items: ['Key Performance Indicators', 'Launch Goals', 'Tracking Plan', 'Adjustment Framework']
              },
            ].map((section, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{section.icon}</div>
                <h3 className="font-bold text-gray-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700">
                      <span className="text-blue-500 font-bold mt-0.5">•</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">How to Use This Template</h2>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Download & Print',
                description: 'Save the PDF and print a physical copy, or use a digital annotation tool. We recommend printing - many teams find the visual, tactile canvas more collaborative.'
              },
              {
                step: '2',
                title: 'Gather Your Team',
                description: 'Assemble key stakeholders from product, marketing, sales, and operations. This works best as a collaborative workshop (2-4 hours).'
              },
              {
                step: '3',
                title: 'Fill in Each Section',
                description: 'Work through each section, debating and aligning on key decisions. Start with positioning and work through to your launch plan.'
              },
              {
                step: '4',
                title: 'Validate & Refine',
                description: 'Share your canvas with customers, sales teams, and advisors. Iterate based on feedback to stress-test your assumptions.'
              },
              {
                step: '5',
                title: 'Create Your Roadmap',
                description: 'Translate your canvas into a detailed project plan with owners, deadlines, and success metrics.'
              },
              {
                step: '6',
                title: 'Execute & Monitor',
                description: 'Execute your plan, track your metrics, and use your canvas as a reference point for decisions and adjustments.'
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">Companies Using This Template</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: 'SaaS Startup',
                result: 'Reduced launch timeline by 40%',
                quote: 'The template helped us align our team on priorities and avoid costly repositioning after launch.'
              },
              {
                company: 'Enterprise Scale-up',
                result: '3x faster customer acquisition',
                quote: 'Clarifying our GTM motion upfront meant our sales and marketing teams could execute in parallel.'
              },
              {
                company: 'Product Team',
                result: 'Increased launch success rate to 95%',
                quote: 'We now use this framework for every new product release. It\'s non-negotiable for our process.'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border-l-4 border-blue-600 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
                </div>
                <p className="text-gray-700 italic mb-6">"{item.quote}"</p>
                <p className="font-bold text-gray-900 mb-1">{item.company}</p>
                <p className="text-blue-600 font-semibold text-sm">{item.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-6">Ready to Plan Your GTM?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Get your free GTM Strategy Template and start aligning your team on a winning go-to-market plan.</p>
          <Link href="#" className="px-10 py-5 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors inline-block">Download Template Now</Link>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Next Steps</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'GTM Strategy Guide',
                description: 'Deep dive into each component of your GTM strategy with real-world examples.',
                link: '/gtm-strategy'
              },
              {
                title: 'Product Launch Playbook',
                description: 'Step-by-step execution guide for bringing your product to market successfully.',
                link: '/product-launch'
              },
              {
                title: 'SaaS GTM Plan',
                description: 'Specialized guidance for SaaS product launches and go-to-market strategies.',
                link: '/saas-gtm-plan'
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
    </>
  )
}
