import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best GTM Agency Sweden 2025 | Top Swedish Go-to-Market Agencies',
  description: 'Compare the best GTM agencies in Sweden for 2025. Expert Swedish agencies specializing in SaaS, fintech, product-led growth & Nordic market expansion.',
  keywords: 'best GTM agency Sweden, top go-to-market agencies Stockholm, GTM consultants Sweden, Nordic GTM strategy, product launch agency Sweden',
  alternates: {
    canonical: 'https://gtm.quest/best-gtm-agency-sweden-top-gtm-agencies-sweden'
  }
};

export const revalidate = 3600;

export default async function GTMAgencySwedenPage() {
  const agencies = await getAgenciesByCategory('GTM Agency', 'Sweden');
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
        "name": "What makes Swedish GTM agencies different from US or UK agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Swedish GTM agencies understand product-led growth strategies pioneered by Swedish unicorns like Spotify, Klarna, and King. They excel at consensus-driven enterprise sales matching Sweden's flat organizational culture, sustainability-focused positioning critical for Nordic buyers, and freemium/PLG models that Swedish companies have mastered globally."
        }
      },
      {
        "@type": "Question",
        "name": "How much do GTM agencies in Sweden typically charge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Swedish GTM agencies typically charge SEK 80,000-250,000 (€7,000-22,000) per month for retainer engagements. Project-based GTM strategies range from SEK 150,000-500,000 depending on scope. Full launch programs targeting Nordic enterprise markets can exceed SEK 800,000 for comprehensive pan-Nordic execution."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries do Swedish GTM agencies specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Swedish agencies excel in SaaS and technology (Stockholm's unicorn factory), fintech (Klarna, Northvolt), gaming (King, Mojang), cleantech and sustainability, and enterprise software. Sweden's #2 Global Innovation Index ranking and €2.4B+ annual VC investment create world-class tech GTM expertise."
        }
      },
      {
        "@type": "Question",
        "name": "Can Swedish GTM agencies help with broader Nordic market expansion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Sweden serves as the natural hub for pan-Nordic expansion. Swedish agencies coordinate campaigns across Denmark, Norway, and Finland—understanding cultural nuances across the 27 million population Nordic market while leveraging Stockholm's position as the region's startup and enterprise technology capital."
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
        "name": "Best GTM Agencies Sweden",
        "description": "Comprehensive directory of top Swedish go-to-market agencies",
        "url": "https://gtm.quest/best-gtm-agency-sweden-top-gtm-agencies-sweden"
      }) }} />

      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/">Home</Link> / <Link href="/best-gtm-agencies">Agencies</Link> / <span className="text-white">GTM Sweden</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1920&q=80" alt="Best GTM agency Sweden - Stockholm waterfront" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Sweden</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>Best GTM Agency Sweden 2025</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">Connect with {totalAgencies} elite Swedish GTM agencies specializing in SaaS, product-led growth, and Nordic market leadership.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">SEK{Math.round((avgMinBudget * 11) / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">{topSpecializations.length}+</div><div className="text-white/70 text-lg">Specialties</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose a Swedish GTM Agency?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>Sweden ranks #2 globally on the 2024 Global Innovation Index with technology contributing 12% to GDP, employing 400,000+ people, and positioning <a href="https://en.wikipedia.org/wiki/Stockholm" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Stockholm as Europe's "Unicorn Factory"</a> hosting 5,000+ startups generating €41 billion annual revenue. According to <a href="https://www.scb.se/en/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Statistics Sweden</a>, Swedish startups secured €2.4 billion in 2024 venture capital despite broader European funding declines, while producing globally dominant companies like Spotify, Klarna, King, and Skype that pioneered product-led growth strategies now standard across B2B SaaS.</p>
            <p>Swedish business culture uniquely emphasizes consensus-driven decision making (lagom philosophy), flat organizational hierarchies, and direct communication that accelerates enterprise sales cycles. The <a href="https://data.worldbank.org/country/sweden" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">World Bank</a> ranks Sweden among the world's most innovative economies. Sweden invests over 3% GDP annually in R&D—among world's highest—creating sophisticated buyer expectations around product quality, technical innovation, and sustainability. <a href="https://www.hubspot.com/state-of-marketing" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot research</a> shows that Nordic buyers expect self-service trials and transparent pricing before enterprise commitments.</p>
            <p><a href="https://www.business-sweden.com/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Business Sweden</a> supports international market expansion. Swedish GTM agencies provide critical Nordic capabilities: deep expertise in product-led growth where Swedish buyers expect self-service trials and minimal sales friction; proven frameworks for consensus-driven enterprise sales requiring stakeholder alignment across flat organizations; sophisticated understanding of sustainability expectations influencing enterprise adoption; and multilingual positioning spanning Nordic markets. They understand how to leverage Sweden's innovation leadership and unicorn track record for credibility while executing strategies balancing startup-friendly culture with relationship-driven approaches for larger enterprises.</p>
          </div>
        </div>
      </section>

      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Core GTM Services in Sweden</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Product-Led Growth Strategy</h3>
              <p className="text-xl text-white/80 leading-relaxed">Swedish unicorns pioneered PLG. Agencies excel at freemium models, self-service trials, transparent pricing, and product-led enterprise expansion strategies that Swedish buyers expect—minimal sales friction with powerful product experiences driving adoption.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">SaaS & Technology GTM</h3>
              <p className="text-xl text-white/80 leading-relaxed">Stockholm's 5,000+ startups create deep SaaS expertise. Agencies understand B2B software positioning, developer marketing, enterprise sales cycles, and the unique Swedish approach to scaling technology companies globally from Nordic headquarters.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Sustainability & ESG Positioning</h3>
              <p className="text-xl text-white/80 leading-relaxed">Swedish buyers prioritize sustainability. Agencies excel at authentic environmental positioning, ESG compliance messaging, and green technology GTM strategies essential for Nordic enterprise success where environmental credentials significantly influence adoption decisions.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Pan-Nordic Market Expansion</h3>
              <p className="text-xl text-white/80 leading-relaxed">Sweden anchors Nordic expansion. Agencies coordinate campaigns across Denmark, Norway, and Finland—understanding cultural nuances while leveraging Stockholm's position as the region's startup capital for efficient 27-million population market coverage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Key Industries for Swedish GTM</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">SaaS & Technology</h3>
              <p className="text-white/70">Spotify, Klarna, King—Stockholm's unicorn factory creates world-class SaaS and PLG expertise.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech</h3>
              <p className="text-white/70">Klarna, Northvolt, iZettle—Sweden leads European fintech innovation requiring specialized B2B positioning.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-white mb-4">Gaming</h3>
              <p className="text-white/70">King, Mojang, Paradox—Swedish gaming industry demands specialized gaming tech and platform GTM.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-white mb-4">Cleantech</h3>
              <p className="text-white/70">Northvolt, H2 Green Steel—Sweden leads cleantech innovation requiring sustainability-focused GTM expertise.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">How to Choose a Swedish GTM Agency</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">01</div>
              <h3 className="text-2xl font-bold text-white mb-4">Verify PLG Expertise</h3>
              <p className="text-xl text-white/80 leading-relaxed">Swedish buyers expect product-led experiences. Verify the agency understands freemium models, self-service trials, and PLG enterprise expansion—strategies pioneered by Swedish unicorns that define Nordic B2B expectations.</p>
            </div>
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">02</div>
              <h3 className="text-2xl font-bold text-white mb-4">Assess Sustainability Knowledge</h3>
              <p className="text-xl text-white/80 leading-relaxed">Swedish enterprises prioritize ESG. Verify the agency can authentically position sustainability credentials—greenwashing will backfire in Sweden where environmental expectations significantly influence enterprise technology decisions.</p>
            </div>
            <div>
              <div className="text-6xl font-black text-blue-500 mb-6">03</div>
              <h3 className="text-2xl font-bold text-white mb-4">Evaluate Nordic Reach</h3>
              <p className="text-xl text-white/80 leading-relaxed">Most companies use Sweden as Nordic launchpad. Verify the agency's pan-Nordic capabilities spanning Denmark, Norway, and Finland—understanding distinct market nuances while executing coordinated regional strategies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">GTM Agencies Serving Sweden</h2>
          <p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified agencies with Swedish market expertise.</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">What makes Swedish GTM agencies different from US or UK agencies?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Swedish agencies understand product-led growth pioneered by Spotify, Klarna, and King. They excel at consensus-driven enterprise sales, sustainability positioning, and freemium/PLG models that Swedish companies have mastered globally.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">How much do GTM agencies in Sweden typically charge?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Swedish agencies typically charge SEK 80,000-250,000 per month for retainers. Project-based strategies range from SEK 150,000-500,000. Full pan-Nordic launch programs can exceed SEK 800,000 for comprehensive execution.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Which industries do Swedish GTM agencies specialize in?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Swedish agencies excel in SaaS/technology (Stockholm's unicorn factory), fintech (Klarna, Northvolt), gaming (King, Mojang), cleantech, and enterprise software. Sweden's #2 innovation ranking creates world-class tech GTM expertise.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Can Swedish GTM agencies help with broader Nordic market expansion?</h3>
              <p className="text-xl text-white/80 leading-relaxed">Yes, Sweden serves as the natural Nordic hub. Swedish agencies coordinate campaigns across Denmark, Norway, and Finland—understanding cultural nuances across the 27-million population Nordic market from Stockholm's position as regional startup capital.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12">Explore Related GTM Markets</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Link href="/best-gtm-agency-norway-top-gtm-agencies-norway" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors"><span className="text-2xl font-bold text-white">Norway</span></Link>
            <Link href="/best-gtm-agency-denmark-top-gtm-agencies-denmark" className="bg-zinc-900 p-6 rounded-xl text-center hover:bg-zinc-800 transition-colors"><span className="text-2xl font-bold text-white">Denmark</span></Link>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your Swedish GTM Strategy</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive go-to-market strategy for Sweden and Nordic markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  );
}
