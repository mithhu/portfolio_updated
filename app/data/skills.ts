export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Golang",
      "Python",
      "SQL",
      "C#",
    ],
  },
  {
    name: "Technologies",
    skills: [
      "React",
      "Redux Toolkit",
      "Next.js",
      "Tanstack Query",
      "Node.js",
      "Express",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "AWS",
      "Redis",
    ],
  },
  {
    name: "Testing & Tools",
    skills: [
      "Cypress",
      "Playwright",
      "Jest",
      "React Testing Library",
      "MySQL",
      "Git",
      "Webpack",
      "Rspack",
    ],
  },
];

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mithhu", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/mithhu", icon: "github" },
  { name: "LeetCode", url: "https://leetcode.com/mithhu1/", icon: "leetcode" },
  { name: "HackerRank", url: "https://www.hackerrank.com/mithhu", icon: "hackerrank" },
];
