import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

const faqData = [
  {
    question: 'What makes Barcelona GTM agencies different from other European markets?',
    answer: 'Barcelona agencies combine deep expertise in the Mediterranean tech ecosystem with strong connections to Latin America and Southern Europe. They specialize in mobile-first strategies, tourism and hospitality tech, and multilingual market expansion. The city\'s position as a major Mobile World Congress host gives local agencies unique insights into mobile and telecommunications GTM strategies.'
  },
  {
    question: 'How much do GTM agencies in Barcelona typically charge?',
    answer: 'Barcelona GTM agencies typically charge EUR 8,000-25,000 per month for retainer engagements. Project-based work ranges from EUR 25,000-100,000 depending on scope. Rates are generally 30-40% lower than London or Paris while maintaining high quality, making Barcelona attractive for cost-conscious companies seeking European GTM expertise.'
  },
  {
    question: 'Do Barcelona agencies help with Latin American market entry?',
    answer: 'Yes, Barcelona is a strategic hub for Latin American expansion. Many agencies have teams fluent in Spanish and Portuguese with direct experience in LATAM markets. The cultural affinity and timezone overlap make Barcelona-based agencies ideal partners for companies targeting Spain, Portugal, and Latin America simultaneously.'
  },
  {
    question: 'What industries are Barcelona GTM agencies strongest in?',
    answer: 'Barcelona agencies excel in tourism and hospitality tech, mobile applications, gaming and esports, smart city solutions, and health tech. The city\'s strong design culture also makes local agencies particularly effective for consumer-facing B2B brands that need sophisticated visual identity and user experience in their GTM approach.'
  }
]

export const metadata: Metadata = {
  title: 'GTM Agencies Barcelona 2025 | Top Go-To-Market Consultants in Spain',
  description: 'Find the best GTM agencies in Barcelona. Compare top Spanish go-to-market consultancies serving tech startups, tourism, and Mediterranean market expansion.',
  keywords: 'GTM agency Barcelona, go-to-market agencies Spain, GTM consultants Barcelona, Spanish GTM agencies, startup GTM agency Barcelona, LATAM expansion agency',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-barcelona'
  },
  openGraph: {
    title: 'Top GTM Agencies in Barcelona | 2025 Directory',
    description: 'Compare the best go-to-market agencies in Barcelona. Mobile-first, tourism tech, and LATAM expansion specialists.',
    url: 'https://gtm.quest/gtm-agencies-barcelona',
    type: 'website'
  }
}

export const revalidate = 3600

