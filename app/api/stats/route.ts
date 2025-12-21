import { NextResponse } from 'next/server'
import { getPublicProfileCount } from '@/lib/candidate-profiles'

export const revalidate = 60 // Cache for 1 minute

export async function GET() {
  try {
    const profileCount = await getPublicProfileCount()

    return NextResponse.json({
      executives: profileCount,
      // Placeholder for future stats
      jobs: 600,
      companies: 120,
    })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json({
      executives: 0,
      jobs: 600,
      companies: 120,
    })
  }
}
