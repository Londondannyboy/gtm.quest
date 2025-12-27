import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

const faqData = [
  {
    question: 'What makes Berlin GTM agencies different from agencies in other cities?',
    answer: 'Berlin agencies combine startup culture with access to the DACH market (Germany, Austria, Switzerland), Europe largest economy. They excel at scaling B2B companies, have deep connections to the German Mittelstand, and understand the unique requirements of selling to German enterprise buyers who value quality and reliability.'
  },
  {
    question: 'How much do GTM agencies in Berlin typically charge?',
    answer: 'Berlin GTM agencies typically charge between 12,000 and 40,000 EUR per month for retainer engagements. Project-based work ranges from 30,000 to 200,000 EUR depending on scope. While slightly lower than London or NYC, Berlin offers excellent value for DACH market expertise.'
  },
  {
    question: 'Do Berlin agencies work with companies outside Germany?',
    answer: 'Yes, many Berlin agencies serve international companies seeking to enter the German and DACH markets. They provide localization expertise, understand German business culture, and have networks across enterprise buyers in automotive, manufacturing, and technology sectors.'
  },
  {
    question: 'What industries do Berlin GTM agencies specialize in?',
    answer: 'Berlin agencies have particular strength in B2B SaaS, mobility and automotive tech, climate tech, fintech, and enterprise software. The city is also emerging as a hub for AI and deep tech companies, with agencies developing specialized GTM approaches for technical products.'
  }
]

export const metadata: Metadata = {
  title: 'GTM Agencies Berlin 2025 | Top Go-To-Market Consultants Germany',
  description: 'Find the best GTM agencies in Berlin. Compare top go-to-market consultancies serving the DACH market. B2B SaaS, mobility tech, and enterprise specialists.',
  keywords: 'GTM agency Berlin, go-to-market agencies Berlin, GTM consultants Germany, B2B GTM strategy Germany, DACH market entry, startup GTM agency Berlin',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-berlin'
  },
  openGraph: {
    title: 'Top GTM Agencies in Berlin | 2025 Directory',
    description: 'Compare the best go-to-market agencies in Berlin. DACH market entry and B2B scaling specialists.',
    url: 'https://gtm.quest/gtm-agencies-berlin',
    type: 'website'
  }
}

export const revalidate = 3600

