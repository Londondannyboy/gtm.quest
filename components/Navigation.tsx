'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AuthButtons } from './AuthButtons'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/best-gtm-agencies', label: 'GTM Agencies' },
    { href: '/articles', label: 'Articles' },
    { href: '/gtm-resources', label: 'Resources' },
    { href: '/chat', label: 'AI Strategist' }
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className={`nav-sticky transition-all duration-300 ${
      scrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="hidden sm:block">
              <span className="font-black text-gray-900 text-lg tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk, system-ui)', fontSize: '20px', fontWeight: '900', letterSpacing: '-0.02em' }}>GTM</span>
              <span className="text-blue-500 font-black text-lg tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk, system-ui)', fontSize: '20px', fontWeight: '900', letterSpacing: '-0.02em' }}>Quest</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Chat link - always visible, prominent on mobile */}
            <Link
              href="/chat"
              className={`md:hidden px-3 py-2 rounded-lg font-semibold text-sm transition-colors ${
                isActive('/chat')
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              AI Chat
            </Link>

            <AuthButtons />
            <Link
              href="/chat"
              className="hidden sm:inline-flex bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 font-semibold rounded-lg transition-all duration-200 text-sm px-4 py-2 relative group"
            >
              🤖 Try AI Strategies
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">beta</span>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-blue-50 text-blue-900'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/chat"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg py-3 text-center hover:from-blue-600 hover:to-blue-700 transition-all relative inline-block w-full"
              >
                🤖 Try AI Strategies
                <span className="absolute -top-1 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">beta</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
