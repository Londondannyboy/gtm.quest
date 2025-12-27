import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const faqData = [
  {
    question: 'What are the major GTM agency hubs in Europe?',
    answer: 'London remains Europe\'s largest GTM agency market, followed by Berlin for startups, Paris for luxury and enterprise, Amsterdam for SaaS and fintech, Stockholm for scaling unicorns, and Munich for automotive and industrial B2B. Each city has distinct specializations based on local industry strengths.'
  },
  {
    question: 'How do European GTM agency rates compare to the US?',
    answer: 'European GTM agencies typically charge 20-40% less than US counterparts for similar services. London rates are closest to US levels (EUR 15,000-40,000/month), while Eastern European and Southern European agencies offer significant cost advantages while maintaining quality.'
  },
  {
    question: 'Should I choose a local European agency or work with a global firm?',
    answer: 'For single-market entry, local agencies offer deeper relationships and cultural understanding. For pan-European expansion, consider agencies with multi-market presence or hub-and-spoke models. Many companies start with a strong local agency in their primary market, then expand.'
  },
  {
    question: 'What languages do European GTM agencies typically support?',
    answer: 'Most European agencies operate in English plus local languages. Nordic and Dutch agencies typically have excellent English. German, French, Spanish, and Italian markets often require native-language capabilities for enterprise sales. Choose agencies matching your target market language needs.'
  }
]

const europeanCities = [
  { name: 'London', slug: 'london', country: 'UK', specialty: 'Fintech, Enterprise', flag: '🇬🇧' },
  { name: 'Berlin', slug: 'berlin', country: 'Germany', specialty: 'Startups, Tech', flag: '🇩🇪' },
  { name: 'Paris', slug: 'paris', country: 'France', specialty: 'Luxury, Enterprise', flag: '🇫🇷' },
  { name: 'Amsterdam', slug: 'amsterdam', country: 'Netherlands', specialty: 'SaaS, Fintech', flag: '🇳🇱' },
  { name: 'Munich', slug: 'munich', country: 'Germany', specialty: 'Automotive, Industrial', flag: '🇩🇪' },
  { name: 'Stockholm', slug: 'stockholm', country: 'Sweden', specialty: 'Fintech, Gaming', flag: '🇸🇪' },
  { name: 'Barcelona', slug: 'barcelona', country: 'Spain', specialty: 'Mobile, Tourism Tech', flag: '🇪🇸' },
  { name: 'Madrid', slug: 'madrid', country: 'Spain', specialty: 'Enterprise, LATAM', flag: '🇪🇸' },
  { name: 'Milan', slug: 'milan', country: 'Italy', specialty: 'Fashion, Design', flag: '🇮🇹' },
  { name: 'Rome', slug: 'rome', country: 'Italy', specialty: 'Government, Tourism', flag: '🇮🇹' },
]

export const metadata: Metadata = {
  title: 'GTM Agencies Europe 2025 | Top Go-To-Market Consultants in Europe',
  description: 'Find the best GTM agencies across Europe. Compare agencies in London, Berlin, Paris, Amsterdam, Stockholm, Barcelona, Madrid, Milan, Munich and more.',
  keywords: 'GTM agency Europe, European go-to-market agencies, GTM consultants Europe, EU market entry agency, European expansion consultants',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-europe'
  },
  openGraph: {
    title: 'Top GTM Agencies in Europe | 2025 Directory',
    description: 'Compare the best go-to-market agencies across European markets.',
    url: 'https://gtm.quest/gtm-agencies-europe',
    type: 'website'
  }
}

