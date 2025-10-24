import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { memo } from "react";
import { experiences, Experience as ExperienceType } from "@/data/experience";

interface ExperienceItemProps {
  experience: ExperienceType;
  isLast: boolean;
}

const ExperienceItem = memo(({ experience, isLast }: ExperienceItemProps) => {
  return (
    <div key={experience.title}>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
            <h3 className="font-semibold text-primary">{experience.title}</h3>
            <Link
              href={experience.organizationUrl}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.organization}
            </Link>
            <Badge variant="secondary" className="text-xs">
              {experience.type}
            </Badge>
          </div>
          <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
            {experience.period}
          </span>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">{experience.role}</p>
          {experience.description && (
            <p className="text-sm text-muted-foreground">
              {experience.description}
            </p>
          )}
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            {experience.highlights.map((highlight: string, i: number) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech: string) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      {!isLast && <Separator className="mt-6" />}
    </div>
  );
});

ExperienceItem.displayName = "ExperienceItem";

function ExperienceBase() {
  return (
    <Card className="card-hover border-2">
      <CardContent>
        <div className="grid gap-6">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.title}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export const Experience = memo(ExperienceBase);

// Create a named export object instead of anonymous default export
const ExperienceExports = { Experience };
export default ExperienceExports;
