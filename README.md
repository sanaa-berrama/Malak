# Y &amp; M — Luxury Wedding Invitation

A premium digital wedding invitation built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

Guests first see a full-screen ivory scene with a wax-sealed envelope. Pressing **« Ouvrir l'invitation »** breaks the seal, opens the envelope, and reveals the invitation card with the Qur'anic verse, the couple's initials, a *Save the Date* calendar, the event details, and a live countdown.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

## Everything you'd change lives in one file

`src/lib/config.ts` is the single source of truth — names/initials, the verse, the intro text, the date (which drives both the copy **and** the live countdown), the calendar, the venue, and the Google Maps query. No component edits needed for a different couple.

```ts
export const wedding: WeddingConfig = {
  initials: { left: "Y", right: "M" },
  dateISO: "2026-07-04T17:00:00+01:00", // also powers the countdown
  details: { venue: { name: "Villa La Maurèsque", area: "Béni Messous, Alger" } },
  // ...
};
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # fonts (next/font) + metadata
│   ├── globals.css       # palette vars, ambient bg, envelope mechanics
│   └── page.tsx          # orchestrates envelope → invitation flow
├── components/
│   ├── AmbientBackground.tsx  # light rays, leaf shadows, floating motes
│   ├── EnvelopeIntro.tsx      # the opening scene (wax seal + envelope)
│   ├── Invitation.tsx         # assembles the card
│   ├── OrientalArch.tsx       # thin gold ogee arch (SVG)
│   ├── Content.tsx            # verse, initials, intro text
│   ├── SaveTheDate.tsx        # calendar + dotted heart on day 4
│   ├── EventDetails.tsx       # date / time / venue + Maps button
│   ├── Countdown.tsx          # live timer with per-digit tick
│   ├── Floral.tsx             # baby's-breath + rose SVGs (breeze motion)
│   ├── Reveal.tsx             # fade-up on scroll
│   ├── Ornament.tsx           # gold hairline divider
│   └── SoundToggle.tsx        # optional Web Audio chime
├── hooks/
│   └── useCountdown.ts
└── lib/
    └── config.ts
```

## Design tokens

| Token | Value |
|-------|-------|
| Ivory background | `#F8F5F0` |
| Champagne gold | `#C8A97E` (deep `#B08D57`) |
| Ink (text) | `#2D2D2D` |
| Display | Cormorant Garamond |
| Arabic | Aref Ruqaa / Amiri |
| Script | Pinyon Script |

## Notes

- **Fonts** load via `next/font/google` (self-hosted at build, no layout shift).
- **Sound** is off by default and synthesized with the Web Audio API — no audio files to ship. Toggle it top-right before opening to hear a soft chime.
- **Accessibility**: keyboard-focusable controls, `prefers-reduced-motion` respected, semantic landmarks.
- **Florals** are hand-drawn SVG, so the project is fully self-contained (no image licensing).
- A standalone `preview.html` is included at the project root: open it directly in any browser to see the full experience without installing anything.
"# Malak" 
