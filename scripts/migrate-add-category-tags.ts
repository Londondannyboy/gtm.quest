import { neon } from '@neondatabase/serverless';

async function migrate() {
  const DATABASE_URL = process.env.DATABASE_URL;

  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required');
  }

  const sql = neon(DATABASE_URL);

  console.log('Starting migration: Add category_tags to companies table...');

  try {
    // Add category_tags column
    await sql`
      ALTER TABLE companies
        ADD COLUMN IF NOT EXISTS category_tags text[]
    `;

    console.log('✅ Migration successful!');
    console.log('Added column:');
    console.log('  - category_tags (text[]) - Array of category tags (e.g., "GTM Agency", "B2B Marketing Agency")');
    console.log('');
    console.log('✅ Column is NULLABLE - existing records unaffected');

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
