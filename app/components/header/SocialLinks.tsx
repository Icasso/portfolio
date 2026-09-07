import Link from "next/link";
import { ReactNode } from "react";

export interface SocialLink {
  href: string;
  label: string;
  icon: ReactNode;
}

export interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export function SocialLinks({ links, className = "" }: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap gap-x-6 gap-y-3 ${className}`}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={
            link.href.startsWith("http") ? "noopener noreferrer" : undefined
          }
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground hover:text-accent transition-colors"
        >
          <span className="text-foreground/70">{link.icon}</span>
          {link.label}
        </Link>
      ))}
    </div>
  );
}
