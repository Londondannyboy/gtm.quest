import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency UAE 2025 | Top Dubai B2B Marketing Agencies',
  description: 'Compare the best B2B marketing agencies in UAE for 2025. Expert Dubai agencies specializing in fintech, real estate, energy & Middle East market expansion.',
  keywords: 'best B2B marketing agency UAE, top B2B marketing agencies Dubai, B2B marketing UAE, Dubai B2B marketing consultancy, Abu Dhabi marketing agency',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-uae-top-b2b-marketing-agencies-uae'
  }
};

export const revalidate = 3600;

export default async function B2BMarketingAgencyUAEPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'UAE');
  const totalAgencies = agencies.length;
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 12000;
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc; }, {} as Record<string, number>);
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes UAE B2B marketing agencies unique?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UAE agencies operate at the crossroads of East and West, understanding both Western business practices and Middle Eastern relationship-based commerce. They excel at marketing to diverse audiences—Emirati government entities, multinational corporations, and regional enterprises spanning GCC countries. Dubai's position as a global trade hub means agencies understand logistics, finance, real estate, and technology B2B markets."
        }
      },
      {
        "@type": "Question",
        "name": "How much do B2B marketing agencies in UAE typically charge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UAE B2B marketing agencies typically charge AED 30,000-120,000 ($8,000-33,000) per month for retainer services. Project-based work ranges from AED 50,000-300,000 for comprehensive campaigns. Dubai agencies command premium rates due to the market's sophistication and international client base, while agencies in Abu Dhabi and Sharjah may offer competitive alternatives."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries do UAE B2B marketing agencies specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UAE agencies excel in financial services and fintech (DIFC and ADGM hubs), real estate and construction (mega-projects), logistics and trade (Jebel Ali, DP World), oil and gas (Abu Dhabi's energy sector), healthcare and pharmaceuticals, and government enterprise marketing. Dubai's free zones create specialized expertise across technology, media, and professional services."
        }
      },
      {
        "@type": "Question",
        "name": "Can UAE agencies help with GCC and MENA region B2B marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, UAE agencies are the natural hub for GCC (Saudi Arabia, Kuwait, Qatar, Bahrain, Oman) and broader MENA expansion. They understand Arabic-language marketing, Islamic business principles, and the relationship-driven commerce that defines regional B2B sales. Dubai serves as the operational headquarters for most companies targeting the Middle East."
        }
      }
    ]
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Best B2B Marketing Agencies UAE",
        "description": "Comprehensive directory of top UAE B2B marketing agencies",
        "url": "https://gtm.quest/best-b2b-marketing-agency-uae-top-b2b-marketing-agencies-uae"
      }) }} />

      {/* Breadcrumbs */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing UAE</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80" alt="Best B2B marketing agency UAE - Dubai skyline and Burj Khalifa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">United Arab Emirates</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>
            Best B2B Marketing Agency UAE 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Connect with {totalAgencies} elite UAE B2B marketing agencies specializing in fintech, trade, and Middle East market leadership.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">AED{Math.round((avgMinBudget * 3.67) / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      {/* Why Choose UAE Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose a UAE B2B Marketing Agency?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>The UAE represents the premier gateway to Middle East and emerging market B2B opportunities. According to the <a href="https://www.economy.gov.ae/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">UAE Ministry of Economy</a>, the country's non-oil GDP exceeds $350 billion annually, with Dubai and Abu Dhabi serving as global hubs for trade, finance, and logistics. <a href="https://en.wikipedia.org/wiki/Dubai_International_Financial_Centre" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Dubai International Financial Centre (DIFC)</a> hosts over 3,000 companies including global banks, fintech startups, and professional services firms. UAE B2B agencies understand how to market across cultures—balancing Western business practices with the relationship-driven commerce that defines Middle Eastern enterprise sales.</p>
            <p>Dubai's free zone ecosystem—including Dubai Internet City, Dubai Media City, and Jebel Ali Free Zone—creates specialized industry clusters that demand targeted B2B marketing expertise. The <a href="https://data.worldbank.org/country/united-arab-emirates" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">World Bank</a> ranks the UAE among the easiest places globally to do business. UAE agencies excel at bilingual Arabic-English marketing, understanding Emirati government procurement processes, and navigating the complex stakeholder landscape of family-owned conglomerates that dominate regional commerce. <a href="https://www.hubspot.com/state-of-marketing" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot research</a> shows that MENA B2B buyers value personal relationships and face-to-face engagement alongside digital marketing—agencies understand this hybrid approach.</p>
            <p><a href="https://www.dubaichamber.com/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Dubai Chamber of Commerce</a> and <a href="https://added.gov.ae/en" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Abu Dhabi Department of Economic Development</a> support enterprise marketing initiatives. UAE agencies particularly excel in financial services and fintech marketing, real estate and mega-project B2B positioning, logistics and supply chain communications (DP World, Emirates SkyCargo), energy sector marketing (ADNOC, renewable transition), and government enterprise sales. Whether you're entering UAE markets, establishing Middle East headquarters, or using Dubai as a launchpad for GCC expansion, UAE agencies offer unique expertise in high-growth emerging markets where relationships, cultural sensitivity, and ambitious vision define B2B success.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Core B2B Marketing Services in UAE</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Financial Services & Fintech Marketing</h3>
              <p className="text-xl text-white/80 leading-relaxed">DIFC and ADGM host regional financial headquarters. Agencies understand banking enterprise sales, fintech B2B positioning, Islamic finance compliance, and regulatory frameworks across UAE and GCC jurisdictions. Expertise in marketing to sovereign wealth funds and institutional investors.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Real Estate & Construction B2B</h3>
              <p className="text-xl text-white/80 leading-relaxed">UAE leads global mega-project development. Agencies excel at marketing to developers, contractors, suppliers, and government entities across iconic projects. Expertise in B2B positioning for construction technology, materials, and professional services.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Trade, Logistics & Supply Chain</h3>
              <p className="text-xl text-white/80 leading-relaxed">Jebel Ali is the world's largest man-made harbor. Agencies understand logistics enterprise marketing, supply chain technology positioning, and trade facilitation B2B communications. Expertise in marketing to regional distribution networks and e-commerce fulfillment.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">GCC & MENA Market Expansion</h3>
              <p className="text-xl text-white/80 leading-relaxed">Dubai serves as the operational hub for Middle East expansion. Agencies coordinate campaigns across Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman—understanding distinct market dynamics, regulatory requirements, and cultural nuances across the GCC.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Key Industries for UAE B2B Marketing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-white mb-4">Financial Services</h3>
              <p className="text-white/70">DIFC, ADGM host 3,000+ companies. Fintech, banking, wealth management require specialized B2B marketing.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Real Estate & Construction</h3>
              <p className="text-white/70">Emaar, ALDAR, mega-projects—UAE's iconic developments demand sophisticated B2B supplier marketing.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🚢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Logistics & Trade</h3>
              <p className="text-white/70">DP World, Emirates SkyCargo—global trade hub requires specialized supply chain B2B positioning.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Energy & Sustainability</h3>
              <p className="text-white/70">ADNOC, Masdar—traditional energy and renewable transition create specialized B2B marketing needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">How to Choose a UAE B2B Marketing Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">01</div>
              <h3 className="text-2xl font-bold text-white mb-4">Verify Regional Understanding</h3>
              <p className="text-xl text-white/80 leading-relaxed">UAE B2B success requires understanding both local and regional dynamics. Verify the agency's experience with Emirati government procurement, family business decision-making, and GCC market expansion—not just Western-style enterprise sales.</p>
            </div>
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">02</div>
              <h3 className="text-2xl font-bold text-white mb-4">Assess Bilingual Capability</h3>
              <p className="text-xl text-white/80 leading-relaxed">Arabic-English bilingual marketing is essential for UAE and GCC markets. Verify the agency can produce native-quality Arabic content and understands cultural nuances—not just translation but authentic Arabic business communication.</p>
            </div>
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">03</div>
              <h3 className="text-2xl font-bold text-white mb-4">Evaluate Government Experience</h3>
              <p className="text-xl text-white/80 leading-relaxed">Government entities are major B2B buyers in UAE. Verify the agency's experience with government procurement processes, tender marketing, and the relationship-building required for public sector success across Emirates and GCC countries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Directory */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies Serving UAE</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies with UAE market expertise.</p>
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

      {/* FAQ Section */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">What makes UAE B2B marketing agencies unique?</h3>
              <p className="text-xl text-white/80 leading-relaxed">UAE agencies operate at the crossroads of East and West, understanding both Western business practices and Middle Eastern relationship-based commerce. They excel at marketing to diverse audiences—Emirati government entities, multinationals, and regional enterprises.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">How much do B2B marketing agencies in UAE typically charge?</h3>
              <p className="text-xl text-white/80 leading-relaxed">UAE agencies typically charge AED 30,000-120,000 ($8,000-33,000) per month for retainer services. Project-based work ranges from AED 50,000-300,000 for comprehensive campaigns. Dubai commands premium rates.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Which industries do UAE B2B marketing agencies specialize in?</h3>
              <p className="text-xl text-white/80 leading-relaxed">UAE agencies excel in financial services and fintech (DIFC, ADGM), real estate and construction, logistics and trade (Jebel Ali), oil and gas, healthcare, and government enterprise marketing.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Can UAE agencies help with GCC and MENA region B2B marketing?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Yes, UAE agencies are the natural hub for GCC and MENA expansion. They understand Arabic-language marketing, Islamic business principles, and relationship-driven commerce. Dubai serves as operational headquarters for most companies targeting the Middle East.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Markets */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">Explore Related B2B Markets</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Link href="/best-b2b-marketing-agency-singapore-top-b2b-marketing-agencies-singapore" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Singapore</span>
            </Link>
            <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">UK</span>
            </Link>
            <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Germany</span>
            </Link>
            <Link href="/best-b2b-marketing-agency-netherlands-top-b2b-marketing-agencies-netherlands" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Netherlands</span>
            </Link>
            <Link href="/best-b2b-marketing-agency-australia-top-b2b-marketing-agencies-australia" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Australia</span>
            </Link>
            <Link href="/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">US</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">B2B Marketing Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/best-gtm-agencies" className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">GTM Agency Directory</h3>
              <p className="text-white/60">Browse all go-to-market agencies globally</p>
            </Link>
            <Link href="/best-abm-agencies" className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">ABM Agencies</h3>
              <p className="text-white/60">Account-based marketing specialists</p>
            </Link>
            <Link href="/best-demand-gen-agencies" className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Demand Gen Agencies</h3>
              <p className="text-white/60">Pipeline generation experts</p>
            </Link>
            <Link href="/planner" className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">GTM Planner</h3>
              <p className="text-white/60">Build your go-to-market strategy</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your UAE B2B Marketing Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive B2B marketing plan for UAE and GCC markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">
            Start Free →
          </Link>
        </div>
      </section>
    </div>
  );
}
