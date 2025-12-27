import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

const faqData = [
  {
    question: 'What makes Munich GTM agencies different from other German markets?',
    answer: 'Munich agencies combine deep expertise in automotive, manufacturing, and enterprise technology with Bavaria\'s strong engineering culture. Unlike Berlin\'s startup focus, Munich agencies excel at complex B2B enterprise sales and industrial technology go-to-market strategies.'
  },
  {
    question: 'How much do GTM agencies in Munich typically charge?',
    answer: 'Munich GTM agencies typically charge EUR 12,000-35,000 per month for retainer engagements. Project-based work ranges from EUR 40,000-150,000 depending on scope. Rates reflect Munich\'s premium positioning as Germany\'s most expensive business city.'
  },
  {
    question: 'Do Munich agencies help with DACH market entry?',
    answer: 'Yes, Munich is an excellent base for DACH (Germany, Austria, Switzerland) expansion. Agencies here have strong connections throughout the German-speaking region and understand the nuances of each market.'
  },
  {
    question: 'What industries are Munich GTM agencies strongest in?',
    answer: 'Munich agencies excel in automotive and mobility technology, enterprise software, manufacturing and Industry 4.0, insurance and fintech, and biotech/life sciences. The presence of BMW, Siemens, and Allianz headquarters provides deep sector expertise.'
  }
]

export const metadata: Metadata = {
  title: 'GTM Agencies Munich 2025 | Top Go-To-Market Consultants in Germany',
  description: 'Find the best GTM agencies in Munich. Compare top German go-to-market consultancies for automotive, enterprise software, and manufacturing technology.',
  keywords: 'GTM agency Munich, go-to-market agencies Germany, GTM consultants Munich, German GTM agencies, automotive GTM agency, enterprise software GTM',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-munich'
  },
  openGraph: {
    title: 'Top GTM Agencies in Munich | 2025 Directory',
    description: 'Compare the best go-to-market agencies in Munich. Automotive, enterprise software, and manufacturing specialists.',
    url: 'https://gtm.quest/gtm-agencies-munich',
    type: 'website'
  }
}

export const revalidate = 3600

export default async function GTMAgenciesMunichPage() {
  const agencies = await getAgenciesForLocation('Munich')
  const stats = await getLocationStats('Munich')

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
            <span className="text-white">Munich</span>
          </nav>
        </div>
      </div>

      <section className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1595867818082-083862f3d630?w=1920&q=80"
            alt="Munich Marienplatz skyline"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-white/60 text-sm uppercase tracking-wider">Munich, Bavaria, Germany</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            GTM Agencies<br />in Munich
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl">
            {stats.totalAgencies} verified go-to-market agencies in Germany's southern powerhouse.
            Automotive excellence meets enterprise technology.
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

      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">Why Choose a Munich GTM Agency?</h2>

          <div className="space-y-8 text-lg text-white/80 leading-relaxed">
            <p>
              Munich is Germany's third-largest city and home to major corporations including{' '}
              <a href="https://en.wikipedia.org/wiki/BMW" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">BMW</a>,{' '}
              <a href="https://en.wikipedia.org/wiki/Siemens" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Siemens</a>, and{' '}
              <a href="https://en.wikipedia.org/wiki/Allianz" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Allianz</a>.
              GTM agencies here have unparalleled access to automotive, manufacturing, and insurance decision-makers.
            </p>

            <p>
              According to{' '}
              <a href="https://en.wikipedia.org/wiki/Munich" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Wikipedia</a>,
              Munich has the strongest economy of any German city and one of the lowest unemployment rates.
              This prosperity creates demanding but lucrative B2B markets.
            </p>

            <p>
              The city's{' '}
              <a href="https://en.wikipedia.org/wiki/Technical_University_of_Munich" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Technical University of Munich</a>{' '}
              and thriving startup scene have created a unique ecosystem where traditional industry meets
              deep tech innovation, making local agencies experts at bridging both worlds.
            </p>

            <p>
              Bavaria's engineering culture emphasizes precision and quality, reflected in local agencies'
              methodical approach to go-to-market strategy and execution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">GTM Services in Munich</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Enterprise GTM</h3>
              <p className="text-white/60">Complex enterprise sales cycles, stakeholder management, and strategic account development.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Automotive Tech</h3>
              <p className="text-white/60">Mobility solutions, autonomous driving technology, and connected vehicle platforms.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Industry 4.0</h3>
              <p className="text-white/60">Manufacturing technology, industrial IoT, and smart factory solutions.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Insurance Tech</h3>
              <p className="text-white/60">Insurtech solutions, digital transformation, and risk technology platforms.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">Key Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Automotive & Mobility</h3>
              <p className="text-white/60">OEMs, Tier 1 suppliers, mobility startups, electric vehicles.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Manufacturing</h3>
              <p className="text-white/60">Industrial automation, precision engineering, smart factories.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Insurance & Finance</h3>
              <p className="text-white/60">Insurance companies, asset managers, fintech startups.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Life Sciences</h3>
              <p className="text-white/60">Biotech, medical devices, pharmaceutical technology.</p>
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
                <h3 className="text-2xl font-bold text-white mb-3">Verify Industry Connections</h3>
                <p className="text-lg text-white/70">Munich success depends on relationships. Ensure the agency has direct connections in your target sector.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">02</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Assess Enterprise Experience</h3>
                <p className="text-lg text-white/70">Munich's market is enterprise-heavy. Look for proven experience with complex, long sales cycles.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-5xl font-black text-white/20">03</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Evaluate Technical Depth</h3>
                <p className="text-lg text-white/70">Bavarian buyers value technical expertise. Ensure the agency can speak credibly to engineers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Munich GTM Agencies</h2>
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
            <Link href="/gtm-agencies-berlin" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Berlin</h3>
              <p className="text-white/60">Germany's startup capital with tech and creative focus.</p>
            </Link>
            <Link href="/gtm-agencies-frankfurt" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Frankfurt</h3>
              <p className="text-white/60">Germany's financial center and banking hub.</p>
            </Link>
            <Link href="/gtm-agencies-zurich" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Zurich</h3>
              <p className="text-white/60">Swiss precision and fintech excellence.</p>
            </Link>
            <Link href="/gtm-agencies-milan" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Milan</h3>
              <p className="text-white/60">Italy's business capital with design and fashion expertise.</p>
            </Link>
            <Link href="/gtm-agencies-amsterdam" className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400">Amsterdam</h3>
              <p className="text-white/60">Netherlands tech hub with international outlook.</p>
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Build Your German Market GTM Strategy</h2>
          <p className="text-xl text-white/90 mb-10">Create an engineering-driven go-to-market strategy for Germany and DACH.</p>
          <Link href="/planner" className="inline-flex px-12 py-6 text-xl font-black rounded-xl bg-black text-white hover:bg-gray-900">
            Start Free Strategy Planner
          </Link>
        </div>
      </section>
    </div>
  )
}
