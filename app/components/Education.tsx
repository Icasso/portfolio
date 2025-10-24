import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { memo } from "react";
import { education } from "@/data/education";

interface EducationItemProps {
  edu: (typeof education)[0];
  isLast: boolean;
}

const EducationItem = memo(({ edu, isLast }: EducationItemProps) => {
  return (
    <div key={edu.title}>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
            <h3 className="font-semibold text-primary">{edu.title}</h3>
            <span className="text-sm text-muted-foreground">
              {edu.organization}
            </span>
          </div>
          <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
            {edu.period}
          </span>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{edu.role}</p>
          {edu.highlights.length > 0 && (
            <ul className="text-sm text-muted-foreground list-disc list-inside pt-2 space-y-1">
              {edu.highlights.map((highlight: string, i: number) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {!isLast && <Separator className="mt-6" />}
    </div>
  );
});

EducationItem.displayName = "EducationItem";

function EducationBase() {
  return (
    <Card className="card-hover border-2">
      <CardContent>
        <div className="grid gap-6">
          {education.map((edu, index) => (
            <EducationItem
              key={edu.title}
              edu={edu}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export const Education = memo(EducationBase);

// Create a named export object instead of anonymous default export
const EducationExports = { Education };
export default EducationExports;
