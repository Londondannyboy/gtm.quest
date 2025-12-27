import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

const faqData = [
  {
    question: 'What makes New York GTM agencies different from agencies in other cities?',
    answer: 'New York GTM agencies excel at enterprise B2B sales, complex deal cycles, and Fortune 500 relationships. They bring deep expertise in financial services, media, and professional services sectors, with strong networks across Wall Street and Madison Avenue that can accelerate high-value enterprise deals.'
  },
  {
    question: 'How much do GTM agencies in New York typically charge?',
    answer: 'New York GTM agencies typically charge $25,000-$75,000+ per month for retainer engagements. Project-based work ranges from $50,000-$500,000+ depending on scope. Enterprise GTM strategies with sales enablement can exceed $100,000 per month due to the complexity and high-value outcomes expected.'
  },
  {
    question: 'What industries do NYC GTM agencies specialize in?',
    answer: 'NYC agencies specialize in fintech, enterprise SaaS, professional services, media and advertising technology, healthcare technology, and B2B marketplaces. They have particular strength in complex regulated industries requiring sophisticated compliance and enterprise sales motions.'
  },
  {
    question: 'Should I choose a NYC agency or work with a remote team?',
    answer: 'Choose a NYC agency if you are targeting enterprise buyers, Fortune 500 companies, or the financial services sector. Local presence matters for relationship-driven sales, in-person executive meetings, and leveraging the concentrated network of enterprise decision-makers in Manhattan.'
  }
]

export const metadata: Metadata = {
  title: 'GTM Agencies New York 2025 | Top NYC Go-To-Market Consultants',
  description: 'Find the best GTM agencies in New York City. Compare top Manhattan-based go-to-market consultancies serving enterprise B2B and tech markets. Expert reviews and pricing.',
  keywords: 'GTM agency NYC, go-to-market agencies New York, GTM consultants Manhattan, NYC product launch agency, B2B GTM strategy New York, enterprise sales agency NYC',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-new-york'
  },
  openGraph: {
    title: 'Top GTM Agencies in New York City | 2025 Directory',
    description: 'Compare the best go-to-market agencies in NYC. Enterprise B2B specialists serving Fortune 500 and high-growth startups.',
    url: 'https://gtm.quest/gtm-agencies-new-york',
    type: 'website'
  }
}

export const revalidate = 3600

