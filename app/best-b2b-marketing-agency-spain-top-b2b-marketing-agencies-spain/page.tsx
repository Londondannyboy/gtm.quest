import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Spain 2025 | GTM Quest',
  description: 'Find the best B2B marketing agency Spain has for your business. Compare top B2B marketing agencies in Spain for Madrid, Barcelona, and Latin American markets.',
  keywords: 'best B2B marketing agency Spain, top B2B marketing agencies Madrid, B2B marketing Barcelona, Spanish B2B marketing, LATAM B2B expansion',
  alternates: { canonical: 'https://gtm.quest/best-b2b-marketing-agency-spain-top-b2b-marketing-agencies-spain' }
};

export const revalidate = 3600;

export default async function B2BMarketingAgencySpainPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Spain');
  const totalAgencies = agencies.length;
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000;

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the typical cost of a B2B marketing agency in Spain?", "acceptedAnswer": { "@type": "Answer", "text": "B2B marketing agencies in Spain typically charge €5,000-€20,000 per month for retainer engagements. Barcelona and Madrid agencies command premium pricing for technology and tourism expertise." } },
      { "@type": "Question", "name": "Why choose a Spanish B2B marketing agency?", "acceptedAnswer": { "@type": "Answer", "text": "Spanish agencies offer gateway to 650 million Spanish-speaking consumers in Latin America, lower operating costs than Northern Europe, expertise in tourism and renewable energy, and understanding of relationship-based Southern European business culture." } },
      { "@type": "Question", "name": "What industries do Spanish B2B marketing agencies specialize in?", "acceptedAnswer": { "@type": "Answer", "text": "Spanish agencies excel in tourism technology, renewable energy, retail technology (Inditex/Zara ecosystem), financial services, and professional services. Barcelona is Southern Europe's startup capital." } },
      { "@type": "Question", "name": "How long does it take to see results from B2B marketing in Spain?", "acceptedAnswer": { "@type": "Answer", "text": "Expect 6-12 months to see meaningful pipeline impact. Spanish buyers prioritize relationships over transactions, requiring longer cultivation periods. Regional variations between Catalonia, Madrid, and other areas affect approaches." } }
    ]
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CollectionPage", "name": "Best B2B Marketing Agency Spain 2025", "url": "https://gtm.quest/best-b2b-marketing-agency-spain-top-b2b-marketing-agencies-spain" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="border-b border-white/10 py-6"><div className="max-w-7xl mx-auto px-6"><nav className="text-white/60 text-sm"><Link href="/" className="hover:text-white">Home</Link> / <Link href="/best-gtm-agencies" className="hover:text-white">Agencies</Link> / <span className="text-white">B2B Marketing Agency Spain</span></nav></div></div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40"><img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1920&q=80" alt="Best B2B marketing agency Spain - Barcelona" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Spain</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>Best B2B Marketing Agency Spain 2025</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">Discover the top {totalAgencies} B2B marketing agencies Spain has to offer. Find the right B2B marketing agency Spain businesses trust for European and LATAM growth.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">€{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">LATAM</div><div className="text-white/70 text-lg">Gateway</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose a B2B Marketing Agency Spain for Your Business?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>Spain operates as <a href="https://en.wikipedia.org/wiki/Economy_of_Spain" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">the Eurozone's fourth-largest economy</a> and serves as Europe's bridge to Latin America's 650 million Spanish-speaking consumers. According to <a href="https://www.ine.es/en/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Spanish National Statistics Institute (INE)</a>, technology services grew 18% annually over the past five years. Barcelona has emerged as Southern Europe's startup capital with tech district 22@, while Madrid hosts multinational regional headquarters. Spain's unique position connecting European sophistication with Latin American market access creates opportunities for B2B firms using Spain as gateway to $8 trillion LATAM economies.</p>
            <p>Spanish B2B marketing agencies navigate a sophisticated market where relationship-based selling remains paramount. According to <a href="https://www.icex.es/en/home" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">ICEX Spain Trade and Investment</a>, enterprise buyers expect personal connections before business discussions, and marketing must demonstrate understanding of Spanish business culture valuing long lunch meetings, regional pride (Catalonia versus Castile), and consensus-building decision processes. The <a href="https://www.mineco.gob.es/portal/site/mineco/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Spanish Ministry of Economy</a> reports increasing technology investment as Spanish companies pursue digital transformation.</p>
            <p>Spanish agencies particularly excel in tourism technology marketing (Spain's 85 million annual visitors create massive hospitality tech opportunities), renewable energy positioning (Spain leads Europe in solar and wind according to <a href="https://www.ree.es/en" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Red Eléctrica</a>), retail technology for the Inditex/Zara supply chain ecosystem, and professional services firms targeting Latin American expansion where Spanish cultural expertise, language fluency, and established networks enable market access foreign competitors require years to develop.</p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">What Services Do B2B Marketing Agencies Spain Offer?</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">Demand Generation & Lead Generation</h3><p className="text-xl text-white/80 leading-relaxed">Spanish agencies build demand generation systems for Spanish and LATAM markets. This includes <a href="https://www.hubspot.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot</a> or Salesforce implementation with Spanish localization, relationship-nurturing sequences, and longer sales cycle optimization that Spanish B2B requires.</p></div>
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">Account-Based Marketing (ABM)</h3><p className="text-xl text-white/80 leading-relaxed">For IBEX 35 and major enterprise targeting, Spanish agencies implement ABM using <a href="https://www.demandbase.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Demandbase</a> or 6sense. They understand how to target Spanish conglomerates and regional champions with campaigns combining digital precision and relationship cultivation.</p></div>
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">Content Marketing & Localization</h3><p className="text-xl text-white/80 leading-relaxed">Spanish B2B content requires cultural sophistication beyond translation. Agencies produce content meeting Spanish business expectations while adapting for Latin American markets where Spanish varies by country. Native writers understand regional differences between Castilian and Latin American Spanish.</p></div>
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">Latin American Expansion</h3><p className="text-xl text-white/80 leading-relaxed">Spanish agencies help companies expand into Latin America leveraging Spain as cultural gateway. They understand LATAM business protocols—family business structures, relationship expectations, and market-specific requirements across Mexico, Colombia, Argentina, Chile, and other key markets.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Key Industries for B2B Marketing in Spain</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p><strong className="text-white">Tourism Technology:</strong> Spain receives 85 million visitors annually, creating massive B2B opportunities in hospitality technology. According to <a href="https://www.tourspain.es/en-us" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Turespaña</a>, tourism generates €176 billion annually. Agencies specialize in marketing hotel technology, experience platforms, and travel tech to Spain's concentration of hospitality enterprises.</p>
            <p><strong className="text-white">Renewable Energy:</strong> Spain leads Europe in renewable energy adoption with major solar and wind installations. According to <a href="https://www.ree.es/en" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Red Eléctrica de España</a>, renewables generate over 50% of electricity. Agencies understand positioning for energy technology companies targeting Spain's green transition.</p>
            <p><strong className="text-white">Retail & Fashion Technology:</strong> Home of Inditex (Zara), Spain hosts sophisticated retail technology ecosystem. Agencies specialize in supply chain technology, retail automation, and e-commerce platforms serving Spain's fashion and retail industry clusters.</p>
            <p><strong className="text-white">Financial Services:</strong> Santander and BBVA drive significant technology investment. Barcelona's fintech scene has grown rapidly, with agencies understanding positioning for both traditional banking technology and fintech startups targeting Spanish and LATAM markets.</p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">How to Choose the Right B2B Marketing Agency Spain</h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Spanish Business Culture Understanding</h3><p>Spanish B2B requires relationship-first approaches. Look for agencies demonstrating deep understanding of Spanish business culture—the importance of personal connections, regional dynamics (Barcelona vs Madrid vs regional centers), and consensus-building decision processes slower than Northern European pragmatism.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>LATAM Expansion Capabilities</h3><p>If your strategy includes Latin American expansion, evaluate agencies on their LATAM expertise. The best Spanish agencies have established networks and cultural intelligence across Mexico, Colombia, Argentina, Chile, and other key markets—essential for companies using Spain as LATAM gateway.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Industry Vertical Experience</h3><p>Spain's B2B markets are concentrated in specific verticals. Look for agencies with proven experience in tourism technology, renewable energy, retail, or financial services—depending on your target market. Ask about regional specialization given Barcelona vs Madrid market differences.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16"><h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Top B2B Marketing Agency Spain Directory</h2><p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified B2B marketing agencies serving Spanish and LATAM businesses.</p></div>
        <div className="w-full">{agencies.map((agency, i) => (<AgencyCard key={agency.slug} rank={i + 1} name={agency.name} tagline={(agency as any).b2b_description || agency.description} description={[(agency as any).b2b_description || agency.description]} bestFor={agency.specializations || []} keyServices={(agency as any).key_services || agency.specializations || []} website={agency.website || '#'} primaryColor={(agency as any).primary_color || '#8B5CF6'} logoUrl={(agency as any).logo_url} backdropUrl={(agency as any).backdrop_url} isTopRanked={!!(agency.global_rank && agency.global_rank <= 3)} internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined} serviceAreas={agency.service_areas || []} />))}</div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-16">B2B Marketing Agency Spain FAQs</h2>
          <div className="space-y-12 max-w-6xl">
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>What is the typical cost of a B2B marketing agency in Spain?</h3><p className="text-2xl text-white/80 leading-[1.8]">B2B marketing agencies in Spain typically charge €5,000-€20,000 per month for retainer engagements—significantly lower than Northern European markets. Barcelona and Madrid agencies command premium pricing for technology and tourism expertise. This cost advantage makes Spain attractive for companies seeking quality execution at lower costs.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Why choose a Spanish B2B marketing agency?</h3><p className="text-2xl text-white/80 leading-[1.8]">Spanish agencies offer gateway to 650 million Spanish-speaking consumers in Latin America, lower operating costs than Northern Europe, expertise in tourism and renewable energy, and deep understanding of relationship-based Southern European business culture essential for success in Spain and LATAM.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>What industries do Spanish B2B marketing agencies specialize in?</h3><p className="text-2xl text-white/80 leading-[1.8]">Spanish agencies excel in tourism technology, renewable energy, retail technology (Inditex/Zara ecosystem), financial services, and professional services. Barcelona has emerged as Southern Europe's startup capital with particular strength in travel and lifestyle technology.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>How long does it take to see results from B2B marketing in Spain?</h3><p className="text-2xl text-white/80 leading-[1.8]">Expect 6-12 months to see meaningful pipeline impact. Spanish buyers prioritize relationships over transactions, requiring longer cultivation periods than Northern European markets. Regional variations between Catalonia, Madrid, and other areas may affect your approach and timeline.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-10">Explore Related B2B Marketing Markets</h2>
          <p className="text-2xl text-white/80 mb-12 max-w-4xl">Expanding beyond Spain? Explore B2B marketing agencies in key European and LATAM markets.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/best-b2b-marketing-agency-france-top-b2b-marketing-agencies-france" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">France</h3><p className="text-white/60">Key European neighbor and trading partner</p></Link>
            <Link href="/best-b2b-marketing-agency-italy-top-b2b-marketing-agencies-italy" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">Italy</h3><p className="text-white/60">Southern European partner with similar culture</p></Link>
            <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">Germany</h3><p className="text-white/60">Europe's largest economy</p></Link>
            <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">United Kingdom</h3><p className="text-white/60">Major European market</p></Link>
            <Link href="/best-b2b-marketing-agency-portugal-top-b2b-marketing-agencies-portugal" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">Portugal</h3><p className="text-white/60">Iberian neighbor with Brazilian connections</p></Link>
            <Link href="/best-b2b-marketing-agency-mexico-top-b2b-marketing-agencies-mexico" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">Mexico</h3><p className="text-white/60">Largest Spanish-speaking market</p></Link>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your B2B Marketing Strategy for Spain</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive B2B marketing strategy for Spanish and Latin American markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  );
}
