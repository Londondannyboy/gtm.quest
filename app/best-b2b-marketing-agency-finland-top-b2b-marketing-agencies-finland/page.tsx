import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Finland 2025 | Top Finnish B2B Marketing Agencies',
  description: 'Compare the best B2B marketing agencies in Finland for 2025. Expert Finnish agencies specializing in SaaS, gaming, cleantech & Nordic market expansion.',
  keywords: 'best B2B marketing agency Finland, top B2B marketing agencies Helsinki, B2B marketing Finland, Finnish B2B marketing consultancy, Helsinki marketing agency',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-finland-top-b2b-marketing-agencies-finland'
  }
};

export const revalidate = 3600;

export default async function B2BMarketingAgencyFinlandPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Finland');
  const totalAgencies = agencies.length;
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000;
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc; }, {} as Record<string, number>);
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Finnish B2B marketing agencies unique?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Finnish agencies combine world-leading tech innovation (Nokia legacy, gaming giants like Supercell and Rovio) with characteristically Finnish directness and 'sisu'—persistent determination. They excel at marketing deep technical innovation with authenticity, avoiding marketing hyperbole in favor of provable results. Finland's highly educated workforce means agencies produce technically sophisticated content for demanding B2B buyers."
        }
      },
      {
        "@type": "Question",
        "name": "How much do B2B marketing agencies in Finland typically charge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Finnish B2B marketing agencies typically charge €5,000-20,000 per month for retainer services. Project-based work ranges from €15,000-80,000 for comprehensive campaigns. Helsinki agencies may charge premium rates, while agencies in Tampere, Oulu, and Turku offer competitive alternatives with strong tech expertise."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries do Finnish B2B marketing agencies specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Finnish agencies excel in technology and SaaS (Finland's startup ecosystem is Europe's strongest per capita), gaming and entertainment tech, cleantech and circular economy, telecommunications and mobile technology, and forestry and bioeconomy. Helsinki's gaming cluster (Supercell, Rovio, Remedy) has created specialized mobile and gaming marketing expertise."
        }
      },
      {
        "@type": "Question",
        "name": "Can Finnish agencies help with Baltic and Nordic market expansion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Finnish agencies are uniquely positioned for Nordic-Baltic expansion. Helsinki's proximity to Tallinn (2-hour ferry) creates natural Estonia connections, and Finnish agencies understand the distinct markets of Sweden, Norway, and the Baltic states. They can coordinate multilingual campaigns across this increasingly integrated economic region."
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
        "name": "Best B2B Marketing Agencies Finland",
        "description": "Comprehensive directory of top Finnish B2B marketing agencies",
        "url": "https://gtm.quest/best-b2b-marketing-agency-finland-top-b2b-marketing-agencies-finland"
      }) }} />

      {/* Breadcrumbs */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Finland</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=1920&q=80" alt="Best B2B marketing agency Finland - Helsinki cathedral" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Finland</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>
            Best B2B Marketing Agency Finland 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Connect with {totalAgencies} elite Finnish B2B marketing agencies specializing in SaaS, gaming, and Nordic tech innovation.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">€{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      {/* Why Choose Finland Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose a Finnish B2B Marketing Agency?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>Finland punches far above its weight in technology innovation, producing more tech unicorns per capita than any other European nation. According to <a href="https://www.stat.fi/index_en.html" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Statistics Finland</a>, ICT services account for 15% of GDP, with Finnish gaming and mobile tech companies generating €3 billion annually. From <a href="https://en.wikipedia.org/wiki/Nokia" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Nokia's</a> mobile legacy to gaming giants like Supercell (Clash of Clans) and Rovio (Angry Birds), Finnish agencies understand how to market deep technical innovation with characteristic Finnish authenticity and modesty. The concept of "sisu"—persistent determination and resilience—permeates Finnish business culture and marketing approaches.</p>
            <p>Helsinki's startup ecosystem consistently ranks among Europe's most active, supported by exceptional education (Finland's PISA scores lead globally) and pragmatic business culture. The <a href="https://data.worldbank.org/country/finland" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">World Bank</a> recognizes Finland as one of the world's most innovative economies. Finnish B2B marketing agencies excel at straightforward, honest communication that eschews marketing hyperbole in favor of provable results and technical substance. They understand that Finnish and Nordic B2B buyers are highly educated, technically sophisticated, and allergic to sales theatrics. <a href="https://www.demandbase.com/resources/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Demandbase research</a> shows that Nordic enterprises respond best to content that demonstrates deep technical expertise rather than promotional messaging.</p>
            <p><a href="https://www.businessfinland.fi/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Business Finland</a>, the government's innovation agency, actively supports technology commercialization and internationalization. Finnish agencies particularly excel in SaaS and technology marketing, gaming and entertainment tech positioning, cleantech and circular economy B2B campaigns, and Nordic-Baltic market strategies. The <a href="https://www.slush.org/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Slush conference</a>, Europe's leading startup event, showcases Finland's tech marketing sophistication. Whether you're entering Finnish markets or leveraging Finnish expertise for broader Nordic expansion, Finnish agencies offer unmatched combination of technical depth, authentic communication, and data-driven results—embodying sisu in every campaign.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Core B2B Marketing Services in Finland</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">SaaS & Technology Marketing</h3>
              <p className="text-xl text-white/80 leading-relaxed">Finland's startup ecosystem expertise translates into deep SaaS marketing knowledge. Agencies understand product-led growth, freemium conversion, and technical content marketing for sophisticated B2B software buyers across Europe and globally.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Gaming & Entertainment Tech</h3>
              <p className="text-xl text-white/80 leading-relaxed">Helsinki is the world's gaming capital per capita. Agencies have deep expertise in B2B gaming technology marketing—from game engines to monetization platforms—learned from working with Supercell, Rovio, Remedy, and hundreds of smaller studios.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Cleantech & Circular Economy</h3>
              <p className="text-xl text-white/80 leading-relaxed">Finland leads in cleantech innovation, forestry sustainability, and circular economy solutions. Agencies excel at marketing environmental technologies, bioeconomy products, and sustainability-focused B2B solutions to European enterprise buyers.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Nordic-Baltic Market Entry</h3>
              <p className="text-xl text-white/80 leading-relaxed">Helsinki's strategic position bridges Scandinavia and the Baltics. Finnish agencies help companies expand across this integrated economic region, understanding the distinct markets of Sweden, Norway, Estonia, Latvia, and Lithuania.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Key Industries for Finnish B2B Marketing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-white mb-4">Gaming & Mobile</h3>
              <p className="text-white/70">Supercell, Rovio, Remedy—Finland's gaming industry generates €3B+ annually with specialized B2B technology needs.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">SaaS & Tech</h3>
              <p className="text-white/70">Europe's highest startup density per capita. Agencies understand PLG, developer marketing, and technical positioning.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🌲</div>
              <h3 className="text-2xl font-bold text-white mb-4">Forestry & Bioeconomy</h3>
              <p className="text-white/70">UPM, Stora Enso, Metsä—world leaders in sustainable forestry and bio-based products requiring B2B expertise.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">📡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Telecom & 5G</h3>
              <p className="text-white/70">Nokia's home market. Deep expertise in telecommunications, network infrastructure, and enterprise connectivity marketing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">How to Choose a Finnish B2B Marketing Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">01</div>
              <h3 className="text-2xl font-bold text-white mb-4">Verify Technical Depth</h3>
              <p className="text-xl text-white/80 leading-relaxed">Finnish agencies pride themselves on technical substance. Evaluate their ability to understand and communicate complex technology—not just create pretty campaigns. Ask for case studies showing technical content that drove measurable B2B results.</p>
            </div>
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">02</div>
              <h3 className="text-2xl font-bold text-white mb-4">Assess Startup vs Enterprise Focus</h3>
              <p className="text-xl text-white/80 leading-relaxed">Finnish agencies often specialize in either startup/growth marketing or enterprise B2B. Ensure the agency's experience matches your company stage—growth-focused agencies understand scrappy tactics while enterprise agencies know complex procurement cycles.</p>
            </div>
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">03</div>
              <h3 className="text-2xl font-bold text-white mb-4">Evaluate International Capabilities</h3>
              <p className="text-xl text-white/80 leading-relaxed">Many Finnish companies target international markets from day one. Verify the agency's experience with global campaigns, English-language content quality, and understanding of target markets beyond Finland and the Nordics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Directory */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies Serving Finland</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies with Finnish market expertise.</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">What makes Finnish B2B marketing agencies unique?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Finnish agencies combine world-leading tech innovation with characteristically Finnish directness and 'sisu'—persistent determination. They excel at marketing deep technical innovation with authenticity, avoiding hyperbole in favor of provable results.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">How much do B2B marketing agencies in Finland typically charge?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Finnish agencies typically charge €5,000-20,000 per month for retainer services. Project-based work ranges from €15,000-80,000 for comprehensive campaigns. Regional agencies in Tampere and Oulu offer competitive alternatives to Helsinki.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Which industries do Finnish B2B marketing agencies specialize in?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Finnish agencies excel in technology and SaaS, gaming and entertainment tech, cleantech and circular economy, telecommunications, and forestry/bioeconomy. Helsinki's gaming cluster provides specialized mobile and gaming marketing expertise.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Can Finnish agencies help with Baltic and Nordic market expansion?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Yes, Finnish agencies are uniquely positioned for Nordic-Baltic expansion. Helsinki's proximity to Tallinn creates natural Estonia connections, and Finnish agencies understand the distinct markets across the integrated Nordic-Baltic economic region.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Markets */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">Explore Related B2B Markets</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Link href="/best-b2b-marketing-agency-sweden-top-b2b-marketing-agencies-sweden" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Sweden</span>
            </Link>
            <Link href="/best-b2b-marketing-agency-norway-top-b2b-marketing-agencies-norway" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Norway</span>
            </Link>
            <Link href="/best-b2b-marketing-agency-denmark-top-b2b-marketing-agencies-denmark" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Denmark</span>
            </Link>
            <Link href="/best-b2b-marketing-agency-netherlands-top-b2b-marketing-agencies-netherlands" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Netherlands</span>
            </Link>
            <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Germany</span>
            </Link>
            <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">UK</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Finnish B2B Marketing Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive B2B marketing plan for Finland and Nordic markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">
            Start Free →
          </Link>
        </div>
      </section>
    </div>
  );
}
