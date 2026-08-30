import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, StarDeco } from "./ui";
import { site, waLink } from "../site.config";

const highlights = ["Dietitian & Health Coach", "Weight Management Specialist"];

/* Hand-drawn botanical branch (left-leaning), drawn in warm taupe */
function BotanicalBranch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 460"
      fill="none"
      stroke="#D6C6B5"
      strokeWidth="1.4"
      className={className}
      aria-hidden
    >
      <path d="M118 448 C 126 340, 100 250, 112 60" />
      <path d="M112 380 C 70 366, 44 330, 46 292 C 92 302, 112 340, 112 380 Z" />
      <path d="M114 320 C 158 300, 182 262, 178 224 C 132 238, 114 278, 114 320 Z" />
      <path d="M108 252 C 66 236, 42 200, 46 162 C 90 174, 108 212, 108 252 Z" />
      <path d="M112 190 C 154 172, 176 134, 172 98 C 128 110, 112 150, 112 190 Z" />
      <path d="M111 122 C 76 106, 56 74, 60 42 C 98 52, 111 86, 111 122 Z" />
      <path d="M112 66 C 136 48, 150 22, 148 2 C 122 14, 112 40, 112 66 Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="main" className="relative overflow-hidden">
      {/* faint botanical backdrop on the left of the headline */}
      <BotanicalBranch className="pointer-events-none absolute -left-14 top-24 hidden h-[420px] opacity-70 lg:block" />

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-end gap-10 px-6 md:px-10 lg:grid-cols-[1.02fr_1fr]">
        {/* Copy */}
        <div className="order-2 pb-14 pt-2 lg:order-1 lg:pb-24 lg:pt-14">
          <Reveal y={34}>
            <h1 className="relative font-serif text-[44px] leading-[1.07] text-espresso sm:text-[54px] lg:text-[64px]">
              <StarDeco className="absolute -left-10 top-2 hidden h-5 w-5 text-taupe lg:block" />
              Nutritionist
              <br />
              <span className="text-terracotta">&amp; Health Coach</span>
              <br />
              {site.name.replace("Dt. ", "")}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-[420px] text-[13.5px] leading-relaxed text-warmgray">
              Personalized Diet Plans | Online Consultations
            </p>
            <p className="mt-4 max-w-[480px] text-[14px] leading-relaxed text-warmgray">
              Helping you achieve your health goals — with nutrition designed
              around your body, your routine and your life.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-mocha"
                >
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-sand text-mocha">
                    <Check size={10} strokeWidth={2.4} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-mocha px-9 py-[15px] text-[11px] font-medium uppercase tracking-[0.24em] text-cream shadow-[0_20px_36px_-16px_rgba(107,81,64,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-deep hover:shadow-[0_26px_44px_-16px_rgba(75,55,40,0.65)]"
              >
                Start Your Journey
                <ArrowRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-3 rounded-full border border-line px-8 py-[15px] text-[11px] font-medium uppercase tracking-[0.24em] text-mocha transition-all duration-300 hover:border-mocha hover:bg-mocha hover:text-cream"
              >
                View Services
              </a>
            </div>
          </Reveal>
        </div>

        {/* Portrait */}
        <div className="relative order-1 pt-8 lg:order-2 lg:pt-0">
          {/* botanical line art sweeping behind the portrait */}
          <BotanicalBranch className="pointer-events-none absolute -right-16 bottom-6 h-[380px] -scale-x-100 opacity-70 md:h-[460px]" />

          {/* handwritten annotation */}
          <motion.div
            initial={{ opacity: 0, rotate: -6, y: 10 }}
            animate={{ opacity: 1, rotate: -3, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-10 z-10 hidden w-[180px] select-none md:block lg:right-4"
          >
            <p className="font-script text-[21px] leading-[1.15] text-terracotta">
              Start your journey with {site.name}!
            </p>
            <svg
              viewBox="0 0 72 52"
              fill="none"
              stroke="#B8A18C"
              strokeWidth="1.6"
              strokeLinecap="round"
              className="ml-10 mt-1 h-[46px]"
            >
              <path d="M6 6 C 26 22, 42 30, 58 40 M 58 40 l -12 -1 M 58 40 l 1 -12" />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-[420px] lg:max-w-[480px]"
          >
            <img
              src="/images/hero-portrait.jpg"
              alt={`${site.fullName} — Dietitian & Health Coach`}
              className="relative z-[1] aspect-[4/5] w-full object-cover object-top lg:aspect-auto lg:h-[560px]"
            />
            {/* blend the studio backdrop into the page */}
            <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-cream via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-cream/70 via-transparent to-cream/50" />
          </motion.div>

          {/* floating credential chip */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-6 left-0 z-10 hidden rounded-2xl border border-line bg-white/90 px-5 py-3 shadow-[0_20px_40px_-24px_rgba(46,36,30,0.4)] backdrop-blur sm:block lg:-left-6"
          >
            <p className="text-[9.5px] uppercase tracking-[0.24em] text-warmgray">
              Online consultations
            </p>
            <p className="mt-1 font-serif text-[15px] text-espresso">
              Weight Management Specialist
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
