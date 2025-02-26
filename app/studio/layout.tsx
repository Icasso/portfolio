import { Metadata } from "next";

const ogImage = {
  url: "/og-studio.png",
  width: 1200,
  height: 630,
  alt: "Portfolio Studio - Silicon Valley Style Web Development",
};

export const metadata: Metadata = {
  title: "Portfolio Studio | Isaac Tsui",
  description:
    "Need a Silicon Valley startup-looking website? I can help you build a modern, eye-catching portfolio or web app with the latest tech stack.",
  keywords: [
    "portfolio",
    "web development",
    "Silicon Valley",
    "startup",
    "Next.js",
    "React",
    "TypeScript",
    "Hong Kong",
    "web design",
    "UI/UX",
    "modern website",
    "portfolio development",
  ],
  openGraph: {
    title: "Portfolio Studio | Isaac Tsui",
    description:
      "Need a Silicon Valley startup-looking website? I can help you build a modern, eye-catching portfolio or web app with the latest tech stack.",
    url: "https://isaactsui.xyz/studio",
    siteName: "Isaac Tsui",
    images: [ogImage],
    locale: "en_US",
    alternateLocale: "zh_HK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Studio | Isaac Tsui",
    description:
      "Need a Silicon Valley startup-looking website? I can help you build a modern, eye-catching portfolio or web app with the latest tech stack.",
    creator: "@icasso_thm",
    images: [ogImage],
  },
  alternates: {
    canonical: "https://isaactsui.xyz/studio",
    languages: {
      "en-US": "https://isaactsui.xyz/studio",
      "zh-HK": "https://isaactsui.xyz/studio",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
