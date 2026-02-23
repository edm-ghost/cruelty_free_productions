"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-[#00e5ff] to-[#a855f7] text-black font-semibold hover:opacity-90",
  secondary:
    "border border-white/20 text-[#f0f0f0] hover:border-[#00e5ff]/60 hover:text-[#00e5ff] bg-transparent",
  ghost:
    "text-[#888] hover:text-[#f0f0f0] bg-transparent",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 cursor-pointer select-none ${variants[variant]} ${sizes[size]} ${className}`;

  const inner = (
    <motion.span
      className={base}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      style={{ display: "inline-flex" }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-flex">
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="inline-flex">
      {inner}
    </button>
  );
}
