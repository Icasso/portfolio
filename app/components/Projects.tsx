import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <div>
      {projects.map((project, index) => (
        <article
          key={project.title}
          className="grid gap-6 md:grid-cols-[5rem_1fr] py-8 first:pt-0 border-b border-[var(--border-subtle)] last:border-b-0"
        >
          <span className="font-mono text-xs text-muted-foreground tabular-nums pt-1">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <h3 className="display text-2xl sm:text-3xl leading-tight">
                  {project.title}
                </h3>
                <Badge variant="outline">{project.type}</Badge>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground whitespace-nowrap">
                {project.date}
              </span>
            </div>
            <div className="space-y-4 max-w-3xl">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed text-muted-foreground pl-4 border-l border-[var(--border-subtle)]"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              {project.links && (
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.links.map((link) => (
                    <Button key={link.url} size="sm" variant="outline" asChild>
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
        </article>
      ))}
    </div>
  );
}
