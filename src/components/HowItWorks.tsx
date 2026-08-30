import { cn } from "../utils/cn";
import { Polaroid, Reveal, ScriptLabel, SectionTitle } from "./ui";

const IMG = {
  smoothie:
    "https://images.pexels.com/photos/868511/pexels-photo-868511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  bowl: "https://images.pexels.com/photos/3794378/pexels-photo-3794378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  bowlsThree:
    "https://images.pexels.com/photos/7660437/pexels-photo-7660437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  fruits:
    "https://images.pexels.com/photos/10967988/pexels-photo-10967988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

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

        <div className="relative grid items-center gap-10 py-8 md:grid-cols-2 md:gap-4 md:py-2">
          <Reveal className="md:justify-self-start md:pl-8">
            <StepBlock
              num="01"
              title="Book your consultation"
              desc="Contact us through WhatsApp and choose your consultation or package."
            />
          </Reveal>
          <Reveal delay={0.15} className="relative mx-auto h-[300px] w-full max-w-[400px] md:h-[330px]">
            <Polaroid
              src={IMG.smoothie}
              alt="Fresh green smoothie and wellness consultation"
              className="absolute left-1 top-0 z-[1] h-[150px] w-[120px] -rotate-[10deg]"
            />
            <Polaroid
              src="/images/consult.jpg"
              alt="Nutrition consultation and meal planning"
              className="absolute bottom-0 right-0 h-[240px] w-[200px] rotate-[5deg] md:h-[260px] md:w-[212px]"
            />
          </Reveal>
        </div>

        <div className="relative grid items-center gap-10 py-8 md:grid-cols-2 md:gap-4 md:py-2">
          <Reveal delay={0.05} className="md:order-2 md:justify-self-end md:pr-8">
            <StepBlock
              num="02"
              title="Nutrition assessment"
              desc="Your health history, dietary habits, lifestyle, measurements and goals are reviewed before planning begins."
            />
          </Reveal>
          <Reveal delay={0.15} className="relative mx-auto h-[300px] w-full max-w-[400px] md:order-1 md:h-[330px]">
            <Polaroid
              src={IMG.bowl}
              alt="Healthy meal prep and nutrition assessment"
              className="absolute left-0 top-2 h-[225px] w-[185px] -rotate-[7deg] md:h-[250px] md:w-[200px]"
            />
            <Polaroid
              src={IMG.bowlsThree}
              alt="Balanced meals and nutrition planning"
              className="absolute bottom-1 right-0 z-[1] h-[138px] w-[168px] rotate-[7deg]"
            />
          </Reveal>
        </div>

        <div className="relative grid items-center gap-10 py-8 md:grid-cols-2 md:gap-4 md:py-2">
          <Reveal className="md:justify-self-start md:pl-8">
            <StepBlock
              num="03"
              title="Personalized diet plan"
              desc="A customized nutrition plan is prepared according to your individual requirements, preferences and health condition."
            />
          </Reveal>
          <Reveal delay={0.15} className="relative mx-auto h-[300px] w-full max-w-[400px] md:h-[330px]">
            <Polaroid
              src="/images/kitchen-reader.jpg"
              alt="Personalized meal planning discussion"
              className="absolute right-1 top-0 h-[240px] w-[196px] rotate-[4deg] md:h-[260px] md:w-[206px]"
            />
            <Polaroid
              src={IMG.fruits}
              alt="Healthy food choices and diet planning"
              className="absolute bottom-2 left-0 z-[1] h-[150px] w-[130px] -rotate-[9deg]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
