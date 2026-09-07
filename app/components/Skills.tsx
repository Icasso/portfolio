import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <div className="space-y-10">
      {skillCategories.map((category, index) => (
        <div
          key={category.category}
          className="grid gap-4 md:grid-cols-[5rem_1fr] border-b border-[var(--border-subtle)] pb-8 last:border-b-0 last:pb-0"
        >
          <span className="font-mono text-xs text-muted-foreground tabular-nums pt-1">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="display text-2xl mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <Badge
                  key={skill.name}
                  variant="outline"
                  title={skill.details}
                  className="cursor-help normal-case tracking-[0.06em]"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
