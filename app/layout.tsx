import "@/app/globals.css";
import { Inter } from "next/font/google";
import type React from "react";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://isaactsui.xyz/"),
  title: {
    default: "Isaac Tsui Hoi Ming - Software Engineer",
    template: "%s | Isaac's Portfolio",
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
  openGraph: {
    title: "Isaac Tsui Hoi Ming - Software Engineer",
    description:
      "Software Engineer with experience in financial technology, full-stack development, and distributed systems.",
    type: "website",
    locale: "en_US",
    siteName: "Isaac's Portfolio",
    images: ["https://raw.githubusercontent.com/Icasso/portfolio/refs/heads/main/public/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Tsui Hoi Ming - Software Engineer",
    description:
      "Software Engineer with experience in financial technology, full-stack development, and distributed systems.",
    images: ["https://raw.githubusercontent.com/Icasso/portfolio/refs/heads/main/public/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "hhE-HfO-ctbXqBG4NIMfgEMRMIlrljlyBlFA0U1MSy4",
  },
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
              "jobTitle": "Software Engineer",
              "url": "https://isaactsui.xyz/",
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
                "name": "City University of Hong Kong"
              }
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
