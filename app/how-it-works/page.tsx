import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works | Hire Fractional Executives | GTM Quest',
  description: 'Learn how to hire fractional CFOs, CMOs, CTOs and other C-suite executives. Simple 4-step process from brief to placement.',
  keywords: 'hire fractional executive, fractional cfo process, how to hire fractional cmo, fractional executive hiring',
}

const steps = [
  {
    number: '01',
    title: 'Share Your Needs',
    description: 'Tell us about your business challenges, the expertise you need, and your timeline. We\'ll help you define the right fractional role.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'We Match You',
    description: 'Our team identifies 2-3 pre-vetted executives who match your requirements. Each has been screened for expertise, communication, and cultural fit.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Meet & Decide',
    description: 'Interview your matches directly. There\'s no obligation - you only proceed if you find the right fit for your team and culture.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Start Working',
    description: 'Your fractional executive starts within days, not months. Flexible arrangements from 1 day per week to full-time interim coverage.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

const benefits = [
  {
    title: '40-60% Cost Savings',
    description: 'Pay only for the time you need. No salary, benefits, or equity dilution.',
    stat: '60%',
  },
  {
    title: 'Start in Days',
    description: 'Skip the 3-6 month hiring process. Get senior expertise working immediately.',
    stat: '5 days',
  },
  {
    title: 'Proven Experience',
    description: 'Access executives with 15-20+ years of experience across multiple companies.',
    stat: '15+ years',
  },
  {
    title: 'Flexible Terms',
    description: 'Scale up or down as needed. No long-term contracts or commitments required.',
    stat: '30 days',
  },
]

const roles = [
  { name: 'CFO', title: 'Fractional CFO', desc: 'Financial strategy, fundraising, board reporting' },
  { name: 'CMO', title: 'Fractional CMO', desc: 'Marketing strategy, brand, demand generation' },
  { name: 'CTO', title: 'Fractional CTO', desc: 'Technology strategy, architecture, team building' },
  { name: 'COO', title: 'Fractional COO', desc: 'Operations, scaling, process optimization' },
  { name: 'CPO', title: 'Fractional CPO', desc: 'Product strategy, roadmap, user experience' },
  { name: 'CHRO', title: 'Fractional CHRO', desc: 'People strategy, culture, talent acquisition' },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-black text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
            For Companies
          </span>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            How Fractional Hiring Works
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get senior C-suite expertise without the full-time commitment. From first contact to your executive starting, it takes just 1-2 weeks.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2" />
                )}

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-full">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                    {step.icon}
                  </div>
                  <div className="text-sm font-bold text-purple-600 mb-2">STEP {step.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Why Companies Choose Fractional</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get the strategic leadership you need, when you need it, at a fraction of the cost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-4xl font-black text-purple-600 mb-3">{benefit.stat}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Roles We Fill</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access experienced executives across all C-suite functions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <Link
                key={role.name}
                href={`/fractional-${role.name.toLowerCase()}-services`}
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                    {role.name}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {role.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600">{role.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">Common Questions</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How much does a fractional executive cost?</h3>
              <p className="text-gray-600">
                Day rates typically range from £700-£1,500 depending on the role and experience level. Most engagements are 1-3 days per week, making total monthly costs £3,000-£18,000 - a fraction of a full-time salary plus benefits.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long are typical engagements?</h3>
              <p className="text-gray-600">
                Engagements typically run 3-12 months, though some relationships continue for years. There are no long-term commitments - you can scale up, scale down, or end the engagement with 30 days notice.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What's the difference between fractional and interim?</h3>
              <p className="text-gray-600">
                Interim executives typically work full-time for a fixed period (e.g., covering parental leave or during a transition). Fractional executives work part-time on an ongoing basis, often with multiple clients simultaneously.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can fractional executives work remotely?</h3>
              <p className="text-gray-600">
                Yes, most fractional engagements are remote or hybrid. Many executives work with clients across the UK and internationally. In-person time can be arranged for key meetings, board sessions, or team events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Find Your Fractional Executive?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Tell us about your needs and we'll match you with experienced executives within 48 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all"
            >
              Start Hiring →
            </Link>
            <Link
              href="/people"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              Browse Executives
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
