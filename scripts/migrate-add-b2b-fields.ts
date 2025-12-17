import { neon } from '@neondatabase/serverless';

async function migrate() {
  const DATABASE_URL = process.env.DATABASE_URL;

  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required');
  }

  const sql = neon(DATABASE_URL);

  console.log('Starting migration: Add B2B-specific fields to companies table...');

  try {
    // Add B2B-specific description and key services
    await sql`
      ALTER TABLE companies
        ADD COLUMN IF NOT EXISTS b2b_description text,
        ADD COLUMN IF NOT EXISTS key_services text[]
    `;

    console.log('✅ Migration successful!');
    console.log('Added columns:');
    console.log('  - b2b_description (text) - B2B Marketing Agency specific description');
    console.log('  - key_services (text[]) - Array of key services offered');
    console.log('');
    console.log('✅ Both columns are NULLABLE - existing records unaffected');

  } catch (error) {
    console.error('❌ Migration failed:', error);
    throw error;
  }
}

migrate()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
