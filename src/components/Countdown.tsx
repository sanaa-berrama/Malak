"use client";

import { useEffect, useRef } from "react";
import { wedding } from "@/lib/config";
import { useCountdown } from "@/hooks/useCountdown";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";

const pad = (n: number) => String(n).padStart(2, "0");

function Cell({ value, label, last }: { value: string; label: string; last?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const prev = useRef(value);

  useEffect(() => {
    if (prev.current !== value && ref.current) {
      const el = ref.current;
      el.classList.remove("cd-tick");
      void el.offsetWidth; // restart animation
      el.classList.add("cd-tick");
      prev.current = value;
    }
  }, [value]);

  return (
    <div className="relative px-1.5 py-1">
      {!last && (
        <span className="absolute right-0 top-[18%] bottom-[18%] w-px bg-gradient-to-b from-transparent via-gold to-transparent" />
      )}
      <span
        ref={ref}
        className="inline-block font-serif font-medium leading-none text-ink [font-variant-numeric:tabular-nums]"
        style={{ fontSize: "clamp(34px,9vw,52px)" }}
      >
        {value}
      </span>
      <div className="mt-2 font-garamond text-[clamp(9px,2.2vw,11px)] uppercase tracking-[0.22em] text-ink-soft">
        {label}
      </div>
    </div>
  );
}

export function Countdown() {
  const t = useCountdown(wedding.dateISO);
  return (
    <Reveal className="mt-11 flex w-full flex-col items-center">
      <h2 className="pl-[0.4em] text-center font-garamond uppercase tracking-[0.42em] text-gold-deep" style={{ fontSize: "clamp(12px,2.8vw,15px)" }}>
        Compte à rebours
      </h2>
      <Ornament className="mt-4" />
      <div className="mx-auto mt-4 grid w-full max-w-[420px] grid-cols-4 text-center">
        <Cell value={String(t.days)} label="Jours" />
        <Cell value={pad(t.hours)} label="Heures" />
        <Cell value={pad(t.minutes)} label="Minutes" />
        <Cell value={pad(t.seconds)} label="Secondes" last />
      </div>
      <p className="mt-9 text-center font-script text-[26px] text-gold-deep">{wedding.footer}</p>
    </Reveal>
  );
}
