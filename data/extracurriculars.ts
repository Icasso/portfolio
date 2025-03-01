export interface Activity {
  title: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const activities: Activity[] = [
  {
    title: "Software Engineering Virtual Experience",
    organization: "JPMorgan Chase & Co.",
    role: "Virtual Program Participant",
    period: "2022",
    description:
      "Completed practical tasks in software engineering, focusing on real-world financial technology applications.",
    highlights: [
      "Interface with a stock price data feed",
      "Use JPMorgan Chase & Co. frameworks and tools",
      "Display data visually for traders",
    ],
  },
  {
    title: "Agile Virtual Experience Program",
    organization: "JPMorgan Chase & Co.",
    role: "Virtual Program Participant",
    period: "2022",
    description:
      "Gained hands-on experience with Agile methodologies and best practices in a financial technology context.",
    highlights: [
      "Agile development methodologies",
      "Sprint planning and execution",
      "Team collaboration and communication",
    ],
  },
  {
    title: "Engineering Virtual Program",
    organization: "Goldman Sachs",
    role: "Virtual Program Participant",
    period: "2022",
    description:
      "Participated in engineering-focused virtual program covering key aspects of financial technology.",
    highlights: [
      "Password cracking and security best practices",
      "Cryptography fundamentals",
      "Secure system design",
    ],
  },
  {
    title: "Google IT Automation with Python",
    organization: "Coursera",
    role: "Professional Certificate",
    period: "2021",
    description:
      "Comprehensive program covering Python programming and IT automation.",
    highlights: [
      "Python scripting for automation",
      "Git and GitHub fundamentals",
      "Configuration management and cloud services",
    ],
  },
  {
    title: "Django Developer Learning Path",
    organization: "LinkedIn",
    role: "Course Completion",
    period: "2021",
    description: "Comprehensive training in Django web development framework.",
    highlights: [
      "Full-stack web development with Django",
      "Database design and management",
      "RESTful API development",
    ],
  },
  {
    title: "RPG Adventure Development in Phaser",
    organization: "Zenva Academy",
    role: "Course Completion",
    period: "2020",
    description:
      "Game development course focusing on building RPG adventures using Phaser framework.",
    highlights: [
      "Game mechanics implementation",
      "Sprite animation and management",
      "Game state and scene handling",
    ],
  },
  {
    title: "Responsive Web Design",
    organization: "FreeCodeCamp",
    role: "Developer Certification",
    period: "2019",
    description:
      "Certification in modern responsive web design techniques and principles.",
    highlights: [
      "HTML5 and CSS3 fundamentals",
      "Responsive design patterns",
      "CSS Grid and Flexbox layouts",
    ],
  },
];
