import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Globe,
  Mail,
  MessageCircle,
  UserRound,
} from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Reveal, ScriptLabel, SectionTitle } from "./ui";
import { site, waLink } from "../site.config";

const details = [
  {
    label: "Dietitian",
    value: site.name,
    icon: UserRound,
  },
  {
    label: "Profession",
    value: "Nutritionist · Dietitian & Health Coach",
    icon: MessageCircle,
  },
  {
    label: "Specialization",
    value: "Weight Management & Personalized Diet Planning",
    icon: Mail,
  },
];

const emptyForm = {
  name: "",
  age: "",
  gender: "",
  city: "",
  height: "",
  weight: "",
  goal: "",
  conditions: "",
  contact: "",
};

export default function Contact() {
  const [form, setForm] = useState(emptyForm);

  function update(key: keyof typeof emptyForm, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  /**
   * There is no backend: build the answers into a prefilled WhatsApp message
   * and hand the visitor straight to Dt. Momina's inbox.
   */
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const lines = [
      `Hi ${site.name}! I'd like to start my health journey 🌿`,
      "",
      "Here are my details:",
      `• Name: ${form.name || "—"}`,
      `• Age: ${form.age || "—"}`,
      `• Gender: ${form.gender || "—"}`,
      `• City / Country: ${form.city || "—"}`,
      `• Height: ${form.height || "—"}`,
      `• Current weight: ${form.weight || "—"}`,
      `• Goal / health concern: ${form.goal || "—"}`,
      `• Medical conditions: ${form.conditions || "None"}`,
      `• Contact: ${form.contact || "—"}`,
    ];

    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "rounded-2xl border border-line bg-cream px-4 py-3 text-[13px] normal-case tracking-normal text-espresso outline-none transition-colors placeholder:text-taupe focus:border-terracotta";

  return (
    <section id="contact" className="px-6 pb-28 pt-8 md:pb-32">
      <ScriptLabel>Contact</ScriptLabel>
      <SectionTitle>
        Let&rsquo;s start your <em className="italic">health journey</em>
      </SectionTitle>

      <div className="mx-auto mt-12 grid max-w-[1100px] gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Info card */}
        <Reveal className="h-full">
          <div className="h-full rounded-[28px] bg-mocha p-8 text-cream shadow-[0_30px_60px_-30px_rgba(75,55,40,0.7)] md:p-10">
            <p className="text-[14px] uppercase tracking-[0.25em] text-cream/70">
              Get in touch
            </p>
            <h3 className="mt-4 font-serif text-[32px] leading-tight md:text-[38px]">
              Have a question or ready to begin?
            </h3>
            <p className="mt-5 max-w-[420px] text-[14px] leading-[1.9] text-cream/80">
              Message {site.name} for a personalized online nutrition
              consultation — tell me your goal and we&rsquo;ll take it from
              there.
            </p>

            <div className="mt-8 space-y-5">
              {details.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-4"
                >
                  <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-cream">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-cream/60">
                      {label}
                    </p>
                    <p className="mt-1 text-[14px] leading-[1.7] text-cream">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-[10px] uppercase tracking-[0.22em] text-mocha transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                <FaWhatsapp size={14} />
                WhatsApp
              </a>
              <a
                href={`https://www.instagram.com/${site.instagram}/`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-[10px] uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-cream"
              >
                <FaInstagram size={14} />
                Instagram DM
              </a>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-4">
              <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-cream">
                <Globe size={16} />
              </span>
              <p className="text-[13px] text-cream">
                Online consultations available worldwide
              </p>
            </div>
          </div>
        </Reveal>

        {/* Consultation form */}
        <Reveal delay={0.08} className="h-full">
          <div className="h-full rounded-[28px] border border-line bg-white p-7 shadow-[0_24px_48px_-30px_rgba(46,36,30,0.35)] md:p-8">
            <p className="text-[14px] uppercase tracking-[0.25em] text-taupe">
              Consultation form
            </p>
            <h3 className="mt-4 font-serif text-[28px] text-espresso">
              Book your consultation
            </h3>

            <form onSubmit={handleSubmit} className="mt-7 grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-warmgray">
                Name
                <input
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={inputClass}
                  placeholder="Enter your name"
                />
              </label>
              <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-warmgray">
                Age
                <input
                  value={form.age}
                  onChange={(e) => update("age", e.target.value)}
                  className={inputClass}
                  placeholder="Your age"
                />
              </label>
              <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-warmgray">
                Gender
                <input
                  value={form.gender}
                  onChange={(e) => update("gender", e.target.value)}
                  className={inputClass}
                  placeholder="Male / Female / Other"
                />
              </label>
              <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-warmgray">
                City/Country
                <input
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  className={inputClass}
                  placeholder="City / country"
                />
              </label>
              <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-warmgray">
                Height
                <input
                  value={form.height}
                  onChange={(e) => update("height", e.target.value)}
                  className={inputClass}
                  placeholder="e.g. 5'6&quot;"
                />
              </label>
              <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-warmgray">
                Current Weight
                <input
                  value={form.weight}
                  onChange={(e) => update("weight", e.target.value)}
                  className={inputClass}
                  placeholder="e.g. 68 kg"
                />
              </label>
              <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-warmgray md:col-span-2">
                Health Goal / Concern
                <input
                  value={form.goal}
                  onChange={(e) => update("goal", e.target.value)}
                  className={inputClass}
                  placeholder="Weight loss, weight gain, PCOS, diabetes, etc."
                />
              </label>
              <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-warmgray md:col-span-2">
                Medical Conditions (if any)
                <input
                  value={form.conditions}
                  onChange={(e) => update("conditions", e.target.value)}
                  className={inputClass}
                  placeholder="Add any conditions or medications"
                />
              </label>
              <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-warmgray md:col-span-2">
                Contact Number
                <input
                  required
                  value={form.contact}
                  onChange={(e) => update("contact", e.target.value)}
                  className={inputClass}
                  placeholder="Your WhatsApp or phone number"
                />
              </label>

              <div className="mt-2 flex flex-col gap-4 md:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11px] leading-[1.8] text-warmgray">
                  Your details open straight in WhatsApp — I&rsquo;ll reply with
                  your next steps.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-mocha px-7 py-[14px] text-[10px] uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-deep"
                >
                  Book Online Consultation
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
