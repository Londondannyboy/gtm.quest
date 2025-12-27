import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'GTM Agencies Boston 2025 | Top Go-To-Market Agencies Boston',
  description: 'Find the best GTM agencies in Boston. Compare top Boston go-to-market consultancies for biotech, healthcare tech, and enterprise software.',
  keywords: 'GTM agency Boston, go-to-market agencies Boston, GTM consultants Boston, product launch agency Boston, biotech GTM Boston',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-boston'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a Boston GTM agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Boston GTM agencies bring specialized expertise in life sciences, healthcare technology, and enterprise software. They understand complex regulatory environments, scientific marketing, and the sophisticated buying committees at hospitals, research institutions, and pharmaceutical companies. Boston's concentration of world-class universities and research centers creates unparalleled expertise in technical go-to-market strategies."
      }
    },
    {
      "@type": "Question",
      "name": "How much do GTM agencies in Boston charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Boston GTM agencies typically charge $15,000-$40,000+ per month for comprehensive retainers. Project fees range from $50,000-$200,000+ depending on scope and regulatory complexity. Life sciences and healthcare GTM campaigns command premium rates given specialized compliance and scientific messaging requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Boston GTM agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Boston agencies specialize in biotech, life sciences, healthcare IT, medical devices, clinical research technology, and enterprise SaaS. The city's ecosystem includes over 1,000 biotech companies, world-renowned hospitals, and leading research universities, creating deep expertise in regulated industry go-to-market strategies."
      }
    },
    {
      "@type": "Question",
      "name": "Do Boston GTM agencies work with companies outside Massachusetts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most Boston GTM agencies serve national and global clients. Boston's position as the world's leading life sciences hub means agencies regularly work with healthcare and biotech companies worldwide. They're particularly valuable for companies targeting hospital systems, research institutions, or launching regulated products."
      }
    }
  ]
}

export default async function GTMAgenciesBostonPage() {
  const agencies = await getAgenciesForLocation('Boston')
  const stats = await getLocationStats('Boston')

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"GTM Agencies Boston","url":"https://gtm.quest/gtm-agencies-boston"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' '}/{' '}
            <Link href="/best-gtm-agencies" className="hover:text-white transition-colors">GTM Agencies</Link>
            {' '}/{' '}
            <Link href="/gtm-agencies-us" className="hover:text-white transition-colors">US</Link>
            {' '}/{' '}
            <span className="text-white">Boston</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&q=80" alt="GTM agencies Boston - Boston skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Boston, Massachusetts</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>GTM Agencies<br/>in Boston</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {stats.totalAgencies} verified go-to-market agencies serving Boston's biotech, healthcare, and enterprise ecosystem.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{stats.totalAgencies}</div><div className="text-white/70 text-lg">Boston Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">${Math.round(stats.avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">Biotech</div><div className="text-white/70 text-lg">Hub</div></div>
            <div><div className="text-6xl font-black text-white mb-3">EST</div><div className="text-white/70 text-lg">Time Zone</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose a Boston GTM Agency?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Boston anchors the <a href="https://en.wikipedia.org/wiki/Massachusetts_Biotechnology_Council" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">world's leading life sciences cluster</a> with over 1,000 biotech companies concentrated along the Route 128 corridor and Cambridge Innovation District. The <a href="https://en.wikipedia.org/wiki/Economy_of_Boston" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Boston metropolitan economy</a> generates $560 billion in GDP, driven by healthcare technology, financial services, higher education, and enterprise software companies serving these regulated industries.
            </p>
            <p>
              Boston GTM agencies bring specialized expertise in complex, highly-regulated sales environments. They understand FDA compliance for medical device marketing, IRB requirements for clinical research promotion, and the sophisticated buying committees at academic medical centers and pharmaceutical companies. The city's agencies excel at translating deep scientific and technical concepts into compelling value propositions for clinical, research, and business stakeholders. Boston's academic ecosystem provides access to thought leaders and researchers who validate technical messaging.
            </p>
            <p>
              The best Boston GTM agencies combine life sciences domain expertise with proven <a href="https://www.hubspot.com/state-of-marketing" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">B2B marketing methodologies</a>. They help companies navigate FDA-compliant marketing, build credibility with KOLs, and execute account-based strategies targeting hospital systems and research institutions. With deep connections to Mass General, Dana-Farber, MIT, Harvard, and the region's venture capital community, Boston agencies understand the unique go-to-market requirements of companies serving demanding healthcare and life sciences markets.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Services in Boston</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Go-to-market capabilities for Boston's life sciences and enterprise ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Market Strategy</h3>
              <p className="text-white/70 text-lg">Comprehensive GTM planning for biotech, medtech, and healthcare companies entering new markets or launching products.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Product Launch</h3>
              <p className="text-white/70 text-lg">FDA-compliant launch strategies for medical devices, diagnostics, and healthcare technology products.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise ABM</h3>
              <p className="text-white/70 text-lg">Account-based marketing targeting hospital systems, research institutions, and pharmaceutical companies.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Sales Enablement</h3>
              <p className="text-white/70 text-lg">Scientific selling tools, clinical evidence materials, and sales training for complex healthcare sales.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in Boston</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Boston's innovation ecosystem spans healthcare, life sciences, and enterprise technology.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Biotech & Pharma</h3>
              <p className="text-white/70 text-lg">1,000+ biotech companies in Kendall Square and Route 128 corridor—world's densest life sciences cluster.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Healthcare IT</h3>
              <p className="text-white/70 text-lg">Leading healthcare software companies serving hospitals, payers, and clinical research organizations.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Medical Devices</h3>
              <p className="text-white/70 text-lg">Innovative medtech companies developing diagnostics, surgical tools, and connected health devices.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise SaaS</h3>
              <p className="text-white/70 text-lg">B2B software companies serving financial services, education, and regulated industry verticals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose a Boston GTM Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">Domain Expertise</h3>
              <p className="text-xl text-white/70 leading-relaxed">Prioritize agencies with deep life sciences or healthcare experience. Boston's regulated industries require agencies who understand FDA compliance, clinical evidence requirements, and the scientific rigor expected by healthcare buyers.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Technical Credibility</h3>
              <p className="text-xl text-white/70 leading-relaxed">Evaluate agencies' ability to translate complex science into compelling value propositions. The best Boston agencies have team members with scientific backgrounds who can engage credibly with clinical and research audiences.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">Ecosystem Connections</h3>
              <p className="text-xl text-white/70 leading-relaxed">Look for agencies with relationships across Boston's innovation ecosystem—hospitals, universities, VCs, and industry associations. These connections accelerate market access and provide validation opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Agencies in Boston</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{stats.totalAgencies} verified agencies serving Boston and the Northeast.</p>
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
            <Link href="/gtm-agencies-chicago" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">Chicago</span>
            </Link>
            <Link href="/gtm-agencies-london" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">London</span>
            </Link>
            <Link href="/gtm-agencies-us" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">US (All)</span>
            </Link>
            <Link href="/b2b-marketing-agency-boston" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">B2B Boston</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Boston GTM Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a go-to-market strategy for Boston's biotech and enterprise markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
