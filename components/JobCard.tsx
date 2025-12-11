import React from 'react'
import { Badge } from './Badge'

interface JobCardProps {
  title: string
  company: string
  location: string
  isRemote: boolean
  compensation?: string
  dayRate?: number
  currency?: string
  roleCategory?: string
  skills?: string[]
  postedDaysAgo?: number
  className?: string
  onClick?: () => void
}

export function JobCard({
  title,
  company,
  location,
  isRemote,
  compensation,
  dayRate,
  currency = '£',
  roleCategory,
  skills = [],
  postedDaysAgo,
  className = '',
  onClick,
}: JobCardProps) {
  const displayedCompensation = compensation || (dayRate ? `${currency}${dayRate}/day` : 'TBD')

  return (
    <div
      onClick={onClick}
      className={`group relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-purple-200 transition-all duration-200 cursor-pointer ${className}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors mb-1 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
        {roleCategory && (
          <Badge variant="primary" size="sm" className="flex-shrink-0">
            {roleCategory}
          </Badge>
        )}
      </div>

      {/* Meta Information */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
        <span className="flex items-center gap-1">
          📍 {location}
        </span>
        {isRemote && (
          <span className="flex items-center gap-1 text-emerald-700 font-medium">
            🌍 Remote
          </span>
        )}
        <span className="flex items-center gap-1 font-semibold text-purple-700">
          💼 {displayedCompensation}
        </span>
      </div>

      {/* Skills Tags */}
      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.slice(0, 4).map((skill) => (
            <Badge key={skill} variant="gray" size="sm">
              {skill}
            </Badge>
          ))}
          {skills.length > 4 && (
            <Badge variant="gray" size="sm">
              +{skills.length - 4}
            </Badge>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-500">
          {postedDaysAgo !== undefined ? `Posted ${postedDaysAgo}d ago` : ''}
        </span>
        <span className="text-sm font-semibold text-purple-700 group-hover:text-purple-900 transition-colors">
          View Job →
        </span>
      </div>
    </div>
  )
}
