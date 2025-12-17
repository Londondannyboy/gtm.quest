import { neon } from '@neondatabase/serverless';
import { fetchBrandFromBrandDev, getBestLogo, getBestBackdrop, getSecondBackdrop, getPrimaryColor } from '../lib/brand-api';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function populate() {
  const DATABASE_URL = process.env.DATABASE_URL;

  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required');
  }

  const sql = neon(DATABASE_URL);

  console.log('Fetching and populating brand data...\n');

  try {
    const agencies = await sql`
      SELECT slug, name, brand_dev_domain
      FROM companies
      WHERE status = 'published' AND brand_dev_domain IS NOT NULL
    `;

    console.log(`Processing ${agencies.length} agencies...\n`);

    for (const agency of agencies) {
      try {
        console.log(`Fetching brand for ${agency.name} (${agency.brand_dev_domain})...`);

        const brandAssets = await fetchBrandFromBrandDev(agency.brand_dev_domain);

        if (brandAssets) {
          const primaryColor = getPrimaryColor(brandAssets);
          const logoUrl = getBestLogo(brandAssets);
          const backdropUrl = getBestBackdrop(brandAssets);
          const secondBackdropUrl = getSecondBackdrop(brandAssets);

          await sql`
            UPDATE companies
            SET
              primary_color = ${primaryColor},
              logo_url = ${logoUrl},
              backdrop_url = ${backdropUrl},
              backdrop_secondary_url = ${secondBackdropUrl}
            WHERE slug = ${agency.slug}
          `;

          console.log(`  ✓ Updated ${agency.name}`);
          console.log(`    Color: ${primaryColor}`);
          console.log(`    Logo: ${logoUrl ? 'yes' : 'no'}`);
          console.log(`    Backdrop: ${backdropUrl ? 'yes' : 'no'}`);
        } else {
          console.log(`  ✗ No brand data returned for ${agency.name}`);
        }

        await sleep(500); // Rate limiting
        console.log('');
      } catch (error) {
        console.error(`  ✗ Error processing ${agency.name}:`, error);
      }
    }

    console.log('\n✅ Brand data population complete!');

  } catch (error) {
    console.error('❌ Population failed:', error);
    throw error;
  }
}

populate()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
