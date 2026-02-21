"use client";

import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { FiMail, FiFileText, FiArrowUp } from "react-icons/fi";

const socials = [
  { icon: AiFillLinkedin, href: "https://www.linkedin.com/in/mithhu", label: "LinkedIn" },
  { icon: AiFillGithub, href: "https://github.com/mithhu", label: "GitHub" },
  { icon: SiLeetcode, href: "https://leetcode.com/mithhu1/", label: "LeetCode" },
  { icon: FaHackerrank, href: "https://www.hackerrank.com/mithhu", label: "HackerRank" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="section-heading mb-2">Get In Touch</h2>
        <p className="section-subheading">&gt; send_message --to mithhu</p>

        <div className="glass-card rounded-xl p-8 mb-8">
          <div className="font-mono text-xs text-gray-500 mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-2">contact.sh</span>
          </div>

          <div className="font-mono text-sm text-left space-y-3 mb-8">
            <p className="text-gray-400">
              <span className="text-neon-green">$</span> I&apos;m always open to
              discussing new opportunities, interesting projects, or just having a
              good conversation about technology.
            </p>
            <p className="text-gray-400">
              <span className="text-neon-green">$</span> Whether you have a question
              or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:mithhu121212@gmail.com"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-cyan-400/10 border border-cyan-400/50
                         text-cyan-400 rounded-lg font-mono text-sm hover:bg-cyan-400/20
                         hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all duration-300"
            >
              <FiMail size={16} />
              Say Hello
            </motion.a>
            <motion.a
              href="/Mahamudul_Resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-gray-700
                         text-gray-300 rounded-lg font-mono text-sm hover:border-neon-purple hover:text-neon-purple
                         hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300"
            >
              <FiFileText size={16} />
              Resume
            </motion.a>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-gray-700
                         text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50
                         hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-200"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800/50">
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -3 }}
            className="text-gray-600 hover:text-cyan-400 transition-colors mb-6 mx-auto block"
            aria-label="Back to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
          <p className="font-mono text-xs text-gray-600">
            <span className="text-gray-500">Designed & Built by</span>{" "}
            <span className="text-cyan-400/70">Mahamudul Hasan</span>
          </p>
          <p className="font-mono text-[10px] text-gray-700 mt-1">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </motion.div>
    </section>
  );
}
