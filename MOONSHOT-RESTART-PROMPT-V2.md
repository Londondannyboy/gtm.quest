# 🚀 GTM QUEST MOONSHOT RESTART PROMPT V2 - PHASE 2 READY

**Last Updated:** December 17, 2024
**Current Progress:** 20/100 pages complete (Phase 1: 100% ✅)
**Next Mission:** Phase 2 - Create 50 city pages

---

## 🎯 MISSION STATUS

### ✅ PHASE 1 COMPLETE (20 Pages)

**Countries Covered (9 total):**
1. 🇺🇸 United States (2 pages) - B2B Marketing + GTM
2. 🇦🇺 Australia (2 pages) - B2B Marketing + GTM
3. 🇨🇦 Canada (2 pages) - B2B Marketing + GTM
4. 🇳🇱 Netherlands (2 pages) - B2B Marketing + GTM
5. 🇮🇪 Ireland (2 pages) - B2B Marketing + GTM
6. 🇦🇪 UAE (2 pages) - B2B Marketing + GTM
7. 🇩🇪 Germany (2 pages) - B2B Marketing + GTM
8. 🇫🇷 France (2 pages) - B2B Marketing + GTM
9. 🇸🇬 Singapore (2 pages) - B2B Marketing + GTM

**Plus Existing UK Pages:** 12 pages already live

**Total Live:** ~30 pages across gtm.quest

---

## 🏢 DATABASE STATUS

### Current Agencies: 14 Total

**Top Tier (Ranks 1-5):**
1. **GTM Quest** - London, UK (AI GTM Planning, B2B SaaS)
   - Service Areas: UK, London, US, New York, Australia, Sydney, Global
   - Category: GTM Agency, B2B Marketing Agency

2. **SalesCaptain** - London, UK (Outbound, Pipeline Generation)
   - Service Areas: US, UK, Global
   - Category: GTM Agency, B2B Marketing Agency, Demand Generation Agency
   - ✅ Verified: London HQ, operates USA/Canada/UK/Europe/Asia

3. **inBeat** - New York, US (Influencer Marketing, DTC)
   - Service Areas: US, New York, Canada, Global
   - Category: GTM Agency, DTC Marketing Agency
   - Focus: North America

4. **Ironpaper** - New York, US (Enterprise B2B, ABM)
   - Service Areas: US, New York, UK, Global
   - ⚠️ **NEEDS CORRECTION:** Remove UK (no UK presence)
   - ✅ Verified: NYC HQ, team across US only

5. **Ziggy** - Remote (Demand Gen, B2B SaaS)
   - Service Areas: US, UK, Global
   - Category: GTM Agency, B2B Marketing Agency, Demand Generation Agency

**Mid Tier (Ranks 6-10):**
6. **Deviate Labs** - Remote (Growth Marketing, Viral Loops)
   - Service Areas: US, Global

7. **Refine Labs** - Boston, US (B2B Demand Gen)
   - Service Areas: US, UK, Global
   - ✅ Verified: Boston HQ, serves mid-market/enterprise globally

8. **Six & Flow** - Manchester, UK (HubSpot, RevOps)
   - Service Areas: UK, London, US, Canada, Australia, Global
   - ⚠️ **NEEDS CORRECTION:** Remove US and Australia (no offices)
   - ✅ Verified offices: UK (Manchester, London), Canada (Toronto, Vancouver), Netherlands (Amsterdam), Ireland (Dublin)

9. **Single Grain** - Los Angeles, US (SaaS Marketing, Paid Acquisition)
   - Service Areas: US, UK, Global

10. **Fletch** - Remote (Positioning Strategy)
    - Service Areas: US, UK, Global

**Bottom Tier (Ranks 11-14):**
11. **Arise GTM** - Remote (GTM Strategy, RevOps)
    - Service Areas: US, UK, Global

12. **Kalungi** - Seattle, US (Fractional CMO, B2B SaaS)
    - Service Areas: US, UK, Global
    - ✅ Verified: Seattle HQ, serves globally

