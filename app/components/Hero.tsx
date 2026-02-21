"use client";

import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import TypeWriter from "./TypeWriter";
import { FiArrowDown } from "react-icons/fi";

export default function Hero() {
  const roles = [
    "Senior Software Engineer",
    "Frontend / Full-Stack Developer",
    "React & TypeScript Expert",
    "Problem Solver",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />

      <div className="absolute inset-0 bg-grid opacity-40 z-0" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <span className="font-mono text-neon-green text-sm md:text-base">
            &gt; Hello, World! I&apos;m
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
        >
          <span className="text-gradient">Mahamudul Hasan</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 mb-8 h-8"
        >
          <TypeWriter texts={roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-gray-500 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed"
        >
          Senior Software Engineer with 6+ years of experience building user-facing web
          applications and partner platforms. Strong background in React, TypeScript, frontend
          architecture, and high-performance UI development at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-3 bg-cyan-400/10 border border-cyan-400/50 text-cyan-400 rounded-lg font-mono text-sm
                       hover:bg-cyan-400/20 hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all duration-300"
          >
            <span className="mr-2 text-neon-green">$</span>
            view_projects
          </a>
          <a
            href="/Mahamudul_Resume.pdf"
            target="_blank"
            className="group px-8 py-3 border border-gray-700 text-gray-300 rounded-lg font-mono text-sm
                       hover:border-neon-purple hover:text-neon-purple hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300"
          >
            <span className="mr-2 text-neon-purple">$</span>
            download_resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gray-600 hover:text-cyan-400 transition-colors"
            aria-label="Scroll down"
          >
            <FiArrowDown size={24} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
