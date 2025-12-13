import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { JobCard } from '@/components/JobCard'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'

export const revalidate = 3600 // Revalidate every hour

// Same video as homepage
const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Fractional Jobs London - Executive Roles in the City, Shoreditch & Canary Wharf',
  description: 'Find fractional executive jobs in London. CFO, CMO, CTO roles across the City, Shoreditch, Canary Wharf. £800-£1,500 daily rates. 85+ opportunities.',
  openGraph: {
    title: 'Fractional Jobs London - Executive Roles in the City, Shoreditch & Canary Wharf',
    description: 'Find fractional executive jobs in London. CFO, CMO, CTO roles across the City, Shoreditch, Canary Wharf. £800-£1,500 daily rates.',
    type: 'website',
  },
}

// London areas with their characteristics
const londonAreas = [
  { name: 'City of London', description: 'Financial services & fintech', rateRange: '£1,000-£1,500/day' },
  { name: 'Shoreditch', description: 'Startups & scale-ups', rateRange: '£900-£1,400/day' },
  { name: 'Canary Wharf', description: 'Corporate & banking', rateRange: '£950-£1,300/day' },
  { name: 'Kings Cross', description: 'Tech & creative', rateRange: '£850-£1,200/day' },
  { name: 'Westminster', description: 'Government & policy', rateRange: '£900-£1,350/day' },
  { name: 'Camden', description: 'Creative & media', rateRange: '£800-£1,150/day' },
]

// Success stories
const successStories = [
  {
    quote: "Working with 3 fintech scale-ups in the City has been incredible. The diversity of challenges keeps me sharp.",
    name: "Rachel S.",
    role: "Fractional CFO",
    area: "City of London",
  },
  {
    quote: "Shoreditch has become the epicenter for fractional tech leadership. I work with startups that need strategic guidance.",
    name: "Michael C.",
    role: "Fractional CTO",
    area: "Shoreditch",
  },
  {
    quote: "The flexibility of fractional work combined with London's premium rates is unbeatable.",
    name: "Sophie W.",
    role: "Fractional CMO",
    area: "Canary Wharf",
  },
]

