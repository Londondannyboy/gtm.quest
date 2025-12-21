-- Candidate Profiles Table
-- Public profile for fractional executives
-- Run this in your Neon database console

CREATE TABLE IF NOT EXISTS candidate_profiles (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,  -- Links to Stack Auth user ID

  -- Public display fields
  slug VARCHAR(100) UNIQUE NOT NULL,
  display_name VARCHAR(255) NOT NULL,
  headline VARCHAR(255),  -- e.g. "Fractional CFO | PE/VC Specialist"
  bio TEXT,
  photo_url VARCHAR(500),

  -- Professional details
  role_categories TEXT[] DEFAULT '{}',  -- ['CFO', 'CMO', 'Board Advisor']
  industries TEXT[] DEFAULT '{}',  -- ['SaaS', 'FinTech', 'HealthTech']
  specialisms TEXT[] DEFAULT '{}',  -- ['M&A', 'Fundraising', 'Turnaround']
  years_experience INTEGER,

  -- Availability & rates
  day_rate_min INTEGER,  -- in GBP
  day_rate_max INTEGER,
  availability VARCHAR(50),  -- 'Available now', '1-2 days/week', 'Limited'
  work_preference VARCHAR(50),  -- 'Remote', 'Hybrid', 'On-site', 'Flexible'

  -- Location
  based_in VARCHAR(100),
  timezone VARCHAR(50),

  -- Social/contact
  linkedin_url VARCHAR(500),
  website_url VARCHAR(500),

  -- Visibility & status
  is_public BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  profile_status VARCHAR(20) DEFAULT 'draft',  -- 'draft', 'published', 'hidden'

  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  published_at TIMESTAMP
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_candidate_profiles_slug ON candidate_profiles(slug);
CREATE INDEX IF NOT EXISTS idx_candidate_profiles_user_id ON candidate_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_candidate_profiles_public ON candidate_profiles(is_public) WHERE is_public = true;
CREATE INDEX IF NOT EXISTS idx_candidate_profiles_featured ON candidate_profiles(is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_candidate_profiles_role_categories ON candidate_profiles USING GIN(role_categories);

-- Trigger to update updated_at
CREATE OR REPLACE FUNCTION update_candidate_profiles_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_candidate_profiles_updated_at ON candidate_profiles;
CREATE TRIGGER trigger_candidate_profiles_updated_at
  BEFORE UPDATE ON candidate_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_candidate_profiles_updated_at();
