"use client";

import { motion } from "framer-motion";
import { Music2, Sliders, Package, Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/lib/content";

const iconMap: Record<string, React.ElementType> = {
  Music2,
  Sliders,
  Package,
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="What We Do"
          title="Services Built for EDM Artists"
          subtitle="Everything you need to release professional music under your name — without lifting a DAW."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card hover className="h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00e5ff]/10 to-[#a855f7]/10 border border-[#00e5ff]/20 flex items-center justify-center mb-5">
                    {Icon && <Icon size={22} className="text-[#00e5ff]" />}
                  </div>

                  <h3 className="text-lg font-bold text-[#f0f0f0] mb-3">{service.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed mb-5 flex-1">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[#888]">
                        <Check size={14} className="text-[#00e5ff] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
