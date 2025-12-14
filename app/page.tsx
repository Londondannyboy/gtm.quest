import Link from "next/link";
import { Metadata } from "next";
import { createDbQuery } from "@/lib/db";
import { AuthAwareHumeWidget } from "@/components/AuthAwareHumeWidget";

export const metadata: Metadata = {
  title: "GTM Agency UK | AI-Powered Go-To-Market Strategy | GTM Quest",
  description: "Top GTM agency in UK. Free AI-powered strategy tools, expert consultants, and go-to-market planning. Chat with our AI to create your custom GTM plan.",
  keywords: "gtm agency, gtm agency uk, go-to-market strategy, gtm consultant, product launch, market entry strategy, b2b gtm, saas gtm",
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

  return (
    <>
      {/* JSON-LD Structured Data */}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <div className="flex flex-col">
        {/* SEO H1 - Always visible to crawlers */}
        <h1 className="sr-only">UK GTM Agency | Go-To-Market Strategy & Product Launch Experts</h1>

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

                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight" role="heading" aria-level={2}>
                  {heroSection?.title || "Get Your Product to Market 3x Faster"}
                </div>

                <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                  Create a winning GTM strategy in 5 minutes with AI. No guesswork. No confusion. Just results.
                </p>

                <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                  Join hundreds of companies using our free AI-powered GTM tools to launch smarter, grow faster, and win their market.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
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

        {/* AI Strategy Generator CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-amber-500 to-orange-500">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Get Your Custom GTM Plan
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Chat with our AI strategist to create a personalized go-to-market plan for your product.
              Free, instant, and based on proven frameworks from 1,000+ successful launches.
            </p>
            <Link
              href="/chat"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-xl bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              🚀 Start Planning Your Launch →
            </Link>
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
