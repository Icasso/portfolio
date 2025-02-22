import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Education() {
  return (
    <div className="grid gap-8">
      <Card className="w-full">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <CardTitle>Bachelor of Science in Computer Science</CardTitle>
              <CardDescription>
                City University of Hong Kong • Sep 2018 - Jun 2022
              </CardDescription>
              <CardDescription className="mt-1">
                Faculty of Science and Engineering
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="list-disc list-inside space-y-2.5 text-sm text-muted-foreground">
            <li>Dean&apos;s List</li>
            <li>
              Grade A Final Year Thesis Project: Reddit Sentiment Index: Stock
              Price Movement Prediction with Valence Aware Dictionary Sentiment
              Reasoner
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <CardTitle>Hong Kong Diploma of Secondary Education</CardTitle>
              <CardDescription>
                Ying Wa College • Sep 2012 - Jun 2018
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
