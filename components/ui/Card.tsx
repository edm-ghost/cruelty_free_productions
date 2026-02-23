"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  highlighted?: boolean;
}

export function Card({ children, className = "", hover = false, highlighted = false }: CardProps) {
  const base = `rounded-xl p-6 glass ${
    highlighted
      ? "border border-[#00e5ff]/40 bg-[#0a1a1f]"
      : "border border-white/[0.08]"
  } ${className}`;

  if (hover) {
    return (
      <motion.div
        className={base}
        whileHover={{ y: -4, borderColor: highlighted ? "rgba(0,229,255,0.6)" : "rgba(168,85,247,0.3)" }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={base}>{children}</div>;
}
