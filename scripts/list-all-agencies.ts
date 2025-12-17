import { neon } from '@neondatabase/serverless';

async function listAll() {
  const DATABASE_URL = process.env.DATABASE_URL;

  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required');
  }

  const sql = neon(DATABASE_URL);

  console.log('Listing all agencies in database...\n');

  try {
    const results = await sql`
      SELECT id, slug, name, status, global_rank
      FROM companies
      WHERE status = 'published'
      ORDER BY global_rank ASC NULLS LAST, name ASC
    `;

    console.log(`Found ${results.length} published agencies:\n`);
    results.forEach((row, i) => {
      console.log(`${i + 1}. ${row.name} (slug: ${row.slug}, rank: ${row.global_rank || 'none'}, id: ${row.id})`);
    });
  } catch (error) {
    console.error('❌ Query failed:', error);
    throw error;
  }
}

listAll()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
