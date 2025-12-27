import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Denmark 2025 | Top Danish B2B Marketing Agencies',
  description: 'Compare the best B2B marketing agencies in Denmark for 2025. Expert Danish agencies specializing in pharma, cleantech, maritime & Scandinavian market expansion.',
  keywords: 'best B2B marketing agency Denmark, top B2B marketing agencies Copenhagen, B2B marketing Denmark, Danish B2B marketing consultancy, Copenhagen marketing agency',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-denmark-top-b2b-marketing-agencies-denmark'
  }
};

export const revalidate = 3600;

export default async function B2BMarketingAgencyDenmarkPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Denmark');
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
        "name": "What makes Danish B2B marketing agencies different from other Nordic agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Danish agencies combine world-class design heritage with pharmaceutical and life sciences expertise. Copenhagen is home to Novo Nordisk, LEO Pharma, and Lundbeck, giving Danish agencies unparalleled pharma marketing experience. They excel at blending Nordic minimalism with data-driven strategies and understand the 'hygge' approach to building long-term business relationships."
        }
      },
      {
        "@type": "Question",
        "name": "How much do B2B marketing agencies in Denmark typically charge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Danish B2B marketing agencies typically charge DKK 50,000-200,000 (€7,000-27,000) per month for retainer services. Project-based work ranges from DKK 100,000-500,000 for comprehensive campaigns. Copenhagen agencies command premium rates due to the city's pharma and design expertise, while regional agencies in Aarhus and Odense offer competitive alternatives."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries do Danish B2B marketing agencies specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Danish agencies excel in pharmaceuticals and life sciences (Denmark's largest export sector), cleantech and renewable energy, maritime and shipping (Maersk headquarters), food and agriculture technology, and design-led industries. Copenhagen's Medicon Valley cluster provides deep healthcare marketing expertise unmatched elsewhere in Scandinavia."
        }
      },
      {
        "@type": "Question",
        "name": "Can Danish agencies help with pan-Scandinavian B2B marketing campaigns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Danish agencies are ideally positioned for Scandinavian expansion. Copenhagen serves as the gateway to Nordic markets, and Danish agencies understand the cultural nuances across Denmark, Sweden, Norway, and Finland. They can create unified messaging while adapting for each market's distinct business culture and language preferences."
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
        "name": "Best B2B Marketing Agencies Denmark",
        "description": "Comprehensive directory of top Danish B2B marketing agencies",
        "url": "https://gtm.quest/best-b2b-marketing-agency-denmark-top-b2b-marketing-agencies-denmark"
      }) }} />

      {/* Breadcrumbs */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Denmark</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1920&q=80" alt="Best B2B marketing agency Denmark - Copenhagen Nyhavn harbor" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Denmark</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>
            Best B2B Marketing Agency Denmark 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Connect with {totalAgencies} elite Danish B2B marketing agencies specializing in pharma, cleantech, and Scandinavian market leadership.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">DKK{Math.round((avgMinBudget * 7.5) / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      {/* Why Choose Denmark Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose a Danish B2B Marketing Agency?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>Denmark stands as Scandinavia's pharmaceutical powerhouse and design capital, creating a unique environment for sophisticated B2B marketing. According to <a href="https://www.dst.dk/en" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Statistics Denmark</a>, pharmaceutical exports exceed $20 billion annually, making Denmark Europe's pharma marketing hub. Companies like <a href="https://en.wikipedia.org/wiki/Novo_Nordisk" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Novo Nordisk</a>, LEO Pharma, and Lundbeck have cultivated world-class marketing talent that understands complex regulatory environments and technical buyer journeys. Danish agencies combine this life sciences expertise with the country's legendary design heritage, creating B2B campaigns that are both scientifically rigorous and aesthetically compelling.</p>
            <p>Copenhagen's Medicon Valley represents one of Europe's most concentrated life sciences clusters, spanning the Øresund region connecting Denmark and Sweden. The <a href="https://data.worldbank.org/country/denmark" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">World Bank</a> ranks Denmark among the world's most innovative economies, with R&D spending exceeding 3% of GDP. Danish B2B marketing agencies understand the concept of "hygge" in business relationships—creating warm, trusting partnerships rather than transactional exchanges. This relationship-first approach resonates particularly well in complex B2B sales cycles where trust and long-term collaboration matter more than aggressive sales tactics. <a href="https://www.hubspot.com/state-of-marketing" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot research</a> shows that Nordic businesses prioritize supplier relationships above price in purchasing decisions.</p>
            <p>Beyond pharmaceuticals, Danish agencies excel in cleantech marketing—Denmark generates over 50% of its electricity from wind power and leads global sustainability innovation. <a href="https://stateofgreen.com/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">State of Green</a>, Denmark's official green transition platform, showcases the country's cleantech leadership. Maritime giant Maersk, based in Copenhagen, has also cultivated specialized shipping and logistics marketing expertise. The <a href="https://theweek.com/politics" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Danish Business Authority</a> supports internationalization efforts, helping agencies understand export-focused B2B marketing. Whether you're entering Danish markets or using Denmark as a launchpad for Nordic expansion, Danish agencies offer unmatched expertise in pharma, cleantech, design-led branding, and the nuanced Scandinavian business culture that values substance, sustainability, and long-term thinking.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Core B2B Marketing Services in Denmark</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Life Sciences & Pharma Marketing</h3>
              <p className="text-xl text-white/80 leading-relaxed">Copenhagen's Medicon Valley concentration means Danish agencies understand pharmaceutical marketing compliance, HCP engagement, and complex medical device sales cycles. Expertise in regulatory-compliant content for EU and global markets.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Cleantech & Sustainability Marketing</h3>
              <p className="text-xl text-white/80 leading-relaxed">Denmark leads global green transition. Agencies excel at marketing renewable energy, sustainable solutions, and ESG-focused messaging that resonates with European enterprise buyers increasingly prioritizing environmental credentials.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Design-Led B2B Branding</h3>
              <p className="text-xl text-white/80 leading-relaxed">Danish design heritage translates into B2B branding that balances minimalist aesthetics with functional clarity. Agencies create visual identities, websites, and collateral that reflect Nordic design excellence while communicating complex value propositions.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Nordic Market Expansion</h3>
              <p className="text-xl text-white/80 leading-relaxed">Copenhagen serves as the gateway to Scandinavia. Danish agencies help companies localize messaging for Danish, Swedish, Norwegian, and Finnish markets while maintaining unified brand positioning across the region.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Key Industries for Danish B2B Marketing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl mb-4">💊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Pharmaceuticals</h3>
              <p className="text-white/70">Novo Nordisk, LEO Pharma, Lundbeck—Denmark's $20B pharma sector demands specialized B2B marketing expertise.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🌊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Wind & Renewables</h3>
              <p className="text-white/70">Vestas, Ørsted lead global wind industry. Danish agencies excel at cleantech positioning and sustainability messaging.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🚢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Maritime & Shipping</h3>
              <p className="text-white/70">Maersk headquarters in Copenhagen. Agencies understand logistics, supply chain, and maritime technology marketing.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Food & AgriTech</h3>
              <p className="text-white/70">Arla, Danish Crown, Chr. Hansen—food innovation and agricultural technology require specialized B2B positioning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">How to Choose a Danish B2B Marketing Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">01</div>
              <h3 className="text-2xl font-bold text-white mb-4">Evaluate Industry Expertise</h3>
              <p className="text-xl text-white/80 leading-relaxed">Danish agencies often specialize in specific sectors. Pharma marketing requires different expertise than cleantech or maritime. Look for agencies with proven case studies in your industry and understanding of relevant regulatory requirements.</p>
            </div>
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">02</div>
              <h3 className="text-2xl font-bold text-white mb-4">Assess Nordic Market Knowledge</h3>
              <p className="text-xl text-white/80 leading-relaxed">If expanding beyond Denmark, verify the agency's pan-Nordic capabilities. True Scandinavian expertise means understanding Swedish formality, Norwegian directness, and Finnish pragmatism—not just Danish market dynamics.</p>
            </div>
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">03</div>
              <h3 className="text-2xl font-bold text-white mb-4">Check Design & Technical Balance</h3>
              <p className="text-xl text-white/80 leading-relaxed">Danish agencies excel at design but B2B success requires technical substance. Ensure the agency balances aesthetic excellence with data-driven performance marketing, technical content creation, and measurable results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Directory */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies Serving Denmark</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies with Danish market expertise.</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">What makes Danish B2B marketing agencies different from other Nordic agencies?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Danish agencies combine world-class design heritage with pharmaceutical and life sciences expertise. Copenhagen is home to Novo Nordisk, LEO Pharma, and Lundbeck, giving Danish agencies unparalleled pharma marketing experience. They excel at blending Nordic minimalism with data-driven strategies.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">How much do B2B marketing agencies in Denmark typically charge?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Danish agencies typically charge DKK 50,000-200,000 (€7,000-27,000) per month for retainer services. Project-based work ranges from DKK 100,000-500,000 for comprehensive campaigns. Copenhagen agencies command premium rates due to pharma and design expertise.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Which industries do Danish B2B marketing agencies specialize in?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Danish agencies excel in pharmaceuticals and life sciences, cleantech and renewable energy, maritime and shipping, food and agriculture technology, and design-led industries. Copenhagen's Medicon Valley cluster provides deep healthcare marketing expertise.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Can Danish agencies help with pan-Scandinavian B2B marketing campaigns?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Yes, Danish agencies are ideally positioned for Scandinavian expansion. Copenhagen serves as the gateway to Nordic markets, and Danish agencies understand the cultural nuances across Denmark, Sweden, Norway, and Finland.</p>
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
            <Link href="/best-b2b-marketing-agency-finland-top-b2b-marketing-agencies-finland" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Finland</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Danish B2B Marketing Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive B2B marketing plan for Denmark and Scandinavian markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">
            Start Free →
          </Link>
        </div>
      </section>
    </div>
  );
}
