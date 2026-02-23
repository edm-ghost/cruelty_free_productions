"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { pricing } from "@/lib/content";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Transparent Pricing"
          title="Pick Your Package"
          subtitle="No hidden fees. Full ownership on every tier. Revisions included."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {pricing.map((tier, i) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div
                className={`rounded-xl p-6 border flex flex-col relative overflow-hidden ${
                  tier.highlighted
                    ? "border-[#00e5ff]/40 bg-[#0a1a1f]"
                    : "border-white/[0.08] bg-[#111]"
                }`}
              >
                {/* Popular badge */}
                {tier.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00e5ff] to-[#a855f7]" />
                )}

                {tier.highlighted && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20">
                    <Zap size={10} className="text-[#00e5ff]" />
                    <span className="text-xs font-semibold text-[#00e5ff]">Most Popular</span>
                  </div>
                )}

                {/* Tier header */}
                <div className="mb-6">
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#888] mb-1">
                    {tier.tier}
                  </p>
                  <div className="flex items-end gap-1 mb-2">
                    <span
                      className={`text-4xl font-bold ${tier.highlighted ? "gradient-text" : "text-[#f0f0f0]"}`}
                    >
                      {tier.price}
                    </span>
                    <span className="text-[#888] text-sm mb-1">{tier.per}</span>
                  </div>
                  <p className="text-[#888] text-sm">{tier.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#888]">
                      <Check
                        size={14}
                        className={tier.highlighted ? "text-[#00e5ff]" : "text-[#888]"}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  variant={tier.highlighted ? "primary" : "secondary"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-[#888] text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Need something custom?{" "}
          <a href="#contact" className="text-[#00e5ff] hover:underline">
            Get in touch
          </a>{" "}
          — we offer monthly retainers and bundle pricing.
        </motion.p>
      </div>
    </section>
  );
}
