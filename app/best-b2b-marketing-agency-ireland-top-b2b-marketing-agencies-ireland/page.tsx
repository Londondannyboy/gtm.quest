import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency Ireland 2025 | GTM Quest',
  description: 'Find the best B2B marketing agency Ireland has for your business. Compare top B2B marketing agencies in Ireland for Dublin and European markets.',
  keywords: 'best B2B marketing agency Ireland, top B2B marketing agencies Dublin, B2B digital marketing Ireland, demand generation Dublin, B2B marketing Ireland',
  alternates: { canonical: 'https://gtm.quest/best-b2b-marketing-agency-ireland-top-b2b-marketing-agencies-ireland' }
};

export const revalidate = 3600;

export default async function B2BMarketingAgencyIrelandPage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'Ireland');
  const totalAgencies = agencies.length;
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000;

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the typical cost of a B2B marketing agency in Ireland?", "acceptedAnswer": { "@type": "Answer", "text": "B2B marketing agencies in Ireland typically charge €8,000-€30,000 per month for retainer engagements. Project-based work ranges from €20,000-€80,000. Dublin agencies command premium pricing for enterprise technology expertise." } },
      { "@type": "Question", "name": "Why choose an Irish B2B marketing agency?", "acceptedAnswer": { "@type": "Answer", "text": "Irish agencies offer the only English-speaking EU jurisdiction post-Brexit, deep technology company expertise serving 1,700+ multinational EMEA headquarters, and understanding of both American and European business cultures." } },
      { "@type": "Question", "name": "What industries do Irish B2B marketing agencies specialize in?", "acceptedAnswer": { "@type": "Answer", "text": "Irish agencies excel in enterprise technology, pharmaceutical and life sciences, financial services and fintech, and professional services. Dublin hosts EMEA headquarters for all major US tech giants." } },
      { "@type": "Question", "name": "How long does it take to see results from B2B marketing in Ireland?", "acceptedAnswer": { "@type": "Answer", "text": "Expect 3-6 months to see meaningful pipeline impact. Irish buyers blend American sales velocity with European due diligence. Enterprise deals targeting multinational EMEA operations take 6-12 months." } }
    ]
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CollectionPage", "name": "Best B2B Marketing Agency Ireland 2025", "url": "https://gtm.quest/best-b2b-marketing-agency-ireland-top-b2b-marketing-agencies-ireland" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="border-b border-white/10 py-6"><div className="max-w-7xl mx-auto px-6"><nav className="text-white/60 text-sm"><Link href="/" className="hover:text-white">Home</Link> / <Link href="/best-gtm-agencies" className="hover:text-white">Agencies</Link> / <span className="text-white">B2B Marketing Agency Ireland</span></nav></div></div>

      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40"><img src="https://images.unsplash.com/photo-1549918864-48ac978761a4?w=1920&q=80" alt="Best B2B marketing agency Ireland - Dublin" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">Ireland</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>Best B2B Marketing Agency Ireland 2025</h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">Discover the top {totalAgencies} B2B marketing agencies Ireland has to offer. Find the right B2B marketing agency Ireland businesses trust for EMEA growth.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div><div className="text-6xl font-black text-white mb-3">{totalAgencies}</div><div className="text-white/70 text-lg">Top Agencies</div></div>
            <div><div className="text-6xl font-black text-white mb-3">€{Math.round(avgMinBudget / 1000)}K+</div><div className="text-white/70 text-lg">Avg Budget</div></div>
            <div><div className="text-6xl font-black text-white mb-3">100%</div><div className="text-white/70 text-lg">Verified</div></div>
            <div><div className="text-6xl font-black text-white mb-3">EMEA</div><div className="text-white/70 text-lg">Hub</div></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Why Choose a B2B Marketing Agency Ireland for Your Business?</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>Ireland operates as <a href="https://en.wikipedia.org/wiki/Economy_of_the_Republic_of_Ireland" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">one of Europe's fastest-growing economies</a> and has established Dublin as the undisputed EMEA headquarters capital. According to <a href="https://www.idaireland.com/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">IDA Ireland</a>, over 1,700 multinational corporations maintain EMEA headquarters here, including all major US technology giants (Google, Apple, Meta, Microsoft, Amazon, LinkedIn) alongside pharmaceutical leaders Pfizer, Johnson & Johnson, and Abbott. Ireland's 12.5% corporate tax rate, English-speaking workforce, and positioning as the only English-language EU jurisdiction post-Brexit creates unmatched advantages for B2B technology companies.</p>
            <p>Irish B2B marketing agencies serve a concentrated, sophisticated market where €500 million+ technology companies operate European divisions employing 5,000-20,000 people. According to <a href="https://www.cso.ie/en/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Central Statistics Office Ireland</a>, the ICT services sector has grown 180% over the past decade. <a href="https://enterprise.gov.ie/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Enterprise Ireland</a> reports technology exports reached €140 billion in 2023. Irish buyers blend American commercial pragmatism with European regulatory compliance requirements—a delicate balance that foreign vendors frequently misjudge.</p>
            <p>Irish agencies particularly excel in enterprise technology marketing for multinational EMEA operations, pharmaceutical B2B positioning (Ireland's life sciences sector generates €99 billion annually according to <a href="https://data.worldbank.org/country/ireland" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">World Bank data</a>), financial services technology serving Dublin's IFSC financial district, and professional services firms. They leverage Ireland's position as the testing ground where US companies validate European market strategies before broader continental expansion.</p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">What Services Do B2B Marketing Agencies Ireland Offer?</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">Demand Generation & Lead Generation</h3><p className="text-xl text-white/80 leading-relaxed">Irish agencies build demand generation systems serving both domestic enterprises and multinational EMEA operations. This includes <a href="https://www.hubspot.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot</a> or Salesforce implementation, sophisticated lead scoring, and attribution models measuring cross-border European pipeline.</p></div>
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">Account-Based Marketing (ABM)</h3><p className="text-xl text-white/80 leading-relaxed">For enterprise targeting, Irish agencies implement ABM using <a href="https://www.demandbase.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Demandbase</a> or 6sense. They understand how to target the concentration of multinational EMEA headquarters in Dublin's docklands and Silicon Docks technology district.</p></div>
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">Content Marketing & Thought Leadership</h3><p className="text-xl text-white/80 leading-relaxed">Creating content for multinational enterprises requires understanding both American expectations and European compliance requirements. Irish agencies produce thought leadership that works across North American and European audiences with native English fluency.</p></div>
            <div><h3 className="text-3xl font-black text-blue-400 mb-4">EU Market Entry from Ireland</h3><p className="text-xl text-white/80 leading-relaxed">Irish agencies help companies expand across Europe from Ireland base. They understand regulatory requirements, cultural differences, and positioning strategies for markets including <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="text-blue-400 hover:text-blue-300 underline">Germany</Link>, <Link href="/best-b2b-marketing-agency-france-top-b2b-marketing-agencies-france" className="text-blue-400 hover:text-blue-300 underline">France</Link>, and Benelux.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">Key Industries for B2B Marketing in Ireland</h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p><strong className="text-white">Enterprise Technology:</strong> Ireland hosts EMEA headquarters for Google, Meta, Microsoft, Amazon, Salesforce, LinkedIn, and hundreds more. According to <a href="https://www.techireland.org/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Tech Ireland</a>, the sector employs 110,000+ professionals. B2B agencies specialize in marketing to these sophisticated buyers and their European operations teams.</p>
            <p><strong className="text-white">Pharmaceutical & Life Sciences:</strong> Ireland is a global pharma hub with 9 of the world's top 10 pharmaceutical companies maintaining manufacturing and commercial operations. The <a href="https://www.ibec.ie/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Irish Business and Employers Confederation</a> reports life sciences generating €99 billion annually in exports.</p>
            <p><strong className="text-white">Financial Services & Fintech:</strong> Dublin's IFSC hosts 500+ international financial institutions. Post-Brexit, Dublin has attracted significant fintech investment as companies seek EU market access with English-speaking operations.</p>
            <p><strong className="text-white">Professional Services:</strong> Ireland hosts major operations from global professional services firms serving the concentration of multinational headquarters. Agencies help technology vendors reach consulting, legal, and accounting buyers.</p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">How to Choose the Right B2B Marketing Agency Ireland</h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Multinational Enterprise Experience</h3><p>Ireland's unique market includes both domestic SMEs and massive multinational divisions with European-wide mandates. Look for agencies with proven experience serving Fortune 500 EMEA operations and understanding the distinct requirements of multinational enterprise marketing.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Transatlantic Capabilities</h3><p>The best Irish agencies understand both American and European business cultures, helping companies bridge the gap between US headquarters expectations and European market requirements. Evaluate timezone flexibility and experience coordinating with US-based marketing teams.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Technology & Compliance Expertise</h3><p>Irish agencies navigate both sophisticated martech implementations and strict EU regulatory requirements including GDPR. Evaluate expertise with enterprise-grade marketing technology and understanding of compliance requirements for regulated industries.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16"><h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Top B2B Marketing Agency Ireland Directory</h2><p className="text-2xl text-white/80 leading-[1.8]">{totalAgencies} verified B2B marketing agencies serving Irish and European businesses.</p></div>
        <div className="w-full">{agencies.map((agency, i) => (<AgencyCard key={agency.slug} rank={i + 1} name={agency.name} tagline={(agency as any).b2b_description || agency.description} description={[(agency as any).b2b_description || agency.description]} bestFor={agency.specializations || []} keyServices={(agency as any).key_services || agency.specializations || []} website={agency.website || '#'} primaryColor={(agency as any).primary_color || '#8B5CF6'} logoUrl={(agency as any).logo_url} backdropUrl={(agency as any).backdrop_url} isTopRanked={!!(agency.global_rank && agency.global_rank <= 3)} internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined} serviceAreas={agency.service_areas || []} />))}</div>
      </section>

      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-16">B2B Marketing Agency Ireland FAQs</h2>
          <div className="space-y-12 max-w-6xl">
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>What is the typical cost of a B2B marketing agency in Ireland?</h3><p className="text-2xl text-white/80 leading-[1.8]">B2B marketing agencies in Ireland typically charge €8,000-€30,000 per month for retainer engagements. Dublin agencies serving multinational enterprises command premium pricing. Project-based work ranges from €20,000-€80,000. This positions Irish agencies similarly to <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="text-blue-400 hover:text-blue-300 underline">UK agencies</Link>.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Why choose an Irish B2B marketing agency?</h3><p className="text-2xl text-white/80 leading-[1.8]">Irish agencies offer the only English-speaking EU jurisdiction post-Brexit, deep technology company expertise serving 1,700+ multinational EMEA headquarters, and unique understanding of both American and European business cultures essential for transatlantic marketing.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>What industries do Irish B2B marketing agencies specialize in?</h3><p className="text-2xl text-white/80 leading-[1.8]">Irish agencies excel in enterprise technology, pharmaceutical and life sciences, financial services and fintech, and professional services. Their particular strength lies in serving multinational EMEA operations headquartered in Dublin.</p></div>
            <div><h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>How long does it take to see results from B2B marketing in Ireland?</h3><p className="text-2xl text-white/80 leading-[1.8]">Expect 3-6 months to see meaningful pipeline impact. Irish buyers blend American sales velocity with European due diligence. Enterprise deals targeting multinational EMEA operations may take 6-12 months to close.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-10">Explore Related B2B Marketing Markets</h2>
          <p className="text-2xl text-white/80 mb-12 max-w-4xl">Expanding beyond Ireland? Explore B2B marketing agencies in key markets.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">United Kingdom</h3><p className="text-white/60">Major trading partner and shared business culture</p></Link>
            <Link href="/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">United States</h3><p className="text-white/60">Headquarters market for multinational EMEA operations</p></Link>
            <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">Germany</h3><p className="text-white/60">Europe's largest economy</p></Link>
            <Link href="/best-b2b-marketing-agency-netherlands-top-b2b-marketing-agencies-netherlands" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">Netherlands</h3><p className="text-white/60">Fellow EU English-speaking tech hub</p></Link>
            <Link href="/best-b2b-marketing-agency-france-top-b2b-marketing-agencies-france" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">France</h3><p className="text-white/60">Major European enterprise market</p></Link>
            <Link href="/best-b2b-marketing-agency-sweden-top-b2b-marketing-agencies-sweden" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors"><h3 className="text-2xl font-black text-white mb-2">Sweden</h3><p className="text-white/60">Nordic tech hub with strong English proficiency</p></Link>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Build Your B2B Marketing Strategy for Ireland</h2>
          <p className="text-2xl text-white/95 mb-12">Create a comprehensive B2B marketing strategy for Irish and EMEA markets.</p>
          <Link href="/planner" className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl">Start Free →</Link>
        </div>
      </section>
    </div>
  );
}
