import { Reveal, ScriptLabel, SectionTitle } from "./ui";

const IMG = {
  left: "https://images.pexels.com/photos/10048151/pexels-photo-10048151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  right:
    "https://images.pexels.com/photos/6065181/pexels-photo-6065181.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

const testimonials = [
  {
    image: "/testimonials/WhatsApp%20Image%202026-08-30%20at%203.14.08%20PM%20%281%29.jpeg",
    quote:
      "My energy, confidence and health improved within weeks. The plan felt realistic and easy to continue with my routine.",
    author: "Online Consultation Client",
  },
  {
    image: "/testimonials/WhatsApp%20Image%202026-08-30%20at%203.14.08%20PM.jpeg",
    quote:
      "The diet plan was practical and easy to follow with everyday foods. The regular follow-up kept me motivated throughout the journey.",
    author: "Weight Management Client",
  },
  {
    image: "/testimonials/WhatsApp%20Image%202026-08-30%20at%203.18.17%20PM.jpeg",
    quote:
      "I appreciated that the plan was designed around my routine and preferences instead of a rigid, generic diet plan.",
    author: "Online Client",
  },
];

export default function Faq() {
  return (
    <section id="testimonials" className="relative overflow-hidden px-6 py-24 md:py-28">
      <div className="pointer-events-none absolute left-[3%] top-[42%] hidden animate-drift lg:block xl:left-[6%]">
        <div className="pointer-events-auto h-[150px] w-[118px] -rotate-[11deg] overflow-hidden rounded-[18px] border border-[#d9d7c5] bg-white p-2 shadow-[0_20px_40px_-25px_rgba(60,68,46,0.35)]">
          <img src={IMG.left} alt="Nutrition success and healthy routine" className="h-full w-full rounded-[12px] object-cover" />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-[10%] right-[3%] hidden animate-drift-slow lg:block xl:right-[6%]">
        <div className="pointer-events-auto h-[130px] w-[150px] rotate-[9deg] overflow-hidden rounded-[18px] border border-[#d9d7c5] bg-white p-2 shadow-[0_20px_40px_-25px_rgba(60,68,46,0.35)]">
          <img src={IMG.right} alt="Healthy lifestyle and balanced meals" className="h-full w-full rounded-[12px] object-cover" />
        </div>
      </div>

      <ScriptLabel>Testimonials</ScriptLabel>
      <SectionTitle>
        Real clients. <em className="italic">Real progress.</em>
      </SectionTitle>

      <div className="mx-auto mt-8 max-w-[1100px]">
        <div className="mb-10 text-center">
          <p className="font-script text-[52px] leading-none text-forest md:text-[68px]">Client</p>
          <h3 className="mt-1 font-serif text-[34px] font-semibold uppercase tracking-[0.05em] text-forest md:text-[52px]">
            Transformation
          </h3>
          <div className="mx-auto mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-[#cfd3bb] bg-[#edf0e4] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-forest md:text-[12px]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-forest" />
            Real People. Real Results.
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-forest" />
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.author} delay={0.08 * i} className="h-full">
              <article className="group h-full overflow-hidden rounded-[28px] border border-[#d7d9c8] bg-[#f7f2ea] shadow-[0_22px_40px_-30px_rgba(60,68,46,0.4)] transition-transform duration-300 hover:-translate-y-1.5">
                <div className="relative border-b border-[#d7d9c8] bg-[#f4efe7] p-2">
                  <img
                    src={item.image}
                    alt={item.author}
                    className="h-[300px] w-full rounded-[20px] object-cover"
                  />
                  <div className="absolute left-6 top-6 rounded-full bg-forest px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-cream shadow-md">
                    Before
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="text-[14px] leading-[1.8] text-fog">“{item.quote}”</p>
                  <div className="mt-5 border-t border-[#d7d9c8] pt-4">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-mist">
                      — {item.author}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.3}>
        <div className="mx-auto mt-12 max-w-[760px] text-center">
          <p className="text-[15px] leading-[1.8] text-fog">
            Your progress can be our next success story.
          </p>
          <a
            href="https://wa.me/923407553114"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center rounded-full bg-forest px-8 py-[14px] text-[10px] uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-deep"
          >
            Book Your Consultation
          </a>
          <p className="mt-6 text-[11px] text-fog">
            Client results may vary depending on individual health, lifestyle, consistency and other factors.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
