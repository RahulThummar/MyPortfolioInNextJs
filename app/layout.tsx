import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

import { GlobalBackground } from "@/components/global-background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahulthummar.com"), // Ensure to update if domain changes
  title: {
    default: "Rahul Thummar | Senior React.js & Next.js Developer",
    template: "%s | Rahul Thummar"
  },
  description: "Experienced Frontend Engineer specializing in React.js, Next.js, Vue.js, and TypeScript. Building high-performance, scalable web applications, real-time collaboration platforms, and AI-assisted developer tools in Surat, India.",
  keywords: [
    "Rahul Thummar", "React.js Developer", "Next.js Developer", "Frontend Engineer",
    "Web Developer Surat", "Vue.js Expert", "TypeScript Developer", "JavaScript",
    "WebRTC", "Socket.io", "Fabric.js", "Tailwind CSS", "Framer Motion", "React Developer India",
    "MERN Stack", "Frontend Architecture", "Real-time Applications", "CodeUtils",
    "AutoIncrementLog", "JoinMyClass", "Symphony Cloud", "GoFrontrowLive"
  ],
  authors: [{ name: "Rahul Thummar", url: "https://rahulthummar.com" }],
  creator: "Rahul Thummar",
  publisher: "Rahul Thummar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rahul Thummar | React.js & Next.js Expert",
    description: "Portfolio of Rahul Thummar, a Senior Frontend Engineer building high-performance scalable web applications with modern technologies.",
    url: "https://rahulthummar.com",
    siteName: "Rahul Thummar Portfolio",
    locale: "en_US",
    type: "profile",
    firstName: "Rahul",
    lastName: "Thummar",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Thummar | Frontend Engineer",
    description: "Experienced React.js and Next.js Developer.",
    creator: "@Rahulthummar327",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "add-your-google-site-verification-here", // User can replace this
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-text-primary bg-transparent overflow-x-hidden">
        <GlobalBackground />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
