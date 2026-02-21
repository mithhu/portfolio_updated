export interface Experience {
  date: string;
  position: string;
  company: string;
  description: string[];
  link: string;
}

export const experiences: Experience[] = [
  {
    date: "September 2025 - Present",
    position: "Senior Software Engineer (Frontend / Full-Stack)",
    company: "Agoda",
    description: [
      "Developed user-facing React and TypeScript applications, covered by Playwright E2E tests, for a white-label partner integration platform (RocketMiles, Citi Bank).",
      "Developed scalable backend services using Node.js and .NET/C# powering frontend functionality.",
      "Migrated frontend build from Webpack to Rspack, achieving 3.5x faster builds (70s → 20s) and 35% smaller bundles with sub-second hot reloads via a dual-bundler CI/CD pipeline.",
    ],
    link: "https://www.agoda.com/",
  },
  {
    date: "February 2024 - August 2025",
    position: "Software Development Engineer II",
    company: "Axi Trading",
    description: [
      "Led the development of the onboarding flow for the Axi Trade site using React, TypeScript, and Tailwind CSS, achieving a 20% faster load time and ensuring a seamless, responsive UX across devices.",
      "Implemented BFF pattern using Auth0 for authentication and authorization, enhancing security and efficiency by providing a dedicated backend that handles client-specific logic and API orchestration.",
    ],
    link: "https://www.axi.com/",
  },
  {
    date: "October 2022 - January 2024",
    position: "Software Engineer",
    company: "Innovations Group",
    description: [
      "Developed and maintained an Instant Messenger app for Windows and macOS, achieving a milestone of 100K+ daily logins using WebSocket, React, Redux Toolkit, Electron.js, and SQLite.",
    ],
    link: "https://www.innovationsgroup.com/",
  },
  {
    date: "November 2021 - October 2022",
    position: "Senior Software Engineer",
    company: "Pluang",
    description: [
      "Built a chat site and mobile app using GetStream API, React and implemented spam prevention features that led to a 10% increase in daily active users, higher retention, and reduced spam reports.",
    ],
    link: "https://www.pluang.com/",
  },
  {
    date: "June 2020 - October 2021",
    position: "Software Engineer",
    company: "Evaly",
    description: [
      "Led integration of multiple rider services, resulting in a 30% revenue increase.",
    ],
    link: "https://evaly.com.bd/",
  },
  {
    date: "August 2019 - February 2020",
    position: "Junior Software Engineer",
    company: "TiGrow",
    description: [
      "Developed a productivity tool, including task management, project timelines, file sharing, and team communication tools, enhancing work organization and collaboration.",
    ],
    link: "https://www.tigrow.co/",
  },
  {
    date: "March 2019 - July 2019",
    position: "Software Engineer Intern",
    company: "Circle Fintech",
    description: [
      "Developed a local payment gateway system for a commercial bank using React, Redux, and React Router.",
    ],
    link: "https://www.circlefintech.com/",
  },
];
