import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesByCategory } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'B2B Marketing Agency Los Angeles 2025 | Best LA B2B Marketing Agencies',
  description: 'Discover the best B2B marketing agencies in Los Angeles. Compare top LA B2B marketing consultancies for entertainment tech, media, gaming, and creative industries.',
  keywords: 'B2B marketing agency Los Angeles, B2B marketing LA, best B2B marketing Hollywood, top B2B marketing agencies Silicon Beach',
  alternates: {
    canonical: 'https://gtm.quest/b2b-marketing-agency-los-angeles'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a Los Angeles B2B marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LA agencies combine Hollywood-level creative production with performance marketing expertise. They excel at video marketing, brand storytelling, and campaigns for media tech, entertainment SaaS, gaming, and creative industries. Los Angeles' concentration of content production resources and creative talent produces marketing with unmatched production values and narrative depth."
      }
    },
    {
      "@type": "Question",
      "name": "How much do B2B marketing agencies in Los Angeles charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los Angeles B2B marketing agencies typically charge $15,000-$40,000+ per month for comprehensive retainers. Project fees range from $40,000-$200,000+ depending on creative production requirements and campaign scope. Video-heavy campaigns and entertainment industry projects command premium rates reflecting LA's specialized expertise."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do LA B2B marketing agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LA agencies specialize in entertainment technology, streaming platforms, gaming, media and advertising tech, creative software, and content production tools. Silicon Beach's tech ecosystem creates deep expertise in martech, adtech, and the complex B2B sales cycles serving Hollywood studios, production companies, and digital media platforms."
      }
    },
    {
      "@type": "Question",
      "name": "Do LA agencies work with companies outside Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most LA B2B agencies serve national and global clients. Los Angeles' position as the world's entertainment capital means agencies regularly work with media and tech companies worldwide. They're particularly valuable for companies targeting entertainment, gaming, and creative industry buyers or seeking premium video-driven marketing campaigns."
      }
    }
  ]
}

export default async function B2BMarketingAgencyLosAngelesPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Los Angeles')
  const totalAgencies = agencies.length
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 12000
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc }, {} as Record<string, number>)
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec)

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"B2B Marketing Agencies Los Angeles","url":"https://gtm.quest/b2b-marketing-agency-los-angeles"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing LA</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1534190239940-9ba8944ea261?w=1920&q=80" alt="B2B marketing agencies Los Angeles - LA skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Los Angeles, California</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>B2B Marketing Agencies LA</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {totalAgencies} top B2B marketing agencies serving Los Angeles—verified experts in entertainment tech, media, and creative industries.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">LA Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">${Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">B2B Marketing LA: Entertainment Tech & Creative Hub</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Los Angeles anchors the <a href="https://en.wikipedia.org/wiki/Economy_of_Los_Angeles" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">second-largest metropolitan economy in the United States with a GDP exceeding $1.1 trillion</a>, combining Hollywood's global entertainment dominance with <a href="https://en.wikipedia.org/wiki/Silicon_Beach" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">Silicon Beach's</a> rapidly growing technology sector. The region hosts major tech companies like Snap, Hulu, and SpaceX alongside thousands of B2B startups serving media technology, advertising technology, and content production markets.
            </p>
            <p>
              LA's B2B marketing landscape uniquely blends world-class creative production capabilities with data-driven performance marketing expertise. The city's agencies understand how to market to entertainment companies, streaming platforms, <a href="https://www.theesa.com/resources/economic-impact/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">gaming studios generating $100+ billion annually</a>, and the complex ecosystem of technology vendors serving media and advertising sectors. Hollywood's creative culture produces marketing campaigns with production values and storytelling depth that agencies in other markets simply cannot replicate.
            </p>
            <p>
              Los Angeles B2B marketing agencies excel at video marketing strategy, brand positioning for entertainment technology, influencer-driven B2B campaigns, and demand generation for creative software platforms. They bring deep expertise in martech, adtech, production tools, streaming infrastructure, and content creation platforms where LA companies dominate globally. With access to Hollywood-caliber production resources and performance marketing talent from major tech companies, LA agencies deliver campaigns that combine creative excellence with measurable pipeline impact.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Services in LA</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Creative-driven marketing capabilities for Los Angeles' entertainment and tech ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold text-white mb-4">Video Marketing</h3>
              <p className="text-white/70 text-lg">Hollywood-quality video production for B2B campaigns, product demos, and brand storytelling at scale.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Content Strategy</h3>
              <p className="text-white/70 text-lg">Narrative-driven content marketing for entertainment tech, streaming, and creative software companies.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Performance Marketing</h3>
              <p className="text-white/70 text-lg">Data-driven demand generation combining creative excellence with measurable pipeline results.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-white mb-4">Influencer B2B</h3>
              <p className="text-white/70 text-lg">B2B influencer partnerships leveraging LA's creator economy and industry thought leaders.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in LA B2B</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Los Angeles' entertainment and tech ecosystem creates opportunities across creative sectors.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-2xl font-bold text-white mb-4">Entertainment Tech</h3>
              <p className="text-white/70 text-lg">Streaming platforms, production technology, post-production software, and studio infrastructure.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-white mb-4">Gaming & Esports</h3>
              <p className="text-white/70 text-lg">Game development tools, publishing platforms, esports infrastructure, and gaming analytics.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📺</div>
              <h3 className="text-2xl font-bold text-white mb-4">Media & AdTech</h3>
              <p className="text-white/70 text-lg">Advertising technology, programmatic platforms, media measurement, and digital advertising tools.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-4">Creative Software</h3>
              <p className="text-white/70 text-lg">Design tools, video editing software, animation platforms, and creative collaboration tools.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose an LA B2B Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">Creative Portfolio</h3>
              <p className="text-xl text-white/70 leading-relaxed">Evaluate agencies' video production capabilities and creative portfolio. LA's entertainment heritage sets high creative standards—your agency should demonstrate Hollywood-quality production values and compelling visual storytelling across B2B campaigns.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Industry Expertise</h3>
              <p className="text-xl text-white/70 leading-relaxed">LA agencies often specialize in entertainment tech, gaming, media, or creative software verticals. Choose agencies with proven experience in your industry who understand buyer personas, competitive dynamics, and the unique B2B sales cycles in creative sectors.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">Performance Focus</h3>
              <p className="text-xl text-white/70 leading-relaxed">Ensure creative excellence translates to measurable results. The best LA agencies combine video-first creative capabilities with robust analytics, attribution, and demand generation expertise to deliver pipeline impact, not just beautiful campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies in Los Angeles</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies serving LA and Southern California.</p>
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
            <Link href="/b2b-marketing-agency-san-francisco" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🌉</span>
              <span className="text-white font-semibold">San Francisco</span>
            </Link>
            <Link href="/b2b-marketing-agency-new-york" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🗽</span>
              <span className="text-white font-semibold">New York</span>
            </Link>
            <Link href="/b2b-marketing-agency-seattle" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🌲</span>
              <span className="text-white font-semibold">Seattle</span>
            </Link>
            <Link href="/b2b-marketing-agency-austin" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🤠</span>
              <span className="text-white font-semibold">Austin</span>
            </Link>
            <Link href="/b2b-marketing-agency-chicago" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🏙️</span>
              <span className="text-white font-semibold">Chicago</span>
            </Link>
            <Link href="/gtm-agencies-los-angeles" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-3xl mb-2 block">🚀</span>
              <span className="text-white font-semibold">GTM LA</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your LA B2B Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a B2B marketing strategy for Los Angeles and Southern California markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
