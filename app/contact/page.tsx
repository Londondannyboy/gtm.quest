'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Footer } from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    // In a real app, you'd send this to an API
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <Link href="/" className="text-amber-400 hover:text-amber-300 font-semibold mb-6 inline-flex items-center gap-2">
              ← Back to GTM Quest
            </Link>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have questions about our GTM tools? Want to work with us? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-28">
          <div className="max-w-2xl mx-auto px-6 lg:px-8">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-green-900 mb-2">Thank you!</h2>
                <p className="text-green-700">We've received your message and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                    placeholder="Tell us about your GTM needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all"
                >
                  Send Message
                </button>
              </form>
            )}

            {/* Alternative Contact Methods */}
            <div className="mt-16 pt-12 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Other Ways to Reach Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-3">📧</div>
                  <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                  <a href="mailto:hello@gtm.quest" className="text-amber-600 hover:text-amber-700">
                    hello@gtm.quest
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">💬</div>
                  <h3 className="font-bold text-gray-900 mb-2">Chat with AI</h3>
                  <Link href="/chat" className="text-amber-600 hover:text-amber-700">
                    Get instant strategy help
                  </Link>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="font-bold text-gray-900 mb-2">Get Started</h3>
                  <Link href="/planner" className="text-amber-600 hover:text-amber-700">
                    Build your GTM plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
