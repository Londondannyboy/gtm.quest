import { neon } from '@neondatabase/serverless';

async function migrate() {
  const DATABASE_URL = process.env.DATABASE_URL;

  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required');
  }

  const sql = neon(DATABASE_URL);

  console.log('Adding brand asset columns to companies table...');

  try {
    await sql`
      ALTER TABLE companies
        ADD COLUMN IF NOT EXISTS primary_color text,
        ADD COLUMN IF NOT EXISTS logo_light_url text,
        ADD COLUMN IF NOT EXISTS logo_dark_url text,
        ADD COLUMN IF NOT EXISTS backdrop_url text,
        ADD COLUMN IF NOT EXISTS backdrop_secondary_url text
    `;

    console.log('✅ Migration successful!');
    console.log('Added columns:');
    console.log('  - primary_color (text) - Primary brand color');
    console.log('  - logo_light_url (text) - Light mode logo URL');
    console.log('  - logo_dark_url (text) - Dark mode logo URL');
    console.log('  - backdrop_url (text) - Primary backdrop image');
    console.log('  - backdrop_secondary_url (text) - Secondary backdrop image');

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
