"use client";

import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { lazy, Suspense } from "react";
import { Skills } from "./components/Skills";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "./components/Footer";
import { SectionHeader } from "./components/SectionHeader";
import { ScrollProgress } from "./components/ScrollProgress";
import { CompanyShowcase } from "./components/CompanyShowcase";
import { EducationShowcase } from "./components/EducationShowcase";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";

// Lazy load only below-the-fold components for better performance
const Volunteering = lazy(() =>
  import("./components/Volunteering").then((mod) => ({
    default: mod.Volunteering,
  }))
);
const Projects = lazy(() =>
  import("./components/Projects").then((mod) => ({ default: mod.Projects }))
);

// Loading fallback - minimal to avoid jarring animation
const LoadingFallback = () => <div className="min-h-[200px]" />;

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
                <Experience />
                <CompanyShowcase />
              </article>

              <article
                id="education"
                role="region"
                aria-labelledby="education-heading"
                className="animate-fade-in-up"
              >
                <SectionHeader id="education-heading">Education</SectionHeader>
                <Education />
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

        <SpeedInsights />
      </div>
    </>
  );
}
