import type { Metadata } from "next";
import content from "@/content.json";
import SiteHeaderNav from "@/components/layout/site-header-nav";
import SiteFooterSection from "@/components/layout/site-footer-section";
import "./globals.css";

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
    <html lang="ko">
      <body>
        <SiteHeaderNav />
        {children}
        <SiteFooterSection />
      </body>
    </html>
  );
}
