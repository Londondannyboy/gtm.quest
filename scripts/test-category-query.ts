import { neon } from '@neondatabase/serverless';

async function testCategoryQuery() {
  const DATABASE_URL = process.env.DATABASE_URL;

  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required');
  }

  const sql = neon(DATABASE_URL);

  console.log('Testing category queries...\n');

  try {
    // Test 1: Get all B2B Marketing agencies
    console.log('Test 1: All B2B Marketing agencies');
    const b2bAgencies = await sql`
      SELECT name, category_tags
      FROM companies
      WHERE status = 'published'
        AND 'B2B Marketing Agency' = ANY(category_tags)
      ORDER BY global_rank ASC NULLS LAST
    `;
    console.log(`Found ${b2bAgencies.length} B2B Marketing agencies:`);
    b2bAgencies.forEach(a => console.log(`  - ${a.name}: ${a.category_tags?.join(', ')}`));
    console.log();

    // Test 2: Get B2B Marketing agencies serving UK
    console.log('Test 2: B2B Marketing agencies in UK');
    const ukAgencies = await sql`
      SELECT name, service_areas, category_tags
      FROM companies
      WHERE status = 'published'
        AND 'B2B Marketing Agency' = ANY(category_tags)
        AND 'UK' = ANY(service_areas)
      ORDER BY global_rank ASC NULLS LAST
    `;
    console.log(`Found ${ukAgencies.length} agencies:`);
    ukAgencies.forEach(a => console.log(`  - ${a.name}`));
    console.log();

    // Test 3: Get B2B Marketing agencies serving London
    console.log('Test 3: B2B Marketing agencies in London');
    const londonAgencies = await sql`
      SELECT name, service_areas, category_tags
      FROM companies
      WHERE status = 'published'
        AND 'B2B Marketing Agency' = ANY(category_tags)
        AND 'London' = ANY(service_areas)
      ORDER BY global_rank ASC NULLS LAST
    `;
    console.log(`Found ${londonAgencies.length} agencies:`);
    londonAgencies.forEach(a => console.log(`  - ${a.name}`));
    console.log();

    // Test 4: Get GTM agencies (should include all)
    console.log('Test 4: All GTM agencies');
    const gtmAgencies = await sql`
      SELECT name, category_tags
      FROM companies
      WHERE status = 'published'
        AND 'GTM Agency' = ANY(category_tags)
      ORDER BY global_rank ASC NULLS LAST
    `;
    console.log(`Found ${gtmAgencies.length} GTM agencies:`);
    console.log();

    console.log('✅ All tests passed!');
  } catch (error) {
    console.error('❌ Test failed:', error);
    throw error;
  }
}

testCategoryQuery()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
