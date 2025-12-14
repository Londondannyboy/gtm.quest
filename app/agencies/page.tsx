import { Metadata } from "next";
import { createDbQuery } from "@/lib/db";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GTM Agencies Directory | Top Go-To-Market Consultants 2025",
  description: "Browse 500+ vetted GTM agencies and consultants. Find expert go-to-market strategy partners specializing in B2B SaaS, product launches, and market entry.",
  keywords: "gtm agencies, go-to-market consultants, gtm agency directory, product launch agencies, market entry consultants",
};

export const revalidate = 3600 // Revalidate every hour

interface GTMAgency {
  id: number
  slug: string
  name: string
  description: string
  headquarters: string
  logo_url: string
  specializations: string[]
  global_rank: number
  employee_count: number
  founded_year: number
}

async function getGTMAgencies(): Promise<GTMAgency[]> {
  try {
    const sql = createDbQuery()
    const agencies = await sql`
      SELECT
        id, slug, name, description, headquarters, logo_url,
        specializations, global_rank, employee_count, founded_year
      FROM companies
      WHERE app = 'gtm' AND status = 'published'
      ORDER BY global_rank ASC NULLS LAST, name ASC
      LIMIT 100
    `
    return agencies as GTMAgency[]
  } catch (error) {
    console.error('Error fetching GTM agencies:', error)
    return []
  }
}

export default async function AgenciesPage() {
  const agencies = await getGTMAgencies()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              {agencies.length}+ GTM Agencies
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Top GTM Agencies & Consultants
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Find the perfect go-to-market partner for your product launch. Browse vetted agencies
              specializing in B2B SaaS, market entry, product positioning, and revenue growth.
            </p>
            <Link
              href="/chat"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-lg"
            >
              🤖 Get AI Recommendations →
            </Link>
          </div>
        </div>
      </section>

      {/* Filters Section - Coming Soon */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium">
              All Agencies
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
              B2B SaaS
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
              Enterprise
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
              Product Launch
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
              Market Entry
            </button>
          </div>
        </div>
      </section>

      {/* Agencies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {agencies.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                GTM Agency Directory Coming Soon
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We're curating the best GTM agencies and consultants. In the meantime,
                chat with our AI strategist to get personalized recommendations.
              </p>
              <Link
                href="/chat"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-200"
              >
                Chat with AI Strategist →
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agencies.map((agency) => (
                <Link
                  key={agency.id}
                  href={`/agency/${agency.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 overflow-hidden"
                >
                  <div className="p-6">
                    {/* Logo or Icon */}
                    {agency.logo_url ? (
                      <div className="w-16 h-16 mb-4 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={agency.logo_url}
                          alt={`${agency.name} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 mb-4 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                        <span className="text-2xl">🎯</span>
                      </div>
                    )}

                    {/* Agency Info */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                        {agency.name}
                      </h3>
                      {agency.global_rank && agency.global_rank <= 10 && (
                        <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-semibold">
                          Top 10
                        </span>
                      )}
                    </div>

                    {agency.headquarters && (
                      <p className="text-sm text-gray-500 mb-3">📍 {agency.headquarters}</p>
                    )}

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {agency.description}
                    </p>

                    {/* Specializations */}
                    {agency.specializations && agency.specializations.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {agency.specializations.slice(0, 3).map((spec, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-gray-100">
                      {agency.employee_count && (
                        <span>👥 {agency.employee_count}+ employees</span>
                      )}
                      {agency.founded_year && (
                        <span>📅 Est. {agency.founded_year}</span>
                      )}
                    </div>
                  </div>

                  <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 group-hover:bg-amber-50 transition-colors">
                    <span className="text-sm font-semibold text-gray-900 group-hover:text-amber-700 flex items-center gap-2">
                      View Profile
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Not Sure Which Agency to Choose?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Chat with our AI strategist to get personalized GTM agency recommendations
            based on your product, market, and budget.
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-xl bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200 shadow-xl"
          >
            🤖 Get AI Recommendations →
          </Link>
        </div>
      </section>
    </div>
  );
}
