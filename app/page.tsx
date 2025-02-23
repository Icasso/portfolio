"use client";

import { Header } from "./components/Header";
import { Experience } from "./components/Experience";
import { AchievementBadges } from "./components/AchievementBadges";
import { Skills } from "./components/Skills";
import { Volunteering } from "./components/Volunteering";
import { Education } from "./components/Education";
import { Awards } from "./components/Awards";
import { Projects } from "./components/Projects";
import { Extracurriculars } from "./components/Extracurriculars";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-4xl px-4 py-8 mx-auto">
        <Header />

        <div className="space-y-16">
          <article
            id="experience"
            role="region"
            aria-labelledby="experience-heading"
          >
            <h2 id="experience-heading" className="text-2xl font-semibold mb-6">
              Work Experience
            </h2>
            <div className="space-y-6">
              <Experience />
              <AchievementBadges />
            </div>
          </article>

          <article
            id="education"
            role="region"
            aria-labelledby="education-heading"
          >
            <h2 id="education-heading" className="text-2xl font-semibold mb-6">
              Education
            </h2>
            <Education />
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
            <Projects />
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
            <Volunteering />
          </article>

          <article id="awards" role="region" aria-labelledby="awards-heading">
            <h2 id="awards-heading" className="text-2xl font-semibold mb-6">
              Awards & Nominations
            </h2>
            <Awards />
          </article>

          <article
            id="extracurriculars"
            role="region"
            aria-labelledby="extracurriculars-heading"
          >
            <h2
              id="extracurriculars-heading"
              className="text-2xl font-semibold mb-6"
            >
              Extracurricular Activities
            </h2>
            <Extracurriculars />
          </article>
        </div>
      </div>
      <SpeedInsights />
    </main>
  );
}