export default function GTMAgenciesEuropePage() {
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
    name: 'GTM Agencies in Europe',
    description: 'Directory of top go-to-market agencies serving European markets',
    url: 'https://gtm.quest/gtm-agencies-europe',
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
            <span className="text-white">Europe</span>
          </nav>
        </div>
      </div>

      <section className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?w=1920&q=80"
            alt="European city skyline"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">European Markets</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            GTM Agencies<br />in Europe
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            Find go-to-market agencies across Europe's major tech and business hubs.
            From London's fintech expertise to Berlin's startup scene.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            <div>
              <div className="text-5xl font-black text-white mb-2">10+</div>
              <div className="text-white/60">Major Cities</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">500M+</div>
              <div className="text-white/60">Market Size</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">27</div>
              <div className="text-white/60">EU Countries</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">CET</div>
              <div className="text-white/60">Core Timezone</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            Why Choose a European GTM Agency?
          </h2>

          <div className="space-y-8 text-lg text-white/80 leading-relaxed">
            <p>
              Europe represents one of the world's largest and most sophisticated B2B markets.
              According to{' '}
              <a href="https://en.wikipedia.org/wiki/European_Union" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Wikipedia</a>,
              the EU alone has a GDP of over $18 trillion, making it comparable to the United States.
              Local GTM agencies understand the nuanced regulatory, cultural, and business differences
              across European markets.
            </p>

            <p>
              The{' '}
              <a href="https://en.wikipedia.org/wiki/European_Single_Market" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">European Single Market</a>{' '}
              enables companies to expand across 27 EU countries with relative ease, but each market
              has distinct buyer behaviors, sales cycles, and competitive dynamics that local agencies
              understand deeply.
            </p>

            <p>
              European agencies often specialize in specific industries based on local strengths:
              fintech in London and Stockholm, automotive in Munich, luxury in Paris and Milan,
              enterprise software in Amsterdam and Berlin. Choosing the right city-market fit
              accelerates your European expansion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            GTM Agencies by European City
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {europeanCities.map((city) => (
              <Link
                key={city.slug}
                href={`/gtm-agencies-${city.slug}`}
                className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{city.flag}</span>
                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
                      {city.name}
                    </h3>
                    <span className="text-white/60 text-sm">{city.country}</span>
                  </div>
                </div>
                <p className="text-white/70">{city.specialty}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">Key European Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">UK & Ireland</h3>
              <p className="text-white/60">English-speaking gateway to Europe with strong fintech and enterprise sectors.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">DACH Region</h3>
              <p className="text-white/60">Germany, Austria, Switzerland - engineering excellence and enterprise B2B.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Nordics</h3>
              <p className="text-white/60">Sweden, Norway, Denmark, Finland - unicorn factory with fintech and gaming.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Southern Europe</h3>
              <p className="text-white/60">Spain, Italy, Portugal - growing tech scenes with tourism and design strengths.</p>
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
                <h3 className="text-2xl font-bold text-white mb-3">Define Your Target Markets</h3>
                <p className="text-lg text-white/70">Start with 1-2 priority markets rather than all of Europe. Each market requires localized strategy.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">02</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Match City to Industry</h3>
                <p className="text-lg text-white/70">Choose agencies in cities strong in your sector. London for fintech, Munich for automotive, Stockholm for SaaS scaling.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">03</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Verify Language Capabilities</h3>
                <p className="text-lg text-white/70">Ensure agencies can support your target market languages for content, sales, and customer success.</p>
              </div>
            </div>
          </div>
        </div>
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
          <h2 className="text-4xl font-black text-white mb-12">Other Regions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/gtm-agencies-uk" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">United Kingdom</h3>
              <p className="text-white/60">London and major UK cities.</p>
            </Link>
            <Link href="/gtm-agencies-us" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">United States</h3>
              <p className="text-white/60">NYC, San Francisco, and across America.</p>
            </Link>
            <Link href="/gtm-agencies-australia" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Australia</h3>
              <p className="text-white/60">Sydney, Melbourne, and APAC gateway.</p>
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Build Your European GTM Strategy</h2>
          <p className="text-xl text-white/90 mb-10">Create a comprehensive go-to-market strategy for European expansion.</p>
          <Link href="/planner" className="inline-flex px-12 py-6 text-xl font-black rounded-xl bg-black text-white hover:bg-gray-900">
            Start Free Strategy Planner
          </Link>
        </div>
      </section>
    </div>
  )
}
