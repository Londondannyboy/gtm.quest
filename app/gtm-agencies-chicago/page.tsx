import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'GTM Agencies Chicago 2025 | Top Go-To-Market Agencies Chicago',
  description: 'Find the best GTM agencies in Chicago. Compare top Chicago go-to-market consultancies for manufacturing, fintech, and enterprise B2B companies.',
  keywords: 'GTM agency Chicago, go-to-market agencies Chicago, GTM consultants Chicago, product launch agency Chicago, B2B GTM Chicago',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-chicago'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a Chicago GTM agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chicago GTM agencies bring deep expertise in manufacturing, industrial B2B, fintech, and enterprise software. They understand Midwest business culture, Fortune 500 procurement processes, and practical results-driven marketing approaches. Chicago's central location and diverse economy create agencies skilled at national rollouts and multi-industry campaigns."
      }
    },
    {
      "@type": "Question",
      "name": "How much do GTM agencies in Chicago charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chicago GTM agencies typically charge $12,000-$35,000+ per month for comprehensive retainers. Project fees range from $40,000-$150,000+ depending on scope and complexity. Chicago offers competitive rates compared to coastal cities while maintaining high quality and enterprise experience."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Chicago GTM agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chicago agencies specialize in manufacturing, industrial B2B, financial services, food and beverage, logistics, and enterprise SaaS. The city's diverse Fortune 500 presence and manufacturing heritage create expertise in complex B2B sales cycles and multi-stakeholder enterprise deals."
      }
    },
    {
      "@type": "Question",
      "name": "Do Chicago GTM agencies work with companies outside Illinois?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most Chicago GTM agencies serve national and global clients. Chicago's position as a major transportation and business hub means agencies regularly work with companies across the US. They're particularly valuable for national expansion and Midwest market penetration strategies."
      }
    }
  ]
}

export default async function GTMAgenciesChicagoPage() {
  const agencies = await getAgenciesForLocation('Chicago')
  const stats = await getLocationStats('Chicago')

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"GTM Agencies Chicago","url":"https://gtm.quest/gtm-agencies-chicago"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' '}/{' '}
            <Link href="/best-gtm-agencies" className="hover:text-white transition-colors">GTM Agencies</Link>
            {' '}/{' '}
            <Link href="/gtm-agencies-us" className="hover:text-white transition-colors">US</Link>
            {' '}/{' '}
            <span className="text-white">Chicago</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=1920&q=80" alt="GTM agencies Chicago - Chicago skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Chicago, Illinois</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>GTM Agencies<br/>in Chicago</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {stats.totalAgencies} verified go-to-market agencies serving Chicago's industrial, fintech, and enterprise B2B ecosystem.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{stats.totalAgencies}</div><div className="text-white/70 text-lg">Chicago Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">${Math.round(stats.avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">B2B</div><div className="text-white/70 text-lg">Focus</div></div>
            <div><div className="text-6xl font-black text-white mb-3">CST</div><div className="text-white/70 text-lg">Time Zone</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose a Chicago GTM Agency?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Chicago anchors the <a href="https://en.wikipedia.org/wiki/Economy_of_Chicago" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">third-largest metropolitan economy in the US</a> with over $770 billion in GDP. The city hosts 36 Fortune 500 headquarters—third most in America—spanning manufacturing, financial services, food production, and logistics. Chicago's central location makes it a natural hub for companies targeting national expansion and Midwest market penetration.
            </p>
            <p>
              Chicago GTM agencies reflect the city's practical, results-oriented business culture. They combine Midwest work ethic with sophisticated enterprise marketing capabilities. The city's agencies excel at <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">complex B2B sales cycles</a>, industrial marketing, and multi-stakeholder campaigns targeting manufacturing, distribution, and financial services buyers. Chicago's diverse economy means agencies develop versatility across industries rather than narrow specialization.
            </p>
            <p>
              The best Chicago GTM agencies offer enterprise capabilities at competitive rates compared to coastal cities. They understand the practical buying behaviors of Midwest decision-makers, bring deep experience with <a href="https://en.wikipedia.org/wiki/Chicago_Board_of_Trade" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">financial services marketing</a> from the city's trading heritage, and excel at manufacturing and industrial B2B campaigns. Chicago's position as a transportation hub also creates expertise in logistics, supply chain, and distribution company marketing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Services in Chicago</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Go-to-market capabilities for Chicago's enterprise and industrial ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Market Strategy</h3>
              <p className="text-white/70 text-lg">Comprehensive GTM planning for manufacturing, industrial, and enterprise companies entering new markets.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Product Launch</h3>
              <p className="text-white/70 text-lg">National rollout strategies leveraging Chicago's central location for efficient market coverage.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise ABM</h3>
              <p className="text-white/70 text-lg">Account-based marketing for Fortune 500 targets and complex multi-stakeholder B2B sales.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Demand Generation</h3>
              <p className="text-white/70 text-lg">Pipeline building and lead generation for industrial, manufacturing, and financial services companies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in Chicago</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Chicago's diverse economy spans manufacturing, finance, food, and logistics.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Manufacturing</h3>
              <p className="text-white/70 text-lg">Industrial equipment, machinery, and manufacturing companies with complex B2B sales processes.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Financial Services</h3>
              <p className="text-white/70 text-lg">Trading firms, fintech, insurance, and banking from CME Group to major financial institutions.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Food & Beverage</h3>
              <p className="text-white/70 text-lg">CPG giants, food processing, and restaurant brands headquartered in the Chicago area.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Logistics & Supply Chain</h3>
              <p className="text-white/70 text-lg">Transportation, logistics, and supply chain companies leveraging Chicago's hub position.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose a Chicago GTM Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">Industry Experience</h3>
              <p className="text-xl text-white/70 leading-relaxed">Prioritize agencies with experience in your specific vertical. Chicago's diverse economy means agencies often specialize in manufacturing, financial services, or food and beverage—choose one with relevant expertise.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Enterprise Capability</h3>
              <p className="text-xl text-white/70 leading-relaxed">Evaluate agencies' Fortune 500 experience and ability to handle complex enterprise sales cycles. Chicago's concentration of large companies means the best agencies understand sophisticated procurement processes.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">National Reach</h3>
              <p className="text-xl text-white/70 leading-relaxed">Look for agencies who leverage Chicago's central position for national campaigns. The best Chicago agencies excel at coast-to-coast rollouts and understand regional market differences across the US.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Agencies in Chicago</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{stats.totalAgencies} verified agencies serving Chicago and the Midwest.</p>
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
            <Link href="/gtm-agencies-new-york" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">New York</span>
            </Link>
            <Link href="/gtm-agencies-san-francisco" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">San Francisco</span>
            </Link>
            <Link href="/gtm-agencies-boston" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">Boston</span>
            </Link>
            <Link href="/gtm-agencies-austin" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">Austin</span>
            </Link>
            <Link href="/gtm-agencies-us" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">US (All)</span>
            </Link>
            <Link href="/b2b-marketing-agency-chicago" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">B2B Chicago</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Chicago GTM Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a go-to-market strategy for Chicago and Midwest markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
