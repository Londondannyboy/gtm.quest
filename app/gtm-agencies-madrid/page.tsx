import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

const faqData = [
  {
    question: 'What makes Madrid GTM agencies different from other European markets?',
    answer: 'Madrid agencies combine strong enterprise B2B expertise with deep connections to Latin American markets. As Spain\'s capital and financial center, local agencies specialize in fintech, telecommunications, and large enterprise go-to-market strategies. They offer unique access to both the Spanish and broader Ibero-American business ecosystems.'
  },
  {
    question: 'How much do GTM agencies in Madrid typically charge?',
    answer: 'Madrid GTM agencies typically charge EUR 10,000-30,000 per month for retainer engagements. Project-based work ranges from EUR 30,000-120,000 depending on scope. Rates are competitive with other major European capitals while offering strong Latin American market expertise.'
  },
  {
    question: 'Do Madrid agencies help with Latin American market entry?',
    answer: 'Yes, Madrid is the primary European gateway for Latin American business. Many agencies have dedicated LATAM teams and direct partnerships with agencies across Mexico, Colombia, Argentina, and Brazil. The cultural and linguistic connections make Madrid ideal for companies planning cross-Atlantic expansion.'
  },
  {
    question: 'What industries are Madrid GTM agencies strongest in?',
    answer: 'Madrid agencies excel in financial services, telecommunications, energy, retail, and government/public sector. The city hosts headquarters for major Spanish multinationals and has a growing startup ecosystem, giving agencies experience across both enterprise and growth-stage companies.'
  }
]

export const metadata: Metadata = {
  title: 'GTM Agencies Madrid 2025 | Top Go-To-Market Consultants in Spain',
  description: 'Find the best GTM agencies in Madrid. Compare top Spanish go-to-market consultancies for enterprise B2B, fintech, and Latin American market expansion.',
  keywords: 'GTM agency Madrid, go-to-market agencies Spain, GTM consultants Madrid, Spanish GTM agencies, enterprise GTM agency Madrid, LATAM expansion agency',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-madrid'
  },
  openGraph: {
    title: 'Top GTM Agencies in Madrid | 2025 Directory',
    description: 'Compare the best go-to-market agencies in Madrid. Enterprise B2B, fintech, and LATAM expansion specialists.',
    url: 'https://gtm.quest/gtm-agencies-madrid',
    type: 'website'
  }
}

export const revalidate = 3600

