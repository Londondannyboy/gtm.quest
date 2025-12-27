import { Metadata } from 'next'
import Link from 'next/link'
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies'
import { AgencyCard } from '@/components/AgencyCard'

export const metadata: Metadata = {
  title: 'GTM Agencies Los Angeles 2025 | Top Go-To-Market Agencies LA',
  description: 'Find the best GTM agencies in Los Angeles. Compare top LA go-to-market consultancies for entertainment tech, media, and Southern California markets.',
  keywords: 'GTM agency Los Angeles, go-to-market agencies LA, GTM consultants Hollywood, LA tech GTM, entertainment marketing agency',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-los-angeles'
  }
}

export const revalidate = 3600

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose a Los Angeles GTM agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LA GTM agencies bring unique expertise in entertainment technology, media, consumer brands, and creative marketing. They understand the intersection of technology and entertainment, excel at brand storytelling, and have deep connections to Hollywood studios, streaming platforms, and the creator economy. Los Angeles agencies combine creative excellence with tech marketing sophistication."
      }
    },
    {
      "@type": "Question",
      "name": "How much do GTM agencies in Los Angeles charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los Angeles GTM agencies typically charge $15,000-$45,000+ per month for comprehensive retainers. Project fees range from $50,000-$200,000+ depending on scope and creative requirements. Entertainment and media campaigns often command premium rates given specialized expertise and production capabilities."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do LA GTM agencies specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LA agencies specialize in entertainment technology, streaming services, gaming, creator economy, consumer brands, and media tech. The city's unique position at the intersection of entertainment and technology creates expertise in content marketing, influencer strategies, and brand-building campaigns that resonate with both B2B and consumer audiences."
      }
    },
    {
      "@type": "Question",
      "name": "Do LA agencies work with companies outside California?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most LA GTM agencies serve national and global clients. Los Angeles' position as the entertainment capital means agencies regularly work with media and tech companies worldwide. They're particularly valuable for companies in entertainment tech, gaming, streaming, or any business requiring sophisticated brand storytelling and creative execution."
      }
    }
  ]
}

