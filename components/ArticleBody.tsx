import React from 'react'
import ReactMarkdown from 'react-markdown'

interface ArticleBodyProps {
  content: string
  className?: string
}

export function ArticleBody({ content, className = '' }: ArticleBodyProps) {
  return (
    <div className={`prose prose-lg max-w-3xl mx-auto ${className}`}>
      <ReactMarkdown
        components={{
          h1: ({ children }) => <h1 className="text-4xl font-black text-gray-900 mb-6 mt-8 first:mt-0">{children}</h1>,
          h2: ({ children }) => <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-6">{children}</h2>,
          h3: ({ children }) => <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-5">{children}</h3>,
          h4: ({ children }) => <h4 className="text-xl font-bold text-gray-900 mb-3 mt-4">{children}</h4>,
          p: ({ children }) => <p className="text-gray-700 leading-7 mb-4">{children}</p>,
          ul: ({ children }) => (
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="text-gray-700">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-purple-300 bg-purple-50 pl-4 py-2 my-4 italic text-gray-700">
              {children}
            </blockquote>
          ),
          code: ({ children, className }) => {
            const isInline = !className?.includes('language-')
            return isInline ? (
              <code className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono">
                {children}
              </code>
            ) : (
              <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 font-mono text-sm">
                {children}
              </code>
            )
          },
          pre: ({ children }) => <pre className="mb-4">{children}</pre>,
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-purple-700 hover:text-purple-900 underline"
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt}
              className="rounded-lg my-6 w-full max-w-2xl"
            />
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-collapse border border-gray-200">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-gray-200 bg-gray-100 px-4 py-2 font-semibold text-left">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-200 px-4 py-2">
              {children}
            </td>
          ),
          hr: () => <hr className="my-8 border-gray-200" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
