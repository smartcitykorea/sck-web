import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import content from "@/content.json";
import SiteHeaderNav from "@/components/layout/site-header-nav";
import SiteFooterSection from "@/components/layout/site-footer-section";
import "./globals.css";

// 사이트 전체 폰트 SSOT. 실제 font-family 지정은 globals.css의 body 한 곳에서만 한다.
const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  weight: "45 920",
  display: "swap",
  variable: "--font-pretendard",
});

// 로고 서체와 어울리는 영문 폰트. 한글 글리프가 없어서 한글은 자동으로 Pretendard로 대체된다.
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-montserrat",
});

// [임시 비교용] 로고 국문 서체 후보 2 - 페이퍼로지 (G마켓산스 한글 + Montserrat 영문 베이스)
const paperlogy = localFont({
  src: "./fonts/Paperlogy-7Bold.ttf",
  display: "swap",
  variable: "--font-paperlogy",
});

export const metadata: Metadata = {
  title: {
    default: content.site.title,
    template: `%s | ${content.site.title}`,
  },
  description: content.site.description,
  openGraph: {
    title: content.site.title,
    description: content.site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${montserrat.variable} ${paperlogy.variable}`}
    >
      <body>
        <SiteHeaderNav />
        {children}
        <SiteFooterSection />
      </body>
    </html>
  );
}
