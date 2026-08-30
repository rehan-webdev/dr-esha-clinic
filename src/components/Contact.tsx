import { ArrowUpRight, Mail, MapPin, MessageCircle, UserRound } from "lucide-react";
import { Reveal, ScriptLabel, SectionTitle } from "./ui";

const details = [
  {
    label: "Dietitian",
    value: "Dr. Esha Nasir",
    icon: UserRound,
  },
  {
    label: "Profession",
    value: "Consultant Dietitian & Nutritionist",
    icon: MessageCircle,
  },
  {
    label: "Specialization",
    value: "Remote Dietitian & Online Nutrition Consultations",
    icon: MapPin,
  },
  {
    label: "Email",
    value: "eshanasir406@gmail.com",
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-28 pt-8 md:pb-32">
      <ScriptLabel>Contact</ScriptLabel>
      <SectionTitle>
        Let’s start your <em className="italic">nutrition journey</em>
      </SectionTitle>

      <div className="mx-auto mt-12 grid max-w-[1100px] gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="h-full">
          <div className="h-full rounded-[28px] bg-forest p-8 text-cream shadow-[0_30px_60px_-30px_rgba(49,64,44,0.7)] md:p-10">
            <p className="text-[14px] uppercase tracking-[0.25em] text-cream/70">
              Get in touch
            </p>
            <h3 className="mt-4 font-serif text-[32px] leading-tight md:text-[38px]">
              Have a question or ready to begin?
            </h3>
            <p className="mt-5 max-w-[420px] text-[14px] leading-[1.9] text-cream/80">
              Contact Dietitian Esha Nasir for personalized online nutrition consultation.
            </p>

            <div className="mt-8 space-y-5">
              {details.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-4">
                  <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-cream">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-cream/60">{label}</p>
                    <p className="mt-1 text-[14px] leading-[1.7] text-cream">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-4 text-[14px] leading-[1.8] text-cream/80">
              <p>📱 WhatsApp: +923407553114</p>
              <p>📸 Instagram: @dt.eshanasir</p>
              <p>📸 Instagram: @dietitian_esha_nasir</p>
              <p>🌍 Online Consultations: Pakistan & International</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="h-full">
          <div className="h-full rounded-[28px] border border-sage-line bg-white p-7 shadow-[0_24px_48px_-30px_rgba(60,68,46,0.35)] md:p-8">
            <p className="text-[14px] uppercase tracking-[0.25em] text-mist">Consultation form</p>
            <h3 className="mt-4 font-serif text-[28px] text-ink">Book your consultation</h3>

            <form className="mt-7 grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-fog">
                Name
                <input className="rounded-2xl border border-sage-line bg-cream px-4 py-3 text-[13px] normal-case tracking-normal text-ink outline-none focus:border-forest" placeholder="Enter your name" />
              </label>
              <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-fog">
                Age
                <input className="rounded-2xl border border-sage-line bg-cream px-4 py-3 text-[13px] normal-case tracking-normal text-ink outline-none focus:border-forest" placeholder="Your age" />
              </label>
              <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-fog">
                Gender
                <input className="rounded-2xl border border-sage-line bg-cream px-4 py-3 text-[13px] normal-case tracking-normal text-ink outline-none focus:border-forest" placeholder="Male / Female / Other" />
              </label>
              <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-fog">
                City/Country
                <input className="rounded-2xl border border-sage-line bg-cream px-4 py-3 text-[13px] normal-case tracking-normal text-ink outline-none focus:border-forest" placeholder="City / country" />
              </label>
              <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-fog">
                Height
                <input className="rounded-2xl border border-sage-line bg-cream px-4 py-3 text-[13px] normal-case tracking-normal text-ink outline-none focus:border-forest" placeholder="e.g. 5'6" />
              </label>
              <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-fog">
                Current Weight
                <input className="rounded-2xl border border-sage-line bg-cream px-4 py-3 text-[13px] normal-case tracking-normal text-ink outline-none focus:border-forest" placeholder="e.g. 68 kg" />
              </label>
              <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-fog md:col-span-2">
                Health Concern / Goal
                <input className="rounded-2xl border border-sage-line bg-cream px-4 py-3 text-[13px] normal-case tracking-normal text-ink outline-none focus:border-forest" placeholder="Weight loss, diabetes, PCOS, etc." />
              </label>
              <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-fog md:col-span-2">
                Medical Conditions (if any)
                <input className="rounded-2xl border border-sage-line bg-cream px-4 py-3 text-[13px] normal-case tracking-normal text-ink outline-none focus:border-forest" placeholder="Add any conditions or medications" />
              </label>
              <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-fog md:col-span-2">
                Contact Number
                <input className="rounded-2xl border border-sage-line bg-cream px-4 py-3 text-[13px] normal-case tracking-normal text-ink outline-none focus:border-forest" placeholder="Your WhatsApp or phone number" />
              </label>

              <div className="md:col-span-2 mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11px] leading-[1.8] text-fog">
                  Our team will contact you regarding your consultation.
                </p>
                <a
                  href="https://wa.me/923407553114"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-[14px] text-[10px] uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-deep"
                >
                  Book Online Consultation
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
