import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { memo } from "react";
import { volunteering } from "@/data/volunteering";

interface VolunteerItemProps {
  volunteer: (typeof volunteering)[0];
}

const VolunteerItem = memo(({ volunteer }: VolunteerItemProps) => {
  return (
    <div key={volunteer.title}>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
            <h3 className="font-semibold text-primary">{volunteer.title}</h3>
            <Link
              href={volunteer.organizationUrl}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {volunteer.organization}
            </Link>
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {volunteer.period}
          </span>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">{volunteer.role}</p>
          {volunteer.description && (
            <p className="text-sm text-muted-foreground">
              {volunteer.description}
            </p>
          )}
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            {volunteer.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
          {volunteer.image && (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
              <Image
                src={volunteer.image}
                alt={`${volunteer.title} at ${volunteer.organization}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
          )}
          {volunteer.badges && (
            <div className="flex flex-wrap gap-2 pt-2">
              {volunteer.badges.map((badge) => (
                <Badge key={badge} variant="outline" className="text-xs">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
          {volunteer.linkedInUrl && (
            <div>
              <Button size="sm" asChild className="gap-2">
                <Link
                  href={volunteer.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

VolunteerItem.displayName = "VolunteerItem";

function VolunteeringBase() {
  return (
    <Card>
      <CardContent>
        <div className="grid gap-6">
          {volunteering.map((volunteer) => (
            <VolunteerItem key={volunteer.title} volunteer={volunteer} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export const Volunteering = memo(VolunteeringBase);

// Create a named export object instead of anonymous default export
const VolunteeringExports = { Volunteering };
export default VolunteeringExports;
