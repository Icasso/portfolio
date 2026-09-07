import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { SectionHeader } from "./components/SectionHeader";
import { LogoStrip } from "./components/LogoStrip";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Volunteering } from "./components/Volunteering";

const employers = [
  {
    name: "OKX",
    logo: "/companies/okx.png",
    url: "https://www.okx.com",
  },
  {
    name: "HK Electric",
    logo: "/companies/hkelectric.png",
    url: "https://www.hkelectric.com",
  },
];

const institutions = [
  {
    name: "City University of Hong Kong",
    logo: "/education/cityu.png",
    url: "https://www.cityu.edu.hk/",
  },
  {
    name: "Ying Wa College",
    logo: "/education/yingwa.png",
    url: "https://www.yingwa.edu.hk/",
  },
];

export default function Portfolio() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <div className="editorial-container py-12 md:py-20">
            <Header />

            <div className="space-y-24 md:space-y-32 mb-24">
              <article
                id="experience"
                role="region"
                aria-labelledby="experience-heading"
                className="animate-fade-in-up"
              >
                <SectionHeader id="experience-heading" index="01">
                  Work Experience
                </SectionHeader>
                <Experience />
                <LogoStrip label="Selected employers" items={employers} />
              </article>

              <article
                id="education"
                role="region"
                aria-labelledby="education-heading"
                className="animate-fade-in-up"
              >
                <SectionHeader id="education-heading" index="02">
                  Education
                </SectionHeader>
                <Education />
                <LogoStrip label="Institutions" items={institutions} />
              </article>

              <article
                id="skills"
                role="region"
                aria-labelledby="skills-heading"
                className="animate-fade-in-up"
              >
                <SectionHeader id="skills-heading" index="03">
                  Skills
                </SectionHeader>
                <Skills />
              </article>

              <article
                id="projects"
                role="region"
                aria-labelledby="projects-heading"
                className="animate-fade-in-up"
              >
                <SectionHeader id="projects-heading" index="04">
                  Academic & Side Projects
                </SectionHeader>
                <Projects />
              </article>

              <article
                id="volunteering"
                role="region"
                aria-labelledby="volunteering-heading"
                className="animate-fade-in-up"
              >
                <SectionHeader id="volunteering-heading" index="05">
                  Volunteering & Community
                </SectionHeader>
                <Volunteering />
              </article>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
