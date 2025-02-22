"use client";

import { Header } from "./components/Header";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Volunteering } from "./components/Volunteering";
import { Education } from "./components/Education";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl px-4 py-8 mx-auto">
        <Header />

        <div className="space-y-16">
          <section id="experience">
            <h2 className="text-2xl font-semibold mb-6">Experience</h2>
            <Experience />
          </section>

          <section id="volunteering">
            <h2 className="text-2xl font-semibold mb-6">Volunteering</h2>
            <Volunteering />
          </section>

          <section id="education">
            <h2 className="text-2xl font-semibold mb-6">Education</h2>
            <Education />
          </section>

          <section id="skills">
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            <Skills />
          </section>
        </div>
      </div>
    </div>
  );
}
