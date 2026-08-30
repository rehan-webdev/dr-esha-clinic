import { CalendarCheck, Flower2, Sparkles, UtensilsCrossed } from "lucide-react";
import { Reveal, ScriptLabel, SectionTitle } from "./ui";

const features = [
  {
    icon: CalendarCheck,
    text: "Weight Management",
  },
  {
    icon: Sparkles,
    text: "PCOS & Women's Nutrition",
  },
  {
    icon: Flower2,
    text: "Diabetes & Hypertension",
  },
  {
    icon: UtensilsCrossed,
    text: "General Wellness & Lifestyle Nutrition",
  },
];

export default function AboutProgram() {
  return (
    <section id="about" className="px-6 pb-24 pt-16 md:pt-20">
      <ScriptLabel>About Me</ScriptLabel>
      <SectionTitle>
        Meet Dietitian Esha Nasir — <em className="italic">personalized</em> nutrition for real life
      </SectionTitle>

      <div className="mx-auto mt-10 max-w-[950px] space-y-6 text-center text-[14px] leading-[1.9] text-fog">
        <p>
          I’m Dr. Esha Nasir, a Consultant Dietitian & Nutritionist specializing in personalized nutrition and online dietary consultations.
        </p>
        <p>
          I believe that every individual has different nutritional needs. A diet plan should therefore be personalized according to your health condition, lifestyle, food preferences, routine and goals.
        </p>
        <p>
          My aim is not simply to help you change your weight, but to help you develop healthy and sustainable eating habits that support your overall well-being.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[960px] grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 md:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.text} delay={0.1 + i * 0.1}>
            <div className="group flex flex-col items-center text-center">
              <span className="grid h-12 w-12 place-items-center text-[#7e8871] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:text-forest">
                <f.icon size={30} strokeWidth={1.15} />
              </span>
              <p className="mt-4 max-w-[190px] text-[11.5px] leading-[1.7] text-fog">
                {f.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
