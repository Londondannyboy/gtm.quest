import { Metadata } from 'next'
import Link from 'next/link'
import { getPublicProfiles, getPublicProfileCount } from '@/lib/candidate-profiles'
import { Testimonials } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Fractional Executives | GTM Quest',
  description: 'Browse profiles of experienced fractional CFOs, CMOs, CTOs, and other C-suite executives available for part-time and project-based work.',
  keywords: 'fractional executives, fractional CFO, fractional CMO, fractional CTO, part-time executives, interim executives',
}

export const revalidate = 60 // Revalidate every minute

const ROLE_FILTERS = [
  { label: 'All', value: '' },
  { label: 'CFO', value: 'CFO' },
  { label: 'CMO', value: 'CMO' },
  { label: 'CTO', value: 'CTO' },
  { label: 'COO', value: 'COO' },
  { label: 'CHRO', value: 'CHRO' },
  { label: 'CPO', value: 'CPO' },
]

function ProfileCard({ profile }: { profile: {
  slug: string
  display_name: string
  headline: string | null
  photo_url: string | null
  role_categories: string[]
  based_in: string | null
  day_rate_min: number | null
  day_rate_max: number | null
  availability: string | null
  is_featured: boolean
}}) {
  return (
    <Link
      href={`/people/${profile.slug}`}
      className="block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all p-6"
    >
      <div className="flex items-start gap-4">
        {/* Photo */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 overflow-hidden">
          {profile.photo_url ? (
            <img
              src={profile.photo_url}
              alt={profile.display_name}
              className="w-full h-full object-cover"
            />
          ) : (
            profile.display_name.charAt(0).toUpperCase()
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {profile.display_name}
            </h3>
            {profile.is_featured && (
              <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                Featured
              </span>
            )}
          </div>

          {profile.headline && (
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">{profile.headline}</p>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {profile.role_categories.slice(0, 3).map((role) => (
              <span
                key={role}
                className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full"
              >
                {role}
              </span>
            ))}
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
            {profile.based_in && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {profile.based_in}
              </span>
            )}
            {(profile.day_rate_min || profile.day_rate_max) && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {profile.day_rate_min && profile.day_rate_max
                  ? `£${profile.day_rate_min}-${profile.day_rate_max}/day`
                  : profile.day_rate_min
                    ? `From £${profile.day_rate_min}/day`
                    : `Up to £${profile.day_rate_max}/day`}
              </span>
            )}
            {profile.availability && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {profile.availability}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default async function PeoplePage() {
  const profiles = await getPublicProfiles({ limit: 50 })
  const count = await getPublicProfileCount()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Fractional Executives
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Connect with experienced C-suite leaders available for fractional, part-time, and project-based engagements.
          </p>
          <div className="mt-6">
            <span className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/80">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              {count} executives available
            </span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-sm text-gray-500 mr-2">Filter by role:</span>
            {ROLE_FILTERS.map((filter) => (
              <Link
                key={filter.value}
                href={filter.value ? `/people?role=${filter.value}` : '/people'}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap"
              >
                {filter.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Profiles Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          {profiles.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {profiles.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">👤</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No profiles yet</h2>
              <p className="text-gray-600 mb-6">
                Be one of the first fractional executives to create a profile.
              </p>
              <Link
                href="/handler/sign-up"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Create Your Profile
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials type="executive" />

      {/* CTA */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Fractional Executive Community</h2>
          <p className="text-gray-300 mb-8">
            Create your profile to showcase your expertise and connect with companies seeking fractional leadership.
          </p>
          <Link
            href="/handler/sign-up"
            className="inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Create Your Profile
          </Link>
        </div>
      </section>
    </div>
  )
}
