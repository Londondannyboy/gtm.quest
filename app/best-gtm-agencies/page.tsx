import { Metadata } from "next";
import { createDbQuery } from "@/lib/db";
import { AgencyCard } from "@/components/AgencyCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best GTM Agencies 2026 | Top Go-To-Market Consultants Directory",
  description: "Browse the best GTM agencies and consultants. Find expert go-to-market strategy partners specializing in B2B SaaS, product launches, and market entry.",
  keywords: "gtm agencies, go-to-market consultants, gtm agency directory, product launch agencies, market entry consultants, best gtm agencies",
  alternates: {
    canonical: "https://gtm.quest/best-gtm-agencies"
  }
};

export const revalidate = 3600 // Revalidate every hour

interface GTMAgency {
  id: number
  slug: string
  name: string
  description: string
  headquarters: string
  logo_url: string | null
  specializations: string[]
  global_rank: number
  employee_count: number | null
  founded_year: number | null
  website: string | null
  service_areas: string[]
  brand_dev_domain: string | null
  pricing_model: string | null
  min_budget: number | null
}

async function getGTMAgencies(): Promise<GTMAgency[]> {
  try {
    const sql = createDbQuery()
    const agencies = await sql`
      SELECT *
      FROM companies
      WHERE app = 'gtm' AND status = 'published'
      ORDER BY global_rank ASC NULLS LAST, name ASC
    `
    return agencies as GTMAgency[]
  } catch (error) {
    console.error('Error fetching GTM agencies:', error)
    return []
  }
}

export default async function AgenciesPage() {
  const agencies = await getGTMAgencies()
  // Brand assets now stored in database - no API calls!

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Best GTM Agencies 2026",
            "description": "Browse the best GTM agencies and consultants specializing in go-to-market strategy.",
            "url": "https://gtm.quest/best-gtm-agencies",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": agencies.map((agency, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Organization",
                  "name": agency.name,
                  "description": agency.description,
                  "url": `https://gtm.quest/agency/${agency.slug}`
                }
              }))
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block bg-white text-black px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
            {agencies.length} GTM Agencies
          </span>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
            Best GTM Agencies 2026
          </h1>

          <p className="text-2xl md:text-3xl text-white/80 mb-10 leading-relaxed max-w-5xl mx-auto font-light">
            Find the perfect <strong>GTM agency</strong> for your product launch. Browse verified agencies with brand profiles, specializations, and real credentials.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/planner"
              className="inline-flex items-center justify-center px-16 py-6 text-2xl font-black rounded-xl bg-white text-black hover:bg-gray-200 transition-all duration-200 shadow-2xl"
            >
              Create Your GTM Strategy →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-medium rounded-xl bg-white/10 backdrop-blur border border-white/30 text-white/80 hover:bg-white/20 hover:text-white transition-all duration-200"
            >
              Work with GTM Quest
            </Link>
          </div>
        </div>
      </section>

      {agencies.length === 0 ? (
        /* Empty State */
        <section className="py-32">
          <div className="text-center max-w-3xl mx-auto px-6">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-4xl font-bold text-white mb-4">
              GTM Agency Directory Coming Soon
            </h2>
            <p className="text-xl text-white/60 mb-8">
              We're curating the best GTM agencies and consultants. In the meantime,
              use our AI strategist to create your GTM plan.
            </p>
            <Link
              href="/planner"
              className="inline-flex items-center justify-center px-12 py-6 text-xl font-black rounded-xl bg-white text-black hover:bg-gray-200 transition-all"
            >
              Create GTM Strategy →
            </Link>
          </div>
        </section>
      ) : (
        /* Agency Cards - Using same style as home page */
        <section className="bg-black">
          {agencies.map((agency) => {
            const isTopRanked = !!(agency.global_rank && agency.global_rank <= 3)
            const website = agency.website || '#'

            return (
              <AgencyCard
                key={agency.slug}
                rank={agency.global_rank || 0}
                name={agency.name}
                tagline={agency.description}
                description={[agency.description]}
                bestFor={agency.specializations || []}
                keyServices={[]}
                website={website}
                primaryColor={(agency as any).primary_color || '#8B5CF6'}
                logoUrl={(agency as any).logo_url}
                backdropUrl={(agency as any).backdrop_url}
                isTopRanked={isTopRanked}
                internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined}
              />
            )
          })}
        </section>
      )}

      {/* Location Pages CTA */}
      <section className="bg-zinc-950 border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl font-black text-white mb-12 text-center">
            Find Agencies by Location
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/gtm-agencies-uk"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                UK Agencies →
              </h3>
              <p className="text-white/60">
                Find GTM agencies serving the UK market, including London and major cities.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-us"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                US Agencies →
              </h3>
              <p className="text-white/60">
                Discover GTM agencies across the United States, from NYC to SF.
              </p>
            </Link>

            <Link
              href="/gtm-agencies-australia"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-3xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                Australia Agencies →
              </h3>
              <p className="text-white/60">
                Explore GTM agencies serving Australia, including Sydney and Melbourne.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Build Your GTM Strategy?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Use our AI-powered platform to create a comprehensive go-to-market strategy in minutes.
          </p>
          <Link
            href="/planner"
            className="inline-flex items-center justify-center px-12 py-6 text-xl font-black rounded-xl bg-black text-white hover:bg-gray-900 transition-all duration-200 shadow-2xl"
          >
            Create GTM Strategy Free →
          </Link>
        </div>
      </section>
    </div>
  );
}
