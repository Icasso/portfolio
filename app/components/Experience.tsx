import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Collapsible } from "@/components/ui/collapsible";

export function Experience() {
  return (
    <div className="grid gap-8">
      <Card className="w-full">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <CardTitle>Software Enginner II</CardTitle>
              <CardDescription>OKX • Apr 2024 - Present</CardDescription>
              <CardDescription className="mt-1">
                Exchange Platform - Asset and Financial Product - Structured
                Financial Product
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <Collapsible>
            <ul className="list-disc list-inside space-y-2.5 text-sm text-muted-foreground">
              <li>Building cool stuff</li>
              <li>Awards: 2024 X-ponential Starlight Award</li>
            </ul>
          </Collapsible>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <CardTitle>Software Enginner</CardTitle>
              <CardDescription>OKX • Apr 2022 - Apr 2022</CardDescription>
              <CardDescription className="mt-1">
                Exchange Platform - Asset and Financial Product - Structured
                Financial Product
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="list-disc list-inside space-y-2.5 text-sm text-muted-foreground">
            <li>Supernova Graduation Program (class of 2022)</li>
            <li>2022 - Structured OTC Product - Dual Investment</li>
            <li>
              2022 - Structured OTC Product - Leveraged Forward (Pice Lock, Dip
              Sniper & Peak Sniper)
            </li>
            <li>2023 - Exotic OTC Product - Shark Fin</li>
            <li>
              2023 - Exotic OTC Product - Snowball Offline (External Market
              Maker: Darwinbit, MetaAlpha)
            </li>
            <li>2023 - Structured OTC Product - Seagull</li>
            <li>
              2024 - Exotic OTC Product - Snowball Online (Internal Market
              Maker)
            </li>
            <li>2024 - Exotic OTC Product - Snowball HODL</li>
            <li>
              Awards: 2023 Basic Principles Role Model, 2023 X-ponential
              Starlight Award
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <CardTitle>Industrial Placement Trainee</CardTitle>
              <CardDescription>
                HK Electric • Aug 2020 - May 2021
              </CardDescription>
              <CardDescription className="mt-1">
                Information Technology Division - Solutions Development
                Department - EOSS
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="list-disc list-inside space-y-2.5 text-sm text-muted-foreground">
            <li>
              Designed & built low-latency & real-time power plant monitoring
              dashboard
            </li>
            <li>
              Transitioned and migrated power plant database from Oracle SQL to
              OSISoft PI NoSQL
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
