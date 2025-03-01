import Image from "next/image";
import { memo } from "react";
import { TimeDisplay } from "./TimeDisplay";

export interface ProfileInfoProps {
  name: string;
  title: string;
  location: string;
  bio: string;
  avatarSrc: string;
  className?: string;
}

function ProfileInfoBase({
  name,
  title,
  location,
  bio,
  avatarSrc,
  className = "",
}: ProfileInfoProps) {
  return (
    <div className={`flex justify-between items-start ${className}`}>
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">{name}</h1>
        <div className="flex flex-col gap-1 mb-4">
          <h2 className="text-xl text-muted-foreground">
            {title}, {location}
          </h2>
          <TimeDisplay />
        </div>
        <p className="text-muted-foreground max-w-2xl mb-6">{bio}</p>
      </div>
      <Image
        src={avatarSrc}
        alt={`${name}'s Avatar`}
        width={48}
        height={48}
        className="w-12 h-12 dark:invert"
        priority
        sizes="(max-width: 768px) 24px, 48px"
      />
    </div>
  );
}

export const ProfileInfo = memo(ProfileInfoBase);
