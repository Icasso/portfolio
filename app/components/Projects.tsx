import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    link: "https://github.com/Icasso/portfolio",
  },
];

export function Projects() {
  return (
    <Card>
      <CardContent>
        <div className="grid gap-6">
          {projects.map((project) => (
            <div key={project.title} className="group">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-semibold text-primary">
                      <a href={project.link} className="hover:underline">
                        {project.title}
                      </a>
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
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
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {project.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
