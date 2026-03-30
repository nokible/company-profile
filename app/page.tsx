// app/page.tsx
// 디엠팩(Dmpack) 메인 회사 소개 페이지
// WMS 기반의 스마트 수출 포장 솔루션과 물류 인프라를 강조하는 레이아웃입니다.

import Link from "next/link";
import Image from "next/image";
import logoImg from "../public/logo.png";

export default function Home() {
  // [업데이트] 세부소개서 PDF 링크 (실제 URL로 교체 필요)
  const pdfIntroductionUrl = "https://dmpackwms.synology.me/img/DMPACK_Profile.pdf";
  return (
    // 전체 페이지를 감싸는 최상위 컨테이너
    // min-h-screen: 화면 전체 높이를 차지하도록 설정
    // bg-gray-50: 아주 연한 회색 배경으로 깔끔한 느낌 부여
    // text-gray-800: 기본 글자색을 진한 회색으로 설정하여 가독성 확보
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      
      {/* =========================================
          [1] 글로벌 네비게이션 바 (Header) 
          ========================================= */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        {/* max-w-6xl: 최대 너비 고정, mx-auto: 중앙 정렬 */}
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* 로고 영역 */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              {/* [업데이트] 이미지 로고 적용
                - src: /public 폴더 기준의 경로입니다. (/public/logo.png 파일 필요)
                - alt: 이미지가 안 보일 때 나올 대체 텍스트입니다.
                - width, height: 원본 비율에 맞게 적절히 조절해주세요. (보여지는 크기는 className으로 조절)
                - className: h-10(높이 2.5rem)으로 고정하고 너비는 자동(w-auto)으로 맞춥니다.
              */}
              <Image 
                src={logoImg} 
                alt="디엠팩 로고" 
                width={150} 
                height={40} 
                className="h-10 w-auto"
                priority // 메인 로고이므로 우선적으로 로딩하도록 설정
              />
              {/* 이미지가 있어도 검색 엔진 등을 위해 회사명을 텍스트로 남겨두되, 화면에서는 숨깁니다(sr-only). */}
              <span className="sr-only">주식회사 디엠팩 (Dmpack)</span>
            </Link>
          </div>
          
          {/* 데스크탑 메뉴 영역 (모바일에서는 hidden으로 숨김) */}
          <nav className="hidden md:flex gap-8 font-semibold text-gray-600">
            <Link href="#about" className="hover:text-blue-700 transition-colors">회사 소개</Link>
            <Link href="#process" className="hover:text-blue-700 transition-colors">업무 프로세스</Link>
            <Link href="#infrastructure" className="hover:text-blue-700 transition-colors">인프라 현황</Link>
          </nav>
        </div>
      </header>

      {/* =========================================
          본문 영역 (Main Content)
          ========================================= */}
      <main className="flex-grow">
        
        {/* =========================================
            [2] 히어로 섹션 (Hero Section) 
            - 회사의 첫인상을 결정하는 핵심 배너 영역입니다.
            ========================================= */}
        <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-28 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
              시스템이 검증하는 완벽한 수출 포장, <br className="hidden md:block" />
              디엠팩의 스마트 물류 솔루션
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-light">
              디엠팩은 고도화된 자체 WMS(창고관리시스템)를 통해 입고부터 출하까지의 <br className="hidden md:block" />
              전 과정을 투명하게 관리하는 수출 포장 전문 기업입니다. <br className="hidden md:block" />
              현업에 최적화된 맞춤형 시스템으로 오차 없는 정확성과 극대화된 업무 효율을 제공합니다.
            </p>
            {/* [업데이트] 버튼 그룹: 버튼 두 개를 나란히 배치합니다. (모바일에서는 세로 배치) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              {/* 기존 버튼 (주요 행동 CTA) */}
              <Link 
                href="#process" 
                className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg inline-block w-full sm:w-auto"
              >
                프로세스 알아보기
              </Link>

              {/* [업데이트] 세부소개서 다운로드 버튼 (보조 행동 CTA)
                - PDF 파일 링크이므로 Next.js의 <Link> 대신 일반 <a> 태그를 사용합니다.
                - target="_blank": 새 탭에서 링크를 엽니다.
                - rel="noopener noreferrer": 보안 및 성능을 위한 설정입니다.
                - className: 테두리만 있는 스타일(border-2)로 기존 버튼과 구분되게 디자인했습니다.
              */}
              <a 
                href={pdfIntroductionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition inline-block w-full sm:w-auto"
              >
                세부소개서 다운로드 (PDF)
              </a>
            </div>
          </div>
        </section>

        {/* =========================================
            [3] WMS 기반 3단계 프로세스 (Process Section)
            - 입고, 포장, 출하로 이어지는 플로우 차트를 카드 형태로 구현했습니다.
            ========================================= */}
        <section id="process" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">WMS 기반 통합 물류 Process</h2>
              <p className="text-gray-500 text-lg">데이터에 기반한 체계적 관리로 휴먼 에러를 원천 차단합니다.</p>
            </div>
            
            {/* grid-cols-1: 모바일에서는 1열 세로 배치 / md:grid-cols-3: 데스크탑에서는 3열 가로 배치 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              
              {/* Process Step 1: 입고 */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 relative z-10">
                <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center text-2xl font-bold mb-6">01</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">스마트 입고 및 검수</h3>
                <p className="text-gray-600 leading-relaxed">
                  납품된 물품을 수령하고 검수하는 즉시 자체 WMS 시스템에 입고 일시와 기본 정보를 저장합니다. 체계적인 시작으로 물품 이력 관리의 토대를 마련합니다.
                </p>
              </div>

              {/* Process Step 2: 포장 */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 relative z-10">
                <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center text-2xl font-bold mb-6">02</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">패킹 및 로케이션 관리</h3>
                <p className="text-gray-600 leading-relaxed">
                  개별 제품을 Box 단위로 포장합니다. 포장된 물품은 WMS와 연동되어 법인별 Location으로 명확하게 구분 적재되므로 즉각적인 추적이 가능합니다.
                </p>
              </div>

              {/* Process Step 3: 출하 */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 relative z-10">
                <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center text-2xl font-bold mb-6">03</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">오차 없는 출하 및 상차</h3>
                <p className="text-gray-600 leading-relaxed">
                  출하 지시서에 따라 Pallet를 구성하고 WMS 내에 등록합니다. 상차 전 바코드를 활용한 라벨 크로스 체킹으로 출고 단계의 오류를 완벽하게 차단합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            [4] 핵심 인프라 경쟁력 (Infrastructure Section)
            - 글로벌 네트워크, 전문 자격, 보안 시설 등을 강조합니다.
            ========================================= */}
        <section id="infrastructure" className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">전문 물류 인프라</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* 인프라 항목 1: 글로벌 네트워크 */}
              <div className="flex gap-6">
                <div className="text-5xl text-blue-600">🌏</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-800">글로벌 역량</h4>
                  <p className="text-gray-600 leading-relaxed">
                    베트남, 인도, 브라질, 멕시코, 미국, 유럽 등 전 세계 주요 거점으로 향하는 글로벌 수출 포장 노하우를 보유하여, 전 세계 어디든 빠르고 안전하게 연결합니다.
                  </p>
                </div>
              </div>

              {/* 인프라 항목 2: 특수 포장 자격 */}
              <div className="flex gap-6">
                <div className="text-5xl text-blue-600">📜</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-800">특수 포장 인증 전문 인력</h4>
                  <p className="text-gray-600 leading-relaxed">
                    항공 위험물(IATA DG)과 해운 위험물(IMDG) 특수 포장 자격 인증을 취득한 다수의 전문 인력을 보유하고 있으며, Wood Packing 전문 협력업체와 함께 까다롭고 위험한 화물도 규정에 맞게 완벽하게 취급합니다.
                  </p>
                </div>
              </div>

              {/* 인프라 항목 3: 대규모 창고 및 보안 */}
              <div className="flex gap-6">
                <div className="text-5xl text-blue-600">🛡️</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-800">철저한 보안 및 안전 시설</h4>
                  <p className="text-gray-600 leading-relaxed">
                    550평 규모의 넓은 창고에 Full HD급 CCTV 26대와 24시간 무인 경비시스템을 가동하고 있으며, 별도 화재보험 가입으로 고객의 자산을 끝까지 안전하게 보호하고 있습니다.
                  </p>
                </div>
              </div>

              {/* 인프라 항목 4: WMS 기반 관리 */}
              <div className="flex gap-6">
                <div className="text-5xl text-blue-600">💻</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-800">시스템 기반 통합 운영</h4>
                  <p className="text-gray-600 leading-relaxed">
                    물류 전반을 자체 WMS 시스템으로 촘촘하게 관리하며, 3톤 지게차 및 자동 리프트 등 하드웨어 장비와 소프트웨어를 유기적으로 결합하여 운영합니다.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* =========================================
          [5] 푸터 (Footer)
          - 회사 기본 정보 및 연락처 영역입니다.
          ========================================= */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div>
            <p className="font-bold text-white text-lg mb-4">주식회사 디엠팩 (DMPACK)</p>
            <p className="mb-1">대표자: 변광영 | 사업자등록번호: 513-81-87986</p>
            <p className="mb-1">전화: 054-464-7220 | 이메일: dmpack@dmpack.co.kr</p>
            <p className="mb-1">주소: 경상북도 구미시 산호대로 230 A동</p>
          </div>
          <div className="text-center md:text-right">
            <p className="mb-2">© {new Date().getFullYear()} Dmpack. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}