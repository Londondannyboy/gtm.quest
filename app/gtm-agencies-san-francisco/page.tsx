import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

const faqData = [
  {
    question: 'What makes San Francisco GTM agencies different from other markets?',
    answer: 'San Francisco agencies are deeply embedded in the venture capital and startup ecosystem. They specialize in product-led growth, Series A-C scaling strategies, and hyper-growth GTM motions. Their proximity to leading VCs and tech companies gives them unique insights into what works for VC-backed startups.'
  },
  {
    question: 'How much do GTM agencies in San Francisco typically charge?',
    answer: 'San Francisco GTM agencies typically charge $25,000-$60,000+ per month for retainer engagements. Project-based work ranges from $75,000-$300,000+ depending on scope. Premium rates reflect Bay Area talent costs and specialized expertise in scaling VC-backed companies.'
  },
  {
    question: 'Do SF agencies work with companies outside Silicon Valley?',
    answer: 'Yes, many SF agencies work remotely with companies worldwide. They bring Silicon Valley expertise to companies anywhere, particularly valuable for startups seeking VC funding, planning US market entry, or adopting product-led growth strategies proven in the Bay Area.'
  },
  {
    question: 'What GTM motions do San Francisco agencies specialize in?',
    answer: 'SF agencies excel at product-led growth (PLG), freemium-to-enterprise conversion, developer marketing, community-led growth, and rapid scaling strategies. They understand the metrics VCs care about and how to build GTM engines that support fundraising milestones.'
  }
]

export const metadata: Metadata = {
  title: 'GTM Agencies San Francisco 2025 | Top Silicon Valley Go-To-Market Consultants',
  description: 'Find the best GTM agencies in San Francisco. Compare top Silicon Valley go-to-market consultancies serving VC-backed startups and tech companies.',
  keywords: 'GTM agency San Francisco, go-to-market agencies SF, GTM consultants Silicon Valley, Bay Area GTM agencies, startup GTM agency, PLG agency San Francisco',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-san-francisco'
  },
  openGraph: {
    title: 'Top GTM Agencies in San Francisco | 2025 Directory',
    description: 'Compare the best go-to-market agencies in the Bay Area. Product-led growth and startup scaling specialists.',
    url: 'https://gtm.quest/gtm-agencies-san-francisco',
    type: 'website'
  }
}

export const revalidate = 3600

