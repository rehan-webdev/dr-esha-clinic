import type { LucideIcon } from "lucide-react";
import {
  ClipboardList,
  Gauge,
  HeartPulse,
  MessagesSquare,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { cn } from "../utils/cn";
import { Reveal, ScriptLabel, SectionTitle } from "./ui";
import { site, waLink } from "../site.config";

type Plan = {
  title: string;
  price: string;
  features: { icon: LucideIcon; text: string }[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    title: "Weight Management",
    price: "Personalized approach",
    featured: true,
    features: [
      { icon: ClipboardList, text: "Sustainable, realistic nutrition strategy" },
      { icon: MessagesSquare, text: "Custom calorie and portion guidance" },
      { icon: Gauge, text: "Built around your routine and food preferences" },
      { icon: TrendingUp, text: "Follow-up support and progress check-ins" },
    ],
  },
  {
    title: "Healthy Weight Gain",
    price: "Structured nourishment",
    features: [
      { icon: ClipboardList, text: "Balanced plan for steady, healthy gain" },
      { icon: MessagesSquare, text: "Better energy, strength and appetite" },
      { icon: Gauge, text: "Nutrient-dense food choices that fit you" },
      { icon: TrendingUp, text: "Adjusted as your body responds" },
    ],
  },
  {
    title: "PCOS & Hormonal Balance",
    price: "Evidence-based care",
    features: [
      { icon: ClipboardList, text: "Support for PCOS, thyroid and insulin resistance" },
      { icon: MessagesSquare, text: "Lifestyle-friendly, hormone-aware guidance" },
      { icon: Gauge, text: "Condition-specific nutrition planning" },
      { icon: Sparkles, text: "Expert follow-up and plan optimization" },
    ],
  },
];

const alsoSupporting = [
  "Cholesterol Management",
  "Fatty Liver",
  "Digestive & Gut Health",
  "Thyroid",
  "Skin & Hair",
  "Postpartum Nutrition",
  "Kids' Nutrition",
  "Energy & Fatigue",
];

export default function Services() {
  return (
    <section id="services" className="bg-sandsoft px-6 py-24 md:py-28">
      <ScriptLabel>Services</ScriptLabel>
      <SectionTitle>
        Nutrition support for <em className="italic">your</em> goal
      </SectionTitle>

      <div className="mx-auto mt-14 grid max-w-[980px] grid-cols-1 gap-5 md:grid-cols-3">
        {plans.map((plan, i) => (
          <Reveal key={plan.title} delay={0.1 + i * 0.12} className="h-full">
            <article
              className={cn(
                "flex h-full flex-col rounded-[22px] bg-white p-7 ring-1 ring-espresso/5 transition-all duration-500 hover:-translate-y-2",
                plan.featured
                  ? "shadow-[0_34px_60px_-30px_rgba(46,36,30,0.45)] ring-terracotta/30"
                  : "shadow-[0_24px_48px_-30px_rgba(46,36,30,0.35)]",
              )}
            >
              {plan.featured && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-mocha px-3.5 py-1.5 text-[9px] uppercase tracking-[0.22em] text-cream">
                  Most Requested
                </span>
              )}
              <h3 className="max-w-[220px] font-serif text-[19px] font-medium leading-snug text-espresso">
                {plan.title}
              </h3>

              <ul className="mt-6 space-y-3.5">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-2.5">
                    <span className="mt-[1px] shrink-0 text-terracotta">
                      <f.icon size={14} strokeWidth={1.6} />
                    </span>
                    <span className="text-[11px] leading-snug text-warmgray">
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <p className="text-center font-serif text-[24px] leading-none text-espresso">
                  {plan.price}
                </p>
                <a
                  href={waLink(
                    `Hi ${site.name}! I'm interested in the ${plan.title} plan. Can you tell me more? 🌿`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "mx-auto mt-5 block w-fit rounded-full px-8 py-3 text-[10px] font-medium uppercase tracking-[0.24em] transition-all duration-300",
                    plan.featured
                      ? "bg-mocha text-cream shadow-[0_18px_30px_-14px_rgba(107,81,64,0.6)] hover:-translate-y-0.5 hover:bg-deep"
                      : "border border-line text-mocha hover:border-mocha hover:bg-mocha hover:text-cream",
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
        <div className="mx-auto mt-16 max-w-[960px] rounded-[28px] border border-line bg-white/70 p-6 md:p-8">
          <h3 className="flex items-center justify-center gap-2 text-center font-serif text-[24px] text-espresso md:text-[26px]">
            <HeartPulse size={20} className="text-terracotta" strokeWidth={1.5} />
            Also supporting
          </h3>
          <ul className="mt-6 grid gap-3 text-center text-[12px] text-warmgray sm:grid-cols-2 lg:grid-cols-4">
            {alsoSupporting.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line/70 bg-cream/60 px-4 py-2"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-[13px] leading-relaxed text-warmgray">
            Not sure which one fits you? Tell me your goal and I&rsquo;ll guide
            you to the right plan.
          </p>
          <div className="mt-4 flex justify-center">
            <a
              href={waLink(
                `Hi ${site.name}! I'm not sure which plan suits me — can you help me choose? 🌿`,
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-mocha px-7 py-3 text-[10px] uppercase tracking-[0.22em] text-mocha transition-all duration-300 hover:bg-mocha hover:text-cream"
            >
              Ask Which Plan Fits Me
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
