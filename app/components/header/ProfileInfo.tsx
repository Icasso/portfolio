import { memo } from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

export interface ProfileInfoProps {
  name: string;
  title: string;
  location: string;
  className?: string;
}

function ProfileInfoBase({
  name,
  title,
  location,
  className = "",
}: ProfileInfoProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          {name}
        </h1>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <h2 className="text-xl font-semibold text-primary">{title}</h2>
        <span className="text-muted-foreground">•</span>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>
        <Badge
          variant="secondary"
          className="gap-1.5 text-xs font-medium border-success/20 bg-success/10 text-success hover:bg-success/20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-glow" />
          Available for opportunities
        </Badge>
      </div>
    </div>
  );
}

export const ProfileInfo = memo(ProfileInfoBase);