export default async function GTMAgenciesLosAngelesPage() {
  const agencies = await getAgenciesForLocation('Los Angeles')
  const stats = await getLocationStats('Los Angeles')

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"GTM Agencies Los Angeles","url":"https://gtm.quest/gtm-agencies-los-angeles"})}} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' '}/{' '}
            <Link href="/best-gtm-agencies" className="hover:text-white transition-colors">GTM Agencies</Link>
            {' '}/{' '}
            <Link href="/gtm-agencies-us" className="hover:text-white transition-colors">US</Link>
            {' '}/{' '}
            <span className="text-white">Los Angeles</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=1920&q=80" alt="GTM agencies Los Angeles - LA skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Los Angeles, California</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{fontWeight: 900}}>GTM Agencies<br/>in Los Angeles</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {stats.totalAgencies} verified go-to-market agencies serving LA's entertainment tech, media, and creative industries.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{stats.totalAgencies}</div><div className="text-white/70 text-lg">LA Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">${Math.round(stats.avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">Media</div><div className="text-white/70 text-lg">Tech Hub</div></div>
            <div><div className="text-6xl font-black text-white mb-3">PST</div><div className="text-white/70 text-lg">Time Zone</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose a Los Angeles GTM Agency?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Los Angeles stands at the unique intersection of <a href="https://en.wikipedia.org/wiki/Silicon_Beach" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">technology and entertainment</a>. The region's economy spans Hollywood studios, streaming giants, gaming companies, and a thriving tech scene stretching from Silicon Beach to downtown. With over $1 trillion in GDP, the <a href="https://en.wikipedia.org/wiki/Economy_of_Greater_Los_Angeles" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Greater Los Angeles economy</a> rivals many countries, creating diverse opportunities for B2B and consumer tech companies alike.
            </p>
            <p>
              LA GTM agencies bring creative excellence that's hard to match elsewhere. Drawing from the city's entertainment heritage, they excel at brand storytelling, content marketing, and campaigns that capture attention in crowded markets. The city's agencies understand how to leverage <a href="https://www.businessinsider.com/creator-economy-market-size-2023" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">the creator economy</a>, influencer marketing, and video-first strategies that resonate with modern audiences. This creative DNA combines with tech marketing sophistication to deliver campaigns that perform.
            </p>
            <p>
              The best Los Angeles GTM agencies serve entertainment tech companies, streaming platforms, gaming studios, consumer brands, and media technology firms. They bring connections to Hollywood studios, talent agencies, and media companies that open doors for strategic partnerships. LA's agencies excel at launches requiring cultural relevance, brand building, and the kind of creative firepower that entertainment companies expect from their marketing partners.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Services in Los Angeles</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">Go-to-market capabilities for LA's entertainment and media tech ecosystem.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Market Strategy</h3>
              <p className="text-white/70 text-lg">GTM planning for entertainment tech, streaming services, and consumer brands entering competitive markets.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Brand Launch</h3>
              <p className="text-white/70 text-lg">Creative-led brand launches with Hollywood-quality storytelling and cultural positioning.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Content Marketing</h3>
              <p className="text-white/70 text-lg">Video-first content strategies, creator partnerships, and entertainment-grade production.</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Influencer Strategy</h3>
              <p className="text-white/70 text-lg">Creator economy expertise and influencer campaigns leveraging LA's talent ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Key Industries in Los Angeles</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-4xl">LA's economy spans entertainment, tech, and creative industries.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Entertainment Tech</h3>
              <p className="text-white/70 text-lg">Streaming platforms, production technology, and the intersection of Hollywood and Silicon Beach.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Gaming</h3>
              <p className="text-white/70 text-lg">Game studios, esports, gaming platforms, and the growing interactive entertainment sector.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Consumer Tech</h3>
              <p className="text-white/70 text-lg">D2C brands, marketplaces, and consumer apps headquartered in Southern California.</p>
            </div>
            <div className="bg-black border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Creator Economy</h3>
              <p className="text-white/70 text-lg">Influencer platforms, creator tools, and the infrastructure powering content creators.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">How to Choose an LA GTM Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">01</div>
              <h3 className="text-3xl font-bold text-white mb-4">Creative Capability</h3>
              <p className="text-xl text-white/70 leading-relaxed">Prioritize agencies with strong creative portfolios. LA's entertainment heritage sets high creative standards—look for agencies who can deliver campaigns with the production quality and storytelling that competitive markets demand.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">02</div>
              <h3 className="text-3xl font-bold text-white mb-4">Industry Connections</h3>
              <p className="text-xl text-white/70 leading-relaxed">Evaluate agencies' relationships with studios, platforms, and media companies. LA's tight-knit entertainment ecosystem means the best agencies bring connections that accelerate partnerships and distribution opportunities.</p>
            </div>
            <div>
              <div className="text-8xl font-black text-white/20 mb-6">03</div>
              <h3 className="text-3xl font-bold text-white mb-4">Cultural Relevance</h3>
              <p className="text-xl text-white/70 leading-relaxed">Look for agencies who understand cultural trends and can position brands authentically. LA agencies should excel at campaigns that resonate with modern audiences and leverage the city's cultural influence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Agencies in Los Angeles</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{stats.totalAgencies} verified agencies serving LA and Southern California.</p>
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
            <Link href="/gtm-agencies-seattle" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">Seattle</span>
            </Link>
            <Link href="/gtm-agencies-us" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">US (All)</span>
            </Link>
            <Link href="/b2b-marketing-agency-los-angeles" className="bg-black border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition-all">
              <span className="text-white font-semibold">B2B LA</span>
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

      <section className="bg-gradient-to-r from-purple-600 to-pink-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your LA GTM Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a go-to-market strategy for Los Angeles and entertainment markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  )
}
