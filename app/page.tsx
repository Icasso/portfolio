"use client";

import { Header } from "./components/Header";
import { lazy, Suspense } from "react";
import { Skills } from "./components/Skills";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CommandMenu } from "./components/CommandMenu";
import { Footer } from "./components/Footer";
import { Button } from "@/components/ui/button";
import { Command } from "lucide-react";

// Lazy load below-the-fold components
const Experience = lazy(() =>
  import("./components/Experience").then((mod) => ({ default: mod.Experience }))
);
const Volunteering = lazy(() =>
  import("./components/Volunteering").then((mod) => ({
    default: mod.Volunteering,
  }))
);
const Education = lazy(() =>
  import("./components/Education").then((mod) => ({ default: mod.Education }))
);
const Projects = lazy(() =>
  import("./components/Projects").then((mod) => ({ default: mod.Projects }))
);

// Loading fallback component
const LoadingFallback = () => (
  <div className="animate-pulse">
    <div className="h-[300px] bg-muted rounded-lg"></div>
  </div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="container max-w-4xl px-4 py-12 mx-auto">
          <Header />

          <div className="space-y-20 md:space-y-24 mb-24">
            <article
              id="experience"
              role="region"
              aria-labelledby="experience-heading"
              className="animate-fade-in-up"
            >
              <h2
                id="experience-heading"
                className="text-sm font-bold tracking-[0.15em] uppercase mb-8 pb-3 border-b border-foreground/10 text-foreground/70"
              >
                Work Experience
              </h2>
              <Suspense fallback={<LoadingFallback />}>
                <Experience />
              </Suspense>
            </article>

            <article
              id="education"
              role="region"
              aria-labelledby="education-heading"
              className="animate-fade-in-up"
            >
              <h2
                id="education-heading"
                className="text-sm font-bold tracking-[0.15em] uppercase mb-8 pb-3 border-b border-foreground/10 text-foreground/70"
              >
                Education
              </h2>
              <Suspense fallback={<LoadingFallback />}>
                <Education />
              </Suspense>
            </article>

            <article
              id="skills"
              role="region"
              aria-labelledby="skills-heading"
              className="animate-fade-in-up"
            >
              <h2
                id="skills-heading"
                className="text-sm font-bold tracking-[0.15em] uppercase mb-8 pb-3 border-b border-foreground/10 text-foreground/70"
              >
                Skills
              </h2>
              <Skills />
            </article>

            <article
              id="projects"
              role="region"
              aria-labelledby="projects-heading"
              className="animate-fade-in-up"
            >
              <h2
                id="projects-heading"
                className="text-sm font-bold tracking-[0.15em] uppercase mb-8 pb-3 border-b border-foreground/10 text-foreground/70"
              >
                Academic & Side Projects
              </h2>
              <Suspense fallback={<LoadingFallback />}>
                <Projects />
              </Suspense>
            </article>

            <article
              id="volunteering"
              role="region"
              aria-labelledby="volunteering-heading"
              className="animate-fade-in-up"
            >
              <h2
                id="volunteering-heading"
                className="text-sm font-bold tracking-[0.15em] uppercase mb-8 pb-3 border-b border-foreground/10 text-foreground/70"
              >
                Volunteering & Community Service
              </h2>
              <Suspense fallback={<LoadingFallback />}>
                <Volunteering />
              </Suspense>
            </article>
          </div>
        </div>
      </div>
      <Footer />

      <Button
        size="icon"
        variant="outline"
        className="fixed right-4 bottom-4 sm:hidden h-10 w-10 rounded-full shadow-lg bg-background/95 backdrop-blur-sm"
        onClick={() => {
          const event = new KeyboardEvent("keydown", {
            key: "k",
            metaKey: true,
          });
          document.dispatchEvent(event);
        }}
      >
        <Command className="h-4 w-4" />
      </Button>

      <SpeedInsights />
      <CommandMenu />
    </div>
  );
}
