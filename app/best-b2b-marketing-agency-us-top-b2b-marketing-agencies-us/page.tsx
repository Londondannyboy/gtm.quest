import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency US 2025 | GTM Quest',
  description: 'Find the best B2B marketing agency US has for your business. Compare top B2B marketing agencies in the United States for enterprise SaaS, technology, and Fortune 500 markets.',
  keywords: 'best B2B marketing agency US, top B2B marketing agencies United States, B2B digital marketing US, demand generation USA, B2B lead generation United States, B2B marketing agency New York, B2B marketing agency San Francisco',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us'
  }
};

export const revalidate = 3600;

export default async function B2BMarketingAgencyUSPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'US');
  const totalAgencies = agencies.length;
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 15000;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the typical cost of a B2B marketing agency in the US?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "B2B marketing agencies in the US typically charge $10,000-$50,000 per month for retainer engagements. Project-based work ranges from $25,000-$150,000 depending on scope. Enterprise-focused agencies targeting Fortune 500 may require $50,000+ monthly minimums."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose a US-based B2B marketing agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "US agencies offer deep understanding of American enterprise buying behaviors, expertise in complex multi-stakeholder sales processes, knowledge of US compliance requirements (SOC 2, HIPAA, FedRAMP), and access to the world's largest technology and enterprise market."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do US B2B marketing agencies specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "US agencies excel in enterprise SaaS, cloud infrastructure, cybersecurity, healthcare technology, financial services, manufacturing technology, and professional services. Silicon Valley agencies specialize in VC-backed growth marketing."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from B2B marketing in the US?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expect 3-6 months to see meaningful pipeline impact from demand generation programs. Enterprise ABM campaigns targeting Fortune 500 or large US accounts may take 6-18 months to influence deals due to complex buying committees."
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
            "name": "Best B2B Marketing Agency US 2025",
            "description": "Find the best B2B marketing agency US has for your business",
            "url": "https://gtm.quest/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us"
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
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/best-gtm-agencies" className="hover:text-white">Agencies</Link> / <span className="text-white">B2B Marketing Agency US</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&q=80"
            alt="Best B2B marketing agency US - New York City Manhattan skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">United States</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>
            Best B2B Marketing Agency US 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} B2B marketing agencies the United States has to offer. Find the right B2B marketing agency US enterprises trust for growth.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">Top Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">${Math.round(avgMinBudget / 1000)}K+</div>
              <div className="text-white/70 text-lg">Avg Budget</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">100%</div>
              <div className="text-white/70 text-lg">Verified</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">#1</div>
              <div className="text-white/70 text-lg">B2B Market</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why US Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Why Choose a B2B Marketing Agency US for Your Business?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              The United States commands <a href="https://en.wikipedia.org/wiki/Economy_of_the_United_States" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">the world's largest economy</a> with GDP exceeding $27 trillion, serving as the global epicenter for enterprise technology and B2B innovation. Working with a B2B marketing agency US gives you access to Silicon Valley, New York, Boston, Austin, and Seattle's powerhouse tech ecosystems. According to the <a href="https://www.bls.gov/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Bureau of Labor Statistics</a>, the professional and business services sector employs over 22 million Americans, representing the world's largest addressable B2B market. US B2B marketing agencies understand the sophisticated, data-driven approaches that American enterprise buyers demand.
            </p>
            <p>
              With over 330 million consumers, the world's most developed venture capital ecosystem, and a business culture that rewards innovation and aggressive growth, choosing a B2B marketing agency US provides unique advantages. According to the <a href="https://www.commerce.gov/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">US Department of Commerce</a>, American businesses spend over $200 billion annually on B2B marketing and advertising. Research from <a href="https://hbr.org/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Harvard Business Review</a> shows US B2B buyers complete 67% of their purchasing journey before engaging sales, making digital content, SEO authority, and thought leadership critical. Every B2B marketing agency US features in our list excels at creating pipeline for complex enterprise sales.
            </p>
            <p>
              US agencies particularly excel in enterprise SaaS and cloud technology marketing, cybersecurity and compliance-driven positioning, healthcare technology (HIPAA-compliant marketing), financial services and fintech, and venture-backed growth marketing. They leverage <a href="https://www.statista.com/markets/413/topic/537/b2b-e-commerce/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Statista's B2B market intelligence</a> and understand the multi-stakeholder buying committees (often 7-15 decision-makers) typical in American enterprise deals. Data from <a href="https://data.worldbank.org/country/united-states" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">World Bank data</a> confirms the US as the world's most attractive market for B2B technology vendors.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            What Services Do B2B Marketing Agencies US Offer?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Demand Generation & Pipeline</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                US agencies excel at building demand generation engines that fuel enterprise sales teams. This includes marketing automation implementation with <a href="https://www.hubspot.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot</a>, Salesforce Marketing Cloud, or Marketo, sophisticated lead scoring, and closed-loop reporting. They understand the 6-18 month enterprise sales cycles typical in American B2B and build nurture sequences accordingly.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Account-Based Marketing (ABM)</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                For Fortune 500 and enterprise targeting, US agencies implement ABM strategies using platforms like <a href="https://www.demandbase.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Demandbase</a>, 6sense, or Terminus. They understand how to orchestrate multi-channel campaigns targeting specific accounts, navigate complex buying committees, and measure account-level engagement across the entire customer journey.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Content Marketing & Thought Leadership</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Creating content for American technical and executive buyers requires sophisticated approaches. US agencies produce research reports, original data studies, executive surveys, and thought leadership that earns coverage in publications like TechCrunch, Wall Street Journal, and industry-specific media. Their SEO teams dominate competitive enterprise keywords.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Global Market Entry from US</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                US agencies help American companies expand into international markets including <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="text-blue-400 hover:text-blue-300 underline">the UK</Link>, <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="text-blue-400 hover:text-blue-300 underline">Germany</Link>, and APAC. They also help international companies entering the US market navigate American business culture, compliance requirements, and regional market differences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Key Industries for B2B Marketing in the US
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              <strong className="text-white">Enterprise SaaS & Cloud:</strong> The US is home to the world's largest SaaS market, valued at over $150 billion. B2B marketing agencies specialize in positioning cloud platforms, enterprise software, and infrastructure-as-a-service offerings. From Series A startups to public companies, agencies understand the unique growth marketing requirements at each stage. The <a href="https://www.sba.gov/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">US Small Business Administration</a> reports over 33 million businesses as potential targets for B2B technology vendors.
            </p>
            <p>
              <strong className="text-white">Cybersecurity & Compliance:</strong> With increasing regulatory requirements (SOC 2, FedRAMP, HIPAA, CCPA), cybersecurity has become a top priority for American enterprises. B2B agencies understand how to market security products to CISOs and security teams, create content that demonstrates compliance expertise, and navigate the complex procurement processes typical in security purchasing.
            </p>
            <p>
              <strong className="text-white">Healthcare Technology:</strong> The $4.5 trillion US healthcare market creates enormous B2B opportunities. Agencies specialize in HIPAA-compliant marketing, understand healthcare buying cycles, and know how to reach hospital administrators, health system CTOs, and clinical decision-makers. They navigate complex stakeholder dynamics in healthcare purchasing.
            </p>
            <p>
              <strong className="text-white">Financial Services & Fintech:</strong> From Wall Street institutions to fintech disruptors, the US financial services sector demands sophisticated B2B marketing. Agencies understand regulatory constraints, compliance messaging, and how to build trust with risk-averse financial buyers. New York remains the global capital for financial technology innovation.
            </p>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            How to Choose the Right B2B Marketing Agency US
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Industry Experience & Case Studies</h3>
              <p>
                B2B marketing in the US requires deep industry expertise. Look for agencies with proven case studies in your vertical—enterprise SaaS requires different approaches than manufacturing or healthcare. Ask about their experience with companies at your stage (startup vs. scale-up vs. enterprise) and their track record generating qualified pipeline, not just vanity metrics.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Understanding of American Enterprise Sales</h3>
              <p>
                US enterprise buying committees often include 7-15 stakeholders across technical, financial, legal, and executive roles. The best agencies understand how to create content for each persona, navigate long evaluation cycles, and align marketing activities with complex sales processes. They know the difference between velocity sales and enterprise deals.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Technology Stack & Data Sophistication</h3>
              <p>
                American B2B marketing is data-driven and technology-intensive. Evaluate agencies on their expertise with marketing automation, ABM platforms, intent data providers, and attribution tools. The best US agencies demonstrate sophisticated approaches to measurement, can implement complex martech stacks, and prove ROI across long sales cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agencies List Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Top B2B Marketing Agency US Directory
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {totalAgencies} verified B2B marketing agencies serving US businesses. Find the best B2B marketing agency US enterprises recommend for demand generation, ABM, and revenue growth.
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
          <h2 className="text-5xl font-black text-white mb-16">B2B Marketing Agency US FAQs</h2>
          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                What is the typical cost of a B2B marketing agency in the US?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                B2B marketing agencies in the US typically charge $10,000-$50,000 per month for retainer engagements, with enterprise-focused agencies in major markets (New York, San Francisco, Boston) often requiring $30,000-$75,000+ monthly. Project-based work ranges from $25,000-$150,000 depending on scope. This makes US agencies more expensive than <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="text-blue-400 hover:text-blue-300 underline">UK agencies</Link> but with access to the world's largest B2B market.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                Why choose a US-based B2B marketing agency?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                US agencies offer deep understanding of American enterprise buying behaviors, expertise in complex multi-stakeholder sales processes, knowledge of US compliance requirements (SOC 2, HIPAA, FedRAMP, CCPA), and access to the world's largest and most competitive technology market. They understand venture-backed growth expectations and public company requirements.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                What industries do US B2B marketing agencies specialize in?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                US agencies excel in enterprise SaaS, cloud infrastructure, cybersecurity, healthcare technology, financial services and fintech, manufacturing technology, and professional services. Silicon Valley agencies specialize in VC-backed growth marketing while East Coast agencies often focus on enterprise and financial services.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                How long does it take to see results from B2B marketing in the US?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Expect 3-6 months to see meaningful pipeline impact from demand generation programs. Enterprise ABM campaigns targeting Fortune 500 or large US accounts may take 6-18 months to influence deals, given complex buying committees with 7-15 stakeholders and multi-stage procurement processes.
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
            Expanding beyond the US? Explore B2B marketing agencies in key trading partners and major global hubs.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">United Kingdom</h3>
              <p className="text-white/60">Europe's leading financial and professional services hub</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-canada-top-b2b-marketing-agencies-canada" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Canada</h3>
              <p className="text-white/60">Growing tech hub with strong US business ties</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Germany</h3>
              <p className="text-white/60">Europe's largest economy and manufacturing leader</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-australia-top-b2b-marketing-agencies-australia" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Australia</h3>
              <p className="text-white/60">Key APAC market for US tech expansion</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-singapore-top-b2b-marketing-agencies-singapore" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Singapore</h3>
              <p className="text-white/60">Gateway to Southeast Asian enterprise markets</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-france-top-b2b-marketing-agencies-france" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">France</h3>
              <p className="text-white/60">Major European market with growing tech ecosystem</p>
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
            Build Your B2B Marketing Strategy for the US
          </h2>
          <p className="text-2xl text-white/95 mb-12">
            Create a comprehensive B2B marketing strategy for the US market. Whether you work with a B2B marketing agency US recommends or build in-house capabilities, start with the right strategic foundation.
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
