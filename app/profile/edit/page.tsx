'use client'

import { useUser } from '@stackframe/stack'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface CandidateProfile {
  id: number
  user_id: string
  slug: string
  display_name: string
  headline: string | null
  bio: string | null
  photo_url: string | null
  role_categories: string[]
  industries: string[]
  specialisms: string[]
  years_experience: number | null
  day_rate_min: number | null
  day_rate_max: number | null
  availability: string | null
  work_preference: string | null
  based_in: string | null
  timezone: string | null
  linkedin_url: string | null
  website_url: string | null
  is_public: boolean
  profile_status: 'draft' | 'published' | 'hidden'
}

const ROLE_OPTIONS = [
  'CFO', 'CMO', 'CTO', 'COO', 'CHRO', 'CPO', 'CRO', 'CDO', 'CISO',
  'Board Advisor', 'NED', 'Consultant'
]

const INDUSTRY_OPTIONS = [
  'SaaS', 'FinTech', 'HealthTech', 'E-commerce', 'EdTech', 'PropTech',
  'CleanTech', 'DeepTech', 'Enterprise', 'SMB', 'Startup', 'PE/VC Backed'
]

const SPECIALISM_OPTIONS = [
  'M&A', 'Fundraising', 'IPO Prep', 'Turnaround', 'Scaling', 'GTM Strategy',
  'Product Launch', 'Team Building', 'Board Reporting', 'Due Diligence',
  'Financial Modelling', 'Brand Strategy', 'Digital Transformation'
]

const AVAILABILITY_OPTIONS = [
  'Available now', '1-2 days/week', '2-3 days/week', '3-4 days/week', 'Limited capacity'
]

const WORK_PREFERENCE_OPTIONS = [
  'Remote', 'Hybrid', 'On-site', 'Flexible'
]

