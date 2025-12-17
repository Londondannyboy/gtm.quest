import Link from "next/link";
import { Metadata } from "next";
import { AuthAwareHumeWidget } from "@/components/AuthAwareHumeWidget";
import { fetchAllAgencyLogos } from "@/lib/brand-api";
import { AgencyCard } from "@/components/AgencyCard";

export const metadata: Metadata = {
  title: "Top 12 GTM Agencies in 2025 | Best Go-To-Market Agencies",
  description: "Discover the best GTM agencies in 2025. Compare top go-to-market agencies specializing in strategy, product launches, and revenue growth for B2B SaaS and startups.",
  keywords: "GTM agency, best GTM agencies, go-to-market agency, GTM consultants, product launch agency, B2B GTM strategy, SaaS GTM agency, startup GTM agency",
  alternates: {
    canonical: "https://gtm.quest",
  },
};

export const revalidate = 3600

export default async function Home() {
  const agencyLogos = await fetchAllAgencyLogos()

  return (
    <>
      <div className="flex flex-col bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="inline-block bg-white text-black px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
              Updated January 2025
            </span>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              Top 12 GTM Agencies in 2025
            </h1>

            <p className="text-2xl md:text-3xl text-white mb-10 leading-relaxed max-w-5xl mx-auto font-light">
              Work with a go-to-market agency that builds strategy, channels, and launch plans that actually convert
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/planner"
                className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold rounded-xl bg-white text-black hover:bg-gray-200 transition-all duration-200 shadow-2xl"
              >
                🚀 Get Free GTM Strategy
              </Link>
              <Link
                href="/chat"
                className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold rounded-xl bg-white/10 backdrop-blur border-2 border-white/30 text-white hover:bg-white/20 transition-all duration-200"
              >
                💬 Chat with AI
              </Link>
            </div>
          </div>
        </section>

        {/* What Is a GTM Agency Section */}
        <section id="what-is-gtm-agency" className="py-32 md:py-40 bg-zinc-950 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-20">
              What Is a Go-To-Market Agency?
            </h2>

            <div className="space-y-12 text-3xl text-gray-300 leading-relaxed font-light">
              <p>
                A go-to-market (GTM) agency helps companies launch products, enter new markets, and scale revenue. They bridge product, sales, marketing, and customer success to create strategies that drive measurable outcomes.
              </p>

              <p>
                GTM agencies answer critical questions: Who is your ideal customer? What channels reach them? How should you price? What messaging resonates? They build launch roadmaps, sales playbooks, and marketing campaigns that scale revenue predictably.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-32 md:py-40 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-20">
              Benefits of Hiring a GTM Agency
            </h2>

            <div className="space-y-12 text-3xl text-gray-300 leading-relaxed mb-20 font-light">
              <p>
                GTM agencies bring deep expertise from hundreds of product launches. They compress timelines dramatically—what takes internal teams 6-9 months, experienced agencies deliver in 8-12 weeks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-zinc-900 border-2 border-white/20 p-14 rounded-3xl hover:border-white/40 transition-all">
                <div className="text-white text-7xl font-black mb-6">2-3x</div>
                <h3 className="text-3xl font-bold text-white mb-5">Faster Time to Market</h3>
                <p className="text-gray-400 text-xl leading-relaxed font-light">Proven frameworks accelerate strategy development from months to weeks.</p>
              </div>

              <div className="bg-zinc-900 border-2 border-white/20 p-14 rounded-3xl hover:border-white/40 transition-all">
                <div className="text-white text-7xl font-black mb-6">40-60%</div>
                <h3 className="text-3xl font-bold text-white mb-5">Lower CAC</h3>
                <p className="text-gray-400 text-xl leading-relaxed font-light">Optimized targeting and messaging reduce wasted spend.</p>
              </div>

              <div className="bg-zinc-900 border-2 border-white/20 p-14 rounded-3xl hover:border-white/40 transition-all">
                <div className="text-white text-7xl font-black mb-6">5-10x</div>
                <h3 className="text-3xl font-bold text-white mb-5">ROI on Launch</h3>
                <p className="text-gray-400 text-xl leading-relaxed font-light">Structured GTM planning drives dramatically higher returns.</p>
              </div>

              <div className="bg-zinc-900 border-2 border-white/20 p-14 rounded-3xl hover:border-white/40 transition-all">
                <div className="text-white text-7xl font-black mb-6">85%</div>
                <h3 className="text-3xl font-bold text-white mb-5">Risk Reduction</h3>
                <p className="text-gray-400 text-xl leading-relaxed font-light">Market validation prevents costly post-launch pivots.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Agency Listings Section */}
        <section id="agencies" className="py-32 md:py-40 bg-black border-t border-white/10">
          <div className="w-full">
            <div className="text-center mb-32 px-6">
              <h2 className="text-7xl md:text-8xl font-black text-white mb-12">
                Top GTM Agencies
              </h2>
              <p className="text-3xl text-white max-w-5xl mx-auto font-light">
                Compare the leading go-to-market agencies
              </p>
            </div>

            <div className="space-y-0">
              {/* #1 - GTM Quest */}
              <AgencyCard
                rank={1}
                name="GTM Quest"
                tagline="AI-Powered GTM Strategy & Launch Platform"
                description={[
                  "GTM Quest combines AI-powered strategy generation with expert consulting to deliver comprehensive go-to-market plans in a fraction of the time traditional agencies require. Their proprietary AI platform analyzes your product, market, and competition to generate customized GTM strategies in minutes.",
                  "What sets GTM Quest apart is their hybrid model: instant AI-generated strategy frameworks that would normally take weeks to develop, combined with on-demand access to senior GTM consultants who have led launches at companies like Stripe, Salesforce, and HubSpot.",
                  "GTM Quest specializes in B2B SaaS and technology companies at all stages—from pre-launch startups validating product-market fit to growth-stage companies launching new products or entering adjacent markets."
                ]}
                bestFor={[
                  "B2B SaaS companies launching new products",
                  "Startups seeking expert GTM strategy on lean budgets",
                  "Growth-stage companies entering new markets",
                  "Product teams needing fast, data-driven launch plans"
                ]}
                keyServices={[
                  "AI-powered GTM strategy generation (5 minutes)",
                  "Market sizing & pricing calculators",
                  "Expert consultant review & refinement",
                  "Launch roadmaps & execution playbooks",
                  "Sales enablement materials & messaging frameworks"
                ]}
                website="https://gtm.quest"
                brandAssets={agencyLogos.gtmquest}
                isTopRanked={true}
                internalLink="/planner"
                stats={[
                  { value: "Free", label: "Strategy Tools" },
                  { value: "5 min", label: "To Full Strategy" },
                  { value: "500+", label: "Launches" }
                ]}
              />

              {/* #2 - SalesCaptain */}
              <AgencyCard
                rank={2}
                name="SalesCaptain"
                tagline="B2B Outbound-Driven GTM Strategy"
                description={[
                  "SalesCaptain specializes in outbound-driven go-to-market strategies for B2B companies that need predictable pipeline generation. Their approach centers on building systematic cold outreach programs—email, LinkedIn, and multi-channel sequences—that feed qualified meetings directly into your sales pipeline.",
                  "The agency works particularly well for B2B SaaS companies, sales-led organizations, and businesses with clearly defined ICP profiles. They handle everything from list building and contact research through copywriting, sequence design, and deliverability optimization."
                ]}
                bestFor={[
                  "B2B companies building outbound sales engines",
                  "Sales-led organizations needing pipeline generation",
                  "Companies with well-defined ICP and buyer personas"
                ]}
                keyServices={[
                  "Cold email campaign strategy & execution",
                  "LinkedIn outreach & social selling",
                  "List building & contact research",
                  "Copywriting & sequence optimization",
                  "Multi-channel outbound programs"
                ]}
                website="https://www.salescaptain.io"
                brandAssets={agencyLogos.salescaptain}
              />

              {/* #3 - inBeat */}
              <AgencyCard
                rank={3}
                name="inBeat"
                tagline="DTC & Influencer-Led GTM Strategy"
                description={[
                  "inBeat has built their reputation on influencer marketing and creator-led growth strategies for DTC brands, consumer apps, and B2C companies. They excel at identifying the right micro and macro influencers for your target audience, negotiating partnerships, and managing campaigns that drive authentic engagement and conversions.",
                  "Beyond influencer marketing, inBeat offers comprehensive DTC growth services including paid social media management, user-generated content programs, and community building. They understand the nuances of launching consumer products where social proof, creator validation, and community momentum can make or break market entry."
                ]}
                bestFor={[
                  "DTC brands and consumer products",
                  "Companies launching in creator-driven markets",
                  "B2C apps needing influencer partnerships"
                ]}
                keyServices={[
                  "Influencer identification & vetting",
                  "Creator campaign management",
                  "User-generated content programs",
                  "Paid social media management",
                  "Community building strategies"
                ]}
                website="https://inbeat.agency"
                brandAssets={agencyLogos.inbeat}
              />

              {/* #4 - Ironpaper */}
              <AgencyCard
                rank={4}
                name="Ironpaper"
                tagline="B2B Complex Sales & Marketing Alignment"
                description={[
                  "Ironpaper focuses on complex B2B companies with long sales cycles, multiple stakeholders, and technical products. They excel at building GTM strategies for businesses where deals take 6-18 months to close and require extensive education, nurturing, and multi-threading across buying committees.",
                  "The agency brings particular expertise to enterprise software, industrial technology, and professional services firms. They understand how to create content and campaigns that address technical buyers, economic buyers, and end users simultaneously."
                ]}
                bestFor={[
                  "Enterprise B2B companies with complex sales",
                  "Technical products requiring buyer education",
                  "Long sales cycles with multiple stakeholders"
                ]}
                keyServices={[
                  "Account-based marketing programs",
                  "Sales-marketing alignment & SLAs",
                  "Lead nurturing & automation",
                  "Technical content development",
                  "Sales enablement for complex deals"
                ]}
                website="https://www.ironpaper.com"
                brandAssets={agencyLogos.ironpaper}
              />

              {/* #5 - Ziggy */}
              <AgencyCard
                rank={5}
                name="Ziggy"
                tagline="Early-Stage Startup Positioning"
                description={[
                  "Ziggy specializes in helping early-stage startups refine their positioning, messaging, and initial GTM approach before major launches. They work with pre-seed through Series A companies that are still figuring out product-market fit, testing messaging with early customers, and establishing their foundational GTM strategy.",
                  "What makes Ziggy valuable for startups is their focus on getting the fundamentals right before scaling—ensuring you understand your ICP deeply, can articulate differentiation compellingly, and have validated your messaging with real buyers."
                ]}
                bestFor={[
                  "Pre-seed to Series A startups",
                  "Companies refining product-market fit",
                  "Founders needing positioning clarity"
                ]}
                keyServices={[
                  "Customer research & ICP definition",
                  "Positioning strategy workshops",
                  "Messaging framework development",
                  "Early GTM strategy validation",
                  "Founder marketing advisory"
                ]}
                website="https://www.ziggy.io"
                brandAssets={agencyLogos.ziggy}
              />

              {/* #6 - Deviate Labs */}
              <AgencyCard
                rank={6}
                name="Deviate Labs"
                tagline="Creative Growth & Unconventional Tactics"
                description={[
                  "Deviate Labs brings creative, unconventional thinking to GTM strategy. They specialize in growth tactics that break from traditional playbooks—viral loops, product-led growth mechanisms, community-driven launches, and guerrilla marketing campaigns that generate outsized attention.",
                  "The agency works particularly well with companies willing to experiment and take calculated risks for differentiated launch approaches. Rather than following standard agency frameworks, Deviate Labs designs custom strategies based on your specific context."
                ]}
                bestFor={[
                  "Companies wanting unconventional growth tactics",
                  "Products with inherent viral potential",
                  "Brands seeking differentiated launch approaches"
                ]}
                keyServices={[
                  "Product-led growth strategy",
                  "Viral marketing campaigns",
                  "Community-driven launch programs",
                  "Growth experimentation & testing",
                  "Creative partnership development"
                ]}
                website="https://www.deviatelabs.com"
                brandAssets={agencyLogos.deviatelabs}
              />

              {/* #7 - Refine Labs */}
              <AgencyCard
                rank={7}
                name="Refine Labs"
                tagline="B2B Demand Generation & Buyer Alignment"
                description={[
                  "Refine Labs has pioneered modern B2B demand generation approaches that align with how buyers actually research and evaluate solutions today. They reject traditional MQL-focused lead gen in favor of strategies that create genuine demand, build brand authority, and meet buyers throughout their self-directed research journey.",
                  "The agency brings deep expertise in podcast-led content strategies, video-first demand generation, and community building for B2B brands. They understand that today's B2B buyers conduct extensive research independently before engaging sales."
                ]}
                bestFor={[
                  "B2B SaaS companies building demand",
                  "Companies moving beyond MQL-focused strategies",
                  "Brands wanting thought leadership positioning"
                ]}
                keyServices={[
                  "Modern demand generation strategy",
                  "Podcast & video content programs",
                  "B2B brand building",
                  "Community development",
                  "Buyer journey mapping & optimization"
                ]}
                website="https://www.refinelabs.com"
                brandAssets={agencyLogos.refinelabs}
              />

              {/* #8 - Six & Flow */}
              <AgencyCard
                rank={8}
                name="Six & Flow"
                tagline="HubSpot-Integrated GTM & RevOps"
                description={[
                  "Six & Flow specializes in GTM strategies and revenue operations built on the HubSpot platform. They combine strategic planning with technical implementation—helping you design your GTM approach and then actually building it within HubSpot's CRM, marketing automation, and sales tools.",
                  "The agency works particularly well for companies already using HubSpot or planning to implement it as their revenue operations backbone. They understand the platform's capabilities deeply and can architect sophisticated marketing-sales alignment, lead lifecycle management, and attribution reporting within the HubSpot ecosystem."
                ]}
                bestFor={[
                  "HubSpot users scaling revenue operations",
                  "Companies needing strategy + technical implementation",
                  "B2B SaaS with complex lead lifecycle management"
                ]}
                keyServices={[
                  "HubSpot implementation & optimization",
                  "Revenue operations strategy",
                  "Marketing automation & workflows",
                  "Sales-marketing alignment & SLAs",
                  "Attribution & reporting dashboards"
                ]}
                website="https://www.sixandflow.com"
                brandAssets={agencyLogos.sixandflow}
              />

              {/* #9 - Single Grain */}
              <AgencyCard
                rank={9}
                name="Single Grain"
                tagline="SaaS & Performance-Driven GTM"
                description={[
                  "Single Grain brings performance marketing expertise to GTM strategy, with particular strength in SaaS, education, and B2B technology sectors. They combine strategic planning with strong execution across paid acquisition, SEO, content marketing, and conversion rate optimization.",
                  "The agency works best with growth-stage companies that have product-market fit and need to scale acquisition efficiently. They excel at identifying the right channel mix for your product and audience, then systematically testing and optimizing to reduce CAC and improve LTV."
                ]}
                bestFor={[
                  "SaaS companies scaling customer acquisition",
                  "B2B tech companies with growth budgets",
                  "Companies wanting performance marketing + strategy"
                ]}
                keyServices={[
                  "Paid acquisition (Google, LinkedIn, Facebook)",
                  "SEO & content marketing",
                  "Conversion rate optimization",
                  "Channel strategy & testing",
                  "Analytics & attribution"
                ]}
                website="https://www.singlegrain.com"
                brandAssets={agencyLogos.singlegrain}
              />

              {/* #10 - Boil */}
              <AgencyCard
                rank={10}
                name="Boil"
                tagline="SaaS Positioning & Research-Based Messaging"
                description={[
                  "Boil specializes in customer research-driven positioning and messaging for B2B SaaS companies. Their methodology centers on extensive customer interviews, competitive analysis, and win-loss research to understand exactly how buyers perceive your product, what drives purchase decisions, and what language resonates.",
                  "The agency works particularly well with SaaS companies that struggle to articulate differentiation clearly or have high-quality products that aren't translating to strong pipeline. Boil's research-based approach removes guesswork from positioning."
                ]}
                bestFor={[
                  "B2B SaaS needing positioning clarity",
                  "Companies with unclear differentiation",
                  "Products with complex value propositions"
                ]}
                keyServices={[
                  "Customer research & interviews",
                  "Win-loss analysis",
                  "Positioning strategy development",
                  "Messaging framework creation",
                  "Website & sales copy optimization"
                ]}
                website="https://www.boilmarketing.com"
                brandAssets={agencyLogos.boil}
              />

              {/* #11 - Arise GTM */}
              <AgencyCard
                rank={11}
                name="Arise GTM"
                tagline="Boutique Strategy & Pre-Launch Clarity"
                description={[
                  "Arise GTM operates as a boutique consultancy focused on pre-launch strategic clarity for B2B companies. They work with a limited number of clients at any time, providing senior-level strategic advisory rather than scaled execution services.",
                  "The agency works best with companies in the planning phase—typically 3-6 months before launch—who need strategic guidance to make critical decisions about positioning, target segments, pricing, and channel strategy."
                ]}
                bestFor={[
                  "Companies in pre-launch planning phase",
                  "B2B SaaS needing strategic clarity",
                  "Founders seeking senior advisory support"
                ]}
                keyServices={[
                  "Strategic advisory & planning",
                  "Market & competitive analysis",
                  "Launch roadmap development",
                  "Pricing & packaging strategy",
                  "Channel strategy & prioritization"
                ]}
                website="https://www.arisegtm.com"
                brandAssets={agencyLogos.arisegtm}
              />

              {/* #12 - Kalungi */}
              <AgencyCard
                rank={12}
                name="Kalungi"
                tagline="B2B SaaS Startups & Fractional CMO Services"
                description={[
                  "Kalungi provides fractional CMO services combined with marketing execution specifically for B2B SaaS startups. Their model pairs a senior marketing executive (fractional CMO) with an execution team, giving startups access to VP/CMO-level strategic guidance without the cost of a full-time executive hire.",
                  "Kalungi's team brings deep B2B SaaS expertise across demand generation, product marketing, content strategy, and marketing operations. They understand the unique challenges of startup marketing—limited budgets, rapid iteration, founder-led sales transitioning to scalable processes, and the need to prove ROI quickly."
                ]}
                bestFor={[
                  "B2B SaaS startups (seed to Series B)",
                  "Companies needing fractional CMO guidance",
                  "Startups scaling from founder-led sales"
                ]}
                keyServices={[
                  "Fractional CMO leadership",
                  "Demand generation programs",
                  "Product marketing & positioning",
                  "Content strategy & execution",
                  "Marketing operations & stack setup"
                ]}
                website="https://www.kalungi.com"
                brandAssets={agencyLogos.kalungi}
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 md:py-40 bg-zinc-950 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-12">
              Start Your GTM Strategy Today
            </h2>
            <p className="text-3xl text-white mb-16 leading-relaxed font-light">
              Get a comprehensive go-to-market plan in minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link
                href="/planner"
                className="inline-flex items-center justify-center px-16 py-6 text-2xl font-black rounded-xl bg-white text-black hover:bg-gray-200 transition-all duration-200 shadow-2xl"
              >
                Get Free GTM Plan →
              </Link>
              <Link
                href="/chat"
                className="inline-flex items-center justify-center px-16 py-6 text-2xl font-black rounded-xl bg-white/10 backdrop-blur border-2 border-white/40 text-white hover:bg-white/20 transition-all duration-200"
              >
                Chat with AI Strategist
              </Link>
            </div>
          </div>
        </section>

        {/* Voice AI Widget */}
        <AuthAwareHumeWidget />
      </div>
    </>
  );
}
