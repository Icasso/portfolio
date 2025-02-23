import { Metadata } from "next";

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
  ],
  openGraph: {
    title: "Portfolio Studio | Isaac Tsui",
    description:
      "Need a Silicon Valley startup-looking website? I can help you build a modern, eye-catching portfolio or web app with the latest tech stack.",
    url: "https://isaactsui.xyz/studio",
    siteName: "Isaac Tsui",
    images: [
      {
        url: "public/og-studio.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Studio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Studio | Isaac Tsui",
    description:
      "Need a Silicon Valley startup-looking website? I can help you build a modern, eye-catching portfolio or web app with the latest tech stack.",
    images: ["public/og-studio.png"],
  },
  alternates: {
    canonical: "https://isaactsui.xyz/studio",
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