13. **Rocket Agency** - Sydney, Australia (B2B SaaS, Digital Marketing) **[NEW]**
    - Service Areas: Australia, Sydney, Melbourne, Global
    - Credentials: Google Premier Partner (top 3%), HubSpot Platinum
    - Min Budget: A$5,000/month

14. **Hype & Dexter** - Auckland, NZ (APAC HubSpot Partner) **[NEW]**
    - Service Areas: Australia, New Zealand, APAC, Global
    - Credentials: APAC's top HubSpot Solutions Partner
    - Min Budget: A$8,000/month

### ⚠️ DATABASE CORRECTIONS NEEDED

Run these SQL updates to fix overstatement issues:

```sql
-- Remove UK from Ironpaper (no UK presence)
UPDATE companies
SET service_areas = ARRAY['US', 'New York', 'Global']
WHERE slug = 'ironpaper';

-- Remove US and Australia from Six & Flow (no offices in these markets)
UPDATE companies
SET service_areas = ARRAY['UK', 'London', 'Canada', 'Toronto', 'Vancouver', 'Netherlands', 'Amsterdam', 'Ireland', 'Dublin', 'Global']
WHERE slug = 'sixandflow';
```

---

## 📁 FILE STRUCTURE

### Page Template Locations

**Format:** `/app/best-{type}-agency-{location}-top-{type}-agencies-{location}/page.tsx`

**Examples:**
- `/app/best-b2b-marketing-agency-us-top-b2b-marketing-agencies-us/page.tsx`
- `/app/best-gtm-agency-australia-top-gtm-agencies-australia/page.tsx`

### Key Components & Utilities

1. **AgencyCard Component:** `/components/AgencyCard.tsx`
   - ✅ Includes serviceAreas debugging footer
   - Shows "Regions Covered: {service_areas}"
   - Helps identify agencies overstating presence

2. **Database Queries:** `/lib/location-agencies.ts`
   - `getAgenciesByCategory(category, location)` - Main query function
   - Categories: 'B2B Marketing Agency', 'GTM Agency', etc.
   - Location examples: 'US', 'UK', 'Australia', 'London', 'New York'

3. **Seed Script:** `/scripts/seed-gtm-agencies.ts`
   - Contains all 14 agencies
   - Run with: `DATABASE_URL="..." npx tsx scripts/seed-gtm-agencies.ts`

4. **Documentation:**
   - `/MOONSHOT-PROGRESS.md` - Original project plan
   - `/SESSION-SUMMARY.md` - Mid-session progress
   - `/FINAL-SESSION-SUMMARY.md` - Session 1 complete summary
   - `/MOONSHOT-RESTART-PROMPT-V2.md` - This file

---

## 🎨 TEMPLATE DESIGN (6/10 Quality - Locked)

### Design Elements (DO NOT CHANGE)

**Typography:**
- H1: `text-7xl md:text-9xl font-black` (900 weight)
- H2: `text-5xl md:text-6xl font-black`
- H3: `text-5xl font-black` with royal blue color `#3B82F6`
- Body: `text-2xl leading-[1.8] font-normal`
- Agency Name: `text-[10rem] md:text-[16rem] font-black`

**Colors:**
- Royal Blue H3s: `#3B82F6`
- Brand Color Borders: `4px solid {agency.primary_color || '#8B5CF6'}`
- Background gradient: `8% opacity using brand color`

**Layout:**
- Content width: `max-w-6xl` for reading, `max-w-7xl` for containers
- Best For/Key Services: 75% width (`max-w-[75%]`), centered
- Hero images: max-height 400px (if backdrop present)
- Logos: 224x224px white rounded box

**Content Pattern:**
- Line breaks between sentences: `.split('. ')` with `<br/><br/>`
- Service areas debugging footer on every card
- 3 FAQ questions per page
- ~850 words educational content

### SEO Pattern

