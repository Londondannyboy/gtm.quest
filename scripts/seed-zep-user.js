const { ZepClient } = require('@getzep/zep-cloud');

// Read API key from env
const API_KEY = process.env.ZEP_API_KEY;
if (!API_KEY) {
  console.log('ZEP_API_KEY not set - pass it as env var');
  process.exit(1);
}

const client = new ZepClient({ apiKey: API_KEY });
const userId = 'keegan-dan-gmail';

async function main() {
  console.log('Creating user in Zep...');

  // Create user
  try {
    await client.user.add({
      userId: userId,
      email: 'keegan.dan@gmail.com',
      firstName: 'Dan',
      lastName: 'Keegan',
      metadata: {
        source: 'fractional-quest',
        createdAt: new Date().toISOString(),
      },
    });
    console.log('User created:', userId);
  } catch (e) {
    console.log('User may already exist:', e.message);
  }

  // Add skills to graph
  const skillsData = {
    type: 'professional_profile',
    person: 'Dan Keegan',
    role: 'Fractional Executive & Entrepreneur',
    skills: [
      { name: 'Product Strategy', category: 'leadership', years: 12, proficiency: 'expert' },
      { name: 'Go-to-Market', category: 'strategy', years: 10, proficiency: 'expert' },
      { name: 'Team Leadership', category: 'leadership', years: 15, proficiency: 'expert' },
      { name: 'AI/ML Product Development', category: 'technical', years: 5, proficiency: 'advanced' },
      { name: 'Startup Scaling', category: 'strategy', years: 8, proficiency: 'expert' },
      { name: 'Revenue Growth', category: 'business', years: 10, proficiency: 'expert' },
      { name: 'B2B SaaS', category: 'domain', years: 12, proficiency: 'expert' },
      { name: 'TypeScript', category: 'technical', years: 6, proficiency: 'advanced' },
      { name: 'Next.js', category: 'technical', years: 4, proficiency: 'advanced' },
      { name: 'Python', category: 'technical', years: 8, proficiency: 'advanced' },
    ],
    summary: 'Dan is a seasoned fractional executive with 15+ years of experience in product, strategy, and technology leadership.',
  };

  console.log('Adding skills to graph...');
  await client.graph.add({
    userId: userId,
    type: 'json',
    data: JSON.stringify(skillsData),
  });
  console.log('Skills added');

  // Add work experience
  const experienceData = {
    type: 'work_history',
    experiences: [
      { company: 'Quest Network', role: 'Founder & CEO', startYear: 2023, isCurrent: true, industry: 'Technology' },
      { company: 'Predeploy', role: 'Co-Founder', startYear: 2024, isCurrent: true, industry: 'AI/Dev Tools' },
      { company: 'Tech Startup (Series B)', role: 'Fractional CPO', startYear: 2022, endYear: 2023, industry: 'FinTech' },
      { company: 'Enterprise SaaS', role: 'VP Product', startYear: 2019, endYear: 2022, industry: 'SaaS' },
    ],
    summary: 'Dan has founded multiple companies and held senior product/exec roles at high-growth startups.',
  };

  console.log('Adding experience to graph...');
  await client.graph.add({
    userId: userId,
    type: 'json',
    data: JSON.stringify(experienceData),
  });
  console.log('Experience added');

  // Add preferences
  const preferencesData = {
    type: 'job_preferences',
    looking_for: ['Fractional CPO', 'Fractional CTO', 'Board Advisor'],
    industries: ['AI/ML', 'SaaS', 'FinTech', 'Climate Tech'],
    locations: ['London', 'Remote'],
    day_rate_range: '800-1500 GBP',
    availability: '2-3 days per week',
    summary: 'Open to fractional C-level roles in technology companies, particularly AI-first startups.',
  };

  console.log('Adding preferences to graph...');
  await client.graph.add({
    userId: userId,
    type: 'json',
    data: JSON.stringify(preferencesData),
  });
  console.log('Preferences added');

  // Wait a moment for indexing
  console.log('\nWaiting for Zep to index...');
  await new Promise(r => setTimeout(r, 2000));

  // Fetch back the nodes
  console.log('\nFetching user graph nodes...');
  const nodes = await client.graph.node.getByUserId(userId, {});
  console.log(`Found ${nodes.length} nodes:`);
  nodes.slice(0, 10).forEach(n => {
    console.log(`  - ${n.name} (${n.labels?.join(', ') || 'no labels'})`);
  });

  console.log('\n✅ Done! User graph populated for:', userId);
  console.log('View at: /api/graph/user?userId=' + userId);
}

main().catch(console.error);
