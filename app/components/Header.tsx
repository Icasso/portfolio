import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="mb-12">
      <h1 className="text-4xl font-bold tracking-tight mb-4">
        Tsui Hoi Ming, Isaac
      </h1>
      <h2 className="text-xl text-muted-foreground mb-4">Software Engineer</h2>
      <p className="text-muted-foreground max-w-2xl mb-6">
        Software engineer specializing in high-performance backend
        architectures. 3+ years experience building distributed scalable
        systems.
      </p>
      <div className="flex gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link
            href="https://github.com/Icasso"
            className="flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link
            href="https://www.linkedin.com/in/tsuihoiming/"
            className="flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link
            href="mailto:isaactsui2000@gmail.com"
            className="flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Email
          </Link>
        </Button>
      </div>
    </header>
  );
}
