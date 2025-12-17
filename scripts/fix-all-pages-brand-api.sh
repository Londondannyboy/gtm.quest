#!/bin/bash

# Script to remove brand.dev API calls from all pages
# and update them to use database columns instead

echo "Fixing all pages to use database brand columns..."

# List of pages to fix
pages=(
  "app/best-gtm-agencies/page.tsx"
  "app/gtm-agencies-uk/page.tsx"
  "app/gtm-agencies-us/page.tsx"
  "app/gtm-agencies-london/page.tsx"
  "app/gtm-agencies-new-york/page.tsx"
  "app/gtm-agencies-sydney/page.tsx"
  "app/gtm-agencies-australia/page.tsx"
  "app/b2b-marketing-agency-uk/page.tsx"
  "app/b2b-marketing-agency-us/page.tsx"
  "app/b2b-marketing-agency-london/page.tsx"
)

for page in "${pages[@]}"; do
  echo "Processing $page..."

  # Remove brand-api import
  sed -i '' '/fetchBrandFromBrandDev.*brand-api/d' "$page"
  sed -i '' '/BrandAssets.*brand-api/d' "$page"

  # Remove brand fetching loop (the entire section from "const brandAssets" to the closing brace)
  # This is tricky with sed, so we'll note it needs manual review

  echo "  ✓ Removed imports from $page (manual review needed for brand fetching loop)"
done

echo ""
echo "Done! Pages updated. Please manually review each page to:"
echo "1. Remove the brandAssets fetching loop"
echo "2. Update AgencyCard props to use database columns (primary_color, logo_url, backdrop_url)"
