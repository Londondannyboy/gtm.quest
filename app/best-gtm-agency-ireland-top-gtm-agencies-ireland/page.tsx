import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'Best GTM Agency Ireland 2025 | GTM Quest',
  description: 'Discover the best go-to-market agencies Ireland has to offer. Compare top Irish GTM consultancies with verified credentials and specialized expertise.',
  keywords: 'best GTM agency Ireland, top go-to-market agencies Dublin, GTM consultants Ireland, product launch agency Dublin',
  alternates: {
    canonical: 'https://gtm.quest/best-gtm-agency-ireland-top-gtm-agencies-ireland'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes Ireland unique for GTM strategy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ireland offers unique GTM advantages: English-language EU market access post-Brexit, favorable 12.5% corporate tax rate attracting multinational headquarters (Google, Microsoft, Facebook, Apple all have EMEA HQs in Dublin), exceptional tech talent density with 120,000+ tech workers, and timezone bridging US East Coast and European working hours enabling efficient transatlantic coordination."
      }
    },
    {
      "@type": "Question",
      "name": "How much do GTM agencies in Ireland typically charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Irish GTM agencies typically charge €8,000-€25,000 per month for comprehensive programs, with project-based engagements ranging €15,000-€75,000. Dublin's concentration of multinational tech companies means agencies often benchmark against US pricing while offering European cost advantages—typically 20-30% lower than comparable US agencies."
      }
    },
    {
      "@type": "Question",
      "name": "Can Irish GTM agencies help with US market entry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, transatlantic GTM expertise is Ireland's core strength. Dublin agencies excel at launching European companies into US markets and vice versa, leveraging Ireland's unique position as the English-speaking EU gateway. Many agencies have direct US partnerships and understand both regulatory frameworks (GDPR, SOC2, HIPAA) required for enterprise software success."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do Irish GTM agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Irish GTM agencies specialize in SaaS/enterprise software (reflecting Dublin's tech hub status), fintech and payments (Ireland hosts major financial services operations), life sciences and medtech (strong pharma cluster), and cybersecurity (growing cluster around government and enterprise needs). Many also excel in PLG strategies given Ireland's startup ecosystem maturity."
      }
    }
  ]
}

