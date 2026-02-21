"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlowCard({ children, className = "" }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden rounded-xl glass-card transition-all duration-300 ${className}`}
      style={{
        boxShadow: isHovered
          ? "0 0 20px rgba(0, 240, 255, 0.15), 0 8px 32px rgba(0, 0, 0, 0.3)"
          : "0 4px 16px rgba(0, 0, 0, 0.2)",
      }}
    >
      {isHovered && (
        <div
          className="absolute pointer-events-none z-10 transition-opacity duration-300"
          style={{
            left: mousePos.x - 100,
            top: mousePos.y - 100,
            width: 200,
            height: 200,
            background:
              "radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      )}
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
}
