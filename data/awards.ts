export interface Award {
  title: string;
  organization: string;
  year: string;
  details: string;
  description: string;
  impact: string[];
}

export const awards: Award[] = [
  {
    title: "X-ponential Starlight Award",
    organization: "OKX",
    year: "2024",
    details:
      "Recognition for outstanding contributions and exceptional performance in product development and innovation.",
    description:
      "Awarded for leading the development of innovative financial products and demonstrating exceptional technical expertise in implementing complex trading systems.",
    impact: [
      "Successfully launched multiple new financial products",
      "Improved system reliability and performance",
      "Demonstrated leadership in technical decision-making",
    ],
  },
  {
    title: "X-ponential Starlight Award",
    organization: "OKX",
    year: "2023",
    details:
      "Recognition for outstanding contributions and exceptional performance in product development and innovation.",
    description:
      "Recognized for significant contributions to the development and launch of structured financial products.",
    impact: [
      "Led development of multiple OTC products",
      "Implemented robust trading systems",
      "Enhanced product stability and performance",
    ],
  },
  {
    title: "Basic Principles Role Model",
    organization: "OKX",
    year: "2023",
    details:
      "Recognized for exemplifying company values and principles in professional conduct and work ethics.",
    description:
      "Selected as a role model for demonstrating exceptional adherence to company principles and professional excellence.",
    impact: [
      "Exemplary professional conduct",
      "Strong team collaboration",
      "Consistent high-quality deliverables",
    ],
  },
  {
    title: "Hong Kong Computer Society Student Sponsorship Nominee",
    organization: "City University of Hong Kong",
    year: "2022",
    details:
      "Nominated for academic excellence and contributions to the field of computer science.",
    description:
      "Nominated by faculty for outstanding academic performance and practical contributions to computer science projects.",
    impact: [
      "Maintained excellent academic standing",
      "Active participation in technical projects",
      "Demonstrated practical application of skills",
    ],
  },
  {
    title: "InfoTech Job Market Driven Scholarship Nominee",
    organization: "City University of Hong Kong",
    year: "2022",
    details:
      "Nominated for outstanding academic performance and market-relevant technical skills.",
    description:
      "Recognized for developing practical skills aligned with industry needs while maintaining strong academic performance.",
    impact: [
      "Strong academic performance in technical courses",
      "Development of industry-relevant skills",
      "Practical project implementations",
    ],
  },
];
