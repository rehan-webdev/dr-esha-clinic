/**
 * Single source of truth for everything client-specific.
 * Edit these values to re-brand the site — no need to touch the components.
 */

export const site = {
  /** Brand name used in the wordmark, headings and title tags. */
  name: "Dt. Momina",
  /** Longer form used in the footer and metadata. */
  fullName: "Dietitian Momina",
  /** Short credential line under the wordmark. */
  tagline: "Dietitian & Health Coach",
  /** Subtle uppercase line under the wordmark. */
  kicker: "Nutritionist · Weight Management",

  /**
   * WhatsApp number in international format, digits only (no +, no spaces).
   * ⚠️  PLACEHOLDER — replace with Dt. Momina's real number before going live.
   */
  whatsapp: "923000000000",

  /** Instagram handle (without the @). */
  instagram: "dietitianmomina",

  /** Contact email shown in the footer. ⚠️  PLACEHOLDER — replace if needed. */
  email: "hello@dietitianmomina.com",

  /** Default prefilled text for every WhatsApp CTA. */
  waMessage:
    "Hi Dt. Momina! I'd like to start my health journey and book a consultation 🌿",

  /** SEO / social metadata. */
  seo: {
    title: "Dt. Momina · Dietitian & Health Coach — Weight Management Specialist",
    description:
      "Dt. Momina is a Nutritionist, Dietitian & Health Coach helping you achieve your health goals with personalized diet plans, weight management and sustainable everyday nutrition.",
  },
};

/** Build a wa.me link with a prefilled message. */
export function waLink(message?: string) {
  const text = encodeURIComponent(message ?? site.waMessage);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export const instagramUrl = `https://www.instagram.com/${site.instagram}/`;