export default function EditProfilePage() {
  const user = useUser({ or: 'redirect' })
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const [formData, setFormData] = useState<Partial<CandidateProfile>>({
    display_name: '',
    headline: '',
    bio: '',
    photo_url: '',
    role_categories: [],
    industries: [],
    specialisms: [],
    years_experience: null,
    day_rate_min: null,
    day_rate_max: null,
    availability: '',
    work_preference: '',
    based_in: '',
    linkedin_url: '',
    website_url: '',
    is_public: false,
    profile_status: 'draft',
  })

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch('/api/candidate-profile')
        if (response.ok) {
          const profile = await response.json()
          if (profile) {
            setFormData({
              display_name: profile.display_name || '',
              headline: profile.headline || '',
              bio: profile.bio || '',
              photo_url: profile.photo_url || '',
              role_categories: profile.role_categories || [],
              industries: profile.industries || [],
              specialisms: profile.specialisms || [],
              years_experience: profile.years_experience,
              day_rate_min: profile.day_rate_min,
              day_rate_max: profile.day_rate_max,
              availability: profile.availability || '',
              work_preference: profile.work_preference || '',
              based_in: profile.based_in || '',
              linkedin_url: profile.linkedin_url || '',
              website_url: profile.website_url || '',
              is_public: profile.is_public || false,
              profile_status: profile.profile_status || 'draft',
            })
          } else if (user?.displayName) {
            // Pre-fill with Stack Auth display name
            setFormData(prev => ({
              ...prev,
              display_name: user.displayName || '',
            }))
          }
        }
      } catch (e) {
        console.error('Error fetching profile:', e)
      } finally {
        setLoading(false)
      }
    }
    if (user) {
      fetchProfile()
    }
  }, [user])

  const handleToggle = (field: 'role_categories' | 'industries' | 'specialisms', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] || []).includes(value)
        ? (prev[field] || []).filter((v: string) => v !== value)
        : [...(prev[field] || []), value]
    }))
  }

  const handleSave = async (publish = false) => {
    setSaving(true)
    setError(null)
    setSuccess(null)

    try {
      const dataToSave = {
        ...formData,
        is_public: publish ? true : formData.is_public,
        profile_status: publish ? 'published' : formData.profile_status,
      }

      const response = await fetch('/api/candidate-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSave),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to save profile')
      }

      const savedProfile = await response.json()
      setFormData(savedProfile)
      setSuccess(publish ? 'Profile published successfully!' : 'Profile saved as draft')

      if (publish && savedProfile.slug) {
        setTimeout(() => {
          router.push(`/people/${savedProfile.slug}`)
        }, 1500)
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to save profile')
    } finally {
      setSaving(false)
    }
  }

  if (!user) return null

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-gray-600 mt-4">Loading profile...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/profile" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Edit Public Profile</h1>
          <div className="flex gap-2">
            <button
              onClick={() => handleSave(false)}
              disabled={saving}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Draft'}
            </button>
            <button
              onClick={() => handleSave(true)}
              disabled={saving || !formData.display_name}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
            >
              Publish
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Alerts */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
            {success}
          </div>
        )}

        <div className="space-y-6">
          {/* Basic Info */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Display Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.display_name || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, display_name: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Headline</label>
                <input
                  type="text"
                  value={formData.headline || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, headline: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Fractional CFO | PE/VC Specialist | 20+ Years Experience"
                />
                <p className="text-xs text-gray-500 mt-1">A brief tagline that appears below your name</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea
                  value={formData.bio || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell companies about your experience, approach, and what makes you effective as a fractional executive..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                <input
                  type="url"
                  value={formData.photo_url || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, photo_url: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="https://..."
                />
              </div>
            </div>
          </div>

          {/* Roles */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Roles You Offer</h2>
            <div className="flex flex-wrap gap-2">
              {ROLE_OPTIONS.map(role => (
                <button
                  key={role}
                  type="button"
                  onClick={() => handleToggle('role_categories', role)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    (formData.role_categories || []).includes(role)
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Industries</h2>
            <div className="flex flex-wrap gap-2">
              {INDUSTRY_OPTIONS.map(industry => (
                <button
                  key={industry}
                  type="button"
                  onClick={() => handleToggle('industries', industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    (formData.industries || []).includes(industry)
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          {/* Specialisms */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Specialisms</h2>
            <div className="flex flex-wrap gap-2">
              {SPECIALISM_OPTIONS.map(specialism => (
                <button
                  key={specialism}
                  type="button"
                  onClick={() => handleToggle('specialisms', specialism)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    (formData.specialisms || []).includes(specialism)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {specialism}
                </button>
              ))}
            </div>
          </div>

          {/* Rates & Availability */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Rates & Availability</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Day Rate (Min)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                  <input
                    type="number"
                    value={formData.day_rate_min || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, day_rate_min: e.target.value ? parseInt(e.target.value) : null }))}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="750"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Day Rate (Max)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                  <input
                    type="number"
                    value={formData.day_rate_max || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, day_rate_max: e.target.value ? parseInt(e.target.value) : null }))}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="1500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Years Experience</label>
                <input
                  type="number"
                  value={formData.years_experience || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, years_experience: e.target.value ? parseInt(e.target.value) : null }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="15"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                <select
                  value={formData.availability || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, availability: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select...</option>
                  {AVAILABILITY_OPTIONS.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Work Preference</label>
                <select
                  value={formData.work_preference || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, work_preference: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select...</option>
                  {WORK_PREFERENCE_OPTIONS.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Based In</label>
                <input
                  type="text"
                  value={formData.based_in || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, based_in: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="London, UK"
                />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Links</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
                <input
                  type="url"
                  value={formData.linkedin_url || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, linkedin_url: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
                <input
                  type="url"
                  value={formData.website_url || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, website_url: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="https://..."
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center">
            <Link
              href="/people"
              className="text-purple-600 hover:text-purple-700"
            >
              View all profiles
            </Link>
            <div className="flex gap-3">
              <button
                onClick={() => handleSave(false)}
                disabled={saving}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 font-medium"
              >
                Save Draft
              </button>
              <button
                onClick={() => handleSave(true)}
                disabled={saving || !formData.display_name}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 font-medium"
              >
                Publish Profile
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
