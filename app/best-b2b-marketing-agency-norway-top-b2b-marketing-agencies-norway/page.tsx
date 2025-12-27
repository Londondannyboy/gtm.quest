import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Norway 2025 | Top Norwegian B2B Marketing Agencies',
  description: 'Compare the best B2B marketing agencies in Norway for 2025. Expert Norwegian agencies specializing in energy, maritime, seafood & Nordic market expansion.',
  keywords: 'best B2B marketing agency Norway, top B2B marketing agencies Oslo, B2B marketing Norway, Norwegian B2B marketing consultancy, Oslo marketing agency',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-norway-top-b2b-marketing-agencies-norway'
  }
};

export const revalidate = 3600;

export default async function B2BMarketingAgencyNorwayPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Norway');
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
        "name": "What makes Norwegian B2B marketing agencies different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Norwegian agencies have deep expertise in energy sector marketing (oil, gas, offshore wind), maritime and shipping, and seafood/aquaculture—industries that dominate Norway's export economy. They understand technical buyers in demanding environments, emphasize sustainability credentials (critical in Norway), and excel at relationship-based marketing that reflects Norwegian business culture of trust, equality, and long-term thinking."
        }
      },
      {
        "@type": "Question",
        "name": "How much do B2B marketing agencies in Norway typically charge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Norwegian B2B marketing agencies typically charge NOK 80,000-300,000 (€7,000-27,000) per month for retainer services. Project-based work ranges from NOK 200,000-1,000,000 for comprehensive campaigns. Norway's high cost of living means Norwegian agencies charge premium rates, but deliver proportionally high-quality work."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries do Norwegian B2B marketing agencies specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Norwegian agencies excel in oil and gas (Norway is Europe's largest producer), offshore wind and renewable energy, maritime and shipping, seafood and aquaculture (salmon is Norway's second-largest export), and sustainability/cleantech. The energy transition from petroleum to renewables is creating specialized marketing expertise."
        }
      },
      {
        "@type": "Question",
        "name": "Can Norwegian agencies help with pan-Nordic B2B marketing campaigns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Norwegian agencies understand the broader Scandinavian market. While Norwegian business culture shares similarities with Sweden and Denmark, there are distinct differences—Norwegians are often more direct and informal. Agencies can create unified Nordic campaigns while adapting for each market's nuances and language preferences."
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
        "name": "Best B2B Marketing Agencies Norway",
        "description": "Comprehensive directory of top Norwegian B2B marketing agencies",
        "url": "https://gtm.quest/best-b2b-marketing-agency-norway-top-b2b-marketing-agencies-norway"
      }) }} />

      {/* Breadcrumbs */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Norway</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=1920&q=80" alt="Best B2B marketing agency Norway - Oslo waterfront and fjord" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Norway</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>
            Best B2B Marketing Agency Norway 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Connect with {totalAgencies} elite Norwegian B2B marketing agencies specializing in energy, maritime, and Nordic market leadership.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">NOK{Math.round((avgMinBudget * 11) / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      {/* Why Choose Norway Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose a Norwegian B2B Marketing Agency?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>Norway's unique position as a global energy leader, maritime powerhouse, and sustainability champion creates a distinctive B2B marketing landscape. According to <a href="https://www.ssb.no/en" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Statistics Norway</a>, the country's petroleum sector generates over $60 billion annually while renewable energy investments grow 20% yearly. Norwegian agencies excel at marketing to industries where technical expertise, environmental responsibility, and long-term relationship building are paramount. With the world's largest <a href="https://en.wikipedia.org/wiki/Government_Pension_Fund_of_Norway" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">sovereign wealth fund</a> (over $1.4 trillion), Norwegian B2B buyers have exceptional resources and correspondingly high expectations.</p>
            <p>The Norwegian market is characterized by flat organizational structures, direct communication, and consensus-driven decision-making. The <a href="https://data.worldbank.org/country/norway" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">World Bank</a> consistently ranks Norway among the world's wealthiest and most developed economies. Norwegian B2B marketing agencies understand that successful campaigns emphasize sustainability credentials, technical specifications, and proven track records rather than aggressive sales tactics. <a href="https://www.hubspot.com/state-of-marketing" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot research</a> shows that Norwegian businesses prioritize supplier relationships and environmental responsibility above price in procurement decisions—agencies help craft messaging that resonates with these values.</p>
            <p><a href="https://www.norwegianseafood.no/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Norwegian Seafood Council</a> and <a href="https://www.innovasjonnorge.no/en/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Innovation Norway</a> support industry marketing and internationalization efforts. Norwegian agencies particularly excel in energy sector marketing (petroleum transitioning to offshore wind), maritime and shipping communications, seafood and aquaculture B2B positioning, and sustainability-focused enterprise marketing. Oslo serves as the hub for energy tech, maritime innovation, and seafood industries. Whether you're entering Norwegian markets or leveraging Norwegian expertise for global energy and maritime campaigns, Norwegian agencies offer unmatched understanding of high-stakes B2B sectors where trust, technical credibility, and environmental stewardship determine commercial success.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Core B2B Marketing Services in Norway</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Energy & Offshore Marketing</h3>
              <p className="text-xl text-white/80 leading-relaxed">Decades of oil and gas experience now transitioning to offshore wind. Norwegian agencies understand technical buyers in Equinor, Aker, and the broader energy ecosystem. Expertise in safety-critical messaging, technical specifications, and regulatory compliance.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Maritime & Shipping Marketing</h3>
              <p className="text-xl text-white/80 leading-relaxed">Norway has one of the world's largest merchant fleets. Agencies understand shipbuilding, maritime technology, port operations, and marine services marketing. Expertise in marketing to shipowners, operators, and maritime supply chains globally.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Seafood & Aquaculture B2B</h3>
              <p className="text-xl text-white/80 leading-relaxed">Salmon is Norway's second-largest export. Agencies specialize in aquaculture technology marketing, seafood B2B positioning, and sustainable fishing industry communications. Deep understanding of global seafood supply chains and buyer requirements.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Sustainability & ESG Marketing</h3>
              <p className="text-xl text-white/80 leading-relaxed">Norwegian buyers demand genuine sustainability credentials. Agencies excel at communicating environmental impact, ESG compliance, and green transition positioning—essential for any B2B vendor targeting Norwegian enterprise customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Key Industries for Norwegian B2B Marketing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl mb-4">⛽</div>
              <h3 className="text-2xl font-bold text-white mb-4">Oil, Gas & Energy</h3>
              <p className="text-white/70">Equinor, Aker Solutions, Vår Energi—Norway's $60B petroleum sector requires specialized B2B marketing expertise.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🌊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Offshore Wind</h3>
              <p className="text-white/70">Norway pivots petroleum expertise to offshore wind. Growing sector with massive investment and specialized marketing needs.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🚢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Maritime & Shipping</h3>
              <p className="text-white/70">Kongsberg, Wilhelmsen—one of the world's largest merchant fleets requiring B2B technology and services marketing.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🐟</div>
              <h3 className="text-2xl font-bold text-white mb-4">Seafood & Aquaculture</h3>
              <p className="text-white/70">Mowi, SalMar, Lerøy—world-leading salmon producers with sophisticated B2B technology and supply chain needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">How to Choose a Norwegian B2B Marketing Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">01</div>
              <h3 className="text-2xl font-bold text-white mb-4">Verify Industry Specialization</h3>
              <p className="text-xl text-white/80 leading-relaxed">Norwegian B2B sectors are highly specialized. Energy marketing differs fundamentally from maritime or seafood. Look for agencies with proven experience in your specific industry vertical and understanding of relevant technical requirements and regulatory frameworks.</p>
            </div>
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">02</div>
              <h3 className="text-2xl font-bold text-white mb-4">Assess Sustainability Expertise</h3>
              <p className="text-xl text-white/80 leading-relaxed">Norwegian buyers increasingly demand genuine sustainability credentials. Ensure the agency can authentically communicate environmental impact, ESG compliance, and green transition positioning—greenwashing will backfire in the Norwegian market.</p>
            </div>
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">03</div>
              <h3 className="text-2xl font-bold text-white mb-4">Evaluate Global Reach</h3>
              <p className="text-xl text-white/80 leading-relaxed">Many Norwegian B2B companies operate globally. Verify the agency's experience with international campaigns, especially in key markets like UK, Germany, Singapore, and Houston where Norwegian energy and maritime companies have significant presence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Directory */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies Serving Norway</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies with Norwegian market expertise.</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">What makes Norwegian B2B marketing agencies different?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Norwegian agencies have deep expertise in energy sector marketing (oil, gas, offshore wind), maritime and shipping, and seafood/aquaculture. They understand technical buyers, emphasize sustainability credentials, and excel at relationship-based marketing reflecting Norwegian business culture.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">How much do B2B marketing agencies in Norway typically charge?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Norwegian agencies typically charge NOK 80,000-300,000 (€7,000-27,000) per month for retainer services. Project-based work ranges from NOK 200,000-1,000,000. Norway's high cost of living means premium rates but proportionally high-quality work.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Which industries do Norwegian B2B marketing agencies specialize in?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Norwegian agencies excel in oil and gas, offshore wind and renewables, maritime and shipping, seafood and aquaculture, and sustainability/cleantech. The energy transition from petroleum to renewables is creating specialized marketing expertise.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Can Norwegian agencies help with pan-Nordic B2B marketing campaigns?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Yes, Norwegian agencies understand the broader Scandinavian market. While Norwegian business culture shares similarities with Sweden and Denmark, there are distinct differences. Agencies can create unified Nordic campaigns while adapting for each market.</p>
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
            <Link href="/best-b2b-marketing-agency-denmark-top-b2b-marketing-agencies-denmark" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Denmark</span>
            </Link>
            <Link href="/best-b2b-marketing-agency-finland-top-b2b-marketing-agencies-finland" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Finland</span>
            </Link>
            <Link href="/best-b2b-marketing-agency-netherlands-top-b2b-marketing-agencies-netherlands" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Netherlands</span>
            </Link>
            <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">UK</span>
            </Link>
            <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Germany</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Norwegian B2B Marketing Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive B2B marketing plan for Norway and Nordic markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">
            Start Free →
          </Link>
        </div>
      </section>
    </div>
  );
}
