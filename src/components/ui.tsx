import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../utils/cn";

/* Cinematic scroll-reveal wrapper */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Handwritten script section label, e.g. "About Program" */
export function ScriptLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal y={14}>
      <p className={cn("text-center font-script text-[26px] text-mist md:text-[30px]", className)}>
        {children}
      </p>
    </Reveal>
  );
}

/* Serif section heading with optional italic accents */
export function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal delay={0.08}>
      <h2
        className={cn(
          "mx-auto mt-4 max-w-[660px] text-center font-serif text-[29px] leading-[1.3] text-ink md:text-[38px]",
          className
        )}
      >
        {children}
      </h2>
    </Reveal>
  );
}

/* Tilted polaroid photo card */
export function Polaroid({
  src,
  alt,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={cn(
        "bg-white p-2 pb-6 ring-1 ring-ink/5 shadow-[0_24px_46px_-18px_rgba(60,68,46,0.35)] rounded-[4px] transition-[transform,box-shadow] duration-500 ease-out hover:z-20 hover:scale-[1.06] hover:rotate-0 hover:shadow-[0_30px_60px_-18px_rgba(60,68,46,0.45)]",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn("h-full w-full rounded-[2px] object-cover", imgClassName)}
      />
    </div>
  );
}

/* Spinning asterisk star decoration */
export function StarDeco({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className={cn("animate-spin-slower", className)}
      aria-hidden
    >
      <path d="M12 4v16M5 7.5l14 9M19 7.5l-14 9" />
    </svg>
  );
}
