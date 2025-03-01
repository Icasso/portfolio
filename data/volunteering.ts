export interface Volunteering {
  title: string;
  organization: string;
  organizationUrl: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  linkedInUrl?: string;
  image?: string;
  badges?: string[];
}

export const volunteering: Volunteering[] = [
  {
    title: "Project Helper",
    organization: "HandsOn Hong Kong",
    organizationUrl: "https://handsonhongkong.org",
    role: "Web3 Academy and Blockchain Curriculum Teacher",
    period: "Aug 2024 - Oct 2024",
    description: "",
    highlights: [
      "Designed and developed of a comprehensive Web3 Academy and Blockchain curriculum.",
      "Presented lessons in front of 15 - 20 students, enabling knowledge transfer to students, teachers, tutors, and partner organizations.",
    ],
    linkedInUrl:
      "https://www.linkedin.com/posts/okxofficial_were-proud-to-share-that-weve-partnered-activity-7236582646363869184-Ivbh",
    image: "/volunteer.png",
    badges: [
      "Web3",
      "Blockchain",
      "Teaching",
      "Curriculum Development",
      "OKX Partnership",
    ],
  },
];
