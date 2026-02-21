export interface Project {
  title: string;
  image: string;
  link: string;
  description: string;
  tech: string[];
  featured?: boolean;
  status?: string;
}

export const projects: Project[] = [
  {
    title: "PhotosAI",
    image: "/images/photosai.png",
    link: "https://photosai.vercel.app/",
    description:
      "An AI-powered photo editor that I'm actively building. PhotosAI lets users transform, enhance, and manipulate images using cutting-edge AI models — from background removal and style transfer to intelligent retouching and generative edits. Designed with a sleek, intuitive interface for both casual users and professionals.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "AI/ML APIs"],
    featured: true,
    status: "In Active Development",
  },
  {
    title: "Chip-8 Emulator",
    image: "/images/ch8.png",
    link: "https://ch8emulator.vercel.app/",
    description:
      "A fully functional Chip-8 emulator built from scratch, capable of running classic games. Implements the complete Chip-8 instruction set with pixel-accurate rendering on HTML5 Canvas.",
    tech: ["JavaScript", "Canvas API", "WebAssembly"],
  },
];
