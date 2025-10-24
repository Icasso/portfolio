import { ReactNode } from "react";
import { GitHubLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons";

export interface ProjectLink {
  url: string;
  label: string;
  icon: ReactNode;
}

export interface Project {
  title: string;
  type: string;
  date: string;
  description: string;
  highlights: string[];
  technologies: string[];
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: "AI Professional Portrait SAAS",
    type: "Side Project",
    date: "2025",
    description:
      "A modern AI-powered professional portrait generator built with Next.js 15 and Google Gemini 2.5 Flash Image API. Transforms casual photos into professional headshots in 10 seconds. Features subscription plans and credit-based pricing with Stripe integration.",
    highlights: [
      "Built lightning-fast portrait generation (10 seconds) using Google Gemini 2.5 Flash Image API",
      "Implemented 4 professional styles: Business Formal, Business Casual, Smart Casual, and Casual",
      "Integrated Stripe for subscription management and credit pack purchases",
      "Designed responsive UI with drag-and-drop photo upload and before/after slider",
      "Built authentication and database system with Supabase",
      "Created freemium model with free trial and subscription tiers ($0.29-$0.55 per portrait)",
    ],
    technologies: [
      "Next.js 15",
      "Google Gemini 2.5 Flash Image API",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Tailwind CSS",
      "Shadcn/ui",
      "Lucide React",
    ],
    links: [
      {
        url: "https://ai-professional-portrait.vercel.app/",
        label: "View Project",
        icon: <ExternalLinkIcon className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Portfolio Studio",
    type: "Side Project",
    date: "2025",
    description:
      "A Silicon Valley startup-style web app showcase with bilingual support. Features modern UI elements, interactive animations, and a playful take on startup culture. Built as part of my portfolio website to demonstrate creative web development capabilities.",
    highlights: [
      "Implemented bilingual support (English/Cantonese) with smooth transitions",
      "Created interactive elements including rotating taglines and animated statistics",
      "Designed Silicon Valley-inspired badges and pricing showcase",
      "Built responsive carousel with automatic playback for pricing cards",
      "Optimized for SEO with metadata and Open Graph configuration",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn/ui",
      "SEO",
      "i18n",
    ],
    links: [
      {
        url: "https://isaactsui.xyz/studio",
        label: "View Project",
        icon: <ExternalLinkIcon className="w-4 h-4" />,
      },
      {
        url: "https://github.com/Icasso/portfolio",
        label: "Source Code",
        icon: <GitHubLogoIcon className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Personal Portfolio Website",
    type: "Side Project",
    date: "2025",
    description:
      "A modern, responsive portfolio website built with Next.js and TypeScript. Features a clean, professional design with interactive components. The website you are viewing right now!",
    highlights: [
      "Implemented modern UI components using shadcn/ui and Tailwind CSS",
      "Built with Next.js 14 App Router and TypeScript for type safety",
      "Utilized AI tools (Claude & Cursor) for efficient development",
      "Deployed with CI/CD pipeline on Vercel for automatic updates",
    ],
    technologies: [
      "Cursor AI Code Editor",
      "Claude AI",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "React",
      "Vercel",
      "CI/CD",
    ],
    links: [
      {
        url: "https://github.com/Icasso/portfolio",
        label: "View Project",
        icon: <GitHubLogoIcon className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Reddit Sentiment Index",
    type: "Academic Project",
    date: "2022",
    description:
      "Developed a sentiment analysis system using VADER to predict stock price movements based on Reddit discussions. Achieved Grade A and selected for the Final Year Project Showcase at City University of Hong Kong, representing top projects from the graduating cohort.",
    highlights: [
      "Selected as one of the outstanding projects for department-wide showcase",
      "Achieved Grade A for innovative approach and technical implementation",
      "Built a Streamlit web application for real-time sentiment analysis",
      "Implemented VADER sentiment analysis for Reddit comments and posts",
      "Analyzed correlations between Reddit sentiment and stock price movements",
      "Created interactive visualizations for sentiment trends and predictions",
      "Processed large volumes of Reddit data using Python and PRAW API",
    ],
    technologies: [
      "Python",
      "VADER",
      "Natural Language Processing",
      "Machine Learning",
      "Data Analysis",
      "Reddit API",
      "Financial Data",
    ],
    links: [
      {
        url: "https://www.cs.cityu.edu.hk/academic-programmes/bsc-computer-science/final-year-project-showcase-0#Year%202021-2022",
        label: "View Showcase",
        icon: <ExternalLinkIcon className="w-4 h-4" />,
      },
      {
        url: "https://github.com/Icasso/streamlit-fyp",
        label: "Streamlit App",
        icon: <GitHubLogoIcon className="w-4 h-4" />,
      },
      {
        url: "https://github.com/Icasso/DataSpell-EAP-Projects",
        label: "Data Analysis",
        icon: <GitHubLogoIcon className="w-4 h-4" />,
      },
    ],
  },
];
