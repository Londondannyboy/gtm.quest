// =============================================================================
// SEO POLICY: Centralized configuration for sitemap and SEO behavior
// =============================================================================

// Directories that should NOT be indexed (API routes, components, etc.)
export const NON_SEO_DIRECTORIES = [
  'api',
  'components',
  '_components',
  'hooks',
  'lib',
  'utils',
  'styles',
  'fonts',
  'images',
  'public',
  'agency', // Dynamic route handled separately
  'articles', // Hub page only, articles from DB
]

// Specific pages to exclude from sitemap (low value or utility pages)
export const EXCLUDED_PAGES = [
  'voice',
  'chat',
  'test',
  'debug',
  'preview',
  'draft',
  'admin',
]

// Static page slugs that exist as actual page.tsx files
// Used to prevent duplicate entries from database
export const STATIC_PAGE_SLUGS = [
  'best-gtm-agencies',
  'gtm-strategy',
  'gtm-strategy-template',
  'gtm-strategy-examples',
  'gtm-for-startups',
  'b2b-gtm-strategy',
  'enterprise-gtm-strategy',
  'hardware-gtm-strategy',
  'marketplace-gtm-strategy',
  'mckinsey-gtm-strategy',
  'what-is-gtm',
  'go-to-market-consultant',
  'gtm-consultant-vs-agency-vs-inhouse',
  'planner',
  'contact',
  'about',
  'privacy',
  'terms',
]
