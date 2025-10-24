"use client";

import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { lazy, Suspense } from "react";
import { Skills } from "./components/Skills";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CommandMenu } from "./components/CommandMenu";
import { Footer } from "./components/Footer";
import { Button } from "@/components/ui/button";
import { Command } from "lucide-react";
import { SectionHeader } from "./components/SectionHeader";
import { ScrollProgress } from "./components/ScrollProgress";
import { CompanyShowcase } from "./components/CompanyShowcase";
import { EducationShowcase } from "./components/EducationShowcase";

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

// Loading fallback component with better skeleton
const LoadingFallback = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-6 bg-foreground rounded w-3/4"></div>
    <div className="h-4 bg-foreground rounded w-1/2"></div>
    <div className="space-y-2">
      <div className="h-4 bg-foreground rounded"></div>
      <div className="h-4 bg-foreground rounded w-5/6"></div>
    </div>
    <div className="flex gap-2">
      <div className="h-6 w-16 bg-foreground rounded-full"></div>
      <div className="h-6 w-16 bg-foreground rounded-full"></div>
      <div className="h-6 w-16 bg-foreground rounded-full"></div>
    </div>
  </div>
);

export default function Portfolio() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
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
                <SectionHeader id="experience-heading">
                  Work Experience
                </SectionHeader>
                <Suspense fallback={<LoadingFallback />}>
                  <Experience />
                </Suspense>
                <CompanyShowcase />
              </article>

              <article
                id="education"
                role="region"
                aria-labelledby="education-heading"
                className="animate-fade-in-up"
              >
                <SectionHeader id="education-heading">Education</SectionHeader>
                <Suspense fallback={<LoadingFallback />}>
                  <Education />
                </Suspense>
                <EducationShowcase />
              </article>

              <article
                id="skills"
                role="region"
                aria-labelledby="skills-heading"
                className="animate-fade-in-up"
              >
                <SectionHeader id="skills-heading">Skills</SectionHeader>
                <Skills />
              </article>

              <article
                id="projects"
                role="region"
                aria-labelledby="projects-heading"
                className="animate-fade-in-up"
              >
                <SectionHeader id="projects-heading">
                  Academic & Side Projects
                </SectionHeader>
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
                <SectionHeader id="volunteering-heading">
                  Volunteering & Community Service
                </SectionHeader>
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
          className="no-print fixed right-4 bottom-4 sm:hidden h-10 w-10 rounded-full shadow-lg bg-background/95 backdrop-blur-sm"
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
    </>
  );
}
