export interface Education {
  title: string;
  organization: string;
  role: string;
  period: string;
  highlights: string[];
}

export const education: Education[] = [
  {
    title: "Bachelor of Science in Computer Science",
    organization: "City University of Hong Kong",
    role: "Faculty of Science and Engineering",
    period: "Sep 2018 - Jun 2022",
    highlights: ["Dean's List"],
  },
  {
    title: "Hong Kong Diploma of Secondary Education",
    organization: "Ying Wa College",
    role: "Secondary Education",
    period: "Sep 2012 - Jun 2018",
    highlights: [],
  },
];
