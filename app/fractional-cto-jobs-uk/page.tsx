import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CTO Jobs UK 2025 - Part-Time Technology Leadership Roles',
  description: 'Find fractional CTO jobs in the UK. Part-time Chief Technology Officer positions paying £800-£1,500/day. Browse 35+ live CTO roles for experienced tech leaders.',
  keywords: 'fractional cto jobs uk, fractional cto jobs, part time cto jobs, fractional cto uk, cto jobs uk',
  openGraph: {
    title: 'Fractional CTO Jobs UK 2025 - Part-Time Technology Leadership',
    description: 'Find fractional CTO jobs in the UK. Part-time CTO positions paying £800-£1,500/day.',
    images: ['/images/fractional-cto-jobs-uk.jpg'],
  },
}

async function getCtoStats() {
  try {
    const sql = createDbQuery()
    const result = await sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category ILIKE '%cto%' OR title ILIKE '%cto%' OR title ILIKE '%chief technology%' OR title ILIKE '%technology director%' OR title ILIKE '%tech lead%')`
    return parseInt((result[0] as any)?.count || '0')
  } catch {
    return 35
  }
}

async function getCtoJobs() {
  try {
    const sql = createDbQuery()
    return await sql`
      SELECT id, slug, title, company_name, location, compensation, posted_date
      FROM jobs
      WHERE is_active = true AND (role_category ILIKE '%cto%' OR title ILIKE '%cto%' OR title ILIKE '%chief technology%' OR title ILIKE '%technology director%' OR title ILIKE '%tech lead%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 6
    `
  } catch {
    return []
  }
}

export default async function FractionalCtoJobsUkPage() {
  const [jobCount, jobs] = await Promise.all([getCtoStats(), getCtoJobs()])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-blue-200 hover:text-white mb-6 inline-block">← Back to Home</Link>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Fractional CTO Jobs UK</h1>
          <p className="text-xl text-blue-100 mb-8">
            Find part-time Chief Technology Officer roles in the UK. Browse {jobCount}+ live fractional CTO jobs paying £800-£1,500 per day.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/fractional-jobs?role=CTO" className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50">
              Browse All CTO Jobs
            </Link>
            <Link href="/fractional-jobs-tech" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10">
              Tech Industry Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-blue-700">{jobCount}+</div>
              <div className="text-gray-600">Live CTO Jobs</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-700">£1,100</div>
              <div className="text-gray-600">Avg Day Rate</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-700">2-3</div>
              <div className="text-gray-600">Days Per Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Image */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Fractional CTO jobs UK - technology executive reviewing code and architecture"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Main Content - 750+ words */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-blue">
          <h2>What Are Fractional CTO Jobs?</h2>
          <p>
            <strong>Fractional CTO jobs</strong> are part-time Chief Technology Officer positions where experienced technology leaders provide strategic technical guidance to multiple companies simultaneously. Instead of committing full-time to one company, fractional CTOs work 1-3 days per week with each client, offering senior tech leadership at a fraction of the cost of a permanent hire.
          </p>
          <p>
            The UK market for <strong>fractional CTO jobs</strong> has grown significantly, driven by non-technical founders, digital transformation initiatives, and the need for expert technical due diligence. Companies that previously couldn't afford senior tech leadership now access world-class CTOs paying £800-£1,500 per day rather than £180,000-£350,000 annually.
          </p>

          <h2>Why Fractional CTO Jobs Are Growing in the UK</h2>
          <p>Several factors drive the expansion of <strong>fractional CTO jobs UK</strong>:</p>
          <ul>
            <li><strong>Non-technical founders:</strong> First-time founders need experienced technical leadership without diluting equity</li>
            <li><strong>Digital transformation:</strong> Traditional businesses undergoing tech modernisation need strategic guidance</li>
            <li><strong>Technical due diligence:</strong> VCs and PEs require independent tech assessment for investments</li>
            <li><strong>Team scaling:</strong> Companies need CTOs to build engineering teams from 2 to 20+</li>
            <li><strong>Architecture decisions:</strong> Critical build vs buy and technology stack decisions require experienced input</li>
          </ul>

          <h2>Types of Fractional CTO Jobs Available</h2>
          <p>The UK <strong>fractional CTO jobs</strong> market offers diverse opportunities:</p>
          <ul>
            <li><strong>Startup CTO:</strong> Building MVP, hiring first engineers, establishing tech culture</li>
            <li><strong>Scale-up CTO:</strong> Scaling architecture, building engineering teams, improving velocity</li>
            <li><strong>Transformation CTO:</strong> Leading digital transformation in traditional businesses</li>
            <li><strong>Due Diligence CTO:</strong> Technical assessment for M&A, investment, or audits</li>
            <li><strong>Interim CTO:</strong> Bridge leadership during CTO transitions or searches</li>
            <li><strong>Advisory CTO:</strong> Board-level technology guidance and strategy</li>
          </ul>

          <h2>Fractional CTO Jobs by Location</h2>
          <p>Geographic distribution of <strong>fractional CTO jobs UK</strong>:</p>
          <ul>
            <li><strong>London (Shoreditch/Tech City):</strong> Startup ecosystem hub—rates £1,000-£1,500/day</li>
            <li><strong>London (City/Canary Wharf):</strong> FinTech and financial services—rates £1,000-£1,400/day</li>
            <li><strong>Cambridge:</strong> Deep tech and AI companies—rates £900-£1,300/day</li>
            <li><strong>Manchester:</strong> Growing tech scene—rates £800-£1,100/day</li>
            <li><strong>Edinburgh:</strong> FinTech and data companies—rates £800-£1,100/day</li>
            <li><strong>Bristol:</strong> Creative tech and gaming—rates £750-£1,050/day</li>
            <li><strong>Remote UK:</strong> Increasingly common—rates £750-£1,000/day</li>
          </ul>

          <h2>Fractional CTO Jobs by Industry</h2>
          <p>High-demand sectors for <strong>fractional CTO jobs</strong>:</p>
          <ul>
            <li><strong>FinTech:</strong> Complex regulatory and security requirements (£1,100-£1,500/day)</li>
            <li><strong>SaaS/B2B Software:</strong> Product development and scaling (£1,000-£1,400/day)</li>
            <li><strong>E-commerce:</strong> Platform architecture and optimisation (£900-£1,200/day)</li>
            <li><strong>HealthTech:</strong> Compliance, data security, and integration (£950-£1,300/day)</li>
            <li><strong>AI/ML Companies:</strong> Specialist technical leadership (£1,100-£1,500/day)</li>
            <li><strong>Traditional businesses:</strong> Digital transformation initiatives (£800-£1,100/day)</li>
          </ul>

          <h2>Key Responsibilities of Fractional CTOs</h2>
          <p><strong>Fractional CTO jobs</strong> typically involve:</p>
          <ul>
            <li>Technology strategy and roadmap development</li>
            <li>Technical architecture and system design decisions</li>
            <li>Engineering team building, hiring, and mentoring</li>
            <li>Vendor evaluation and technology partner selection</li>
            <li>Technical due diligence for investors and acquirers</li>
            <li>Security frameworks and compliance implementation</li>
            <li>Build vs buy decisions and make vs managed choices</li>
            <li>Technical debt management and code quality standards</li>
            <li>DevOps, CI/CD, and engineering process optimisation</li>
          </ul>

          <h2>How to Find Fractional CTO Jobs UK</h2>
          <p>Best channels for <strong>fractional CTO jobs in the UK</strong>:</p>
          <ul>
            <li><strong>Specialist platforms:</strong> <Link href="/fractional-jobs">Fractional Quest</Link> curates verified CTO opportunities</li>
            <li><strong>VC/PE networks:</strong> Investors need CTOs for portfolio companies</li>
            <li><strong>Technical communities:</strong> CTO craft groups and engineering leadership networks</li>
            <li><strong>LinkedIn:</strong> Building technical thought leadership and direct outreach</li>
            <li><strong>Referrals:</strong> Most established fractional CTOs get majority of work through word of mouth</li>
          </ul>

          <h2>Requirements for Fractional CTO Jobs</h2>
          <p>Successful candidates for <strong>fractional CTO jobs UK</strong> typically have:</p>
          <ul>
            <li>15+ years of software engineering experience</li>
            <li>5+ years in CTO, VP Engineering, or technical director roles</li>
            <li>Experience scaling engineering teams (from 5 to 50+)</li>
            <li>Broad technology stack knowledge across frontend, backend, infrastructure</li>
            <li>Strong communication skills with non-technical stakeholders</li>
            <li>Experience with fundraising and investor relations</li>
            <li>Track record of shipping products and building systems at scale</li>
          </ul>
        </div>
      </article>

      {/* Live Jobs */}
      {jobs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Fractional CTO Jobs UK</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {jobs.map((job: any) => (
                <Link
                  key={job.id}
                  href={`/job/${job.slug}`}
                  className="bg-white rounded-xl p-6 border hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-2">{job.company_name}</p>
                  <p className="text-gray-600 text-sm">{job.location}</p>
                  {job.compensation && <p className="text-blue-700 font-semibold mt-2">{job.compensation}</p>}
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/fractional-jobs?role=CTO" className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800">
                View All CTO Jobs →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Fractional CTO Role?</h2>
          <p className="text-blue-100 mb-8">Create your profile to get matched with companies seeking fractional technology leadership.</p>
          <div className="flex justify-center gap-4">
            <Link href="/fractional-jobs?role=CTO" className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50">
              Browse CTO Jobs
            </Link>
            <Link href="/fractional-jobs-tech" className="px-8 py-4 border-2 border-white rounded-lg font-semibold hover:bg-white/10">
              Tech Industry Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/fractional-jobs-tech" className="px-4 py-2 bg-white rounded-lg border hover:border-blue-300">Tech Industry Jobs →</Link>
            <Link href="/fractional-jobs-london" className="px-4 py-2 bg-white rounded-lg border hover:border-blue-300">CTO Jobs London →</Link>
            <Link href="/fractional-jobs-startups" className="px-4 py-2 bg-white rounded-lg border hover:border-blue-300">Startup CTO Jobs →</Link>
            <Link href="/fractional-cfo-jobs-uk" className="px-4 py-2 bg-white rounded-lg border hover:border-emerald-300">CFO Jobs UK →</Link>
            <Link href="/fractional-cmo-jobs-uk" className="px-4 py-2 bg-white rounded-lg border hover:border-purple-300">CMO Jobs UK →</Link>
            <Link href="/fractional-coo-jobs-uk" className="px-4 py-2 bg-white rounded-lg border hover:border-orange-300">COO Jobs UK →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
