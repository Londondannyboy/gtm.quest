import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Germany 2025 | GTM Quest',
  description: 'Find the best B2B marketing agency Germany has for your business. Compare top B2B marketing agencies in Germany for Berlin, Munich, Frankfurt, and DACH markets.',
  keywords: 'best B2B marketing agency Germany, top B2B marketing agencies Berlin, B2B marketing Munich, B2B marketing Frankfurt, demand generation Germany, DACH B2B marketing',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany'
  }
};

export const revalidate = 3600;

export default async function B2BMarketingAgencyGermanyPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Germany');
  const totalAgencies = agencies.length;
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the typical cost of a B2B marketing agency in Germany?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "B2B marketing agencies in Germany typically charge €8,000-€30,000 per month for retainer engagements. Project-based work ranges from €20,000-€100,000 depending on scope. Enterprise-focused agencies serving DAX 40 companies may require higher monthly minimums."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose a German B2B marketing agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "German agencies offer deep understanding of Mittelstand business culture, native German technical content creation, expertise in automotive, manufacturing, and industrial B2B, and access to the DACH market (Germany, Austria, Switzerland)."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do German B2B marketing agencies specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "German agencies excel in automotive and mobility technology, industrial automation and Industry 4.0, manufacturing and precision engineering, enterprise software, and sustainable technology positioning."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from B2B marketing in Germany?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expect 6-12 months to see meaningful pipeline impact from demand generation programs in Germany. Enterprise deals targeting German industrial companies may take 12-24 months due to extensive technical validation and engineering committee approvals."
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
            "name": "Best B2B Marketing Agency Germany 2025",
            "description": "Find the best B2B marketing agency Germany has for your business",
            "url": "https://gtm.quest/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany"
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
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/best-gtm-agencies" className="hover:text-white">Agencies</Link> / <span className="text-white">B2B Marketing Agency Germany</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1920&q=80"
            alt="Best B2B marketing agency Germany - Berlin Brandenburg Gate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Germany</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>
            Best B2B Marketing Agency Germany 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} B2B marketing agencies Germany has to offer. Find the right B2B marketing agency Germany businesses trust for growth across DACH and Europe.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">Top Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">€{Math.round(avgMinBudget / 1000)}K+</div>
              <div className="text-white/70 text-lg">Avg Budget</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">100%</div>
              <div className="text-white/70 text-lg">Verified</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">DACH</div>
              <div className="text-white/70 text-lg">Market</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Germany Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Why Choose a B2B Marketing Agency Germany for Your Business?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Germany commands <a href="https://en.wikipedia.org/wiki/Economy_of_Germany" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Europe's largest economy</a> with GDP exceeding €4 trillion, and maintains global leadership in precision manufacturing, automotive engineering, and industrial technology. Working with a B2B marketing agency Germany gives you access to Berlin, Munich, Frankfurt, Hamburg, and Düsseldorf's thriving business ecosystems. According to the <a href="https://www.bmwk.de/Navigation/EN/Home/home.html" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Federal Ministry for Economic Affairs and Climate Action</a>, German exports exceed €1.5 trillion annually, with B2B industrial goods representing the majority. German B2B marketing agencies understand the rigorous, engineering-driven approaches that German enterprise buyers demand.
            </p>
            <p>
              The <a href="https://en.wikipedia.org/wiki/Mittelstand" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Mittelstand tradition</a> of family-owned enterprises—comprising 99% of German businesses and employing 60% of workers—creates a distinctive B2B landscape. According to <a href="https://www.destatis.de/EN/Home/_node.html" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Destatis (Federal Statistical Office)</a>, Germany's industrial sector drives 27% of GDP—far higher than other developed economies. Marketing to German buyers demands technical depth, engineering-grade documentation, and case studies demonstrating Ingenieurkunst (engineering excellence). The <a href="https://www.kfw.de/KfW-Group/About-KfW/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">KfW Research</a> shows German businesses prioritize long-term partnerships over short-term cost savings, requiring relationship-building approaches fundamentally different from Anglo-American transactional models.
            </p>
            <p>
              German agencies particularly excel in automotive and mobility technology marketing, industrial automation and Industry 4.0 positioning, manufacturing and precision engineering B2B, enterprise software for industrial applications, and sustainable technology marketing. They understand <a href="https://data.worldbank.org/country/germany" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">German regulatory requirements</a>, TÜV certifications, and the documentation standards required by German procurement. Every B2B marketing agency Germany features in our list navigates the DACH market (Germany, Austria, Switzerland) with native expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            What Services Do B2B Marketing Agencies Germany Offer?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Demand Generation & Lead Generation</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                German agencies build demand generation systems adapted to longer European sales cycles. This includes marketing automation implementation with <a href="https://www.hubspot.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot</a>, SAP Marketing Cloud, or Marketo, sophisticated lead scoring, and DSGVO (GDPR) compliant data management. They understand the 12-24 month enterprise sales cycles typical in German industrial markets.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Account-Based Marketing (ABM)</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                For DAX 40 and Mittelstand enterprise targeting, German agencies implement ABM strategies using platforms like <a href="https://www.demandbase.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Demandbase</a> or 6sense. They understand how to target German industrial groups and manufacturing leaders, combining digital precision with the relationship-building approaches valued in German business culture.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Technical Content & Documentation</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Creating content for German technical buyers requires deep engineering expertise. German agencies produce Whitepaper, technical specifications, and Fallstudien (case studies) that meet Germanic documentation standards. Their content teams deliver native-level German technical writing essential for industrial B2B credibility.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">DACH Market Expansion</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                German agencies help companies expand across the DACH market (Germany, Austria, Switzerland) and into broader European markets. They understand regional variations between Bavarian and northern German business culture, and navigate relationships with markets including <Link href="/best-b2b-marketing-agency-france-top-b2b-marketing-agencies-france" className="text-blue-400 hover:text-blue-300 underline">France</Link> and <Link href="/best-b2b-marketing-agency-netherlands-top-b2b-marketing-agencies-netherlands" className="text-blue-400 hover:text-blue-300 underline">Netherlands</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Key Industries for B2B Marketing in Germany
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              <strong className="text-white">Automotive & Mobility:</strong> Germany is home to global automotive leaders including Volkswagen, BMW, Mercedes-Benz, and the world's largest automotive supplier ecosystem. B2B marketing agencies specialize in positioning Tier 1 and Tier 2 suppliers, EV technology providers, and mobility software companies. The <a href="https://www.vda.de/en" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">German Association of the Automotive Industry</a> represents over 600 companies with combined revenue exceeding €400 billion.
            </p>
            <p>
              <strong className="text-white">Industrial Automation & Industry 4.0:</strong> Germany leads global Industry 4.0 initiatives with world-class automation companies like Siemens, Bosch, and KUKA. B2B agencies understand how to market industrial IoT, smart factory solutions, and automation technology to German manufacturing decision-makers who demand technical validation before procurement.
            </p>
            <p>
              <strong className="text-white">Manufacturing & Precision Engineering:</strong> The German Mittelstand includes thousands of hidden champions—world-leading specialists in precision components, machine tools, and industrial equipment. Agencies help these companies market globally while maintaining the engineering credibility central to German manufacturing reputation.
            </p>
            <p>
              <strong className="text-white">Enterprise Software & SaaS:</strong> Germany has Europe's largest enterprise software market, led by SAP and a thriving startup ecosystem in Berlin, Munich, and Hamburg. Agencies specialize in B2B software marketing that meets German data protection requirements and enterprise procurement standards.
            </p>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            How to Choose the Right B2B Marketing Agency Germany
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Industry Experience</h3>
              <p>
                B2B marketing in Germany requires deep industry expertise. Look for agencies with case studies in your vertical—automotive suppliers require different approaches than software companies or industrial equipment manufacturers. Ask about their experience with both German Mittelstand and international companies entering the German market.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>German Language & Cultural Expertise</h3>
              <p>
                The German market demands native-level German content—technical documentation, case studies, and thought leadership must meet exacting German standards. The best agencies offer native German copywriters with technical backgrounds who understand the formal, precise communication style expected in German business culture.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>DSGVO Compliance & Technology Stack</h3>
              <p>
                German data protection laws (DSGVO/GDPR) require careful attention. Evaluate agencies on their expertise with compliant marketing automation, first-party data strategies, and cookie consent management. The best German agencies navigate complex regulatory requirements while implementing sophisticated martech stacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agencies List Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Top B2B Marketing Agency Germany Directory
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {totalAgencies} verified B2B marketing agencies serving Germany. Find the best B2B marketing agency Germany companies recommend for demand generation, ABM, and industrial B2B growth.
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
          <h2 className="text-5xl font-black text-white mb-16">B2B Marketing Agency Germany FAQs</h2>
          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                What is the typical cost of a B2B marketing agency in Germany?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                B2B marketing agencies in Germany typically charge €8,000-€30,000 (approximately $8,500-$32,000) per month for retainer engagements. Project-based work ranges from €20,000-€100,000 depending on scope. This positions German agencies similarly to <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="text-blue-400 hover:text-blue-300 underline">UK agencies</Link>, with premium pricing for specialized industrial and automotive expertise.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                Why choose a German B2B marketing agency?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                German agencies offer deep understanding of Mittelstand business culture, native German technical content creation, expertise in automotive and manufacturing B2B, and access to the DACH market (Germany, Austria, Switzerland). They understand the engineering-driven, relationship-focused approach German enterprise buyers expect.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                What industries do German B2B marketing agencies specialize in?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                German agencies excel in automotive and mobility technology, industrial automation and Industry 4.0, manufacturing and precision engineering, enterprise software, sustainable technology, and renewable energy. Their particular strength lies in technical B2B requiring engineering credibility.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                How long does it take to see results from B2B marketing in Germany?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Expect 6-12 months to see meaningful pipeline impact from demand generation programs in Germany. Enterprise deals targeting large German industrial companies may take 12-24 months to influence, given extensive technical validation, engineering committee approvals, and relationship-building requirements.
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
            Expanding beyond Germany? Explore B2B marketing agencies in key European markets and global trading partners.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">United Kingdom</h3>
              <p className="text-white/60">Major trading partner and financial services hub</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-france-top-b2b-marketing-agencies-france" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">France</h3>
              <p className="text-white/60">Key European partner for industrial and aerospace B2B</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-netherlands-top-b2b-marketing-agencies-netherlands" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Netherlands</h3>
              <p className="text-white/60">Gateway to Benelux logistics and technology</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-austria-top-b2b-marketing-agencies-austria" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Austria</h3>
              <p className="text-white/60">DACH market partner with German-language expertise</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-switzerland-top-b2b-marketing-agencies-switzerland" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Switzerland</h3>
              <p className="text-white/60">Premium market for precision and financial technology</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-poland-top-b2b-marketing-agencies-poland" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Poland</h3>
              <p className="text-white/60">Germany's largest Eastern European trading partner</p>
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
            Build Your B2B Marketing Strategy for Germany
          </h2>
          <p className="text-2xl text-white/95 mb-12">
            Create a comprehensive B2B marketing strategy for German and DACH markets. Whether you work with a B2B marketing agency Germany recommends or build in-house capabilities, start with the right strategic foundation.
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
