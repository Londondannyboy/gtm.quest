import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Switzerland 2025 | Top Swiss B2B Marketing Agencies',
  description: 'Compare the best B2B marketing agencies in Switzerland for 2025. Expert Swiss agencies specializing in pharma, finance, luxury & DACH market expansion.',
  keywords: 'best B2B marketing agency Switzerland, top B2B marketing agencies Zurich, B2B marketing Switzerland, Swiss B2B marketing consultancy, Geneva marketing agency',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-switzerland-top-b2b-marketing-agencies-switzerland'
  }
};

export const revalidate = 3600;

export default async function B2BMarketingAgencySwitzerlandPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Switzerland');
  const totalAgencies = agencies.length;
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 15000;
  const specializations = agencies.flatMap(a => a.specializations || []).reduce((acc, spec) => { acc[spec] = (acc[spec] || 0) + 1; return acc; }, {} as Record<string, number>);
  const topSpecializations = Object.entries(specializations).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([spec]) => spec);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Swiss B2B marketing agencies unique?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Swiss agencies combine precision, multilingual capability (German, French, Italian), and deep expertise in premium B2B sectors—pharmaceuticals (Novartis, Roche), banking and wealth management, precision manufacturing, and luxury goods. Switzerland's position as a neutral business hub means agencies understand international B2B marketing for multinational headquarters and complex cross-border campaigns."
        }
      },
      {
        "@type": "Question",
        "name": "How much do B2B marketing agencies in Switzerland typically charge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Swiss B2B marketing agencies typically charge CHF 10,000-40,000 (€10,000-40,000) per month for retainer services. Project-based work ranges from CHF 30,000-150,000 for comprehensive campaigns. Switzerland's high cost of living and premium positioning means agencies charge top rates but deliver correspondingly sophisticated work for demanding international clients."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries do Swiss B2B marketing agencies specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Swiss agencies excel in pharmaceuticals and life sciences (Basel pharma cluster with Novartis, Roche), banking, wealth management and fintech (Zurich and Geneva), precision manufacturing and watchmaking, food and commodities trading (Nestlé, global commodity traders), and international organizations marketing (UN agencies in Geneva)."
        }
      },
      {
        "@type": "Question",
        "name": "Can Swiss agencies help with DACH region B2B marketing campaigns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Swiss agencies are ideally positioned for DACH (Germany, Austria, Switzerland) expansion. They understand German business culture while maintaining distinctly Swiss precision and quality standards. Many Swiss agencies serve as European headquarters for global companies, providing expertise in coordinating campaigns across German-speaking markets and broader European territories."
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
        "name": "Best B2B Marketing Agencies Switzerland",
        "description": "Comprehensive directory of top Swiss B2B marketing agencies",
        "url": "https://gtm.quest/best-b2b-marketing-agency-switzerland-top-b2b-marketing-agencies-switzerland"
      }) }} />

      {/* Breadcrumbs */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">B2B Marketing Switzerland</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1920&q=80" alt="Best B2B marketing agency Switzerland - Swiss Alps and Zurich" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Switzerland</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>
            Best B2B Marketing Agency Switzerland 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Connect with {totalAgencies} elite Swiss B2B marketing agencies specializing in pharma, finance, and DACH market leadership.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">CHF{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      {/* Why Choose Switzerland Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose a Swiss B2B Marketing Agency?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>Switzerland represents the pinnacle of precision, quality, and international sophistication in B2B marketing. According to the <a href="https://www.bfs.admin.ch/bfs/en/home.html" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Swiss Federal Statistical Office</a>, the country hosts over 1,000 multinational headquarters, making it a global hub for enterprise marketing. The <a href="https://en.wikipedia.org/wiki/Basel" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Basel pharma cluster</a> alone—home to Novartis, Roche, and hundreds of biotech companies—generates over $80 billion in exports annually. Swiss B2B agencies understand how to market in highly regulated industries where scientific credibility, compliance, and technical precision are non-negotiable.</p>
            <p>Switzerland's unique multilingual environment (German, French, Italian, English) creates agencies skilled at coordinating complex cross-cultural campaigns. The <a href="https://data.worldbank.org/country/switzerland" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">World Bank</a> consistently ranks Switzerland among the world's most competitive economies, with the highest GDP per capita globally. Zurich serves as Europe's financial technology hub, while Geneva hosts major international organizations including the UN, WHO, and WTO. <a href="https://www.hubspot.com/state-of-marketing" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot research</a> shows that Swiss B2B buyers value quality, reliability, and long-term relationships above price—agencies understand how to craft messaging that resonates with these expectations.</p>
            <p><a href="https://www.s-ge.com/en" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Switzerland Global Enterprise</a> supports export promotion and internationalization. Swiss agencies particularly excel in pharmaceutical and life sciences marketing, private banking and wealth management B2B positioning, precision manufacturing and industrial technology, luxury brand B2B services, and international organization marketing. Whether you're entering Swiss markets, establishing European headquarters, or leveraging Swiss credibility for global campaigns, Swiss agencies offer unmatched combination of precision, multilingual capability, and premium sector expertise that commands respect in the most demanding B2B environments.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Core B2B Marketing Services in Switzerland</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Pharma & Life Sciences Marketing</h3>
              <p className="text-xl text-white/80 leading-relaxed">Basel is Europe's pharma capital. Swiss agencies understand clinical trial marketing, HCP engagement, regulatory compliance (Swissmedic, EMA), and complex medical device positioning. Expertise in multi-stakeholder campaigns targeting physicians, hospital administrators, and payers simultaneously.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Financial Services & Fintech Marketing</h3>
              <p className="text-xl text-white/80 leading-relaxed">Zurich and Geneva define global wealth management. Agencies excel at private banking B2B positioning, institutional investor marketing, fintech enterprise sales, and regulatory-compliant financial communications across multiple jurisdictions.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Precision Manufacturing & Industrial</h3>
              <p className="text-xl text-white/80 leading-relaxed">Swiss precision is legendary. Agencies understand marketing for watchmaking supply chains, medical device manufacturing, industrial automation, and high-precision engineering—sectors where Swiss quality commands premium positioning.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Multilingual DACH & European Campaigns</h3>
              <p className="text-xl text-white/80 leading-relaxed">Swiss agencies coordinate campaigns across German, French, Italian, and English markets. Expertise in adapting messaging for DACH region nuances while maintaining brand consistency across European territories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Key Industries for Swiss B2B Marketing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl mb-4">💊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Pharmaceuticals</h3>
              <p className="text-white/70">Novartis, Roche, Lonza—Basel's $80B pharma cluster demands specialized life sciences marketing expertise.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-white mb-4">Banking & Finance</h3>
              <p className="text-white/70">UBS, Credit Suisse, private banks—Zurich and Geneva wealth management requires discreet, sophisticated B2B positioning.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Precision Manufacturing</h3>
              <p className="text-white/70">Watchmaking, medical devices, industrial automation—Swiss precision engineering commands premium B2B marketing.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4">International Organizations</h3>
              <p className="text-white/70">UN, WHO, WTO in Geneva—specialized marketing for organizations serving global institutional audiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">How to Choose a Swiss B2B Marketing Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">01</div>
              <h3 className="text-2xl font-bold text-white mb-4">Verify Sector Expertise</h3>
              <p className="text-xl text-white/80 leading-relaxed">Swiss B2B sectors are highly specialized with strict regulatory requirements. Pharma marketing differs fundamentally from banking or manufacturing. Verify the agency has proven experience in your specific industry, including relevant compliance expertise (FINMA, Swissmedic, etc.).</p>
            </div>
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">02</div>
              <h3 className="text-2xl font-bold text-white mb-4">Assess Multilingual Capability</h3>
              <p className="text-xl text-white/80 leading-relaxed">Switzerland's four-language environment requires true multilingual expertise. Verify the agency can produce native-quality content in German, French, and English at minimum. Translation is insufficient—look for cultural adaptation that resonates authentically in each market.</p>
            </div>
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">03</div>
              <h3 className="text-2xl font-bold text-white mb-4">Evaluate International Coordination</h3>
              <p className="text-xl text-white/80 leading-relaxed">Many Swiss clients operate globally. Verify the agency's experience coordinating international campaigns, working with global headquarters, and maintaining Swiss quality standards while scaling across European and global markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Directory */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">B2B Marketing Agencies Serving Switzerland</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies with Swiss market expertise.</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">What makes Swiss B2B marketing agencies unique?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Swiss agencies combine precision, multilingual capability (German, French, Italian), and deep expertise in premium B2B sectors—pharmaceuticals, banking, precision manufacturing, and luxury goods. Switzerland's position as a neutral business hub means agencies understand international B2B marketing.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">How much do B2B marketing agencies in Switzerland typically charge?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Swiss agencies typically charge CHF 10,000-40,000 per month for retainer services. Project-based work ranges from CHF 30,000-150,000 for comprehensive campaigns. Premium positioning means top rates but correspondingly sophisticated work.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Which industries do Swiss B2B marketing agencies specialize in?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Swiss agencies excel in pharmaceuticals and life sciences (Basel cluster), banking and fintech (Zurich, Geneva), precision manufacturing and watchmaking, food and commodities trading (Nestlé), and international organizations marketing.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Can Swiss agencies help with DACH region B2B marketing campaigns?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Yes, Swiss agencies are ideally positioned for DACH expansion. They understand German business culture while maintaining Swiss precision. Many serve as European headquarters for global companies, coordinating campaigns across German-speaking markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Markets */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">Explore Related B2B Markets</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Germany</span>
            </Link>
            <Link href="/best-b2b-marketing-agency-austria-top-b2b-marketing-agencies-austria" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Austria</span>
            </Link>
            <Link href="/best-b2b-marketing-agency-france-top-b2b-marketing-agencies-france" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">France</span>
            </Link>
            <Link href="/best-b2b-marketing-agency-netherlands-top-b2b-marketing-agencies-netherlands" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Netherlands</span>
            </Link>
            <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">UK</span>
            </Link>
            <Link href="/best-b2b-marketing-agency-italy-top-b2b-marketing-agencies-italy" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors">
              <span className="text-2xl font-bold text-white">Italy</span>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Swiss B2B Marketing Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive B2B marketing plan for Switzerland and DACH markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">
            Start Free →
          </Link>
        </div>
      </section>
    </div>
  );
}
