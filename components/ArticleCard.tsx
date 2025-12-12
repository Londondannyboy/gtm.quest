import React from 'react'

interface ArticleCardProps {
  title: string
  excerpt?: string
  description?: string
  imageUrl?: string
  imageAlt?: string
  publishedDate?: string
  wordCount?: number
  featured?: boolean
  className?: string
  onClick?: () => void
}

export function ArticleCard({
  title,
  excerpt,
  description,
  imageUrl,
  imageAlt,
  publishedDate,
  wordCount,
  featured = false,
  className = '',
  onClick,
}: ArticleCardProps) {
  const content = excerpt || description
  const readingTime = wordCount ? Math.ceil(wordCount / 200) : null

  const formatDate = (dateString?: string) => {
    if (!dateString) return null
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <article
      onClick={onClick}
      className={`group relative flex flex-col h-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-purple-200 transition-all duration-200 cursor-pointer ${
        featured ? 'md:col-span-2' : ''
      } ${className}`}
    >
      {/* Image */}
      {imageUrl && (
        <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-100">
          <img
            src={imageUrl}
            alt={imageAlt || title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {featured && (
            <div className="absolute top-3 right-3">
              <span className="inline-block bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-700 transition-colors">
          {title}
        </h2>

        {/* Excerpt */}
        {content && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
            {content}
          </p>
        )}

        {/* Meta Information */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            {publishedDate && (
              <span>{formatDate(publishedDate)}</span>
            )}
            {readingTime && (
              <>
                <span>•</span>
                <span>{readingTime} min read</span>
              </>
            )}
          </div>
          <span className="font-semibold text-purple-700 group-hover:text-purple-900 transition-colors">
            Read →
          </span>
        </div>
      </div>
    </article>
  )
}
