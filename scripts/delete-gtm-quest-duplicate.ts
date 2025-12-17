import { neon } from '@neondatabase/serverless';

async function deleteDuplicate() {
  const DATABASE_URL = process.env.DATABASE_URL;

  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required');
  }

  const sql = neon(DATABASE_URL);

  console.log('Deleting gtm_quest duplicate from companies table...');

  try {
    await sql`
      DELETE FROM companies
      WHERE slug = 'gtm_quest'
    `;

    console.log('✅ Successfully deleted gtm_quest duplicate');
  } catch (error) {
    console.error('❌ Deletion failed:', error);
    throw error;
  }
}

deleteDuplicate()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