export default async function GTMAgenciesBerlinPage() {
  const agencies = await getAgenciesForLocation('Berlin')
  const stats = await getLocationStats('Berlin')

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
    name: 'GTM Agencies in Berlin',
    description: 'Directory of top go-to-market agencies serving Berlin and the DACH market',
    url: 'https://gtm.quest/gtm-agencies-berlin',
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
            <span className="text-white">Berlin</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with City Image */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1920&q=80"
            alt="Berlin cityscape with TV Tower"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">Berlin, Germany</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            GTM Agencies<br />in Berlin
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {stats.totalAgencies} verified go-to-market agencies in Berlin, Europe&apos;s startup capital.
            From Kreuzberg innovators to enterprise-focused DACH specialists.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            <div>
              <div className="text-5xl font-black text-white mb-2">{stats.totalAgencies}</div>
              <div className="text-white/60">Agencies</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">{'\u20AC'}{(stats.avgMinBudget / 1000).toFixed(0)}K+</div>
              <div className="text-white/60">Avg Min Budget</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">DACH</div>
              <div className="text-white/60">Market Access</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">CET</div>
              <div className="text-white/60">Time Zone</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            Why Choose a Berlin GTM Agency?
          </h2>

          <div className="space-y-8 text-lg text-white/80 leading-relaxed">
            <p>
              Berlin is Europe&apos;s fastest-growing startup ecosystem and the gateway to the DACH market.
              According to <a href="https://www.startupblink.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">StartupBlink</a>,
              Berlin ranks among the top 10 startup ecosystems globally, with over 3,000 active startups
              and {'\u20AC'}10+ billion in annual venture funding. GTM agencies here combine startup agility
              with deep understanding of German enterprise buyers.
            </p>

            <p>
              The <a href="https://www.gtai.de/en" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Germany Trade &amp; Invest</a> organization highlights
              that Germany is Europe&apos;s largest economy with a GDP exceeding {'\u20AC'}4 trillion.
              Berlin agencies understand how to navigate the Mittelstand - the backbone of German industry -
              as well as the DAX 40 enterprise buyers who demand precision, reliability, and long-term partnerships.
            </p>

            <p>
              Berlin&apos;s unique position attracts global talent and companies seeking European expansion.
              <a href="https://www.berlin-partner.de/en/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Berlin Partner</a>
              reports that the city hosts over 500 international scale-ups and continues to grow as a hub for
              mobility, climate tech, and B2B SaaS. Local agencies offer the cultural fluency and market
              knowledge essential for succeeding in German-speaking markets.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            GTM Services in Berlin
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">&#127758;</div>
              <h3 className="text-xl font-bold text-white mb-3">DACH Market Entry</h3>
              <p className="text-white/60">
                Launch strategies for Germany, Austria, and Switzerland including localization, compliance, and enterprise sales readiness.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">&#128640;</div>
              <h3 className="text-xl font-bold text-white mb-3">Startup Scaling</h3>
              <p className="text-white/60">
                Series A to C growth strategies, combining Berlin startup culture with German enterprise sales expertise.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">&#128188;</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Sales</h3>
              <p className="text-white/60">
                Complex B2B sales strategies targeting DAX companies, the Mittelstand, and German public sector organizations.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">&#127793;</div>
              <h3 className="text-xl font-bold text-white mb-3">Product-Led Growth</h3>
              <p className="text-white/60">
                PLG strategies adapted for German markets with emphasis on data privacy, security, and enterprise compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            Key Industries in Berlin
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Mobility &amp; Automotive</h3>
              <p className="text-white/60">
                Electric vehicles, autonomous driving, fleet management, and mobility-as-a-service platforms.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">B2B SaaS</h3>
              <p className="text-white/60">
                Enterprise software companies targeting German and European enterprise buyers with complex requirements.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Climate &amp; Energy Tech</h3>
              <p className="text-white/60">
                Renewable energy, carbon management, and sustainability solutions driving the Energiewende transition.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Fintech &amp; Banking</h3>
              <p className="text-white/60">
                Digital banking, payments, and financial infrastructure serving Europe&apos;s largest banking market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            How to Choose a Berlin GTM Agency
          </h2>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">01</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Evaluate DACH Experience</h3>
                <p className="text-lg text-white/70">
                  Look for agencies with proven track records across Germany, Austria, and Switzerland. They should
                  demonstrate fluency in German business culture and understanding of local procurement practices.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">02</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Assess Localization Depth</h3>
                <p className="text-lg text-white/70">
                  German buyers expect native-quality materials and culturally appropriate sales approaches.
                  Choose an agency that can localize not just language, but messaging, positioning, and sales motion.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">03</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Check Enterprise Networks</h3>
                <p className="text-lg text-white/70">
                  The best Berlin agencies have established relationships with DAX companies and the Mittelstand.
                  Evaluate their enterprise client portfolio and ability to navigate long German sales cycles.
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
            Berlin GTM Agencies Directory
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Compare {stats.totalAgencies} verified go-to-market agencies serving Berlin
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">Berlin GTM Agency FAQs</h2>

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
              href="/gtm-agencies-munich"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                Munich
              </h3>
              <p className="text-white/60">
                Germany&apos;s enterprise and automotive technology hub.
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
                European tech hub with strong international focus.
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
                Europe&apos;s largest fintech and enterprise software market.
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
              href="/gtm-agencies-stockholm"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                Stockholm
              </h3>
              <p className="text-white/60">
                Nordic unicorn factory and fintech innovation hub.
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
            Build Your Berlin GTM Strategy
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Create a comprehensive DACH market entry strategy for Germany and beyond.
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
