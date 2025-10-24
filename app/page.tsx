"use client";

import { Header } from "./components/Header";
import { lazy, Suspense } from "react";
import { AchievementBadges } from "./components/AchievementBadges";
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
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1">
        <div className="container max-w-4xl px-4 py-8 mx-auto">
          <Header />

          <div className="space-y-16 mb-16">
            <article
              id="experience"
              role="region"
              aria-labelledby="experience-heading"
            >
              <h2
                id="experience-heading"
                className="text-2xl font-semibold mb-6"
              >
                Work Experience
              </h2>
              <div className="space-y-6">
                <Suspense fallback={<LoadingFallback />}>
                  <Experience />
                </Suspense>
                <AchievementBadges />
              </div>
            </article>

            <article
              id="education"
              role="region"
              aria-labelledby="education-heading"
            >
              <h2
                id="education-heading"
                className="text-2xl font-semibold mb-6"
              >
                Education
              </h2>
              <Suspense fallback={<LoadingFallback />}>
                <Education />
              </Suspense>
            </article>

            <article id="skills" role="region" aria-labelledby="skills-heading">
              <h2 id="skills-heading" className="text-2xl font-semibold mb-6">
                Skills
              </h2>
              <Skills />
            </article>

            <article
              id="projects"
              role="region"
              aria-labelledby="projects-heading"
            >
              <h2 id="projects-heading" className="text-2xl font-semibold mb-6">
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
            >
              <h2
                id="volunteering-heading"
                className="text-2xl font-semibold mb-6"
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
