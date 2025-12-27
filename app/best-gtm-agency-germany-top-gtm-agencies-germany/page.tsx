import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best GTM Agency Germany 2025 | Top German Go-to-Market Agencies',
  description: 'Compare the best GTM agencies in Germany for 2025. Expert German agencies specializing in enterprise SaaS, Mittelstand, Industry 4.0 & European market expansion.',
  keywords: 'best GTM agency Germany, top go-to-market agencies Berlin, GTM consultants Munich, B2B GTM strategy Germany, product launch agency Germany',
  alternates: {
    canonical: 'https://gtm.quest/best-gtm-agency-germany-top-gtm-agencies-germany'
  }
};

export const revalidate = 3600;

export default async function GTMAgencyGermanyPage() {
  const agencies = await getAgenciesByCategory('GTM Agency', 'Germany');
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
        "name": "What makes German GTM agencies different from US or UK agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "German GTM agencies understand the Mittelstand-driven enterprise landscape where engineering teams hold veto power in purchasing decisions. They excel at technical validation-focused campaigns, German-language content that resonates with engineering buyers, and patient relationship-driven enterprise sales strategies that align with German business culture's preference for 12-24 month evaluation cycles."
        }
      },
      {
        "@type": "Question",
        "name": "How much do GTM agencies in Germany typically charge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "German GTM agencies typically charge €8,000-30,000 per month for retainer engagements. Project-based GTM strategies range from €25,000-100,000 depending on scope. Enterprise launches with full execution can exceed €150,000 for complex products targeting German and DACH markets."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries do German GTM agencies specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "German agencies excel in industrial automation and Industry 4.0, automotive and mobility technology, enterprise SaaS for manufacturing and supply chain, financial services and fintech (particularly Frankfurt-based), and healthcare and life sciences. The Mittelstand's dominance means agencies understand technical B2B marketing for specialized industrial segments."
        }
      },
      {
        "@type": "Question",
        "name": "Can German GTM agencies help with DACH and European expansion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, German agencies are ideally positioned for DACH (Germany, Austria, Switzerland) and broader European expansion. Germany's central position and largest economy make it the natural launchpad for EU market entry. Agencies coordinate German-language campaigns while adapting positioning for Austrian and Swiss market nuances."
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
        "name": "Best GTM Agencies Germany",
        "description": "Comprehensive directory of top German go-to-market agencies",
        "url": "https://gtm.quest/best-gtm-agency-germany-top-gtm-agencies-germany"
      }) }} />

      {/* Breadcrumbs */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">GTM Germany</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1587330979633-4fe09c8d4c4c?w=1920&q=80" alt="Best GTM agency Germany - Munich city center and architecture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Germany</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>
            Best GTM Agency Germany 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Connect with {totalAgencies} elite German GTM agencies specializing in enterprise SaaS, Industry 4.0, and European market leadership.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">€{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      {/* Why Choose Germany Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose a German GTM Agency?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p><a href="https://en.wikipedia.org/wiki/Economy_of_Germany" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Germany commands Europe's largest economy</a> with €4.3 trillion GDP and serves as the global standard for industrial excellence and enterprise technology adoption. According to <a href="https://www.destatis.de/EN/Home/_node.html" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Destatis</a>, the legendary Mittelstand—family-owned companies that represent 99.6% of German businesses—includes over 1,000 hidden champions dominating specialized global market segments. German buyers demand rigorous technical validation, extensive proof-of-concept testing, and engineering-led evaluation cycles that can span 12-24 months for enterprise software decisions.</p>
            <p>Germany's B2B technology sector attracts billions in investment annually, with strengths in industrial automation, enterprise SaaS for manufacturing, supply chain optimization, and Industry 4.0 technologies. The <a href="https://data.worldbank.org/country/germany" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">World Bank</a> ranks Germany as a global leader in manufacturing competitiveness. German business culture emphasizes Gründlichkeit (thoroughness), consensus-driven decision making, and preference for established vendors with proven German market presence. <a href="https://www.hubspot.com/state-of-marketing" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot research</a> shows that German enterprise buyers prioritize technical specifications and engineering validation over marketing claims—agencies must craft substance-focused messaging.</p>
            <p><a href="https://www.gtai.de/en" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Germany Trade & Invest</a> supports international companies entering German markets. German GTM agencies bring deep understanding of technical buying committees where engineering teams hold veto power, expertise navigating GDPR and data residency requirements, and proven frameworks for building trust through case studies with recognizable German brands. They understand how to position products for Mittelstand efficiency demands, create German-language technical content, and execute patient, relationship-driven enterprise sales strategies aligned with German business culture.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Core GTM Services in Germany</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Enterprise Product Launches</h3>
              <p className="text-xl text-white/80 leading-relaxed">German enterprises expect methodical, engineering-validated product introductions. Agencies orchestrate launch sequences spanning technical validation, pilot programs with reference customers, and systematic rollout across German enterprise segments with appropriate German-language materials.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Mittelstand Market Entry</h3>
              <p className="text-xl text-white/80 leading-relaxed">Germany's hidden champions require specialized GTM approaches. Agencies understand how to reach family-owned industrial leaders, position for efficiency and reliability demands, and build relationships through industry associations and trade fairs like Hannover Messe.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Technical Content Marketing</h3>
              <p className="text-xl text-white/80 leading-relaxed">German B2B buyers demand technical substance. Agencies create engineering-focused content—technical whitepapers, proof-of-concept documentation, and detailed product comparisons in German that resonate with technical decision-makers rather than marketing-driven messaging.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">DACH Regional Expansion</h3>
              <p className="text-xl text-white/80 leading-relaxed">Germany serves as the gateway to DACH markets. Agencies coordinate campaigns across Germany, Austria, and Switzerland—understanding regional variations while leveraging German market success as the foundation for broader German-speaking Europe expansion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Key Industries for German GTM</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-white mb-4">Industry 4.0</h3>
              <p className="text-white/70">Siemens, Bosch, SAP—German industrial automation and smart manufacturing leads globally. GTM requires deep technical expertise.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-white mb-4">Automotive & Mobility</h3>
              <p className="text-white/70">BMW, Mercedes, VW drive automotive innovation. Agencies understand automotive supply chain and mobility technology GTM.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-white mb-4">Financial Services</h3>
              <p className="text-white/70">Frankfurt is Europe's financial center. Deutsche Bank, Allianz, fintech ecosystem require specialized B2B positioning.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">💊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Healthcare & Pharma</h3>
              <p className="text-white/70">Bayer, Merck, Boehringer—Germany's pharma industry demands compliance-focused, technical GTM strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">How to Choose a German GTM Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">01</div>
              <h3 className="text-2xl font-bold text-white mb-4">Verify Technical Credibility</h3>
              <p className="text-xl text-white/80 leading-relaxed">German buyers demand technical substance. Verify the agency can create engineering-focused content, understands technical buying committees, and has experience with proof-of-concept driven sales cycles common in German enterprise.</p>
            </div>
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">02</div>
              <h3 className="text-2xl font-bold text-white mb-4">Assess German-Language Capability</h3>
              <p className="text-xl text-white/80 leading-relaxed">Native German content is essential for enterprise sales. Verify the agency produces authentic German-language materials—not translated content—that resonate with German business culture and technical terminology.</p>
            </div>
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">03</div>
              <h3 className="text-2xl font-bold text-white mb-4">Evaluate Regional Experience</h3>
              <p className="text-xl text-white/80 leading-relaxed">Germany has distinct regional markets. Munich (automotive), Frankfurt (finance), Berlin (startups), Hamburg (logistics) require different approaches. Verify the agency understands regional variations and industry concentrations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Directory */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Agencies Serving Germany</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies with German market expertise.</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">What makes German GTM agencies different from US or UK agencies?</h3>
              <p className="text-xl text-white/80 leading-relaxed">German GTM agencies understand the Mittelstand-driven enterprise landscape where engineering teams hold veto power. They excel at technical validation-focused campaigns, German-language content, and patient relationship-driven sales strategies aligned with 12-24 month evaluation cycles.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">How much do GTM agencies in Germany typically charge?</h3>
              <p className="text-xl text-white/80 leading-relaxed">German GTM agencies typically charge €8,000-30,000 per month for retainer engagements. Project-based strategies range from €25,000-100,000. Enterprise launches with full execution can exceed €150,000 for complex DACH market programs.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Which industries do German GTM agencies specialize in?</h3>
              <p className="text-xl text-white/80 leading-relaxed">German agencies excel in industrial automation, automotive/mobility, enterprise SaaS for manufacturing, financial services (Frankfurt), and healthcare/pharma. The Mittelstand's dominance means agencies understand technical B2B marketing for specialized segments.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Can German GTM agencies help with DACH and European expansion?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Yes, German agencies are ideally positioned for DACH and broader European expansion. Germany's largest economy makes it the natural EU launchpad. Agencies coordinate campaigns across Germany, Austria, and Switzerland while adapting for regional nuances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Markets */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">Explore Related GTM Markets</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Link href="/best-gtm-agency-france-top-gtm-agencies-france" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">France</span>
            </Link>
            <Link href="/best-gtm-agency-netherlands-top-gtm-agencies-netherlands" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Netherlands</span>
            </Link>
            <Link href="/best-gtm-agency-uk-top-gtm-agencies-uk" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">UK</span>
            </Link>
            <Link href="/best-gtm-agency-us-top-gtm-agencies-us" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">US</span>
            </Link>
            <Link href="/best-gtm-agency-sweden-top-gtm-agencies-sweden" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Sweden</span>
            </Link>
            <Link href="/best-gtm-agency-singapore-top-gtm-agencies-singapore" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Singapore</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">GTM Resources</h2>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your German GTM Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive go-to-market strategy for Germany and DACH markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">
            Start Free →
          </Link>
        </div>
      </section>
    </div>
  );
}
