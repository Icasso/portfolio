import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <div className="space-y-7">
      {skillCategories.map((category) => (
        <div key={category.category}>
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-4">
              {category.category}
            </h3>
            <TooltipProvider>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <Badge variant="secondary" className="cursor-help">
                        {skill.name}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>{skill.details}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>
        </div>
      ))}
    </div>
  );
}
