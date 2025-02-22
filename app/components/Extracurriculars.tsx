import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

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
  const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: true }));

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {activities.map((activity) => (
            <CarouselItem
              key={activity.title}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 min-h-[200px]"
            >
              <div className="h-full">
                <Card
                  className="overflow-hidden cursor-pointer transition-colors hover:bg-muted h-[180px] border"
                  role="listitem"
                  onClick={() => {
                    toast(activity.title, {
                      description: (
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">
                            {activity.description}
                          </p>
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium">Highlights:</h4>
                            <ul
                              className="text-sm text-muted-foreground list-disc list-inside space-y-1"
                              role="list"
                            >
                              {activity.highlights.map((highlight, i) => (
                                <li key={i} role="listitem">
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ),
                      duration: 5000,
                    });
                  }}
                >
                  <CardContent className="p-0 h-full">
                    <div className="relative h-full">
                      <time
                        className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 rounded-bl text-sm font-medium"
                        dateTime={activity.period}
                      >
                        {activity.period}
                      </time>
                      <div className="p-6 pt-12 flex flex-col justify-between h-full">
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-primary line-clamp-2">
                            {activity.title}
                          </h3>
                          <p className="text-sm font-medium text-muted-foreground line-clamp-2">
                            {activity.role} • {activity.organization}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}
