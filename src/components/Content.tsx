import { wedding } from "@/lib/config";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";

export function ArabicVerse() {
  return (
    <Reveal className="flex flex-col items-center">
      <p
        dir="rtl"
        className="text-center font-arabic-display font-bold leading-[1.7] text-ink"
        style={{ fontSize: "clamp(30px,7.2vw,44px)" }}
      >
        <span className="text-gold">﴿</span> {wedding.verse.arabic}{" "}
        <span className="text-gold">﴾</span>
      </p>
      <Ornament className="mt-4" />
      <p dir="rtl" className="mt-4 text-center font-arabic text-ink-soft" style={{ fontSize: "clamp(13px,2.6vw,16px)" }}>
        {wedding.verse.sourceArabic}
      </p>
      <p className="mt-1.5 text-center font-garamond text-[10.5px] uppercase tracking-[0.32em] text-gold-deep">
        {wedding.verse.sourceFrench}
      </p>
    </Reveal>
  );
}

export function CoupleInitials() {
  const { left, right } = wedding.initials;
  return (
    <Reveal className="mt-11 flex flex-col items-center">
      <div
        className="gold-text flex items-center justify-center gap-[0.14em] font-serif font-semibold leading-none"
        style={{ fontSize: "clamp(72px,18vw,118px)" }}
      >
        {left}
        <span
          className="self-center font-normal italic"
          style={{ fontSize: "0.42em", WebkitTextFillColor: "var(--gold)" }}
        >
          &amp;
        </span>
        {right}
      </div>
    </Reveal>
  );
}

export function InvitationText() {
  // split on "Allah" to gild it, matching the card
  const [before, after] = wedding.intro.split("Allah");
  return (
    <Reveal className="mt-8 flex flex-col items-center">
      <p
        className="mx-auto max-w-[30ch] text-center font-serif leading-[1.85] text-ink"
        style={{ fontSize: "clamp(18px,3.6vw,23px)" }}
      >
        {before}
        <span className="font-medium text-gold-deep">Allah</span>
        {after}
      </p>
    </Reveal>
  );
}
