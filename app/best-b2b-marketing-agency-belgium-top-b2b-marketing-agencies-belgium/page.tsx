import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Belgium 2025 | GTM Quest',
  description: 'Find the best B2B marketing agency Belgium has for your business. Compare top B2B marketing agencies in Belgium for Brussels, EU institutions, and Benelux markets.',
  keywords: 'best B2B marketing agency Belgium, top B2B marketing agencies Brussels, B2B marketing Belgium, EU B2B marketing, Benelux B2B',
  alternates: { canonical: 'https://gtm.quest/best-b2b-marketing-agency-belgium-top-b2b-marketing-agencies-belgium' }
};

export const revalidate = 3600;

export default async function B2BMarketingAgencyBelgiumPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Belgium');
  const totalAgencies = agencies.length;
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000;

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the typical cost of a B2B marketing agency in Belgium?", "acceptedAnswer": { "@type": "Answer", "text": "B2B marketing agencies in Belgium typically charge €6,000-€25,000 per month for retainer engagements. Brussels agencies command premium pricing for EU institutional expertise." } },
      { "@type": "Question", "name": "Why choose a Belgian B2B marketing agency?", "acceptedAnswer": { "@type": "Answer", "text": "Belgian agencies offer unparalleled EU institutional access, trilingual capabilities (Dutch, French, English), expertise in public affairs and regulatory marketing, and strategic position at Europe's crossroads." } },
      { "@type": "Question", "name": "What industries do Belgian B2B marketing agencies specialize in?", "acceptedAnswer": { "@type": "Answer", "text": "Belgian agencies excel in EU policy communications, pharmaceutical and life sciences, logistics and supply chain, and professional services. Brussels hosts EU Commission, NATO, and 1,500+ international associations." } },
      { "@type": "Question", "name": "How long does it take to see results from B2B marketing in Belgium?", "acceptedAnswer": { "@type": "Answer", "text": "Expect 4-8 months to see meaningful pipeline impact. EU institutional sales may take 12-24 months given complex procurement processes. Commercial B2B moves faster in Flanders than Wallonia." } }
    ]
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CollectionPage", "name": "Best B2B Marketing Agency Belgium 2025", "url": "https://gtm.quest/best-b2b-marketing-agency-belgium-top-b2b-marketing-agencies-belgium" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="border-b border-white/10 py-6"><div className="max-w-7xl mx-auto px-6"><nav className="text-white/60 text-sm"><Link href="/" className="hover:text-white">Home</Link> / <Link href="/best-gtm-agencies" className="hover:text-white">Agencies</Link> / <span className="text-white">B2B Marketing Agency Belgium</span></nav></div></div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40"><img src="https://images.unsplash.com/photo-1559564484-e48bf598d128?w=1920&q=80" alt="Best B2B marketing agency Belgium - Brussels Grand Place" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Belgium</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>Best B2B Marketing Agency Belgium 2025</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">Discover the top {totalAgencies} B2B marketing agencies Belgium has to offer. Find the right B2B marketing agency Belgium businesses trust for EU and Benelux growth.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">€{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">EU</div><div className="text-white/70 text-lg">Capital</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose a B2B Marketing Agency Belgium for Your Business?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>Belgium operates as <a href="https://en.wikipedia.org/wiki/Economy_of_Belgium" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">the de facto capital of the European Union</a>, hosting the European Commission, European Parliament, and NATO alongside 1,500+ international trade associations. According to <a href="https://statbel.fgov.be/en" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Statbel (Belgian Statistics)</a>, services comprise 78% of GDP with Brussels ranking as world's #1 city for international associations. Belgian B2B marketing agencies possess unparalleled expertise in EU institutional marketing, regulatory affairs communications, and multilingual campaign execution.</p>
            <p>With three official languages (Dutch, French, German) plus English as business lingua franca, Belgian agencies navigate Europe's most complex linguistic landscape. The <a href="https://www.belgium.be/en" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Belgian government</a> reports €50 billion annually in pharmaceutical exports, making Belgium Europe's largest per-capita pharma exporter. Belgian agencies understand that Flemish and Walloon markets require distinct approaches—Flemish pragmatism versus Francophone relationality—while Brussels operates as cosmopolitan European hub where English-language B2B marketing often suffices.</p>
            <p>Belgian agencies particularly excel in EU policy and public affairs marketing, pharmaceutical and life sciences B2B, logistics technology (Port of Antwerp is Europe's second-largest), and professional services targeting multinational EU headquarters. They leverage <a href="https://www.flanderstoday.eu/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Belgium's Benelux position</a> and understand how to position technology vendors for EU institutional procurement, navigate complex multi-stakeholder European campaigns, and create content that works across Belgium's unique cultural mosaic.</p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">What Services Do B2B Marketing Agencies Belgium Offer?</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">Demand Generation & Lead Generation</h3><p className="text-xl text-white/80 leading-relaxed">Belgian agencies build demand generation systems for multilingual European markets. This includes <a href="https://www.hubspot.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot</a> or Salesforce implementation, trilingual campaign capabilities, and GDPR-compliant data strategies essential for EU markets.</p></div>
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">EU Institutional Marketing</h3><p className="text-xl text-white/80 leading-relaxed">For EU institutional targeting, Belgian agencies specialize in public affairs positioning, regulatory communications, and procurement-ready marketing. They understand EU tender processes, framework agreements, and the unique dynamics of marketing to European institutions.</p></div>
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">Content Marketing & Localization</h3><p className="text-xl text-white/80 leading-relaxed">Belgian B2B content requires sophisticated localization across Dutch, French, and English. Agencies produce content adapted for Flemish and Walloon markets while maintaining consistency for pan-European campaigns.</p></div>
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">Benelux & European Expansion</h3><p className="text-xl text-white/80 leading-relaxed">Belgian agencies help companies expand across Benelux and Europe from Brussels base. They understand market dynamics in <Link href="/best-b2b-marketing-agency-netherlands-top-b2b-marketing-agencies-netherlands" className="text-blue-400 hover:text-blue-300 underline">Netherlands</Link>, Luxembourg, and broader European markets.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Key Industries for B2B Marketing in Belgium</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p><strong className="text-white">EU Institutions & Public Affairs:</strong> Brussels hosts European Commission, Parliament, and 1,500+ international associations. According to <a href="https://corporateeurope.org/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">European transparency data</a>, €3 billion+ is spent annually on EU public affairs. Agencies specialize in positioning technology for EU institutional procurement and regulatory influence.</p>
            <p><strong className="text-white">Pharmaceutical & Life Sciences:</strong> Belgium is Europe's largest pharmaceutical exporter per capita with companies like UCB, Janssen, and GSK vaccines. Agencies understand EMA regulatory marketing, clinical trial communications, and positioning for European pharmaceutical markets.</p>
            <p><strong className="text-white">Logistics & Supply Chain:</strong> Port of Antwerp is Europe's second-largest container port. According to <a href="https://www.portofantwerp.com/en" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Port of Antwerp-Bruges</a>, €200 billion in goods flow through annually. Agencies specialize in logistics technology marketing.</p>
            <p><strong className="text-white">Professional Services:</strong> Brussels hosts European headquarters for global consulting, legal, and accounting firms. Agencies help technology vendors reach professional services buyers serving EU institutional clients.</p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">How to Choose the Right B2B Marketing Agency Belgium</h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Multilingual Capabilities</h3><p>Belgium's linguistic complexity requires agencies with genuine trilingual capabilities. Evaluate Dutch, French, and English content quality—not translations but culturally adapted messaging. The best agencies have native speakers for each language community.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>EU Institutional Experience</h3><p>If targeting EU institutions, evaluate agencies on their understanding of EU procurement, public affairs, and regulatory marketing. Look for experience with EU tender responses, framework agreements, and institutional communications.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Regional Market Understanding</h3><p>Flemish and Walloon markets operate differently. Evaluate agencies on their understanding of regional dynamics—Flemish business culture resembles Dutch pragmatism while Walloon approaches align with French relationship orientation.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16"><h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Top B2B Marketing Agency Belgium Directory</h2><p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified B2B marketing agencies serving Belgian and EU businesses.</p></div>
        <div className="w-full">{agencies.map((agency, i) => (<AgencyCard key={agency.slug} rank={i + 1} name={agency.name} tagline={(agency as any).b2b_description || agency.description} description={[(agency as any).b2b_description || agency.description]} bestFor={agency.specializations || []} keyServices={(agency as any).key_services || agency.specializations || []} website={agency.website || '#'} primaryColor={(agency as any).primary_color || '#8B5CF6'} logoUrl={(agency as any).logo_url} backdropUrl={(agency as any).backdrop_url} isTopRanked={!!(agency.global_rank && agency.global_rank <= 3)} internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined} serviceAreas={agency.service_areas || []} />))}</div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-16">B2B Marketing Agency Belgium FAQs</h2>
          <div className="space-y-12 max-w-6xl">
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>What is the typical cost of a B2B marketing agency in Belgium?</h3><p className="text-2xl text-white/80 leading-[1.8]">B2B marketing agencies in Belgium typically charge €6,000-€25,000 per month for retainer engagements. Brussels agencies command premium pricing for EU institutional expertise. This positions Belgian agencies similarly to <Link href="/best-b2b-marketing-agency-netherlands-top-b2b-marketing-agencies-netherlands" className="text-blue-400 hover:text-blue-300 underline">Dutch agencies</Link>.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Why choose a Belgian B2B marketing agency?</h3><p className="text-2xl text-white/80 leading-[1.8]">Belgian agencies offer unparalleled EU institutional access, trilingual capabilities, expertise in public affairs and regulatory marketing, and strategic position at Europe's crossroads. Essential for vendors targeting EU institutional or pan-European markets.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>What industries do Belgian B2B marketing agencies specialize in?</h3><p className="text-2xl text-white/80 leading-[1.8]">Belgian agencies excel in EU policy communications, pharmaceutical and life sciences, logistics and supply chain, and professional services. Brussels hosts EU Commission, NATO, and 1,500+ international associations.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>How long does it take to see results from B2B marketing in Belgium?</h3><p className="text-2xl text-white/80 leading-[1.8]">Expect 4-8 months to see meaningful pipeline impact for commercial B2B. EU institutional sales may take 12-24 months given complex procurement processes. Commercial B2B typically moves faster in Flanders than Wallonia.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-10">Explore Related B2B Marketing Markets</h2>
          <p className="text-2xl text-white/80 mb-12 max-w-4xl">Expanding beyond Belgium? Explore B2B marketing agencies in key Benelux and European markets.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/best-b2b-marketing-agency-netherlands-top-b2b-marketing-agencies-netherlands" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">Netherlands</h3><p className="text-white/60">Benelux partner and European logistics hub</p></Link>
            <Link href="/best-b2b-marketing-agency-france-top-b2b-marketing-agencies-france" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">France</h3><p className="text-white/60">Francophone partner market</p></Link>
            <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">Germany</h3><p className="text-white/60">Europe's largest economy</p></Link>
            <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">United Kingdom</h3><p className="text-white/60">Major European market</p></Link>
            <Link href="/best-b2b-marketing-agency-ireland-top-b2b-marketing-agencies-ireland" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">Ireland</h3><p className="text-white/60">EU English-speaking tech hub</p></Link>
            <Link href="/best-b2b-marketing-agency-sweden-top-b2b-marketing-agencies-sweden" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">Sweden</h3><p className="text-white/60">Nordic innovation leader</p></Link>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your B2B Marketing Strategy for Belgium</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive B2B marketing strategy for Belgian and EU markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  );
}
