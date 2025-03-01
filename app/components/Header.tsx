import { Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

// Separate component for time display to prevent unnecessary re-renders
function TimeDisplay() {
  const [time, setTime] = useState<string>("");

  const updateTime = useCallback(() => {
    const now = new Date();
    setTime(
      now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Hong_Kong",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    );
  }, []);

  useEffect(() => {
    updateTime();
    // Update every minute instead of every second
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, [updateTime]);

  return (
    <div className="flex items-center gap-1 text-sm text-muted-foreground">
      <Clock className="w-4 h-4" />
      <span>{time} (GMT+8)</span>
    </div>
  );
}

export function Header() {
  return (
    <header className="mb-12">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Tsui Hoi Ming, Isaac
          </h1>
          <div className="flex flex-col gap-1 mb-4">
            <h2 className="text-xl text-muted-foreground">
              Software Engineer, Hong Kong
            </h2>
            <TimeDisplay />
          </div>
          <p className="text-muted-foreground max-w-2xl mb-6">
            Software engineer specializing in high-performance backend
            architectures. 3+ years of professional experience building
            distributed scalable systems.
          </p>
        </div>
        <Image
          src="/icon.png"
          alt="Isaac's Icon"
          width={48}
          height={48}
          className="w-12 h-12 dark:invert"
          priority
          sizes="(max-width: 768px) 24px, 48px"
        />
      </div>
      <div className="flex gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link
            href="https://github.com/Icasso"
            className="flex items-center gap-2"
          >
            <GitHubLogoIcon className="w-4 h-4" />
            GitHub
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link
            href="https://www.linkedin.com/in/tsuihoiming/"
            className="flex items-center gap-2"
          >
            <LinkedInLogoIcon className="w-4 h-4" />
            LinkedIn
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link
            href="mailto:isaactsui2000@gmail.com"
            className="flex items-center gap-2"
          >
            <EnvelopeClosedIcon className="w-4 h-4" />
            Email
          </Link>
        </Button>
      </div>
    </header>
  );
}
