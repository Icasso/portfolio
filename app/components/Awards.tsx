import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const awards = [
  {
    title: "X-ponential Starlight Award",
    organization: "OKX",
    year: "2024",
    details:
      "Recognition for outstanding contributions and exceptional performance in product development and innovation.",
    description:
      "Awarded for leading the development of innovative financial products and demonstrating exceptional technical expertise in implementing complex trading systems.",
    impact: [
      "Successfully launched multiple new financial products",
      "Improved system reliability and performance",
      "Demonstrated leadership in technical decision-making",
    ],
  },
  {
    title: "X-ponential Starlight Award",
    organization: "OKX",
    year: "2023",
    details:
      "Recognition for outstanding contributions and exceptional performance in product development and innovation.",
    description:
      "Recognized for significant contributions to the development and launch of structured financial products.",
    impact: [
      "Led development of multiple OTC products",
      "Implemented robust trading systems",
      "Enhanced product stability and performance",
    ],
  },
  {
    title: "Basic Principles Role Model",
    organization: "OKX",
    year: "2023",
    details:
      "Recognized for exemplifying company values and principles in professional conduct and work ethics.",
    description:
      "Selected as a role model for demonstrating exceptional adherence to company principles and professional excellence.",
    impact: [
      "Exemplary professional conduct",
      "Strong team collaboration",
      "Consistent high-quality deliverables",
    ],
  },
  {
    title: "Hong Kong Computer Society Student Sponsorship Nominee",
    organization: "City University of Hong Kong",
    year: "2022",
    details:
      "Nominated for academic excellence and contributions to the field of computer science.",
    description:
      "Nominated by faculty for outstanding academic performance and practical contributions to computer science projects.",
    impact: [
      "Maintained excellent academic standing",
      "Active participation in technical projects",
      "Demonstrated practical application of skills",
    ],
  },
  {
    title: "InfoTech Job Market Driven Scholarship Nominee",
    organization: "City University of Hong Kong",
    year: "2022",
    details:
      "Nominated for outstanding academic performance and market-relevant technical skills.",
    description:
      "Recognized for developing practical skills aligned with industry needs while maintaining strong academic performance.",
    impact: [
      "Strong academic performance in technical courses",
      "Development of industry-relevant skills",
      "Practical project implementations",
    ],
  },
];

export function Awards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" role="list">
      {awards.map((award) => (
        <HoverCard key={award.title + award.year}>
          <HoverCardTrigger asChild>
            <Card
              className="overflow-hidden cursor-pointer transition-colors hover:bg-muted"
              role="listitem"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <time
                    className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 rounded-bl text-sm font-medium"
                    dateTime={`${award.year}`}
                  >
                    {award.year}
                  </time>
                  <div className="p-6 pt-12">
                    <h3 className="font-semibold text-lg mb-2 text-primary">
                      {award.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      <span className="sr-only">Organization: </span>
                      {award.organization}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {award.description}
              </p>
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Key Achievements:</h4>
                <ul
                  className="text-sm text-muted-foreground list-disc list-inside space-y-1"
                  role="list"
                >
                  {award.impact.map((item, i) => (
                    <li key={i} role="listitem">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
