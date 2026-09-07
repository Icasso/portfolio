import { Github, Linkedin, Mail } from "lucide-react";
import { ProfileInfo, SocialLinks } from "./header/index";
import { SocialLink } from "./header/SocialLinks";

export interface HeaderProps {
  className?: string;
}

export function Header({ className = "" }: HeaderProps) {
  const socialLinks: SocialLink[] = [
    {
      href: "https://github.com/Icasso",
      label: "GitHub",
      icon: <Github className="w-3.5 h-3.5" />,
    },
    {
      href: "https://www.linkedin.com/in/tsuihoiming/",
      label: "LinkedIn",
      icon: <Linkedin className="w-3.5 h-3.5" />,
    },
    {
      href: "mailto:isaactsui2000@gmail.com",
      label: "Email",
      icon: <Mail className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <header className={`mb-16 md:mb-24 space-y-8 ${className}`}>
      <ProfileInfo
        name="Tsui Hoi Ming, Isaac"
        title="Software Engineer"
        location="Hong Kong"
      />
      <div className="rule" />
      <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
        <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl text-balance">
          Building reliable systems across fintech, distributed backends, and
          thoughtful product interfaces — with a bias for clarity over noise.
        </p>
        <SocialLinks links={socialLinks} className="md:justify-end" />
      </div>
    </header>
  );
}