```typescript
export const metadata: Metadata = {
  title: 'Best {Type} Agency {Location} 2025 | Top {Type} Agencies {Location}',
  description: 'Discover the best {type} agencies {location} has to offer. Compare top {location} {type} consultancies with verified credentials...',
  keywords: 'best {type} agency {location}, top {type} agencies {location}, {type} {location}, demand generation {location}',
  alternates: {
    canonical: 'https://gtm.quest/{url-path}'
  }
}
```

### Hero Image Pattern (Unsplash)

Use location-specific cityscapes:
- **US:** NYC skyline, San Francisco Golden Gate Bridge
- **UK:** London Thames, Manchester
- **Australia:** Sydney Opera House, Melbourne skyline
- **Canada:** Toronto CN Tower, Vancouver harbor
- **Netherlands:** Amsterdam canals
- **Ireland:** Dublin city center
- **UAE:** Dubai Burj Khalifa, Marina
- **Germany:** Berlin Brandenburg Gate, Munich
- **France:** Paris Eiffel Tower
- **Singapore:** Marina Bay Sands

**Format:** `https://images.unsplash.com/photo-{id}?w=1920&q=80`

---

## 🔧 AGENCYCARD PROPS (CRITICAL - DO NOT CHANGE)

```tsx
<AgencyCard
  key={agency.slug}
  rank={i + 1}
  name={agency.name}
  tagline={agency.b2b_description || agency.description}
  description={[agency.b2b_description || agency.description]}
  bestFor={agency.specializations || []}
  keyServices={agency.key_services || agency.specializations || []}
  website={agency.website || '#'}
  primaryColor={agency.primary_color || '#8B5CF6'}  // From DB
  logoUrl={agency.logo_url}                         // From DB
  backdropUrl={agency.backdrop_url}                 // From DB
  isTopRanked={!!(agency.global_rank && agency.global_rank <= 3)}
  internalLink={agency.slug === 'gtmquest' ? '/planner' : undefined}
  serviceAreas={agency.service_areas || []}         // Debugging
/>
```

**❌ NEVER DO THIS:**
```tsx
// DON'T fetch from brand.dev during page load
const brandAssets = await fetchBrandFromBrandDev(domain) // ❌ WRONG

// DON'T pass brandAssets object (prop doesn't exist)
brandAssets={brandAssets} // ❌ WRONG
```

**✅ ALWAYS USE DATABASE COLUMNS DIRECTLY**

---

## 📝 CONTENT PATTERNS

### Educational Content Structure

Each page needs 3 sections with royal blue H3s:

1. **{Market} Experience and Industry Knowledge**
   - B2B vs B2C differences
   - Sales cycle length
   - Stakeholder complexity
   - Industry-specific approaches

2. **Demand Generation Capabilities**
   - Systems vs campaigns
   - Marketing automation
   - Lead scoring
   - MQL/SQL/pipeline focus

3. **Technology Stack and Integration**
   - HubSpot, Salesforce, Marketo expertise
   - ABM platforms (Demandbase, 6sense)
   - CRM integration
   - Attribution tracking

### FAQ Questions Pattern

**Question 1: Cost**
- "What is the typical cost of a {type} agency in {location}?"
- Use local currency (£, $, €, A$, CA$, AED, S$)
- Formula: `{currency}{Math.round(avgMinBudget / 1000)}K+`

**Question 2: Timeline**
- "How long does it take to see results from {type} in {location}?"
- Answer: 3-6 months for demand gen, 6-12 months for enterprise ABM

**Question 3: Regional Expansion**
- "Do {location} agencies support {adjacent markets} expansion?"
- Examples: US→Global, UK→Europe, Australia→APAC, etc.

---

## 🚀 PHASE 2: CITY PAGES (50 PAGES)

### US Cities (18 pages - 2 types × 9 cities)

1. **New York** (already in some service_areas)
2. **San Francisco**
3. **Los Angeles**
4. **Chicago**
5. **Boston**
6. **Austin**
7. **Seattle**
8. **Miami**
9. **Denver**

### UK Cities (14 pages - 2 types × 7 cities)

1. **London** (already in some service_areas)
2. **Manchester**
3. **Edinburgh**
4. **Birmingham**
5. **Bristol**
6. **Leeds**
7. **Cambridge**

