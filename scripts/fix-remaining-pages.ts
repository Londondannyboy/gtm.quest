import fs from 'fs';
import path from 'path';

const pagesToFix = [
  'app/gtm-agencies-uk/page.tsx',
  'app/gtm-agencies-us/page.tsx',
  'app/gtm-agencies-london/page.tsx',
  'app/gtm-agencies-new-york/page.tsx',
  'app/gtm-agencies-sydney/page.tsx',
  'app/gtm-agencies-australia/page.tsx',
  'app/b2b-marketing-agency-uk/page.tsx',
  'app/b2b-marketing-agency-us/page.tsx',
  'app/b2b-marketing-agency-london/page.tsx',
];

console.log('Fixing remaining pages...\n');

for (const filePath of pagesToFix) {
  try {
    console.log(`Processing ${filePath}...`);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Remove brand fetching loop (the entire section)
    content = content.replace(
      /\/\/ Fetch brand assets.*?\n  const brandAssets.*?\n  for \(const agency of agencies\) \{[\s\S]*?\n  \}/m,
      '// Brand assets now stored in database - no API calls!'
    );

    // Update AgencyCard props
    content = content.replace(
      /brandAssets={brandAssets\[agency\.slug\]}/g,
      `primaryColor={(agency as any).primary_color || '#8B5CF6'}
                logoUrl={(agency as any).logo_url}
                backdropUrl={(agency as any).backdrop_url}`
    );

    // Fix tagline prop
    content = content.replace(
      /tagline={brandAssets\[agency\.slug\]\?\.slogan \|\| agency\.description}/g,
      'tagline={agency.description}'
    );

    // Fix website prop
    content = content.replace(
      /const website = agency\.website \|\| \(brandAssets\[agency\.slug\]\?\.domain.*?\)/g,
      'const website = agency.website || \'#\''
    );

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  ✓ Fixed ${filePath}`);
  } catch (error) {
    console.error(`  ✗ Error fixing ${filePath}:`, error);
  }
}

console.log('\n✅ All pages fixed!');
