"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="The Process"
          title="From Idea to Release in 3 Steps"
          subtitle="Our streamlined workflow gets you a polished, release-ready track without the hassle."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-1/2 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-[#00e5ff]/30 via-[#a855f7]/30 to-[#00e5ff]/30 -translate-y-1/2 pointer-events-none" />

          {howItWorks.map((step, i) => (
            <motion.div
              key={step.step}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="glass rounded-xl p-6 border border-white/[0.08] text-center relative">
                {/* Step number */}
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#111] border border-[#00e5ff]/30 flex items-center justify-center">
                  <span className="text-lg font-bold gradient-text">{step.step}</span>
                </div>

                <h3 className="text-lg font-bold text-[#f0f0f0] mb-3">{step.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{step.description}</p>

                {/* Arrow connector (visible on md between steps) */}
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-[#0a0a0a] rounded-full items-center justify-center border border-white/[0.06]">
                    <ArrowRight size={14} className="text-[#888]" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