export default async function GTMAgenciesNewYorkPage() {
  const agencies = await getAgenciesForLocation('New York')
  const stats = await getLocationStats('New York')

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
    name: 'GTM Agencies in New York City',
    description: 'Directory of top go-to-market agencies serving NYC and the greater New York area',
    url: 'https://gtm.quest/gtm-agencies-new-york',
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
            <span className="text-white">New York</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with City Image */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1920&q=80"
            alt="New York City skyline"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">New York City, USA</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            GTM Agencies<br />in New York
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {stats.totalAgencies} verified go-to-market agencies in New York City, the enterprise B2B capital.
            From Manhattan powerhouses to Brooklyn innovators.
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
              <div className="text-5xl font-black text-white mb-2">Fortune 500</div>
              <div className="text-white/60">Enterprise Focus</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">EST</div>
              <div className="text-white/60">Time Zone</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            Why Choose a New York GTM Agency?
          </h2>

          <div className="space-y-8 text-lg text-white/80 leading-relaxed">
            <p>
              New York City is home to more Fortune 500 headquarters than any other city in the world.
              According to the <a href="https://edc.nyc/industry/technology" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NYC Economic Development Corporation</a>,
              the city's tech sector employs over 340,000 workers with a combined payroll exceeding $30 billion annually.
              GTM agencies here have unparalleled access to enterprise decision-makers across financial services, media, and professional services.
            </p>

            <p>
              The <a href="https://www.nyctechalliance.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NYC Tech Alliance</a> reports
              that New York is the second-largest tech hub in the United States, with venture capital investments
              exceeding $25 billion annually. This concentration of capital and enterprise buyers makes NYC
              agencies ideal partners for B2B companies targeting high-value accounts with complex sales cycles.
            </p>

            <p>
              New York's position as a global financial center means agencies here understand regulated industries,
              compliance requirements, and enterprise procurement processes.
              The <a href="https://www.centerfornyc.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Center for an Urban Future</a>
              notes that NYC leads in fintech, adtech, and enterprise SaaS - industries requiring sophisticated
              GTM strategies that combine relationship-building with scalable demand generation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            GTM Services in New York
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">&#128188;</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Sales Strategy</h3>
              <p className="text-white/60">
                Complex B2B sales cycles, account-based marketing, and Fortune 500 penetration strategies tailored for high-value deals.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">&#128640;</div>
              <h3 className="text-xl font-bold text-white mb-3">Market Entry &amp; Expansion</h3>
              <p className="text-white/60">
                Launch strategies for entering the US market or expanding from NYC to national and global enterprise accounts.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">&#128202;</div>
              <h3 className="text-xl font-bold text-white mb-3">Product-Led Growth</h3>
              <p className="text-white/60">
                PLG strategies optimized for NYC's SaaS ecosystem, combining self-serve motions with enterprise upsell paths.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">&#129309;</div>
              <h3 className="text-xl font-bold text-white mb-3">Partner &amp; Channel GTM</h3>
              <p className="text-white/60">
                Strategic partnerships, reseller networks, and channel programs leveraging NYC's concentrated partner ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            Key Industries in NYC
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Financial Services</h3>
              <p className="text-white/60">
                Wall Street banks, hedge funds, fintech startups, and insurtech companies driving digital transformation.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Media &amp; Advertising</h3>
              <p className="text-white/60">
                Madison Avenue agencies, adtech platforms, streaming services, and digital media companies.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Enterprise SaaS</h3>
              <p className="text-white/60">
                B2B software companies targeting enterprise buyers with complex procurement processes.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Healthcare &amp; Life Sciences</h3>
              <p className="text-white/60">
                Health tech startups, pharma companies, and healthcare IT providers serving the Northeast corridor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            How to Choose a NYC GTM Agency
          </h2>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">01</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Evaluate Enterprise Experience</h3>
                <p className="text-lg text-white/70">
                  Look for agencies with proven Fortune 500 client relationships and case studies in your target industry.
                  NYC agencies should demonstrate expertise in complex, multi-stakeholder sales cycles and enterprise procurement.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">02</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Assess Industry Specialization</h3>
                <p className="text-lg text-white/70">
                  New York has deep expertise in fintech, media, and professional services. Choose an agency
                  with specific experience in your vertical, especially if you operate in regulated industries
                  requiring compliance expertise.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">03</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Review Network &amp; Relationships</h3>
                <p className="text-lg text-white/70">
                  The best NYC agencies bring relationships, not just strategies. Evaluate their network of
                  enterprise buyers, VCs, and industry influencers who can accelerate your go-to-market success.
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
            New York GTM Agencies Directory
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Compare {stats.totalAgencies} verified go-to-market agencies serving NYC
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">NYC GTM Agency FAQs</h2>

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
              href="/gtm-agencies-boston"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                Boston
              </h3>
              <p className="text-white/60">
                Healthcare, biotech, and enterprise software hub of the Northeast.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-san-francisco"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                San Francisco
              </h3>
              <p className="text-white/60">
                Silicon Valley's startup and venture capital epicenter.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-chicago"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                Chicago
              </h3>
              <p className="text-white/60">
                Midwest enterprise hub with strong B2B and manufacturing focus.
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
              href="/gtm-agencies-austin"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                Austin
              </h3>
              <p className="text-white/60">
                Fast-growing tech hub with startup and enterprise presence.
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
            Build Your NYC GTM Strategy
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Create an enterprise-focused go-to-market strategy for the New York market.
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
