import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'GTM Agencies Seattle 2025 | Top Go-To-Market Agencies Seattle',
  description: 'Find the best GTM agencies in Seattle. Compare top Seattle go-to-market consultancies for cloud computing, enterprise software, and Pacific Northwest tech.',
  keywords: 'GTM agency Seattle, go-to-market agencies Seattle, GTM consultants Seattle, product launch agency Seattle, enterprise GTM Seattle',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-seattle'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a Seattle GTM agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seattle GTM agencies bring world-class expertise in cloud computing, enterprise software, and B2B technology marketing. Home to Microsoft, Amazon, and hundreds of tech companies, Seattle agencies understand enterprise sales cycles, developer marketing, and the sophisticated buyer journeys of large technology purchases. They combine technical credibility with practical go-to-market execution."
      }
    },
    {
      "@type": "Question",
      "name": "How much do GTM agencies in Seattle charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seattle GTM agencies typically charge $15,000-$40,000+ per month for comprehensive retainers. Project fees range from $50,000-$175,000+ depending on scope and technical complexity. Enterprise cloud and infrastructure marketing often command premium rates given specialized technical expertise requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Seattle GTM agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seattle agencies specialize in cloud computing, enterprise SaaS, developer tools, e-commerce infrastructure, gaming, and aerospace technology. The city's concentration of Microsoft, Amazon, and their ecosystems creates deep expertise in enterprise technology marketing, cloud services, and platform-based go-to-market strategies."
      }
    },
    {
      "@type": "Question",
      "name": "Do Seattle GTM agencies work with companies outside Washington?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most Seattle GTM agencies serve national and global clients. Seattle's position as a major tech hub means agencies regularly work with technology companies worldwide. They're particularly valuable for companies targeting enterprise IT buyers, launching cloud services, or marketing to developer audiences."
      }
    }
  ]
}

