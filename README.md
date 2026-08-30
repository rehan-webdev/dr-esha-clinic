# Dt. Momina — Dietitian & Health Coach

Single-page marketing site for **@dietitianmomina** — Nutritionist, Dietitian &
Health Coach, helping people achieve their health goals with personalized diet
plans and weight management.

Built with React 19 + TypeScript + Vite + Tailwind CSS v4, bundled to a single
HTML file by `vite-plugin-singlefile`.

---

## Getting started

```bash
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # production bundle → dist/index.html (+ copied image assets)
npm run preview  # serve the production build
```

---

## ⚠️ Before you go live — replace the placeholders

| What | Where | Notes |
| --- | --- | --- |
| **WhatsApp number** | `src/site.config.ts` → `whatsapp` | Currently `923000000000`. Use digits only with country code, e.g. `923001234567`. Every CTA uses it. |
| **Email** | `src/site.config.ts` → `email` | Currently `hello@dietitianmomina.com`. |
| **Testimonials** | `src/components/Testimonials.tsx` | Sample stories — swap in real client feedback. |
| **Photos** | `public/images/`, `public/testimonials/` | AI-generated stand-ins — drop in real photos with the same filenames. |

Everything else (name, handle, tagline, CTA wording, WhatsApp message text) also
lives in **`src/site.config.ts`** — edit that one file to re-brand the site.

### How the contact form works

There is no backend. The consultation form builds the visitor's answers into a
prefilled WhatsApp message and opens `wa.me/…` in a new tab, so enquiries land
directly in Dt. Momina's WhatsApp inbox.

---

## Link preview (share image)

Sharing the site link on WhatsApp, Facebook, Instagram DMs, LinkedIn, iMessage
or X renders a preview card built from `public/og-cover.jpg` (1200×630) and the
Open Graph / Twitter meta tags in `index.html`.

Two things to check before deploying:

1. **Site URL** — `og:image` must be an absolute URL, so `index.html` hardcodes
   `https://rehan-webdev.github.io/dr-momina/`. On a custom domain, find and
   replace that string (it appears in `canonical`, `og:url`, `og:image`,
   `og:image:secure_url` and `twitter:image`).
2. **The image** — swap `public/og-cover.jpg` for any 1200×630 image under
   ~300 KB; update `og:image:width` / `og:image:height` if the size changes.

Already-shared links are cached aggressively. Force a re-scrape with the
[Facebook sharing debugger](https://developers.facebook.com/tools/debug/).

---

## Color palette


| Role | Name | HEX | Tailwind token |
| --- | --- | --- | --- |
| Primary | Warm Sand | `#E5D6C1` | `sand` |
| Primary Dark | Deep Mocha | `#6B5140` | `mocha` |
| Secondary | Soft Taupe | `#B8A18C` | `taupe` |
| Accent | Muted Terracotta | `#A8785F` | `terracotta` |
| Background | Ivory Cream | `#FAF7F2` | `cream` |
| Surface | Light Beige | `#F1E8DD` | `surface` |
| Text | Espresso | `#2E241E` | `espresso` |
| Secondary Text | Warm Gray | `#766A60` | `warmgray` |
| Border | Beige Gray | `#D6C6B5` | `line` |
| White | Pure White | `#FFFFFF` | `white` |

Supporting tints: `blush` `#F7EFE6`, `sandsoft` `#EFE4D5`, `clay` `#8A5F49`,
`deep` `#4B3728` (mocha hover). Tokens are declared in `src/index.css` under
`@theme`.

Fonts: **Playfair Display** (headings), **Caveat** (handwritten accents),
**Inter** (body).

---

## Page structure

| Section | Component | Anchor |
| --- | --- | --- |
| Navbar + mobile menu | `Navbar.tsx` | — |
| Hero with portrait & CTAs | `Hero.tsx` | `#main` |
| About + specialties | `AboutProgram.tsx` | `#about` |
| 3-step process | `HowItWorks.tsx` | `#how-it-works` |
| Service plans | `Services.tsx` | `#services` |
| Client testimonials | `Testimonials.tsx` | `#testimonials` |
| Contact info + form | `Contact.tsx` | `#contact` |
| Footer CTA | `Footer.tsx` | — |

Shared primitives (`Reveal`, `ScriptLabel`, `SectionTitle`, `Polaroid`,
`StarDeco`) live in `src/components/ui.tsx`.

---

## Deployment

`npm run build` emits `dist/index.html` (single file, all JS/CSS inlined) plus
the `dist/images` and `dist/testimonials` folders. Deploy the whole `dist/`
directory — it works on any static host or GitHub Pages.
