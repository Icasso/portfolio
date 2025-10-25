import { memo } from "react";
import { MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
        <Link
          href="https://ai-professional-portrait.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex-shrink-0 group cursor-pointer"
          aria-label="AI-generated portrait - Click to try the AI Professional Portrait Generator"
        >
          <div className="absolute -inset-2 rounded-full bg-foreground animate-pulse-subtle blur-sm" />
          <Image
            src={avatarSrc}
            alt={name}
            width={80}
            height={80}
            className="rounded-full border-2 border-foreground transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg relative z-10"
            priority
          />
          <div className="absolute -bottom-1 -right-1 bg-foreground text-background rounded-full p-1.5 border-2 border-background shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl z-20 animate-pulse-badge">
            <Sparkles className="w-3 h-3" />
          </div>
        </Link>
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
