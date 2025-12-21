import { NextRequest, NextResponse } from 'next/server'
import { stackServerApp } from '@/stack/server'
import {
  getProfileByUserId,
  upsertProfile,
  getPublicProfiles,
  getPublicProfileCount,
} from '@/lib/candidate-profiles'

// GET - Fetch current user's candidate profile or list public profiles
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const listPublic = searchParams.get('public') === 'true'
    const featured = searchParams.get('featured') === 'true'
    const roleCategory = searchParams.get('role') || undefined
    const limit = parseInt(searchParams.get('limit') || '50', 10)
    const offset = parseInt(searchParams.get('offset') || '0', 10)

    // Public listing - no auth required
    if (listPublic) {
      const profiles = await getPublicProfiles({ limit, offset, roleCategory, featured })
      const count = await getPublicProfileCount()
      return NextResponse.json({ profiles, count })
    }

    // Private - get current user's profile
    const user = await stackServerApp.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const profile = await getProfileByUserId(user.id)
    return NextResponse.json(profile || null)
  } catch (error) {
    console.error('Error fetching candidate profile:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST - Create or update current user's candidate profile
export async function POST(request: NextRequest) {
  try {
    const user = await stackServerApp.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()

    // Validate required fields
    if (!data.display_name || data.display_name.trim().length === 0) {
      return NextResponse.json({ error: 'Display name is required' }, { status: 400 })
    }

    const profile = await upsertProfile(user.id, {
      display_name: data.display_name,
      headline: data.headline,
      bio: data.bio,
      photo_url: data.photo_url,
      role_categories: data.role_categories || [],
      industries: data.industries || [],
      specialisms: data.specialisms || [],
      years_experience: data.years_experience,
      day_rate_min: data.day_rate_min,
      day_rate_max: data.day_rate_max,
      availability: data.availability,
      work_preference: data.work_preference,
      based_in: data.based_in,
      timezone: data.timezone,
      linkedin_url: data.linkedin_url,
      website_url: data.website_url,
      is_public: data.is_public,
      profile_status: data.profile_status,
    })

    return NextResponse.json(profile)
  } catch (error) {
    console.error('Error updating candidate profile:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
