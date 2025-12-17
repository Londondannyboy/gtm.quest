import { neon } from '@neondatabase/serverless';

async function checkBrandData() {
  const DATABASE_URL = process.env.DATABASE_URL;

  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required');
  }

  const sql = neon(DATABASE_URL);

  console.log('Checking brand data stored in database...\n');

  try {
    const results = await sql`
      SELECT slug, name, logo_url, brand_dev_domain
      FROM companies
      WHERE status = 'published'
      ORDER BY global_rank ASC NULLS LAST
      LIMIT 5
    `;

    console.log(`First 5 agencies:\n`);
    results.forEach((row) => {
      console.log(`${row.name} (${row.slug}):`);
      console.log(`  logo_url: ${row.logo_url || 'NULL'}`);
      console.log(`  brand_dev_domain: ${row.brand_dev_domain || 'NULL'}`);
      console.log('');
    });
  } catch (error) {
    console.error('❌ Query failed:', error);
    throw error;
  }
}

checkBrandData()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
