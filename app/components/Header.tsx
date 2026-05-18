'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../public/logo.png";

// 메뉴 항목 수정 시 이 배열만 편집하면 됩니다.
const NAV_LINKS = [
  { href: "#about", label: "회사 소개" },
  { href: "#process", label: "업무 프로세스" },
  { href: "#infrastructure", label: "인프라 현황" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <Image src={logoImg} alt="디엠팩 로고" width={150} height={40} className="h-10 w-auto" priority />
          <span className="sr-only">주식회사 디엠팩 (Dmpack)</span>
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex gap-8 font-semibold text-gray-600">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-blue-700 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 햄버거 버튼 (모바일 전용) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isOpen}
        >
          {/* ☰ → X 변환: rotate + translate로 교차 */}
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* 모바일 드롭다운 — display:none은 애니메이션 불가, max-h 트랜지션으로 슬라이드 구현 */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 pb-4 border-t border-gray-100 bg-white">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-4 font-semibold text-gray-600 hover:text-blue-700 transition-colors border-b border-gray-50 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
