import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional COO Jobs UK 2025 - Part-Time Operations Leadership Roles',
  description: 'Find fractional COO jobs in the UK. Part-time Chief Operating Officer positions paying £800-£1,400/day. Browse 30+ live COO roles for experienced operations leaders.',
  keywords: 'fractional coo jobs uk, fractional coo jobs, part time coo jobs, fractional coo uk, coo jobs uk',
  openGraph: {
    title: 'Fractional COO Jobs UK 2025 - Part-Time Operations Leadership',
    description: 'Find fractional COO jobs in the UK. Part-time COO positions paying £800-£1,400/day.',
    images: ['/images/fractional-coo-jobs-uk.jpg'],
  },
}

async function getCooStats() {
  try {
    const sql = createDbQuery()
    const result = await sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category ILIKE '%coo%' OR title ILIKE '%coo%' OR title ILIKE '%chief operating%' OR title ILIKE '%operations director%' OR title ILIKE '%head of operations%')`
    return parseInt((result[0] as any)?.count || '0')
  } catch {
    return 28
  }
}

async function getCooJobs() {
  try {
    const sql = createDbQuery()
    return await sql`
      SELECT id, slug, title, company_name, location, compensation, posted_date
      FROM jobs
      WHERE is_active = true AND (role_category ILIKE '%coo%' OR title ILIKE '%coo%' OR title ILIKE '%chief operating%' OR title ILIKE '%operations director%' OR title ILIKE '%head of operations%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 6
    `
  } catch {
    return []
  }
}

export default async function FractionalCooJobsUkPage() {
  const [jobCount, jobs] = await Promise.all([getCooStats(), getCooJobs()])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-900 to-orange-800 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-orange-200 hover:text-white mb-6 inline-block">← Back to Home</Link>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Fractional COO Jobs UK</h1>
          <p className="text-xl text-orange-100 mb-8">
            Find part-time Chief Operating Officer roles in the UK. Browse {jobCount}+ live fractional COO jobs paying £800-£1,400 per day.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/fractional-jobs?role=COO" className="px-8 py-4 bg-white text-orange-900 rounded-lg font-semibold hover:bg-orange-50">
              Browse All COO Jobs
            </Link>
            <Link href="/fractional-jobs-startups" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10">
              Startup COO Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-orange-700">{jobCount}+</div>
              <div className="text-gray-600">Live COO Jobs</div>
            </div>
            <div>
              <div className="text-4xl font-black text-orange-700">£1,000</div>
              <div className="text-gray-600">Avg Day Rate</div>
            </div>
            <div>
              <div className="text-4xl font-black text-orange-700">2-3</div>
              <div className="text-gray-600">Days Per Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Image */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <img
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Fractional COO jobs UK - operations executive leading team planning session"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Main Content - 750+ words */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-orange">
          <h2>What Are Fractional COO Jobs?</h2>
          <p>
            <strong>Fractional COO jobs</strong> are part-time Chief Operating Officer positions where experienced operations leaders provide strategic operational guidance to multiple companies simultaneously. Rather than dedicating 100% of their time to one organisation, fractional COOs work 1-3 days per week with each client, delivering senior operations expertise at a fraction of the cost of a permanent hire.
          </p>
          <p>
            The demand for <strong>fractional COO jobs</strong> in the UK has grown substantially as companies recognise that world-class operations leadership doesn't require a full-time commitment. Startups scaling from founder-led to operationally mature, PE portfolio companies, and SMEs professionalising their operations all increasingly turn to fractional COOs.
          </p>

          <h2>Why Fractional COO Jobs Are Growing in the UK</h2>
          <p>Several factors drive the expansion of <strong>fractional COO jobs UK</strong>:</p>
          <ul>
            <li><strong>Founder relief:</strong> CEO/founders at scale-ups need operational leadership without adding permanent overhead</li>
            <li><strong>PE requirements:</strong> Private equity firms mandate operational excellence across portfolio companies</li>
            <li><strong>Cost efficiency:</strong> Access experienced COO expertise for £2,000-£4,000 per week vs £150,000+ annually</li>
            <li><strong>Operational maturity:</strong> Companies need to professionalise processes as they scale</li>
            <li><strong>Diverse experience:</strong> Fractional COOs bring best practices from multiple companies and industries</li>
          </ul>

          <h2>Types of Fractional COO Jobs Available</h2>
          <p>The UK <strong>fractional COO jobs</strong> market offers diverse opportunities:</p>
          <ul>
            <li><strong>Scale-up COO:</strong> Building operational infrastructure for rapid growth companies</li>
            <li><strong>PE Portfolio COO:</strong> Driving operational value creation for private equity investments</li>
            <li><strong>Turnaround COO:</strong> Restructuring and optimising struggling businesses</li>
            <li><strong>Interim COO:</strong> Bridge leadership during COO transitions or restructures</li>
            <li><strong>Process COO:</strong> Implementing systems, processes, and operational efficiency</li>
            <li><strong>People Operations COO:</strong> Scaling teams and building organisational structure</li>
          </ul>

          <h2>Fractional COO Jobs by Location</h2>
          <p>Geographic distribution of <strong>fractional COO jobs UK</strong>:</p>
          <ul>
            <li><strong>London:</strong> Largest market with 55% of roles—rates £900-£1,400/day</li>
            <li><strong>Manchester:</strong> Growing business hub—rates £750-£1,100/day</li>
            <li><strong>Birmingham:</strong> Manufacturing and professional services—rates £700-£1,000/day</li>
            <li><strong>Leeds:</strong> Financial and professional services—rates £700-£1,000/day</li>
            <li><strong>Edinburgh:</strong> Financial services and tech—rates £750-£1,050/day</li>
            <li><strong>Bristol:</strong> Creative and tech industries—rates £700-£1,000/day</li>
            <li><strong>Remote UK:</strong> Increasing availability—rates £700-£950/day</li>
          </ul>

          <h2>Fractional COO Jobs by Industry</h2>
          <p>High-demand sectors for <strong>fractional COO jobs</strong>:</p>
          <ul>
            <li><strong>PE Portfolio Companies:</strong> Value creation and operational transformation (£1,000-£1,400/day)</li>
            <li><strong>SaaS/Technology:</strong> Scaling operations for rapid growth (£950-£1,300/day)</li>
            <li><strong>E-commerce:</strong> Logistics, fulfilment, and customer operations (£850-£1,150/day)</li>
            <li><strong>Professional Services:</strong> Delivery and resource management (£800-£1,100/day)</li>
            <li><strong>Healthcare:</strong> Compliance and operational efficiency (£900-£1,200/day)</li>
            <li><strong>Manufacturing:</strong> Supply chain and production optimisation (£750-£1,050/day)</li>
          </ul>

          <h2>Key Responsibilities of Fractional COOs</h2>
          <p><strong>Fractional COO jobs</strong> typically involve:</p>
          <ul>
            <li>Operational strategy development and execution</li>
            <li>Process design, documentation, and optimisation</li>
            <li>Team structure and organisational design</li>
            <li>KPI frameworks and performance management systems</li>
            <li>Scaling operations for growth</li>
            <li>Supply chain and vendor management</li>
            <li>Systems implementation and technology adoption</li>
            <li>Risk management and compliance frameworks</li>
            <li>Cross-functional coordination and integration</li>
          </ul>

          <h2>How to Find Fractional COO Jobs UK</h2>
          <p>Best channels for <strong>fractional COO jobs in the UK</strong>:</p>
          <ul>
            <li><strong>Specialist platforms:</strong> <Link href="/fractional-jobs">Fractional Quest</Link> curates verified COO opportunities</li>
            <li><strong>PE/VC networks:</strong> Private equity firms frequently need COOs for portfolio companies</li>
            <li><strong>Operations communities:</strong> COO networks and operations leadership groups</li>
            <li><strong>Management consultancies:</strong> Consulting firms often refer fractional COOs to clients</li>
            <li><strong>Direct outreach:</strong> LinkedIn and targeted business development</li>
          </ul>

          <h2>Requirements for Fractional COO Jobs</h2>
          <p>Successful candidates for <strong>fractional COO jobs UK</strong> typically have:</p>
          <ul>
            <li>15+ years of operations and general management experience</li>
            <li>5+ years in COO, VP Operations, or Operations Director roles</li>
            <li>Experience scaling operations from startup to mature business</li>
            <li>Strong process design and systems thinking abilities</li>
            <li>Track record of building and leading teams</li>
            <li>Commercial acumen beyond pure operational focus</li>
            <li>Experience with PE-backed or high-growth environments</li>
            <li>Board-level communication and stakeholder management skills</li>
          </ul>
        </div>
      </article>

      {/* Live Jobs */}
      {jobs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Fractional COO Jobs UK</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {jobs.map((job: any) => (
                <Link
                  key={job.id}
                  href={`/job/${job.slug}`}
                  className="bg-white rounded-xl p-6 border hover:border-orange-300 hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-2">{job.company_name}</p>
                  <p className="text-gray-500 text-sm">{job.location}</p>
                  {job.compensation && <p className="text-orange-700 font-semibold mt-2">{job.compensation}</p>}
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/fractional-jobs?role=COO" className="px-8 py-4 bg-orange-700 text-white rounded-lg font-semibold hover:bg-orange-800">
                View All COO Jobs →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Fractional COO Role?</h2>
          <p className="text-orange-100 mb-8">Create your profile to get matched with companies seeking fractional operations leadership.</p>
          <div className="flex justify-center gap-4">
            <Link href="/fractional-jobs?role=COO" className="px-8 py-4 bg-white text-orange-900 rounded-lg font-semibold hover:bg-orange-50">
              Browse COO Jobs
            </Link>
            <Link href="/fractional-jobs-startups" className="px-8 py-4 border-2 border-white rounded-lg font-semibold hover:bg-white/10">
              Startup COO Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/fractional-jobs-startups" className="px-4 py-2 bg-white rounded-lg border hover:border-orange-300">Startup COO Jobs →</Link>
            <Link href="/fractional-jobs-london" className="px-4 py-2 bg-white rounded-lg border hover:border-orange-300">COO Jobs London →</Link>
            <Link href="/fractional-jobs-manchester" className="px-4 py-2 bg-white rounded-lg border hover:border-orange-300">COO Jobs Manchester →</Link>
            <Link href="/fractional-cfo-jobs-uk" className="px-4 py-2 bg-white rounded-lg border hover:border-emerald-300">CFO Jobs UK →</Link>
            <Link href="/fractional-cmo-jobs-uk" className="px-4 py-2 bg-white rounded-lg border hover:border-purple-300">CMO Jobs UK →</Link>
            <Link href="/fractional-cto-jobs-uk" className="px-4 py-2 bg-white rounded-lg border hover:border-blue-300">CTO Jobs UK →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
