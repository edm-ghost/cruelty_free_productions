"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080808]">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00e5ff]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#a855f7]/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00e5ff]/20 bg-[#00e5ff]/5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#00e5ff]">
            {hero.eyebrow}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {hero.headline.split("\n").map((line, i) => (
            <span key={i} className={`block ${i === 1 ? "gradient-text" : "text-[#f0f0f0]"}`}>
              {line}
            </span>
          ))}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-[#888] text-base md:text-lg max-w-2xl leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {hero.subtext}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Button href="#contact" size="lg">
            {hero.cta_primary}
          </Button>
          <Button href="#portfolio" size="lg" variant="secondary">
            {hero.cta_secondary}
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-xs text-[#888] tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-xs text-[#888] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-[#888]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
