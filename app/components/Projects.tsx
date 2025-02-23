import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const projects = [
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

export function Projects() {
  return (
    <Card>
      <CardContent>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={project.title}>
              {index > 0 && <Separator className="mb-6" />}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <h3 className="font-semibold text-primary">
                      {project.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {project.date}
                  </span>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.links && (
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((link) => (
                        <Button
                          key={link.url}
                          size="sm"
                          asChild
                          className="gap-2"
                        >
                          <Link
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label}
                            {link.icon}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
