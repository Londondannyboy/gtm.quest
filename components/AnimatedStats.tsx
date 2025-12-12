'use client'

import { useEffect, useRef, useState } from 'react'

interface StatItem {
  value: number
  suffix?: string
  prefix?: string
  label: string
  description?: string
}

interface AnimatedStatsProps {
  stats: StatItem[]
  variant?: 'default' | 'minimal' | 'cards'
}

function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!startOnView) {
      animateCount()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
          animateCount()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, hasStarted, startOnView])

  const animateCount = () => {
    const startTime = Date.now()
    const startValue = 0

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }

  return { count, ref }
}

function AnimatedNumber({ stat }: { stat: StatItem }) {
  const { count, ref } = useCountUp(stat.value)

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-data font-bold text-white mb-2">
        {stat.prefix}
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="text-lg font-semibold text-purple-200">{stat.label}</div>
      {stat.description && (
        <div className="text-sm text-purple-300 mt-1">{stat.description}</div>
      )}
    </div>
  )
}

export function AnimatedStats({ stats, variant = 'default' }: AnimatedStatsProps) {
  if (variant === 'minimal') {
    return (
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {stats.map((stat, i) => (
          <AnimatedNumber key={i} stat={stat} />
        ))}
      </div>
    )
  }

  if (variant === 'cards') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => {
          const { count, ref } = useCountUp(stat.value)
          return (
            <div
              key={i}
              ref={ref}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-data font-bold text-white mb-2">
                {stat.prefix}
                {count.toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-sm font-medium text-purple-200">{stat.label}</div>
            </div>
          )
        })}
      </div>
    )
  }

  // Default variant - horizontal bar
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <AnimatedNumber key={i} stat={stat} />
        ))}
      </div>
    </div>
  )
}

// Export a simpler version for use anywhere
export function StatCounter({
  value,
  prefix = '',
  suffix = '',
  label,
  className = ''
}: {
  value: number
  prefix?: string
  suffix?: string
  label: string
  className?: string
}) {
  const { count, ref } = useCountUp(value)

  return (
    <div ref={ref} className={className}>
      <span className="font-data font-bold">
        {prefix}{count.toLocaleString()}{suffix}
      </span>
      {label && <span className="text-sm text-gray-500 ml-1">{label}</span>}
    </div>
  )
}
