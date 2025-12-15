import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'

export const metadata: Metadata = {
  title: 'GTM Articles & Guides | GTM Quest',
  description: 'Browse our comprehensive collection of go-to-market articles, comparisons, guides, and frameworks for B2B SaaS companies.',
  keywords: ['gtm articles', 'go-to-market strategy', 'b2b marketing', 'saas gtm', 'demand generation'],
}

async function getArticles() {
  try {
    const sql = createDbQuery()
    const articles = await sql`
      SELECT
        id,
        slug,
        title,
        excerpt,
        target_keyword,
        keyword_volume,
        word_count,
        guide_type,
        published_at
      FROM articles
      WHERE app = 'gtm' AND status = 'published'
      ORDER BY published_at DESC
      LIMIT 500
    `
    return articles
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}

export default async function ArticlesPage() {
  const articles = await getArticles()

  // Group articles by type
  const listicles = articles.filter((a: any) => a.guide_type === 'listicle')
  const comparisons = articles.filter((a: any) => a.guide_type === 'comparison')
  const guides = articles.filter((a: any) => a.guide_type === 'guide')

  const renderArticleCard = (article: any) => (
    <Link
      key={article.id}
      href={`/${article.slug}`}
      className="group block p-6 bg-white rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
    >
      <div className="flex flex-col gap-3">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 mb-3">
            {article.guide_type.charAt(0).toUpperCase() + article.guide_type.slice(1)}
          </span>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
            {article.title}
          </h3>
        </div>

        {article.excerpt && (
          <p className="text-sm text-gray-600 line-clamp-2">
            {article.excerpt}
          </p>
        )}

        <div className="flex flex-wrap gap-3 text-xs text-gray-500 pt-2">
          {article.target_keyword && (
            <span>
              <strong>Target:</strong> {article.target_keyword}
            </span>
          )}
          {article.keyword_volume && (
            <span>
              <strong>Volume:</strong> {article.keyword_volume.toLocaleString()}/mo
            </span>
          )}
          {article.word_count && (
            <span>
              <strong>Length:</strong> {article.word_count.toLocaleString()} words
            </span>
          )}
        </div>
      </div>
    </Link>
  )

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            GTM Articles & Guides
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl leading-relaxed">
            Comprehensive collection of go-to-market articles, comparisons, frameworks, and strategic guides for B2B SaaS companies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 bg-purple-600/30 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-400/30">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {articles.length} Articles
            </span>
            <span className="inline-flex items-center gap-2 bg-purple-600/30 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-400/30">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              {articles.reduce((sum, a: any) => sum + (a.word_count || 0), 0).toLocaleString()} Words
            </span>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Listicles */}
        {listicles.length > 0 && (
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Agency Directories
              </h2>
              <p className="text-gray-600">
                Curated lists of top GTM agencies by location and specialization
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listicles.map(renderArticleCard)}
            </div>
          </section>
        )}

        {/* Comparisons */}
        {comparisons.length > 0 && (
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Comparison Articles
              </h2>
              <p className="text-gray-600">
                Side-by-side comparisons of GTM strategies, tools, and approaches
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comparisons.map(renderArticleCard)}
            </div>
          </section>
        )}

        {/* Guides */}
        {guides.length > 0 && (
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Strategic Guides
              </h2>
              <p className="text-gray-600">
                In-depth frameworks and guides for building effective GTM strategies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map(renderArticleCard)}
            </div>
          </section>
        )}

        {articles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No articles found yet.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Scale Your GTM?</h2>
          <p className="text-purple-100 mb-8 text-lg">
            Chat with our AI strategist to build a custom go-to-market plan for your product.
          </p>
          <Link href="/chat">
            <button className="px-8 py-4 bg-white text-purple-700 rounded-xl font-bold hover:bg-purple-50 transition-colors shadow-lg">
              Start GTM Strategy →
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
