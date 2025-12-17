import { neon } from '@neondatabase/serverless';

async function checkEntries() {
  const DATABASE_URL = process.env.DATABASE_URL;

  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required');
  }

  const sql = neon(DATABASE_URL);

  console.log('Checking for GTM Quest entries in database...\n');

  try {
    const results = await sql`
      SELECT slug, name, description, b2b_description
      FROM companies
      WHERE name LIKE '%GTM Quest%' OR slug LIKE '%gtm%quest%'
    `;

    console.log(`Found ${results.length} entries:\n`);
    results.forEach((row, i) => {
      console.log(`Entry ${i + 1}:`);
      console.log(`  Slug: ${row.slug}`);
      console.log(`  Name: ${row.name}`);
      console.log(`  Description: ${row.description?.substring(0, 100)}...`);
      console.log(`  B2B Description: ${row.b2b_description?.substring(0, 100)}...`);
      console.log('');
    });
  } catch (error) {
    console.error('❌ Query failed:', error);
    throw error;
  }
}

checkEntries()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
