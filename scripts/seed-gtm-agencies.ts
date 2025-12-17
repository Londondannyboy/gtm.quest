/**
 * Seed GTM Agencies into companies table
 *
 * Populates database with 12 GTM agencies from home page with:
 * - Basic info (name, slug, description)
 * - Service areas (researched - which locations they serve)
 * - brand.dev domains for fetching brand assets
 * - Pricing models and minimum budgets (estimated from positioning)
 *
 * SAFE: Uses INSERT with ON CONFLICT DO NOTHING to prevent duplicates
 */

import { neon } from '@neondatabase/serverless'

async function seed() {
  const DATABASE_URL = process.env.DATABASE_URL

  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required')
  }

  const sql = neon(DATABASE_URL)

  console.log('Seeding GTM agencies into database...')

  const agencies = [
    {
      slug: 'gtmquest',
      name: 'GTM Quest',
      app: 'gtm',
      status: 'published',
      headquarters: 'London, UK',
      description: 'AI-powered GTM strategy & launch platform with instant strategy generation and expert consultant review',
      logo_url: null,
      specializations: ['B2B SaaS', 'AI Strategy', 'Product Launch', 'Market Entry'],
      global_rank: 1,
      employee_count: null,
      founded_year: 2024,
      // NEW FIELDS
      service_areas: ['UK', 'London', 'US', 'New York', 'Australia', 'Sydney', 'Global'],
      brand_dev_domain: 'gtm.quest',
      pricing_model: 'Freemium + Consulting',
      min_budget: 0,
    },
    {
      slug: 'salescaptain',
      name: 'SalesCaptain',
      app: 'gtm',
      status: 'published',
      headquarters: 'Remote',
      description: 'B2B outbound-driven GTM strategy specializing in cold email, LinkedIn outreach, and multi-channel sequences',
      logo_url: null,
      specializations: ['Outbound Sales', 'Pipeline Generation', 'B2B SaaS'],
      global_rank: 2,
      employee_count: null,
      founded_year: null,
      service_areas: ['US', 'UK', 'Global'],
      brand_dev_domain: 'salescaptain.io',
      pricing_model: 'Retainer',
      min_budget: 5000,
    },
    {
      slug: 'inbeat',
      name: 'inBeat',
      app: 'gtm',
      status: 'published',
      headquarters: 'Montreal, Canada',
      description: 'DTC & influencer-led GTM strategy for consumer brands with creator campaign management',
      logo_url: null,
      specializations: ['Influencer Marketing', 'DTC', 'Creator Campaigns'],
      global_rank: 3,
      employee_count: null,
      founded_year: null,
      service_areas: ['US', 'Canada', 'Global'],
      brand_dev_domain: 'inbeat.agency',
      pricing_model: 'Project-based',
      min_budget: 10000,
    },
    {
      slug: 'ironpaper',
      name: 'Ironpaper',
      app: 'gtm',
      status: 'published',
      headquarters: 'New York, US',
      description: 'B2B complex sales & marketing alignment for enterprise software and technical products',
      logo_url: null,
      specializations: ['Enterprise B2B', 'Technical Products', 'Account-Based Marketing'],
      global_rank: 4,
      employee_count: null,
      founded_year: null,
      service_areas: ['US', 'New York', 'UK', 'Global'],
      brand_dev_domain: 'ironpaper.com',
      pricing_model: 'Retainer',
      min_budget: 15000,
    },
    {
      slug: 'ziggy',
      name: 'Ziggy',
      app: 'gtm',
      status: 'published',
      headquarters: 'San Francisco, US',
      description: 'Early-stage startup positioning helping pre-seed through Series A companies refine product-market fit',
      logo_url: null,
      specializations: ['Startup Positioning', 'Product-Market Fit', 'Messaging'],
      global_rank: 5,
      employee_count: null,
      founded_year: null,
      service_areas: ['US', 'UK', 'Global'],
      brand_dev_domain: 'ziggy.io',
      pricing_model: 'Project-based',
      min_budget: 8000,
    },
    {
      slug: 'deviatelabs',
      name: 'Deviate Labs',
      app: 'gtm',
      status: 'published',
      headquarters: 'Remote',
      description: 'Creative growth & unconventional tactics with viral loops, product-led growth, and guerrilla marketing',
      logo_url: null,
      specializations: ['Product-Led Growth', 'Viral Marketing', 'Growth Experimentation'],
      global_rank: 6,
      employee_count: null,
      founded_year: null,
      service_areas: ['US', 'Global'],
      brand_dev_domain: 'deviatelabs.com',
      pricing_model: 'Retainer',
      min_budget: 12000,
    },
    {
      slug: 'refinelabs',
      name: 'Refine Labs',
      app: 'gtm',
      status: 'published',
      headquarters: 'Boston, US',
      description: 'B2B demand generation & buyer alignment with podcast-led content and modern marketing strategies',
      logo_url: null,
      specializations: ['B2B Demand Generation', 'Podcast Marketing', 'Brand Building'],
      global_rank: 7,
      employee_count: null,
      founded_year: null,
      service_areas: ['US', 'UK', 'Global'],
      brand_dev_domain: 'refinelabs.com',
      pricing_model: 'Retainer',
      min_budget: 20000,
    },
    {
      slug: 'sixandflow',
      name: 'Six & Flow',
      app: 'gtm',
      status: 'published',
      headquarters: 'Manchester, UK',
      description: 'HubSpot-integrated GTM & RevOps combining strategic planning with technical implementation',
      logo_url: null,
      specializations: ['HubSpot', 'Revenue Operations', 'Marketing Automation'],
      global_rank: 8,
      employee_count: null,
      founded_year: null,
      service_areas: ['UK', 'London', 'US', 'Australia', 'Global'],
      brand_dev_domain: 'sixandflow.com',
      pricing_model: 'Retainer',
      min_budget: 10000,
    },
    {
      slug: 'singlegrain',
      name: 'Single Grain',
      app: 'gtm',
      status: 'published',
      headquarters: 'Los Angeles, US',
      description: 'SaaS & performance-driven GTM with paid acquisition, SEO, and conversion rate optimization',
      logo_url: null,
      specializations: ['SaaS Marketing', 'Paid Acquisition', 'SEO', 'CRO'],
      global_rank: 9,
      employee_count: null,
      founded_year: null,
      service_areas: ['US', 'UK', 'Global'],
      brand_dev_domain: 'singlegrain.com',
      pricing_model: 'Retainer',
      min_budget: 15000,
    },
    {
      slug: 'boil',
      name: 'Boil',
      app: 'gtm',
      status: 'published',
      headquarters: 'Remote',
      description: 'SaaS positioning & research-based messaging with extensive customer interviews and win-loss analysis',
      logo_url: null,
      specializations: ['SaaS Positioning', 'Customer Research', 'Messaging'],
      global_rank: 10,
      employee_count: null,
      founded_year: null,
      service_areas: ['US', 'UK', 'Global'],
      brand_dev_domain: 'boilmarketing.com',
      pricing_model: 'Project-based',
      min_budget: 15000,
    },
    {
      slug: 'arisegtm',
      name: 'Arise GTM',
      app: 'gtm',
      status: 'published',
      headquarters: 'Remote',
      description: 'Boutique strategy & pre-launch clarity providing senior-level strategic advisory for B2B companies',
      logo_url: null,
      specializations: ['Strategic Advisory', 'Pre-Launch Planning', 'Market Analysis'],
      global_rank: 11,
      employee_count: null,
      founded_year: null,
      service_areas: ['US', 'UK', 'Global'],
      brand_dev_domain: 'arisegtm.com',
      pricing_model: 'Consulting',
      min_budget: 20000,
    },
    {
      slug: 'kalungi',
      name: 'Kalungi',
      app: 'gtm',
      status: 'published',
      headquarters: 'Seattle, US',
      description: 'B2B SaaS startups & fractional CMO services providing VP/CMO-level guidance with execution team',
      logo_url: null,
      specializations: ['Fractional CMO', 'B2B SaaS', 'Demand Generation'],
      global_rank: 12,
      employee_count: null,
      founded_year: null,
      service_areas: ['US', 'UK', 'Global'],
      brand_dev_domain: 'kalungi.com',
      pricing_model: 'Retainer',
      min_budget: 15000,
    },
  ]

  try {
    let inserted = 0
    let skipped = 0

    for (const agency of agencies) {
      try {
        // Insert with ON CONFLICT DO NOTHING to prevent duplicates
        const result = await sql`
          INSERT INTO companies (
            slug, name, app, status, headquarters, description, logo_url,
            specializations, global_rank, employee_count, founded_year,
            service_areas, brand_dev_domain, pricing_model, min_budget
          )
          VALUES (
            ${agency.slug}, ${agency.name}, ${agency.app}, ${agency.status},
            ${agency.headquarters}, ${agency.description}, ${agency.logo_url},
            ${agency.specializations}, ${agency.global_rank}, ${agency.employee_count}, ${agency.founded_year},
            ${agency.service_areas}, ${agency.brand_dev_domain}, ${agency.pricing_model}, ${agency.min_budget}
          )
          ON CONFLICT (slug) DO NOTHING
          RETURNING slug
        `

        if (result.length > 0) {
          console.log(`✅ Inserted: ${agency.name} (${agency.slug})`)
          inserted++
        } else {
          console.log(`⏭️  Skipped (already exists): ${agency.name} (${agency.slug})`)
          skipped++
        }
      } catch (error) {
        console.error(`❌ Failed to insert ${agency.name}:`, error)
      }
    }

    console.log('')
    console.log('✅ Seeding complete!')
    console.log(`   Inserted: ${inserted} agencies`)
    console.log(`   Skipped: ${skipped} agencies (already exist)`)
    console.log('')
    console.log('Service areas added:')
    console.log('  - UK, London: GTM Quest, Six & Flow')
    console.log('  - US: All agencies serve US market')
    console.log('  - Australia: GTM Quest, Six & Flow')
    console.log('  - Global: All agencies marked as Global')

  } catch (error) {
    console.error('❌ Seeding failed:', error)
    throw error
  }
}

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
