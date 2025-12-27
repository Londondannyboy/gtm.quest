import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

const faqData = [
  {
    question: 'What makes Stockholm GTM agencies different from other European markets?',
    answer: 'Stockholm agencies combine world-class expertise in fintech, gaming, and music/streaming technology with the Nordic pragmatic approach to business. The city has produced more billion-dollar tech companies per capita than any other region except Silicon Valley, giving agencies unique growth-stage expertise.'
  },
  {
    question: 'How much do GTM agencies in Stockholm typically charge?',
    answer: 'Stockholm GTM agencies typically charge EUR 10,000-30,000 per month for retainer engagements. Project-based work ranges from EUR 30,000-120,000 depending on scope. Rates reflect Scandinavian premium pricing but include high-quality, internationally-minded talent.'
  },
  {
    question: 'Do Stockholm agencies help with Nordic market entry?',
    answer: 'Yes, Stockholm is the natural base for Nordic expansion. Agencies here understand the nuances of Sweden, Norway, Denmark, and Finland markets, and many have established partnerships throughout the region for comprehensive Nordic GTM strategies.'
  },
  {
    question: 'What industries are Stockholm GTM agencies strongest in?',
    answer: 'Stockholm agencies excel in fintech and payments, gaming and esports, music and streaming technology, cleantech and sustainability, and enterprise SaaS. The city\'s unicorn factory status provides agencies with exceptional growth and scaling expertise.'
  }
]

export const metadata: Metadata = {
  title: 'GTM Agencies Stockholm 2025 | Top Go-To-Market Consultants in Sweden',
  description: 'Find the best GTM agencies in Stockholm. Compare top Swedish go-to-market consultancies for fintech, gaming, streaming, and cleantech companies.',
  keywords: 'GTM agency Stockholm, go-to-market agencies Sweden, GTM consultants Stockholm, Swedish GTM agencies, fintech GTM agency, Nordic market expansion',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-stockholm'
  },
  openGraph: {
    title: 'Top GTM Agencies in Stockholm | 2025 Directory',
    description: 'Compare the best go-to-market agencies in Stockholm. Fintech, gaming, streaming, and cleantech specialists.',
    url: 'https://gtm.quest/gtm-agencies-stockholm',
    type: 'website'
  }
}

export const revalidate = 3600

