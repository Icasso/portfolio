import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Volunteering() {
  return (
    <div>
      <div className="grid gap-8">
        <Card className="w-full">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <CardTitle>Project Helper</CardTitle>
                <CardDescription>
                  HandsOn Hong Kong • Aug 2024 - Oct 2024
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="list-disc list-inside space-y-2.5 text-sm text-muted-foreground">
              <li>
                Designed and developed of a comprehensive Web3 Academy and
                Blockchain curriculum.
              </li>
              <li>
                Presented lessons in front of 15 - 20 students, enabling
                knowledge transfer to students, teachers, tutors, and partner
                organizations.{" "}
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
