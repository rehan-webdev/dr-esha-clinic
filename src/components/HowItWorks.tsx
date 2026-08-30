import { cn } from "../utils/cn";
import { Reveal, ScriptLabel, SectionTitle } from "./ui";

function StepBlock({
  num,
  title,
  desc,
  className,
}: {
  num: string;
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-[290px]", className)}>
      <span className="font-serif text-[56px] leading-none text-sand md:text-[68px]">
        {num}
      </span>
      <h3 className="mt-3 font-serif text-[21px] font-medium leading-snug text-espresso">
        {title}
      </h3>
      <p className="mt-2.5 text-[11.5px] leading-[1.8] text-warmgray">{desc}</p>
    </div>
  );
}

/* dotted organic path that links the three steps */
function Connector() {
  return (
    <svg
      viewBox="0 0 920 1040"
      preserveAspectRatio="none"
      fill="none"
      className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
      aria-hidden
    >
      <path
        d="M 235 4 C 500 30 820 120 740 280 C 668 420 260 400 228 540 C 198 682 680 678 720 838 C 748 950 520 1012 380 1032"
        stroke="#D6C6B5"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="0.1 11"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

const steps = [
  {
    num: "01",
    title: "Book your consultation",
    desc: "Send a message on WhatsApp, tell me your goal and we'll pick the right plan for you.",
    img: "/images/step-book.jpg",
    alt: "Booking a consultation on WhatsApp",
  },
  {
    num: "02",
    title: "Nutrition assessment",
    desc: "Your health history, eating habits, routine, measurements and goals are reviewed before we plan.",
    img: "/images/step-assess.jpg",
    alt: "Nutrition assessment with notes and fresh food",
  },
  {
    num: "03",
    title: "Personalized diet plan",
    desc: "You get a nutrition plan built around your preferences, your lifestyle and what your body actually needs.",
    img: "/images/step-plan.jpg",
    alt: "Personalized meal plan and meal prep containers",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 pb-28 pt-4">
      <ScriptLabel>How It Works</ScriptLabel>
      <SectionTitle>
        Your journey, in <em className="italic">three simple steps</em>
      </SectionTitle>

      <div className="relative mx-auto mt-10 max-w-[920px] md:mt-8">
        <Connector />

        {steps.map((step, i) => (
          <div
            key={step.num}
            className="relative grid items-center gap-10 py-8 md:grid-cols-2 md:gap-8 md:py-4"
          >
            <Reveal
              delay={i % 2 === 1 ? 0.05 : 0}
              className={cn(
                i % 2 === 1
                  ? "md:order-2 md:justify-self-end md:pr-8"
                  : "md:justify-self-start md:pl-8",
              )}
            >
              <StepBlock num={step.num} title={step.title} desc={step.desc} />
            </Reveal>
            <Reveal
              delay={0.15}
              className={cn(
                "flex justify-center",
                i % 2 === 1 ? "md:order-1" : "",
              )}
            >
              <img
                src={step.img}
                alt={step.alt}
                loading="lazy"
                className="h-[280px] w-[220px] rounded-[20px] object-cover shadow-[0_24px_44px_-24px_rgba(46,36,30,0.45)]"
              />
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