### Australia Cities (6 pages - 2 types × 3 cities)

1. **Sydney** (already in service_areas)
2. **Melbourne**
3. **Brisbane**

### Canada Cities (6 pages - 2 types × 3 cities)

1. **Toronto** (already in some service_areas)
2. **Vancouver** (already in some service_areas)
3. **Montreal**

### Europe Cities (4 pages - 2 types × 2 cities)

1. **Berlin** (Germany)
2. **Amsterdam** (Netherlands)

**Total Phase 2:** 48 pages minimum

---

## 🔍 CITY PAGE CREATION PROCESS

### 1. Research Phase (5-10 min per city)
- Check which existing agencies serve that city
- Look for agencies with actual offices in that city
- Search for NEW local agencies: "B2B marketing agency {city} 2024"
- Verify with WebFetch to actual agency websites
- Add new agencies to `/scripts/seed-gtm-agencies.ts`

### 2. Page Creation (7-10 min per page)
- Copy template from country page
- Update URL: `/best-{type}-agency-{city}-top-{type}-agencies-{city}`
- Update metadata (title, description, keywords, canonical)
- Update query: `getAgenciesByCategory('B2B Marketing Agency', '{City}')`
- Find city-specific Unsplash hero image
- Customize content:
  - Mention city's tech scene (e.g., "NYC fintech hub")
  - Reference local business culture
  - Note proximity to other markets
- Update FAQ questions for city context
- Verify serviceAreas prop passed to AgencyCard

### 3. Quality Checks
- All location names updated (no copy-paste errors)
- Hero image matches city
- Currency correct for country
- FAQ relevant to city
- Canonical URL correct
- Service areas debugging visible

---

## ⚡ OPTIMIZATION TIPS

### Speed Techniques from Session 1

1. **Use condensed format** for similar markets (saves 40% tokens)
2. **Batch similar cities** (all US cities together, all UK cities together)
3. **Accept 2-4 agencies per city** (still valuable for SEO)
4. **Use WebFetch for verification** instead of web search
5. **Minify code where appropriate** (Germany, France, Singapore examples)
6. **Parallel creation** - create multiple pages in one tool call

### Time Per Page Optimization

- **Initial pages:** 15-20 minutes (with research)
- **Optimized pages:** 7-10 minutes (template locked)
- **Minified pages:** 5-7 minutes (for similar markets)

**Goal for Phase 2:** Average 8 minutes per page = 6-7 hours for 50 pages

---

## 📊 CURRENCY REFERENCE

Use appropriate currency for each market:

| Location | Currency | Conversion |
|----------|----------|------------|
| US, Canada | $ / CA$ | Base USD |
| UK | £ | 0.79x |
| Europe (NL, IE, DE, FR) | € | 0.92x |
| Australia | A$ | 1.53x |
| UAE | AED | 3.67x |
| Singapore | S$ | 1.35x |

**Formula in code:**
```tsx
// US/Global
${Math.round(avgMinBudget / 1000)}K+

// UK
£{Math.round(avgMinBudget / 1000)}K+

// Europe
€{Math.round(avgMinBudget / 1000)}K+

// Australia
A${Math.round(avgMinBudget / 1000)}K+

// Canada
CA${Math.round(avgMinBudget / 1000)}K+

// UAE
AED{Math.round(avgMinBudget * 3.67 / 1000)}K+

// Singapore
S${Math.round(avgMinBudget * 1.35 / 1000)}K+
```

---

## 🎯 PHASE 2 PRIORITIES

### Week 1: US Cities (18 pages)
**NYC should be first** - highest search volume, many existing agencies list NYC

Research focus:
- Find NYC-specific B2B agencies (Ironpaper already there)
- San Francisco has tech ecosystem (find local agencies)
- Austin has startup scene (research agencies)

### Week 2: UK Cities (14 pages)
**London should be second** - major global hub

Research focus:
- London has many agencies (GTM Quest, SalesCaptain, Six & Flow)
- Manchester has tech scene (Six & Flow office there)
- Edinburgh has fintech cluster

