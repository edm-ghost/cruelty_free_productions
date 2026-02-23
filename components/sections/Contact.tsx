"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, MapPin, Send, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { contact } from "@/lib/content";

const iconMap: Record<string, React.ElementType> = { Mail, Clock, MapPin };

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", genre: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder — wire to your backend / Formspree / Resend
    setSubmitted(true);
  }

  const inputClass =
    "w-full bg-[#0d0d0d] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-[#f0f0f0] placeholder:text-[#555] focus:outline-none focus:border-[#00e5ff]/50 transition-colors";

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Book a Track" title={contact.heading} subtitle={contact.subtext} />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="glass rounded-xl p-10 border border-white/[0.08] flex flex-col items-center justify-center text-center gap-4 h-full min-h-[400px]">
                <CheckCircle size={48} className="text-[#00e5ff]" />
                <h3 className="text-xl font-bold text-[#f0f0f0]">Message Received!</h3>
                <p className="text-[#888] text-sm max-w-xs">
                  Thanks for reaching out. We&apos;ll review your brief and get back to you within
                  24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-xl p-6 border border-white/[0.08] space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#888] mb-1.5 tracking-wide">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your artist name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#888] mb-1.5 tracking-wide">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#888] mb-1.5 tracking-wide">
                    Genre
                  </label>
                  <select
                    name="genre"
                    required
                    value={form.genre}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select your genre
                    </option>
                    {contact.genres.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#888] mb-1.5 tracking-wide">
                    Project Brief
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project: reference tracks, BPM, vibe, budget, deadline..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send size={16} />
                  Send Brief
                </Button>
              </form>
            )}
          </motion.div>

          {/* Sidebar info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            {contact.info.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={item.label}
                  className="glass rounded-xl p-5 border border-white/[0.08] flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center shrink-0">
                    {Icon && <Icon size={18} className="text-[#00e5ff]" />}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#888] tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-[#f0f0f0]">{item.value}</p>
                  </div>
                </div>
              );
            })}

            {/* Guarantee box */}
            <div className="glass rounded-xl p-5 border border-[#a855f7]/20 bg-[#a855f7]/5">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#a855f7] mb-2">
                Satisfaction Guarantee
              </p>
              <p className="text-sm text-[#888] leading-relaxed">
                If you&apos;re not happy after revisions, we&apos;ll issue a partial refund or
                credit toward a future project — no questions asked.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
