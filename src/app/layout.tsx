import Providers from "./providers";
import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "HSB94 기술 블로그 | 사이드 프로젝트 블로그",
    description:
        "저의 블로그는 소소하지만 가치 있는 지식을 담아내는 기술 중심의 웹 사이트입니다. 저는 겸손한 크기에서도 풍부한 정보의 보고가 될 수 있다는 믿음으로, 실용적인 지식과 통찰을 집결시켜 귀중한 지식 저장소를 구축하고자 합니다.",
    keywords: "기술 플로그 | 사이드 프로젝트 | 1인 개발자",
    icons: {
        icon: "/images/emoji.png",
    },
    openGraph: {
        images: ["/images/developer.png"],
    },
    twitter: {
        images: ["/images/developer.png"],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning className={sans.className}>
            <body className="flex flex-col bg-background-default dark:bg-background-dark">
                <Providers>
                    <Navbar />
                    {children}
                    <Footer />

                    
                </Providers>
                <Analytics />
                    <SpeedInsights />
            </body>
        </html>
    );
}
