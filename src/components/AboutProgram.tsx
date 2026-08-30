import { Flower2, Scale, Sparkles, UtensilsCrossed } from "lucide-react";
import { Reveal, ScriptLabel, SectionTitle } from "./ui";
import { site } from "../site.config";

const features = [
  { icon: Scale, text: "Weight Management" },
  { icon: Sparkles, text: "PCOS & Women's Nutrition" },
  { icon: Flower2, text: "Diabetes & Lifestyle Health" },
  { icon: UtensilsCrossed, text: "General Wellness & Healthy Habits" },
];

export default function AboutProgram() {
  return (
    <section id="about" className="px-6 pb-24 pt-16 md:pt-20">
      <ScriptLabel>About Me</ScriptLabel>
      <SectionTitle>
        Meet {site.name} — <em className="italic">personalized</em> nutrition for
        real life
      </SectionTitle>

      <div className="mx-auto mt-10 max-w-[950px] space-y-6 text-center text-[14px] leading-[1.9] text-warmgray">
        <p>
          I&rsquo;m {site.name}, a Nutritionist, Dietitian &amp; Health Coach. I
          help people achieve their health goals with nutrition that is
          realistic, personal and built to last.
        </p>
        <p>
          No crash diets. No starvation. No one-size-fits-all meal plans. Your
          body, your routine, your food preferences and your goals are all
          different — so your plan should be too.
        </p>
        <p>
          My aim isn&rsquo;t just to move a number on the scale. It&rsquo;s to
          help you build everyday eating habits you can genuinely sustain, so the
          results stay with you.
        </p>
      </div>

      <Reveal delay={0.12}>
        <div className="mx-auto mt-12 max-w-[960px] overflow-hidden rounded-[28px] shadow-[0_34px_60px_-34px_rgba(46,36,30,0.5)] ring-1 ring-line">
          <img
            src="/images/about.jpg"
            alt={`${site.name} preparing personalized nutrition guidance`}
            loading="lazy"
            className="h-[260px] w-full object-cover sm:h-[340px] md:h-[420px]"
          />
        </div>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-[960px] grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 md:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.text} delay={0.1 + i * 0.1}>
            <div className="group flex flex-col items-center text-center">
              <span className="grid h-12 w-12 place-items-center text-taupe transition-all duration-500 group-hover:-translate-y-1.5 group-hover:text-terracotta">
                <f.icon size={30} strokeWidth={1.15} />
              </span>
              <p className="mt-4 max-w-[190px] text-[11.5px] leading-[1.7] text-warmgray">
                {f.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
