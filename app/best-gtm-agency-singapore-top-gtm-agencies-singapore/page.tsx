import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best GTM Agency Singapore 2025 | Top Singapore Go-to-Market Agencies',
  description: 'Compare the best GTM agencies in Singapore for 2025. Expert agencies specializing in fintech, SaaS, APAC expansion & Southeast Asia market entry.',
  keywords: 'best GTM agency Singapore, top go-to-market agencies Singapore, GTM consultants Singapore, APAC product launch, B2B GTM strategy Singapore',
  alternates: {
    canonical: 'https://gtm.quest/best-gtm-agency-singapore-top-gtm-agencies-singapore'
  }
};

export const revalidate = 3600;

export default async function GTMAgencySingaporePage() {
  const agencies = await getAgenciesByCategory('GTM Agency', 'Singapore');
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
        "name": "What makes Singapore GTM agencies different from US or European agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Singapore GTM agencies understand Asia-Pacific's diverse markets spanning Chinese, Malay, Indian, and Western business cultures. They excel at multicultural positioning, navigating regional regulatory frameworks from Singapore's efficiency to Indonesia's complexity, and executing staged APAC expansion strategies. Singapore's position as ASEAN's business hub provides unique access to Southeast Asian enterprise markets."
        }
      },
      {
        "@type": "Question",
        "name": "How much do GTM agencies in Singapore typically charge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Singapore GTM agencies typically charge S$10,000-35,000 ($7,500-26,000 USD) per month for retainer engagements. Project-based GTM strategies range from S$25,000-100,000 depending on scope. Full APAC launch programs with regional execution can exceed S$150,000 for comprehensive market entry across multiple Southeast Asian countries."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries do Singapore GTM agencies specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Singapore agencies excel in fintech and financial services (520+ fintech companies), enterprise SaaS, logistics and supply chain technology, healthcare and biotech, and government/smart city solutions. Singapore's digital economy reaching 18.6% of GDP creates deep expertise in AI adoption and digital transformation GTM strategies."
        }
      },
      {
        "@type": "Question",
        "name": "Can Singapore GTM agencies help with broader APAC market expansion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Singapore is APAC's premier business hub and the ideal launchpad for Southeast Asian expansion. Agencies coordinate campaigns across Indonesia, Thailand, Vietnam, Malaysia, Philippines, and broader APAC markets. They understand cultural nuances, regulatory requirements, and relationship-driven approaches required across diverse Asian markets."
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
        "name": "Best GTM Agencies Singapore",
        "description": "Comprehensive directory of top Singapore go-to-market agencies",
        "url": "https://gtm.quest/best-gtm-agency-singapore-top-gtm-agencies-singapore"
      }) }} />

      {/* Breadcrumbs */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">GTM Singapore</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1920&q=80" alt="Best GTM agency Singapore - Marina Bay Sands skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Singapore</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>
            Best GTM Agency Singapore 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Connect with {totalAgencies} elite Singapore GTM agencies specializing in fintech, SaaS, and APAC market expansion.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">S${Math.round((avgMinBudget * 1.35) / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      {/* Why Choose Singapore Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose a Singapore GTM Agency?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>Singapore stands as Asia-Pacific's undisputed business and technology capital, with its <a href="https://www.imda.gov.sg/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">digital economy reaching 18.6% of GDP</a>—driven by accelerating AI adoption and the world-class <a href="https://en.wikipedia.org/wiki/Financial_technology_in_Singapore" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">fintech ecosystem with 520+ companies</a> serving the $30 trillion ASEAN market. Singapore's unique position as a stable, English-speaking gateway to diverse markets spanning Indonesia, Thailand, Vietnam, Malaysia, and emerging Southeast Asian economies makes it the ideal launchpad for B2B technology companies targeting Asia-Pacific expansion.</p>
            <p>The Singaporean market demonstrates exceptional technology adoption velocity, with AI adoption among enterprises jumping significantly in recent years. According to the <a href="https://data.worldbank.org/country/singapore" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">World Bank</a>, Singapore ranks as one of the easiest places globally to do business. Government initiatives like Smart Nation, AI Singapore, and extensive R&D funding create fertile ground for B2B technology adoption across financial services, logistics, healthcare, and manufacturing sectors. <a href="https://www.hubspot.com/state-of-marketing" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot research</a> shows that APAC buyers increasingly expect digital-first engagement alongside relationship-driven approaches.</p>
            <p><a href="https://www.enterprisesg.gov.sg/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Enterprise Singapore</a> supports international companies entering Southeast Asian markets. Singapore GTM agencies provide critical APAC capabilities: deep understanding of multicultural buyer behaviors across Chinese, Malay, Indian, and Western business cultures; expertise navigating regional regulatory frameworks from Singapore's efficiency to Indonesia's complexity; proven frameworks for staged regional expansion; and multilingual positioning spanning English, Mandarin, and regional languages. They understand how to leverage Singapore's position for regional credibility while executing relationship-driven, consensus-based approaches prevalent across broader APAC markets.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Core GTM Services in Singapore</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">APAC Market Entry</h3>
              <p className="text-xl text-white/80 leading-relaxed">Singapore serves as the gateway to Southeast Asia. Agencies orchestrate regional market entry strategies spanning Singapore anchor establishment, expansion into Indonesia, Thailand, Vietnam, and Malaysia, with culturally-adapted positioning for each market's distinct buyer expectations.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Fintech & Financial Services GTM</h3>
              <p className="text-xl text-white/80 leading-relaxed">Singapore's 520+ fintech companies create deep ecosystem expertise. Agencies understand MAS regulations, banking enterprise sales cycles, wealth management positioning, and the unique requirements of marketing to APAC financial institutions from global banks to regional players.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Enterprise SaaS & Technology</h3>
              <p className="text-xl text-white/80 leading-relaxed">Singapore enterprises demonstrate high technology adoption rates. Agencies excel at positioning SaaS solutions for sophisticated Singapore buyers while adapting messaging for broader APAC markets with varying digital maturity levels and enterprise procurement processes.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Government & Smart Nation</h3>
              <p className="text-xl text-white/80 leading-relaxed">Singapore's Smart Nation initiative drives significant government technology spending. Agencies understand GeBIZ procurement, public sector sales cycles, and positioning for government digital transformation programs across Singapore and ASEAN public sector markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Key Industries for Singapore GTM</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech & Banking</h3>
              <p className="text-white/70">520+ fintech companies. DBS, OCBC, UOB headquarters. MAS-regulated innovation sandbox creates specialized GTM opportunities.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🚢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Logistics & Supply Chain</h3>
              <p className="text-white/70">World's busiest port. Regional supply chain headquarters require specialized logistics technology GTM expertise.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-white mb-4">Healthcare & Biotech</h3>
              <p className="text-white/70">Regional healthcare hub. Biopolis research cluster and hospital networks demand healthtech GTM specialization.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Government & Smart City</h3>
              <p className="text-white/70">Smart Nation initiative drives public sector technology adoption. GovTech partnerships require specialized GTM approaches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">How to Choose a Singapore GTM Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">01</div>
              <h3 className="text-2xl font-bold text-white mb-4">Verify Regional Expertise</h3>
              <p className="text-xl text-white/80 leading-relaxed">APAC success requires understanding diverse markets. Verify the agency has experience across Singapore, Indonesia, Thailand, Vietnam, and other target markets—not just Singapore-only expertise. Look for multilingual capabilities and cultural adaptation experience.</p>
            </div>
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">02</div>
              <h3 className="text-2xl font-bold text-white mb-4">Assess Industry Focus</h3>
              <p className="text-xl text-white/80 leading-relaxed">Singapore's concentrated industries require specialized knowledge. Fintech GTM differs from logistics or healthcare. Verify the agency has proven experience in your specific vertical with relevant case studies and regulatory understanding.</p>
            </div>
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">03</div>
              <h3 className="text-2xl font-bold text-white mb-4">Evaluate Expansion Capability</h3>
              <p className="text-xl text-white/80 leading-relaxed">Most companies use Singapore as an APAC launchpad. Verify the agency can support regional expansion beyond Singapore—including local partnerships, market-specific positioning, and execution capabilities across Southeast Asian markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Directory */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Agencies Serving Singapore</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies with Singapore and APAC expertise.</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">What makes Singapore GTM agencies different from US or European agencies?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Singapore GTM agencies understand APAC's diverse markets spanning Chinese, Malay, Indian, and Western business cultures. They excel at multicultural positioning, regional regulatory navigation, and staged APAC expansion strategies from Singapore as a regional hub.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">How much do GTM agencies in Singapore typically charge?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Singapore GTM agencies typically charge S$10,000-35,000 per month for retainer engagements. Project-based strategies range from S$25,000-100,000. Full APAC launch programs can exceed S$150,000 for comprehensive regional market entry.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Which industries do Singapore GTM agencies specialize in?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Singapore agencies excel in fintech/financial services (520+ fintech companies), enterprise SaaS, logistics/supply chain, healthcare/biotech, and government/smart city solutions. Singapore's 18.6% digital economy GDP creates deep tech marketing expertise.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Can Singapore GTM agencies help with broader APAC market expansion?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Yes, Singapore is APAC's premier business hub and ideal launchpad for Southeast Asian expansion. Agencies coordinate campaigns across Indonesia, Thailand, Vietnam, Malaysia, and broader APAC markets with cultural and regulatory expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Markets */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">Explore Related GTM Markets</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Link href="/best-gtm-agency-australia-top-gtm-agencies-australia" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Australia</span>
            </Link>
            <Link href="/best-gtm-agency-uk-top-gtm-agencies-uk" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">UK</span>
            </Link>
            <Link href="/best-gtm-agency-us-top-gtm-agencies-us" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">US</span>
            </Link>
            <Link href="/best-gtm-agency-germany-top-gtm-agencies-germany" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Germany</span>
            </Link>
            <Link href="/best-gtm-agency-uae-top-gtm-agencies-uae" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">UAE</span>
            </Link>
            <Link href="/best-gtm-agency-netherlands-top-gtm-agencies-netherlands" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Netherlands</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Singapore GTM Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive go-to-market strategy for Singapore and APAC markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">
            Start Free →
          </Link>
        </div>
      </section>
    </div>
  );
}
