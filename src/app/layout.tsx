import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "sonner";
import { MobileFrame } from "@/components/layout/mobile-frame";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "독서 습관 만들기",
  description: "선언하기로 독서 습관을 만들어줍니다. 하루 1분, 30일 여정.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <MobileFrame>{children}</MobileFrame>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
