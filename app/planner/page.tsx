'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Link from 'next/link'

// Form validation schema
const plannerSchema = z.object({
  companyName: z.string().min(2, 'Company name required'),
  industry: z.string().min(1, 'Please select an industry'),
  productName: z.string().min(2, 'Product name required'),
  productDescription: z.string().min(10, 'Tell us about your product'),

  marketType: z.string().min(1, 'Select market type'),
  targetCustomer: z.string().min(10, 'Describe your target customer'),
  geography: z.string().min(1, 'Select geography'),

  problem: z.string().min(20, 'Describe the problem you solve'),
  solution: z.string().min(20, 'Explain your unique solution'),
  advantage: z.string().min(10, 'What\'s your main advantage?'),

  stage: z.string().min(1, 'Select your current stage'),
  hasCustomers: z.string().min(1, 'Do you have customers?'),
  monthlyRevenue: z.string().min(1, 'Select revenue range'),
  teamSize: z.string().min(1, 'Select team size'),

  primaryGoal: z.string().min(1, 'Select primary goal'),
  timeline: z.string().min(1, 'Select timeline'),
  budget: z.string().min(1, 'Select budget range'),

  email: z.string().email('Valid email required'),
})

type PlannerFormData = z.infer<typeof plannerSchema>

interface GeneratedPlan {
  executive_summary: string
  recommended_approach: string
  approach_explanation: string
  phases: Array<{
    phase_number: number
    name: string
    duration: string
    objectives: string[]
    key_metrics: string[]
  }>
  budget_allocation: Record<string, number>
  success_metrics: {
    north_star: string
    leading_indicators: string[]
    lagging_indicators: string[]
  }
  recommended_agencies: Array<{
    name: string
    specialization: string
    reason: string
  }>
  next_steps: string[]
}

