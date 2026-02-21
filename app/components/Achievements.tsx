"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import GlowCard from "./GlowCard";
import { achievements, certifications } from "../data/achievements";
import { FiAward, FiBookOpen } from "react-icons/fi";

export default function Achievements() {
  const [activeTab, setActiveTab] = useState<"achievements" | "certifications">(
    "achievements"
  );

  return (
    <SectionWrapper id="achievements">
      <div className="text-center mb-16">
        <h2 className="section-heading">Achievements</h2>
        <p className="section-subheading">&gt; cat achievements.log</p>
      </div>

      <div className="flex justify-center gap-4 mb-12">
        {(["achievements", "certifications"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-6 py-2.5 font-mono text-sm rounded-lg transition-all duration-300 ${
              activeTab === tab
                ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                : "text-gray-500 border border-gray-800 hover:text-gray-300 hover:border-gray-600"
            }`}
          >
            <span className="flex items-center gap-2">
              {tab === "achievements" ? (
                <FiAward size={16} />
              ) : (
                <FiBookOpen size={16} />
              )}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "achievements" ? (
          <motion.div
            key="achievements"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center">
                      <FiAward className="text-neon-purple" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-100">
                        {achievement.title}
                      </h3>
                      <p className="text-cyan-400 text-sm font-mono">
                        {achievement.organization}
                      </p>
                      <p className="text-xs text-gray-500 font-mono mt-1">
                        {achievement.date}
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {achievement.description.map((desc, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-400 flex items-start gap-2"
                          >
                            <span className="text-neon-purple/60 mt-1 shrink-0">
                              ▹
                            </span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="certifications"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="block"
              >
                <GlowCard className="group overflow-hidden">
                  <div className="relative h-36 overflow-hidden rounded-t-xl">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-gray-200 group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-gray-500 font-mono mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </GlowCard>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
