import React from 'react'

type BadgeVariant = 'primary' | 'success' | 'warning' | 'error' | 'gray' | 'cfo' | 'cmo' | 'cto' | 'coo' | 'hr' | 'sales'
type BadgeSize = 'sm' | 'md' | 'lg'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  role?: string
}

export function Badge({ variant = 'primary', size = 'md', role, className = '', children, ...props }: BadgeProps) {
  // Auto-detect role if not explicitly set
  const effectiveVariant = role ? getRoleVariant(role) : variant

  const variantStyles = {
    primary: 'bg-purple-100 text-purple-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-amber-100 text-amber-800',
    error: 'bg-red-100 text-red-800',
    gray: 'bg-gray-100 text-gray-800',
    cfo: 'bg-emerald-100 text-emerald-800', // CFO - Green
    cmo: 'bg-pink-100 text-pink-800', // CMO - Pink
    cto: 'bg-blue-100 text-blue-800', // CTO - Blue
    coo: 'bg-amber-100 text-amber-800', // COO - Amber
    hr: 'bg-violet-100 text-violet-800', // HR - Violet
    sales: 'bg-cyan-100 text-cyan-800', // Sales - Cyan
  }

  const sizeStyles = {
    sm: 'px-2 py-1 text-xs font-medium rounded',
    md: 'px-3 py-1.5 text-sm font-medium rounded-md',
    lg: 'px-4 py-2 text-base font-medium rounded-lg',
  }

  return (
    <span
      className={`inline-flex items-center ${variantStyles[effectiveVariant as keyof typeof variantStyles]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

function getRoleVariant(role: string): BadgeVariant {
  const lowerRole = role.toLowerCase().trim()
  const roleMap: Record<string, BadgeVariant> = {
    'cfo': 'cfo',
    'chief financial officer': 'cfo',
    'cmo': 'cmo',
    'chief marketing officer': 'cmo',
    'cto': 'cto',
    'chief technology officer': 'cto',
    'coo': 'coo',
    'chief operations officer': 'coo',
    'hr': 'hr',
    'human resources': 'hr',
    'sales': 'sales',
  }
  return roleMap[lowerRole] || 'gray'
}
