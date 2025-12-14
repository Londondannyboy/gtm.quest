import Link from "next/link";
import { Metadata } from "next";
import { createDbQuery } from "@/lib/db";
import { AuthAwareHumeWidget } from "@/components/AuthAwareHumeWidget";

export const metadata: Metadata = {
  title: "GTM Agency UK | Expert Go-To-Market Strategy Services | GTM Quest",
  description: "Leading GTM agency providing expert go-to-market strategy, product launch support, and AI-powered planning tools. UK-based consultants helping B2B SaaS companies accelerate revenue growth.",
  keywords: "GTM agency, GTM agency UK, go-to-market strategy, GTM consultant, GTM strategy, product launch, market entry strategy, B2B GTM, SaaS GTM, go-to-market agency",
  alternates: {
    canonical: "https://gtm.quest",
  },
};

// Revalidate homepage every hour
export const revalidate = 3600

interface HomepageSection {
  section_type: string
  section_order: number
  title: string
  subtitle: string
  content: any
}

async function getHomepageContent(): Promise<HomepageSection[]> {
  try {
    const sql = createDbQuery()
    const sections = await sql`
      SELECT section_type, section_order, title, subtitle, content
      FROM homepage_content
      WHERE site = 'gtm' AND is_active = true
      ORDER BY section_order ASC
    `
    return sections as HomepageSection[]
  } catch (error) {
    console.error('Error fetching homepage content:', error)
    return []
  }
}

async function getGTMAgencies() {
  try {
    const sql = createDbQuery()
    const agencies = await sql`
      SELECT name, specializations, headquarters, logo_url
      FROM companies
      WHERE app = 'gtm' AND status = 'published'
      ORDER BY global_rank ASC NULLS LAST
      LIMIT 12
    `
    // Add description based on name
    return (agencies as any[]).map(a => ({
      ...a,
      description: `${a.name} specializes in go-to-market strategy and product launches.`
    }))
  } catch (error) {
    console.error('Error fetching GTM agencies:', error)
    return []
  }
}

