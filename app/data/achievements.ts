export interface Achievement {
  date: string;
  title: string;
  organization: string;
  description: string[];
}

export const achievements: Achievement[] = [
  {
    date: "January 2019 - April 2020",
    title: "Front-end Developer Path Scholarship",
    organization: "OpenClassrooms & Facebook",
    description: [
      "One of 40 applicants who achieved a full scholarship on Front-end Development degree among thousands of applicants.",
      "The degree is built around real-life professional-level projects solved using modern technologies.",
      "A mentor with 10+ years of experience provided weekly one-to-one video conference sessions for 12 months.",
    ],
  },
  {
    date: "October 2018 - January 2019",
    title: "PyTorch Scholarship Challenge",
    organization: "Udacity & Facebook",
    description: [
      "Built a network that can classify images of dogs and cats with state-of-the-art performance.",
      "Used deep neural networks for artistic style transfer between images.",
      "Built a classifier that identifies different species of flowers from a pre-trained data set.",
      "Deployed PyTorch models with Torch Script.",
    ],
  },
];

export interface Certification {
  title: string;
  image: string;
  link: string;
  issuer: string;
}

export const certifications: Certification[] = [
  {
    title: "Problem Solving (Intermediate)",
    image: "/images/hackerInter.png",
    link: "https://www.hackerrank.com/certificates/0d0faa66f4b4",
    issuer: "HackerRank",
  },
  {
    title: "Problem Solving (Advanced)",
    image: "/images/hackerAdvanced.png",
    link: "https://www.hackerrank.com/certificates/5c9fcd464025",
    issuer: "HackerRank",
  },
  {
    title: "Problem Solving (Basic)",
    image: "/images/hackerBasic.png",
    link: "https://www.hackerrank.com/certificates/4964365800a2",
    issuer: "HackerRank",
  },
  {
    title: "C: Advanced Data Types",
    image: "/images/cAdvanced.png",
    link: "https://courses.edx.org/certificates/7c393759eab749fbaca3a5fc1746bbe9",
    issuer: "edX",
  },
  {
    title: "C: Memory Management",
    image: "/images/cAdvanced.png",
    link: "https://courses.edx.org/certificates/5b5f5d40150d44b091f031f8d051e56d",
    issuer: "edX",
  },
  {
    title: "C: Pointers",
    image: "/images/cPointers.png",
    link: "https://courses.edx.org/certificates/9f3402215cf14609967e0044a4243c50",
    issuer: "edX",
  },
  {
    title: "JS Algorithms & Data Structures",
    image: "/images/fcc.png",
    link: "https://www.freecodecamp.org/certification/mithhu/javascript-algorithms-and-data-structures",
    issuer: "freeCodeCamp",
  },
  {
    title: "Test Your Website's Interface",
    image: "/images/test.png",
    link: "https://openclassrooms.com/en/course-certificates/1651117985",
    issuer: "OpenClassrooms",
  },
  {
    title: "Manage Your Code with Git",
    image: "/images/git.png",
    link: "https://openclassrooms.com/en/course-certificates/5015340593",
    issuer: "OpenClassrooms",
  },
];
