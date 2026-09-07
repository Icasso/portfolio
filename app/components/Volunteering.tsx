import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { volunteering } from "@/data/volunteering";

function VolunteerItem({
  volunteer,
  index,
}: {
  volunteer: (typeof volunteering)[0];
  index: number;
}) {
  return (
    <article className="grid gap-6 md:grid-cols-[5rem_1fr] py-8 first:pt-0 border-b border-[var(--border-subtle)] last:border-b-0">
      <span className="font-mono text-xs text-muted-foreground tabular-nums pt-1">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <h3 className="display text-2xl sm:text-3xl leading-tight">
              {volunteer.title}
            </h3>
            <Link
              href={volunteer.organizationUrl}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {volunteer.organization}
            </Link>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground whitespace-nowrap">
            {volunteer.period}
          </span>
        </div>
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm text-foreground/80">{volunteer.role}</p>
          {volunteer.description && (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {volunteer.description}
            </p>
          )}
          <ul className="space-y-2">
            {volunteer.highlights.map((highlight, i) => (
              <li
                key={i}
                className="text-sm leading-relaxed text-muted-foreground pl-4 border-l border-[var(--border-subtle)]"
              >
                {highlight}
              </li>
            ))}
          </ul>
          {volunteer.image && (
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-foreground">
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
            <div className="flex flex-wrap gap-2 pt-1">
              {volunteer.badges.map((badge) => (
                <Badge key={badge} variant="outline">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
          {volunteer.linkedInUrl && (
            <div>
              <Button size="sm" variant="outline" asChild>
                <Link
                  href={volunteer.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export function Volunteering() {
  return (
    <div>
      {volunteering.map((volunteer, index) => (
        <VolunteerItem
          key={volunteer.title}
          volunteer={volunteer}
          index={index}
        />
      ))}
    </div>
  );
}
