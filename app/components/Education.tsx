import { memo } from "react";
import { education } from "@/data/education";

interface EducationItemProps {
  edu: (typeof education)[0];
}

const EducationItem = memo(({ edu }: EducationItemProps) => {
  return (
    <div key={edu.title}>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
            <h3 className="font-semibold text-xl text-foreground">
              {edu.title}
            </h3>
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
    </div>
  );
});

EducationItem.displayName = "EducationItem";

function EducationBase() {
  return (
    <div className="grid gap-8">
      {education.map((edu) => (
        <EducationItem key={edu.title} edu={edu} />
      ))}
    </div>
  );
}

export const Education = memo(EducationBase);

// Create a named export object instead of anonymous default export
const EducationExports = { Education };
export default EducationExports;
