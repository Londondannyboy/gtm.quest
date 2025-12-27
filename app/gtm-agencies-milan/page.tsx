import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

const faqData = [
  {
    question: 'What makes Milan GTM agencies different from other European markets?',
    answer: 'Milan agencies combine strong expertise in luxury, fashion, and design with growing capabilities in fintech and B2B technology. As Italy\'s business capital and a global fashion hub, local agencies excel at brand-driven GTM strategies and premium market positioning.'
  },
  {
    question: 'How much do GTM agencies in Milan typically charge?',
    answer: 'Milan GTM agencies typically charge EUR 8,000-25,000 per month for retainer engagements. Project-based work ranges from EUR 25,000-100,000 depending on scope. Rates are competitive with other major European cities while offering unique expertise in luxury and design sectors.'
  },
  {
    question: 'Do Milan agencies help with Southern European market entry?',
    answer: 'Yes, Milan serves as an excellent base for Southern European expansion. Agencies here have strong connections throughout Italy and often partner with networks in Spain, Portugal, and Greece for Mediterranean market coverage.'
  },
  {
    question: 'What industries are Milan GTM agencies strongest in?',
    answer: 'Milan agencies excel in fashion and luxury goods, industrial manufacturing, financial services, design and furniture, and increasingly in fintech and B2B SaaS. The city\'s strong manufacturing heritage gives agencies unique expertise in industrial B2B markets.'
  }
]

export const metadata: Metadata = {
  title: 'GTM Agencies Milan 2025 | Top Go-To-Market Consultants in Italy',
  description: 'Find the best GTM agencies in Milan. Compare top Italian go-to-market consultancies for luxury brands, fashion tech, fintech, and B2B manufacturing.',
  keywords: 'GTM agency Milan, go-to-market agencies Italy, GTM consultants Milan, Italian GTM agencies, luxury brand GTM agency, fashion tech agency',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-milan'
  },
  openGraph: {
    title: 'Top GTM Agencies in Milan | 2025 Directory',
    description: 'Compare the best go-to-market agencies in Milan. Luxury, fashion, fintech, and manufacturing specialists.',
    url: 'https://gtm.quest/gtm-agencies-milan',
    type: 'website'
  }
}

export const revalidate = 3600

export default async function GTMAgenciesMilanPage() {
  const agencies = await getAgenciesForLocation('Milan')
  const stats = await getLocationStats('Milan')

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

  return (
    <div className="bg-black text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            <span className="text-white">Milan</span>
          </nav>
        </div>
      </div>

      <section className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=1920&q=80"
            alt="Milan Duomo cathedral"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">Milan, Lombardy, Italy</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            GTM Agencies<br />in Milan
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {stats.totalAgencies} verified go-to-market agencies in Italy's business capital.
            Fashion, fintech, and industrial excellence meet design-driven GTM.
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
              <div className="text-5xl font-black text-white mb-2">Design</div>
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">Why Choose a Milan GTM Agency?</h2>

          <div className="space-y-8 text-lg text-white/80 leading-relaxed">
            <p>
              Milan is Italy's economic powerhouse and one of Europe's most important business centers.
              According to{' '}
              <a href="https://en.wikipedia.org/wiki/Milan" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Wikipedia</a>,
              the city generates approximately 10% of Italy's GDP and hosts the Italian stock exchange,
              making it the natural base for companies entering the Italian market.
            </p>

            <p>
              The city's role as a global{' '}
              <a href="https://en.wikipedia.org/wiki/Milan_Fashion_Week" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">fashion capital</a>{' '}
              has cultivated agencies with exceptional brand positioning and premium market expertise,
              valuable for any B2B company seeking sophisticated market positioning.
            </p>

            <p>
              Milan's{' '}
              <a href="https://en.wikipedia.org/wiki/Salone_del_Mobile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Salone del Mobile</a>{' '}
              and design week attract global attention, and local agencies understand how to leverage
              events and design thinking in go-to-market strategies.
            </p>

            <p>
              The city's strong industrial base in Lombardy provides agencies with deep expertise in
              manufacturing, industrial automation, and B2B technology markets throughout Northern Italy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">GTM Services in Milan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Brand-Led GTM</h3>
              <p className="text-white/60">Premium brand positioning, design-driven strategies, luxury market expertise.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Industrial B2B</h3>
              <p className="text-white/60">Manufacturing technology, automation solutions, industrial equipment sales.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Fintech GTM</h3>
              <p className="text-white/60">Financial services go-to-market, banking technology, payment solutions.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Fashion Tech</h3>
              <p className="text-white/60">Retail technology, e-commerce platforms, supply chain solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">Key Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Fashion & Luxury</h3>
              <p className="text-white/60">Fashion brands, luxury goods, high-end retail technology.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Financial Services</h3>
              <p className="text-white/60">Banking, asset management, insurance, fintech startups.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Manufacturing</h3>
              <p className="text-white/60">Industrial automation, machinery, precision engineering.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Design & Furniture</h3>
              <p className="text-white/60">Interior design, furniture manufacturing, design technology.</p>
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
                <h3 className="text-2xl font-bold text-white mb-3">Evaluate Brand Expertise</h3>
                <p className="text-lg text-white/70">Milan agencies excel at premium positioning. Assess their portfolio for brand sophistication.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">02</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Check Industry Fit</h3>
                <p className="text-lg text-white/70">Whether fashion, finance, or manufacturing, ensure the agency has relevant sector experience.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">03</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Assess Italian Market Knowledge</h3>
                <p className="text-lg text-white/70">Italy requires nuanced market understanding. Verify local relationships and regulatory expertise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Milan GTM Agencies</h2>
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
            <Link href="/gtm-agencies-rome" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Rome</h3>
              <p className="text-white/60">Italy's capital with government and tourism focus.</p>
            </Link>
            <Link href="/gtm-agencies-munich" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Munich</h3>
              <p className="text-white/60">Germany's southern business hub with automotive and tech.</p>
            </Link>
            <Link href="/gtm-agencies-paris" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Paris</h3>
              <p className="text-white/60">France's capital with luxury and tech expertise.</p>
            </Link>
            <Link href="/gtm-agencies-zurich" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Zurich</h3>
              <p className="text-white/60">Switzerland's financial center and fintech hub.</p>
            </Link>
            <Link href="/gtm-agencies-barcelona" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Barcelona</h3>
              <p className="text-white/60">Mediterranean tech hub with mobile expertise.</p>
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
          <p className="text-xl text-white/90 mb-10">Create a design-driven go-to-market strategy for Italy and Southern Europe.</p>
          <Link href="/planner" className="inline-flex px-12 py-6 text-xl font-black rounded-xl bg-black text-white hover:bg-gray-900">
            Start Free Strategy Planner
          </Link>
        </div>
      </section>
    </div>
  )
}
