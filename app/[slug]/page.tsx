import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/Badge'
import ReactMarkdown from 'react-markdown'

// Revalidate every 4 hours for articles
export const revalidate = 14400

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getArticle(slug: string) {
  try {
    const sql = createDbQuery()
    const articles = await sql`
      SELECT
        id,
        slug,
        title,
        excerpt,
        content,
        hero_asset_url,
        hero_asset_alt,
        published_at,
        app
      FROM articles
      WHERE slug = ${slug}
        AND status = 'published'
      LIMIT 1
    `
    return articles[0] || null
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    return { title: 'Article Not Found' }
  }

  const siteName = article.app === 'gtm' ? 'GTM Quest' : 'Fractional Quest'

  return {
    title: `${article.title} | ${siteName}`,
    description: article.meta_description || article.excerpt || `Read this article on ${siteName}`,
  }
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    notFound()
  }

  const formattedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  // Dynamic content based on app type
  const isGTM = article.app === 'gtm'
  const backLink = isGTM ? '/' : '/fractional-jobs-articles'
  const badgeText = isGTM ? 'GTM Guide' : 'Fractional Executive Guide'
  const ctaTitle = isGTM ? 'Explore GTM Resources' : 'Ready to find fractional talent?'
  const ctaDescription = isGTM ? 'Discover more go-to-market strategies and agency guides.' : 'Browse our curated list of fractional executive opportunities.'
  const ctaButtonText = isGTM ? 'View More Articles →' : 'Browse Jobs →'
  const ctaButtonLink = isGTM ? '/' : '/fractional-jobs'

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href={backLink} className="text-purple-200 hover:text-white transition-colors text-sm">
              ← Back to Articles
            </Link>
          </nav>

          {/* Category Badge */}
          <div className="mb-6">
            <Badge variant="primary" size="md" className="bg-purple-600/50 text-white border border-purple-400/30">
              {badgeText}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            {article.title}
          </h1>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed mb-8 max-w-3xl">
              {article.excerpt}
            </p>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-purple-200">
            {formattedDate && (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formattedDate}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Hero Image (if exists) */}
      {article.hero_asset_url && (
        <div className="relative -mt-8 max-w-5xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={article.hero_asset_url}
              alt={article.hero_asset_alt || article.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Article Body with Enhanced Styling */}
        <div className="prose prose-lg max-w-none bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 prose-headings:text-gray-900 prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900" {...props} />,
              p: ({ node, ...props }) => <p className="text-gray-700 leading-relaxed mb-4" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 text-gray-700" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 text-gray-700" {...props} />,
              li: ({ node, ...props }) => <li className="mb-2 text-gray-700" {...props} />,
              blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-600 my-4" {...props} />,
              a: ({ node, ...props }) => <a className="text-purple-600 hover:text-purple-700 underline" {...props} />,
              table: ({ node, ...props }) => <table className="w-full border-collapse border border-gray-300 my-4" {...props} />,
              th: ({ node, ...props }) => <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold text-left" {...props} />,
              td: ({ node, ...props }) => <td className="border border-gray-300 px-4 py-2" {...props} />,
              img: ({ node, ...props }) => <img className="w-full rounded-lg my-6 shadow-md" {...props} />,
              hr: () => <hr className="my-8 border-gray-300" />
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">{ctaTitle}</h3>
              <p className="text-purple-100">{ctaDescription}</p>
            </div>
            <Link href={ctaButtonLink}>
              <button className="px-8 py-4 bg-white text-purple-700 rounded-xl font-bold hover:bg-purple-50 transition-colors whitespace-nowrap shadow-lg">
                {ctaButtonText}
              </button>
            </Link>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
          <Link href={backLink} className="text-purple-700 hover:text-purple-900 font-medium flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Articles
          </Link>
          <a
            href="#top"
            className="text-gray-600 hover:text-gray-700 flex items-center gap-2"
          >
            Back to top
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}
