"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark-900/80 backdrop-blur-lg border-b border-cyan-400/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleClick("#home");
              }}
              className="font-mono text-cyan-400 text-lg font-bold tracking-wider"
              whileHover={{ scale: 1.05 }}
            >
              &lt;Mithhu /&gt;
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.href);
                  }}
                  className={`nav-glow text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.href.slice(1)
                      ? "text-cyan-400 active"
                      : "text-gray-400 hover:text-cyan-400"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/Mahamudul_Resume.pdf"
                target="_blank"
                className="px-4 py-1.5 border border-cyan-400/50 text-cyan-400 text-sm rounded font-mono
                           hover:bg-cyan-400/10 transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              >
                Resume
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-dark-900/90 backdrop-blur-md"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute right-0 top-0 h-full w-64 bg-dark-800/95 backdrop-blur-lg border-l border-cyan-400/10 pt-20 px-6">
              <div className="flex flex-col gap-6">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.href);
                    }}
                    className={`font-mono text-sm transition-colors ${
                      activeSection === item.href.slice(1)
                        ? "text-cyan-400"
                        : "text-gray-400 hover:text-cyan-400"
                    }`}
                  >
                    <span className="text-neon-green mr-2">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    {item.label}
                  </motion.a>
                ))}
                <a
                  href="/Mahamudul_Resume.pdf"
                  target="_blank"
                  className="mt-4 px-4 py-2 border border-cyan-400/50 text-cyan-400 text-sm text-center rounded font-mono
                             hover:bg-cyan-400/10 transition-all duration-200"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
