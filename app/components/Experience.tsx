import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { experiences, Experience as ExperienceType } from "@/data/experience";

function ExperienceItem({
  experience,
  index,
}: {
  experience: ExperienceType;
  index: number;
}) {
  return (
    <article className="grid gap-6 md:grid-cols-[5rem_1fr] py-8 first:pt-0 border-b border-[var(--border-subtle)] last:border-b-0">
      <span className="font-mono text-xs text-muted-foreground tabular-nums pt-1">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <h3 className="display text-2xl sm:text-3xl leading-tight">
              {experience.title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <Link
                href={experience.organizationUrl}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.organization}
              </Link>
              <Badge variant="outline">{experience.type}</Badge>
            </div>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground whitespace-nowrap">
            {experience.period}
          </span>
        </div>

        <div className="space-y-4 max-w-3xl">
          <p className="text-sm text-foreground/80">{experience.role}</p>
          {experience.description && (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {experience.description}
            </p>
          )}
          <ul className="space-y-2">
            {experience.highlights.map((highlight: string, i: number) => (
              <li
                key={i}
                className="text-sm leading-relaxed text-muted-foreground pl-4 border-l border-[var(--border-subtle)]"
              >
                {highlight}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 pt-1">
            {experience.technologies.map((tech: string) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Experience() {
  return (
    <div>
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={experience.title}
          experience={experience}
          index={index}
        />
      ))}
    </div>
  );
}
