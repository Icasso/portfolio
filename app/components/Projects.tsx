import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { memo } from "react";
import { projects } from "@/data/projects";

function ProjectsBase() {
  return (
    <Card className="card-hover border-2">
      <CardContent>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={project.title}>
              {index > 0 && <Separator className="mb-6" />}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <h3 className="font-semibold text-lg text-primary">
                      {project.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
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
                            {link.icon}
                            {link.label}
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

export const Projects = memo(ProjectsBase);

// Create a named export object instead of anonymous default export
const ProjectsExports = { Projects };
export default ProjectsExports;
