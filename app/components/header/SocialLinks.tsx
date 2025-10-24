import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReactNode, memo } from "react";

export interface SocialLink {
  href: string;
  label: string;
  icon: ReactNode;
}

export interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

function SocialLinksBase({ links, className = "" }: SocialLinksProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map((link) => (
        <Button key={link.href} size="sm" asChild className="gap-2">
          <Link
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
          >
            {link.icon}
            {link.label}
          </Link>
        </Button>
      ))}
    </div>
  );
}

export const SocialLinks = memo(SocialLinksBase);
