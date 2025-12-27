import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Sweden 2025 | GTM Quest',
  description: 'Find the best B2B marketing agency Sweden has for your business. Compare top B2B marketing agencies in Sweden for Stockholm and Nordic markets.',
  keywords: 'best B2B marketing agency Sweden, top B2B marketing agencies Stockholm, B2B marketing Sweden, Nordic B2B marketing, demand generation Sweden',
  alternates: { canonical: 'https://gtm.quest/best-b2b-marketing-agency-sweden-top-b2b-marketing-agencies-sweden' }
};

export const revalidate = 3600;

export default async function B2BMarketingAgencySwedenPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Sweden');
  const totalAgencies = agencies.length;
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000;

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the typical cost of a B2B marketing agency in Sweden?", "acceptedAnswer": { "@type": "Answer", "text": "B2B marketing agencies in Sweden typically charge SEK 80,000-250,000 (€7,000-€22,000) per month for retainer engagements. Stockholm agencies command premium pricing for SaaS and cleantech expertise." } },
      { "@type": "Question", "name": "Why choose a Swedish B2B marketing agency?", "acceptedAnswer": { "@type": "Answer", "text": "Swedish agencies offer access to Europe's most innovative startup ecosystem, 90%+ English proficiency, expertise in SaaS and cleantech, and understanding of Nordic business culture emphasizing design, sustainability, and transparency." } },
      { "@type": "Question", "name": "What industries do Swedish B2B marketing agencies specialize in?", "acceptedAnswer": { "@type": "Answer", "text": "Swedish agencies excel in SaaS and enterprise software, cleantech and sustainability, industrial automation, fintech and payments, and gaming technology. Sweden has produced more unicorns per capita than any nation except the US." } },
      { "@type": "Question", "name": "How long does it take to see results from B2B marketing in Sweden?", "acceptedAnswer": { "@type": "Answer", "text": "Expect 4-8 months to see meaningful pipeline impact. Swedish buyers make consensus-driven decisions where junior team members influence purchases. Build relationships across buying committees for success." } }
    ]
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CollectionPage", "name": "Best B2B Marketing Agency Sweden 2025", "url": "https://gtm.quest/best-b2b-marketing-agency-sweden-top-b2b-marketing-agencies-sweden" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="border-b border-white/10 py-6"><div className="max-w-7xl mx-auto px-6"><nav className="text-white/60 text-sm"><Link href="/" className="hover:text-white">Home</Link> / <Link href="/best-gtm-agencies" className="hover:text-white">Agencies</Link> / <span className="text-white">B2B Marketing Agency Sweden</span></nav></div></div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40"><img src="https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1920&q=80" alt="Best B2B marketing agency Sweden - Stockholm harbor" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Sweden</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>Best B2B Marketing Agency Sweden 2025</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">Discover the top {totalAgencies} B2B marketing agencies Sweden has to offer. Find the right B2B marketing agency Sweden businesses trust for Nordic and global growth.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">SEK{Math.round(avgMinBudget / 100)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">Nordic</div><div className="text-white/70 text-lg">Hub</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose a B2B Marketing Agency Sweden for Your Business?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>Sweden operates as <a href="https://en.wikipedia.org/wiki/Economy_of_Sweden" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">one of Europe's most innovative economies</a> and has produced more billion-dollar startups per capita than any nation except the US—Spotify, Klarna, King, iZettle, Northvolt. According to <a href="https://www.scb.se/en/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Statistics Sweden (SCB)</a>, the technology services sector grew 22% annually with Swedish B2B SaaS spending among Europe's highest per capita. Sweden's combination of engineering excellence, design leadership, and 90%+ English proficiency creates unique advantages for B2B technology companies targeting global markets from Nordic base.</p>
            <p>Swedish B2B marketing agencies navigate unique culture emphasizing lagom (moderation), consensus-driven decisions where junior team members influence purchases, and sophisticated buyers expecting design quality and sustainability commitments. According to <a href="https://www.business-sweden.com/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Business Sweden</a>, the country ranks #1 in EU innovation leadership. The <a href="https://www.vinnova.se/en/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Swedish Innovation Agency (Vinnova)</a> reports Swedish enterprises invest 3.3% of GDP in R&D—highest in EU—creating technology-sophisticated buyers expecting B2B vendors to match their innovation standards.</p>
            <p>Swedish agencies particularly excel in SaaS marketing for global platforms, cleantech positioning (Sweden leads green technology), industrial automation, fintech and payments (home of Klarna and iZettle), and gaming technology. They understand <a href="https://www.government.se/government-policy/enterprise-and-innovation/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Swedish business protocols</a> requiring extensive relationship cultivation, Nordic preference for understated marketing, and Sweden's position as the Nordic hub where success validates expansion into Norway, Denmark, and Finland—essential for vendors targeting the affluent, technology-sophisticated 27 million consumer Nordic market.</p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">What Services Do B2B Marketing Agencies Sweden Offer?</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">Demand Generation & Lead Generation</h3><p className="text-xl text-white/80 leading-relaxed">Swedish agencies build demand generation systems adapted to Nordic buying culture. This includes <a href="https://www.hubspot.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot</a> or Marketo implementation, consensus-building content for buying committees, and sophisticated analytics Swedish tech buyers expect.</p></div>
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">Account-Based Marketing (ABM)</h3><p className="text-xl text-white/80 leading-relaxed">For enterprise targeting, Swedish agencies implement ABM using <a href="https://www.demandbase.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Demandbase</a> or 6sense. They understand how to target Sweden's OMX-listed enterprises and unicorns with campaigns that respect lagom culture while driving commercial outcomes.</p></div>
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">Content Marketing & Design</h3><p className="text-xl text-white/80 leading-relaxed">Swedish buyers expect design excellence matching consumer brands. Agencies produce content meeting Scandinavian design standards—clean, functional, and substantive. Their teams combine technical depth with visual sophistication Swedish buyers demand.</p></div>
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">Nordic Market Expansion</h3><p className="text-xl text-white/80 leading-relaxed">Swedish agencies help companies expand across the Nordic region—Norway, Denmark, Finland, and Iceland. They understand subtle cultural differences, language considerations, and business practices across these affluent, technology-sophisticated markets.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Key Industries for B2B Marketing in Sweden</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p><strong className="text-white">SaaS & Enterprise Software:</strong> Sweden has produced Spotify, Klarna, and dozens of enterprise software unicorns. According to <a href="https://www.swedishchamber.se/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Swedish Chamber of Commerce</a>, the sector generates €20 billion+ annually. B2B agencies specialize in positioning SaaS companies for global expansion from Swedish base.</p>
            <p><strong className="text-white">Cleantech & Sustainability:</strong> Sweden leads global cleantech innovation with companies like Northvolt (batteries), H2 Green Steel, and Einride (autonomous trucks). The <a href="https://www.energimyndigheten.se/en/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Swedish Energy Agency</a> reports cleantech exports exceeding €15 billion. Agencies understand sustainability messaging essential for Swedish buyers.</p>
            <p><strong className="text-white">Industrial Automation:</strong> Sweden hosts global leaders including ABB, Ericsson, and Atlas Copco. Agencies specialize in B2B industrial marketing, understanding how Swedish manufacturing companies evaluate technology investments with thorough technical validation.</p>
            <p><strong className="text-white">Fintech & Payments:</strong> Home of Klarna, iZettle, and Tink, Sweden is a global fintech hub. Agencies understand Swedish financial regulatory requirements and positioning for European expansion from Stockholm base.</p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">How to Choose the Right B2B Marketing Agency Sweden</h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Understanding Swedish Business Culture</h3><p>Swedish business culture emphasizes consensus, egalitarianism, and transparency. Look for agencies who understand lagom—the Swedish concept of moderation—and can create marketing that resonates without appearing overly promotional. Swedish buyers respond to substance over hype.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Design & Technical Excellence</h3><p>Swedish buyers expect Scandinavian design quality in B2B contexts. Evaluate agencies on their creative capabilities and technical depth—they must combine visual sophistication with substantive content that satisfies Sweden's engineering-oriented decision-makers.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Nordic Regional Capabilities</h3><p>If your strategy includes broader Nordic expansion, evaluate agencies on their understanding of Norwegian, Danish, and Finnish markets. While culturally similar, each Nordic country has distinct business practices and preferences.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16"><h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Top B2B Marketing Agency Sweden Directory</h2><p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified B2B marketing agencies serving Swedish and Nordic businesses.</p></div>
        <div className="w-full">{agencies.map((agency, i) => (<AgencyCard key={agency.slug} rank={i + 1} name={agency.name} tagline={(agency as any).b2b_description || agency.description} description={[(agency as any).b2b_description || agency.description]} bestFor={agency.specializations || []} keyServices={(agency as any).key_services || agency.specializations || []} website={agency.website || '#'} primaryColor={(agency as any).primary_color || '#8B5CF6'} logoUrl={(agency as any).logo_url} backdropUrl={(agency as any).backdrop_url} isTopRanked={!!(agency.global_rank && agency.global_rank <= 3)} internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined} serviceAreas={agency.service_areas || []} />))}</div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-16">B2B Marketing Agency Sweden FAQs</h2>
          <div className="space-y-12 max-w-6xl">
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>What is the typical cost of a B2B marketing agency in Sweden?</h3><p className="text-2xl text-white/80 leading-[1.8]">B2B marketing agencies in Sweden typically charge SEK 80,000-250,000 (€7,000-€22,000) per month for retainer engagements. Stockholm agencies command premium pricing for SaaS and cleantech expertise. This positions Swedish agencies similarly to other Nordic and Western European markets.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Why choose a Swedish B2B marketing agency?</h3><p className="text-2xl text-white/80 leading-[1.8]">Swedish agencies offer access to Europe's most innovative startup ecosystem, 90%+ English proficiency, expertise in SaaS and cleantech, and deep understanding of Nordic business culture emphasizing design excellence, sustainability, and transparent communication.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>What industries do Swedish B2B marketing agencies specialize in?</h3><p className="text-2xl text-white/80 leading-[1.8]">Swedish agencies excel in SaaS and enterprise software, cleantech and sustainability, industrial automation, fintech and payments, and gaming technology. Sweden has produced more unicorns per capita than any nation except the US.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>How long does it take to see results from B2B marketing in Sweden?</h3><p className="text-2xl text-white/80 leading-[1.8]">Expect 4-8 months to see meaningful pipeline impact. Swedish buyers make consensus-driven decisions where junior team members influence purchases. Build relationships across buying committees rather than focusing solely on senior decision-makers.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-10">Explore Related B2B Marketing Markets</h2>
          <p className="text-2xl text-white/80 mb-12 max-w-4xl">Expanding beyond Sweden? Explore B2B marketing agencies in key Nordic and European markets.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">Germany</h3><p className="text-white/60">Europe's largest economy and industrial leader</p></Link>
            <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">United Kingdom</h3><p className="text-white/60">Major market for Swedish tech expansion</p></Link>
            <Link href="/best-b2b-marketing-agency-netherlands-top-b2b-marketing-agencies-netherlands" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">Netherlands</h3><p className="text-white/60">European tech hub with similar culture</p></Link>
            <Link href="/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">United States</h3><p className="text-white/60">Primary expansion market for Swedish unicorns</p></Link>
            <Link href="/best-b2b-marketing-agency-ireland-top-b2b-marketing-agencies-ireland" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">Ireland</h3><p className="text-white/60">EU English-speaking tech hub</p></Link>
            <Link href="/best-b2b-marketing-agency-finland-top-b2b-marketing-agencies-finland" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">Finland</h3><p className="text-white/60">Nordic neighbor with gaming and telco strength</p></Link>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-10">B2B Marketing Resources</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <Link href="/b2b-gtm-strategy" className="block p-8 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">B2B GTM Strategy Guide</h3><p className="text-white/60">Learn how to build effective go-to-market strategies</p></Link>
            <Link href="/planner" className="block p-8 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">GTM Strategy Planner</h3><p className="text-white/60">Build your custom go-to-market strategy</p></Link>
            <Link href="/articles" className="block p-8 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">GTM Articles & Insights</h3><p className="text-white/60">Expert articles on B2B marketing and growth</p></Link>
            <Link href="/about" className="block p-8 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">About GTM Quest</h3><p className="text-white/60">Learn about our mission</p></Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your B2B Marketing Strategy for Sweden</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive B2B marketing strategy for Swedish and Nordic markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  );
}
