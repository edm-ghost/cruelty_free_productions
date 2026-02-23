"use client";

import { motion } from "framer-motion";
import { Play, Music, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { portfolio } from "@/lib/content";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Our Work"
          title="Tracks Delivered, Rights Transferred"
          subtitle="A selection of recent ghost production work across genres. All tracks are released under artist names."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolio.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card hover className="flex flex-col gap-4">
                {/* Waveform placeholder */}
                <div className="w-full h-24 rounded-lg bg-gradient-to-r from-[#00e5ff]/10 to-[#a855f7]/10 border border-white/[0.06] flex items-center justify-center relative overflow-hidden group cursor-pointer">
                  {/* Fake waveform bars */}
                  <div className="flex items-center gap-0.5 opacity-50 group-hover:opacity-0 transition-opacity">
                    {Array.from({ length: 48 }).map((_, j) => (
                      <div
                        key={j}
                        className="w-1 rounded-full bg-gradient-to-t from-[#00e5ff] to-[#a855f7]"
                        style={{
                          height: `${Math.max(8, Math.sin(j * 0.5) * 30 + 35 + Math.random() * 20)}px`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Play button on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-[#00e5ff] flex items-center justify-center shadow-lg shadow-[#00e5ff]/30">
                      <Play size={16} className="text-black fill-black ml-0.5" />
                    </div>
                    <span className="absolute bottom-2 right-3 text-xs text-[#888]">
                      SoundCloud embed
                    </span>
                  </div>
                </div>

                {/* Track info */}
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-[#f0f0f0] text-base">{track.title}</h3>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/20 shrink-0 ml-2">
                      {track.genre}
                    </span>
                  </div>
                  <p className="text-[#888] text-sm leading-relaxed mb-3">{track.description}</p>

                  <div className="flex items-center gap-4 text-xs text-[#888]">
                    <span className="flex items-center gap-1">
                      <Music size={12} />
                      {track.bpm} BPM · {track.key}
                    </span>
                    <span className="flex items-center gap-1">
                      <TrendingUp size={12} />
                      {track.plays} plays
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-[#888] text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          * Tracks displayed anonymously to protect artist confidentiality. Full demos available
          upon booking.
        </motion.p>
      </div>
    </section>
  );
}
