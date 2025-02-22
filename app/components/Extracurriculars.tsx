import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const activities = [
  {
    title: "Software Engineering Virtual Experience",
    organization: "JPMorgan Chase & Co.",
    role: "Virtual Program Participant",
    period: "2022",
    description:
      "Completed practical tasks in software engineering, focusing on real-world financial technology applications.",
    highlights: [
      "Interface with a stock price data feed",
      "Use JPMorgan Chase & Co. frameworks and tools",
      "Display data visually for traders",
    ],
  },
  {
    title: "Agile Virtual Experience Program",
    organization: "JPMorgan Chase & Co.",
    role: "Virtual Program Participant",
    period: "2022",
    description:
      "Gained hands-on experience with Agile methodologies and best practices in a financial technology context.",
    highlights: [
      "Agile development methodologies",
      "Sprint planning and execution",
      "Team collaboration and communication",
    ],
  },
  {
    title: "Engineering Virtual Program",
    organization: "Goldman Sachs",
    role: "Virtual Program Participant",
    period: "2022",
    description:
      "Participated in engineering-focused virtual program covering key aspects of financial technology.",
    highlights: [
      "Password cracking and security best practices",
      "Cryptography fundamentals",
      "Secure system design",
    ],
  },
  {
    title: "Google IT Automation with Python",
    organization: "Coursera",
    role: "Professional Certificate",
    period: "2021",
    description:
      "Comprehensive program covering Python programming and IT automation.",
    highlights: [
      "Python scripting for automation",
      "Git and GitHub fundamentals",
      "Configuration management and cloud services",
    ],
  },
  {
    title: "Django Developer Learning Path",
    organization: "LinkedIn",
    role: "Course Completion",
    period: "2021",
    description: "Comprehensive training in Django web development framework.",
    highlights: [
      "Full-stack web development with Django",
      "Database design and management",
      "RESTful API development",
    ],
  },
  {
    title: "RPG Adventure Development in Phaser",
    organization: "Zenva Academy",
    role: "Course Completion",
    period: "2020",
    description:
      "Game development course focusing on building RPG adventures using Phaser framework.",
    highlights: [
      "Game mechanics implementation",
      "Sprite animation and management",
      "Game state and scene handling",
    ],
  },
  {
    title: "Responsive Web Design",
    organization: "FreeCodeCamp",
    role: "Developer Certification",
    period: "2019",
    description:
      "Certification in modern responsive web design techniques and principles.",
    highlights: [
      "HTML5 and CSS3 fundamentals",
      "Responsive design patterns",
      "CSS Grid and Flexbox layouts",
    ],
  },
];

export function Extracurriculars() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {activities.map((activity) => (
        <HoverCard key={activity.title}>
          <HoverCardTrigger asChild>
            <Card className="overflow-hidden cursor-pointer transition-colors hover:bg-muted">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 rounded-bl text-sm font-medium">
                    {activity.period}
                  </div>
                  <div className="p-6 pt-12">
                    <h3 className="font-semibold text-lg mb-2 text-primary">
                      {activity.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {activity.role} • {activity.organization}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {activity.description}
              </p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                {activity.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
