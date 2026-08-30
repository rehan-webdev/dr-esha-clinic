import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, StarDeco } from "./ui";

/* Hand-drawn botanical branch (left-leaning) */
function BotanicalBranch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 460" fill="none" stroke="#c6cbb0" strokeWidth="1.4" className={className} aria-hidden>
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
      <BotanicalBranch className="pointer-events-none absolute -left-14 top-24 hidden h-[420px] opacity-60 lg:block" />

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-end gap-10 px-6 md:px-10 lg:grid-cols-[1.02fr_1fr]">
        {/* Copy */}
        <div className="order-2 pb-14 pt-2 lg:order-1 lg:pb-24 lg:pt-14">
          <Reveal y={34}>
            <h1 className="relative font-serif text-[44px] leading-[1.07] text-ink sm:text-[54px] lg:text-[64px]">
              <StarDeco className="absolute -left-10 top-2 hidden h-5 w-5 text-mist lg:block" />
              Remote Dietitian
              <br />
              <span className="text-mist">& Nutritionist</span>
              <br />
              Esha Nasir
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-[420px] text-[13.5px] leading-relaxed text-fog">
              Online Consultations | Personalized Diet Plans
            </p>
            <p className="mt-4 max-w-[480px] text-[14px] leading-relaxed text-fog">
              Transform your health through personalized nutrition designed around your body, lifestyle and health goals.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="https://wa.me/923407553114"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-forest px-9 py-[15px] text-[11px] font-medium uppercase tracking-[0.24em] text-cream shadow-[0_20px_36px_-16px_rgba(66,81,62,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-deep hover:shadow-[0_26px_44px_-16px_rgba(49,64,44,0.65)]"
              >
                Book Your Consultation
                <ArrowRight size={15} strokeWidth={1.8} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-3 rounded-full border border-sage-line px-8 py-[15px] text-[11px] font-medium uppercase tracking-[0.24em] text-forest transition-all duration-300 hover:border-forest hover:bg-forest hover:text-cream"
              >
                Learn More
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
            className="absolute right-0 top-10 z-10 hidden w-[170px] select-none md:block lg:right-4"
          >
            <p className="font-script text-[21px] leading-[1.15] text-[#8d9377]">
              Start your glow-up with Dr. Esha!
            </p>
            <svg viewBox="0 0 72 52" fill="none" stroke="#9aa084" strokeWidth="1.6" strokeLinecap="round" className="ml-10 mt-1 h-[46px]">
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
              src="/images/hero-doctor.jpeg"
              alt="Dr. Esha Nasir — Dietitian & Nutritionist"
              className="relative z-[1] aspect-[4/5] w-full object-cover object-top lg:aspect-auto lg:h-[560px]"
            />
            {/* blend the studio backdrop into the page */}
            <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-cream via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-cream/70 via-transparent to-cream/50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
