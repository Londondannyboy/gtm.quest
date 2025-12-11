export interface Job {
  id: string
  title: string
  company_name: string
  location?: string
  workplace_type?: string
  employment_type?: string
  compensation?: string
  posted_date?: string
  updated_date?: string
  is_fractional?: boolean
  classification_confidence?: number
  skills_required?: string[]
  seniority_level?: string
  role_category?: string
  salary_min?: number
  salary_max?: number
  salary_currency?: string
  full_description?: string
  requirements?: string[]
  responsibilities?: string[]
  benefits?: string[]
  qualifications?: string[]
  about_company?: string
  about_team?: string
  hours_per_week?: string
  is_remote?: boolean
  is_active?: boolean
  url: string
  external_id: string
}

export interface Article {
  id: number
  slug: string
  title: string
  content: string
  excerpt?: string
  status: 'draft' | 'published'
  app: string
  created_at?: Date
  published_at?: Date
  updated_at?: Date
  meta_description?: string
  featured_asset_url?: string
  featured_asset_alt?: string
  hero_asset_url?: string
  hero_asset_alt?: string
  hero_asset_title?: string
  word_count?: number
  is_featured?: boolean
  video_url?: string
  video_playback_id?: string
}

export interface Company {
  id: number
  slug: string
  name: string
  app: string
  description?: string
  logo_url?: string
  headquarters?: string
  specializations?: string[]
  founded_year?: number
  employee_count?: number
  primary_country?: string
  primary_region?: string
  meta_description?: string
  featured_asset_url?: string
  hero_asset_url?: string
  payload?: Record<string, any>
}

export interface JobFilter {
  title?: string
  location?: string
  isFractional?: boolean
  seniority?: string
  skills?: string[]
  remote?: boolean
  limit?: number
  offset?: number
}

export interface PaginationParams {
  limit: number
  offset: number
  total: number
}
