import { Card, CardContent } from "@/components/ui/card";

const volunteering = [
  {
    title: "Project Helper",
    organization: "HandsOn Hong Kong",
    role: "Web3 Academy and Blockchain Curriculum Teacher",
    period: "Aug 2024 - Oct 2024",
    description: "",
    highlights: [
      "Designed and developed of a comprehensive Web3 Academy and Blockchain curriculum.",
      "Presented lessons in front of 15 - 20 students, enabling knowledge transfer to students, teachers, tutors, and partner organizations.",
    ],
  },
];

export function Volunteering() {
  return (
    <Card>
      <CardContent>
        <div className="grid gap-6">
          {volunteering.map((volunteer) => (
            <div key={volunteer.title}>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <h3 className="font-semibold text-primary">
                      {volunteer.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {volunteer.organization}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {volunteer.period}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    {volunteer.role}
                  </p>
                  {volunteer.description && (
                    <p className="text-sm text-muted-foreground">
                      {volunteer.description}
                    </p>
                  )}
                  <ul className="text-sm text-muted-foreground list-disc list-inside pt-2 space-y-1">
                    {volunteer.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
