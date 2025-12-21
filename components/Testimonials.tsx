'use client'

import { useState } from 'react'

interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  type: 'executive' | 'company'
}

const testimonials: Testimonial[] = [
  {
    quote: "Working fractionally has given me the flexibility to work with multiple interesting companies while maintaining work-life balance. The variety of challenges keeps me sharp.",
    name: "Sarah M.",
    role: "Fractional CFO",
    company: "Former Big 4, 20+ years experience",
    type: 'executive',
  },
  {
    quote: "We needed senior marketing leadership but couldn't justify a full-time CMO at our stage. Our fractional CMO gave us the strategic direction we needed at a fraction of the cost.",
    name: "James T.",
    role: "CEO",
    company: "Series A SaaS Startup",
    type: 'company',
  },
  {
    quote: "After 25 years in corporate finance, going fractional was the best career decision I've made. I choose my clients, set my schedule, and do work I find meaningful.",
    name: "Michael R.",
    role: "Fractional CFO/COO",
    company: "PE/VC Specialist",
    type: 'executive',
  },
  {
    quote: "Our fractional CTO helped us build the technical foundation we needed without the commitment of a full-time executive. They brought experience from multiple scaling companies.",
    name: "Emma L.",
    role: "Founder",
    company: "HealthTech Startup",
    type: 'company',
  },
]

export function Testimonials({ type = 'all' }: { type?: 'all' | 'executive' | 'company' }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const filtered = type === 'all' ? testimonials : testimonials.filter(t => t.type === type)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What People Say
          </h2>
          <p className="text-gray-600">
            From executives and companies working fractionally
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <svg className="w-10 h-10 text-purple-200 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              "{filtered[activeIndex].quote}"
            </p>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-900">{filtered[activeIndex].name}</div>
                <div className="text-gray-600">{filtered[activeIndex].role}</div>
                <div className="text-gray-500 text-sm">{filtered[activeIndex].company}</div>
              </div>

              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                filtered[activeIndex].type === 'executive'
                  ? 'bg-purple-100 text-purple-700'
                  : 'bg-blue-100 text-blue-700'
              }`}>
                {filtered[activeIndex].type === 'executive' ? 'Executive' : 'Company'}
              </span>
            </div>
          </div>

          {/* Navigation Dots */}
          {filtered.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {filtered.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-purple-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export function TestimonialsCompact() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {testimonials.slice(0, 2).map((testimonial, index) => (
        <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
          <p className="text-gray-700 mb-4 line-clamp-3">
            "{testimonial.quote}"
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <div className="font-medium text-gray-900 text-sm">{testimonial.name}</div>
              <div className="text-gray-500 text-xs">{testimonial.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
