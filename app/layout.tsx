import "@/app/globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import type React from "react";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
};

const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Isaac Tsui - Software Engineer Portfolio",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://isaactsui.xyz"),
  title: {
    default: "Isaac Tsui Hoi Ming - Software Engineer",
    template: "%s | Tsui Hoi Ming",
  },
  description:
    "Software Engineer with experience in financial technology, full-stack development, and distributed systems. Specializing in Java, Python, and .NET development.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Java",
    "Python",
    ".NET",
    "Financial Technology",
    "Trading Technology",
    "Web Development",
  ],
  authors: [{ name: "Isaac Tsui", url: "https://isaactsui.xyz" }],
  creator: "Isaac Tsui",
  publisher: "Isaac Tsui",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "zh_HK",
    url: "https://isaactsui.xyz",
    siteName: "Isaac Tsui",
    title: "Isaac Tsui Hoi Ming - Software Engineer",
    description:
      "Software Engineer with experience in financial technology, full-stack development, and distributed systems.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Tsui Hoi Ming - Software Engineer",
    description:
      "Software Engineer with experience in financial technology, full-stack development, and distributed systems.",
    creator: "@icasso_thm",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tsui Hoi Ming",
              "givenName": "Hoi Ming",
              "familyName": "Tsui",
              "alternateName": "Isaac Tsui",
              "jobTitle": "Software Engineer",
              "url": "https://isaactsui.xyz/",
              "sameAs": [
                "https://github.com/Icasso",
                "https://www.linkedin.com/in/isaactsui"
              ],
              "knowsAbout": [
                "Software Development",
                "Financial Technology",
                "Full Stack Development",
                "Java",
                "Python",
                ".NET"
              ],
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "City University of Hong Kong",
                "url": "https://www.cityu.edu.hk/"
              },
              "workLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "Hong Kong"
                }
              }
            }
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
