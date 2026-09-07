"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";

const projects = [
  {
    id: 1,
    title: "AI Professional Portrait",
    subtitle: "Professional headshots powered by AI",
    description:
      "Transform casual photos into LinkedIn-ready professional portraits in just 10 seconds. Features 4 professional styles, instant generation, and pricing from $0.29 per portrait.",
    image: "/projects/ai-portrait-hero.png",
    tags: ["Next.js 15", "Gemini 2.5 Flash", "Supabase", "Stripe"],
    url: "https://ai-professional-portrait.vercel.app/",
    year: "2025",
  },
];

const jokeBadges = [
  { label: "Backed by Y Combinator*", variant: "accent" as const },
  { label: "Series Z Funded", variant: "outline" as const },
  { label: "Powered by brainrot", variant: "secondary" as const },
  { label: "香港製造", variant: "default" as const },
  { label: "*** in my dreams", variant: "outline" as const },
  { label: "獨角獸級數", variant: "secondary" as const },
  { label: "Bootstrapped AF", variant: "outline" as const },
  { label: "Running on Copium", variant: "secondary" as const },
  { label: "Profitable (cap)", variant: "outline" as const },
  { label: "Certified HBU dev", variant: "default" as const },
  { label: "Powered by ChatGPT 6.9", variant: "secondary" as const },
  { label: "Web5 Ready™", variant: "outline" as const },
  { label: "Built with Stack Overflow", variant: "outline" as const },
  { label: "Trust me bro", variant: "secondary" as const },
  { label: "唔識寫code都得", variant: "default" as const },
  { label: "AI寫晒", variant: "secondary" as const },
  { label: "冇bug先奇怪", variant: "accent" as const },
  { label: "Copy完唔改都得", variant: "outline" as const },
];

export default function StudioPortfolio() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="no-print sticky top-0 z-40 border-b border-foreground bg-background/95 backdrop-blur-sm">
        <div className="editorial-container flex h-14 items-center justify-between">
          <Link
            href="/studio"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground"
          >
            Studio
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground hover:text-accent transition-colors"
            >
              Portfolio ↗
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section className="min-h-[85vh] flex items-center px-4 sm:px-6 py-20 relative">
        <div className="editorial-container w-full">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div className="space-y-8 animate-fade-in-up">
              <p className="eyebrow text-accent">
                Portfolio Studio · Experimental
              </p>
              <h1 className="display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] text-balance">
                Let&apos;s build something remarkable.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                A louder corner of the site — product experiments, visual
                systems, and bilingual jokes that somehow shipped.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" asChild>
                  <a
                    href="https://www.instagram.com/isaactsui3000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Let&apos;s Connect
                  </a>
                </Button>
                <button
                  onClick={scrollToWork}
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  View Work
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="border border-foreground p-4 sm:p-5 animate-fade-in-up">
              <p className="eyebrow mb-4">Press room (not really)</p>
              <div className="flex flex-wrap gap-2">
                {jokeBadges.map((badge) => (
                  <Badge key={badge.label} variant={badge.variant}>
                    {badge.label}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-container">
        <div className="rule-strong" />
      </div>

      <section id="work" className="py-20 sm:py-28">
        <div className="editorial-container space-y-20 sm:space-y-28">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-accent mb-3">01</p>
              <h2 className="display text-4xl sm:text-5xl">Selected Work</h2>
            </div>
            <p className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Case studies
            </p>
          </div>

          {projects.map((project, index) => (
            <article
              key={project.id}
              className="space-y-10 animate-fade-in-up"
            >
              <div className="grid gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-end">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="space-y-3">
                  <h3 className="display text-3xl sm:text-5xl md:text-6xl leading-[0.95] text-balance">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {project.year}
                </span>
              </div>

              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative overflow-hidden border border-foreground bg-muted">
                  <div className="aspect-[16/9] relative">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-[filter] duration-500 group-hover:grayscale-0 grayscale-[20%]"
                        priority={index === 0}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                        No preview
                      </div>
                    )}
                  </div>
                </div>
              </Link>

              <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
                <div className="space-y-4">
                  <h4 className="eyebrow">About</h4>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <Button asChild variant="outline" className="mt-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Site ↗
                    </a>
                  </Button>
                </div>
                <div className="space-y-4">
                  <h4 className="eyebrow">Technology</h4>
                  <ul className="space-y-3">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-base text-muted-foreground pl-4 border-l border-[var(--border-subtle)]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
