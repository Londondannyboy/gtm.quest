import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

const faqData = [
  {
    question: 'What makes Sydney GTM agencies different from other APAC markets?',
    answer: 'Sydney agencies combine sophisticated Western marketing approaches with deep understanding of APAC markets. As Australia\'s business capital and a major APAC hub, local agencies excel at launches across Australia, New Zealand, and Southeast Asia while offering timezone overlap with Asian markets.'
  },
  {
    question: 'How much do GTM agencies in Sydney typically charge?',
    answer: 'Sydney GTM agencies typically charge AUD 15,000-40,000 per month for retainer engagements. Project-based work ranges from AUD 40,000-150,000 depending on scope. Rates are comparable to London and slightly higher than Melbourne while offering premium APAC market access.'
  },
  {
    question: 'Do Sydney agencies help with APAC market expansion?',
    answer: 'Yes, Sydney is a natural gateway for APAC expansion. Agencies here have established networks across Singapore, Hong Kong, Tokyo, and emerging Southeast Asian markets. The timezone advantages (close to Asia, same day as US West Coast) make Sydney ideal for regional coordination.'
  },
  {
    question: 'What industries are Sydney GTM agencies strongest in?',
    answer: 'Sydney agencies excel in fintech, SaaS, e-commerce, mining and resources technology, healthcare, and professional services. The city\'s strengths in financial services, with major banks and insurers headquartered here, provide deep fintech and insurtech expertise.'
  }
]

export const metadata: Metadata = {
  title: 'GTM Agencies Sydney 2025 | Top Go-To-Market Consultants Australia',
  description: 'Find the best GTM agencies in Sydney. Compare top Sydney-based go-to-market consultancies for fintech, SaaS, and APAC market expansion.',
  keywords: 'GTM agency Sydney, go-to-market agencies Sydney, GTM consultants Sydney, APAC GTM agency, Australian GTM agency, product launch Sydney',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-sydney'
  },
  openGraph: {
    title: 'Top GTM Agencies in Sydney | 2025 Directory',
    description: 'Compare the best go-to-market agencies in Sydney. Fintech, SaaS, and APAC expansion specialists.',
    url: 'https://gtm.quest/gtm-agencies-sydney',
    type: 'website'
  }
}

export const revalidate = 3600

export default async function GTMAgenciesSydneyPage() {
  const agencies = await getAgenciesForLocation('Sydney')
  const stats = await getLocationStats('Sydney')

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
    name: 'GTM Agencies in Sydney',
    description: 'Directory of top go-to-market agencies serving Sydney and APAC markets',
    url: 'https://gtm.quest/gtm-agencies-sydney',
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
            <Link href="/gtm-agencies-australia" className="hover:text-white">Australia</Link>
            {' '}/{' '}
            <span className="text-white">Sydney</span>
          </nav>
        </div>
      </div>

      <section className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&q=80"
            alt="Sydney Opera House and Harbour Bridge"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">Sydney, New South Wales, Australia</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            GTM Agencies<br />in Sydney
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {stats.totalAgencies} verified go-to-market agencies in Australia's business capital.
            Your APAC gateway for fintech, SaaS, and regional expansion.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            <div>
              <div className="text-5xl font-black text-white mb-2">{stats.totalAgencies}</div>
              <div className="text-white/60">Agencies</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">A${Math.round((stats.avgMinBudget * 1.5) / 1000)}K+</div>
              <div className="text-white/60">Avg Min Budget</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">APAC</div>
              <div className="text-white/60">Gateway</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">AEST</div>
              <div className="text-white/60">Time Zone</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">Why Choose a Sydney GTM Agency?</h2>

          <div className="space-y-8 text-lg text-white/80 leading-relaxed">
            <p>
              Sydney is Australia's largest city and the financial capital of the Asia-Pacific region.
              According to{' '}
              <a href="https://en.wikipedia.org/wiki/Sydney" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Wikipedia</a>,
              the city hosts the headquarters of nearly half of Australia's top 500 companies and the
              Australian Securities Exchange, making it the natural base for B2B technology GTM.
            </p>

            <p>
              The city's position as an APAC hub is strengthened by timezone advantages—Sydney operates
              during the Asian business day while overlapping with US West Coast hours. The{' '}
              <a href="https://www.business.nsw.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NSW Government</a>{' '}
              has invested heavily in making Sydney a tech destination, with programs supporting innovation.
            </p>

            <p>
              Sydney's{' '}
              <a href="https://en.wikipedia.org/wiki/Silicon_Harbour" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">tech ecosystem</a>{' '}
              has produced successful companies like Atlassian, Canva, and Afterpay. Local GTM agencies
              have hands-on experience scaling Australian companies to global markets.
            </p>

            <p>
              The strong financial services sector, with all major Australian banks headquartered here,
              provides agencies with exceptional fintech and insurtech go-to-market expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">GTM Services in Sydney</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">APAC Expansion</h3>
              <p className="text-white/60">Regional market entry, localization strategies, and multi-market launches.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Fintech GTM</h3>
              <p className="text-white/60">Financial services technology, payments, lending, and insurtech go-to-market.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Enterprise SaaS</h3>
              <p className="text-white/60">B2B software launches, enterprise sales enablement, and channel strategy.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Resources Tech</h3>
              <p className="text-white/60">Mining technology, energy solutions, and industrial innovation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">Key Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Financial Services</h3>
              <p className="text-white/60">Banking, insurance, wealth management, payments technology.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">SaaS & Technology</h3>
              <p className="text-white/60">Enterprise software, cloud platforms, developer tools.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Healthcare</h3>
              <p className="text-white/60">Digital health, telehealth, healthcare technology.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Resources & Energy</h3>
              <p className="text-white/60">Mining technology, renewable energy, utilities.</p>
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
                <h3 className="text-2xl font-bold text-white mb-3">Assess APAC Network</h3>
                <p className="text-lg text-white/70">For regional expansion, verify partnerships and on-ground presence across Singapore, Hong Kong, and Southeast Asia.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">02</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Check Local Market Expertise</h3>
                <p className="text-lg text-white/70">Australian businesses require local understanding. Verify experience with Australian enterprise sales cycles and buyer behaviors.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">03</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Evaluate Scaling Experience</h3>
                <p className="text-lg text-white/70">Look for agencies that have helped Australian companies expand globally, not just international companies entering Australia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Sydney GTM Agencies</h2>
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
            <Link href="/gtm-agencies-australia" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Australia</h3>
              <p className="text-white/60">Explore GTM agencies across all Australian cities.</p>
            </Link>
            <Link href="/gtm-agencies-singapore" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Singapore</h3>
              <p className="text-white/60">Southeast Asia's business hub and APAC gateway.</p>
            </Link>
            <Link href="/gtm-agencies-london" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">London</h3>
              <p className="text-white/60">Europe's largest fintech hub.</p>
            </Link>
            <Link href="/gtm-agencies-new-york" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">New York</h3>
              <p className="text-white/60">America's financial and media capital.</p>
            </Link>
            <Link href="/gtm-agencies-san-francisco" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">San Francisco</h3>
              <p className="text-white/60">Silicon Valley and global tech headquarters.</p>
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Build Your APAC GTM Strategy</h2>
          <p className="text-xl text-white/90 mb-10">Create a comprehensive go-to-market strategy for Australia and APAC from Sydney.</p>
          <Link href="/planner" className="inline-flex px-12 py-6 text-xl font-black rounded-xl bg-black text-white hover:bg-gray-900">
            Start Free Strategy Planner
          </Link>
        </div>
      </section>
    </div>
  )
}