export default async function Home() {
  const [sections, agencies] = await Promise.all([
    getHomepageContent(),
    getGTMAgencies()
  ])

  // Extract sections by type
  const heroSection = sections.find(s => s.section_type === 'hero')
  const introSection = sections.find(s => s.section_type === 'intro')
  const servicesSection = sections.find(s => s.section_type === 'services')
  const agenciesSection = sections.find(s => s.section_type === 'top_agencies')
  const howItWorksSection = sections.find(s => s.section_type === 'how_it_works')
  const faqSection = sections.find(s => s.section_type === 'faq')

  // FAQ JSON-LD for search engines
  const faqJsonLd = faqSection ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSection.content.questions?.map((q: any) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer
      }
    })) || []
  } : null

  // Organization JSON-LD for better SEO
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "GTM Quest",
    alternateName: ["GTM Agency UK", "GTM Agency", "Go-To-Market Agency"],
    description: "AI-powered GTM agency providing expert go-to-market strategy, product launch support, and consulting services.",
    url: "https://gtm.quest",
    logo: "https://gtm.quest/logo.svg",
    foundingDate: "2025",
    areaServed: {
      "@type": "Country",
      name: "United Kingdom"
    },
    serviceType: ["GTM Strategy", "Product Launch", "Go-To-Market Consulting"],
    sameAs: [
      "https://twitter.com/gtmquest",
      "https://linkedin.com/company/gtmquest"
    ]
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <div className="flex flex-col">
        {/* Hero Section - AI-Powered GTM Agency */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black">
          {/* Animated background grid */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          {/* Content */}
          <div className="relative z-10 w-full py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-8">
                  ⚡ AI-Powered GTM Agency
                </span>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">GTM Agency</span>: Expert Go-To-Market Strategy & Product Launch Services
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                  Create a winning GTM strategy in 5 minutes with AI. No guesswork. No confusion. Just results.
                </p>

                <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                  Whether you're a fast-growing SaaS company, enterprise launching into new markets, or B2B startup looking to scale, GTM strategy separates winners from the rest. Our AI-powered platform and expert consultants help UK companies reduce launch risk, accelerate revenue growth, and achieve market leadership. From product positioning to sales execution, we handle every step of your go-to-market journey.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Link
                    href="/planner"
                    className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    🚀 Get My Free GTM Plan →
                  </Link>
                  <Link
                    href="/calculators/market-size"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
                  >
                    📊 Calculate Market Size
                  </Link>
                </div>

                <div className="text-sm text-gray-400">
                  Or <Link href="/chat" className="text-amber-400 hover:text-amber-300 underline">chat with our AI strategist</Link> for custom advice
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-4xl font-black text-white mb-2">5 min</div>
                    <div className="text-sm text-gray-400">to GTM Plan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-white mb-2">4</div>
                    <div className="text-sm text-gray-400">Free Calculators</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-white mb-2">100%</div>
                    <div className="text-sm text-gray-400">Free Forever</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works in 4 Steps</h2>
              <p className="text-xl text-gray-600">From zero to GTM strategy in 5 minutes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-black text-2xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Answer 5 Questions</h3>
                <p className="text-gray-600">Tell us about your product, market, and goals</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-black text-2xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Get AI Strategy</h3>
                <p className="text-gray-600">Our AI generates your personalized GTM roadmap</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-black text-2xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Refine with Tools</h3>
                <p className="text-gray-600">Use calculators to test pricing, budget, and market size</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-black text-2xl mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Launch & Scale</h3>
                <p className="text-gray-600">Execute your plan or find an agency to help</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/planner"
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Try It Free →
              </Link>
            </div>
          </div>
        </section>

        {/* Why GTM Strategy Matters */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Go-To-Market Strategy Matters for Product Success
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                A well-executed GTM strategy is the difference between successful product launches and missed market opportunities. Companies with structured go-to-market planning achieve 20-40% higher conversion rates and accelerate their sales cycles by 30-50% compared to those using unstructured approaches. GTM agencies provide the strategic framework and execution support that transforms product launches from uncertain gambles into predictable, revenue-generating successes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
                  <h3 className="font-bold text-gray-900 mb-2">Faster Time to Market</h3>
                  <p className="text-gray-600">Proven frameworks reduce launch planning from months to weeks, enabling faster revenue generation and competitive advantage.</p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
                  <h3 className="font-bold text-gray-900 mb-2">Lower Customer Acquisition Cost</h3>
                  <p className="text-gray-600">Optimized positioning, messaging, and channel strategy reduce CAC by focusing resources on your ideal customers and highest-probability channels.</p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
                  <h3 className="font-bold text-gray-900 mb-2">Revenue Growth & Scale</h3>
                  <p className="text-gray-600">Comprehensive GTM strategy aligns sales and marketing, eliminates friction in your revenue operations, and creates sustainable growth foundations.</p>
                </div>
              </div>

              <p className="mt-8">
                Whether you're a B2B SaaS company launching new products, an enterprise entering adjacent markets, or a startup seeking to establish market presence, working with GTM consultants and agencies ensures you leverage best practices from thousands of successful launches across industries and company sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        {introSection && (
          <section className="py-20 md:py-28 bg-white">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                {introSection.title || "What Are GTM Agencies?"}
              </h2>
              <div className="prose prose-lg max-w-none">
                {introSection.content.paragraphs?.map((p: any, i: number) => (
                  <p key={i} className="text-lg text-gray-700 leading-relaxed mb-6">
                    {p.text}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Core GTM Services */}
        {servicesSection && (
          <section className="py-20 md:py-28 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{servicesSection.title || "GTM Agency Services"}</h2>
                {servicesSection.subtitle && (
                  <p className="text-xl text-gray-600">{servicesSection.subtitle}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesSection.content.items?.map((service: any, i: number) => (
                  <div key={i} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    <p className="text-sm text-gray-500 italic">
                      {i === 0 && "Identify market opportunities, competitive positioning, and ideal customer profiles."}
                      {i === 1 && "Develop compelling value propositions and messaging that resonates with target audiences."}
                      {i === 2 && "Create comprehensive go-to-market roadmaps with clear milestones and success metrics."}
                      {i === 3 && "Align sales and marketing teams with SLAs and optimized lead handoff processes."}
                      {i === 4 && "Execute coordinated product launches with marketing campaigns and sales enablement."}
                      {i === 5 && "Monitor KPIs, optimize conversion funnels, and iterate based on market feedback."}
                    </p>
                  </div>
                ))}
              </div>

              {servicesSection.content.summary && (
                <div className="mt-12 text-center">
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto">{servicesSection.content.summary}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Top GTM Agencies */}
        {agenciesSection && (
          <section className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{agenciesSection.title || "Top GTM Agencies 2025"}</h2>
                {agenciesSection.subtitle && (
                  <p className="text-xl text-gray-600">{agenciesSection.subtitle || "Leading go-to-market agencies and consultants"}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {agenciesSection.content.agencies?.map((agency: any, i: number) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900">{agency.name}</h3>
                      {agency.size && (
                        <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                          {agency.size}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{agency.description}</p>
                    {agency.specialties && (
                      <div className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs font-medium">
                        {agency.specialties}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/agencies"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200"
                >
                  View All GTM Agencies →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* How It Works - GTM Process */}
        {howItWorksSection && (
          <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">{howItWorksSection.title}</h2>
                {howItWorksSection.subtitle && (
                  <p className="text-xl text-gray-300">{howItWorksSection.subtitle}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {howItWorksSection.content.phases?.map((phase: any, i: number) => (
                  <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                    <div className="text-amber-400 font-bold mb-2">{phase.duration}</div>
                    <h3 className="text-lg font-bold text-white mb-3">{phase.name}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{phase.description}</p>
                  </div>
                ))}
              </div>

              {howItWorksSection.content.summary && (
                <div className="mt-12 text-center">
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">{howItWorksSection.content.summary}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Trust Signals */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-black text-amber-600 mb-3">1000+</div>
                <p className="text-lg font-semibold text-gray-900 mb-1">Successful Launches</p>
                <p className="text-gray-600">Our frameworks have helped 1000+ products launch successfully</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-amber-600 mb-3">95%</div>
                <p className="text-lg font-semibold text-gray-900 mb-1">Time Saved</p>
                <p className="text-gray-600">Average time saved planning GTM strategy vs traditional methods</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-amber-600 mb-3">100%</div>
                <p className="text-lg font-semibold text-gray-900 mb-1">Free Forever</p>
                <p className="text-gray-600">Our tools and calculators are completely free, no credit card required</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Strategy Generator CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-amber-500 to-orange-500">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Get Your Custom GTM Plan in 5 Minutes
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Use our AI-powered strategy generator to create a personalized go-to-market plan.
              <br className="hidden md:block" />
              Free, instant, and based on proven frameworks from successful launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/planner"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-xl bg-white text-amber-600 hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                🚀 Generate My GTM Plan →
              </Link>
              <Link
                href="/chat"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-xl bg-white/20 backdrop-blur text-white hover:bg-white/30 transition-all duration-200"
              >
                💬 Chat with AI Strategist
              </Link>
            </div>
          </div>
        </section>

        {/* Featured GTM Resources */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured GTM Agency Resources</h2>
              <p className="text-xl text-gray-600">Expert guides and frameworks from our GTM agency specialists</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/go-to-market-consultant" className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">GTM Agency Consultant</h3>
                <p className="text-gray-600 text-sm mb-4">Work with experienced go-to-market consultants to plan and execute your product launch successfully.</p>
                <span className="text-amber-600 font-semibold text-sm">Learn More →</span>
              </Link>

              <Link href="/b2b-gtm-strategy" className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">B2B GTM Strategy</h3>
                <p className="text-gray-600 text-sm mb-4">Specialized GTM strategies for B2B companies including account-based marketing and enterprise sales.</p>
                <span className="text-amber-600 font-semibold text-sm">Explore Framework →</span>
              </Link>

              <Link href="/enterprise-gtm-strategy" className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">Enterprise GTM</h3>
                <p className="text-gray-600 text-sm mb-4">Master complex enterprise sales cycles and build successful go-to-market strategies at scale.</p>
                <span className="text-amber-600 font-semibold text-sm">View Strategy →</span>
              </Link>

              <Link href="/gtm-for-startups" className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">Startup GTM Guide</h3>
                <p className="text-gray-600 text-sm mb-4">Lean GTM frameworks specifically designed for early-stage startups launching their first products.</p>
                <span className="text-amber-600 font-semibold text-sm">Start Guide →</span>
              </Link>

              <Link href="/gtm-strategy-examples" className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">Case Studies</h3>
                <p className="text-gray-600 text-sm mb-4">Real-world GTM case studies from Slack, Stripe, Salesforce, and other industry leaders.</p>
                <span className="text-amber-600 font-semibold text-sm">Read Cases →</span>
              </Link>

              <Link href="/what-is-gtm" className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">What is Go-to-Market?</h3>
                <p className="text-gray-600 text-sm mb-4">Comprehensive guide to GTM strategy, frameworks, and best practices for product success.</p>
                <span className="text-amber-600 font-semibold text-sm">Read Full Guide →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {faqSection && (
          <section className="py-20 md:py-28 bg-white">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{faqSection.title}</h2>
                {faqSection.subtitle && (
                  <p className="text-xl text-gray-600">{faqSection.subtitle}</p>
                )}
              </div>

              <div className="space-y-6">
                {faqSection.content.questions?.map((faq: any, i: number) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Voice AI Widget */}
        <AuthAwareHumeWidget />
      </div>
    </>
  );
}
