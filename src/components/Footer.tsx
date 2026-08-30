import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Reveal } from "./ui";
import { site, waLink } from "../site.config";

const socials = [
  {
    icon: FaInstagram,
    label: "Instagram",
    href: `https://www.instagram.com/${site.instagram}/`,
  },
  { icon: FaWhatsapp, label: "WhatsApp", href: waLink() },
];

export default function Footer() {
  return (
    <footer className="bg-mocha px-6 pb-10 pt-16 text-cream md:px-10 md:pt-20">
      <div className="mx-auto max-w-[1180px]">
        {/* CTA row */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end">
            <div>
              <p className="font-script text-[28px] text-cream/70">
                Let’s start your health journey
              </p>
              <h3 className="mt-2 max-w-[420px] font-serif text-[28px] leading-[1.25] md:text-[36px]">
                Personalized nutrition for a{" "}
                <em className="italic">healthier you</em>
              </h3>
            </div>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-cream px-8 py-[15px] text-[11px] font-medium uppercase tracking-[0.24em] text-mocha transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Start Your Journey
              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>

        {/* Middle row */}
        <div className="flex flex-col justify-between gap-10 py-12 md:flex-row md:items-center">
          <a href="#main" className="leading-none">
            <span className="font-script text-[34px] leading-none text-cream">
              {site.fullName}
            </span>
            <span className="mt-1.5 block text-[8px] uppercase tracking-[0.38em] text-cream/60">
              {site.kicker}
            </span>
          </a>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/25 text-cream/80 transition-all duration-300 hover:-translate-y-1 hover:border-cream hover:bg-cream hover:text-mocha"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Fine print */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-[10.5px] tracking-wide text-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} {site.fullName} — All rights reserved.</p>
          <p className="flex items-center gap-5">
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-cream">
              {site.email}
            </a>
            <a
              href={`https://www.instagram.com/${site.instagram}/`}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-cream"
            >
              @{site.instagram}
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-cream"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
