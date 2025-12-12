import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CFO Jobs UK 2025 - Part-Time Finance Leadership Roles',
  description: 'Find fractional CFO jobs in the UK. Part-time Chief Financial Officer positions paying £800-£1,500/day. Browse 50+ live CFO roles for experienced finance leaders.',
  keywords: 'fractional cfo jobs uk, fractional cfo jobs, part time cfo jobs, fractional cfo uk, cfo jobs uk',
  openGraph: {
    title: 'Fractional CFO Jobs UK 2025 - Part-Time Finance Leadership',
    description: 'Find fractional CFO jobs in the UK. Part-time CFO positions paying £800-£1,500/day.',
    images: ['/images/fractional-cfo-jobs-uk.jpg'],
  },
}

async function getCfoStats() {
  try {
    const sql = createDbQuery()
    const result = await sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category ILIKE '%cfo%' OR title ILIKE '%cfo%' OR title ILIKE '%chief financial%' OR title ILIKE '%finance director%')`
    return parseInt((result[0] as any)?.count || '0')
  } catch {
    return 45
  }
}

async function getCfoJobs() {
  try {
    const sql = createDbQuery()
    return await sql`
      SELECT id, slug, title, company_name, location, compensation, posted_date
      FROM jobs
      WHERE is_active = true AND (role_category ILIKE '%cfo%' OR title ILIKE '%cfo%' OR title ILIKE '%chief financial%' OR title ILIKE '%finance director%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 6
    `
  } catch {
    return []
  }
}

export default async function FractionalCfoJobsUkPage() {
  const [jobCount, jobs] = await Promise.all([getCfoStats(), getCfoJobs()])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-800 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-emerald-200 hover:text-white mb-6 inline-block">← Back to Home</Link>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Fractional CFO Jobs UK</h1>
          <p className="text-xl text-emerald-100 mb-8">
            Find part-time Chief Financial Officer roles in the UK. Browse {jobCount}+ live fractional CFO jobs paying £800-£1,500 per day.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/fractional-jobs?role=CFO" className="px-8 py-4 bg-white text-emerald-900 rounded-lg font-semibold hover:bg-emerald-50">
              Browse All CFO Jobs
            </Link>
            <Link href="/fractional-cfo-salary" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10">
              CFO Salary Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-emerald-700">{jobCount}+</div>
              <div className="text-gray-600">Live CFO Jobs</div>
            </div>
            <div>
              <div className="text-4xl font-black text-emerald-700">£1,050</div>
              <div className="text-gray-600">Avg Day Rate</div>
            </div>
            <div>
              <div className="text-4xl font-black text-emerald-700">2-3</div>
              <div className="text-gray-600">Days Per Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Image */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Fractional CFO jobs UK - finance executive reviewing company financial reports"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Main Content - 750+ words */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-emerald">
          <h2>What Are Fractional CFO Jobs?</h2>
          <p>
            <strong>Fractional CFO jobs</strong> are part-time Chief Financial Officer positions where experienced finance leaders provide strategic financial guidance to multiple companies simultaneously. Rather than committing to a single full-time role, fractional CFOs work 1-3 days per week with each client, offering C-suite expertise at a fraction of the cost of a permanent hire.
          </p>
          <p>
            The UK market for <strong>fractional CFO jobs</strong> has grown by over 180% in the past three years. This surge reflects a fundamental shift in how companies access senior finance talent, particularly among startups, scale-ups, and SMEs that need experienced financial leadership but cannot justify or afford a full-time CFO salary of £150,000-£300,000.
          </p>

          <h2>Why Fractional CFO Jobs Are Growing in the UK</h2>
          <p>Several factors are driving the rapid expansion of <strong>fractional CFO jobs UK</strong>:</p>
          <ul>
            <li><strong>Cost efficiency:</strong> Companies access experienced CFO expertise for £2,000-£5,000 per week instead of £12,500+ monthly for a full-time hire</li>
            <li><strong>Flexibility:</strong> Businesses scale finance leadership up or down based on current needs—fundraising, M&A, or steady-state operations</li>
            <li><strong>Quality of talent:</strong> Fractional CFOs often have more diverse experience than permanent hires, having worked across multiple industries and company stages</li>
            <li><strong>Speed to impact:</strong> No lengthy recruitment processes—experienced CFOs can start adding value within days</li>
            <li><strong>PE and VC influence:</strong> Private equity and venture capital firms increasingly mandate fractional CFOs across their portfolios</li>
          </ul>

          <h2>Types of Fractional CFO Jobs Available</h2>
          <p>The UK <strong>fractional CFO jobs</strong> market offers diverse opportunities:</p>
          <ul>
            <li><strong>Startup CFO:</strong> Series A-C companies needing fundraising support, financial modelling, and investor relations</li>
            <li><strong>PE Portfolio CFO:</strong> Private equity-backed businesses requiring financial transformation and value creation</li>
            <li><strong>Scale-up CFO:</strong> £5-50m revenue companies professionalising their finance function</li>
            <li><strong>Turnaround CFO:</strong> Distressed businesses needing cash flow management and restructuring expertise</li>
            <li><strong>Exit-ready CFO:</strong> Companies preparing for sale or IPO requiring due diligence preparation</li>
          </ul>

          <h2>Fractional CFO Jobs by Location</h2>
          <p>While London dominates the <strong>fractional CFO jobs UK</strong> market with approximately 60% of all roles, opportunities exist across the country:</p>
          <ul>
            <li><strong>London (City/Canary Wharf):</strong> Financial services, fintech, PE/VC—premium rates £1,200-£1,500/day</li>
            <li><strong>London (Shoreditch/Tech City):</strong> Startups and scale-ups—rates £1,000-£1,300/day</li>
            <li><strong>Manchester:</strong> Growing tech scene, professional services—rates £800-£1,100/day</li>
            <li><strong>Edinburgh:</strong> Financial services hub, tech companies—rates £800-£1,100/day</li>
            <li><strong>Birmingham, Bristol, Leeds:</strong> Regional business centres—rates £750-£1,000/day</li>
            <li><strong>Remote UK:</strong> Increasing availability—rates £750-£1,000/day</li>
          </ul>

          <h2>Fractional CFO Jobs by Industry</h2>
          <p>High-demand sectors for <strong>fractional CFO jobs</strong> include:</p>
          <ul>
            <li><strong>FinTech:</strong> Complex regulatory requirements and investor expectations drive strong demand (£1,100-£1,400/day)</li>
            <li><strong>SaaS / Technology:</strong> Subscription metrics, unit economics, and rapid scaling (£1,000-£1,300/day)</li>
            <li><strong>E-commerce / DTC:</strong> Working capital management and marketplace economics (£850-£1,150/day)</li>
            <li><strong>Healthcare / MedTech:</strong> Compliance-heavy environments requiring specialist knowledge (£950-£1,250/day)</li>
            <li><strong>Professional Services:</strong> Consultancies and agencies building internal finance capability (£800-£1,100/day)</li>
          </ul>

          <h2>How to Find Fractional CFO Jobs UK</h2>
          <p>The best channels for finding <strong>fractional CFO jobs in the UK</strong> include:</p>
          <ul>
            <li><strong>Specialist platforms:</strong> <Link href="/fractional-jobs">Fractional Quest</Link> curates verified CFO opportunities</li>
            <li><strong>PE/VC networks:</strong> Building relationships with investors who need CFOs for portfolio companies</li>
            <li><strong>Fractional communities:</strong> Groups like The Fractional CFO Network and CFO Centre</li>
            <li><strong>LinkedIn:</strong> Direct outreach and content marketing establishing expertise</li>
            <li><strong>Referrals:</strong> Most established fractional CFOs get 70%+ of work through referrals</li>
          </ul>

          <h2>Requirements for Fractional CFO Jobs</h2>
          <p>Successful candidates for <strong>fractional CFO jobs UK</strong> typically have:</p>
          <ul>
            <li>15+ years of finance experience with 5+ years in CFO or Finance Director roles</li>
            <li>Professional qualifications (ACA, ACCA, CIMA)</li>
            <li>Fundraising experience (Series A-C, debt facilities)</li>
            <li>M&A and due diligence expertise</li>
            <li>Strong commercial acumen beyond pure accounting</li>
            <li>Excellent stakeholder management and board communication skills</li>
          </ul>
        </div>
      </article>

      {/* Live Jobs */}
      {jobs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Fractional CFO Jobs UK</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {jobs.map((job: any) => (
                <Link
                  key={job.id}
                  href={`/job/${job.slug}`}
                  className="bg-white rounded-xl p-6 border hover:border-emerald-300 hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-2">{job.company_name}</p>
                  <p className="text-gray-600 text-sm">{job.location}</p>
                  {job.compensation && <p className="text-emerald-700 font-semibold mt-2">{job.compensation}</p>}
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/fractional-jobs?role=CFO" className="px-8 py-4 bg-emerald-700 text-white rounded-lg font-semibold hover:bg-emerald-800">
                View All CFO Jobs →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Fractional CFO Role?</h2>
          <p className="text-emerald-100 mb-8">Create your profile to get matched with companies seeking fractional finance leadership.</p>
          <div className="flex justify-center gap-4">
            <Link href="/fractional-jobs?role=CFO" className="px-8 py-4 bg-white text-emerald-900 rounded-lg font-semibold hover:bg-emerald-50">
              Browse CFO Jobs
            </Link>
            <Link href="/fractional-cfo-salary" className="px-8 py-4 border-2 border-white rounded-lg font-semibold hover:bg-white/10">
              CFO Salary Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/part-time-cfo" className="px-4 py-2 bg-white rounded-lg border hover:border-emerald-300">Part-Time CFO Guide →</Link>
            <Link href="/fractional-cfo-salary" className="px-4 py-2 bg-white rounded-lg border hover:border-emerald-300">CFO Salary Guide →</Link>
            <Link href="/fractional-jobs-london" className="px-4 py-2 bg-white rounded-lg border hover:border-emerald-300">CFO Jobs London →</Link>
            <Link href="/fractional-cmo-jobs-uk" className="px-4 py-2 bg-white rounded-lg border hover:border-purple-300">CMO Jobs UK →</Link>
            <Link href="/fractional-cto-jobs-uk" className="px-4 py-2 bg-white rounded-lg border hover:border-blue-300">CTO Jobs UK →</Link>
            <Link href="/fractional-coo-jobs-uk" className="px-4 py-2 bg-white rounded-lg border hover:border-orange-300">COO Jobs UK →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
