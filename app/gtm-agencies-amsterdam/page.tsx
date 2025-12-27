import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'GTM Agencies Amsterdam 2025 | Top Go-To-Market Consultants Netherlands',
  description: 'Find the best GTM agencies in Amsterdam. Compare top Amsterdam-based go-to-market consultancies for B2B SaaS, fintech, and tech companies expanding into Dutch and European markets.',
  keywords: 'GTM agency Amsterdam, go-to-market agencies Amsterdam, GTM consultants Netherlands, product launch agency Amsterdam, B2B GTM strategy Amsterdam, Amsterdam tech agencies',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-amsterdam'
  }
};

export const revalidate = 3600;

export default async function GTMAgenciesAmsterdamPage() {
  const agencies = await getAgenciesForLocation('Amsterdam');
  const stats = await getLocationStats('Amsterdam');

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the typical cost of a GTM agency in Amsterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GTM agencies in Amsterdam typically charge between €6,000-€20,000 per month for retainer engagements. Project-based work ranges from €12,000-€60,000 depending on scope. Amsterdam offers competitive pricing compared to London while delivering high-quality European market expertise."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose an Amsterdam-based GTM agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Amsterdam agencies offer exceptional multilingual capabilities, fintech and payments expertise, strong logistics and e-commerce knowledge, and access to the Benelux market. The city's international business culture makes it ideal for pan-European GTM strategies."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do Amsterdam GTM agencies specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Amsterdam GTM agencies excel in fintech and payments, logistics and supply chain technology, e-commerce platforms, sustainable technology, and enterprise SaaS. They leverage the Netherlands' position as a European logistics hub and financial center."
        }
      },
      {
        "@type": "Question",
        "name": "Is Amsterdam good for European market expansion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Amsterdam is an excellent base for European expansion. Dutch agencies typically operate in English and multiple European languages, understand diverse European markets, and can coordinate expansion into Germany, France, UK, and Nordic countries from a central location."
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
            "name": "GTM Agencies Amsterdam 2025",
            "description": "Find the best GTM agencies in Amsterdam, Netherlands",
            "url": "https://gtm.quest/gtm-agencies-amsterdam"
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
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/best-gtm-agencies" className="hover:text-white">GTM Agencies</Link> / <Link href="/best-gtm-agency-netherlands-top-gtm-agencies-netherlands" className="hover:text-white">Netherlands</Link> / <span className="text-white">Amsterdam</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1920&q=80"
            alt="GTM agencies Amsterdam - Amsterdam canal houses and bridges"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Amsterdam, Netherlands</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>
            GTM Agencies<br />in Amsterdam
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {stats.totalAgencies} verified go-to-market agencies in Amsterdam. Find the right GTM partner for Benelux market entry and pan-European expansion.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{stats.totalAgencies}</div>
              <div className="text-white/70 text-lg">Top Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">€{Math.round(stats.avgMinBudget / 1000)}K+</div>
              <div className="text-white/70 text-lg">Avg Budget</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">EU</div>
              <div className="text-white/70 text-lg">Market Access</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">CET</div>
              <div className="text-white/70 text-lg">Time Zone</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Amsterdam Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Why Choose a GTM Agency in Amsterdam?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Amsterdam has emerged as <a href="https://www.iamsterdam.com/en/business" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Europe's most international business hub</a>, hosting the European headquarters of companies like Uber, Netflix, and Booking.com. The Netherlands ranks among the world's most connected economies, with <a href="https://www.portofrotterdam.com/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Rotterdam Port</a> handling the largest shipping volume in Europe. Amsterdam GTM agencies understand how to position B2B technology for global logistics, payments, and enterprise markets.
            </p>
            <p>
              The Dutch startup ecosystem, anchored by <a href="https://startupamsterdam.org/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Startup Amsterdam</a>, has produced unicorns including Adyen, Mollie, and MessageBird. According to <a href="https://www.cbs.nl/en-gb" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Statistics Netherlands (CBS)</a>, the country maintains one of the highest English proficiency rates globally, making Amsterdam agencies naturally suited for multilingual, pan-European campaigns. Dutch business culture values directness and pragmatism, enabling efficient B2B relationships.
            </p>
            <p>
              Amsterdam agencies particularly excel in fintech and payments technology marketing, logistics and supply chain B2B positioning, e-commerce platform go-to-market, sustainable technology launches, and cross-border European expansion. They understand <a href="https://autoriteitpersoonsgegevens.nl/en" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Dutch Data Protection Authority</a> requirements and can navigate GDPR compliance while executing sophisticated demand generation programs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            GTM Services in Amsterdam
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Benelux Market Entry</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Amsterdam agencies specialize in launching products across the Benelux region (Belgium, Netherlands, Luxembourg). This includes localization strategy, channel partner identification, and positioning for Dutch and Belgian enterprise buyers who value efficient, no-nonsense business relationships.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Pan-European Demand Generation</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Leverage Amsterdam's central European position for multi-market demand generation. Dutch agencies excel at coordinating campaigns across <Link href="/gtm-agencies-london" className="text-blue-400 hover:text-blue-300 underline">UK</Link>, <Link href="/gtm-agencies-paris" className="text-blue-400 hover:text-blue-300 underline">France</Link>, <Link href="/gtm-agencies-berlin" className="text-blue-400 hover:text-blue-300 underline">Germany</Link>, and Nordic markets using platforms like <a href="https://www.hubspot.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot</a> and Salesforce.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Fintech & Payments GTM</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Amsterdam is Europe's fintech capital, home to Adyen and Mollie. Local agencies understand payment technology positioning, regulatory requirements, and how to target European merchants and financial institutions seeking innovative payment solutions.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">International Content & Messaging</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Dutch agencies deliver naturally multilingual content strategies. With native-level English and strong German, French, and Nordic language capabilities, they create thought leadership and marketing assets that resonate across European markets without losing nuance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Key Industries for GTM in Amsterdam
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Fintech & Payments</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Amsterdam hosts Europe's leading payment companies including Adyen (valued at over €40 billion) and Mollie. GTM agencies help payment technology providers, banking software companies, and financial infrastructure startups position for European financial institutions.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Logistics & Supply Chain</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                With Rotterdam Port and Schiphol Airport, the Netherlands is Europe's logistics gateway. Agencies specialize in B2B marketing for logistics technology, warehouse automation, and supply chain visibility solutions targeting European and global shippers.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">E-Commerce & Retail Tech</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Home to Booking.com and a thriving e-commerce ecosystem, Amsterdam agencies understand online marketplace dynamics, retail technology positioning, and conversion optimization for European consumer markets with diverse payment preferences.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Sustainable Technology</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                The Netherlands leads in sustainable innovation, from offshore wind to circular economy solutions. Amsterdam agencies help cleantech and sustainability-focused B2B companies position for European corporations with ambitious ESG commitments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            How to Choose the Right GTM Agency in Amsterdam
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>01. Pan-European Experience</h3>
              <p>
                The best Amsterdam agencies operate across multiple European markets. Look for proven experience in at least 3-4 European countries, with case studies demonstrating successful cross-border campaigns. Their international perspective should complement deep Dutch market knowledge.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>02. Industry Specialization</h3>
              <p>
                Amsterdam has distinct strengths in fintech, logistics, and e-commerce. Evaluate agencies on their vertical expertise—the best partners will have deep knowledge of your industry's European competitive landscape, buyer personas, and regulatory environment.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>03. Multilingual Capabilities</h3>
              <p>
                While Dutch agencies naturally operate in English, assess their capabilities in German, French, and Nordic languages if those markets matter to you. The best agencies can localize messaging while maintaining brand consistency across European markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agencies List Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Top GTM Agencies in Amsterdam
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {stats.totalAgencies} verified go-to-market agencies serving Amsterdam and the Netherlands. Find your ideal GTM partner for Benelux and European expansion.
          </p>
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
          <h2 className="text-5xl font-black text-white mb-16">Amsterdam GTM Agency FAQs</h2>
          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                What is the typical cost of a GTM agency in Amsterdam?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                GTM agencies in Amsterdam typically charge between €6,000-€20,000 per month for retainer engagements. Project-based work ranges from €12,000-€60,000 depending on scope. Amsterdam offers competitive pricing compared to <Link href="/gtm-agencies-london" className="text-blue-400 hover:text-blue-300 underline">London</Link> while delivering high-quality European market expertise.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                Why choose an Amsterdam-based GTM agency?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Amsterdam agencies offer exceptional multilingual capabilities, fintech and payments expertise, strong logistics and e-commerce knowledge, and access to the Benelux market. The city's international business culture makes it ideal for pan-European GTM strategies.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                What industries do Amsterdam GTM agencies specialize in?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Amsterdam GTM agencies excel in fintech and payments, logistics and supply chain technology, e-commerce platforms, sustainable technology, and enterprise SaaS. They leverage the Netherlands' position as a European logistics hub and financial center.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                Is Amsterdam good for European market expansion?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Yes, Amsterdam is an excellent base for European expansion. Dutch agencies typically operate in English and multiple European languages, understand diverse European markets, and can coordinate expansion into <Link href="/gtm-agencies-berlin" className="text-blue-400 hover:text-blue-300 underline">Germany</Link>, <Link href="/gtm-agencies-paris" className="text-blue-400 hover:text-blue-300 underline">France</Link>, UK, and Nordic countries from a central location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Markets Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-10">Explore Related Markets</h2>
          <p className="text-2xl text-white/80 mb-12 max-w-4xl">
            Expanding beyond Amsterdam? Explore GTM agencies in key European cities and global markets.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/best-gtm-agency-netherlands-top-gtm-agencies-netherlands" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Netherlands (All Cities)</h3>
              <p className="text-white/60">Explore GTM agencies across the Netherlands</p>
            </Link>
            <Link href="/gtm-agencies-london" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">London</h3>
              <p className="text-white/60">UK's leading GTM hub for European expansion</p>
            </Link>
            <Link href="/gtm-agencies-berlin" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Berlin</h3>
              <p className="text-white/60">Germany's startup capital for tech GTM</p>
            </Link>
            <Link href="/gtm-agencies-paris" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Paris</h3>
              <p className="text-white/60">France's luxury and tech innovation hub</p>
            </Link>
            <Link href="/gtm-agencies-stockholm" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Stockholm</h3>
              <p className="text-white/60">Nordic's leading tech and startup ecosystem</p>
            </Link>
            <Link href="/gtm-agencies-munich" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Munich</h3>
              <p className="text-white/60">Germany's enterprise and automotive capital</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-10">GTM Resources</h2>
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
            <Link href="/gtm-strategy-template" className="block p-8 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">GTM Strategy Template</h3>
              <p className="text-white/60">Download our proven go-to-market strategy framework</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Build Your Amsterdam GTM Strategy
          </h2>
          <p className="text-2xl text-white/95 mb-12">
            Create a comprehensive go-to-market strategy for Benelux and pan-European markets. Start with the right strategic foundation for market entry success.
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
