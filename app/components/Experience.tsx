import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Software Engineer II",
    role: "Exchange Platform - Asset and Financial Product - Structured Financial Product",
    period: "Apr 2024 - Present",
    organization: "OKX",
    description: "",
    highlights: [
      "Building cool stuff",
      "Awards: 2024 X-ponential Starlight Award",
    ],
  },
  {
    title: "Software Engineer",
    role: "Exchange Platform - Asset and Financial Product - Structured Financial Product",
    period: "Apr 2022 - Apr 2024",
    organization: "OKX",
    description: "Supernova Graduation Program (class of 2022)",
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
    description: "",
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
          {experiences.map((experience) => (
            <div key={experience.title}>
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-semibold text-primary">
                      {experience.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {experience.organization}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {experience.role}
                  </p>
                  {experience.description && (
                    <p className="text-sm text-muted-foreground">
                      {experience.description}
                    </p>
                  )}
                  <ul className="text-sm text-muted-foreground list-disc list-inside pt-2 space-y-1">
                    {experience.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {experience.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
