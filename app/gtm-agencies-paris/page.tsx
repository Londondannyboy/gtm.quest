import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesForLocation, getLocationStats } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'GTM Agencies Paris 2025 | Top Go-To-Market Consultants France',
  description: 'Find the best GTM agencies in Paris. Compare top Paris-based go-to-market consultancies for B2B SaaS, enterprise, and tech companies expanding into French and European markets.',
  keywords: 'GTM agency Paris, go-to-market agencies Paris, GTM consultants France, product launch agency Paris, B2B GTM strategy Paris, Paris tech agencies',
  alternates: {
    canonical: 'https://gtm.quest/gtm-agencies-paris'
  }
};

export const revalidate = 3600;

export default async function GTMAgenciesParisPage() {
  const agencies = await getAgenciesForLocation('Paris');
  const stats = await getLocationStats('Paris');

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the typical cost of a GTM agency in Paris?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GTM agencies in Paris typically charge between €8,000-€25,000 per month for retainer engagements. Project-based work ranges from €15,000-€80,000 depending on scope. Agencies serving luxury and enterprise clients may require higher minimums."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose a Paris-based GTM agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Paris agencies offer deep expertise in French market entry, luxury and fashion B2B positioning, aerospace and defense technology, and strong connections to La French Tech ecosystem. They understand French business culture and regulatory requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do Paris GTM agencies specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Paris GTM agencies excel in luxury goods and fashion technology, aerospace and defense, fintech and banking, SaaS and enterprise software, and sustainable technology. They leverage France's position as Europe's second-largest economy."
        }
      },
      {
        "@type": "Question",
        "name": "Do Paris GTM agencies work with international companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many Paris agencies specialize in helping US and UK companies enter the French market, as well as supporting French companies expanding globally. They provide bilingual teams and understand cross-cultural B2B dynamics."
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
            "name": "GTM Agencies Paris 2025",
            "description": "Find the best GTM agencies in Paris, France",
            "url": "https://gtm.quest/gtm-agencies-paris"
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
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/best-gtm-agencies" className="hover:text-white">GTM Agencies</Link> / <Link href="/best-gtm-agency-france-top-gtm-agencies-france" className="hover:text-white">France</Link> / <span className="text-white">Paris</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80"
            alt="GTM agencies Paris - Eiffel Tower and Paris cityscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Paris, France</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>
            GTM Agencies<br />in Paris
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            {stats.totalAgencies} verified go-to-market agencies in Paris. Find the right GTM partner for French market entry and European expansion.
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

      {/* Why Paris Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Why Choose a GTM Agency in Paris?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              Paris is the heart of <a href="https://lafrenchtech.com/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">La French Tech</a>, France's thriving startup ecosystem that has produced unicorns like Doctolib, BlaBlaCar, and Datadog. As <a href="https://en.wikipedia.org/wiki/Economy_of_France" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Europe's second-largest economy</a>, France offers access to 67 million consumers and serves as a gateway to Southern European markets. Paris GTM agencies understand the unique dynamics of French B2B sales cycles and relationship-driven business culture.
            </p>
            <p>
              The Paris business ecosystem spans iconic industries from luxury goods (LVMH, Kering, Hermes) to aerospace (<a href="https://www.airbus.com/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Airbus</a>, Thales, Safran) to banking (BNP Paribas, Societe Generale). According to <a href="https://www.insee.fr/en/accueil" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">INSEE (French National Statistics)</a>, the Ile-de-France region generates over 30% of France's GDP. GTM agencies in Paris help tech companies navigate these complex enterprise environments and position solutions for French decision-makers.
            </p>
            <p>
              Paris agencies particularly excel in luxury and fashion technology positioning, aerospace and defense B2B marketing, fintech and banking solutions, enterprise SaaS go-to-market, and sustainable technology launches. They understand <a href="https://www.cnil.fr/en/home" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">CNIL regulations</a> and French data protection requirements, along with the formal communication styles expected in French enterprise sales.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            GTM Services in Paris
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">French Market Entry Strategy</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Paris agencies specialize in market entry strategies for companies expanding into France. This includes competitive analysis, pricing localization, channel partner development, and positioning for French enterprise buyers who value relationships and formal business processes.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Demand Generation & ABM</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Implement sophisticated demand generation programs adapted to French market dynamics. Paris agencies understand how to target CAC 40 companies and growth-stage French enterprises using platforms like <a href="https://www.hubspot.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot</a> and Salesforce while maintaining RGPD (GDPR) compliance.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Content & Thought Leadership</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                French B2B buyers expect sophisticated, intellectual content. Paris agencies create native French thought leadership, case studies, and technical documentation that resonates with French decision-makers and positions companies as credible market participants.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">European Expansion Support</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Use Paris as your European hub for expansion into <Link href="/gtm-agencies-barcelona" className="text-blue-400 hover:text-blue-300 underline">Spain</Link>, <Link href="/gtm-agencies-milan" className="text-blue-400 hover:text-blue-300 underline">Italy</Link>, and Francophone markets including Belgium, Switzerland, and North Africa. Paris agencies coordinate multi-market launches with cultural sensitivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Key Industries for GTM in Paris
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Luxury & Fashion Technology</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Paris is the global capital of luxury, home to LVMH, Kering, and Hermes. GTM agencies help B2B technology companies position solutions for luxury retail, supply chain, and digital experience platforms serving the world's most prestigious brands.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Aerospace & Defense</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                France's aerospace industry, anchored by Airbus, Thales, and Safran, represents a major B2B technology market. Paris agencies understand the complex procurement cycles and security requirements of defense and aerospace technology sales.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Fintech & Banking</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Paris is a major European financial center with leading banks like BNP Paribas and Societe Generale. Post-Brexit, Paris has attracted significant fintech investment. Agencies help B2B fintech companies navigate regulated financial markets.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">SaaS & Enterprise Software</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                La French Tech has produced successful SaaS companies including Algolia, Datadog, and Contentsquare. Paris agencies understand how to position enterprise software for French buyers who expect rigorous evaluation processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            How to Choose the Right GTM Agency in Paris
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>01. French Market Expertise</h3>
              <p>
                Look for agencies with proven experience in French B2B markets. The best Paris agencies understand French business etiquette, decision-making hierarchies, and the importance of personal relationships in enterprise sales. Ask for case studies with French companies or international firms entering France.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>02. Native Language Capabilities</h3>
              <p>
                French buyers expect native-quality French content. Evaluate agencies on their French copywriting, thought leadership production, and ability to communicate sophisticated B2B value propositions in culturally appropriate ways. Translation from English rarely captures the nuance required.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>03. Industry Network & Connections</h3>
              <p>
                Paris operates on relationships. The best agencies have established networks within target industries, whether luxury, aerospace, or fintech. They can facilitate introductions, navigate complex organizational structures, and accelerate deals through warm connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agencies List Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Top GTM Agencies in Paris
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {stats.totalAgencies} verified go-to-market agencies serving Paris and France. Find your ideal GTM partner for French market entry and European expansion.
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
          <h2 className="text-5xl font-black text-white mb-16">Paris GTM Agency FAQs</h2>
          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                What is the typical cost of a GTM agency in Paris?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                GTM agencies in Paris typically charge between €8,000-€25,000 per month for retainer engagements. Project-based work ranges from €15,000-€80,000 depending on scope. Agencies serving luxury and enterprise clients may require higher minimums. This positions Paris agencies competitively with <Link href="/gtm-agencies-london" className="text-blue-400 hover:text-blue-300 underline">London</Link> while often offering better value for European expansion.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                Why choose a Paris-based GTM agency?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Paris agencies offer deep expertise in French market entry, luxury and fashion B2B positioning, aerospace and defense technology, and strong connections to La French Tech ecosystem. They understand French business culture, formal communication expectations, and the relationship-driven nature of French enterprise sales.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                What industries do Paris GTM agencies specialize in?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Paris GTM agencies excel in luxury goods and fashion technology, aerospace and defense, fintech and banking, SaaS and enterprise software, and sustainable technology. They leverage France's position as Europe's second-largest economy and Paris's role as a global business hub.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                Do Paris GTM agencies work with international companies?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Yes, many Paris agencies specialize in helping US and UK companies enter the French market, as well as supporting French companies expanding globally. They provide bilingual teams, understand cross-cultural B2B dynamics, and can coordinate with agencies in <Link href="/gtm-agencies-new-york" className="text-blue-400 hover:text-blue-300 underline">New York</Link> or <Link href="/gtm-agencies-london" className="text-blue-400 hover:text-blue-300 underline">London</Link>.
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
            Expanding beyond Paris? Explore GTM agencies in key European cities and global markets.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/best-gtm-agency-france-top-gtm-agencies-france" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">France (All Cities)</h3>
              <p className="text-white/60">Explore GTM agencies across all of France</p>
            </Link>
            <Link href="/gtm-agencies-london" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">London</h3>
              <p className="text-white/60">UK's leading GTM hub for European expansion</p>
            </Link>
            <Link href="/gtm-agencies-amsterdam" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Amsterdam</h3>
              <p className="text-white/60">Gateway to Benelux and Northern Europe</p>
            </Link>
            <Link href="/gtm-agencies-berlin" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Berlin</h3>
              <p className="text-white/60">Germany's startup capital for tech GTM</p>
            </Link>
            <Link href="/gtm-agencies-barcelona" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Barcelona</h3>
              <p className="text-white/60">Southern European tech and innovation hub</p>
            </Link>
            <Link href="/gtm-agencies-milan" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Milan</h3>
              <p className="text-white/60">Italy's business and fashion capital</p>
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
            Build Your Paris GTM Strategy
          </h2>
          <p className="text-2xl text-white/95 mb-12">
            Create a comprehensive go-to-market strategy for French and European markets. Start with the right strategic foundation for market entry success.
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
