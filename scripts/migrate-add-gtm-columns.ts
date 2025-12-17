/**
 * Migration: Add GTM-related columns to companies table
 *
 * SAFE MIGRATION - All columns are NULLABLE, won't break existing fractional records
 * These columns are GENERIC and apply to ALL company types (fractional, GTM, future)
 */

import { neon } from '@neondatabase/serverless'

async function migrate() {
  const DATABASE_URL = process.env.DATABASE_URL

  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required')
  }

  const sql = neon(DATABASE_URL)

  console.log('Starting migration: Add GTM columns to companies table...')

  try {
    // Add columns (all NULLABLE, generic for all company types)
    await sql`
      ALTER TABLE companies
        ADD COLUMN IF NOT EXISTS website text,
        ADD COLUMN IF NOT EXISTS service_areas text[],
        ADD COLUMN IF NOT EXISTS brand_dev_domain text,
        ADD COLUMN IF NOT EXISTS pricing_model text,
        ADD COLUMN IF NOT EXISTS min_budget integer,
        ADD COLUMN IF NOT EXISTS case_study_url text,
        ADD COLUMN IF NOT EXISTS review_count integer DEFAULT 0,
        ADD COLUMN IF NOT EXISTS avg_rating decimal(2,1);
    `

    console.log('✅ Migration successful!')
    console.log('Added columns:')
    console.log('  - service_areas (text[]) - Array of locations served')
    console.log('  - brand_dev_domain (text) - Domain for brand.dev API')
    console.log('  - pricing_model (text) - Retainer/Project/Hourly')
    console.log('  - min_budget (integer) - Minimum engagement cost')
    console.log('  - case_study_url (text) - Link to case studies')
    console.log('  - review_count (integer) - Number of reviews')
    console.log('  - avg_rating (decimal) - 1.0-5.0 rating')
    console.log('')
    console.log('✅ All columns are NULLABLE - existing fractional records unaffected')

  } catch (error) {
    console.error('❌ Migration failed:', error)
    throw error
  }
}

migrate()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
