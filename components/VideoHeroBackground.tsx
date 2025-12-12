'use client'

import { useState } from 'react'
import MuxVideo from '@mux/mux-video-react'

interface VideoHeroBackgroundProps {
  playbackId?: string
  fallbackGradient?: boolean
}

export function VideoHeroBackground({
  playbackId,
  fallbackGradient = true
}: VideoHeroBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // If no playback ID or error, show gradient fallback
  if (!playbackId || hasError) {
    if (!fallbackGradient) return null
    return (
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900" />
        {/* Animated pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="heroGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#heroGrid)" />
          </svg>
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Mux Video Player - handles HLS streaming automatically */}
      <MuxVideo
        playbackId={playbackId}
        autoPlay="muted"
        loop
        muted
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover transition-opacity duration-1000"
        style={{ opacity: isLoaded ? 1 : 0 }}
      />

      {/* Loading state - gradient while video loads */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 animate-pulse" />
      )}

      {/* Subtle dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  )
}
