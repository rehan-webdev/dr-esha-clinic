import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  ClipboardList,
  Gauge,
  MessagesSquare,
  Minus,
  UserCheck,
} from "lucide-react";
import { cn } from "../utils/cn";
import { Reveal, ScriptLabel, SectionTitle } from "./ui";

type Feature = { icon: LucideIcon; text: string; off?: boolean };

type Plan = {
  title: string;
  price: string;
  features: Feature[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    title: "Weight Loss",
    price: "Personalized approach",
    featured: true,
    features: [
      { icon: ClipboardList, text: "Sustainable, realistic nutrition strategy" },
      { icon: MessagesSquare, text: "Custom calorie and meal guidance" },
      { icon: Gauge, text: "Tailored to your routine and metabolic needs" },
      { icon: BookOpen, text: "Follow-up support and progress monitoring" },
    ],
  },
  {
    title: "Weight Gain",
    price: "Structured nutrition",
    features: [
      { icon: ClipboardList, text: "Balanced plan for healthy weight gain" },
      { icon: MessagesSquare, text: "Improved energy, strength and intake" },
      { icon: Gauge, text: "Nutrient-dense food choices for your goals" },
      { icon: BookOpen, text: "Personalized recommendations and routine fit" },
    ],
  },
  {
    title: "PCOS & Chronic Conditions",
    price: "Evidence-based care",
    features: [
      { icon: ClipboardList, text: "Support for PCOS, diabetes and hypertension" },
      { icon: MessagesSquare, text: "Lifestyle-friendly food guidance" },
      { icon: Gauge, text: "Condition-specific nutrition planning" },
      { icon: UserCheck, text: "Expert follow-up and plan optimization" },
    ],
  },
];

export default function Tariffs() {
  return (
    <section id="services" className="bg-sage px-6 py-24 md:py-28">
      <ScriptLabel>Services</ScriptLabel>
      <SectionTitle>
        Personalized nutrition services for <em className="italic">everyday life</em>
      </SectionTitle>

      <div className="mx-auto mt-14 grid max-w-[980px] grid-cols-1 gap-5 md:grid-cols-3">
        {plans.map((plan, i) => (
          <Reveal key={plan.title} delay={0.1 + i * 0.12} className="h-full">
            <article
              className={cn(
                "flex h-full flex-col rounded-[22px] bg-white p-7 ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-2",
                plan.featured
                  ? "shadow-[0_34px_60px_-30px_rgba(60,68,46,0.45)] ring-forest/25"
                  : "shadow-[0_24px_48px_-30px_rgba(60,68,46,0.35)]"
              )}
            >
              {plan.featured && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-forest px-3.5 py-1.5 text-[9px] uppercase tracking-[0.22em] text-cream">
                  Most Requested
                </span>
              )}
              <h3 className="max-w-[220px] font-serif text-[19px] font-medium leading-snug text-ink">
                {plan.title}
              </h3>

              <ul className="mt-6 space-y-3.5">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-2.5">
                    <span className="mt-[1px] shrink-0 text-[#7e8871]">
                      <f.icon size={14} strokeWidth={1.6} />
                    </span>
                    <span className="text-[11px] leading-snug text-[#585a4c]">
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <p className="text-center font-serif text-[24px] leading-none text-ink">
                  {plan.price}
                </p>
                <a
                  href="https://wa.me/923407553114"
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "mx-auto mt-5 block w-fit rounded-full px-8 py-3 text-[10px] font-medium uppercase tracking-[0.24em] transition-all duration-300",
                    plan.featured
                      ? "bg-forest text-cream shadow-[0_18px_30px_-14px_rgba(66,81,62,0.6)] hover:-translate-y-0.5 hover:bg-forest-deep"
                      : "border border-sage-line text-forest hover:border-forest hover:bg-forest hover:text-cream"
                  )}
                >
                  Book Now
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="mx-auto mt-16 max-w-[960px] rounded-[28px] border border-sage-line bg-white/60 p-6 md:p-8">
          <h3 className="text-center font-serif text-[26px] text-ink">
            Specialized Nutrition Support
          </h3>
          <ul className="mt-6 grid gap-3 text-center text-[12px] text-fog sm:grid-cols-2 lg:grid-cols-4">
            <li>Cholesterol Management</li>
            <li>Fatty Liver</li>
            <li>Digestive & GI Nutrition</li>
            <li>Women's Nutrition</li>
            <li>Uric Acid</li>
            <li>Kidney Nutrition</li>
            <li>Thyroid</li>
            <li>Osteoporosis</li>
            <li>Infertility Nutrition</li>
            <li>Skin & Hair</li>
            <li>Pediatric Nutrition</li>
            <li>Geriatric Nutrition</li>
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
