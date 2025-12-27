import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Canada 2025 | GTM Quest',
  description: 'Find the best B2B marketing agency Canada has for your business. Compare top B2B marketing agencies in Canada for Toronto, Vancouver, Montreal, and North American markets.',
  keywords: 'best B2B marketing agency Canada, top B2B marketing agencies Canada, B2B digital marketing Toronto, demand generation Vancouver, B2B lead generation Canada, Montreal B2B marketing',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-canada-top-b2b-marketing-agencies-canada'
  }
};

export const revalidate = 3600;

export default async function B2BMarketingAgencyCanadaPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Canada');
  const totalAgencies = agencies.length;
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the typical cost of a B2B marketing agency in Canada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "B2B marketing agencies in Canada typically charge CA$8,000-CA$25,000 per month for retainer engagements. Project-based work ranges from CA$20,000-CA$75,000 depending on scope. Toronto and Vancouver agencies command premium pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose a Canadian B2B marketing agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Canadian agencies offer 30-40% cost savings versus US agencies, timezone alignment for North American markets, bilingual English-French capabilities, and expertise in US market expansion. They provide Western-quality execution with lower operating costs."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do Canadian B2B marketing agencies specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Canadian agencies excel in fintech and financial services, enterprise SaaS, mining and resources technology, healthcare technology, and AI/machine learning. The Toronto-Waterloo corridor specializes in technology B2B marketing."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from B2B marketing in Canada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expect 3-6 months to see meaningful pipeline impact from demand generation programs in Canada. Enterprise ABM campaigns targeting major Canadian corporations may take 6-12 months to influence deals."
        }
      }
    ]
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Best B2B Marketing Agency Canada 2025",
            "description": "Find the best B2B marketing agency Canada has for your business",
            "url": "https://gtm.quest/best-b2b-marketing-agency-canada-top-b2b-marketing-agencies-canada"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/best-gtm-agencies" className="hover:text-white">Agencies</Link> / <span className="text-white">B2B Marketing Agency Canada</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&q=80"
            alt="Best B2B marketing agency Canada - Toronto skyline with CN Tower"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Canada</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>
            Best B2B Marketing Agency Canada 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} B2B marketing agencies Canada has to offer. Find the right B2B marketing agency Canada businesses trust for North American growth.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">Top Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">CA${Math.round(avgMinBudget / 1000)}K+</div>
              <div className="text-white/70 text-lg">Avg Budget</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">100%</div>
              <div className="text-white/70 text-lg">Verified</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">NA</div>
              <div className="text-white/70 text-lg">Gateway</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Canada Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Why Choose a B2B Marketing Agency Canada for Your Business?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Canada operates as <a href="https://en.wikipedia.org/wiki/Economy_of_Canada" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">the world's ninth-largest economy</a> with GDP exceeding CA$2.8 trillion, having emerged as a North American technology powerhouse with globally recognized innovation hubs. Working with a B2B marketing agency Canada gives you access to Toronto-Waterloo's tech corridor (Canada's Silicon Valley), Vancouver's SaaS and gaming ecosystems, and Montreal's AI research leadership. According to <a href="https://www.statcan.gc.ca/en/start" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Statistics Canada</a>, the country's technology sector employs over 1.6 million professionals, with B2B companies benefiting from SR&ED tax credits and favorable immigration policies attracting global talent.
            </p>
            <p>
              Canadian B2B marketing agencies navigate unique market dynamics serving both domestic enterprises and facilitating Canada-US cross-border expansion—critical as 75% of Canadian technology companies target US markets for growth. According to <a href="https://www.bdc.ca/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Business Development Bank of Canada</a>, Canadian tech companies receive significant government support for international expansion, creating opportunities agencies understand how to leverage. The <a href="https://www.investcanada.ca/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Invest in Canada</a> agency reports operating costs 30-40% lower than comparable US markets, making Canadian agencies attractive for companies seeking Western-quality execution with cost advantages.
            </p>
            <p>
              Canadian agencies particularly excel in fintech and financial services marketing (Toronto's banking sector rivals Wall Street), enterprise SaaS positioning, mining and resources technology (Canada's A$100+ billion sector pursuing digital transformation), healthcare technology, and AI/machine learning B2B. They understand bilingual requirements for Quebec markets where <a href="https://data.worldbank.org/country/canada" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">provincial regulations mandate French-language business materials</a>, and navigate interprovincial regulatory variations affecting B2B marketing across Canada's diverse regional economies. Every B2B marketing agency Canada features in our list helps companies navigate both Canadian domestic opportunities and US market expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            What Services Do B2B Marketing Agencies Canada Offer?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Demand Generation & Lead Generation</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Canadian agencies excel at building demand generation systems for North American markets. This includes marketing automation implementation with <a href="https://www.hubspot.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot</a>, Salesforce, or Marketo, bilingual campaign capabilities for Quebec markets, and cross-border attribution tracking. They understand both Canadian enterprise buying patterns and US market expansion requirements.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Account-Based Marketing (ABM)</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                For TSX-listed and major enterprise targeting, Canadian agencies implement ABM strategies using platforms like <a href="https://www.demandbase.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Demandbase</a> or 6sense. They understand how to target Canada's concentrated financial, energy, and technology sectors, combining digital precision with the relationship-building approaches valued in Canadian business culture.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Content Marketing & SEO</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Creating content for Canadian and North American buyers requires understanding both markets. Canadian agencies produce thought leadership content, research reports, and case studies that work across Canadian and US audiences. Many offer bilingual English-French content creation essential for Quebec markets and federal government contracts.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">US Market Expansion</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Canadian agencies help companies expand into <Link href="/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us" className="text-blue-400 hover:text-blue-300 underline">the US market</Link>—a critical capability as most Canadian tech companies target American growth. They understand timezone alignment advantages, cultural nuances differentiating Canadian and US business practices, and how to position Canadian companies for credibility with American enterprise buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Key Industries for B2B Marketing in Canada
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              <strong className="text-white">Financial Services & Fintech:</strong> Toronto is North America's second-largest financial center after New York, with Canada's Big Five banks (TD, RBC, BMO, Scotiabank, CIBC) driving massive B2B technology investment. The fintech ecosystem spans payments, wealthtech, and open banking innovation. B2B marketing agencies specialize in OSFI-compliant messaging and positioning for regulated financial services buyers. The <a href="https://www.cba.ca/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Canadian Bankers Association</a> reports financial services contributing over CA$150 billion to GDP annually.
            </p>
            <p>
              <strong className="text-white">Enterprise SaaS & Technology:</strong> The Toronto-Waterloo corridor has produced unicorns including Shopify, Wealthsimple, and countless enterprise software companies. Vancouver hosts major gaming, AR/VR, and SaaS companies. Montreal leads globally in AI research with companies like Element AI and major research labs. Agencies specialize in positioning Canadian technology companies for both domestic success and US market expansion.
            </p>
            <p>
              <strong className="text-white">Mining & Resources Technology:</strong> Canada's mining sector, concentrated in Toronto (headquarters) and western provinces (operations), increasingly adopts automation, IoT, and AI technology. B2B agencies understand how to market mining technology solutions, navigate complex enterprise sales to major miners, and position for environmental sustainability messaging increasingly required in procurement.
            </p>
            <p>
              <strong className="text-white">Healthcare Technology:</strong> Canada's CA$300+ billion healthcare sector—primarily publicly funded—creates unique B2B dynamics. Agencies specialize in marketing to provincial health authorities, hospital networks, and the growing private healthcare technology market. Understanding Health Canada regulations and provincial procurement processes is essential for effective healthcare B2B marketing.
            </p>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            How to Choose the Right B2B Marketing Agency Canada
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Industry Experience & Vertical Focus</h3>
              <p>
                Canada's B2B markets are concentrated, with major industries clustered in specific regions: financial services in Toronto, technology across Toronto-Waterloo-Vancouver, resources in Calgary and western provinces, aerospace in Montreal. Look for agencies with proven case studies in your specific vertical and experience with companies at your growth stage.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Cross-Border & Bilingual Capabilities</h3>
              <p>
                If your growth strategy includes US expansion or Quebec markets, evaluate agencies on these capabilities. The best Canadian agencies understand US market entry requirements and can position Canadian companies credibly for American enterprise buyers. For Quebec operations or federal government contracts, bilingual English-French capabilities are essential.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Technology Stack & Attribution</h3>
              <p>
                Canadian B2B marketing matches global sophistication in martech adoption. Evaluate agencies on their expertise with marketing automation, ABM platforms, and cross-border attribution tools. The best Canadian agencies demonstrate sophisticated approaches to measuring ROI across Canadian and US markets, essential for demonstrating value to investors and boards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agencies List Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Top B2B Marketing Agency Canada Directory
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {totalAgencies} verified B2B marketing agencies serving Canadian businesses. Find the best B2B marketing agency Canada companies recommend for demand generation, ABM, and North American growth.
          </p>
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
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-16">B2B Marketing Agency Canada FAQs</h2>
          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                What is the typical cost of a B2B marketing agency in Canada?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                B2B marketing agencies in Canada typically charge CA$8,000-CA$25,000 (approximately $6,000-$19,000 USD) per month for retainer engagements. Toronto and Vancouver agencies command premium pricing. Project-based work ranges from CA$20,000-CA$75,000 depending on scope. This offers 30-40% savings versus comparable <Link href="/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us" className="text-blue-400 hover:text-blue-300 underline">US agencies</Link>.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                Why choose a Canadian B2B marketing agency?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Canadian agencies offer significant cost savings versus US agencies, timezone alignment for North American markets, bilingual English-French capabilities, and expertise in US market expansion. They provide Western-quality execution with lower operating costs, making them attractive for companies seeking value without sacrificing sophistication.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                What industries do Canadian B2B marketing agencies specialize in?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Canadian agencies excel in fintech and financial services, enterprise SaaS, mining and resources technology, healthcare technology, and AI/machine learning. The Toronto-Waterloo corridor specializes in technology B2B marketing, while Calgary and western agencies focus on energy and resources sectors.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                How long does it take to see results from B2B marketing in Canada?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Expect 3-6 months to see meaningful pipeline impact from demand generation programs in Canada. Enterprise ABM campaigns targeting major Canadian corporations or cross-border US expansion may take 6-12 months to influence deals, similar to other North American markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Markets Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-10">Explore Related B2B Marketing Markets</h2>
          <p className="text-2xl text-white/80 mb-12 max-w-4xl">
            Expanding beyond Canada? Explore B2B marketing agencies in key trading partners and global markets.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">United States</h3>
              <p className="text-white/60">Primary expansion market for Canadian tech companies</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">United Kingdom</h3>
              <p className="text-white/60">Strong Commonwealth business ties with Canada</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-australia-top-b2b-marketing-agencies-australia" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Australia</h3>
              <p className="text-white/60">Similar market structure with mining and fintech focus</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Germany</h3>
              <p className="text-white/60">Industrial technology and manufacturing B2B</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-france-top-b2b-marketing-agencies-france" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">France</h3>
              <p className="text-white/60">Francophone market with Quebec business connections</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-singapore-top-b2b-marketing-agencies-singapore" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Singapore</h3>
              <p className="text-white/60">Gateway to Asia-Pacific enterprise markets</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-10">B2B Marketing Resources</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <Link href="/b2b-gtm-strategy" className="block p-8 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">B2B GTM Strategy Guide</h3>
              <p className="text-white/60">Learn how to build effective go-to-market strategies for B2B companies</p>
            </Link>
            <Link href="/planner" className="block p-8 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">GTM Strategy Planner</h3>
              <p className="text-white/60">Build your custom go-to-market strategy with our free planning tool</p>
            </Link>
            <Link href="/articles" className="block p-8 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">GTM Articles & Insights</h3>
              <p className="text-white/60">Expert articles on B2B marketing, demand generation, and growth strategies</p>
            </Link>
            <Link href="/about" className="block p-8 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">About GTM Quest</h3>
              <p className="text-white/60">Learn about our mission to help B2B companies grow</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Build Your B2B Marketing Strategy for Canada
          </h2>
          <p className="text-2xl text-white/95 mb-12">
            Create a comprehensive B2B marketing strategy for Canadian and North American markets. Whether you work with a B2B marketing agency Canada recommends or build in-house capabilities, start with the right strategic foundation.
          </p>
          <Link
            href="/planner"
            className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl"
          >
            Start Free →
          </Link>
        </div>
      </section>
    </div>
  );
}
