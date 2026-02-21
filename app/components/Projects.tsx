"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import GlowCard from "./GlowCard";
import { projects } from "../data/projects";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-16">
        <h2 className="section-heading">Projects</h2>
        <p className="section-subheading">&gt; ls ~/projects/</p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <GlowCard className="group overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto min-h-[280px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-dark-900/80 hidden md:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent md:hidden" />
                  </div>

                  <div className="p-8 flex flex-col justify-center">
                    {project.status && (
                      <div className="mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-neon-green/10 text-neon-green border border-neon-green/30">
                          <HiOutlineSparkles size={12} />
                          {project.status}
                        </span>
                      </div>
                    )}

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[11px] font-mono rounded-md border border-cyan-400/20
                                     text-cyan-400/80 bg-cyan-400/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-mono text-cyan-400 group-hover:gap-3 transition-all">
                      <FiExternalLink size={14} />
                      <span>Visit Live Site</span>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
