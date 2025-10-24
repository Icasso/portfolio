import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
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
      icon: <GitHubLogoIcon className="w-4 h-4" />,
    },
    {
      href: "https://www.linkedin.com/in/tsuihoiming/",
      label: "LinkedIn",
      icon: <LinkedInLogoIcon className="w-4 h-4" />,
    },
    {
      href: "mailto:isaactsui2000@gmail.com",
      label: "Email",
      icon: <EnvelopeClosedIcon className="w-4 h-4" />,
    },
  ];

  return (
    <header className={`mb-12 ${className}`}>
      <ProfileInfo
        name="Tsui Hoi Ming, Isaac"
        title="Software Engineer"
        location="Hong Kong"
        className="mb-4"
      />
      <SocialLinks links={socialLinks} />
    </header>
  );
}