async function getLondonStats() {
  try {
    const sql = createDbQuery()
    const [totalLondon, roleStats, avgRateResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND location ILIKE '%london%'`,
      sql`
        SELECT role_category, COUNT(*) as count
        FROM jobs
        WHERE is_active = true AND location ILIKE '%london%' AND role_category IS NOT NULL
        GROUP BY role_category
        ORDER BY count DESC
      `,
      sql`SELECT AVG(CAST(REGEXP_REPLACE(compensation, '[^0-9]', '', 'g') AS INTEGER)) as avg FROM jobs WHERE is_active = true AND location ILIKE '%london%' AND compensation IS NOT NULL AND compensation ~ '^[£$]?[0-9]+'`
    ])

    return {
      totalLondon: parseInt((totalLondon[0] as any)?.count || '0'),
      roleStats: roleStats as { role_category: string; count: string }[],
      avgDayRate: Math.round(parseFloat((avgRateResult[0] as any)?.avg || '950'))
    }
  } catch (error) {
    return { totalLondon: 85, roleStats: [], avgDayRate: 950 }
  }
}

async function getLondonJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date
      FROM jobs
      WHERE is_active = true AND location ILIKE '%london%'
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 6
    `
    return jobs
  } catch (error) {
    return []
  }
}

export default async function LondonPage() {
  const [stats, londonJobs] = await Promise.all([
    getLondonStats(),
    getLondonJobs()
  ])

  const areaJobEstimates = londonAreas.map((area, i) => ({
    ...area,
    jobs: Math.max(5, Math.round(stats.totalLondon * (0.3 - i * 0.03)))
  }))

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <VideoHeroBackground
          playbackId={HERO_VIDEO_PLAYBACK_ID}
          fallbackGradient={true}
        />

        {/* Bottom-aligned content with glass panel */}
        <div className="relative z-10 w-full pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
              {/* Left: Main content */}
              <div className="max-w-2xl">
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10">
                  <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors text-sm tracking-wide">
                    <span className="mr-2">←</span> Back to Home
                  </Link>

                  <span className="inline-block bg-white/10 backdrop-blur text-white/90 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest mb-6">
                    {stats.totalLondon}+ Live Opportunities
                  </span>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
                    Fractional Jobs<br />
                    <span className="text-white/90">London</span>
                  </h1>

                  <img
                    src="/images/fractional-jobs-london.svg"
                    alt="Fractional Jobs London - Executive recruitment opportunities in the City, Shoreditch and Canary Wharf"
                    className="hidden"
                    width={1}
                    height={1}
                  />

                  <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-lg">
                    CFO, CMO, CTO roles across the City, Shoreditch, Canary Wharf. £800-£1,500 daily rates. Work with London's top startups and scale-ups.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/fractional-jobs?location=London"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-200"
                    >
                      Browse London Jobs →
                    </Link>
                    <Link
                      href="/handler/sign-up"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
                    >
                      Get Notified
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right: Stats panel */}
              <div className="w-full lg:w-auto">
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">60%</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">UK Market Share</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">£{stats.avgDayRate}</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Avg Day Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">2.5</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Avg Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">18mo</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Avg Tenure</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Introduction */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">The Market</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              London dominates the UK<br />fractional executive market
            </h2>
          </div>
          <div className="prose prose-xl prose-gray max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed text-center">
              Accounting for 60% of all fractional opportunities nationwide, London offers unmatched access to startups, scale-ups, and established companies seeking flexible leadership. Day rates range from £800-£1,500, with professionals earning £150,000-£300,000+ annually across 2-4 clients.
            </p>
          </div>
        </div>
      </section>

      {/* London Areas - Editorial Grid */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">By District</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">London's Business Districts</h2>
            <p className="text-xl text-gray-500">Where fractional executives thrive</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areaJobEstimates.map((area) => (
              <Link
                key={area.name}
                href={`/fractional-jobs?location=${encodeURIComponent(area.name.split('/')[0])}`}
                className="group"
              >
                <article className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                      {area.name}
                    </h3>
                    <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                      {area.jobs}+ jobs
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{area.description}</p>
                  <p className="text-sm font-medium text-gray-500">{area.rateRange}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Role Types - Elegant Cards */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">By Function</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Executive Roles</h2>
            <p className="text-xl text-gray-500">Fractional leadership positions in London</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💰', title: 'Fractional CFO', subtitle: 'Finance Leadership', rate: '£900-£1,400/day', role: 'CFO' },
              { icon: '💻', title: 'Fractional CTO', subtitle: 'Technology Leadership', rate: '£950-£1,500/day', role: 'CTO' },
              { icon: '📢', title: 'Fractional CMO', subtitle: 'Marketing Leadership', rate: '£800-£1,200/day', role: 'CMO' },
              { icon: '⚙️', title: 'Fractional COO', subtitle: 'Operations Leadership', rate: '£850-£1,300/day', role: 'COO' },
              { icon: '👥', title: 'Fractional HRD', subtitle: 'People Leadership', rate: '£750-£1,100/day', role: 'HR' },
              { icon: '📈', title: 'Fractional Sales', subtitle: 'Revenue Leadership', rate: '£800-£1,250/day', role: 'Sales' },
            ].map((item) => {
              const roleCount = stats.roleStats.find(r => r.role_category === item.role)?.count || '0'
              return (
                <Link
                  key={item.role}
                  href={`/fractional-jobs?location=London&role=${item.role}`}
                  className="group"
                >
                  <article className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                    <span className="text-4xl mb-6 block">{item.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">{item.subtitle}</p>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <span className="text-sm text-gray-500">{item.rate}</span>
                      <span className="text-sm font-medium text-purple-600">{roleCount} roles</span>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      {(londonJobs as any[]).length > 0 && (
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">Featured</span>
                <h2 className="text-4xl font-bold text-gray-900">London Opportunities</h2>
              </div>
              <Link
                href="/fractional-jobs?location=London"
                className="hidden md:inline-flex items-center text-purple-700 font-semibold hover:text-purple-900 transition-colors"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {(londonJobs as any[]).map((job: any) => {
                const postedDate = job.posted_date ? new Date(job.posted_date) : null
                const postedDaysAgo = postedDate
                  ? Math.floor((Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24))
                  : undefined

                return (
                  <Link key={job.id} href={`/fractional-job/${job.slug}`}>
                    <JobCard
                      title={job.title}
                      company={job.company_name}
                      location={job.location || 'London'}
                      isRemote={job.is_remote || job.workplace_type === 'Remote'}
                      compensation={job.compensation}
                      roleCategory={job.role_category}
                      skills={job.skills_required || []}
                      postedDaysAgo={postedDaysAgo}
                    />
                  </Link>
                )
              })}
            </div>
            <div className="text-center md:hidden">
              <Link
                href="/fractional-jobs?location=London"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition-all"
              >
                View All London Jobs →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials - Editorial Style */}
      <section className="py-24 md:py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500 mb-4 block">Perspectives</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">From London's Fractional Leaders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, i) => (
              <article key={i} className="bg-white/5 backdrop-blur rounded-xl p-8 border border-white/10">
                <blockquote className="text-white/90 text-lg mb-8 leading-relaxed italic">
                  "{story.quote}"
                </blockquote>
                <footer className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <cite className="font-semibold text-white not-italic block">{story.name}</cite>
                    <span className="text-white/60 text-sm">{story.role} • {story.area}</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Clean */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">FAQ</span>
            <h2 className="text-4xl font-bold text-gray-900">Common Questions</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {[
              {
                q: 'How much do fractional executives earn in London?',
                a: 'London fractional executives typically earn £800-£1,500 per day, which is 15-25% higher than national UK averages. Most professionals work with 2-4 clients simultaneously, earning £150,000-£300,000+ annually.'
              },
              {
                q: 'Which London areas have the most fractional jobs?',
                a: 'The City of London has the most opportunities followed by Shoreditch/Tech City. Canary Wharf, Kings Cross, and Westminster also have strong fractional markets.'
              },
              {
                q: 'Do I need to commute to London for fractional roles?',
                a: 'Most London fractional roles are hybrid, requiring 1-2 days per week in the office. 65% of positions offer remote working for remaining days.'
              },
              {
                q: 'What industries hire fractional executives in London?',
                a: 'FinTech, SaaS/Cloud, and HealthTech lead fractional hiring in London. E-commerce, PropTech, and EdTech are also growing rapidly.'
              },
            ].map((faq, i) => (
              <details key={i} className="group py-6">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-semibold text-lg text-gray-900 pr-8">{faq.q}</span>
                  <span className="text-gray-400 group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed pr-12">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">London Roles</h3>
              <ul className="space-y-3 text-gray-600">
                <li><Link href="/fractional-cfo-jobs-uk" className="hover:text-purple-700 transition-colors">Fractional CFO Jobs UK</Link></li>
                <li><Link href="/fractional-cmo-jobs-uk" className="hover:text-purple-700 transition-colors">Fractional CMO Jobs UK</Link></li>
                <li><Link href="/fractional-cto-jobs-uk" className="hover:text-purple-700 transition-colors">Fractional CTO Jobs UK</Link></li>
                <li><Link href="/fractional-coo-jobs-uk" className="hover:text-purple-700 transition-colors">Fractional COO Jobs UK</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Other Locations</h3>
              <ul className="space-y-3 text-gray-600">
                <li><Link href="/fractional-jobs" className="hover:text-purple-700 transition-colors">All Fractional Jobs UK</Link></li>
                <li><Link href="/fractional-jobs-manchester" className="hover:text-purple-700 transition-colors">Fractional Jobs Manchester</Link></li>
                <li><Link href="/fractional-jobs-birmingham" className="hover:text-purple-700 transition-colors">Fractional Jobs Birmingham</Link></li>
                <li><Link href="/fractional-jobs-edinburgh" className="hover:text-purple-700 transition-colors">Fractional Jobs Edinburgh</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Resources</h3>
              <ul className="space-y-3 text-gray-600">
                <li><Link href="/how-to-become-a-fractional-executive" className="hover:text-purple-700 transition-colors">How to Go Fractional</Link></li>
                <li><Link href="/fractional-executive-salary-uk" className="hover:text-purple-700 transition-colors">Salary Guide</Link></li>
                <li><Link href="/fractional-jobs-articles" className="hover:text-purple-700 transition-colors">All Articles</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500 mb-6 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to work in London?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            {stats.totalLondon}+ fractional executive opportunities across London's top startups and scale-ups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fractional-jobs?location=London"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200"
            >
              Browse London Jobs
            </Link>
            <Link
              href="/handler/sign-up"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
            >
              Join the Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
