import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

const faqData = [
  {
    question: 'What makes London GTM agencies different from agencies in other cities?',
    answer: 'London agencies combine deep European market expertise with global reach. They excel at fintech, enterprise software, and regulated industries, with strong understanding of UK and EU compliance requirements. Their strategic position enables seamless access to both European and US markets.'
  },
  {
    question: 'How much do GTM agencies in London typically charge?',
    answer: 'London GTM agencies typically charge between 15,000 and 50,000 GBP per month for retainer engagements. Project-based work ranges from 40,000 to 250,000 GBP depending on scope. Enterprise GTM strategies for regulated industries may command premium rates above 75,000 GBP monthly.'
  },
  {
    question: 'Do London agencies work with US companies expanding to Europe?',
    answer: 'Yes, many London agencies specialize in helping US companies enter European markets. They provide local market intelligence, regulatory guidance, and established networks across the UK and EU. London serves as an ideal beachhead for transatlantic expansion strategies.'
  },
  {
    question: 'What industries do London GTM agencies specialize in?',
    answer: 'London agencies have particular strength in fintech, insurtech, enterprise SaaS, professional services, and media technology. The city is home to Europe largest financial services sector and a thriving startup ecosystem, making local agencies experts in both enterprise and growth-stage GTM.'
  }
]

export const metadata: Metadata = {
  title: 'GTM Agencies London 2025 | Top Go-To-Market Consultants UK',
  description: 'Find the best GTM agencies in London. Compare top go-to-market consultancies serving UK and European markets. Fintech, enterprise SaaS, and B2B specialists.',
  keywords: 'GTM agency London, go-to-market agencies London, GTM consultants London UK, product launch agency London, B2B GTM strategy London, fintech GTM agency UK',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-london'
  },
  openGraph: {
    title: 'Top GTM Agencies in London | 2025 Directory',
    description: 'Compare the best go-to-market agencies in London. European market entry and enterprise B2B specialists.',
    url: 'https://gtm.quest/gtm-agencies-london',
    type: 'website'
  }
}

export const revalidate = 3600

export default async function GTMAgenciesLondonPage() {
  const agencies = await getAgenciesForLocation('London')
  const stats = await getLocationStats('London')

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
    name: 'GTM Agencies in London',
    description: 'Directory of top go-to-market agencies serving London and the United Kingdom',
    url: 'https://gtm.quest/gtm-agencies-london',
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
            <Link href="/gtm-agencies-uk" className="hover:text-white transition-colors">UK</Link>
            {' '}/{' '}
            <span className="text-white">London</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with City Image */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80"
            alt="London city skyline with Tower Bridge"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">London, United Kingdom</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            GTM Agencies<br />in London
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {stats.totalAgencies} verified go-to-market agencies in London, Europe&apos;s leading tech and fintech hub.
            From Shoreditch innovators to City enterprise specialists.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            <div>
              <div className="text-5xl font-black text-white mb-2">{stats.totalAgencies}</div>
              <div className="text-white/60">Agencies</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">{'\u00A3'}{(stats.avgMinBudget / 1000).toFixed(0)}K+</div>
              <div className="text-white/60">Avg Min Budget</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">EMEA</div>
              <div className="text-white/60">Market Access</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">GMT</div>
              <div className="text-white/60">Time Zone</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            Why Choose a London GTM Agency?
          </h2>

          <div className="space-y-8 text-lg text-white/80 leading-relaxed">
            <p>
              London is Europe&apos;s largest tech hub and a global fintech capital.
              According to <a href="https://technation.io/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Tech Nation</a>,
              the UK tech sector attracts more venture capital than any other European country,
              with London-based companies raising over {'\u00A3'}15 billion annually.
              GTM agencies here have direct access to Europe&apos;s deepest talent pool and most sophisticated buyers.
            </p>

            <p>
              The <a href="https://www.cityoflondon.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">City of London Corporation</a> reports
              that the financial services sector alone employs over 400,000 professionals,
              creating unmatched opportunities for B2B software and fintech companies.
              London agencies understand the nuances of selling to banks, insurers, and enterprises
              with complex procurement and compliance requirements.
            </p>

            <p>
              Post-Brexit, London has maintained its position as Europe&apos;s gateway market.
              <a href="https://www.londonandpartners.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">London &amp; Partners</a>
              notes that the city hosts over 60,000 tech companies and continues to attract
              global headquarters. This makes London agencies essential partners for companies
              seeking to establish European presence while maintaining global connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            GTM Services in London
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">&#127758;</div>
              <h3 className="text-xl font-bold text-white mb-3">European Market Entry</h3>
              <p className="text-white/60">
                Launch strategies for entering UK and EU markets, including regulatory compliance, localization, and partner channel development.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">&#128188;</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Sales</h3>
              <p className="text-white/60">
                Complex B2B sales strategies targeting FTSE 100 companies, financial institutions, and multinational enterprises.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">&#128176;</div>
              <h3 className="text-xl font-bold text-white mb-3">Fintech GTM</h3>
              <p className="text-white/60">
                Specialized go-to-market for fintech, regtech, and insurtech companies navigating FCA regulations and enterprise buyers.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">&#127793;</div>
              <h3 className="text-xl font-bold text-white mb-3">Product-Led Growth</h3>
              <p className="text-white/60">
                PLG strategies adapted for European markets, combining self-serve motions with enterprise-grade security and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            Key Industries in London
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Financial Services</h3>
              <p className="text-white/60">
                Investment banks, asset managers, insurers, and the fintech startups disrupting traditional finance.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Software</h3>
              <p className="text-white/60">
                B2B SaaS companies targeting enterprise buyers across UK and European markets.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Professional Services</h3>
              <p className="text-white/60">
                Legal tech, accounting software, and consulting platforms serving the Magic Circle and Big Four.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Media &amp; Advertising</h3>
              <p className="text-white/60">
                Adtech, martech, and media technology companies serving London&apos;s global advertising industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            How to Choose a London GTM Agency
          </h2>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">01</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Evaluate European Experience</h3>
                <p className="text-lg text-white/70">
                  Look for agencies with proven track records across UK and EU markets. They should demonstrate
                  understanding of GDPR, local buyer behavior, and the nuances of selling across different European countries.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">02</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Assess Regulatory Expertise</h3>
                <p className="text-lg text-white/70">
                  If you operate in fintech, healthtech, or other regulated sectors, choose an agency with
                  specific experience navigating FCA, NHS, or sector-specific compliance requirements.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">03</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Check Enterprise Networks</h3>
                <p className="text-lg text-white/70">
                  The best London agencies have established relationships with FTSE 100 companies and major
                  financial institutions. Evaluate their enterprise client portfolio and case studies.
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
            London GTM Agencies Directory
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Compare {stats.totalAgencies} verified go-to-market agencies serving London
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">London GTM Agency FAQs</h2>

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
              href="/gtm-agencies-uk"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                United Kingdom
              </h3>
              <p className="text-white/60">
                Explore all GTM agencies across the UK market.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-berlin"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                Berlin
              </h3>
              <p className="text-white/60">
                Germany&apos;s startup capital and European expansion hub.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-amsterdam"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                Amsterdam
              </h3>
              <p className="text-white/60">
                European tech hub with strong international presence.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-paris"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                Paris
              </h3>
              <p className="text-white/60">
                France&apos;s growing tech ecosystem and enterprise market.
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
                Enterprise B2B capital of the United States.
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
                Silicon Valley&apos;s startup and VC epicenter.
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
            Build Your London GTM Strategy
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Create a comprehensive European market entry strategy for the UK and beyond.
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
