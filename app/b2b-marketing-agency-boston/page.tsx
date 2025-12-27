import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Boston 2025 | Best Boston B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in Boston. Compare top Boston B2B marketing consultancies for biotech, healthcare tech, education technology, and enterprise software.',
  keywords: 'B2B marketing agency Boston, B2B marketing Boston, healthcare B2B marketing, biotech marketing agency, education technology marketing',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-boston'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a Boston B2B marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Boston agencies bring specialized expertise in life sciences, healthcare technology, and regulated industries. They understand complex sales cycles, scientific marketing, FDA compliance, and marketing to sophisticated medical and research buyers. The city's academic ecosystem provides access to thought leaders who validate technical messaging and provide credibility to B2B campaigns."
      }
    },
    {
      "@type": "Question",
      "name": "How much do B2B marketing agencies in Boston charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Boston B2B marketing agencies typically charge $20,000-$40,000+ per month for comprehensive retainers. Project fees range from $50,000-$200,000+ depending on scope and regulatory requirements. Life sciences and healthcare campaigns command premium rates given specialized compliance expertise and scientific content requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Boston B2B marketing agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Boston agencies specialize in biotech, life sciences, healthcare IT, medical devices, education technology, and enterprise software for regulated industries. They excel at marketing to hospital systems, research institutions, pharmaceutical companies, and academic medical centers with complex buying processes."
      }
    },
    {
      "@type": "Question",
      "name": "Do Boston agencies work with companies outside the Northeast?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most Boston B2B agencies serve national and global clients, particularly in healthcare and life sciences regardless of location. Many specialize in helping companies navigate FDA regulations, clinical research promotion, and marketing to healthcare systems nationwide. They're valuable for any company targeting the healthcare and biotech ecosystem."
      }
    }
  ]
}

export default async function B2BMarketingAgencyBostonPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Boston')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 12000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"B2B Marketing Agencies Boston","url":"https://gtm.quest/b2b-marketing-agency-boston"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Boston</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&q=80" alt="B2B marketing agencies Boston - Boston waterfront and skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Boston, Massachusetts</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>B2B Marketing Agencies Boston</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Boston—verified experts in healthcare, biotech, and enterprise technology.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Boston Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">${Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">B2B Marketing Boston: Healthcare, Biotech & EdTech Hub</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Boston anchors the <a href="https://en.wikipedia.org/wiki/Massachusetts_Biotechnology_Council" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">world's leading life sciences cluster</a> with over 1,000 biotech companies concentrated along the Route 128 corridor and Cambridge Innovation District. The <a href="https://en.wikipedia.org/wiki/Economy_of_Boston" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Boston metropolitan economy</a> generates $560 billion in GDP, driven by healthcare technology, biotech, financial services, higher education, and enterprise software serving these highly regulated industries.
            </p>
            <p>
              Boston's B2B marketing landscape reflects the city's academic rigor and scientific depth. From <a href="https://www.massbio.org/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">MassBio member companies</a> to healthcare IT startups, B2B buyers expect agencies who can translate complex scientific and clinical concepts into compelling value propositions. The city's agencies understand FDA compliance for medical device marketing, IRB requirements for clinical research promotion, and the sophisticated buying committees at academic medical centers and pharmaceutical giants like Pfizer and Moderna.
            </p>
            <p>
              The best Boston B2B marketing agencies bring deep expertise in <a href="https://www.healthcareitnews.com/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">healthcare IT marketing</a>, life sciences tools, medical devices, clinical research technology, and education technology. With connections to Harvard, MIT, and teaching hospitals like Mass General, Boston agencies access thought leaders who validate technical messaging. They excel at scientific content marketing, regulatory-compliant campaigns, and account-based programs targeting hospital systems and research institutions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Services in Boston</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Specialized marketing capabilities for Boston's life sciences and healthcare ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-white mb-4">Life Sciences Marketing</h3>
              <p className="text-white/70 text-lg">Scientific content, clinical messaging, and regulatory-compliant campaigns for biotech and pharmaceutical companies.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-white mb-4">Healthcare IT</h3>
              <p className="text-white/70 text-lg">Marketing for EHR, clinical decision support, telehealth, and healthcare technology platforms targeting hospital systems.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-white mb-4">Education Technology</h3>
              <p className="text-white/70 text-lg">EdTech marketing for learning platforms, institutional software, and academic technology serving K-12 and higher education.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise ABM</h3>
              <p className="text-white/70 text-lg">Account-based marketing for hospital systems, academic medical centers, and large healthcare organizations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in Boston B2B</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Boston's innovation ecosystem creates opportunities across healthcare, education, and enterprise sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-2xl font-bold text-white mb-4">Biotech & Pharma</h3>
              <p className="text-white/70 text-lg">Drug development, diagnostics, research tools, and pharmaceutical companies in the Cambridge biotech cluster.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Medical Devices</h3>
              <p className="text-white/70 text-lg">Medical equipment, surgical devices, and diagnostic technology companies requiring FDA-compliant marketing.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-white mb-4">EdTech</h3>
              <p className="text-white/70 text-lg">Learning management, assessment platforms, and institutional technology for education markets.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Software</h3>
              <p className="text-white/70 text-lg">B2B software for regulated industries including healthcare, financial services, and life sciences.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose a Boston B2B Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">Regulatory Expertise</h3>
              <p className="text-xl text-white/70 leading-relaxed">For healthcare and life sciences companies, prioritize agencies with FDA, HIPAA, and clinical research compliance experience. Ask about their process for legal and regulatory review of marketing materials and claims substantiation.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Scientific Credibility</h3>
              <p className="text-xl text-white/70 leading-relaxed">Evaluate agencies' ability to translate complex scientific concepts for multiple audiences—from researchers to clinicians to hospital administrators. Look for teams with scientific backgrounds who can credibly engage with technical stakeholders.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">Healthcare Relationships</h3>
              <p className="text-xl text-white/70 leading-relaxed">Boston agencies often have deep relationships with hospital systems, research institutions, and academic medical centers. Assess their network and understanding of complex healthcare buying processes and stakeholder dynamics.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies in Boston</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving Boston and the Northeast.</p>
        </div>
        <div className="w-full">
          {agencies.map((agency, i) => (
            <AgencyCard
              key={agency.slug}
              rank={i + 1}
              name={agency.name}
              tagline={(agency as any).b2b_description || agency.description}
              description={[(agency as any).b2b_description || agency.description]}
              bestFor={agency.specializations || []}
              keyServices={(agency as any).key_services || agency.specializations || []}
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
            <Link href="/b2b-marketing-agency-new-york" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🗽</span>
              <span className="text-white font-semibold">New York</span>
            </Link>
            <Link href="/b2b-marketing-agency-san-francisco" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🌉</span>
              <span className="text-white font-semibold">San Francisco</span>
            </Link>
            <Link href="/b2b-marketing-agency-chicago" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🏙️</span>
              <span className="text-white font-semibold">Chicago</span>
            </Link>
            <Link href="/b2b-marketing-agency-philadelphia" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🔔</span>
              <span className="text-white font-semibold">Philadelphia</span>
            </Link>
            <Link href="/b2b-marketing-agency-washington-dc" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🏛️</span>
              <span className="text-white font-semibold">Washington DC</span>
            </Link>
            <Link href="/gtm-agencies-boston" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🚀</span>
              <span className="text-white font-semibold">GTM Boston</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">B2B Marketing Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/planner" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">GTM Planner</h3>
              <p className="text-white/60">Build your go-to-market strategy with our AI-powered planning tool.</p>
            </Link>
            <Link href="/best-gtm-agencies" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">All Agencies</h3>
              <p className="text-white/60">Browse our complete directory of verified agencies worldwide.</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">B2B Marketing US</h3>
              <p className="text-white/60">Explore B2B marketing agencies across the United States.</p>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Boston B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Boston and Northeast markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
