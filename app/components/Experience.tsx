import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const experiences = [
  {
    title: "Software Engineer II",
    role: "Exchange Platform - Asset and Financial Product - Structured Financial Product",
    period: "Apr 2024 - Present",
    organization: "OKX",
    organizationUrl: "https://www.okx.com",
    type: "Full-time",
    description: "",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Redis",
      "Kafka",
      "Microservices",
      "Kubernetes",
    ],
    highlights: [
      "Building cool stuff...",
      "Awards: 2024 X-ponential Starlight Award",
    ],
  },
  {
    title: "Software Engineer",
    role: "Exchange Platform - Asset and Financial Product - Structured Financial Product",
    period: "Apr 2022 - Apr 2024",
    organization: "OKX",
    organizationUrl: "https://www.okx.com",
    type: "Full-time",
    description: "Supernova Graduation Program (class of 2022)",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Redis",
      "Kafka",
      "Microservices",
      "Kubernetes",
      "AliCloud",
      "Caffeine",
      "CI/CD",
      "K6",
      "JUnit",
      "RESTful APIs",
      "Event-Driven Architecture",
      "Distributed Systems",
    ],
    highlights: [
      "2022 - Structured OTC Product - Dual Investment",
      "2022 - Structured OTC Product - Leveraged Forward (Pice Lock, Dip Sniper & Peak Sniper)",
      "2023 - Exotic OTC Product - Shark Fin",
      "2023 - Exotic OTC Product - Snowball Offline (External Market Maker: Darwinbit, MetaAlpha)",
      "2023 - Structured OTC Product - Seagull",
      "2024 - Exotic OTC Product - Snowball Online (Internal Market Maker)",
      "2024 - Exotic OTC Product - Snowball HODL",
      "Awards: 2023 Basic Principles Role Model, 2023 X-ponential Starlight Award",
    ],
  },
  {
    title: "Industrial Placement Trainee",
    role: "Information Technology Division - Solutions Development Department - EOSS",
    period: "Aug 2020 - May 2021",
    organization: "HK Electric",
    organizationUrl: "https://www.hkelectric.com",
    type: "Internship",
    description: "",
    technologies: [".NET Core", "C#", "SQL Server", "OSISoft PI", "Azure"],
    highlights: [
      "Designed & built low-latency & real-time power plant monitoring dashboard",
      "Transitioned and migrated power plant database from Oracle SQL to OSISoft PI NoSQL",
    ],
  },
];

export function Experience() {
  return (
    <Card>
      <CardContent>
        <div className="grid gap-6">
          {experiences.map((experience, index) => (
            <div key={experience.title}>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <h3 className="font-semibold text-primary">
                      {experience.title}
                    </h3>
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
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {experience.period}
                  </span>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {experience.role}
                  </p>
                  {experience.description && (
                    <p className="text-sm text-muted-foreground">
                      {experience.description}
                    </p>
                  )}
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                    {experience.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              {index < experiences.length - 1 && <Separator className="mt-6" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