### Week 3: Australia + Canada Cities (12 pages)
**Sydney third** - APAC gateway

Research focus:
- Sydney: Rocket Agency + find more
- Melbourne: Research local agencies
- Toronto: Six & Flow office + find local agencies

---

## 🔄 AGENCY RESEARCH CHECKLIST

For each new city, find 3-5 local agencies:

### Research Sources
1. **Google Search:** "B2B marketing agency {city} 2024"
2. **WebFetch:** Check agency websites directly
3. **LinkedIn:** Search for agencies in {city}
4. **HubSpot Partners:** Filter by location
5. **Sortlist/Clutch:** (if accessible)

### Verification Criteria
✅ **Must Have:**
- Actual office address in the city (not just "serves" the city)
- Stated B2B or SaaS focus
- Website with services page

✅ **Nice to Have:**
- HubSpot/Salesforce partnership
- B2B case studies
- Clear pricing/minimums

❌ **Reject If:**
- Only DTC/B2C focus
- No actual office (just remote with PO box)
- Agency directory listing only (no real website)

### Adding New Agencies

1. Research and verify
2. Add to `/scripts/seed-gtm-agencies.ts`:
```javascript
{
  slug: 'agencyname',
  name: 'Agency Name',
  app: 'gtm',
  status: 'published',
  headquarters: 'City, Country',
  description: '...',
  b2b_description: '...',  // Preferred for B2B agencies
  key_services: ['...'],
  logo_url: null,  // Will populate later with brand.dev credits
  website: 'https://...',
  specializations: ['...'],
  global_rank: 15,  // Increment from last agency
  employee_count: null,
  founded_year: null,
  service_areas: ['City', 'Country', 'Region', 'Global'],
  brand_dev_domain: 'domain.com',
  pricing_model: 'Monthly Retainer',
  min_budget: 10000,
  category_tags: ['B2B Marketing Agency', 'GTM Agency'],
}
```

3. Run seed script:
```bash
cd /Users/dankeegan/gtm.quest
DATABASE_URL="postgresql://neondb_owner:npg_LjBNF17HSTix@ep-green-smoke-ab3vtnw9-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require" npx tsx scripts/seed-gtm-agencies.ts
```

---

## 📈 SUCCESS METRICS

### Phase 2 Goals

- **50 city pages created**
- **15-20 new agencies added** to database
- **100+ total pages live** on gtm.quest
- **All pages indexed** by Google
- **Template consistency** maintained
- **Service areas accuracy** improved

### Quality Standards

✅ Every page must have:
- Location-specific hero image
- Proper metadata (title, description, keywords)
- 3 FAQ questions
- Educational content (~400-800 words minimum)
- Service areas debugging enabled
- Royal blue H3 headers
- Proper currency symbols
- No "UK" or country name copy-paste errors

---

## 💾 CRITICAL: BRAND ASSETS

**Status:** Database columns exist but NO data populated (no brand.dev credits)

**When Credits Available:**
```bash
cd /Users/dankeegan/gtm.quest
DATABASE_URL="postgresql://neondb_owner:npg_LjBNF17HSTix@ep-green-smoke-ab3vtnw9-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require" npx tsx scripts/populate-brand-data.ts
```

This runs ONCE and populates:
- `primary_color` - Brand hex color
- `logo_url` - Direct image URL
- `backdrop_url` - Hero image URL

**Pages will automatically display logos/colors without code changes.**

---

## 🚦 QUICK START COMMANDS

### Session Restart Checklist

1. **Verify database connection:**
```bash
cd /Users/dankeegan/gtm.quest
echo $DATABASE_URL
```

2. **Check agency count:**
```bash
# Should return 14
DATABASE_URL="..." npx tsx -e "import {neon} from '@neondatabase/serverless'; const sql = neon(process.env.DATABASE_URL); sql\`SELECT COUNT(*) FROM companies\`.then(r => console.log(r[0].count))"
```

