import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import ScrollReveal from "./components/ScrollReveal";
import CountUp from "./components/CountUp";

// 프로세스 섹션 단계 연결 화살표 — 데스크탑 가로, 모바일 세로
function StepArrow() {
  return (
    <>
      {/* 데스크탑: 오른쪽 화살표 */}
      <div className="hidden md:flex items-center justify-center flex-shrink-0 px-2 pt-7">
        <svg className="w-7 h-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
      {/* 모바일: 아래쪽 화살표 */}
      <div className="flex md:hidden justify-center py-2">
        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v14m0 0l-4-4m4 4l4-4" />
        </svg>
      </div>
    </>
  );
}

export default function Home() {
  const pdfIntroductionUrl = "https://dmpackwms.synology.me/img/DMPACK_Profile.pdf";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">

      {/* 헤더 — 모바일 햄버거 메뉴 포함, app/components/Header.tsx */}
      <Header />

      <main className="flex-grow">

        {/* Hero / 회사 소개 — nav의 #about 링크 대상 */}
        <section id="about" className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-600 text-white py-28 px-6 text-center">
          <Image
            src="/waregouse_bg_full.png"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
              시스템이 검증하는 완벽한 수출 포장, <br className="hidden md:block" />
              디엠팩의 스마트 물류 솔루션
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-light">
              디엠팩은 고도화된 자체 WMS(창고관리시스템)를 통해 입고부터 출하까지의 <br className="hidden md:block" />
              전 과정을 투명하게 관리하는 수출 포장 전문 기업입니다. <br className="hidden md:block" />
              현업에 최적화된 맞춤형 시스템으로 오차 없는 정확성과 극대화된 업무 효율을 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="#process"
                className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg inline-block w-full sm:w-auto"
              >
                프로세스 알아보기
              </Link>
              {/* PDF 외부 링크 — Next.js <Link> 대신 <a> 사용 */}
              <a
                href={pdfIntroductionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition inline-block w-full sm:w-auto"
              >
                세부소개서 다운로드 (PDF)
              </a>
            </div>

            {/* 핵심 수치 — 페이지 진입 시 카운터 애니메이션 재생 */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-8 max-w-md mx-auto">
              <div className="text-center">
                <p className="text-3xl font-extrabold">
                  <CountUp to={12} suffix="개+" duration={1200} />
                </p>
                <p className="text-xs text-blue-200 mt-1">글로벌 수출 거점</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold">
                  <CountUp to={550} suffix="평" duration={1800} />
                </p>
                <p className="text-xs text-blue-200 mt-1">창고 규모</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold">
                  <CountUp to={24} suffix="시간" duration={1200} />
                </p>
                <p className="text-xs text-blue-200 mt-1">무인 보안 운영</p>
              </div>
            </div>
          </div>
        </section>

        {/* 업무 프로세스 */}
        <section id="process" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">WMS 기반 통합 물류 Process</h2>
                <p className="text-gray-500 text-lg">데이터에 기반한 체계적 관리로 휴먼 에러를 원천 차단합니다.</p>
              </div>
            </ScrollReveal>

            {/* 화살표를 끼워 넣기 위해 grid 대신 flex 사용 */}
            <div className="flex flex-col md:flex-row items-stretch">
              <ScrollReveal delay={0} className="flex-1">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center text-2xl font-bold mb-6">01</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">스마트 입고 및 검수</h3>
                  <p className="text-gray-600 leading-relaxed">
                    납품된 물품을 수령하고 검수하는 즉시 자체 WMS 시스템에 입고 일시와 기본 정보를<br></br> 저장합니다. 체계적인 시작으로 물품 이력 관리의 토대를 마련합니다.
                  </p>
                </div>
              </ScrollReveal>

              <StepArrow />

              <ScrollReveal delay={150} className="flex-1">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center text-2xl font-bold mb-6">02</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">패킹 및 로케이션 관리</h3>
                  <p className="text-gray-600 leading-relaxed">
                    개별 제품을 Box 단위로 포장합니다. 포장된 물품은 WMS와 연동되어 법인별 Location으로 명확하게 구분 적재되므로<br></br> 즉각적인 추적이 가능합니다.
                  </p>
                </div>
              </ScrollReveal>

              <StepArrow />

              <ScrollReveal delay={300} className="flex-1">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center text-2xl font-bold mb-6">03</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">오차 없는 출하 및 상차</h3>
                  <p className="text-gray-600 leading-relaxed">
                    출하 지시서에 따라 Pallet를 구성하고 WMS 내에 등록합니다. 상차 전 바코드를 <br></br>활용한 라벨 크로스 체킹으로 출고 단계의 오류를 완벽하게 차단합니다.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 인프라 현황 */}
        <section id="infrastructure" className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">전문 물류 인프라</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal delay={0}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="text-4xl mb-5">🌏</div>
                  <h4 className="text-xl font-bold mb-3 text-gray-800">글로벌 역량</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    베트남, 인도, 브라질, 멕시코, 미국, 유럽 등 전 세계 주요 거점으로 향하는 <br></br>글로벌 수출 포장 노하우를 보유하여, 전 세계 어디든 빠르고 안전하게 연결합니다.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="text-4xl mb-5">📜</div>
                  <h4 className="text-xl font-bold mb-3 text-gray-800">특수 포장 인증 전문 인력</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    항공 위험물(IATA DG)과 해운 위험물(IMDG) 특수 포장 자격 인증을 취득한 다수의<br></br> 전문 인력을 보유하고 있으며, Wood Packing 전문 협력업체와 함께 까다롭고 위험한 화물도 규정에 맞게 완벽하게 취급합니다.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="text-4xl mb-5">🛡️</div>
                  <h4 className="text-xl font-bold mb-3 text-gray-800">철저한 보안 및 안전 시설</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    550평 규모의 넓은 창고에 Full HD급 CCTV 26대와 24시간 무인 경비시스템을 가동하고 있으며, 별도 화재보험 가입으로 고객의 자산을 끝까지 안전하게 보호합니다.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="text-4xl mb-5">💻</div>
                  <h4 className="text-xl font-bold mb-3 text-gray-800">시스템 기반 통합 운영</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    물류 전반을 자체 WMS 시스템으로 촘촘하게 관리하며, 3톤 지게차 및 자동 리프트 등 하드웨어 장비와 소프트웨어를 유기적으로 결합하여 운영합니다.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 문의 CTA */}
        <section className="py-24 px-6 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
              <p className="text-blue-200 text-lg mb-10">
                디엠팩의 스마트 물류 솔루션에 대해 궁금하신 점이 있으시면 언제든지 문의해 주세요. <br className="hidden md:block" />
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:054-464-7220"
                  className="flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  054-464-7220
                </a>
                <a
                  href="mailto:dmpack@dmpack.co.kr"
                  className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  dmpack@dmpack.co.kr
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div>
            <p className="font-bold text-white text-lg mb-4">주식회사 디엠팩 (DMPACK)</p>
            <p className="mb-1">대표자: 변광영 | 사업자등록번호: 513-81-87986</p>
            <p className="mb-1">
              전화: <a href="tel:054-464-7220" className="hover:text-white transition-colors">054-464-7220</a>
              {" | "}
              이메일: <a href="mailto:dmpack@dmpack.co.kr" className="hover:text-white transition-colors">dmpack@dmpack.co.kr</a>
            </p>
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
