'use client'

import { useUser } from '@stackframe/stack'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AuthAwareHumeWidget } from '@/components/AuthAwareHumeWidget'

export default function GTMAssistantPage() {
  const user = useUser()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Redirect to sign in if not authenticated
    if (!user && mounted) {
      router.push('/handler/sign-in')
    }
  }, [user, mounted, router])

  if (!mounted || !user) {
    return null
  }

  const firstName = user?.displayName?.split(' ')[0] || 'there'

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-black to-black" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'drift 20s linear infinite'
          }}
        />
        <style>{`
          @keyframes drift {
            0% { transform: translateY(0px); }
            100% { transform: translateY(50px); }
          }
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
        `}</style>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-50" style={{ animation: 'pulse-glow 4s ease-in-out infinite' }} />

      {/* Content */}
      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center px-6">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full backdrop-blur">
            <span className="text-sm font-bold text-blue-300 uppercase tracking-wider">BETA</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
            GTM AI Assistant
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Your voice-powered go-to-market strategist. Ask anything about building GTM plans, winning sales, and scaling revenue.
          </p>

          <div className="flex items-center justify-center gap-3 text-sm text-gray-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Voice AI Assistant • Currently in Development</span>
          </div>
        </div>

        {/* Hume Voice Widget */}
        <div className="mb-8">
          <AuthAwareHumeWidget />
        </div>

        {/* Instructions */}
        <div className="mt-12 max-w-2xl text-center">
          <p className="text-white/60 text-sm md:text-base">
            Click the microphone button and ask about go-to-market strategy, sales tactics, market positioning, pricing, channel strategy, or anything GTM-related.
          </p>
        </div>

        {/* Footer Info */}
        <div className="absolute bottom-6 left-6 right-6 flex justify-center gap-8 text-xs text-white/40">
          <span>Powered by Hume AI</span>
          <span>•</span>
          <span>GTM Strategy</span>
          <span>•</span>
          <span>Voice-First Interface</span>
        </div>
      </div>
    </div>
  )
}
