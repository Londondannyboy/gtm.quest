import { NextRequest, NextResponse } from 'next/server'
import { getProfileBySlug } from '@/lib/candidate-profiles'

// GET - Fetch public profile by slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
    }

    const profile = await getProfileBySlug(slug)

    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
    }

    return NextResponse.json(profile)
  } catch (error) {
    console.error('Error fetching profile by slug:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
