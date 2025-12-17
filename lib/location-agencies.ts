/**
 * Location-based GTM agency filtering and statistics
 *
 * Queries agencies by service_areas array to show which agencies serve specific locations
 */

import { createDbQuery } from './db'

export interface GTMAgency {
  id: number
  slug: string
  name: string
  description: string
  headquarters: string
  logo_url: string | null
  specializations: string[]
  global_rank: number
  employee_count: number | null
  founded_year: number | null
  website: string | null
  service_areas: string[]
  brand_dev_domain: string | null
  pricing_model: string | null
  min_budget: number | null
  category_tags: string[]
}

export interface LocationStats {
  totalAgencies: number
  avgMinBudget: number
  topSpecializations: string[]
}

/**
 * Get all GTM agencies that serve a specific location
 *
 * @param location - Location name (e.g., 'UK', 'London', 'US', 'New York', 'Australia', 'Sydney')
 * @returns Array of agencies serving that location
 */
export async function getAgenciesForLocation(location: string): Promise<GTMAgency[]> {
  try {
    const sql = createDbQuery()

    // Query agencies where location is in service_areas array
    const agencies = await sql`
      SELECT *
      FROM companies
      WHERE app = 'gtm'
        AND status = 'published'
        AND ${location} = ANY(service_areas)
      ORDER BY global_rank ASC NULLS LAST, name ASC
    `

    return agencies as GTMAgency[]
  } catch (error) {
    console.error(`Error fetching agencies for location ${location}:`, error)
    return []
  }
}

/**
 * Get agencies by category, optionally filtered by location
 *
 * @param category - Category tag (e.g., 'GTM Agency', 'B2B Marketing Agency', 'Demand Generation Agency')
 * @param location - Optional location to filter by (e.g., 'UK', 'London', 'US')
 * @returns Array of agencies matching the category and location
 */
export async function getAgenciesByCategory(
  category: string,
  location?: string
): Promise<GTMAgency[]> {
  try {
    const sql = createDbQuery()

    if (location) {
      // Filter by both category and location
      const agencies = await sql`
        SELECT *
        FROM companies
        WHERE status = 'published'
          AND ${category} = ANY(category_tags)
          AND ${location} = ANY(service_areas)
        ORDER BY global_rank ASC NULLS LAST, name ASC
      `
      return agencies as GTMAgency[]
    } else {
      // Filter by category only
      const agencies = await sql`
        SELECT *
        FROM companies
        WHERE status = 'published'
          AND ${category} = ANY(category_tags)
        ORDER BY global_rank ASC NULLS LAST, name ASC
      `
      return agencies as GTMAgency[]
    }
  } catch (error) {
    console.error(`Error fetching agencies for category ${category}:`, error)
    return []
  }
}

/**
 * Get statistics for GTM agencies serving a location
 *
 * @param location - Location name
 * @returns Statistics including count, average budget, and top specializations
 */
export async function getLocationStats(location: string): Promise<LocationStats> {
  try {
    const sql = createDbQuery()

    // Get agency count
    const countResult = await sql`
      SELECT COUNT(*) as count
      FROM companies
      WHERE app = 'gtm'
        AND status = 'published'
        AND ${location} = ANY(service_areas)
    `
    const totalAgencies = parseInt(countResult[0]?.count || '0')

    // Get average minimum budget
    const budgetResult = await sql`
      SELECT AVG(min_budget) as avg_budget
      FROM companies
      WHERE app = 'gtm'
        AND status = 'published'
        AND ${location} = ANY(service_areas)
        AND min_budget IS NOT NULL
    `
    const avgMinBudget = Math.round(parseFloat(budgetResult[0]?.avg_budget || '10000'))

    // Get top specializations (flatten and count)
    const specsResult = await sql`
      SELECT unnest(specializations) as spec, COUNT(*) as count
      FROM companies
      WHERE app = 'gtm'
        AND status = 'published'
        AND ${location} = ANY(service_areas)
        AND specializations IS NOT NULL
      GROUP BY spec
      ORDER BY count DESC
      LIMIT 5
    `
    const topSpecializations = specsResult.map((row: any) => row.spec)

    return {
      totalAgencies,
      avgMinBudget,
      topSpecializations
    }
  } catch (error) {
    console.error(`Error fetching stats for location ${location}:`, error)
    return {
      totalAgencies: 0,
      avgMinBudget: 10000,
      topSpecializations: []
    }
  }
}

/**
 * Get all unique service areas from all GTM agencies
 *
 * @returns Array of unique location names
 */
export async function getAllServiceAreas(): Promise<string[]> {
  try {
    const sql = createDbQuery()

    const result = await sql`
      SELECT DISTINCT unnest(service_areas) as area
      FROM companies
      WHERE app = 'gtm'
        AND status = 'published'
        AND service_areas IS NOT NULL
      ORDER BY area ASC
    `

    return result.map((row: any) => row.area)
  } catch (error) {
    console.error('Error fetching service areas:', error)
    return []
  }
}