export default function PlannerPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [generatedPlan, setGeneratedPlan] = useState<GeneratedPlan | null>(null)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PlannerFormData>({
    resolver: zodResolver(plannerSchema),
  })

  const onSubmit = async (data: PlannerFormData) => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/generate-gtm-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || 'Failed to generate plan. Please try again.')
      }

      const plan = await response.json()

      // Validate plan has required fields
      if (!plan.executive_summary || !plan.phases) {
        throw new Error('Invalid plan data received. Please try again.')
      }

      setGeneratedPlan(plan)

      // Send plan to email (optional - can implement later)
      if (data.email) {
        fetch('/api/send-gtm-plan', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: data.email, plan }),
        }).catch(() => {}) // Silent fail for email
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.'
      setError(errorMessage)
      console.error('Plan generation error:', err)
    } finally {
      setLoading(false)
    }
  }

  // Show generated plan
  if (generatedPlan) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Back Link */}
          <Link href="/" className="text-amber-600 hover:text-amber-700 font-semibold mb-8 inline-flex items-center gap-2">
            ← Back to GTM Quest
          </Link>

          {/* Plan Header */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-black text-gray-900 mb-4">Your Custom GTM Strategy</h1>
            <p className="text-xl text-gray-600">Personalized go-to-market plan based on your unique situation</p>
          </div>

          {/* Executive Summary */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{generatedPlan.executive_summary}</p>
          </section>

          {/* Recommended Approach */}
          <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-8 mb-8 border border-amber-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Recommended GTM Approach: <span className="text-amber-600">{generatedPlan.recommended_approach}</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{generatedPlan.approach_explanation}</p>
          </section>

          {/* 4-Phase Roadmap */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your 4-Phase GTM Roadmap</h2>
            <div className="space-y-6">
              {generatedPlan.phases.map((phase) => (
                <div key={phase.phase_number} className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-amber-500">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Phase {phase.phase_number}: {phase.name}
                      </h3>
                      <p className="text-amber-600 font-semibold">{phase.duration}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Key Objectives:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {phase.objectives.map((obj, i) => (
                        <li key={i} className="text-gray-700">{obj}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Key Metrics to Track:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {phase.key_metrics.map((metric, i) => (
                        <div key={i} className="bg-gray-50 p-2 rounded text-sm text-gray-700">
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Budget Allocation */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Budget Allocation</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(generatedPlan.budget_allocation).map(([channel, percentage]) => (
                <div key={channel} className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-black text-amber-600">{Math.round(percentage)}%</div>
                  <div className="text-sm text-gray-600 mt-2">{channel}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Success Metrics */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Success Metrics</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">North Star Metric:</h3>
                <p className="text-lg text-amber-600">{generatedPlan.success_metrics.north_star}</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Leading Indicators:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {generatedPlan.success_metrics.leading_indicators.map((indicator, i) => (
                    <li key={i} className="text-gray-700">{indicator}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Lagging Indicators:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {generatedPlan.success_metrics.lagging_indicators.map((indicator, i) => (
                    <li key={i} className="text-gray-700">{indicator}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Recommended Agencies */}
          {generatedPlan.recommended_agencies.length > 0 && (
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended GTM Agencies</h2>
              <p className="text-gray-600 mb-6">
                Based on your goals and budget, here are the top GTM agencies that specialize in your situation.
                As one of the <Link href="/" className="text-amber-600 hover:text-amber-700 font-semibold">leading GTM agencies</Link>,
                we can also help implement this strategy directly.
              </p>
              <div className="space-y-4">
                {generatedPlan.recommended_agencies.map((agency, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-2">{agency.name}</h3>
                    <p className="text-sm text-amber-600 font-semibold mb-2">{agency.specialization}</p>
                    <p className="text-gray-700">{agency.reason}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Next Steps */}
          <section className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl shadow-lg p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-6">Your Next Steps</h2>
            <ol className="space-y-3">
              {generatedPlan.next_steps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-2xl font-bold">{i + 1}.</span>
                  <span className="text-lg">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Bottom CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/calculators/market-size"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-white text-amber-600 hover:bg-gray-100 transition-all duration-200"
            >
              📊 Refine with Calculators
            </Link>
            <Link
              href="/agencies"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200"
            >
              🤝 Browse GTM Agencies
            </Link>
            <Link
              href="/chat"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gray-200 text-gray-900 hover:bg-gray-300 transition-all duration-200"
            >
              💬 Chat with AI Strategist
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Show form
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="text-amber-600 hover:text-amber-700 font-semibold mb-6 inline-flex items-center gap-2">
            ← Back to GTM Quest
          </Link>
          <h1 className="text-4xl font-black text-gray-900 mb-4">Create Your Custom GTM Plan</h1>
          <p className="text-xl text-gray-600">Answer a few questions and our AI will generate your personalized go-to-market strategy</p>
          <div className="mt-8 flex justify-center gap-2">
            {[1, 2, 3, 4, 5, 6].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all ${
                  s <= step ? 'bg-amber-600 w-8' : 'bg-gray-300 w-2'
                }`}
              />
            ))}
          </div>
          <p className="text-gray-600 mt-4">Step {step} of 6</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex gap-3">
                <span className="text-red-600 text-xl">⚠️</span>
                <div>
                  <p className="font-semibold text-red-900">Unable to Generate Plan</p>
                  <p className="text-red-800 text-sm mt-1">{error}</p>
                  <p className="text-red-700 text-xs mt-2">💡 Tip: Try with slightly different inputs, or <a href="/chat" className="underline font-semibold">chat with our AI strategist</a> for personalized help.</p>
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Company Info */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Company Name</label>
                <input
                  type="text"
                  {...register('companyName')}
                  placeholder="Your company name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                />
                {errors.companyName && <p className="text-red-600 text-sm mt-1">{errors.companyName.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Industry</label>
                <select
                  {...register('industry')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                >
                  <option value="">Select your industry</option>
                  <option value="saas">SaaS</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="fintech">FinTech</option>
                  <option value="healthtech">HealthTech</option>
                  <option value="b2b-services">B2B Services</option>
                  <option value="consumer">Consumer</option>
                  <option value="other">Other</option>
                </select>
                {errors.industry && <p className="text-red-600 text-sm mt-1">{errors.industry.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Product/Service Name</label>
                <input
                  type="text"
                  {...register('productName')}
                  placeholder="What's your product called?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                />
                {errors.productName && <p className="text-red-600 text-sm mt-1">{errors.productName.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">One-Line Description</label>
                <textarea
                  {...register('productDescription')}
                  placeholder="What does your product do? (100 characters max)"
                  maxLength={100}
                  rows={2}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                />
                {errors.productDescription && <p className="text-red-600 text-sm mt-1">{errors.productDescription.message}</p>}
              </div>
            </div>
          )}

          {/* Step 2: Target Market */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Market Type</label>
                <select
                  {...register('marketType')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                >
                  <option value="">Select market type</option>
                  <option value="b2b">B2B</option>
                  <option value="b2c">B2C</option>
                  <option value="b2b2c">B2B2C</option>
                </select>
                {errors.marketType && <p className="text-red-600 text-sm mt-1">{errors.marketType.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Who is your target customer?</label>
                <input
                  type="text"
                  {...register('targetCustomer')}
                  placeholder="e.g., Marketing Directors at mid-size SaaS companies"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                />
                {errors.targetCustomer && <p className="text-red-600 text-sm mt-1">{errors.targetCustomer.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Geographic Market</label>
                <select
                  {...register('geography')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                >
                  <option value="">Select geography</option>
                  <option value="uk">UK</option>
                  <option value="europe">Europe</option>
                  <option value="us">US</option>
                  <option value="global">Global</option>
                </select>
                {errors.geography && <p className="text-red-600 text-sm mt-1">{errors.geography.message}</p>}
              </div>
            </div>
          )}

          {/* Step 3: Problem & Solution */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">What problem do you solve?</label>
                <textarea
                  {...register('problem')}
                  placeholder="Describe the pain point your product addresses"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                />
                {errors.problem && <p className="text-red-600 text-sm mt-1">{errors.problem.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">How is your solution different?</label>
                <textarea
                  {...register('solution')}
                  placeholder="What makes your approach unique?"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                />
                {errors.solution && <p className="text-red-600 text-sm mt-1">{errors.solution.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Main competitive advantage</label>
                <input
                  type="text"
                  {...register('advantage')}
                  placeholder="Your biggest differentiation"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                />
                {errors.advantage && <p className="text-red-600 text-sm mt-1">{errors.advantage.message}</p>}
              </div>
            </div>
          )}

          {/* Step 4: Current State */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Current Stage</label>
                <select
                  {...register('stage')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                >
                  <option value="">Select stage</option>
                  <option value="idea">Idea</option>
                  <option value="building">Building</option>
                  <option value="beta">Beta</option>
                  <option value="launched">Launched</option>
                  <option value="scaling">Scaling</option>
                </select>
                {errors.stage && <p className="text-red-600 text-sm mt-1">{errors.stage.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Do you have customers?</label>
                <select
                  {...register('hasCustomers')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {errors.hasCustomers && <p className="text-red-600 text-sm mt-1">{errors.hasCustomers.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Monthly Revenue</label>
                <select
                  {...register('monthlyRevenue')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                >
                  <option value="">Select range</option>
                  <option value="0">$0</option>
                  <option value="0-10k">$0 - $10k</option>
                  <option value="10k-50k">$10k - $50k</option>
                  <option value="50k-250k">$50k - $250k</option>
                  <option value="250k+">$250k+</option>
                </select>
                {errors.monthlyRevenue && <p className="text-red-600 text-sm mt-1">{errors.monthlyRevenue.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Team Size</label>
                <select
                  {...register('teamSize')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                >
                  <option value="">Select</option>
                  <option value="just-me">Just me</option>
                  <option value="2-5">2-5 people</option>
                  <option value="6-20">6-20 people</option>
                  <option value="20+">20+ people</option>
                </select>
                {errors.teamSize && <p className="text-red-600 text-sm mt-1">{errors.teamSize.message}</p>}
              </div>
            </div>
          )}

          {/* Step 5: GTM Goals */}
          {step === 5 && (
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Primary GTM Goal</label>
                <select
                  {...register('primaryGoal')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                >
                  <option value="">Select goal</option>
                  <option value="launch">Launch to Market</option>
                  <option value="growth">Growth</option>
                  <option value="scale">Scale</option>
                  <option value="new-market">Enter New Market</option>
                  <option value="reposition">Repositioning</option>
                </select>
                {errors.primaryGoal && <p className="text-red-600 text-sm mt-1">{errors.primaryGoal.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Timeline</label>
                <select
                  {...register('timeline')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                >
                  <option value="">Select timeline</option>
                  <option value="1-month">1 month</option>
                  <option value="3-months">3 months</option>
                  <option value="6-months">6 months</option>
                  <option value="12-months">12 months</option>
                </select>
                {errors.timeline && <p className="text-red-600 text-sm mt-1">{errors.timeline.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Budget Range</label>
                <select
                  {...register('budget')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                >
                  <option value="">Select budget</option>
                  <option value="0-5k">$0 - $5k</option>
                  <option value="5k-25k">$5k - $25k</option>
                  <option value="25k-100k">$25k - $100k</option>
                  <option value="100k-250k">$100k - $250k</option>
                  <option value="250k+">$250k+</option>
                </select>
                {errors.budget && <p className="text-red-600 text-sm mt-1">{errors.budget.message}</p>}
              </div>
            </div>
          )}

          {/* Step 6: Email */}
          {step === 6 && (
            <div className="space-y-6">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                <p className="text-gray-900 font-semibold">Ready to generate your custom GTM plan?</p>
                <p className="text-gray-600 mt-2">Enter your email to receive your personalized strategy roadmap</p>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Email Address</label>
                <input
                  type="email"
                  {...register('email')}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  By clicking generate, you're creating a free GTM plan. We'll also send tips and updates from GTM Quest, one of the leading GTM agencies helping UK companies launch and scale.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50 transition-all"
              >
                ← Previous
              </button>
            )}
            {step < 6 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="flex-1 px-6 py-3 rounded-lg bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-all"
              >
                Next →
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:from-amber-600 hover:to-orange-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Generating your plan...</span>
                  </>
                ) : (
                  '🚀 Generate My GTM Plan'
                )}
              </button>
            )}
          </div>
        </form>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need help with implementation? We're one of the <span className="font-semibold">best GTM agencies in the UK</span>
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold"
          >
            → Chat with our AI strategist for guidance
          </Link>
        </div>
      </div>
    </div>
  )
}