export default async function GTMAgencyIrelandPage() {
  const agencies = await getAgenciesByCategory('GTM Agency', 'Ireland')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"Best GTM Agencies Ireland","url":"https://gtm.quest/best-gtm-agency-ireland-top-gtm-agencies-ireland"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">GTM Ireland</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?w=1920&q=80" alt="Best GTM agency Ireland - Dublin tech district" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Ireland</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight:900}}>Best GTM Agency Ireland 2025</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} go-to-market agencies Ireland has to offer—verified experts in product launches and European expansion.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">€{Math.round(avgMinBudget/1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">GTM Agencies Ireland: Transatlantic Launch Hub</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Ireland's technology sector contributes 13% to GDP with over €48 billion economic impact, positioning <a href="https://connexusrecruit.com/the-rise-of-irelands-tech-sector-tips-for-landing-your-dream-role/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Dublin's "Silicon Docks" as Europe's transatlantic technology gateway</a> hosting Google, Microsoft, Facebook, and over 2,200 tech startups employing 120,000+ people. With <a href="https://tech.eu/2025/03/07/innovation-in-action-irelands-tech-ecosystem/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Irish tech companies raising €400 million in 2024</a> and venture capital surging to $668 million in Q1 2025, Ireland offers unique GTM advantages: English-language EU market access post-Brexit, favorable corporate tax environment attracting multinational headquarters, and <a href="https://news.microsoft.com/europe/2025/03/13/ai-expected-to-add-e250bn-to-irelands-economy-by-2035-as-ai-use-surges-to-91-according-to-a-report-by-microsoft-and-trinity-college-dublin/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">exceptional AI adoption (91% in 2025, nearly doubling from 49% in 2024)</a> projecting €250 billion GDP contribution by 2035.
            </p>
            <p>
              Irish business culture uniquely blends American-style direct communication with European relationship-building, creating ideal conditions for B2B technology launches targeting both continents. Ireland's relatively small 5 million population forces GTM sophistication—companies cannot succeed domestically alone and must architect international expansion from day one, producing exceptional expertise in transatlantic product launches, regulatory navigation across US and EU frameworks, and capital-efficient scaling strategies. Dublin's timezone bridges US East Coast and European working hours, enabling efficient coordination across Atlantic markets, while Ireland's EU membership provides <a href="https://www.dataprotection.ie/en/organisations/know-your-obligations/international-transfers" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">GDPR-compliant data residency</a> and regulatory advantages for European enterprise sales that UK-based companies lost post-Brexit.
            </p>
            <p>
              Top GTM agencies serving Ireland provide critical transatlantic capabilities: deep expertise launching B2B technology products from Dublin into both US and European markets simultaneously; proven frameworks for capital-efficient GTM execution where Ireland's limited domestic market demands precise targeting and rapid international scaling; sophisticated understanding of US versus EU buyer behaviors, procurement processes, and regulatory requirements that heavily influence enterprise software adoption patterns; and strategic positioning expertise leveraging Ireland's unique advantages including English-language operations, EU market access, favorable tax environment, and concentration of multinational technology companies creating world-class talent density. They understand how to architect product launches that validate in Irish market before rapid US and European expansion, build partnerships with Dublin-based technology vendors and system integrators, and execute GTM strategies balancing Ireland's startup-friendly culture with the relationship-driven enterprise sales approaches required for broader European success.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Services for Irish Markets</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Specialized go-to-market capabilities for Ireland's transatlantic technology ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🇺🇸🇪🇺</div>
              <h3 className="text-2xl font-bold text-white mb-4">Transatlantic Launch</h3>
              <p className="text-white/70 text-lg">Simultaneous US and European market entry leveraging Ireland's unique bridging position and timezone advantages.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Sales</h3>
              <p className="text-white/70 text-lg">Complex B2B sales strategies for Dublin's multinational ecosystem including Google, Microsoft, and Salesforce partner networks.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">PLG Strategy</h3>
              <p className="text-white/70 text-lg">Product-led growth execution for SaaS companies scaling from Ireland's mature startup ecosystem to global markets.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-4">Compliance GTM</h3>
              <p className="text-white/70 text-lg">GDPR, SOC2, and regulatory-compliant positioning for enterprise software targeting both EU and US markets.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries for GTM in Ireland</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Ireland's technology-driven economy creates exceptional GTM opportunities across high-growth sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Software</h3>
              <p className="text-white/70 text-lg">SaaS, cloud infrastructure, and B2B platforms—Ireland hosts EMEA headquarters for most major enterprise software vendors.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech & Payments</h3>
              <p className="text-white/70 text-lg">Payment processing, banking-as-a-service, and regtech—Dublin's financial services cluster includes Stripe, PayPal, and major banks.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Life Sciences</h3>
              <p className="text-white/70 text-lg">Pharma, medtech, and biotech—Ireland's life sciences sector generates €80+ billion exports with 9 of top 10 global pharma companies present.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-white/70 text-lg">Security software, identity management, and compliance tools—growing cluster serving government, financial services, and enterprise markets.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose a GTM Agency in Ireland</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">Transatlantic Experience</h3>
              <p className="text-xl text-white/70 leading-relaxed">Prioritize agencies with proven track records launching products into both US and European markets from Ireland. They should understand regulatory differences (GDPR vs US privacy laws, SOC2 requirements), buyer behavior variations, and how to leverage Dublin's unique positioning as the English-speaking EU gateway for multinational expansion.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Tech Ecosystem Networks</h3>
              <p className="text-xl text-white/70 leading-relaxed">Dublin's concentration of global tech companies creates unique partnership opportunities. Evaluate agencies' connections to multinational tech vendors (AWS, Google Cloud, Microsoft), Enterprise Ireland and IDA networks, and Dublin's venture capital community including Frontline Ventures, Atlantic Bridge, and Delta Partners.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">Capital-Efficient Scaling</h3>
              <p className="text-xl text-white/70 leading-relaxed">Ireland's small domestic market demands agencies skilled in rapid international expansion with limited resources. Look for proven frameworks achieving European and US market traction without requiring massive funding rounds—essential for Irish startups competing against better-capitalized US and UK competitors.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">The Best GTM Agencies Ireland Has to Offer</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified go-to-market agencies.</p>
        </div>
        <div className="w-full">
          {agencies.map((agency, i) => (
            <AgencyCard
              key={agency.slug}
              rank={i+1}
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
          <h2 className="text-4xl font-black text-white mb-12">Explore GTM Agencies in Related Markets</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/best-gtm-agency-uk-top-gtm-agencies-uk" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇬🇧</span>
              <span className="text-white font-semibold">UK</span>
            </Link>
            <Link href="/best-gtm-agency-us-top-gtm-agencies-us" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇺🇸</span>
              <span className="text-white font-semibold">United States</span>
            </Link>
            <Link href="/best-gtm-agency-germany-top-gtm-agencies-germany" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇩🇪</span>
              <span className="text-white font-semibold">Germany</span>
            </Link>
            <Link href="/best-gtm-agency-netherlands-top-gtm-agencies-netherlands" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇳🇱</span>
              <span className="text-white font-semibold">Netherlands</span>
            </Link>
            <Link href="/best-gtm-agency-france-top-gtm-agencies-france" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇫🇷</span>
              <span className="text-white font-semibold">France</span>
            </Link>
            <Link href="/best-gtm-agency-canada-top-gtm-agencies-canada" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🇨🇦</span>
              <span className="text-white font-semibold">Canada</span>
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
              <h3 className="text-xl font-bold text-white mb-2">All GTM Agencies</h3>
              <p className="text-white/60">Browse our complete directory of verified GTM agencies worldwide.</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-ireland-top-b2b-marketing-agencies-ireland" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">B2B Marketing Ireland</h3>
              <p className="text-white/60">Explore B2B marketing agencies serving Irish markets.</p>
            </Link>
            <Link href="/gtm-consulting" className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">GTM Consulting</h3>
              <p className="text-white/60">Learn about go-to-market consulting services and methodologies.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your GTM Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive strategy for Irish and European markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
