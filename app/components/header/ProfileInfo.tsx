import Image from "next/image";
import Link from "next/link";

export interface ProfileInfoProps {
  name: string;
  title: string;
  location: string;
  avatarSrc?: string;
  className?: string;
}

export function ProfileInfo({
  name,
  title,
  location,
  avatarSrc = "/icon.png",
  className = "",
}: ProfileInfoProps) {
  return (
    <div className={className}>
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div className="space-y-6">
          <p className="eyebrow text-accent">Software Engineer · Portfolio</p>
          <h1 className="display text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-balance">
            {name}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="text-foreground font-medium">{title}</span>
            <span
              className="hidden sm:inline text-[var(--border-subtle)]"
              aria-hidden
            >
              /
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.14em]">
              {location}
            </span>
          </div>
        </div>

        <Link
          href="https://ai-professional-portrait.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-fit group"
          aria-label="AI-generated portrait — open AI Professional Portrait"
        >
          <div className="border border-foreground p-1 bg-background transition-colors group-hover:border-accent">
            <Image
              src={avatarSrc}
              alt={name}
              width={112}
              height={112}
              className="size-24 sm:size-28 object-cover"
              priority
            />
          </div>
          <span className="absolute -bottom-2 -right-2 border border-foreground bg-accent text-accent-foreground font-mono text-[10px] uppercase tracking-[0.14em] px-2 py-1">
            AI
          </span>
        </Link>
      </div>
    </div>
  );
}
