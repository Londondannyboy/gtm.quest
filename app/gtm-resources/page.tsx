import { Metadata } from "next";
import { createDbQuery } from "@/lib/db";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GTM Resources | Free Go-To-Market Templates & Frameworks",
  description: "Free GTM strategy resources, templates, playbooks, and frameworks. Learn from 1,000+ successful product launches and market entries.",
  keywords: "gtm resources, go-to-market templates, gtm frameworks, product launch playbooks, gtm strategy guides",
};

export const revalidate = 3600 // Revalidate every hour

interface GTMArticle {
  id: number
  slug: string
  title: string
  description: string
  category: string
  published_at: string
  featured_asset_url: string | null
  hero_asset_url: string | null
}

async function getGTMResources(): Promise<GTMArticle[]> {
  try {
    const sql = createDbQuery()
    const articles = await sql`
      SELECT
        id, slug, title, excerpt,
        COALESCE(excerpt, title) as description,
        'General' as category,
        published_at,
        featured_asset_url,
        hero_asset_url
      FROM articles
      WHERE status = 'published' AND app = 'gtm'
      ORDER BY published_at DESC
      LIMIT 100
    `
    return articles as GTMArticle[]
  } catch (error) {
    console.error('Error fetching GTM resources:', error)
    return []
  }
}

export default async function ResourcesPage() {
  const resources = await getGTMResources()

  // Predefined resource categories with example content
  const resourceCategories = [
    {
      icon: "📋",
      title: "GTM Templates",
      description: "Ready-to-use templates for GTM planning, positioning, and execution",
      count: 12,
      items: [
        "GTM Strategy Template",
        "Product Launch Checklist",
        "Market Entry Framework",
        "Positioning Canvas"
      ]
    },
    {
      icon: "🎯",
      title: "Strategy Frameworks",
      description: "Proven frameworks from successful product launches",
      count: 8,
      items: [
        "B2B SaaS GTM Playbook",
        "Market Segmentation Guide",
        "Competitive Analysis Framework",
        "Pricing Strategy Model"
      ]
    },
    {
      icon: "📊",
      title: "GTM Playbooks",
      description: "Step-by-step guides for different GTM scenarios",
      count: 15,
      items: [
        "Enterprise Sales GTM",
        "Product-Led Growth GTM",
        "Channel Partner GTM",
        "International Expansion"
      ]
    },
    {
      icon: "💡",
      title: "Case Studies",
      description: "Real GTM success stories with metrics and lessons",
      count: 25,
      items: [
        "SaaS $0-$10M ARR",
        "Enterprise Market Entry",
        "Product Launch Analysis",
        "Pivot Success Stories"
      ]
    },
    {
      icon: "🎓",
      title: "GTM Guides",
      description: "Comprehensive guides on GTM strategy topics",
      count: 20,
      items: [
        "GTM Strategy 101",
        "Messaging & Positioning",
        "Sales Enablement Guide",
        "Launch Metrics Guide"
      ]
    },
    {
      icon: "🛠️",
      title: "Tools & Calculators",
      description: "Interactive tools for GTM planning and analysis",
      count: 6,
      items: [
        "TAM/SAM/SOM Calculator",
        "Pricing Calculator",
        "Launch ROI Estimator",
        "Channel Mix Optimizer"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Free GTM Resources
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Go-To-Market Resources Library
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Free templates, playbooks, frameworks, and case studies from 1,000+ successful
              product launches. Everything you need to plan and execute your GTM strategy.
            </p>
            <Link
              href="/chat"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-blue-500 text-white hover:from-blue-600 hover:to-blue-600 transition-all duration-200 shadow-lg"
            >
              🤖 Get Custom GTM Plan →
            </Link>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600">
              Curated resources for every stage of your GTM journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 p-6"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/articles"
                  className="block w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-center rounded-lg text-sm font-semibold transition-all"
                >
                  Browse Articles →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      {resources.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest GTM Articles
              </h2>
              <p className="text-xl text-gray-600">
                In-depth guides and insights from GTM experts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.slice(0, 9).map((article) => (
                <Link
                  key={article.id}
                  href={`/${article.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-gray-300 transition-all duration-200 overflow-hidden"
                >
                  {(article.featured_asset_url || article.hero_asset_url) && (
                    <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                      <img
                        src={article.featured_asset_url || article.hero_asset_url || ''}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <span className="inline-block text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mb-3 font-semibold">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>
                        {new Date(article.published_at).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="text-blue-600 font-semibold flex items-center gap-1">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Get New GTM Resources Weekly
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to receive the latest templates, playbooks, and case studies
            delivered to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-600 transition-all">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Join 5,000+ GTM professionals. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
