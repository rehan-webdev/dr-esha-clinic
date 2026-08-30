import { Reveal, ScriptLabel, SectionTitle } from "./ui";

/**
 * ⚠️ PLACEHOLDER CONTENT — these are sample stories written to show the layout.
 * Replace the `quote` / `author` / `result` values (and the images in
 * public/testimonials/) with Dt. Momina's real client feedback as it comes in.
 */
const testimonials = [
  {
    image: "/testimonials/client-1.jpg",
    quote:
      "My energy, confidence and health improved within weeks. The plan felt realistic and easy to continue with my routine.",
    author: "Online Consultation Client",
    result: "Sustainable habits",
  },
  {
    image: "/testimonials/client-2.jpg",
    quote:
      "The diet plan was practical and built around everyday foods — no crash dieting. The regular follow-up kept me motivated throughout.",
    author: "Weight Management Client",
    result: "Steady progress",
  },
  {
    image: "/testimonials/client-3.jpg",
    quote:
      "I appreciated that my plan was designed around my routine and food preferences instead of a rigid, generic diet chart.",
    author: "Lifestyle Nutrition Client",
    result: "Personalized plan",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-6 py-24 md:py-28"
    >
      {/* drifting polaroid accents */}
      <div className="pointer-events-none absolute left-[3%] top-[38%] hidden animate-drift lg:block xl:left-[6%]">
        <div className="h-[150px] w-[118px] -rotate-[11deg] overflow-hidden rounded-[18px] border border-line bg-white p-2 shadow-[0_20px_40px_-25px_rgba(46,36,30,0.4)]">
          <img
            src="/images/step-plan.jpg"
            alt="A personalized meal plan"
            className="h-full w-full rounded-[12px] object-cover"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-[8%] right-[3%] hidden animate-drift-slow lg:block xl:right-[6%]">
        <div className="h-[130px] w-[150px] rotate-[9deg] overflow-hidden rounded-[18px] border border-line bg-white p-2 shadow-[0_20px_40px_-25px_rgba(46,36,30,0.4)]">
          <img
            src="/images/step-assess.jpg"
            alt="Balanced everyday meals"
            className="h-full w-full rounded-[12px] object-cover"
          />
        </div>
      </div>

      <ScriptLabel>Testimonials</ScriptLabel>
      <SectionTitle>
        Real people. <em className="italic">Real progress.</em>
      </SectionTitle>

      <div className="mx-auto mt-8 max-w-[1100px]">
        <div className="mb-10 text-center">
          <p className="font-script text-[52px] leading-none text-mocha md:text-[68px]">
            Client
          </p>
          <h3 className="mt-1 font-serif text-[34px] font-semibold uppercase tracking-[0.05em] text-mocha md:text-[52px]">
            Transformation
          </h3>
          <div className="mx-auto mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-mocha md:text-[12px]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-terracotta" />
            Small Changes, Lasting Results
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-terracotta" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={0.1 + i * 0.12} className="h-full">
              <figure className="flex h-full flex-col overflow-hidden rounded-[26px] border border-line bg-white shadow-[0_26px_50px_-32px_rgba(46,36,30,0.5)] transition-all duration-500 hover:-translate-y-1.5">
                <div className="relative h-[230px] overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.author}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-cream/90 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-mocha backdrop-blur">
                    {t.result}
                  </span>
                </div>
                <figcaption className="flex flex-1 flex-col p-6">
                  <p className="text-[13px] leading-[1.85] text-warmgray">
                    “{t.quote}”
                  </p>
                  <p className="mt-5 font-serif text-[14px] text-espresso">
                    {t.author}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center font-script text-[22px] text-terracotta">
            Your story could be next — let&rsquo;s start yours 🌿
          </p>
        </Reveal>
      </div>
    </section>
  );
}
