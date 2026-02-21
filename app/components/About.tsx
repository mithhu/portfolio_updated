"use client";

import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";
import { skillCategories } from "../data/skills";

const socials = [
  {
    icon: AiFillLinkedin,
    href: "https://www.linkedin.com/in/mithhu",
    label: "LinkedIn",
  },
  {
    icon: AiFillGithub,
    href: "https://github.com/mithhu",
    label: "GitHub",
  },
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/mithhu1/",
    label: "LeetCode",
  },
  {
    icon: FaHackerrank,
    href: "https://www.hackerrank.com/mithhu",
    label: "HackerRank",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const skillItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-16">
        <h2 className="section-heading">About Me</h2>
        <p className="section-subheading">&gt; whoami</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card rounded-xl p-6 mb-6">
            <div className="font-mono text-xs text-gray-500 mb-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2">about.sh</span>
            </div>
            <div className="font-mono text-sm leading-relaxed space-y-3">
              <p>
                <span className="text-neon-green">$</span>{" "}
                <span className="text-gray-300">
                  Senior Software Engineer with 6+ years of experience building
                  user-facing web applications and partner platforms. Strong background in{" "}
                  <span className="text-cyan-400">React</span>,{" "}
                  <span className="text-cyan-400">TypeScript</span>,{" "}
                  frontend architecture, and high-performance UI development at scale.
                </span>
              </p>
              <p>
                <span className="text-neon-green">$</span>{" "}
                <span className="text-gray-300">
                  Experienced in collaborating on backend services and APIs
                  supporting frontend systems. Currently at{" "}
                  <span className="text-cyan-400">Agoda</span>.
                </span>
              </p>
              <p>
                <span className="text-neon-green">$</span>{" "}
                <span className="text-gray-300">
                  Currently building{" "}
                  <a
                    href="https://photosai.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    PhotosAI
                  </a>
                  {" "}&mdash; an AI-powered photo editor for transforming and
                  enhancing images using cutting-edge AI models.
                </span>
              </p>
              <p>
                <span className="text-neon-green">$</span>{" "}
                <span className="text-cyan-400">
                  mithhu121212@gmail.com
                </span>
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-mono text-neon-green text-sm mb-3">
              &gt; education
            </h3>
            <div className="space-y-3">
              <div className="glass-card rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-200">
                  East West University
                  <span className="text-gray-500 font-normal ml-2">
                    Jan 2015 - Dec 2018
                  </span>
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  B.Sc. in Electrical and Electronics Engineering
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700
                           text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50
                           hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-mono text-neon-green text-sm mb-6">
            &gt; skills --list
          </h3>

          {skillCategories.map((category) => (
            <div key={category.name} className="mb-6">
              <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">
                {category.name}
              </h4>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={skillItem}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(0, 240, 255, 0.3)",
                    }}
                    className="px-3 py-1.5 text-xs font-mono rounded-md border border-gray-700 bg-dark-800/50
                               text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40
                               cursor-default transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
