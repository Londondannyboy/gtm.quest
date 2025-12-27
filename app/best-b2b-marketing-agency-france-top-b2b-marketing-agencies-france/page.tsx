import { Metadata } from 'next';
import Link from 'next/link';
import { getAgenciesByCategory } from '@/lib/location-agencies';
import { AgencyCard } from '@/components/AgencyCard';

export const metadata: Metadata = {
  title: 'Best B2B Marketing Agency France 2025 | GTM Quest',
  description: 'Find the best B2B marketing agency France has for your business. Compare top B2B marketing agencies in France for Paris, Lyon, and European markets.',
  keywords: 'best B2B marketing agency France, top B2B marketing agencies France, B2B digital marketing Paris, demand generation France, B2B lead generation France, French B2B marketing',
  alternates: {
    canonical: 'https://gtm.quest/best-b2b-marketing-agency-france-top-b2b-marketing-agencies-france'
  }
};

export const revalidate = 3600;

export default async function B2BMarketingAgencyFrancePage() {
  const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'France');
  const totalAgencies = agencies.length;
  const avgMinBudget = agencies.filter(a => a.min_budget).reduce((sum, a) => sum + (a.min_budget || 0), 0) / agencies.filter(a => a.min_budget).length || 10000;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the typical cost of a B2B marketing agency in France?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "B2B marketing agencies in France typically charge €8,000-€25,000 per month for retainer engagements. Project-based work ranges from €20,000-€80,000 depending on scope. Paris agencies command premium pricing for luxury and enterprise expertise."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose a French B2B marketing agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "French agencies offer deep understanding of French business culture, native French content creation, expertise in luxury, aerospace, and pharmaceutical B2B, and access to Francophone markets globally. They understand the intellectual, relationship-driven approach French enterprise buyers expect."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do French B2B marketing agencies specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "French agencies excel in luxury technology marketing, aerospace and defense, pharmaceutical and healthcare, financial services, and industrial B2B. They have particular strength in sectors requiring cultural sophistication and long-term relationship building."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from B2B marketing in France?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expect 6-12 months to see meaningful pipeline impact from demand generation programs in France. French enterprise buyers conduct thorough evaluations, and relationship-building takes longer than in Anglo-Saxon markets. Patience and cultural sophistication are essential."
        }
      }
    ]
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Best B2B Marketing Agency France 2025",
            "description": "Find the best B2B marketing agency France has for your business",
            "url": "https://gtm.quest/best-b2b-marketing-agency-france-top-b2b-marketing-agencies-france"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/60 text-sm">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/best-gtm-agencies" className="hover:text-white">Agencies</Link> / <span className="text-white">B2B Marketing Agency France</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80"
            alt="Best B2B marketing agency France - Paris Eiffel Tower and cityscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-white/70 text-base uppercase tracking-wider font-semibold">France</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontWeight: 900 }}>
            Best B2B Marketing Agency France 2025
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl leading-relaxed font-medium">
            Discover the top {totalAgencies} B2B marketing agencies France has to offer. Find the right B2B marketing agency France enterprises trust for European and Francophone growth.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            <div>
              <div className="text-6xl font-black text-white mb-3">{totalAgencies}</div>
              <div className="text-white/70 text-lg">Top Agencies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">€{Math.round(avgMinBudget / 1000)}K+</div>
              <div className="text-white/70 text-lg">Avg Budget</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">100%</div>
              <div className="text-white/70 text-lg">Verified</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-3">EU</div>
              <div className="text-white/70 text-lg">Gateway</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why France Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Why Choose a B2B Marketing Agency France for Your Business?
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              France operates as <a href="https://en.wikipedia.org/wiki/Economy_of_France" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Europe's third-largest economy</a> with GDP exceeding €2.8 trillion, maintaining unique global influence through luxury brands (LVMH, Hermès, Dior), aerospace leadership (Airbus, Thales, Dassault), and pharmaceutical innovation (Sanofi, BioMérieux). Working with a B2B marketing agency France gives you access to Paris's La Défense business district, Lyon's industrial corridor, and Sophia Antipolis's technology cluster. According to <a href="https://www.insee.fr/en/accueil" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">INSEE (French National Statistics)</a>, services comprise 79% of GDP, with B2B technology and consulting sectors experiencing 12% annual growth as French enterprises pursue digital transformation mandated by EU competitiveness initiatives.
            </p>
            <p>
              French B2B agencies navigate distinctive market dynamics shaped by Dirigisme (state-influenced economic planning), preference for intellectual discourse over aggressive sales tactics, and business culture valuing philosophical depth alongside commercial results. According to <a href="https://www.diplomatie.gouv.fr/en/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">French government business guidelines</a>, international B2B vendors must understand France's unique regulatory environment and business protocols. French enterprise buyers expect vendors to demonstrate cultural sophistication, fluency in French business protocols, and understanding of grande école networks (ENA, HEC, École Polytechnique) whose professional relationships span decades and influence corporate decision-making through channels foreign vendors struggle to access.
            </p>
            <p>
              French agencies particularly excel in luxury technology marketing, aerospace and defense positioning, pharmaceutical and healthcare B2B, financial services (Paris rivals London as European financial center), and industrial B2B for France's strong manufacturing base. They understand <a href="https://data.worldbank.org/country/france" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">French regulatory requirements</a>, EU data protection enforced more strictly in France, and the critical importance of French-language content that meets French business standards rather than translations French executives immediately recognize as culturally tone-deaf. Every B2B marketing agency France features in our list helps companies navigate both French domestic opportunities and Francophone expansion across Africa, Canada, Belgium, and Switzerland.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            What Services Do B2B Marketing Agencies France Offer?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Demand Generation & Lead Generation</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                French agencies build demand generation systems adapted to French buying culture. This includes marketing automation implementation with <a href="https://www.hubspot.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">HubSpot</a>, Salesforce, or Marketo, native French content creation, and longer nurture sequences respecting French evaluation timelines. They understand that French enterprise buyers conduct more thorough research than Anglo-Saxon counterparts before engaging vendors.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Account-Based Marketing (ABM)</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                For CAC 40 and major enterprise targeting, French agencies implement ABM strategies using platforms like <a href="https://www.demandbase.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Demandbase</a> or 6sense. They understand how to target French industrial groups and navigate the relationship networks central to French business culture, combining digital precision with relationship-building approaches valued in French corporate environments.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Content Marketing & Thought Leadership</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Creating content for French executives requires intellectual sophistication beyond simple translation. French agencies produce livres blancs (whitepapers), études de cas (case studies), and thought leadership that demonstrates the depth and rigor French buyers expect. Their content teams understand French business writing conventions and the importance of establishing intellectual credibility before commercial discussions.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-4">Francophone Market Expansion</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                French agencies help companies expand across Francophone markets globally, including Belgium, Switzerland, <Link href="/best-b2b-marketing-agency-canada-top-b2b-marketing-agencies-canada" className="text-blue-400 hover:text-blue-300 underline">Quebec</Link>, and rapidly growing African markets. They understand cultural nuances across French-speaking regions and can position companies effectively for this combined market of over 300 million French speakers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            Key Industries for B2B Marketing in France
          </h2>
          <div className="space-y-8 text-2xl text-white/90 leading-[1.8] font-normal max-w-6xl">
            <p>
              <strong className="text-white">Luxury & Fashion Technology:</strong> France is the global capital of luxury, home to LVMH (world's largest luxury group), Kering, and Hermès. B2B technology serving luxury—retail technology, supply chain, authentication, customer experience—requires agencies who understand this unique sector. The <a href="https://www.comite-colbert.com/en/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">Comité Colbert</a> represents 90 luxury houses, creating substantial B2B opportunities for technology vendors who can demonstrate appreciation for luxury's unique requirements.
            </p>
            <p>
              <strong className="text-white">Aerospace & Defense:</strong> France is Europe's aerospace leader with Airbus, Thales, Dassault Aviation, and Safran headquartered here. B2B agencies specialize in marketing to aerospace procurement, navigating long evaluation cycles (often 2-5 years for major programs), and positioning technology for defense applications requiring security clearances and government relationship management.
            </p>
            <p>
              <strong className="text-white">Pharmaceutical & Healthcare:</strong> France has Europe's second-largest pharmaceutical market with major players including Sanofi, BioMérieux, and Institut Pasteur. Agencies understand ANSM regulatory requirements, hospital purchasing dynamics, and the distinctive French healthcare system combining public and private elements.
            </p>
            <p>
              <strong className="text-white">Financial Services & Fintech:</strong> Paris's La Défense district houses major banks (BNP Paribas, Société Générale, Crédit Agricole) and has emerged as a fintech hub post-Brexit. B2B agencies understand ACPR regulatory requirements, French banking culture, and positioning for a financial services sector increasingly investing in digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            How to Choose the Right B2B Marketing Agency France
          </h2>
          <div className="space-y-10 text-2xl text-white/90 leading-[1.8] max-w-6xl">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>French Language & Cultural Expertise</h3>
              <p>
                The French market demands native-level French content—not translations but content conceived in French that demonstrates cultural fluency. The best agencies employ native French writers who understand business writing conventions, can navigate the formal French business communication style, and create content that resonates with French executives who quickly identify culturally inappropriate messaging.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Industry Experience & Network Access</h3>
              <p>
                France's business culture relies heavily on relationship networks built through grandes écoles and professional associations. Evaluate agencies on their connections within your target industry and their understanding of how French business networks operate. The best agencies can facilitate introductions and navigate the relationship-driven nature of French enterprise purchasing.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>Patience & Long-Term Approach</h3>
              <p>
                French enterprise sales cycles are longer than Anglo-Saxon markets—expect 6-18 months for significant deals. Evaluate agencies on their understanding of French buying processes and their ability to build long-term programs rather than quick-hit campaigns. Success in France requires patience and sustained investment in relationship building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agencies List Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Top B2B Marketing Agency France Directory
          </h2>
          <p className="text-2xl text-white/80 leading-[1.8]">
            {totalAgencies} verified B2B marketing agencies serving French businesses. Find the best B2B marketing agency France companies recommend for demand generation, ABM, and European growth.
          </p>
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
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-16">B2B Marketing Agency France FAQs</h2>
          <div className="space-y-12 max-w-6xl">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                What is the typical cost of a B2B marketing agency in France?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                B2B marketing agencies in France typically charge €8,000-€25,000 (approximately $8,500-$27,000) per month for retainer engagements. Paris agencies command premium pricing, particularly for luxury and aerospace expertise. Project-based work ranges from €20,000-€80,000 depending on scope. This positions French agencies similarly to <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="text-blue-400 hover:text-blue-300 underline">German agencies</Link>.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                Why choose a French B2B marketing agency?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                French agencies offer deep understanding of French business culture, native French content creation, expertise in luxury, aerospace, and pharmaceutical B2B, and access to Francophone markets globally. They understand the intellectual, relationship-driven approach French enterprise buyers expect, essential for success in this culturally distinctive market.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                What industries do French B2B marketing agencies specialize in?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                French agencies excel in luxury technology marketing, aerospace and defense, pharmaceutical and healthcare, financial services and fintech, and industrial B2B. Their particular strength lies in sectors requiring cultural sophistication, long-term relationship building, and understanding of French regulatory environments.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4" style={{color: '#3B82F6'}}>
                How long does it take to see results from B2B marketing in France?
              </h3>
              <p className="text-2xl text-white/80 leading-[1.8]">
                Expect 6-12 months to see meaningful pipeline impact from demand generation programs in France. French enterprise buyers conduct thorough evaluations, and relationship-building takes longer than in Anglo-Saxon markets. Major enterprise deals may take 12-24 months to close, requiring patience and sustained investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Markets Section */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-10">Explore Related B2B Marketing Markets</h2>
          <p className="text-2xl text-white/80 mb-12 max-w-4xl">
            Expanding beyond France? Explore B2B marketing agencies in key European markets and Francophone regions.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/best-b2b-marketing-agency-germany-top-b2b-marketing-agencies-germany" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Germany</h3>
              <p className="text-white/60">Key European partner and industrial powerhouse</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">United Kingdom</h3>
              <p className="text-white/60">Major trading partner and financial services hub</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-belgium-top-b2b-marketing-agencies-belgium" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Belgium</h3>
              <p className="text-white/60">Francophone neighbor and EU headquarters</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-switzerland-top-b2b-marketing-agencies-switzerland" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Switzerland</h3>
              <p className="text-white/60">French-speaking regions and luxury markets</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-canada-top-b2b-marketing-agencies-canada" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Canada</h3>
              <p className="text-white/60">Quebec's Francophone market with French ties</p>
            </Link>
            <Link href="/best-b2b-marketing-agency-spain-top-b2b-marketing-agencies-spain" className="block p-8 bg-black border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">Spain</h3>
              <p className="text-white/60">Southern European partner market</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white mb-10">B2B Marketing Resources</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <Link href="/b2b-gtm-strategy" className="block p-8 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">B2B GTM Strategy Guide</h3>
              <p className="text-white/60">Learn how to build effective go-to-market strategies for B2B companies</p>
            </Link>
            <Link href="/planner" className="block p-8 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">GTM Strategy Planner</h3>
              <p className="text-white/60">Build your custom go-to-market strategy with our free planning tool</p>
            </Link>
            <Link href="/articles" className="block p-8 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">GTM Articles & Insights</h3>
              <p className="text-white/60">Expert articles on B2B marketing, demand generation, and growth strategies</p>
            </Link>
            <Link href="/about" className="block p-8 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">About GTM Quest</h3>
              <p className="text-white/60">Learn about our mission to help B2B companies grow</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Build Your B2B Marketing Strategy for France
          </h2>
          <p className="text-2xl text-white/95 mb-12">
            Create a comprehensive B2B marketing strategy for French and European markets. Whether you work with a B2B marketing agency France recommends or build in-house capabilities, start with the right strategic foundation.
          </p>
          <Link
            href="/planner"
            className="inline-flex items-center justify-center px-14 py-7 text-2xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all shadow-2xl"
          >
            Start Free →
          </Link>
        </div>
      </section>
    </div>
  );
}
