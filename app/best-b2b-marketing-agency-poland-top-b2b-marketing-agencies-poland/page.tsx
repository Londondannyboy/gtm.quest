import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Poland 2025 | GTM Quest',
  description: 'Find the best B2B marketing agency Poland has for your business. Compare top B2B marketing agencies in Poland for Warsaw, Krakow, and Central European markets.',
  keywords: 'best B2B marketing agency Poland, top B2B marketing agencies Warsaw, B2B marketing Poland, B2B marketing agency Poland, B2B marketing Krakow, Polish marketing agencies',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-poland-top-b2b-marketing-agencies-poland'
  }
};

export const revalidate = 3600;

export default async function B2BMarketingAgencyPolandPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Poland');
  const totalAgencies = agencies.length;
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the typical cost of a B2B marketing agency in Poland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "B2B marketing agencies in Poland typically charge PLN 15,000-50,000 per month for retainer engagements, which is 40-60% less than Western European equivalents. Project-based work ranges from PLN 30,000-150,000 depending on scope."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose a Polish B2B marketing agency over Western European agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Polish agencies offer Western European quality at competitive rates, with strong English and German language capabilities, EU membership benefits, and expertise bridging Western and Eastern European business cultures."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do Polish B2B marketing agencies specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Polish agencies excel in IT services, software development, fintech, manufacturing, industrial equipment, e-commerce platforms, and Central-Eastern European market entry strategies."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from B2B marketing in Poland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expect 3-6 months to see meaningful pipeline impact from demand generation programs. Enterprise ABM campaigns targeting large Polish or European accounts may take 6-12 months to influence deals."
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
            "name": "Best B2B Marketing Agency Poland 2025",
            "description": "Find the best B2B marketing agency Poland has for your business",
            "url": "https://gtm.quest/best-b2b-marketing-agency-poland-top-b2b-marketing-agencies-poland"
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
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/best-gtm-agencies" className="hover:text-white">Agencies</Link> / <span className="text-white">B2B Marketing Agency Poland</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1589988160728-c9e3b1e62321?w=1920&q=80"
            alt="Best B2B marketing agency Poland - Warsaw city skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Poland</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>
            Best B2B Marketing Agency Poland 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} B2B marketing agencies Poland has to offer. Find the right B2B marketing agency Poland businesses trust for growth across Central and Eastern Europe.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">Top Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">PLN{Math.round((avgMinBudget * 4) / 1000)}K+</div>
              <div className="text-white/70 text-lg">Avg Budget</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">100%</div>
              <div className="text-white/70 text-lg">Verified</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">CEE</div>
              <div className="text-white/70 text-lg">Gateway</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Poland Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Why Choose a B2B Marketing Agency Poland for Your Business?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Poland has emerged as <a href="https://en.wikipedia.org/wiki/Economy_of_Poland" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Central Europe's technology powerhouse</a> and premier nearshoring destination for Western enterprises. Working with a B2B marketing agency Poland offers gives you access to Warsaw, Krakow, and Wroclaw's major tech hubs. According to the <a href="https://www.paih.gov.pl/en" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Polish Investment and Trade Agency</a>, Poland attracted over €24 billion in foreign direct investment in 2024, with technology and business services leading sectors. Polish B2B marketing agencies combine Western European sophistication with cost-effective execution, making Poland an attractive base for companies targeting both Western Europe and emerging Eastern European markets.
            </p>
            <p>
              With over 38 million consumers, EU membership since 2004, and a highly educated, multilingual workforce, choosing a B2B marketing agency Poland provides unique advantages. According to <a href="https://stat.gov.pl/en/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Statistics Poland (GUS)</a>, IT services exports grew 18% annually reaching €10 billion, making Poland Europe's fastest-growing tech outsourcing market. The <a href="https://www.parp.gov.pl/en" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Polish Agency for Enterprise Development</a> reports over 90,000 technology companies now operate in Poland, creating a thriving B2B ecosystem. Every B2B marketing agency Poland features in our list excels at creating campaigns that bridge Western and Eastern European business cultures.
            </p>
            <p>
              Polish agencies particularly excel in IT services and software development marketing, manufacturing and industrial B2B positioning, fintech and banking technology, e-commerce and digital transformation campaigns, and Central-Eastern European market entry strategies. They leverage <a href="https://www.gov.pl/web/poland" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Poland's EU membership and strategic location</a> to help vendors understand the Polish business mindset. Research from <a href="https://data.worldbank.org/country/poland" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">World Bank data</a> shows Poland's GDP growth consistently outpaces EU averages, making it a strategic market for B2B expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            What Services Do B2B Marketing Agencies Poland Offer?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Demand Generation & Lead Generation</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Polish agencies excel at building demand generation systems, not just campaigns. This includes marketing automation implementation with <a href="https://www.hubspot.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot</a>, Salesforce, or Marketo, lead scoring models, and closed-loop reporting. They understand the longer sales cycles typical in Polish enterprise markets and build nurture sequences accordingly.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Account-Based Marketing (ABM)</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                For enterprise targeting, Polish agencies implement ABM strategies using platforms like <a href="https://www.demandbase.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Demandbase</a> or 6sense. They understand how to target Polish enterprise accounts and multinational corporations with EMEA headquarters, combining digital precision with relationship-building approaches valued in Polish business culture.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Content Marketing & SEO</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Creating content for technical B2B buyers requires deep industry expertise. Polish agencies produce thought leadership content, technical whitepapers, and case studies in both Polish and English. Their SEO teams understand local search behavior and optimize for both Polish-language and international keywords.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">CEE Market Entry Strategy</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Polish agencies are uniquely positioned to help companies expand across Central and Eastern Europe. They understand regulatory requirements, cultural nuances, and business practices in neighboring markets including <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="text-blue-400 hover:text-blue-300 underline">Germany</Link>, Czech Republic, Slovakia, and the Baltic states.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Key Industries for B2B Marketing in Poland
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              <strong className="text-white">Technology & Software Development:</strong> Poland is home to over 400,000 IT professionals according to the <a href="https://ec.europa.eu/eurostat" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">European Commission's Eurostat</a>. B2B marketing agencies specialize in positioning software houses, SaaS companies, and IT service providers for Western European and US markets. Companies like CD Projekt, Allegro, and countless software houses have proven Polish tech credibility globally.
            </p>
            <p>
              <strong className="text-white">Manufacturing & Industrial:</strong> Poland is Europe's 6th largest manufacturing economy. B2B agencies understand how to market to industrial buyers, create technical content for engineering decision-makers, and navigate long procurement cycles typical of manufacturing sectors. The <a href="https://tradingeconomics.com/poland/manufacturing-production" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Polish manufacturing sector</a> continues to attract major investments from automotive, aerospace, and electronics companies.
            </p>
            <p>
              <strong className="text-white">Fintech & Banking:</strong> Warsaw is emerging as a European fintech hub. Polish agencies market to financial services buyers who demand regulatory compliance expertise, security-focused messaging, and understanding of both Polish and EU financial regulations. The sector has attracted significant venture capital investment.
            </p>
            <p>
              <strong className="text-white">Business Process Outsourcing (BPO):</strong> Poland hosts over 1,500 shared service centers and BPO operations. Agencies help these companies market their services to Western European and global enterprises, emphasizing quality, language capabilities, and cost advantages.
            </p>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            How to Choose the Right B2B Marketing Agency Poland
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Industry Experience</h3>
              <p>
                B2B marketing in Poland requires understanding of local business culture and industry verticals. Look for agencies with case studies in your sector—IT services require different approaches than manufacturing or financial services. Ask about their experience with both Polish enterprises and international companies operating in Poland.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Language & Cultural Capabilities</h3>
              <p>
                The best Polish agencies offer native-level Polish content creation alongside fluent English and often German. They understand when to use formal business Polish versus more casual startup culture communication, and can navigate the relationship-oriented approach preferred by Polish enterprise buyers.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Technology Stack & Integration</h3>
              <p>
                Modern B2B marketing requires sophisticated technology. Evaluate agencies on their expertise with marketing automation platforms, CRM integration capabilities, analytics and attribution tracking, and their ability to implement account-based marketing technology. Ask about their experience with tools commonly used in your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agencies List Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Top B2B Marketing Agency Poland Directory
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {totalAgencies} verified B2B marketing agencies serving Poland. Find the best B2B marketing agency Poland businesses recommend for demand generation, ABM, and revenue growth.
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
          <h2 className="text-5xl font-black text-white mb-16">B2B Marketing Agency Poland FAQs</h2>
          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                What is the typical cost of a B2B marketing agency in Poland?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                B2B marketing agencies in Poland typically charge PLN 15,000-50,000 (approximately €3,500-€11,500) per month for retainer engagements, which is 40-60% less than equivalent agencies in Western Europe. Project-based work ranges from PLN 30,000-150,000 depending on scope. This cost advantage, combined with high-quality output, makes Polish agencies attractive for companies across <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="text-blue-400 hover:text-blue-300 underline">the UK</Link>, <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="text-blue-400 hover:text-blue-300 underline">Germany</Link>, and <Link href="/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us" className="text-blue-400 hover:text-blue-300 underline">the United States</Link>.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                Why choose a Polish B2B marketing agency over Western European agencies?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Polish agencies offer Western European quality at competitive rates, with strong English and German language capabilities, EU membership benefits including GDPR compliance expertise, and unique expertise bridging Western and Eastern European business cultures. They're particularly valuable for companies targeting CEE expansion or seeking cost-effective execution of sophisticated B2B marketing programs.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                What industries do Polish B2B marketing agencies specialize in?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Polish agencies excel in IT services, software development, fintech, manufacturing, industrial equipment, e-commerce platforms, and Central-Eastern European market entry strategies. They have particular strength in marketing technology companies due to Poland's position as a major tech outsourcing destination.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                How long does it take to see results from B2B marketing in Poland?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Expect 3-6 months to see meaningful pipeline impact from demand generation programs. Enterprise ABM campaigns targeting large Polish or European accounts may take 6-12 months to influence deals, given the longer evaluation cycles typical in Polish enterprise sales.
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
            Expanding beyond Poland? Explore B2B marketing agencies in neighboring European markets and major global hubs.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Germany</h3>
              <p className="text-white/60">Europe's largest economy and Poland's biggest trading partner</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">United Kingdom</h3>
              <p className="text-white/60">Major destination for Polish tech exports</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-netherlands-top-b2b-marketing-agencies-netherlands" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Netherlands</h3>
              <p className="text-white/60">Key European logistics and tech hub</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-austria-top-b2b-marketing-agencies-austria" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Austria</h3>
              <p className="text-white/60">Gateway to DACH markets from CEE</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-sweden-top-b2b-marketing-agencies-sweden" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Sweden</h3>
              <p className="text-white/60">Nordic tech innovation leader</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">United States</h3>
              <p className="text-white/60">World's largest B2B technology market</p>
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
            Build Your B2B Marketing Strategy for Poland
          </h2>
          <p className="text-2xl text-white/95 mb-12">
            Create a comprehensive B2B marketing strategy for Poland and Central European markets. Whether you work with a B2B marketing agency Poland recommends or build in-house capabilities, start with the right strategic foundation.
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
