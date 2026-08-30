import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Home", href: "#main" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Consultation", href: "#consultation" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40 mx-auto flex w-full max-w-[1180px] items-center justify-between px-6 pt-7 md:px-10 md:pt-9">
      {/* Wordmark */}
      <a href="#main" className="group leading-none">
        <span className="font-script text-[30px] leading-none text-forest transition-colors group-hover:text-forest-deep md:text-[32px]">
          Dietitian Esha Nasir
        </span>
        <span className="mt-1 block text-[8px] uppercase tracking-[0.38em] text-fog">
          Remote Dietitian & Nutritionist
        </span>
      </a>

      {/* Desktop links */}
      <nav className="hidden items-center gap-9 md:flex">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="group relative text-[13px] tracking-wide text-[#585a4c] transition-colors hover:text-forest"
          >
            {l.label}
            <span className="absolute -bottom-2 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-forest opacity-0 transition-all duration-300 group-hover:opacity-100" />
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <a
          href="https://wa.me/923407553114"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-1.5 rounded-full border border-sage-line px-5 py-2.5 text-[10.5px] uppercase tracking-[0.22em] text-forest transition-all duration-300 hover:border-forest hover:bg-forest hover:text-cream sm:inline-flex"
        >
          Book Consultation
          <ArrowUpRight size={13} strokeWidth={1.8} />
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-sage-line text-forest md:hidden"
        >
          {open ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-5 top-full mt-3 rounded-3xl border border-line bg-cream/95 p-6 shadow-[0_30px_60px_-24px_rgba(60,68,46,0.35)] backdrop-blur md:hidden"
          >
            <ul className="space-y-4">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between font-serif text-lg text-ink"
                  >
                    {l.label}
                    <ArrowUpRight size={16} className="text-mist" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/923407553114"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 block rounded-full bg-forest py-3.5 text-center text-[11px] uppercase tracking-[0.22em] text-cream"
            >
              Book Consultation
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
