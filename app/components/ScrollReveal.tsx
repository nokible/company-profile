'use client'

import { useRef, useEffect, useState, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number // 애니메이션 시작 지연 (ms) — 카드를 순서대로 나타낼 때 사용
}

export default function ScrollReveal({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 } // 요소가 10% 이상 화면에 진입하면 트리거
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      // delay는 visible이 된 후에만 적용 — 등장 전 딜레이가 다음 스크롤에 영향 주지 않도록
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
