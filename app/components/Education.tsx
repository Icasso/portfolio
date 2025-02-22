import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    title: "Bachelor of Science in Computer Science",
    organization: "City University of Hong Kong",
    role: "Faculty of Science and Engineering",
    period: "Sep 2018 - Jun 2022",
    highlights: [
      "Dean's List",
      "Grade A Final Year Thesis Project: Reddit Sentiment Index: Stock Price Movement Prediction with Valence Aware Dictionary Sentiment Reasoner",
    ],
  },
  {
    title: "Hong Kong Diploma of Secondary Education",
    organization: "Ying Wa College",
    role: "Secondary Education",
    period: "Sep 2012 - Jun 2018",
    highlights: [],
  },
];

export function Education() {
  return (
    <Card>
      <CardContent>
        <div className="grid gap-6">
          {education.map((edu) => (
            <div key={edu.title}>
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-semibold text-primary">{edu.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {edu.organization}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.role}</p>
                  {edu.highlights.length > 0 && (
                    <ul className="text-sm text-muted-foreground list-disc list-inside pt-2 space-y-1">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