export default async function GTMAgenciesSeattlePage() {
  const agencies = await getAgenciesForLocation('Seattle')
  const stats = await getLocationStats('Seattle')

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"GTM Agencies Seattle","url":"https://gtm.quest/gtm-agencies-seattle"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' '}/{' '}
            <Link href="/best-gtm-agencies" className="hover:text-white transition-colors">GTM Agencies</Link>
            {' '}/{' '}
            <Link href="/gtm-agencies-us" className="hover:text-white transition-colors">US</Link>
            {' '}/{' '}
            <span className="text-white">Seattle</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=1920&q=80" alt="GTM agencies Seattle - Seattle skyline with Space Needle" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Seattle, Washington</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>GTM Agencies<br/>in Seattle</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {stats.totalAgencies} verified go-to-market agencies serving Seattle's cloud computing, enterprise software, and tech ecosystem.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{stats.totalAgencies}</div><div className="text-white/70 text-lg">Seattle Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">${Math.round(stats.avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">Cloud</div><div className="text-white/70 text-lg">Expertise</div></div>
            <div><div className="text-6xl font-black text-white mb-3">PST</div><div className="text-white/70 text-lg">Time Zone</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose a Seattle GTM Agency?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Seattle stands as a global powerhouse in <a href="https://en.wikipedia.org/wiki/Economy_of_Seattle" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">enterprise technology and cloud computing</a>. As home to Microsoft, Amazon, and their sprawling ecosystems, the Seattle metro area generates over $450 billion in GDP and hosts thousands of technology companies. From South Lake Union to the Eastside tech corridor, Seattle's agencies operate at the heart of enterprise software innovation.
            </p>
            <p>
              Seattle GTM agencies bring unmatched expertise in <a href="https://azure.microsoft.com/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">cloud services</a>, enterprise software, and developer marketing. They understand complex technology sales cycles, multi-stakeholder IT purchasing decisions, and the technical credibility required to market to developers and IT leaders. Seattle's agencies excel at translating sophisticated technical capabilities into compelling business value propositions that resonate with enterprise buyers.
            </p>
            <p>
              The best Seattle GTM agencies serve cloud infrastructure companies, enterprise SaaS vendors, developer tools startups, and B2B technology firms. They bring deep connections to Microsoft and Amazon partner ecosystems, understand platform-based go-to-market strategies, and excel at <a href="https://www.gartner.com/en/sales/topics/enterprise-selling" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">enterprise demand generation</a>. Seattle's practical, engineering-minded culture means agencies prioritize measurable results and data-driven marketing approaches.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Services in Seattle</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Go-to-market capabilities for Seattle's enterprise technology ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Market Strategy</h3>
              <p className="text-white/70 text-lg">Comprehensive GTM planning for cloud services, enterprise software, and B2B technology companies.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Product Launch</h3>
              <p className="text-white/70 text-lg">Technical product launches targeting enterprise IT buyers, developers, and technology decision-makers.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Developer Marketing</h3>
              <p className="text-white/70 text-lg">DevRel-informed marketing strategies, technical content, and developer community building.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise ABM</h3>
              <p className="text-white/70 text-lg">Account-based marketing for Fortune 500 technology buyers and complex enterprise sales cycles.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in Seattle</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Seattle's tech ecosystem spans cloud, enterprise software, and emerging technologies.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Computing</h3>
              <p className="text-white/70 text-lg">AWS, Azure ecosystems, cloud infrastructure, and the companies building on these platforms.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Software</h3>
              <p className="text-white/70 text-lg">B2B SaaS, productivity tools, and enterprise applications serving large organizations.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">E-commerce Tech</h3>
              <p className="text-white/70 text-lg">E-commerce infrastructure, marketplace technology, and retail tech innovation from Amazon's influence.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Gaming & Interactive</h3>
              <p className="text-white/70 text-lg">Game studios, gaming platforms, and interactive entertainment from Seattle's gaming heritage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose a Seattle GTM Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">Technical Credibility</h3>
              <p className="text-xl text-white/70 leading-relaxed">Prioritize agencies with genuine technical understanding. Seattle's enterprise buyers expect marketing that demonstrates deep product knowledge—look for agencies with technical team members who can engage authentically with developer and IT audiences.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Enterprise Experience</h3>
              <p className="text-xl text-white/70 leading-relaxed">Evaluate agencies' track record with enterprise technology sales. Seattle agencies should understand complex buying committees, long sales cycles, and the multi-touch campaigns required to influence enterprise technology purchases.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">Ecosystem Knowledge</h3>
              <p className="text-xl text-white/70 leading-relaxed">Look for agencies with connections to Microsoft and Amazon ecosystems. The best Seattle agencies understand platform partnerships, marketplace strategies, and how to leverage these ecosystems for go-to-market acceleration.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Agencies in Seattle</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{stats.totalAgencies} verified agencies serving Seattle and the Pacific Northwest.</p>
        </div>
        <div className="w-full">
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
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-12 leading-tight">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">{faq.name}</h3>
                <p className="text-white/70 text-lg leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">Explore Related Markets</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/gtm-agencies-san-francisco" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">San Francisco</span>
            </Link>
            <Link href="/gtm-agencies-new-york" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">New York</span>
            </Link>
            <Link href="/gtm-agencies-austin" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">Austin</span>
            </Link>
            <Link href="/gtm-agencies-boston" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">Boston</span>
            </Link>
            <Link href="/gtm-agencies-us" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">US (All)</span>
            </Link>
            <Link href="/b2b-marketing-agency-seattle" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">B2B Seattle</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">GTM Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/planner" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">GTM Planner</h3>
              <p className="text-white/60">Build your go-to-market strategy with our AI-powered planning tool.</p>
            </Link>
            <Link href="/best-gtm-agencies" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">All Agencies</h3>
              <p className="text-white/60">Browse our complete directory of verified GTM agencies worldwide.</p>
            </Link>
            <Link href="/gtm-agencies-us" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">GTM Agencies US</h3>
              <p className="text-white/60">Explore go-to-market agencies across the United States.</p>
            </Link>
            <Link href="/b2b-gtm-strategy" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">B2B GTM Strategy</h3>
              <p className="text-white/60">Learn about B2B go-to-market strategy frameworks.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Seattle GTM Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a go-to-market strategy for Seattle and enterprise technology markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
