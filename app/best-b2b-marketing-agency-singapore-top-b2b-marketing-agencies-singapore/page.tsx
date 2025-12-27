import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Singapore 2025 | GTM Quest',
  description: 'Find the best B2B marketing agency Singapore has for your business. Compare top B2B marketing agencies in Singapore for APAC and Southeast Asian markets.',
  keywords: 'best B2B marketing agency Singapore, top B2B marketing agencies Singapore, B2B marketing Singapore, APAC B2B marketing, Southeast Asia demand generation',
  alternates: { canonical: 'https://gtm.quest/best-b2b-marketing-agency-singapore-top-b2b-marketing-agencies-singapore' }
};

export const revalidate = 3600;

export default async function B2BMarketingAgencySingaporePage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Singapore');
  const totalAgencies = agencies.length;
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000;

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the typical cost of a B2B marketing agency in Singapore?", "acceptedAnswer": { "@type": "Answer", "text": "B2B marketing agencies in Singapore typically charge S$10,000-S$40,000 per month for retainer engagements. Premium agencies serving multinational APAC operations may require S$50,000+ monthly minimums." } },
      { "@type": "Question", "name": "Why choose a Singaporean B2B marketing agency?", "acceptedAnswer": { "@type": "Answer", "text": "Singaporean agencies offer APAC's most strategic location, English as business language, understanding of diverse Asian markets, world-class infrastructure, and position as the trusted bridge between Western vendors and Asian enterprise buyers." } },
      { "@type": "Question", "name": "What industries do Singapore B2B marketing agencies specialize in?", "acceptedAnswer": { "@type": "Answer", "text": "Singapore agencies excel in fintech and financial services, enterprise technology, logistics and supply chain, professional services, and healthcare technology. Singapore is APAC's leading fintech hub ranked #2 globally." } },
      { "@type": "Question", "name": "How long does it take to see results from B2B marketing in Singapore?", "acceptedAnswer": { "@type": "Answer", "text": "Expect 4-9 months to see meaningful pipeline impact. APAC enterprise buyers from different countries have vastly different buying patterns—Japanese require years of relationship building while Australian buyers move with Western velocity." } }
    ]
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CollectionPage", "name": "Best B2B Marketing Agency Singapore 2025", "url": "https://gtm.quest/best-b2b-marketing-agency-singapore-top-b2b-marketing-agencies-singapore" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="border-b border-white/10 py-6"><div className="max-w-7xl mx-auto px-6"><nav className="text-white/60 text-sm"><Link href="/" className="hover:text-white">Home</Link> / <Link href="/best-gtm-agencies" className="hover:text-white">Agencies</Link> / <span className="text-white">B2B Marketing Agency Singapore</span></nav></div></div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40"><img src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&q=80" alt="Best B2B marketing agency Singapore - Marina Bay Sands" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Singapore</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>Best B2B Marketing Agency Singapore 2025</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">Discover the top {totalAgencies} B2B marketing agencies Singapore has to offer. Find the right B2B marketing agency Singapore businesses trust for APAC growth.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">S${Math.round(avgMinBudget * 1.35 / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">APAC</div><div className="text-white/70 text-lg">Hub</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose a B2B Marketing Agency Singapore for Your Business?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>Singapore operates as <a href="https://en.wikipedia.org/wiki/Economy_of_Singapore" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Asia-Pacific's most competitive economy</a> and the undisputed gateway for Western B2B technology companies entering Asian markets. According to the <a href="https://www.edb.gov.sg/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Economic Development Board (EDB)</a>, over 7,000 multinational regional headquarters are concentrated in this 728 square kilometer city-state offering political stability, rule of law, and zero corruption. Singapore's strategic position at the crossroads of major Asian markets—3.5 hours from Tokyo, Beijing, and Sydney—combined with English as the business language makes it the essential APAC hub where every major B2B enterprise maintains Asian operations.</p>
            <p>Singaporean B2B marketing agencies navigate Asia-Pacific's most complex regional dynamics, serving enterprise buyers across vastly different markets: Japanese buyers requiring years of relationship cultivation, Chinese enterprises favoring local vendors, Indian companies seeking cost-effective solutions, and Australian firms applying Western due diligence. According to <a href="https://www.singstat.gov.sg/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Singapore Department of Statistics</a>, professional services and technology sectors generate 35% of GDP. The <a href="https://www.mas.gov.sg/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Monetary Authority of Singapore</a> positions the nation as a leading fintech hub, ranked #2 globally after San Francisco.</p>
            <p>Singaporean agencies particularly excel in fintech marketing for Asia-Pacific expansion, enterprise technology positioning across culturally diverse APAC markets, logistics technology serving <a href="https://www.mpa.gov.sg/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Singapore's world-class port infrastructure</a> (world's second-busiest container port), and professional services firms targeting multinational corporations. They leverage <a href="https://www.imda.gov.sg/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">IMDA government innovation programs</a> and Singapore's position as the trusted neutral ground where Western and Asian business cultures intersect.</p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">What Services Do B2B Marketing Agencies Singapore Offer?</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">Demand Generation & Lead Generation</h3><p className="text-xl text-white/80 leading-relaxed">Singapore agencies build demand generation systems for pan-APAC markets. This includes <a href="https://www.hubspot.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot</a> or Salesforce implementation, multilingual campaign capabilities, and attribution models measuring pipeline across diverse Asian markets with different buying patterns.</p></div>
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">Account-Based Marketing (ABM)</h3><p className="text-xl text-white/80 leading-relaxed">For enterprise targeting, Singapore agencies implement ABM using <a href="https://www.demandbase.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Demandbase</a> or 6sense. They understand how to target the concentration of multinational APAC headquarters in Singapore's CBD and coordinate campaigns across regional offices in Hong Kong, Tokyo, Sydney, and Mumbai.</p></div>
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">Content Marketing & Localization</h3><p className="text-xl text-white/80 leading-relaxed">APAC B2B marketing requires sophisticated localization beyond translation. Singapore agencies produce content adapted for Japanese, Chinese, Korean, and Southeast Asian markets, understanding cultural nuances that determine B2B marketing success across the region.</p></div>
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">APAC Market Expansion</h3><p className="text-xl text-white/80 leading-relaxed">Singapore agencies help companies expand across Asia-Pacific from Singapore base. They understand market entry strategies for <Link href="/best-b2b-marketing-agency-australia-top-b2b-marketing-agencies-australia" className="text-blue-400 hover:text-blue-300 underline">Australia</Link>, Japan, Greater China, India, and Southeast Asia with culturally appropriate positioning for each market.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Key Industries for B2B Marketing in Singapore</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p><strong className="text-white">Fintech & Financial Services:</strong> Singapore is APAC's fintech capital, ranked #2 globally. According to the <a href="https://www.mas.gov.sg/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Monetary Authority of Singapore</a>, the sector attracted S$1.5 billion in investment in 2023 alone. B2B agencies specialize in positioning fintech for expansion across Asia's diverse regulatory environments.</p>
            <p><strong className="text-white">Enterprise Technology:</strong> Singapore hosts APAC headquarters for Salesforce, Google Cloud, AWS, Microsoft, SAP, and hundreds of enterprise technology companies. According to <a href="https://www.tech.gov.sg/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">GovTech Singapore</a>, the Smart Nation initiative drives massive public sector technology procurement.</p>
            <p><strong className="text-white">Logistics & Supply Chain:</strong> Singapore's port is the world's second-busiest for container throughput. Agencies specialize in marketing supply chain technology, trade facilitation platforms, and logistics automation to the concentration of shipping, freight, and logistics companies headquartered here.</p>
            <p><strong className="text-white">Professional Services:</strong> Singapore hosts major APAC operations from global consulting, legal, and accounting firms. Agencies help technology vendors reach sophisticated professional services buyers across regional offices.</p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">How to Choose the Right B2B Marketing Agency Singapore</h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Pan-APAC Regional Expertise</h3><p>Singapore agencies must understand vastly different Asian markets. Evaluate experience in your target countries—Japanese market entry requires different approaches than Australia or India. The best agencies coordinate campaigns across multiple Asian markets from Singapore hub.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Cultural Intelligence</h3><p>APAC business cultures vary enormously. Look for agencies demonstrating deep understanding of relationship-based selling in North Asia, hierarchical decision-making in Southeast Asia, and Western-style procurement in Australia. Cultural missteps in APAC can permanently damage market entry efforts.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Multilingual & Localization Capabilities</h3><p>Effective APAC B2B marketing requires more than translation. Evaluate agencies on their localization depth—do they understand Japanese honorifics, Chinese business naming conventions, and the cultural adaptation needed for B2B content across diverse Asian markets?</p></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16"><h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Top B2B Marketing Agency Singapore Directory</h2><p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified B2B marketing agencies serving Singapore and APAC businesses.</p></div>
        <div className="w-full">{agencies.map((agency, i) => (<AgencyCard key={agency.slug} rank={i + 1} name={agency.name} tagline={(agency as any).b2b_description || agency.description} description={[(agency as any).b2b_description || agency.description]} bestFor={agency.specializations || []} keyServices={(agency as any).key_services || agency.specializations || []} website={agency.website || '#'} primaryColor={(agency as any).primary_color || '#8B5CF6'} logoUrl={(agency as any).logo_url} backdropUrl={(agency as any).backdrop_url} isTopRanked={!!(agency.global_rank && agency.global_rank <= 3)} internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined} serviceAreas={agency.service_areas || []} />))}</div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-16">B2B Marketing Agency Singapore FAQs</h2>
          <div className="space-y-12 max-w-6xl">
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>What is the typical cost of a B2B marketing agency in Singapore?</h3><p className="text-2xl text-white/80 leading-[1.8]">B2B marketing agencies in Singapore typically charge S$10,000-S$40,000 per month for retainer engagements. Premium agencies serving multinational APAC operations may require S$50,000+ monthly. This positions Singapore agencies at premium levels reflecting the strategic value of APAC regional coverage.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Why choose a Singaporean B2B marketing agency?</h3><p className="text-2xl text-white/80 leading-[1.8]">Singaporean agencies offer APAC's most strategic location, English as business language, deep understanding of diverse Asian markets, world-class infrastructure, and position as the trusted bridge between Western B2B vendors and Asian enterprise buyers seeking neutral ground.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>What industries do Singapore B2B marketing agencies specialize in?</h3><p className="text-2xl text-white/80 leading-[1.8]">Singapore agencies excel in fintech and financial services, enterprise technology, logistics and supply chain, professional services, and healthcare technology. Singapore is APAC's leading fintech hub, ranked #2 globally after San Francisco.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>How long does it take to see results from B2B marketing in Singapore?</h3><p className="text-2xl text-white/80 leading-[1.8]">Expect 4-9 months to see meaningful pipeline impact. APAC enterprise buyers from different countries have vastly different buying patterns—Japanese buyers require years of relationship building while Australian buyers move with Western velocity. Plan for longer cycles in North Asia.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-10">Explore Related B2B Marketing Markets</h2>
          <p className="text-2xl text-white/80 mb-12 max-w-4xl">Expanding across APAC? Explore B2B marketing agencies in key regional markets.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/best-b2b-marketing-agency-australia-top-b2b-marketing-agencies-australia" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">Australia</h3><p className="text-white/60">Key APAC market with Western business culture</p></Link>
            <Link href="/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">United States</h3><p className="text-white/60">Global headquarters for multinational APAC operations</p></Link>
            <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">United Kingdom</h3><p className="text-white/60">Strong Singapore-UK business ties</p></Link>
            <Link href="/best-b2b-marketing-agency-uae-top-b2b-marketing-agencies-uae" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">UAE</h3><p className="text-white/60">Middle East hub with Asia connections</p></Link>
            <Link href="/best-b2b-marketing-agency-india-top-b2b-marketing-agencies-india" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">India</h3><p className="text-white/60">Rapidly growing enterprise technology market</p></Link>
            <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">Germany</h3><p className="text-white/60">European industrial technology leader</p></Link>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your B2B Marketing Strategy for Singapore</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive B2B marketing strategy for Singapore and APAC markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  );
}
