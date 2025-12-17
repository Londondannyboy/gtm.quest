# Brand Assets Management

## ⚠️ CRITICAL: Preventing API Credit Depletion

**NEVER fetch from brand.dev API during page rendering!** This wastes API credits on every page load.

## The Correct Approach

### 1. Store Brand Assets in Database

Brand assets are stored in the `companies` table:
- `primary_color` - Primary brand color (hex)
- `logo_url` - Logo image URL
- `backdrop_url` - Backdrop/hero image URL
- `backdrop_secondary_url` - Secondary backdrop (optional)

### 2. Use Database Values in Pages

**CORRECT ✅**
```typescript
// Page component
const agencies = await getAgencies()

// Pass database columns directly to AgencyCard
<AgencyCard
  primaryColor={agency.primary_color || '#8B5CF6'}
  logoUrl={agency.logo_url}
  backdropUrl={agency.backdrop_url}
  // ... other props
/>
```

**WRONG ❌**
```typescript
// DON'T DO THIS - burns API credits!
const brandAssets = await fetchBrandFromBrandDev(agency.brand_dev_domain)
```

### 3. Populate Database (One Time Only)

When you have brand.dev API credits, run this ONCE:

```bash
DATABASE_URL="..." npx tsx scripts/populate-brand-data.ts
```

This fetches all brand data and stores it permanently. Never run this during page rendering!

## Pages Status

### ✅ Fixed (using database columns)
- `app/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk/page.tsx`

### ❌ Still Calling API (needs fixing)
- `app/best-gtm-agencies/page.tsx`
- `app/gtm-agencies-uk/page.tsx`
- `app/gtm-agencies-us/page.tsx`
- `app/gtm-agencies-london/page.tsx`
- `app/gtm-agencies-new-york/page.tsx`
- `app/gtm-agencies-sydney/page.tsx`
- `app/gtm-agencies-australia/page.tsx`
- `app/b2b-marketing-agency-uk/page.tsx`
- `app/b2b-marketing-agency-us/page.tsx`
- `app/b2b-marketing-agency-london/page.tsx`
- `app/agency/[slug]/page.tsx`

## AgencyCard Component

The AgencyCard component now accepts simple props:

```typescript
interface AgencyCardProps {
  primaryColor?: string      // From database
  logoUrl?: string | null    // From database
  backdropUrl?: string | null // From database
  // ... no more brandAssets object!
}
```

## Migration Scripts

- `scripts/migrate-add-brand-columns.ts` - Adds brand columns to database
- `scripts/populate-brand-data.ts` - Fetches from brand.dev and populates database (run once when you have credits)
- `scripts/check-brand-data.ts` - Checks what's currently in database

## Design Template

The current design includes:
- **Brand color border** around each agency card (4px solid)
- **Gradient background** using brand color (8% opacity)
- **Top border** using brand color (8px)
- **Logos** and **backdrops** from database URLs
- **Best For / Key Services** colored with brand color

This template is preserved in:
- `/Users/dankeegan/gtm.quest/components/AgencyCard.tsx`
- `/Users/dankeegan/gtm.quest/app/best-b2b-marketing-agency-uk-top-b2b-marketing-agencies-uk/page.tsx`

**Do not modify these files** without understanding the brand assets approach!
