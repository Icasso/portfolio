import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <Card>
      <CardContent>
        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <div key={category.category}>
              {index > 0 && <Separator className="mb-6" />}
              <div>
                <h3 className="font-semibold text-primary mb-3">
                  {category.category}
                </h3>
                <TooltipProvider>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <Tooltip key={skill.name}>
                        <TooltipTrigger asChild>
                          <Badge
                            variant="secondary"
                            className="cursor-help hover:bg-secondary/80"
                          >
                            {skill.name}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
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
      </CardContent>
    </Card>
  );
}
