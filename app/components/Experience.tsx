import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { NFTBadge } from "@/components/ui/nft-badge";

const experiences = [
  {
    title: "Software Engineer II",
    role: "Exchange Platform - Asset and Financial Product - Structured Financial Product",
    period: "Apr 2024 - Present",
    organization: "OKX",
    organizationUrl: "https://www.okx.com",
    type: "Full-time",
    description: "",
    highlights: [
      "Building cool stuff",
      "Awards: 2024 X-ponential Starlight Award",
    ],
    awards: [
      {
        title: "2024 X-ponential Starlight Award",
        description: "Recognized for exceptional contributions and innovation",
        imageUrl: "/awards/2024_x.gif",
        nftUrl:
          "https://www.okx.com/web3/marketplace/nft/asset/xlayer/0xfb97efcafa924be02fffc6f2de7892791c95be50/3?shortCode=NGbS5NC",
      },
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
    awards: [
      {
        title: "2023 X-ponential Starlight Award",
        description: "Recognized for outstanding performance and impact",
        imageUrl: "/awards/2023_x.png",
        nftUrl:
          "https://www.okx.com/web3/marketplace/nft/asset/polygon/0x32cd54b7f43ba5fd666ebfa9a325fe4b813d302f/3?shortCode=lWbQQ21",
      },
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
                  {experience.awards && experience.awards.length > 0 && (
                    <div className="flex gap-2 pt-2">
                      {experience.awards.map((award) => (
                        <NFTBadge
                          key={award.title}
                          imageUrl={award.imageUrl}
                          title={award.title}
                          description={award.description}
                          nftUrl={award.nftUrl}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
