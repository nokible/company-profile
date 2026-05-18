import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// display: "swap" — 폰트 로딩 전에도 텍스트가 즉시 표시됨
const notoSansKR = Noto_Sans_KR({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

// OG 이미지는 1200×630px 전용 이미지로 교체하면 SNS 미리보기 품질이 개선됩니다.
// openGraph.url은 실제 운영 도메인으로 맞춰주세요.
export const metadata: Metadata = {
  title: "디엠팩 (DMPACK) - 스마트 물류 솔루션",
  description: "수출포장·물류 전문기업 디엠팩. WMS 기반 통합 물류 관리, 글로벌 수출 포장, IATA·IMDG 위험물 전문 취급. 경상북도 구미시.",
  openGraph: {
    title: "디엠팩 (DMPACK) - 스마트 물류 솔루션",
    description: "수출포장·물류 전문기업 디엠팩. WMS 기반 통합 물류 관리, 글로벌 수출 포장, IATA·IMDG 위험물 전문 취급.",
    type: "website",
    url: "https://dmpack.co.kr",
    siteName: "디엠팩 (DMPACK)",
    locale: "ko_KR",
    images: [{ url: "https://dmpack.co.kr/logo.png", alt: "디엠팩 로고" }],
  },
  twitter: {
    card: "summary",
    title: "디엠팩 (DMPACK) - 스마트 물류 솔루션",
    description: "수출포장·물류 전문기업 디엠팩. WMS 기반 통합 물류 관리, 글로벌 수출 포장.",
    images: ["https://dmpack.co.kr/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansKR.variable} h-full antialiased`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
