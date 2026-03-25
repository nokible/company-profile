import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /*
   * [정적 웹사이트 내보내기 설정]
   * output: "export" 옵션은 Next.js가 동적인 Node.js 서버를 구동하는 대신,
   * HTML, CSS, 정적 자바스크립트 파일들로만 구성된 'out' 폴더를 빌드 결과물로 생성하게 합니다.
   * GitHub Pages는 서버 로직을 실행할 수 없고 정적 파일만 호스팅하므로 배포를 위한 필수 설정입니다.
   */
  output: "export",

  /*
   * [이미지 최적화 비활성화 설정]
   * Next.js의 내장 <Image> 컴포넌트는 기본적으로 서버 사이드에서 이미지 리사이징 및 최적화를 시도합니다.
   * 하지만 정적 내보내기(export) 상태나 GitHub Pages 환경에서는 이 최적화를 수행할 서버가 없으므로
   * 빌드 또는 렌더링 에러가 발생합니다.
   * 따라서 unoptimized 속성을 true로 설정하여 최적화 과정을 생략하고 원본 이미지를 그대로 렌더링하도록 처리합니다.
   */
  images: {
    unoptimized: true,
  },

  /*
   * [기본 경로 설정 - 커스텀 도메인 사용 시 생략 가능]
   * 만약 커스텀 도메인 없이 'https://[사용자명].github.io/[저장소명]' 형태의 기본 주소를 사용하신다면,
   * CSS나 이미지 파일의 경로가 꼬이지 않도록 아래 basePath 설정의 주석을 풀고 '/[저장소명]'을 입력해야 합니다.
   * (예: GitHub 저장소 이름이 company-profile 이라면 basePath: "/company-profile")
   * 나중에 구매하신 커스텀 도메인을 바로 연결할 예정이시라면 이 부분은 주석 처리 그대로 두셔도 무방합니다.
   */
  //basePath: "/company-profile",
};

export default nextConfig;
