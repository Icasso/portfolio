import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

const skillCategories = [
  {
    category: "Programming",
    items: [
      {
        name: "Java",
        details:
          "Backend development, Spring Framework, Enterprise applications",
      },
      { name: "Python", details: "Data processing, APIs, Automation scripts" },
      { name: "C#", details: ".NET Core, ASP.NET, Desktop applications" },
      {
        name: ".NET",
        details: "Web APIs, Microservices, Enterprise solutions",
      },
      {
        name: "HTML",
        details: "Semantic markup, Responsive design, Web accessibility",
      },
      { name: "CSS", details: "Modern layouts, Flexbox, Grid, Animations" },
      { name: "JavaScript", details: "Frontend development, React, Node.js" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "English", details: "Native proficiency" },
      { name: "Cantonese", details: "Native proficiency" },
      { name: "Chinese", details: "Native proficiency" },
    ],
  },
  {
    category: "Technologies",
    items: [
      { name: "MySQL", details: "Relational database management" },
      { name: "Redis", details: "In-memory data store" },
      { name: "Oracle SQL", details: "Enterprise database management" },
      { name: "Apache Kafka", details: "Distributed streaming platform" },
      { name: "Spring Boot", details: "Java framework" },
      { name: "Django", details: "Python web framework" },
      { name: "Docker", details: "Containerization" },
      { name: "Kubernetes", details: "Container orchestration" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", details: "Version control" },
      { name: "GitLab", details: "DevOps platform" },
      { name: "JIRA", details: "Project management" },
      { name: "Heroku", details: "Cloud platform" },
      { name: "AliCloud", details: "Cloud computing platform" },
      { name: "Azure", details: "Cloud services" },
      { name: "VS Code", details: "Code editor" },
      { name: "IntelliJ IDEA", details: "Java IDE" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Apollo", details: "Distributed configuration center" },
      { name: "Grafana", details: "Metrics visualization" },
      { name: "Maven", details: "Build automation tool" },
      { name: "Nacos", details: "Service registry and configuration" },
      { name: "log4j2", details: "Logging framework" },
    ],
  },
];

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
