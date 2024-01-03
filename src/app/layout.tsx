import Providers from "./providers";
import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "HSB94 기술 블로그 | 사이드 프로젝트 블로그",
    description: "기술, 서비스, 감성을 들려드립니다.",
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
                    <Analytics />
                </Providers>
            </body>
        </html>
    );
}
