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
    title: "Associate Software Engineer II",
    role: "Asset & Wealth Management",
    period: "Nov 2025 - Present",
    organization: "JPMorgan Chase & Co.",
    organizationUrl: "https://www.jpmorganchase.com/",
    type: "Full-time",
    description: "Front office developer for Private Banking Technology",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Quantitative Finance",
    ],
    highlights: [
      "NDA - The information provided is for general informational purposes only and does not constitute professional financial advice. It should not be considered a substitute for consulting with a qualified financial advisor. Always conduct your own research and consider your individual financial situation before making any investment or financial decisions. Past performance is not indicative of future results, and all investments carry risks, including the potential loss of principal. We are not responsible for any financial losses or damages resulting from the use of this information.",
    ],
  },
  {
    title: "Software Engineer II",
    role: "Exchange Platform - Asset and Financial Product - Structured Financial Product",
    period: "Apr 2024 - Oct 2025",
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
      "Design and development of cutting-edge asset management services for crypto-linked products...",
      "2025 - BTC Yield+",
      "2025 - TRY Earn",
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
      "Developed real-time data visualization dashboards using AVEVA(OSIsoft) PI Vision and PI ProcessBook, enabling sub-second monitoring of high-frequency time-series data.",
      "Utilized PI DataLink to stream real-time data into analytical tools, enabling Excel-based reports for trend analysis and predictive modeling.",
      "Optimized PI Server data pipelines to process high-velocity time-series data from diverse sources, ensuring low-latency data aggregation and contextualization.",
    ],
  },
];
