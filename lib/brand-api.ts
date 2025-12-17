// Comprehensive brand asset fetching from brand.dev API
import axios from 'axios';

const BRAND_DEV_API_KEY = 'brand_5a3f3897a5e7445f899ece016591c47b'
const API_URL = 'https://api.brand.dev/v1/brand/retrieve'

export interface BrandColor {
  hex: string
  name: string
}

export interface BrandLogo {
  url: string
  mode: string // 'light', 'dark', 'has_opaque_background'
  group?: number
  colors?: BrandColor[]
  resolution?: {
    width: number
    height: number
    aspect_ratio?: number
  }
}

export interface BrandBackdrop {
  url: string
  colors?: BrandColor[]
  resolution?: {
    width: number
    height: number
    aspect_ratio?: number
  }
}

export interface BrandSocial {
  type: string
  url: string
}

export interface BrandAddress {
  street?: string
  city?: string
  country?: string
  country_code?: string
  state_province?: string
  state_code?: string
  postal_code?: string
  additional_info?: string
}

export interface BrandAssets {
  domain: string
  title?: string
  description?: string
  slogan?: string
  colors?: BrandColor[]
  logos?: BrandLogo[]
  backdrops?: BrandBackdrop[]
  address?: BrandAddress
  socials?: BrandSocial[]
  email?: string
  phone?: string
  verified?: boolean
  industries?: any
  links?: {
    blog?: string
    careers?: string
    privacy?: string
    terms?: string
    contact?: string
    pricing?: string
  }
}

interface ApiResponse {
  status: string
  brand: {
    domain: string
    title: string
    description: string
    slogan: string
    address?: BrandAddress
    colors: BrandColor[]
    logos: BrandLogo[]
    backdrops: BrandBackdrop[]
    socials: BrandSocial[]
    email?: string
    phone?: string
    verified: boolean
    industries?: any
    links?: {
      blog?: string
      careers?: string
      privacy?: string
      terms?: string
      contact?: string
      pricing?: string
    }
  }
  code: number
}

/**
 * Fetch comprehensive brand assets from brand.dev API
 */
export async function fetchBrandFromBrandDev(domain: string): Promise<BrandAssets | null> {
  try {
    const response = await axios.get<ApiResponse>(API_URL, {
      params: {
        domain: domain,
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BRAND_DEV_API_KEY}`,
      },
    })

    if (!response.data || !response.data.brand) {
      console.warn(`No brand data returned for ${domain}`)
      return null
    }

    const brand = response.data.brand

    return {
      domain: brand.domain,
      title: brand.title,
      description: brand.description,
      slogan: brand.slogan,
      colors: brand.colors || [],
      logos: brand.logos || [],
      backdrops: brand.backdrops || [],
      address: brand.address,
      socials: brand.socials || [],
      email: brand.email,
      phone: brand.phone,
      verified: brand.verified,
      industries: brand.industries,
      links: brand.links
    }
  } catch (error) {
    console.error(`Error fetching brand from brand.dev for ${domain}:`, error)
    return null
  }
}

/**
 * Get agency domains mapping
 */
export const agencyDomains: Record<string, string> = {
  'gtmquest': 'gtm.quest',
  'salescaptain': 'salescaptain.io',
  'inbeat': 'inbeat.agency',
  'ironpaper': 'ironpaper.com',
  'ziggy': 'ziggy.io',
  'deviatelabs': 'deviatelabs.com',
  'refinelabs': 'refinelabs.com',
  'sixandflow': 'sixandflow.com',
  'singlegrain': 'singlegrain.com',
  'boil': 'boilmarketing.com',
  'arisegtm': 'arisegtm.com',
  'kalungi': 'kalungi.com'
}

/**
 * Sleep helper for rate limiting
 */
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

/**
 * Fetch all agency logos and brand assets with rate limiting
 */
export async function fetchAllAgencyLogos(): Promise<Record<string, BrandAssets | null>> {
  const results: Record<string, BrandAssets | null> = {}

  // Fetch sequentially with delays to avoid rate limiting (429 errors)
  for (const [key, domain] of Object.entries(agencyDomains)) {
    try {
      const assets = await fetchBrandFromBrandDev(domain)
      results[key] = assets

      // Wait 500ms between requests to avoid rate limiting
      await sleep(500)
    } catch (error) {
      console.error(`Failed to fetch brand for ${domain}:`, error)
      results[key] = null
    }
  }

  return results
}

/**
 * Get the best logo for display (prefer light mode logo for dark backgrounds)
 * Also filters out third-party logos like cookiebot
 */
export function getBestLogo(brandAssets: BrandAssets | null, preferredGroup?: number): string | null {
  if (!brandAssets?.logos || brandAssets.logos.length === 0) return null

  // Filter out third-party logos (cookiebot, etc.)
  const companyLogos = brandAssets.logos.filter(logo => {
    const url = logo.url.toLowerCase()
    return !url.includes('cookiebot') &&
           !url.includes('cookie') &&
           !url.includes('consent')
  })

  if (companyLogos.length === 0) return brandAssets.logos[0]?.url || null

  // If preferredGroup is specified, try to find logo from that group first
  if (preferredGroup !== undefined) {
    const groupLogo = companyLogos.find(l => l.group === preferredGroup && l.mode === 'light')
    if (groupLogo) return groupLogo.url
  }

  // Prefer light mode logo for dark backgrounds
  const lightLogo = companyLogos.find(l => l.mode === 'light')
  if (lightLogo) return lightLogo.url

  // Otherwise get dark logo
  const darkLogo = companyLogos.find(l => l.mode === 'dark')
  if (darkLogo) return darkLogo.url

  // Fall back to first filtered logo
  return companyLogos[0]?.url || null
}

/**
 * Get the best backdrop image
 */
export function getBestBackdrop(brandAssets: BrandAssets | null): string | null {
  if (!brandAssets?.backdrops || brandAssets.backdrops.length === 0) return null
  return brandAssets.backdrops[0]?.url || null
}

/**
 * Get the second backdrop image for decorative purposes
 */
export function getSecondBackdrop(brandAssets: BrandAssets | null): string | null {
  if (!brandAssets?.backdrops || brandAssets.backdrops.length < 2) return null
  return brandAssets.backdrops[1]?.url || null
}

/**
 * Get primary brand color
 */
export function getPrimaryColor(brandAssets: BrandAssets | null): string {
  if (!brandAssets?.colors || brandAssets.colors.length === 0) return '#FFFFFF'
  return brandAssets.colors[0]?.hex || '#FFFFFF'
}

/**
 * Get secondary brand color
 */
export function getSecondaryColor(brandAssets: BrandAssets | null): string {
  if (!brandAssets?.colors || brandAssets.colors.length < 2) return getPrimaryColor(brandAssets)
  return brandAssets.colors[1]?.hex || getPrimaryColor(brandAssets)
}

/**
 * Helper to get a safe CSS color value
 */
export function getSafeColor(color?: string, fallback: string = '#FFFFFF'): string {
  if (!color) return fallback
  // Ensure color starts with # for hex colors
  if (color.match(/^[0-9A-Fa-f]{6}$/)) return `#${color}`
  if (color.match(/^[0-9A-Fa-f]{3}$/)) return `#${color}`
  return color
}
