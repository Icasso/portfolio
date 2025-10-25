export interface Skill {
  name: string;
  details: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    items: [
      {
        name: "Java",
        details:
          "Backend development, Spring Framework, Enterprise applications",
      },
      {
        name: "Python",
        details: "Data processing, APIs, Pandas, Numpy, Automation scripts",
      },
      { name: "C#", details: ".NET Core, ASP.NET, Desktop applications" },
      {
        name: ".NET",
        details: "Web APIs, Microservices, Enterprise solutions",
      },
      {
        name: "HTML",
        details: "Semantic markup, Responsive design, Web accessibility",
      },
      { name: "CSS", details: "Modern layouts, Flexbox, Grid, Animations" },
      { name: "JavaScript", details: "Frontend development, React, Node.js" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "English", details: "Native proficiency" },
      { name: "Cantonese", details: "Native proficiency" },
      { name: "Chinese", details: "Native proficiency" },
    ],
  },
  {
    category: "Technologies",
    items: [
      { name: "MySQL", details: "Relational database management" },
      { name: "Redis", details: "In-memory data store" },
      { name: "Oracle SQL", details: "Enterprise database management" },
      { name: "Apache Kafka", details: "Distributed streaming platform" },
      { name: "Spring Boot", details: "Java framework" },
      { name: "Django", details: "Python web framework" },
      {
        name: "Docker",
        details: "Containerization and application deployment",
      },
      {
        name: "Kubernetes",
        details: "Container orchestration and application deployment",
      },
      { name: "RESTful API", details: "API design and development" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", details: "Version control" },
      { name: "GitLab", details: "DevOps platform" },
      { name: "JIRA", details: "Project management" },
      { name: "AWS", details: "Cloud computing services" },
      { name: "Heroku", details: "Cloud platform" },
      { name: "AliCloud", details: "Cloud computing platform" },
      { name: "Azure", details: "Cloud services" },
      { name: "VS Code", details: "Code editor" },
      { name: "IntelliJ IDEA", details: "Java IDE" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Apollo", details: "Distributed configuration center" },
      { name: "Grafana", details: "Metrics visualization" },
      { name: "Maven", details: "Build automation tool" },
      { name: "Nacos", details: "Service registry and configuration" },
      { name: "log4j2", details: "Logging framework" },
    ],
  },
];
