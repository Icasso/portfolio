import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    title: "Personal Portfolio Website",
    type: "Side Project",
    date: "2025",
    description:
      "A modern, responsive portfolio website built with Next.js and TypeScript. Features a clean, professional design with interactive components. The website you are viewing right now!",
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
        icon: <Github className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Reddit Sentiment Index",
    type: "Academic Project",
    date: "2022",
    description:
      "Developed a sentiment analysis system using VADER (Valence Aware Dictionary Sentiment Reasoner) to predict stock price movements based on Reddit discussions. Part of the Final Year Project showcase at City University of Hong Kong.",
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
        icon: <ExternalLink className="w-4 h-4" />,
      },
      {
        url: "https://github.com/Icasso/streamlit-fyp",
        label: "Streamlit App",
        icon: <Github className="w-4 h-4" />,
      },
      {
        url: "https://github.com/Icasso/DataSpell-EAP-Projects",
        label: "Data Analysis",
        icon: <Github className="w-4 h-4" />,
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