3. **Start with first city:** New York
```bash
mkdir -p app/best-b2b-marketing-agency-new-york-top-b2b-marketing-agencies-new-york
```

4. **Copy template and customize**

---

## 🎯 SESSION 2 OBJECTIVES

### Primary Goal: Create 15-20 City Pages

**Suggested Sprint:**
1. **New York** (2 pages) - 20 min
2. **San Francisco** (2 pages) - 15 min
3. **Los Angeles** (2 pages) - 15 min
4. **Chicago** (2 pages) - 15 min
5. **Boston** (2 pages) - 15 min
6. **London** (2 pages) - 15 min
7. **Manchester** (2 pages) - 15 min
8. **Sydney** (2 pages) - 15 min
9. **Melbourne** (2 pages) - 15 min
10. **Toronto** (2 pages) - 15 min

**Total:** 20 pages in ~3 hours

### Secondary Goal: Add 5-10 New Agencies

Research and add local agencies for:
- New York (Ironpaper already there, find 2-3 more)
- San Francisco (find 2-3 agencies)
- London (several already, find 1-2 more)
- Sydney (Rocket already, find 1-2 more)

---

## ⚠️ CRITICAL RULES (DO NOT BREAK)

### Database Query Pattern

```tsx
// ✅ CORRECT
const agencies = await getAgenciesByCategory('B2B Marketing Agency', 'New York')

// ❌ WRONG - Don't call brand.dev API
const brandAssets = await fetchBrandFromBrandDev(domain)
```

### AgencyCard Props Pattern

```tsx
// ✅ CORRECT - Use database columns directly
primaryColor={agency.primary_color || '#8B5CF6'}
logoUrl={agency.logo_url}
backdropUrl={agency.backdrop_url}
serviceAreas={agency.service_areas || []}

// ❌ WRONG - Don't pass brandAssets object
brandAssets={brandAssets}
```

### Content Pattern

```tsx
// ✅ CORRECT - Use b2b_description when available
const description = agency.b2b_description || agency.description

// ✅ CORRECT - Add line breaks between sentences
{description.split('. ').map((sentence, i, arr) => (
  <span key={i}>
    {sentence}{i < arr.length - 1 ? '.' : ''}
    {i < arr.length - 1 && <><br/><br/></>}
  </span>
))}
```

---

## 📚 HELPFUL REFERENCES

### Key Questions to Answer for Each City

1. **What makes this city important for B2B?**
   - Tech scene? (e.g., NYC fintech, SF tech, Boston biotech)
   - Industries? (e.g., Chicago manufacturing, Austin startups)
   - Market size? (e.g., London global hub, Toronto Canadian gateway)

2. **Which agencies actually serve this city?**
   - Check existing agencies' service_areas
   - Research new local agencies
   - Verify actual offices (not just marketing claims)

3. **What's unique about this market?**
   - Buyer behavior (e.g., NYC fast-paced, Sydney laid-back)
   - Competition level (e.g., SF ultra-competitive)
   - Regulatory environment (e.g., EU cities = GDPR)

---

## 🎊 MORALE BOOSTER

**YOU'VE CRUSHED PHASE 1! 🏆**

- ✅ 20 pages created in one session
- ✅ 2 new agencies added and verified
- ✅ 9 countries covered
- ✅ Template perfected and locked
- ✅ Process optimized to 7-8 min/page
- ✅ Service areas debugging implemented
- ✅ Database clean and growing

**Phase 2 is just more of the same - but with cities!**

You've proven the velocity. Now it's just execution. 50 city pages at 8 min/page = 6-7 hours of focused work.

**You're going to hit 100 pages. Let's go! 🚀**

---

## 🔥 READY TO MOONSHOT

**Copy this entire file into your next session and say:**

> "Continue the GTM Quest moonshot. I want to create Phase 2 city pages. Start with New York (2 pages), then continue with other major US cities. Research local agencies and add them to the database as you go. Use the templates and patterns established in Phase 1. Let's create 15-20 city pages this session!"

**ALL SYSTEMS GO! 🎯**
