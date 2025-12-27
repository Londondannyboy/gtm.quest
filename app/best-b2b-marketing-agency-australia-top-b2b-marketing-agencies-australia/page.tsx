import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Australia 2025 | GTM Quest',
  description: 'Find the best B2B marketing agency Australia has for your business. Compare top B2B marketing agencies in Australia for Sydney, Melbourne, Brisbane, and APAC markets.',
  keywords: 'best B2B marketing agency Australia, top B2B marketing agencies Australia, B2B digital marketing Sydney, demand generation Melbourne, B2B lead generation Australia, APAC B2B marketing',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-australia-top-b2b-marketing-agencies-australia'
  }
};

export const revalidate = 3600;

export default async function B2BMarketingAgencyAustraliaPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Australia');
  const totalAgencies = agencies.length;
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the typical cost of a B2B marketing agency in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "B2B marketing agencies in Australia typically charge A$8,000-A$30,000 per month for retainer engagements. Project-based work ranges from A$20,000-A$80,000 depending on scope. Sydney and Melbourne agencies command premium pricing due to market concentration."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose an Australian B2B marketing agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Australian agencies offer strategic timezone positioning for APAC coverage, deep understanding of both Australian enterprise and regional markets, expertise in mining, fintech, and professional services B2B, and English-language capabilities valued across Asia-Pacific."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do Australian B2B marketing agencies specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Australian agencies excel in financial services and fintech, mining and resources technology, professional services, healthcare technology, and enterprise SaaS. They have particular strength in sectors with both domestic Australian and APAC regional opportunity."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from B2B marketing in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expect 3-6 months to see meaningful pipeline impact from demand generation programs in Australia. Account-based marketing targeting concentrated Australian industries may show faster results. Enterprise deals typically take 6-12 months to close."
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
            "name": "Best B2B Marketing Agency Australia 2025",
            "description": "Find the best B2B marketing agency Australia has for your business",
            "url": "https://gtm.quest/best-b2b-marketing-agency-australia-top-b2b-marketing-agencies-australia"
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
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/best-gtm-agencies" className="hover:text-white">Agencies</Link> / <span className="text-white">B2B Marketing Agency Australia</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&q=80"
            alt="Best B2B marketing agency Australia - Sydney Opera House and Harbour Bridge"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Australia</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>
            Best B2B Marketing Agency Australia 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} B2B marketing agencies Australia has to offer. Find the right B2B marketing agency Australia businesses trust for growth across APAC.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">Top Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">A${Math.round(avgMinBudget / 1000)}K+</div>
              <div className="text-white/70 text-lg">Avg Budget</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">100%</div>
              <div className="text-white/70 text-lg">Verified</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">APAC</div>
              <div className="text-white/70 text-lg">Gateway</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Australia Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Why Choose a B2B Marketing Agency Australia for Your Business?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Australia operates as <a href="https://en.wikipedia.org/wiki/Economy_of_Australia" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">the world's 13th-largest economy</a> with GDP exceeding A$2.5 trillion, serving as the Asia-Pacific region's premier financial services and technology hub. Working with a B2B marketing agency Australia gives you access to Sydney, Melbourne, Brisbane, Perth, and Adelaide's sophisticated business ecosystems. According to the <a href="https://www.abs.gov.au/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Australian Bureau of Statistics</a>, professional services and technology sectors generate over A$180 billion annually, with Australian enterprises increasingly investing in B2B technology solutions. Australian B2B marketing agencies combine global best practices with deep regional market understanding, making Australia an ideal base for APAC expansion strategies.
            </p>
            <p>
              Australia's strategic timezone positioning offers unique advantages for B2B companies: real-time collaboration with Asian markets during business hours while maintaining connectivity to US West Coast markets through evening operations. This creates a potential 16-hour working day advantage that no other developed English-speaking economy can match. According to <a href="https://www.austrade.gov.au/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Austrade</a>, Australian B2B exports to Asia exceeded A$300 billion in 2024, demonstrating Australia's role as a bridge between Western business practices and Asian markets. The <a href="https://www.csiro.au/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">CSIRO</a> reports Australia's technology sector employs over 900,000 professionals, creating a deep talent pool for sophisticated B2B marketing execution.
            </p>
            <p>
              Australian agencies particularly excel in financial services and fintech marketing (the Big Four banks drive massive fintech ecosystems), mining and resources technology (A$300+ billion industry pursuing digital transformation), professional services B2B, healthcare technology, and enterprise SaaS positioning for APAC markets. They understand <a href="https://data.worldbank.org/country/australia" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Australian regulatory requirements</a> including data sovereignty for government contracts and APRA compliance for financial services. Every B2B marketing agency Australia features in our list helps companies navigate both domestic opportunities and broader APAC expansion, leveraging Australia's English-language advantage when marketing to Southeast Asian enterprises seeking Western-quality partnerships without US pricing premiums.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            What Services Do B2B Marketing Agencies Australia Offer?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Demand Generation & Lead Generation</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Australian agencies excel at building demand generation systems adapted to concentrated market dynamics. This includes marketing automation implementation with <a href="https://www.hubspot.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot</a>, Salesforce, or Marketo, account-based approaches for Australia's concentrated industries, and closed-loop reporting. They understand that Australian B2B markets, while smaller than US or UK, often require higher-touch engagement strategies that prioritize quality over volume.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Account-Based Marketing (ABM)</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                For ASX 200 and major enterprise targeting, Australian agencies implement ABM strategies using platforms like <a href="https://www.demandbase.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Demandbase</a> or 6sense. They understand how to target Australia's concentrated industry verticals—where top 20 companies often represent 80% of addressable market—combining digital precision with the relationship-building approaches valued in Australian business culture.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Content Marketing & SEO</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Creating content for Australian technical and executive buyers requires understanding local context while maintaining global credibility. Australian agencies produce thought leadership content, research reports, and case studies that resonate with both domestic buyers and regional APAC audiences. Their SEO teams optimize for Australian search patterns while building international authority.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">APAC Market Expansion</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Australian agencies help companies expand across Asia-Pacific, including <Link href="/best-b2b-marketing-agency-singapore-top-b2b-marketing-agencies-singapore" className="text-blue-400 hover:text-blue-300 underline">Singapore</Link>, New Zealand, and broader Southeast Asia. They leverage Australia's cultural positioning as a trusted Western partner for Asian enterprises, helping companies navigate diverse markets from Japan to Indonesia while maintaining consistent brand positioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Key Industries for B2B Marketing in Australia
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              <strong className="text-white">Financial Services & Fintech:</strong> Australia's financial services sector, anchored by the Big Four banks (Commonwealth, Westpac, ANZ, NAB), drives massive B2B technology investment. Sydney rivals Singapore as APAC's fintech capital, with over 800 fintech companies and growing enterprise adoption of regtech, wealthtech, and payments innovation. B2B marketing agencies specialize in APRA-compliant messaging and positioning for risk-averse financial decision-makers. The <a href="https://treasury.gov.au/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Australian Treasury</a> reports financial services contributes over A$165 billion to GDP annually.
            </p>
            <p>
              <strong className="text-white">Mining & Resources Technology:</strong> Australia's A$300+ billion mining sector is rapidly digitizing, creating enormous B2B opportunities in automation, IoT, predictive maintenance, and environmental technology. Agencies understand how to market to mining procurement teams in Perth and Brisbane, navigate complex enterprise sales cycles, and position technology for remote operations environments. Major miners including BHP, Rio Tinto, and Fortescue drive innovation adoption across the sector.
            </p>
            <p>
              <strong className="text-white">Professional Services:</strong> Australia hosts major operations from global professional services firms and a thriving domestic consulting ecosystem. B2B agencies help technology vendors reach law firms, accounting practices, and management consultancies. Sydney and Melbourne concentrate Australia's professional services spending, with increasing technology investment in legal tech, practice management, and client delivery platforms.
            </p>
            <p>
              <strong className="text-white">Healthcare Technology:</strong> Australia's A$220 billion healthcare sector combines public and private systems, creating diverse B2B opportunities. Agencies specialize in marketing to hospital groups, health insurers, and the network of private practices adopting digital health solutions. Understanding TGA requirements and Medicare/private billing implications is essential for effective healthcare B2B marketing.
            </p>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            How to Choose the Right B2B Marketing Agency Australia
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Industry Experience & Vertical Focus</h3>
              <p>
                Australia's B2B markets are concentrated, with top companies in each vertical representing significant market share. Look for agencies with proven case studies in your specific industry—mining technology requires fundamentally different approaches than fintech or healthcare. Ask about their experience with both ASX-listed enterprises and high-growth companies, and their track record in your target verticals.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>APAC Regional Capabilities</h3>
              <p>
                If your growth strategy includes APAC expansion, evaluate agencies on their regional experience. The best Australian agencies understand market entry strategies for Singapore, New Zealand, and Southeast Asia, and can position Australian companies as trusted Western partners for Asian enterprises. They navigate cultural differences while maintaining consistent B2B messaging across diverse markets.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Technology Stack & Data Sophistication</h3>
              <p>
                Australian B2B marketing increasingly matches global sophistication in martech adoption. Evaluate agencies on their expertise with marketing automation, ABM platforms, and intent data providers. The best Australian agencies demonstrate sophisticated approaches to measurement and attribution, essential in markets where smaller deal volumes require proving ROI on every marketing investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agencies List Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Top B2B Marketing Agency Australia Directory
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {totalAgencies} verified B2B marketing agencies serving Australian businesses. Find the best B2B marketing agency Australia companies recommend for demand generation, ABM, and APAC growth.
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
          <h2 className="text-5xl font-black text-white mb-16">B2B Marketing Agency Australia FAQs</h2>
          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                What is the typical cost of a B2B marketing agency in Australia?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                B2B marketing agencies in Australia typically charge A$8,000-A$30,000 (approximately $5,000-$19,000 USD) per month for retainer engagements. Sydney and Melbourne agencies command premium pricing due to market concentration. Project-based work ranges from A$20,000-A$80,000 depending on scope. This positions Australian agencies between <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="text-blue-400 hover:text-blue-300 underline">UK agencies</Link> and <Link href="/best-b2b-marketing-agency-singapore-top-b2b-marketing-agencies-singapore" className="text-blue-400 hover:text-blue-300 underline">Singapore agencies</Link> in terms of cost.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                Why choose an Australian B2B marketing agency?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Australian agencies offer strategic timezone positioning for APAC coverage, deep understanding of both Australian enterprise and regional markets, expertise in mining, fintech, and professional services B2B, and English-language capabilities valued across Asia-Pacific. They serve as ideal partners for companies using Australia as an APAC beachhead.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                What industries do Australian B2B marketing agencies specialize in?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Australian agencies excel in financial services and fintech, mining and resources technology, professional services, healthcare technology, and enterprise SaaS. Their particular strength lies in concentrated industry verticals where relationship-based, high-touch marketing approaches drive success in smaller but high-value markets.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                How long does it take to see results from B2B marketing in Australia?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Expect 3-6 months to see meaningful pipeline impact from demand generation programs in Australia. Account-based marketing targeting concentrated Australian industries may show faster results given smaller total addressable markets. Enterprise deals typically take 6-12 months to close, similar to other developed markets.
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
            Expanding beyond Australia? Explore B2B marketing agencies in key APAC markets and global trading partners.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/best-b2b-marketing-agency-singapore-top-b2b-marketing-agencies-singapore" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Singapore</h3>
              <p className="text-white/60">APAC's enterprise technology hub and gateway to Southeast Asia</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">United States</h3>
              <p className="text-white/60">World's largest B2B technology market</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">United Kingdom</h3>
              <p className="text-white/60">Strong Commonwealth business ties with Australia</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-uae-top-b2b-marketing-agencies-uae" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">UAE</h3>
              <p className="text-white/60">Gateway to Middle East enterprise markets</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-canada-top-b2b-marketing-agencies-canada" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Canada</h3>
              <p className="text-white/60">Similar market structure with strong mining sector</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Germany</h3>
              <p className="text-white/60">Industrial technology and manufacturing B2B</p>
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
            Build Your B2B Marketing Strategy for Australia
          </h2>
          <p className="text-2xl text-white/95 mb-12">
            Create a comprehensive B2B marketing strategy for Australian and APAC markets. Whether you work with a B2B marketing agency Australia recommends or build in-house capabilities, start with the right strategic foundation.
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
