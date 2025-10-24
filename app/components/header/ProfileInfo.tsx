import { memo } from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";

export interface ProfileInfoProps {
  name: string;
  title: string;
  location: string;
  avatarSrc?: string;
  className?: string;
}

function ProfileInfoBase({
  name,
  title,
  location,
  avatarSrc = "/icon.png",
  className = "",
}: ProfileInfoProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between gap-4 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          {name}
        </h1>
        <Image
          src={avatarSrc}
          alt={name}
          width={80}
          height={80}
          className="rounded-full border-2 border-foreground flex-shrink-0"
          priority
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <h2 className="text-base font-semibold text-foreground">{title}</h2>
        <span className="text-muted-foreground">•</span>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>
      </div>
    </div>
  );
}

export const ProfileInfo = memo(ProfileInfoBase);
