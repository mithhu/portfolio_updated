"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { experiences } from "../data/experience";
import { FiBriefcase, FiExternalLink } from "react-icons/fi";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-16">
        <h2 className="section-heading">Experience</h2>
        <p className="section-subheading">&gt; cat work_history.log</p>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-dark-900 border-2 border-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.4)] z-10" />

              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <motion.div
                  whileHover={{
                    y: -3,
                    boxShadow: "0 0 20px rgba(0, 240, 255, 0.15)",
                  }}
                  className="glass-card rounded-xl p-6 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-100">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 text-sm font-mono hover:underline flex items-center gap-1"
                        >
                          {exp.company}
                          <FiExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                    <FiBriefcase className="text-cyan-400/50 shrink-0" size={20} />
                  </div>

                  <p className="text-xs font-mono text-gray-500 mb-4">
                    {exp.date}
                  </p>

                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-400 flex items-start gap-2"
                      >
                        <span className="text-cyan-400/60 mt-1.5 shrink-0">
                          ▹
                        </span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
