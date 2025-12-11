import { redirect } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Redirect old /job/[slug] path to new /fractional-job/[slug] path
export default async function JobRedirect({ params }: PageProps) {
  const { slug } = await params
  redirect(`/fractional-job/${slug}`)
}
