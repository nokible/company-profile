import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
/*
 * [메타데이터 설정]
 * 브라우저 탭에 표시되는 제목(title)과 검색 엔진에 노출될 설명(description)을 정의합니다.
 */
export const metadata: Metadata = {
  title: "디엠팩 (Dmpack) - 스마트 물류 솔루션",
  description: "DMPACK, 수출포장 전문기업, 경상북도 구미시 산호대로 230 디엠팩, tel: 054-464-7220, email: dmpack@dmpack.co.kr",
};
/*
 * [루트 레이아웃 컴포넌트]
 * 모든 하위 페이지(page.tsx)들은 이 RootLayout의 'children' 속성으로 전달되어 화면에 그려집니다.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
