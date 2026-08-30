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
      <span className="font-serif text-[56px] leading-none text-[#ccd1bb] md:text-[68px]">
        {num}
      </span>
      <h3 className="mt-3 font-serif text-[21px] font-medium leading-snug text-ink">
        {title}
      </h3>
      <p className="mt-2.5 text-[11.5px] leading-[1.8] text-fog">{desc}</p>
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
        stroke="#c9cdb4"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="0.1 11"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function HowItWorks() {
  return (
    <section id="consultation" className="px-6 pb-28 pt-4">
      <ScriptLabel>Online Consultation</ScriptLabel>
      <SectionTitle>
        Professional nutrition consultation — <em className="italic">from anywhere</em>
      </SectionTitle>

      <div className="relative mx-auto mt-10 max-w-[920px] md:mt-8">
        <Connector />

        <div className="relative grid items-center gap-10 py-8 md:grid-cols-2 md:gap-8 md:py-4">
          <Reveal className="md:justify-self-start md:pl-8">
            <StepBlock
              num="01"
              title="Book your consultation"
              desc="Contact us through WhatsApp and choose your consultation or package."
            />
          </Reveal>
          <Reveal delay={0.15} className="flex justify-center">
            <img
              src="/images/1st.jpeg"
              alt="Book your consultation"
              className="h-[280px] w-[220px] rounded-[20px] object-cover shadow-lg"
            />
          </Reveal>
        </div>

        <div className="relative grid items-center gap-10 py-8 md:grid-cols-2 md:gap-8 md:py-4">
          <Reveal delay={0.05} className="md:order-2 md:justify-self-end md:pr-8">
            <StepBlock
              num="02"
              title="Nutrition assessment"
              desc="Your health history, dietary habits, lifestyle, measurements and goals are reviewed before planning begins."
            />
          </Reveal>
          <Reveal delay={0.15} className="flex justify-center md:order-1">
            <img
              src="/images/2nd.jpeg"
              alt="Nutrition assessment"
              className="h-[280px] w-[220px] rounded-[20px] object-cover shadow-lg"
            />
          </Reveal>
        </div>

        <div className="relative grid items-center gap-10 py-8 md:grid-cols-2 md:gap-8 md:py-4">
          <Reveal className="md:justify-self-start md:pl-8">
            <StepBlock
              num="03"
              title="Personalized diet plan"
              desc="A customized nutrition plan is prepared according to your individual requirements, preferences and health condition."
            />
          </Reveal>
          <Reveal delay={0.15} className="flex justify-center">
            <img
              src="/images/3rd.jpeg"
              alt="Personalized diet plan"
              className="h-[280px] w-[220px] rounded-[20px] object-cover shadow-lg"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