export default async function GTMAgenciesSanFranciscoPage() {
  const agencies = await getAgenciesForLocation('San Francisco')
  const stats = await getLocationStats('San Francisco')

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'GTM Agencies in San Francisco',
    description: 'Directory of top go-to-market agencies serving Silicon Valley and the San Francisco Bay Area',
    url: 'https://gtm.quest/gtm-agencies-san-francisco',
    numberOfItems: stats.totalAgencies,
    provider: {
      '@type': 'Organization',
      name: 'GTM.quest'
    }
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' '}/{' '}
            <Link href="/best-gtm-agencies" className="hover:text-white transition-colors">GTM Agencies</Link>
            {' '}/{' '}
            <Link href="/gtm-agencies-us" className="hover:text-white transition-colors">US</Link>
            {' '}/{' '}
            <span className="text-white">San Francisco</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with City Image */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&q=80"
            alt="San Francisco Golden Gate Bridge"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">San Francisco, California</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            GTM Agencies<br />in San Francisco
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {stats.totalAgencies} verified go-to-market agencies in San Francisco, the heart of Silicon Valley.
            From SOMA startups to Sand Hill Road enterprises.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            <div>
              <div className="text-5xl font-black text-white mb-2">{stats.totalAgencies}</div>
              <div className="text-white/60">Agencies</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">${(stats.avgMinBudget / 1000).toFixed(0)}K+</div>
              <div className="text-white/60">Avg Min Budget</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">PLG</div>
              <div className="text-white/60">Specialty</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">PST</div>
              <div className="text-white/60">Time Zone</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            Why Choose a San Francisco GTM Agency?
          </h2>

          <div className="space-y-8 text-lg text-white/80 leading-relaxed">
            <p>
              San Francisco remains the undisputed capital of venture-backed technology.
              According to <a href="https://www.crunchbase.com/hub/san-francisco-bay-area-startups" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Crunchbase</a>,
              the Bay Area attracts over $80 billion in venture capital annually, more than any other region globally.
              GTM agencies here have front-row access to the latest growth strategies, funding trends, and
              scaling playbooks that define modern B2B success.
            </p>

            <p>
              The <a href="https://www.sfchamber.com/technology" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">SF Chamber of Commerce</a> reports
              that the city hosts over 3,000 tech companies and 200,000+ tech workers.
              This concentration creates a unique ecosystem where agencies work alongside companies
              at every stage - from pre-seed to IPO - giving them unmatched expertise in
              product-led growth, developer marketing, and hyper-growth scaling.
            </p>

            <p>
              San Francisco agencies pioneered many GTM innovations now used globally: freemium models,
              community-led growth, and product-qualified leads.
              The <a href="https://www.jointventure.org/about-us/our-region" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Joint Venture Silicon Valley</a>
              highlights how this region continues to set the standard for how software companies
              go to market, making local agencies essential partners for companies seeking modern GTM expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            GTM Services in San Francisco
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">&#127793;</div>
              <h3 className="text-xl font-bold text-white mb-3">Product-Led Growth</h3>
              <p className="text-white/60">
                Freemium optimization, self-serve conversion funnels, and PLG strategies that scale with product usage and virality.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">&#128640;</div>
              <h3 className="text-xl font-bold text-white mb-3">Startup Scaling</h3>
              <p className="text-white/60">
                Series A to C growth strategies, runway optimization, and GTM engines designed to hit venture milestones.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">&#128187;</div>
              <h3 className="text-xl font-bold text-white mb-3">Developer Marketing</h3>
              <p className="text-white/60">
                Developer relations, API-first GTM, open source strategies, and technical community building.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">&#128200;</div>
              <h3 className="text-xl font-bold text-white mb-3">Growth Engineering</h3>
              <p className="text-white/60">
                Data-driven experimentation, conversion optimization, and growth loops that compound over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            Key Industries in SF
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Enterprise SaaS</h3>
              <p className="text-white/60">
                B2B software companies from seed stage to public, pioneering cloud-first business models.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Developer Tools</h3>
              <p className="text-white/60">
                APIs, infrastructure, DevOps, and platforms built for technical buyers and developers.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Fintech</h3>
              <p className="text-white/60">
                Payment platforms, neobanks, crypto, and financial infrastructure disrupting traditional finance.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">AI &amp; Machine Learning</h3>
              <p className="text-white/60">
                AI-native companies, ML platforms, and emerging technology driving the next wave of innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            How to Choose an SF GTM Agency
          </h2>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">01</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Evaluate Stage Fit</h3>
                <p className="text-lg text-white/70">
                  SF agencies often specialize by company stage. Match your current phase - pre-seed, Series A,
                  growth stage, or enterprise - to an agency with proven playbooks for your situation.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">02</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Assess GTM Motion Expertise</h3>
                <p className="text-lg text-white/70">
                  Different agencies excel at different motions - PLG, sales-led, community-led, or hybrid.
                  Choose an agency with deep experience in the GTM motion that fits your product and market.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">03</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Check VC Network</h3>
                <p className="text-lg text-white/70">
                  The best SF agencies have relationships with leading VCs and can help position your company
                  for fundraising. Evaluate their portfolio connections and track record with funded companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Directory */}
      <section className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            San Francisco GTM Agencies Directory
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Compare {stats.totalAgencies} verified go-to-market agencies serving the Bay Area
          </p>
        </div>

        {agencies.map((agency, i) => {
          const isTopRanked = !!(agency.global_rank && agency.global_rank <= 3)
          const website = agency.website || '#'

          return (
            <AgencyCard
              key={agency.slug}
              rank={i + 1}
              name={agency.name}
              tagline={agency.description}
              description={[agency.description]}
              bestFor={agency.specializations || []}
              keyServices={[]}
              website={website}
              primaryColor={(agency as any).primary_color || '#8B5CF6'}
              logoUrl={(agency as any).logo_url}
              backdropUrl={(agency as any).backdrop_url}
              isTopRanked={isTopRanked}
              internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined}
              serviceAreas={agency.service_areas || []}
            />
          )
        })}
      </section>

      {/* FAQ Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">SF GTM Agency FAQs</h2>

          <div className="space-y-12">
            {faqData.map((faq, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {faq.question}
                </h3>
                <p className="text-lg text-white/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Markets */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">Related Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/gtm-agencies-seattle"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                Seattle
              </h3>
              <p className="text-white/60">
                Cloud infrastructure and enterprise software hub of the Pacific Northwest.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-los-angeles"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                Los Angeles
              </h3>
              <p className="text-white/60">
                Entertainment tech, creator economy, and consumer brand innovation.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-austin"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                Austin
              </h3>
              <p className="text-white/60">
                Fast-growing tech hub attracting Silicon Valley relocations.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-new-york"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                New York
              </h3>
              <p className="text-white/60">
                Enterprise B2B and fintech capital of the East Coast.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-us"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                United States
              </h3>
              <p className="text-white/60">
                Explore all GTM agencies across the US market.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-london"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                London
              </h3>
              <p className="text-white/60">
                Europe's leading fintech and enterprise technology center.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">GTM Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/planner"
              className="group p-6 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                GTM Strategy Planner
              </h3>
              <p className="text-white/60 text-sm">
                Build your custom go-to-market strategy with our free planning tool.
              </p>
            </Link>

            <Link
              href="/best-gtm-agencies"
              className="group p-6 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Best GTM Agencies
              </h3>
              <p className="text-white/60 text-sm">
                Compare the top-ranked go-to-market agencies globally.
              </p>
            </Link>

            <Link
              href="/gtm-agency-vs-consultant"
              className="group p-6 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Agency vs Consultant
              </h3>
              <p className="text-white/60 text-sm">
                Learn when to hire an agency vs an independent GTM consultant.
              </p>
            </Link>

            <Link
              href="/gtm-agency-pricing"
              className="group p-6 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                GTM Agency Pricing
              </h3>
              <p className="text-white/60 text-sm">
                Understand typical pricing models and budget expectations.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Build Your Bay Area GTM Strategy
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Create a growth-focused go-to-market strategy for Silicon Valley and beyond.
          </p>
          <Link
            href="/planner"
            className="inline-flex items-center justify-center px-12 py-6 text-xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl"
          >
            Start Free Strategy Planner
          </Link>
        </div>
      </section>
    </div>
  )
}
