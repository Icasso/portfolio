import { education } from "@/data/education";

function EducationItem({
  edu,
  index,
}: {
  edu: (typeof education)[0];
  index: number;
}) {
  return (
    <article className="grid gap-6 md:grid-cols-[5rem_1fr] py-8 first:pt-0 border-b border-[var(--border-subtle)] last:border-b-0">
      <span className="font-mono text-xs text-muted-foreground tabular-nums pt-1">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <h3 className="display text-2xl sm:text-3xl leading-tight">
              {edu.title}
            </h3>
            <p className="text-sm text-muted-foreground">{edu.organization}</p>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground whitespace-nowrap">
            {edu.period}
          </span>
        </div>
        <div className="space-y-3 max-w-3xl">
          <p className="text-sm text-foreground/80">{edu.role}</p>
          {edu.highlights.length > 0 && (
            <ul className="space-y-2">
              {edu.highlights.map((highlight: string, i: number) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed text-muted-foreground pl-4 border-l border-[var(--border-subtle)]"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}

export function Education() {
  return (
    <div>
      {education.map((edu, index) => (
        <EducationItem key={edu.title} edu={edu} index={index} />
      ))}
    </div>
  );
}
