import Image from "next/image";
import Link from "next/link";

interface AgencyCardProps {
  rank: number
  name: string
  tagline: string
  description: string[]
  bestFor: string[]
  keyServices: string[]
  website: string
  primaryColor?: string
  logoUrl?: string | null
  backdropUrl?: string | null
  isTopRanked?: boolean
  stats?: Array<{ value: string; label: string }>
  internalLink?: string
}

export function AgencyCard({
  rank,
  name,
  tagline,
  description,
  bestFor,
  keyServices,
  website,
  primaryColor = '#8B5CF6',
  logoUrl,
  backdropUrl,
  isTopRanked = false,
  stats,
  internalLink
}: AgencyCardProps) {
  const brandDescription = description.join(' ')

  return (
    <div
      className="relative py-32 md:py-40 border-t-8 overflow-hidden"
      style={{
        borderTopColor: primaryColor,
        background: `linear-gradient(180deg, ${primaryColor}08 0%, transparent 40%)`,
        border: `4px solid ${primaryColor}`  // Brand color border
      }}
    >
      <div className="relative z-10 w-full px-8 md:px-12 lg:px-16 max-w-[2000px] mx-auto">
        {/* Header Section */}
        <div className="flex items-start gap-16 mb-20 flex-wrap">
          {/* Large Logo */}
          {logoUrl && (
            <div className="flex-shrink-0 w-56 h-56 bg-white rounded-3xl p-10 shadow-2xl">
              <Image
                src={logoUrl}
                alt={name}
                width={224}
                height={224}
                className="object-contain w-full h-full"
              />
            </div>
          )}

          <div className="flex-1">
            {/* Rank Badge */}
            {isTopRanked ? (
              <div
                className="inline-block px-16 py-6 rounded-full text-3xl font-black mb-12"
                style={{ backgroundColor: primaryColor, color: '#000' }}
              >
                #{rank} - TOP RATED
              </div>
            ) : (
              <div
                className="font-black text-7xl mb-12"
                style={{ color: primaryColor }}
              >
                #{rank}
              </div>
            )}

            {/* Agency Name - EVEN MORE MASSIVE */}
            <h3
              className="text-[10rem] md:text-[16rem] font-black mb-12 leading-[0.85]"
              style={{ color: '#FFFFFF' }}
            >
              {name}
            </h3>

            {/* GTM Quest Buttons */}
            {internalLink && (
              <div className="mt-16 flex gap-8 flex-wrap">
                <a
                  href="https://calendar.app.google/iEbf7PJA9qyiP9Ng9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-20 py-8 text-4xl font-black rounded-2xl transition-all shadow-2xl"
                  style={{
                    backgroundColor: primaryColor,
                    color: '#000'
                  }}
                >
                  Speak with us →
                </a>
                <Link
                  href={internalLink}
                  className="inline-block px-20 py-8 text-4xl font-black rounded-2xl transition-all shadow-2xl border-4"
                  style={{
                    backgroundColor: 'transparent',
                    color: primaryColor,
                    borderColor: primaryColor
                  }}
                >
                  Try AI Strategist →
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* PROMINENT BACKDROP BANNER IMAGE - FULL WIDTH */}
        {backdropUrl && (
          <div className="mb-32 rounded-3xl overflow-hidden shadow-2xl border-4" style={{ borderColor: primaryColor }}>
            <Image
              src={backdropUrl}
              alt={`${name} banner`}
              width={2400}
              height={400}
              className="w-full h-auto object-cover"
              style={{ maxHeight: '400px', minHeight: '300px' }}
            />
          </div>
        )}

        {/* Description - SMALLER than agency name */}
        <div className="mb-32">
          <p style={{ color: '#E5E5E5' }} className="text-2xl leading-relaxed font-light">
            {brandDescription.split('. ').map((sentence, i, arr) => (
              <span key={i}>
                {sentence}{i < arr.length - 1 ? '.' : ''}{i < arr.length - 1 && <><br/><br/></>}
              </span>
            ))}
          </p>
          {description.length > 1 && description.slice(1).map((para, i) => (
            <p key={i} style={{ color: '#E5E5E5' }} className="text-2xl leading-relaxed mt-10 font-light">
              {para.split('. ').map((sentence, j, arr) => (
                <span key={j}>
                  {sentence}{j < arr.length - 1 ? '.' : ''}{j < arr.length - 1 && <><br/><br/></>}
                </span>
              ))}
            </p>
          ))}
        </div>

        {/* Best For & Key Services - 3/4 width, centered */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32 pt-20 pb-20 border-t-4 border-b-4 rounded-3xl px-12 max-w-[75%] mx-auto"
          style={{
            borderColor: primaryColor,
            backgroundColor: `${primaryColor}10`
          }}
        >
          <div>
            <h4
              className="text-5xl font-black mb-12 uppercase tracking-wide"
              style={{ color: primaryColor }}
            >
              Best For
            </h4>
            <ul className="space-y-6">
              {bestFor.map((item, i) => (
                <li key={i} style={{ color: '#FFFFFF' }} className="text-2xl flex items-start gap-5 leading-relaxed font-light">
                  <span className="text-4xl font-black flex-shrink-0 mt-1" style={{ color: primaryColor }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-5xl font-black mb-12 uppercase tracking-wide"
              style={{ color: primaryColor }}
            >
              Key Services
            </h4>
            <ul className="space-y-6">
              {keyServices.map((item, i) => (
                <li key={i} style={{ color: '#FFFFFF' }} className="text-2xl flex items-start gap-5 leading-relaxed font-light">
                  <span className="text-4xl font-black flex-shrink-0 mt-1" style={{ color: primaryColor }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats (for top-ranked) */}
        {stats && stats.length > 0 && (
          <div
            className="flex items-center gap-20 pt-20 mt-20 border-t-4 rounded-2xl px-12 py-16"
            style={{
              borderColor: primaryColor,
              backgroundColor: `${primaryColor}08`
            }}
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <div style={{ color: primaryColor }} className="text-7xl font-black mb-4">{stat.value}</div>
                <div style={{ color: '#E5E5E5' }} className="text-2xl font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Website link */}
        {!internalLink && (
          <div className="mt-16">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: primaryColor }}
              className="text-xl opacity-70 hover:opacity-100 transition-opacity font-light inline-flex items-center gap-3"
            >
              {website.replace('https://', '').replace('http://', '').replace('www.', '')} →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
