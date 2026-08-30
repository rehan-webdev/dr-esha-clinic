import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui";

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const socials = [
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/dt.eshanasir/" },
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://www.youtube.com/" },
];

const links = [
  { label: "Home", href: "#main" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Consultation", href: "#consultation" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-forest px-6 pb-10 pt-16 text-cream md:px-10 md:pt-20">
      <div className="mx-auto max-w-[1180px]">
        {/* CTA row */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end">
            <div>
              <p className="font-script text-[28px] text-cream/70">
                Let’s start your nutrition journey
              </p>
              <h3 className="mt-2 max-w-[420px] font-serif text-[28px] leading-[1.25] md:text-[36px]">
                Personalized guidance for a <em className="italic">healthier you</em>
              </h3>
            </div>
            <a
              href="https://wa.me/923407553114"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-cream px-8 py-[15px] text-[11px] font-medium uppercase tracking-[0.24em] text-forest transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Book Online
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
              Dietitian Esha Nasir
            </span>
            <span className="mt-1.5 block text-[8px] uppercase tracking-[0.38em] text-cream/60">
              Remote Dietitian & Nutritionist
            </span>
          </a>

          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[12px] tracking-wide text-cream/70 transition-colors hover:text-cream"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/25 text-cream/80 transition-all duration-300 hover:-translate-y-1 hover:border-cream hover:bg-cream hover:text-forest"
              >
                <s.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Fine print */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-[10.5px] tracking-wide text-cream/50 md:flex-row">
          <p>
            <a
              href="https://devloop.site"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-cream  decoration-white/30 underline-offset-4"
            >
              © 2026 Dietitian Esha Nasir — All rights reserved. Crafted with❤️by DevLoop
            </a>
          </p>
          <p className="flex items-center gap-5">
            <a href="mailto:eshanasir406@gmail.com" className="transition-colors hover:text-cream">
              eshanasir406@gmail.com
            </a>
            <a href="https://wa.me/923407553114" target="_blank" rel="noreferrer" className="transition-colors hover:text-cream">
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
