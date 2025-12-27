import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best GTM Agency Italy 2025 | Top Italian Go-to-Market Agencies',
  description: 'Compare the best GTM agencies in Italy for 2025. Expert Italian agencies specializing in design-led tech, manufacturing, fashion & Southern European expansion.',
  keywords: 'best GTM agency Italy, top go-to-market agencies Milan, GTM consultants Rome, B2B GTM strategy Italy, product launch agency Italy',
  alternates: {
    canonical: 'https://gtm.quest/best-gtm-agency-italy-top-gtm-agencies-italy'
  }
};

export const revalidate = 3600;

export default async function GTMAgencyItalyPage() {
  const agencies = await getAgenciesByCategory('GTM Agency', 'Italy');
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
        "name": "What makes Italian GTM agencies different from Northern European agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Italian GTM agencies understand relationship-driven Italian business culture where personal connections, family business traditions, and extended trust-building cycles are essential. They excel at design-led positioning reflecting Italy's legendary aesthetics heritage, navigating regional market diversity from Milan's international hub to Rome's government sectors, and building stakeholder relationships across Italian enterprise's hierarchical structures."
        }
      },
      {
        "@type": "Question",
        "name": "How much do GTM agencies in Italy typically charge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Italian GTM agencies typically charge €6,000-20,000 per month for retainer engagements. Project-based GTM strategies range from €15,000-60,000 depending on scope. Full launch programs targeting Italian enterprise markets can exceed €80,000 for comprehensive execution spanning Milan, Rome, and regional industrial markets."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries do Italian GTM agencies specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Italian agencies excel in fashion and luxury technology (Milan's fashion capital), manufacturing and Industry 4.0 (Northern industrial districts), automotive (Turin's Fiat/Stellantis), design and furniture technology, and food/agriculture tech. Italy's €1.3B+ startup ecosystem and Made in Italy brand create unique design-led GTM expertise."
        }
      },
      {
        "@type": "Question",
        "name": "Can Italian GTM agencies help with Southern European market expansion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Italy serves as an important gateway to Southern European markets. Italian agencies understand Mediterranean business culture similarities with Spain, Portugal, and Greece while adapting positioning for Italian market nuances. Milan's position as Southern Europe's business hub provides regional expansion expertise."
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
        "name": "Best GTM Agencies Italy",
        "description": "Comprehensive directory of top Italian go-to-market agencies",
        "url": "https://gtm.quest/best-gtm-agency-italy-top-gtm-agencies-italy"
      }) }} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">GTM Italy</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1920&q=80" alt="Best GTM agency Italy - Milan Duomo cathedral" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Italy</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>Best GTM Agency Italy 2025</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">Connect with {totalAgencies} elite Italian GTM agencies specializing in design-led tech, manufacturing, and Southern European markets.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">€{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose an Italian GTM Agency?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>Italy's technology sector contributed <a href="https://en.wikipedia.org/wiki/Economy_of_Italy" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">6.8% to GDP</a> and is heading toward 8.5%, with Italian startups raising over €1.3 billion annually, positioning Milan as Southern Europe's emerging innovation hub responsible for 40% of total Italian tech investment alongside Rome's cybersecurity excellence and Turin's automotive technology strengths. Italy's legendary design heritage (Made in Italy brand) extends into enterprise technology, where Italian buyers uniquely emphasize user experience aesthetics, interface elegance, and brand positioning alongside functional requirements.</p>
            <p>According to <a href="https://www.istat.it/en/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">ISTAT</a>, Italian business culture prioritizes personal relationships, family business traditions, and extended trust-building cycles requiring patient GTM strategies. The <a href="https://data.worldbank.org/country/italy" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">World Bank</a> tracks Italy's significant manufacturing sector. Italian enterprise buyers expect multiple face-to-face meetings, demonstrations of long-term commitment through local presence, and extensive relationship cultivation before major technology purchases. <a href="https://www.hubspot.com/state-of-marketing" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot research</a> confirms that Italian buyers value design quality and established relationships.</p>
            <p><a href="https://www.ice.it/en/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">ICE Italian Trade Agency</a> supports international business development. Italian GTM agencies provide critical Southern European capabilities: deep understanding of relationship-driven sales requiring extensive courtship; expertise navigating regional markets from Milan's international business hub through Rome's government sectors and Northern industrial manufacturing; bilingual positioning with cultural sensitivity to design aesthetics and Made in Italy brand values. They understand how to leverage Italy's design excellence for credibility and execute patient, relationship-intensive strategies that align with Italian business culture.</p>
          </div>
        </div>
      </section>

      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Core GTM Services in Italy</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Design-Led Product Launches</h3>
              <p className="text-xl text-white/80 leading-relaxed">Italian buyers expect aesthetic excellence alongside functionality. Agencies orchestrate launches emphasizing design quality, user experience, and brand positioning that resonates with Italy's legendary design heritage and Made in Italy quality expectations.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Manufacturing & Industry 4.0</h3>
              <p className="text-xl text-white/80 leading-relaxed">Northern Italy's industrial districts lead European manufacturing. Agencies understand positioning for Emilia-Romagna's mechanical engineering, Veneto's furniture manufacturing, and Lombardy's industrial automation—sectors requiring specialized technical GTM expertise.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Fashion & Luxury Tech</h3>
              <p className="text-xl text-white/80 leading-relaxed">Milan is global fashion capital. Agencies excel at positioning technology for luxury brands, fashion supply chains, and retail innovation—understanding the unique requirements of marketing to Italy's prestigious fashion and luxury goods ecosystem.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Regional Market Navigation</h3>
              <p className="text-xl text-white/80 leading-relaxed">Italy's regional diversity requires nuanced approaches. Agencies coordinate campaigns across Milan (international business), Rome (government/public sector), Turin (automotive), and Northern industrial districts—understanding distinct buyer behaviors in each region.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Key Industries for Italian GTM</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl mb-4">👗</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fashion & Luxury</h3>
              <p className="text-white/70">Milan fashion week, Gucci, Prada—global luxury capital requires specialized fashion tech and retail GTM expertise.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-white mb-4">Manufacturing</h3>
              <p className="text-white/70">Northern industrial districts lead European manufacturing. Mechanical engineering and automation demand technical GTM.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-white mb-4">Automotive</h3>
              <p className="text-white/70">Turin hosts Stellantis (Fiat). Ferrari, Lamborghini drive automotive innovation requiring specialized B2B positioning.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🪑</div>
              <h3 className="text-2xl font-bold text-white mb-4">Design & Furniture</h3>
              <p className="text-white/70">Italian design leads globally. Furniture tech and design software require positioning that honors Made in Italy heritage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">How to Choose an Italian GTM Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">01</div>
              <h3 className="text-2xl font-bold text-white mb-4">Verify Relationship Expertise</h3>
              <p className="text-xl text-white/80 leading-relaxed">Italian GTM success requires patient relationship building. Verify the agency understands Italian business culture's extended trust-building cycles and can execute relationship-intensive strategies spanning 12-18 month enterprise sales processes.</p>
            </div>
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">02</div>
              <h3 className="text-2xl font-bold text-white mb-4">Assess Design Sensitivity</h3>
              <p className="text-xl text-white/80 leading-relaxed">Italian buyers expect aesthetic excellence. Verify the agency can create positioning that honors Italian design heritage, emphasizes user experience quality, and resonates with Italy's sophisticated visual and brand expectations.</p>
            </div>
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">03</div>
              <h3 className="text-2xl font-bold text-white mb-4">Evaluate Regional Coverage</h3>
              <p className="text-xl text-white/80 leading-relaxed">Italy has distinct regional markets. Milan differs fundamentally from Rome or Northern industrial districts. Verify the agency has experience across target regions and understands local buyer behaviors and industry concentrations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Agencies Serving Italy</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies with Italian market expertise.</p>
        </div>
        <div className="w-full">
          {agencies.map((agency, i) => (
            <AgencyCard key={agency.slug} rank={i + 1} name={agency.name} tagline={(agency as any).b2b_description || agency.description} description={[(agency as any).b2b_description || agency.description]} bestFor={agency.specializations || []} keyServices={(agency as any).key_services || agency.specializations || []} website={agency.website || '#'} primaryColor={(agency as any).primary_color || '#8B5CF6'} logoUrl={(agency as any).logo_url} backdropUrl={(agency as any).backdrop_url} isTopRanked={!!(agency.global_rank && agency.global_rank <= 3)} internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined} serviceAreas={agency.service_areas || []} />
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">What makes Italian GTM agencies different from Northern European agencies?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Italian agencies understand relationship-driven business culture where personal connections, family business traditions, and extended trust-building are essential. They excel at design-led positioning and navigating regional market diversity.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">How much do GTM agencies in Italy typically charge?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Italian agencies typically charge €6,000-20,000 per month for retainers. Project-based strategies range from €15,000-60,000. Full launch programs can exceed €80,000 for comprehensive regional execution.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Which industries do Italian GTM agencies specialize in?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Italian agencies excel in fashion/luxury tech, manufacturing/Industry 4.0, automotive (Turin), design/furniture tech, and food/agriculture. Italy's €1.3B+ startup ecosystem creates deep design-led GTM expertise.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Can Italian GTM agencies help with Southern European market expansion?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Yes, Italy serves as a gateway to Southern European markets. Italian agencies understand Mediterranean business culture and can coordinate expansion across Spain, Portugal, and Greece from Milan's position as Southern Europe's business hub.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">Explore Related GTM Markets</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Link href="/best-gtm-agency-france-top-gtm-agencies-france" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors"><span className="text-2xl font-bold text-white">France</span></Link>
            <Link href="/best-gtm-agency-spain-top-gtm-agencies-spain" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors"><span className="text-2xl font-bold text-white">Spain</span></Link>
            <Link href="/best-gtm-agency-germany-top-gtm-agencies-germany" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors"><span className="text-2xl font-bold text-white">Germany</span></Link>
            <Link href="/best-gtm-agency-netherlands-top-gtm-agencies-netherlands" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors"><span className="text-2xl font-bold text-white">Netherlands</span></Link>
            <Link href="/best-gtm-agency-uk-top-gtm-agencies-uk" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors"><span className="text-2xl font-bold text-white">UK</span></Link>
            <Link href="/best-gtm-agency-us-top-gtm-agencies-us" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors"><span className="text-2xl font-bold text-white">US</span></Link>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">GTM Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/best-gtm-agencies" className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition-colors"><h3 className="text-xl font-bold text-white mb-2">GTM Agency Directory</h3><p className="text-white/60">Browse all go-to-market agencies globally</p></Link>
            <Link href="/best-abm-agencies" className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition-colors"><h3 className="text-xl font-bold text-white mb-2">ABM Agencies</h3><p className="text-white/60">Account-based marketing specialists</p></Link>
            <Link href="/best-demand-gen-agencies" className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition-colors"><h3 className="text-xl font-bold text-white mb-2">Demand Gen Agencies</h3><p className="text-white/60">Pipeline generation experts</p></Link>
            <Link href="/planner" className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition-colors"><h3 className="text-xl font-bold text-white mb-2">GTM Planner</h3><p className="text-white/60">Build your go-to-market strategy</p></Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Italian GTM Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive go-to-market strategy for Italy and Southern European markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  );
}