export default async function GTMAgenciesMadridPage() {
  const agencies = await getAgenciesForLocation('Madrid')
  const stats = await getLocationStats('Madrid')

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
    name: 'GTM Agencies in Madrid',
    description: 'Directory of top go-to-market agencies serving Madrid and the Spanish enterprise market',
    url: 'https://gtm.quest/gtm-agencies-madrid',
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
            <Link href="/gtm-agencies-europe" className="hover:text-white transition-colors">Europe</Link>
            {' '}/{' '}
            <span className="text-white">Madrid</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80"
            alt="Madrid Gran Via skyline"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">Madrid, Spain</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            GTM Agencies<br />in Madrid
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {stats.totalAgencies} verified go-to-market agencies in Spain's capital.
            Enterprise expertise meets Latin American market access.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            <div>
              <div className="text-5xl font-black text-white mb-2">{stats.totalAgencies}</div>
              <div className="text-white/60">Agencies</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">EUR {(stats.avgMinBudget / 1000).toFixed(0)}K+</div>
              <div className="text-white/60">Avg Min Budget</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">Enterprise</div>
              <div className="text-white/60">Focus</div>
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
            Why Choose a Madrid GTM Agency?
          </h2>

          <div className="space-y-8 text-lg text-white/80 leading-relaxed">
            <p>
              Madrid is Spain's political, economic, and cultural capital, home to major corporations like{' '}
              <a href="https://en.wikipedia.org/wiki/Telefonica" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Telefonica</a>,{' '}
              <a href="https://en.wikipedia.org/wiki/Banco_Santander" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Santander</a>, and{' '}
              <a href="https://en.wikipedia.org/wiki/Iberdrola" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Iberdrola</a>.
              GTM agencies here have deep experience navigating large enterprise sales cycles and complex stakeholder environments.
            </p>

            <p>
              The{' '}
              <a href="https://www.investinspain.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Invest in Spain</a>{' '}
              initiative has positioned Madrid as a major destination for international business, with streamlined processes
              for companies entering the Spanish and European markets.
            </p>

            <p>
              Madrid's financial district and growing tech ecosystem around the{' '}
              <a href="https://en.wikipedia.org/wiki/Madrid_Nuevo_Norte" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Madrid Nuevo Norte</a>{' '}
              development provide fertile ground for B2B technology companies seeking European expansion.
            </p>

            <p>
              As the historic bridge between Europe and Latin America, Madrid agencies offer unmatched expertise
              for companies planning expansion across Spanish-speaking markets worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">GTM Services in Madrid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Enterprise GTM</h3>
              <p className="text-white/60">Complex enterprise sales, stakeholder mapping, and strategic account-based marketing.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">LATAM Expansion</h3>
              <p className="text-white/60">Market entry strategies for Mexico, Colombia, Argentina, Chile, and Brazil.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Fintech GTM</h3>
              <p className="text-white/60">Financial services go-to-market, regulatory navigation, and banking partnerships.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Public Sector</h3>
              <p className="text-white/60">Government procurement, public tender processes, and institutional sales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">Key Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Financial Services</h3>
              <p className="text-white/60">Banking, insurance, wealth management, and fintech innovation.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Telecommunications</h3>
              <p className="text-white/60">Telecom infrastructure, 5G deployment, and connectivity solutions.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Energy & Utilities</h3>
              <p className="text-white/60">Renewable energy, smart grid technology, and sustainability solutions.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Retail & Consumer</h3>
              <p className="text-white/60">E-commerce, omnichannel retail, and consumer brand growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">How to Choose</h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">01</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Evaluate Enterprise Experience</h3>
                <p className="text-lg text-white/70">Look for agencies with proven track records in large enterprise sales and complex deal cycles.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">02</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Check LATAM Connections</h3>
                <p className="text-lg text-white/70">If targeting Latin America, verify direct partnerships and on-the-ground presence in key markets.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">03</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Assess Regulatory Knowledge</h3>
                <p className="text-lg text-white/70">Ensure expertise in Spanish and EU regulatory requirements for your industry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Directory */}
      <section className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Madrid GTM Agencies</h2>
          <p className="text-xl text-white/60 mb-12">{stats.totalAgencies} verified agencies</p>
        </div>

        {agencies.map((agency, i) => (
          <AgencyCard
            key={agency.slug}
            rank={i + 1}
            name={agency.name}
            tagline={agency.description}
            description={[agency.description]}
            bestFor={agency.specializations || []}
            keyServices={[]}
            website={agency.website || '#'}
            primaryColor={(agency as any).primary_color || '#8B5CF6'}
            logoUrl={(agency as any).logo_url}
            backdropUrl={(agency as any).backdrop_url}
            isTopRanked={!!(agency.global_rank && agency.global_rank <= 3)}
            internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined}
            serviceAreas={agency.service_areas || []}
          />
        ))}
      </section>

      {/* FAQ Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">FAQs</h2>
          <div className="space-y-12">
            {faqData.map((faq, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-lg text-white/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Markets */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">Related Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/gtm-agencies-barcelona" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Barcelona</h3>
              <p className="text-white/60">Mediterranean tech hub with mobile and tourism expertise.</p>
            </Link>
            <Link href="/gtm-agencies-lisbon" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Lisbon</h3>
              <p className="text-white/60">Portugal's tech hub and Web Summit host.</p>
            </Link>
            <Link href="/gtm-agencies-paris" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Paris</h3>
              <p className="text-white/60">France's leading tech ecosystem.</p>
            </Link>
            <Link href="/gtm-agencies-london" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">London</h3>
              <p className="text-white/60">Europe's largest tech and fintech hub.</p>
            </Link>
            <Link href="/gtm-agencies-milan" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Milan</h3>
              <p className="text-white/60">Italy's business capital with fashion and fintech.</p>
            </Link>
            <Link href="/best-gtm-agencies" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">All GTM Agencies</h3>
              <p className="text-white/60">Explore top GTM agencies globally.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Build Your Spanish Market GTM Strategy</h2>
          <p className="text-xl text-white/90 mb-10">Create a growth-focused go-to-market strategy for Spain and Latin America.</p>
          <Link href="/planner" className="inline-flex px-12 py-6 text-xl font-black rounded-xl bg-black text-white hover:bg-gray-900">
            Start Free Strategy Planner
          </Link>
        </div>
      </section>
    </div>
  )
}
