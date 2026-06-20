import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CustomCursor } from "@/components/cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul Thummar | React.js Developer | Frontend Engineer",
  description: "Experienced React.js and Next.js Developer with 3.5+ years of experience building scalable web applications, developer tools, and real-time collaboration platforms.",
  openGraph: {
    title: "Rahul Thummar | React.js Developer | Frontend Engineer",
    description: "Experienced React.js and Next.js Developer with 3.5+ years of experience building scalable web applications, developer tools, and real-time collaboration platforms.",
    url: "https://rahulthummar.com",
    siteName: "Rahul Thummar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Thummar | React.js Developer | Frontend Engineer",
    description: "Experienced React.js and Next.js Developer with 3.5+ years of experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-text-primary bg-background overflow-x-hidden cursor-none md:cursor-auto">
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
