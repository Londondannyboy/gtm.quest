import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProfileBySlug, getPublicProfiles } from '@/lib/candidate-profiles'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const profile = await getProfileBySlug(slug)

  if (!profile) {
    return { title: 'Profile Not Found' }
  }

  return {
    title: `${profile.display_name} | ${profile.role_categories[0] || 'Fractional Executive'} | GTM Quest`,
    description: profile.headline || `${profile.display_name} - ${profile.role_categories.join(', ')}`,
  }
}

export default async function ProfilePage({ params }: Props) {
  const { slug } = await params
  const profile = await getProfileBySlug(slug)

  if (!profile) {
    notFound()
  }

  // Get related profiles (same role category)
  const relatedProfiles = profile.role_categories.length > 0
    ? await getPublicProfiles({ roleCategory: profile.role_categories[0], limit: 3 })
    : []

  const filteredRelated = relatedProfiles.filter(p => p.slug !== profile.slug).slice(0, 2)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-black text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/people"
            className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all executives
          </Link>

          <div className="flex items-start gap-6">
            {/* Photo */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 overflow-hidden">
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
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold">{profile.display_name}</h1>
                {profile.is_featured && (
                  <span className="px-3 py-1 bg-amber-500 text-black text-sm font-medium rounded-full">
                    Featured
                  </span>
                )}
              </div>
              {profile.headline && (
                <p className="text-xl text-gray-300 mt-2">{profile.headline}</p>
              )}

              {/* Quick stats */}
              <div className="flex flex-wrap gap-4 mt-4">
                {profile.based_in && (
                  <span className="flex items-center gap-2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {profile.based_in}
                  </span>
                )}
                {profile.years_experience && (
                  <span className="flex items-center gap-2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {profile.years_experience}+ years experience
                  </span>
                )}
                {profile.availability && (
                  <span className="flex items-center gap-2 text-green-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {profile.availability}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="md:col-span-2 space-y-8">
              {/* Bio */}
              {profile.bio && (
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">About</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="whitespace-pre-wrap text-gray-600">{profile.bio}</p>
                  </div>
                </div>
              )}

              {/* Specialisms */}
              {profile.specialisms.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Specialisms</h2>
                  <div className="flex flex-wrap gap-2">
                    {profile.specialisms.map((specialism) => (
                      <span
                        key={specialism}
                        className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {specialism}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Industries */}
              {profile.industries.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Industries</h2>
                  <div className="flex flex-wrap gap-2">
                    {profile.industries.map((industry) => (
                      <span
                        key={industry}
                        className="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Connect</h2>

                {/* Rate */}
                {(profile.day_rate_min || profile.day_rate_max) && (
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Day Rate</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {profile.day_rate_min && profile.day_rate_max
                        ? `£${profile.day_rate_min} - £${profile.day_rate_max}`
                        : profile.day_rate_min
                          ? `From £${profile.day_rate_min}`
                          : `Up to £${profile.day_rate_max}`}
                    </p>
                  </div>
                )}

                {/* Work Preference */}
                {profile.work_preference && (
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Work Style</p>
                    <p className="text-gray-900 font-medium">{profile.work_preference}</p>
                  </div>
                )}

                {/* Links */}
                <div className="space-y-3">
                  {profile.linkedin_url && (
                    <a
                      href={profile.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#006699] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      View LinkedIn Profile
                    </a>
                  )}

                  {profile.website_url && (
                    <a
                      href={profile.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      Visit Website
                    </a>
                  )}

                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>

              {/* Role Categories */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Roles</h2>
                <div className="flex flex-wrap gap-2">
                  {profile.role_categories.map((role) => (
                    <span
                      key={role}
                      className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Profiles */}
      {filteredRelated.length > 0 && (
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Executives</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {filteredRelated.map((related) => (
                <Link
                  key={related.slug}
                  href={`/people/${related.slug}`}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-lg font-bold">
                    {related.display_name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{related.display_name}</h3>
                    {related.headline && (
                      <p className="text-sm text-gray-600 line-clamp-1">{related.headline}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
