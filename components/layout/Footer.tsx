import { Instagram, Twitter, Youtube } from "lucide-react";
import { site, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold tracking-wider gradient-text block mb-2">
              {site.name}
            </span>
            <p className="text-[#888] text-sm leading-relaxed max-w-xs">
              Premium ghost production for EDM artists who demand studio-quality sound and full
              creative control.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#888] mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#888] hover:text-[#f0f0f0] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Socials */}
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#888] mb-4">
              Get In Touch
            </p>
            <p className="text-sm text-[#888] mb-1">{site.email}</p>
            <p className="text-sm text-[#888] mb-6">{site.location}</p>

            <div className="flex gap-4">
              <a
                href={site.socials.instagram}
                aria-label="Instagram"
                className="text-[#888] hover:text-[#00e5ff] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={site.socials.twitter}
                aria-label="Twitter/X"
                className="text-[#888] hover:text-[#00e5ff] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href={site.socials.youtube}
                aria-label="YouTube"
                className="text-[#888] hover:text-[#00e5ff] transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-[#888]">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-[#888]">All tracks delivered with full exclusive rights.</p>
        </div>
      </div>
    </footer>
  );
}
