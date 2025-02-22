import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const programmingLanguages = [
  {
    name: "Java",
    details: "Backend development, Spring Framework, Enterprise applications",
  },
  {
    name: "Python",
    details: "Data processing, APIs, Automation scripts",
  },
  {
    name: "C#",
    details: ".NET Core, ASP.NET, Desktop applications",
  },
  {
    name: ".NET",
    details: "Web APIs, Microservices, Enterprise solutions",
  },
  {
    name: "HTML",
    details: "Semantic markup, Responsive design, Web accessibility",
  },
  {
    name: "CSS",
    details: "Modern layouts, Flexbox, Grid, Animations",
  },
  {
    name: "JavaScript",
    details: "Frontend development, React, Node.js",
  },
];

const technologiesByCategory = [
  {
    category: "Database",
    items: [
      { name: "MySQL", details: "Relational database management" },
      { name: "Redis", details: "In-memory data store" },
      { name: "Oracle SQL", details: "Enterprise database management" },
    ],
  },
  {
    category: "Message Queue",
    items: [
      { name: "Apache Kafka", details: "Distributed streaming platform" },
    ],
  },
  {
    category: "CI/CD",
    items: [
      { name: "Git", details: "Version control" },
      { name: "GitLab", details: "DevOps platform" },
      { name: "JIRA", details: "Project management" },
      { name: "Heroku", details: "Cloud platform" },
      { name: "Kubernetes", details: "Container orchestration" },
      { name: "K6", details: "Load testing" },
      { name: "JUnit 5", details: "Testing framework" },
      { name: "Mockito", details: "Mocking framework" },
    ],
  },
  {
    category: "Cloud",
    items: [
      { name: "AliCloud", details: "Cloud computing platform" },
      { name: "Microsoft Azure", details: "Cloud services" },
    ],
  },
  {
    category: "Framework",
    items: [
      { name: "Spring Boot", details: "Java framework" },
      { name: "log4j2", details: "Logging framework" },
      { name: "Django", details: "Python web framework" },
    ],
  },
  {
    category: "Configuration Management",
    items: [{ name: "Apollo", details: "Distributed configuration center" }],
  },
  {
    category: "Monitoring",
    items: [{ name: "Grafana", details: "Metrics visualization" }],
  },
  {
    category: "Dependency Management",
    items: [{ name: "Maven", details: "Build automation tool" }],
  },
  {
    category: "Service Discovery",
    items: [{ name: "Nacos", details: "Service registry and configuration" }],
  },
  {
    category: "Tools",
    items: [
      { name: "macOS (unix)", details: "Operating system" },
      { name: "VS Code", details: "Code editor" },
      { name: "IntelliJ IDEA", details: "Java IDE" },
      { name: "PyCharm", details: "Python IDE" },
      { name: "DataGrip", details: "Database tool" },
    ],
  },
];

export function Skills() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid gap-6">
          <div>
            <h3 className="font-semibold mb-4">Programming Languages</h3>
            <TooltipProvider>
              <div className="flex flex-wrap gap-2">
                {programmingLanguages.map((lang) => (
                  <Tooltip key={lang.name}>
                    <TooltipTrigger asChild>
                      <div className="bg-primary text-primary-foreground rounded-md px-2 py-1 text-sm cursor-help">
                        {lang.name}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{lang.details}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>

          <Separator />

          {technologiesByCategory.map((category) => (
            <div key={category.category}>
              <h3 className="font-semibold mb-4">{category.category}</h3>
              <TooltipProvider>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((tech) => (
                    <Tooltip key={tech.name}>
                      <TooltipTrigger asChild>
                        <div className="bg-secondary text-secondary-foreground rounded-md px-2 py-1 text-sm cursor-help">
                          {tech.name}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{tech.details}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
