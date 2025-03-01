export interface Experience {
  title: string;
  role: string;
  period: string;
  organization: string;
  organizationUrl: string;
  type: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer II",
    role: "Exchange Platform - Asset and Financial Product - Structured Financial Product",
    period: "Apr 2024 - Present",
    organization: "OKX",
    organizationUrl: "https://www.okx.com",
    type: "Full-time",
    description: "",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Redis",
      "Kafka",
      "Microservices",
      "Kubernetes",
    ],
    highlights: [
      "Building cool stuff...",
      "Awards: 2024 X-ponential Starlight Award",
    ],
  },
  {
    title: "Software Engineer",
    role: "Exchange Platform - Asset and Financial Product - Structured Financial Product",
    period: "Apr 2022 - Apr 2024",
    organization: "OKX",
    organizationUrl: "https://www.okx.com",
    type: "Full-time",
    description: "Supernova Graduation Program (class of 2022)",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Redis",
      "Kafka",
      "Microservices",
      "Kubernetes",
      "AliCloud",
      "Caffeine",
      "CI/CD",
      "K6",
      "JUnit",
      "RESTful APIs",
      "Event-Driven Architecture",
      "Distributed Systems",
    ],
    highlights: [
      "2022 - Structured OTC Product - Dual Investment",
      "2022 - Structured OTC Product - Leveraged Forward (Pice Lock, Dip Sniper & Peak Sniper)",
      "2023 - Exotic OTC Product - Shark Fin",
      "2023 - Exotic OTC Product - Snowball Offline (External Market Maker: Darwinbit, MetaAlpha)",
      "2023 - Structured OTC Product - Seagull",
      "2024 - Exotic OTC Product - Snowball Online (Internal Market Maker)",
      "2024 - Exotic OTC Product - Snowball HODL",
      "Awards: 2023 Basic Principles Role Model, 2023 X-ponential Starlight Award",
    ],
  },
  {
    title: "Industrial Placement Trainee",
    role: "Information Technology Division - Solutions Development Department - EOSS",
    period: "Aug 2020 - May 2021",
    organization: "HK Electric",
    organizationUrl: "https://www.hkelectric.com",
    type: "Internship",
    description: "",
    technologies: [".NET Core", "C#", "SQL Server", "OSISoft PI", "Azure"],
    highlights: [
      "Designed & built low-latency & real-time power plant monitoring dashboard",
      "Transitioned and migrated power plant database from Oracle SQL to OSISoft PI NoSQL",
    ],
  },
];
