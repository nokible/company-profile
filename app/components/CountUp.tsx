'use client'

import { useRef, useEffect, useState } from 'react'

interface Props {
  to: number
  suffix?: string
  duration?: number // 애니메이션 총 재생 시간 (ms)
}

export default function CountUp({ to, suffix = '', duration = 1500 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // easeOutCubic: 처음엔 빠르게, 숫자가 목표에 가까워질수록 느려짐
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * to))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(to)
    }
    requestAnimationFrame(step)
  }, [started, to, duration])

  return <span ref={ref}>{count}{suffix}</span>
}
