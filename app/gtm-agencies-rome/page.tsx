import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

const faqData = [
  {
    question: 'What makes Rome GTM agencies different from Milan?',
    answer: 'Rome agencies excel in government and public sector sales, tourism technology, and media/entertainment. Unlike Milan\'s business focus, Rome agencies understand bureaucratic procurement processes and have strong connections to institutional buyers and state-owned enterprises.'
  },
  {
    question: 'How much do GTM agencies in Rome typically charge?',
    answer: 'Rome GTM agencies typically charge EUR 7,000-22,000 per month for retainer engagements. Project-based work ranges from EUR 20,000-80,000 depending on scope. Rates are generally 15-25% lower than Milan while offering unique expertise in government and tourism sectors.'
  },
  {
    question: 'Do Rome agencies help with Italian public sector sales?',
    answer: 'Yes, Rome is the center of Italian government and public administration. Local agencies have deep expertise in navigating CONSIP procurement, public tender processes, and building relationships with ministries and state agencies.'
  },
  {
    question: 'What industries are Rome GTM agencies strongest in?',
    answer: 'Rome agencies excel in government and defense technology, tourism and hospitality, media and entertainment, aerospace, and energy. The presence of major state-owned enterprises and the Vatican creates unique market opportunities.'
  }
]

export const metadata: Metadata = {
  title: 'GTM Agencies Rome 2025 | Top Go-To-Market Consultants in Italy',
  description: 'Find the best GTM agencies in Rome. Compare top Italian go-to-market consultancies for government, public sector, tourism tech, and media entertainment.',
  keywords: 'GTM agency Rome, go-to-market agencies Italy, GTM consultants Rome, Italian GTM agencies, government GTM agency, public sector sales Italy',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-rome'
  },
  openGraph: {
    title: 'Top GTM Agencies in Rome | 2025 Directory',
    description: 'Compare the best go-to-market agencies in Rome. Government, tourism tech, and media entertainment specialists.',
    url: 'https://gtm.quest/gtm-agencies-rome',
    type: 'website'
  }
}

export const revalidate = 3600

export default async function GTMAgenciesRomePage() {
  const agencies = await getAgenciesForLocation('Rome')
  const stats = await getLocationStats('Rome')

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
    name: 'GTM Agencies in Rome',
    description: 'Directory of top go-to-market agencies serving Rome and Italian government markets',
    url: 'https://gtm.quest/gtm-agencies-rome',
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
            <span className="text-white">Rome</span>
          </nav>
        </div>
      </div>

      <section className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1920&q=80"
            alt="Rome Colosseum and cityscape"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">Rome, Lazio, Italy</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            GTM Agencies<br />in Rome
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {stats.totalAgencies} verified go-to-market agencies in Italy's capital.
            Government expertise meets tourism and media innovation.
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
              <div className="text-5xl font-black text-white mb-2">Gov</div>
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">Why Choose a Rome GTM Agency?</h2>

          <div className="space-y-8 text-lg text-white/80 leading-relaxed">
            <p>
              Rome is Italy's capital and the seat of government, hosting all major ministries and{' '}
              <a href="https://en.wikipedia.org/wiki/Italian_Parliament" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Parliament</a>.
              GTM agencies here specialize in navigating complex public sector procurement and building relationships
              with decision-makers across government institutions.
            </p>

            <p>
              According to{' '}
              <a href="https://en.wikipedia.org/wiki/Rome" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Wikipedia</a>,
              Rome is Italy's most visited city with over 10 million tourists annually, making local agencies
              experts in tourism technology and hospitality sector go-to-market strategies.
            </p>

            <p>
              The city hosts major state-owned enterprises like{' '}
              <a href="https://en.wikipedia.org/wiki/Enel" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Enel</a>,{' '}
              <a href="https://en.wikipedia.org/wiki/Leonardo_S.p.A." target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Leonardo</a>, and{' '}
              <a href="https://en.wikipedia.org/wiki/Eni" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Eni</a>,
              providing agencies with unique access to energy, aerospace, and defense markets.
            </p>

            <p>
              Rome's media and entertainment cluster, including{' '}
              <a href="https://en.wikipedia.org/wiki/Cinecitt%C3%A0" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Cinecitta</a>{' '}
              studios and major broadcasters, creates opportunities for agencies specializing in media technology GTM.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">GTM Services in Rome</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Public Sector GTM</h3>
              <p className="text-white/60">Government procurement, tender processes, ministerial relationships.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Tourism Tech</h3>
              <p className="text-white/60">Hospitality technology, destination management, travel platforms.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Media & Entertainment</h3>
              <p className="text-white/60">Broadcasting technology, content platforms, production services.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Energy & Aerospace</h3>
              <p className="text-white/60">Utility technology, defense systems, aerospace solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">Key Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Government & Defense</h3>
              <p className="text-white/60">Public administration, military, security agencies.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Tourism & Hospitality</h3>
              <p className="text-white/60">Hotels, tour operators, cultural institutions.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Media & Broadcasting</h3>
              <p className="text-white/60">Television, film production, digital media.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Energy</h3>
              <p className="text-white/60">Utilities, renewable energy, oil and gas technology.</p>
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
                <h3 className="text-2xl font-bold text-white mb-3">Verify Government Connections</h3>
                <p className="text-lg text-white/70">For public sector sales, ensure the agency has genuine relationships with relevant ministries.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">02</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Understand Procurement Expertise</h3>
                <p className="text-lg text-white/70">Italian public procurement is complex. Verify experience with CONSIP and public tender processes.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">03</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Assess State Enterprise Access</h3>
                <p className="text-lg text-white/70">Major state-owned companies have unique buying processes. Check relevant sector experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Rome GTM Agencies</h2>
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
            <Link href="/gtm-agencies-milan" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Milan</h3>
              <p className="text-white/60">Italy's business capital with fashion and fintech.</p>
            </Link>
            <Link href="/gtm-agencies-madrid" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Madrid</h3>
              <p className="text-white/60">Spain's capital with government and enterprise focus.</p>
            </Link>
            <Link href="/gtm-agencies-paris" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Paris</h3>
              <p className="text-white/60">France's capital with luxury and public sector expertise.</p>
            </Link>
            <Link href="/gtm-agencies-barcelona" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Barcelona</h3>
              <p className="text-white/60">Mediterranean tech hub with tourism expertise.</p>
            </Link>
            <Link href="/gtm-agencies-london" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">London</h3>
              <p className="text-white/60">Europe's largest fintech and enterprise hub.</p>
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Build Your Italian Market GTM Strategy</h2>
          <p className="text-xl text-white/90 mb-10">Create a government-focused go-to-market strategy for Italy.</p>
          <Link href="/planner" className="inline-flex px-12 py-6 text-xl font-black rounded-xl bg-black text-white hover:bg-gray-900">
            Start Free Strategy Planner
          </Link>
        </div>
      </section>
    </div>
  )
}
