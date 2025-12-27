import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency UK 2025 | GTM Quest',
  description: 'Find the best B2B marketing agency UK has for your business. Compare top B2B marketing agencies in the UK for London, Manchester, and European markets.',
  keywords: 'best B2B marketing agency UK, top B2B marketing agencies UK, B2B digital marketing UK, demand generation UK, B2B lead generation UK, B2B marketing agency London',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk'
  }
};

export const revalidate = 3600;

export default async function B2BMarketingAgencyUKPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'UK');
  const totalAgencies = agencies.length;
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the typical cost of a B2B marketing agency in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "B2B marketing agencies in the UK typically charge £5,000-£25,000 per month for retainer engagements. Project-based work ranges from £15,000-£100,000 depending on scope. Enterprise ABM programs may exceed £50,000 monthly."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose a UK-based B2B marketing agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UK agencies offer deep understanding of British business culture, GDPR compliance expertise, strong connections to European markets, and native English content creation. They understand the nuanced, relationship-driven approach UK enterprise buyers prefer."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do UK B2B marketing agencies specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UK agencies excel in financial services and fintech, professional services, SaaS and enterprise software, manufacturing and industrial, healthcare and life sciences, and telecommunications technology."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from B2B marketing in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expect 3-6 months to see meaningful pipeline impact from demand generation programs. Enterprise ABM campaigns targeting large UK accounts may take 6-12 months to influence deals due to longer evaluation cycles."
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
            "name": "Best B2B Marketing Agency UK 2025",
            "description": "Find the best B2B marketing agency UK has for your business",
            "url": "https://gtm.quest/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk"
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
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/best-gtm-agencies" className="hover:text-white">Agencies</Link> / <span className="text-white">B2B Marketing Agency UK</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80"
            alt="Best B2B marketing agency UK - London cityscape with Thames River"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">United Kingdom</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>
            Best B2B Marketing Agency UK 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} B2B marketing agencies the UK has to offer. Find the right B2B marketing agency UK businesses trust for growth across Europe and globally.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">Top Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">£{Math.round(avgMinBudget / 1000)}K+</div>
              <div className="text-white/70 text-lg">Avg Budget</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">100%</div>
              <div className="text-white/70 text-lg">Verified</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">EMEA</div>
              <div className="text-white/70 text-lg">Gateway</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why UK Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Why Choose a B2B Marketing Agency UK for Your Business?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              The United Kingdom operates as <a href="https://en.wikipedia.org/wiki/Economy_of_the_United_Kingdom" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Europe's second-largest economy</a> and maintains its position as a global leader in financial services, technology, and professional services. Working with a B2B marketing agency UK gives you access to London, Manchester, Edinburgh, and Bristol's thriving business hubs. According to the <a href="https://www.gov.uk/government/organisations/department-for-business-and-trade" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">UK Department for Business and Trade</a>, the UK attracts more foreign direct investment than any other European nation, with technology and business services leading sectors. UK B2B marketing agencies combine global sophistication with deep local market understanding, making the UK an ideal base for companies targeting both European and global expansion.
            </p>
            <p>
              With over 67 million consumers, strong Commonwealth trade relationships spanning 56 nations, and a highly educated, English-speaking workforce, choosing a B2B marketing agency UK provides unique advantages. According to the <a href="https://www.ons.gov.uk/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Office for National Statistics (ONS)</a>, the UK's digital economy now accounts for over 16% of GDP, with B2B technology exports growing consistently year-over-year. The <a href="https://www.bankofengland.co.uk/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Bank of England</a> reports London remains the world's leading financial center alongside New York, creating enormous B2B opportunities in fintech, regtech, and financial services marketing. Every B2B marketing agency UK features in our list excels at creating campaigns that resonate with British enterprise buyers who value substance over hype.
            </p>
            <p>
              UK agencies particularly excel in financial services and fintech marketing, professional services positioning, SaaS and enterprise software campaigns, manufacturing and industrial B2B, and EMEA market entry strategies. They leverage <a href="https://www.ft.com/companies" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">the UK's strong business media ecosystem</a> including the Financial Times, The Economist, and industry-specific publications to help vendors build credibility. Research from <a href="https://data.worldbank.org/country/united-kingdom" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">World Bank data</a> shows the UK consistently ranks among the top nations for ease of doing business, making it a strategic market for B2B expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            What Services Do B2B Marketing Agencies UK Offer?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Demand Generation & Lead Generation</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                UK agencies excel at building demand generation systems, not just campaigns. This includes marketing automation implementation with <a href="https://www.hubspot.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot</a>, Salesforce, or Marketo, lead scoring models, and closed-loop reporting. They understand the longer, more methodical sales cycles typical in British enterprise markets and build nurture sequences that respect buyer timelines.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Account-Based Marketing (ABM)</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                For enterprise targeting, UK agencies implement ABM strategies using platforms like <a href="https://www.demandbase.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Demandbase</a> or 6sense. They understand how to target FTSE 350 companies and multinational corporations with UK headquarters, combining digital precision with the relationship-building approaches valued in British business culture.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Content Marketing & SEO</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Creating content for technical B2B buyers requires deep industry expertise. UK agencies produce thought leadership content, technical whitepapers, and case studies that resonate with discerning British buyers. Their SEO teams understand UK search behavior and optimize for both UK-specific and international keywords, often targeting Financial Times, TechCrunch UK, and industry publications.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">EMEA Market Entry Strategy</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                UK agencies are uniquely positioned to help companies expand across Europe and the Middle East. They understand regulatory requirements post-Brexit, cultural nuances, and business practices in key markets including <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="text-blue-400 hover:text-blue-300 underline">Germany</Link>, <Link href="/best-b2b-marketing-agency-france-top-b2b-marketing-agencies-france" className="text-blue-400 hover:text-blue-300 underline">France</Link>, and the Nordic region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Key Industries for B2B Marketing in the UK
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              <strong className="text-white">Financial Services & Fintech:</strong> London is the world's leading financial center with over 250 foreign banks, £9 trillion in assets under management, and Europe's largest fintech ecosystem. B2B marketing agencies specialize in positioning fintech startups, wealth management platforms, and banking technology providers. According to <a href="https://www.theglobalcity.uk/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">TheCityUK</a>, financial services contribute over £170 billion annually to the UK economy, creating massive B2B marketing opportunities.
            </p>
            <p>
              <strong className="text-white">Professional Services:</strong> The UK is home to the "Big Four" accounting firms' EMEA headquarters and leading management consultancies. B2B agencies understand how to market to sophisticated professional services buyers, create thought leadership that builds credibility, and navigate the long procurement cycles typical of consulting and legal services sectors. The <a href="https://www.ons.gov.uk/businessindustryandtrade" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">ONS Business & Trade data</a> shows professional services as one of the UK's fastest-growing export sectors.
            </p>
            <p>
              <strong className="text-white">SaaS & Enterprise Technology:</strong> The UK has Europe's largest enterprise software market. British agencies market to technology buyers who demand detailed security documentation, GDPR compliance expertise, and understanding of UK public sector procurement requirements. Major tech hubs in London, Cambridge, Manchester, and Edinburgh create a thriving ecosystem.
            </p>
            <p>
              <strong className="text-white">Manufacturing & Industrial:</strong> Despite its services focus, the UK maintains significant advanced manufacturing in aerospace, automotive, pharmaceuticals, and defense. B2B agencies help industrial suppliers market to engineering decision-makers, navigate complex supply chain relationships, and build credibility with procurement teams at major manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            How to Choose the Right B2B Marketing Agency UK
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Industry Experience</h3>
              <p>
                B2B marketing in the UK requires understanding of local business culture and industry verticals. Look for agencies with case studies in your sector—financial services require different approaches than manufacturing or technology. Ask about their experience with both UK enterprises and international companies targeting the UK market.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Understanding of British Business Culture</h3>
              <p>
                UK B2B buyers prefer measured, evidence-based decision-making over aggressive American-style sales tactics. The best agencies understand when to use understated British communication versus more direct messaging, and can navigate the relationship-oriented approach preferred by UK enterprise buyers who value long-term partnerships over transactional relationships.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Technology Stack & Integration</h3>
              <p>
                Modern B2B marketing requires sophisticated technology. Evaluate agencies on their expertise with marketing automation platforms, CRM integration capabilities, analytics and attribution tracking, and their ability to implement account-based marketing technology. Ask about their experience with tools commonly used in UK enterprise environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agencies List Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Top B2B Marketing Agency UK Directory
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {totalAgencies} verified B2B marketing agencies serving UK businesses. Find the best B2B marketing agency UK companies recommend for demand generation, ABM, and revenue growth.
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
          <h2 className="text-5xl font-black text-white mb-16">B2B Marketing Agency UK FAQs</h2>
          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                What is the typical cost of a B2B marketing agency in the UK?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                B2B marketing agencies in the UK typically charge £5,000-£25,000 (approximately $6,500-$32,000) per month for retainer engagements, with premium London agencies often exceeding £30,000 monthly. Project-based work ranges from £15,000-£100,000 depending on scope. This positions UK agencies between more expensive <Link href="/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us" className="text-blue-400 hover:text-blue-300 underline">US agencies</Link> and more cost-effective <Link href="/best-b2b-marketing-agency-poland-top-b2b-marketing-agencies-poland" className="text-blue-400 hover:text-blue-300 underline">Eastern European options</Link>.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                Why choose a UK-based B2B marketing agency?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                UK agencies offer deep understanding of British business culture, native English content creation, GDPR compliance expertise, and strong connections to European markets. They understand the nuanced, relationship-driven approach UK enterprise buyers prefer, and many have established relationships with key UK business media.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                What industries do UK B2B marketing agencies specialize in?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                UK agencies excel in financial services and fintech, professional services, SaaS and enterprise software, manufacturing and industrial, healthcare and life sciences, and telecommunications technology. Their particular strength lies in regulated industries requiring compliance expertise.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                How long does it take to see results from B2B marketing in the UK?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Expect 3-6 months to see meaningful pipeline impact from demand generation programs. Enterprise ABM campaigns targeting FTSE 350 or large UK accounts may take 6-12 months to influence deals, given the longer evaluation cycles typical in British enterprise sales.
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
            Expanding beyond the UK? Explore B2B marketing agencies in key trading partners and major global hubs.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">United States</h3>
              <p className="text-white/60">World's largest B2B technology and enterprise market</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Germany</h3>
              <p className="text-white/60">Europe's largest economy and manufacturing powerhouse</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-ireland-top-b2b-marketing-agencies-ireland" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Ireland</h3>
              <p className="text-white/60">European HQ for major US tech companies</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-netherlands-top-b2b-marketing-agencies-netherlands" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Netherlands</h3>
              <p className="text-white/60">Key European logistics and tech hub</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-france-top-b2b-marketing-agencies-france" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">France</h3>
              <p className="text-white/60">Major European market for enterprise B2B</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-australia-top-b2b-marketing-agencies-australia" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Australia</h3>
              <p className="text-white/60">Key APAC market with strong UK business ties</p>
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
            Build Your B2B Marketing Strategy for the UK
          </h2>
          <p className="text-2xl text-white/95 mb-12">
            Create a comprehensive B2B marketing strategy for the UK and European markets. Whether you work with a B2B marketing agency UK recommends or build in-house capabilities, start with the right strategic foundation.
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
