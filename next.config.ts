import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages 정적 배포 — 빌드 결과물을 out/ 폴더에 생성
  output: "export",

  // 정적 export 환경에서는 이미지 최적화 서버가 없으므로 비활성화
  images: {
    unoptimized: true,
  },

  // 커스텀 도메인 없이 github.io/저장소명 형태로 배포할 경우 주석 해제
  // basePath: "/company-profile",
};

export default nextConfig;