export default async function GTMAgenciesStockholmPage() {
  const agencies = await getAgenciesForLocation('Stockholm')
  const stats = await getLocationStats('Stockholm')

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
    name: 'GTM Agencies in Stockholm',
    description: 'Directory of top go-to-market agencies serving Stockholm and the Nordic tech ecosystem',
    url: 'https://gtm.quest/gtm-agencies-stockholm',
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

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/" className="hover:text-white">Home</Link>
            {' '}/{' '}
            <Link href="/best-gtm-agencies" className="hover:text-white">GTM Agencies</Link>
            {' '}/{' '}
            <Link href="/gtm-agencies-europe" className="hover:text-white">Europe</Link>
            {' '}/{' '}
            <span className="text-white">Stockholm</span>
          </nav>
        </div>
      </div>

      <section className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1920&q=80"
            alt="Stockholm old town Gamla Stan"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">Stockholm, Sweden</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            GTM Agencies<br />in Stockholm
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {stats.totalAgencies} verified go-to-market agencies in the Nordic unicorn factory.
            Fintech, gaming, and streaming innovation meet scaling expertise.
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
              <div className="text-5xl font-black text-white mb-2">Scale</div>
              <div className="text-white/60">Focus</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">CET</div>
              <div className="text-white/60">Time Zone</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">Why Choose a Stockholm GTM Agency?</h2>

          <div className="space-y-8 text-lg text-white/80 leading-relaxed">
            <p>
              Stockholm has produced more billion-dollar tech companies per capita than almost any other city,
              including{' '}
              <a href="https://en.wikipedia.org/wiki/Spotify" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Spotify</a>,{' '}
              <a href="https://en.wikipedia.org/wiki/Klarna" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Klarna</a>, and{' '}
              <a href="https://en.wikipedia.org/wiki/King_(company)" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">King</a>.
              Local GTM agencies have hands-on experience scaling companies from startup to global dominance.
            </p>

            <p>
              According to{' '}
              <a href="https://en.wikipedia.org/wiki/Stockholm" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Wikipedia</a>,
              Stockholm is one of the world's most tech-dense cities with exceptional digital infrastructure
              and a highly educated, English-proficient workforce that enables global go-to-market execution.
            </p>

            <p>
              The Swedish approach to business emphasizes consensus, quality, and long-term thinking.
              Local agencies understand how to navigate both the structured Nordic business environment
              and the fast-moving international tech landscape.
            </p>

            <p>
              Stockholm's leadership in{' '}
              <a href="https://en.wikipedia.org/wiki/Sustainable_development" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">sustainability</a>{' '}
              and cleantech provides agencies with unique expertise for companies with environmental value propositions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">GTM Services in Stockholm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Scale-Up GTM</h3>
              <p className="text-white/60">Growth-stage strategies, international expansion, and unicorn-track scaling.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Fintech GTM</h3>
              <p className="text-white/60">Payments technology, open banking, embedded finance go-to-market.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Gaming & Streaming</h3>
              <p className="text-white/60">Consumer tech, gaming platforms, music and media technology.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Cleantech GTM</h3>
              <p className="text-white/60">Sustainability technology, renewable energy, circular economy solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">Key Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Fintech & Payments</h3>
              <p className="text-white/60">Buy now pay later, open banking, digital payments.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Gaming & Esports</h3>
              <p className="text-white/60">Game development, esports platforms, gaming technology.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Music & Streaming</h3>
              <p className="text-white/60">Audio streaming, music tech, content platforms.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Cleantech</h3>
              <p className="text-white/60">Renewable energy, sustainability software, circular economy.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">How to Choose</h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">01</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Look for Scaling Experience</h3>
                <p className="text-lg text-white/70">Stockholm agencies should have experience taking companies from Series A to international expansion.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">02</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Verify Nordic Network</h3>
                <p className="text-lg text-white/70">For Nordic expansion, ensure the agency has partnerships across Sweden, Norway, Denmark, and Finland.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">03</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Assess Global Mindset</h3>
                <p className="text-lg text-white/70">Swedish companies think globally from day one. Choose an agency with international GTM experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Stockholm GTM Agencies</h2>
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

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">Related Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/gtm-agencies-amsterdam" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Amsterdam</h3>
              <p className="text-white/60">Netherlands tech hub with fintech and SaaS focus.</p>
            </Link>
            <Link href="/gtm-agencies-berlin" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Berlin</h3>
              <p className="text-white/60">Germany's startup capital with creative and tech focus.</p>
            </Link>
            <Link href="/gtm-agencies-london" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">London</h3>
              <p className="text-white/60">Europe's largest fintech and enterprise hub.</p>
            </Link>
            <Link href="/gtm-agencies-paris" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Paris</h3>
              <p className="text-white/60">France's tech ecosystem with Station F.</p>
            </Link>
            <Link href="/gtm-agencies-munich" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Munich</h3>
              <p className="text-white/60">Germany's enterprise and automotive hub.</p>
            </Link>
            <Link href="/best-gtm-agencies" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">All GTM Agencies</h3>
              <p className="text-white/60">Explore top GTM agencies globally.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Build Your Nordic GTM Strategy</h2>
          <p className="text-xl text-white/90 mb-10">Create a scale-focused go-to-market strategy for the Nordic region and beyond.</p>
          <Link href="/planner" className="inline-flex px-12 py-6 text-xl font-black rounded-xl bg-black text-white hover:bg-gray-900">
            Start Free Strategy Planner
          </Link>
        </div>
      </section>
    </div>
  )
}