export default async function GTMAgenciesBarcelonaPage() {
  const agencies = await getAgenciesForLocation('Barcelona')
  const stats = await getLocationStats('Barcelona')

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
    name: 'GTM Agencies in Barcelona',
    description: 'Directory of top go-to-market agencies serving Barcelona and the Spanish tech ecosystem',
    url: 'https://gtm.quest/gtm-agencies-barcelona',
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
            <span className="text-white">Barcelona</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1920&q=80"
            alt="Barcelona Sagrada Familia skyline"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">Barcelona, Catalonia, Spain</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            GTM Agencies<br />in Barcelona
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {stats.totalAgencies} verified go-to-market agencies in Barcelona, the Mediterranean tech capital.
            From 22@ innovation district to global tourism tech leaders.
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
              <div className="text-5xl font-black text-white mb-2">Mobile</div>
              <div className="text-white/60">Specialty</div>
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
            Why Choose a Barcelona GTM Agency?
          </h2>

          <div className="space-y-8 text-lg text-white/80 leading-relaxed">
            <p>
              Barcelona has emerged as one of Europe's most dynamic tech hubs, consistently ranked among
              the top startup ecosystems globally by{' '}
              <a href="https://startupgenome.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Startup Genome</a>.
              According to{' '}
              <a href="https://en.wikipedia.org/wiki/Barcelona" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Wikipedia</a>,
              the city is home to over 1,900 startups and has attracted more than EUR 4 billion in venture
              capital funding in recent years.
            </p>

            <p>
              The{' '}
              <a href="https://www.barcelona.cat/en/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Barcelona City Council</a>{' '}
              has invested heavily in the{' '}
              <a href="https://www.22barcelona.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">22@ innovation district</a>,
              transforming the former industrial Poblenou neighborhood into a thriving tech hub. The{' '}
              <a href="https://tech.barcelona/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Tech Barcelona</a>{' '}
              association connects over 1,200 companies in the local ecosystem.
            </p>

            <p>
              Barcelona's status as the permanent host of{' '}
              <a href="https://www.mwcbarcelona.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Mobile World Congress</a>{' '}
              gives local agencies unparalleled access to mobile technology trends. The{' '}
              <a href="https://www.iese.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">IESE Business School</a>{' '}
              and other institutions provide a steady stream of business talent for GTM execution.
            </p>

            <p>
              The city's unique position as a bridge between Europe and Latin America makes Barcelona
              agencies particularly valuable for LATAM market entry. Organizations like{' '}
              <a href="https://www.investinspain.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Invest in Spain</a>{' '}
              support international companies entering the Spanish market with cultural proximity and language advantages.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            GTM Services in Barcelona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Mobile-First GTM</h3>
              <p className="text-white/60">App store optimization, mobile user acquisition, and mobile-first go-to-market strategies.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">LATAM Expansion</h3>
              <p className="text-white/60">Spanish and Portuguese market entry, Latin American expansion strategies.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Tourism Tech</h3>
              <p className="text-white/60">Hospitality technology GTM, travel platform growth, destination marketing.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Design-Led Growth</h3>
              <p className="text-white/60">Brand-driven GTM strategies, UX-focused conversion optimization.</p>
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
              <h3 className="text-xl font-bold text-white mb-3">Tourism & Hospitality</h3>
              <p className="text-white/60">Travel platforms, booking systems, destination technology.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Mobile & Gaming</h3>
              <p className="text-white/60">Mobile applications, gaming studios, esports platforms.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Smart City & IoT</h3>
              <p className="text-white/60">Urban technology, smart infrastructure, sustainability tech.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Health Tech</h3>
              <p className="text-white/60">Digital health platforms, biotech startups, medical devices.</p>
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
                <h3 className="text-2xl font-bold text-white mb-3">Assess Market Focus</h3>
                <p className="text-lg text-white/70">Match your target markets to an agency with proven track records in Iberian or LATAM regions.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">02</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Evaluate Industry Expertise</h3>
                <p className="text-lg text-white/70">Tourism tech requires different strategies than B2B SaaS or mobile gaming.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">03</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Check Multilingual Capabilities</h3>
                <p className="text-lg text-white/70">Ensure native-level capabilities in Spanish, Catalan, Portuguese, and English.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Directory */}
      <section className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Barcelona GTM Agencies</h2>
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
            <Link href="/gtm-agencies-madrid" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Madrid</h3>
              <p className="text-white/60">Spain's capital and financial center with strong enterprise B2B.</p>
            </Link>
            <Link href="/gtm-agencies-lisbon" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Lisbon</h3>
              <p className="text-white/60">Portugal's tech hub and Web Summit host.</p>
            </Link>
            <Link href="/gtm-agencies-paris" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Paris</h3>
              <p className="text-white/60">France's leading tech ecosystem with Station F.</p>
            </Link>
            <Link href="/gtm-agencies-london" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">London</h3>
              <p className="text-white/60">Europe's largest tech hub with fintech dominance.</p>
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Build Your Mediterranean GTM Strategy</h2>
          <p className="text-xl text-white/90 mb-10">Create a growth-focused go-to-market strategy for Spain, Portugal, and Latin America.</p>
          <Link href="/planner" className="inline-flex px-12 py-6 text-xl font-black rounded-xl bg-black text-white hover:bg-gray-900">
            Start Free Strategy Planner
          </Link>
        </div>
      </section>
    </div>
  )
}
