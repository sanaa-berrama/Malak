"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { seededRandom } from "@/lib/rng";

const breeze = (positive: boolean) => ({
  rotate: positive ? [-2, 2.5, -2] : [2, -2.5, 2],
  y: positive ? [0, -8, 0] : [0, 8, 0],
});

/** Baby's-breath sprig — tiny blossoms on thin stems, drawn procedurally. */
export function Sprig({ flip = false, seed = 7 }: { flip?: boolean; seed?: number }) {
  const blossoms = useMemo(() => {
    const rand = seededRandom(seed * 2654435761);
    return Array.from({ length: 34 }, () => ({
      x: 20 + rand() * 120,
      y: 20 + rand() * 150,
      r: 2 + rand() * 3.4,
    }));
  }, [seed]);
  return (
    <svg
      viewBox="0 0 160 220"
      fill="none"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden
    >
      <g stroke="#cdbf9f" strokeWidth={1} opacity={0.9}>
        <path d="M80 220 C70 160 60 120 40 70" />
        <path d="M80 220 C90 160 100 120 120 70" />
        <path d="M80 210 C78 150 75 110 70 60" />
      </g>
      {blossoms.map((b, i) => (
        <circle
          key={i}
          cx={b.x}
          cy={b.y}
          r={b.r}
          fill="#fbf6ec"
          stroke="#d8c3a2"
          strokeWidth={0.7}
        />
      ))}
    </svg>
  );
}

/** Soft ivory rose with leaves. */
export function Rose({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 230"
      fill="none"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden
    >
      <g stroke="#cdbf9f" strokeWidth={1} fill="none" opacity={0.8}>
        <path d="M150 230 C140 180 130 150 120 120" />
        <path d="M120 150 C100 145 88 135 84 118" />
        <path d="M130 175 C150 172 162 162 166 146" />
      </g>
      <ellipse cx={78} cy={120} rx={14} ry={7} fill="#f3ead8" stroke="#d8c3a2" strokeWidth={0.6} transform="rotate(-30 78 120)" />
      <ellipse cx={168} cy={150} rx={13} ry={6} fill="#f3ead8" stroke="#d8c3a2" strokeWidth={0.6} transform="rotate(28 168 150)" />
      <g transform="translate(118 92)">
        <circle r={42} fill="#fbf7ef" stroke="#e7d9bf" strokeWidth={1} />
        <path d="M0 -30 C 20 -30 30 -12 28 4 C 26 22 10 32 -4 30 C -22 28 -32 12 -28 -6 C -24 -22 -12 -30 0 -30 Z" fill="#fdfaf3" stroke="#e7d9bf" strokeWidth={1} />
        <path d="M-2 -16 C 12 -18 20 -6 18 6 C 16 18 4 22 -6 18 C -16 14 -18 0 -14 -8 C -11 -14 -7 -15 -2 -16 Z" fill="#fbf6ec" stroke="#e7d9bf" strokeWidth={0.8} />
        <path d="M-4 -7 C 5 -9 11 -2 9 6 C 7 13 -1 14 -7 10 C -12 6 -11 -3 -4 -7 Z" fill="#f6efe1" stroke="#e7d9bf" strokeWidth={0.7} />
        <circle cx={0} cy={1} r={3.6} fill="#efe4cf" />
      </g>
    </svg>
  );
}

type FloralProps = {
  kind: "sprig" | "rose";
  position: string; // tailwind position classes
  flip?: boolean;
  positive?: boolean;
  duration?: number;
  seed?: number;
  className?: string;
};

export function Floral({
  kind,
  position,
  flip = false,
  positive = true,
  duration = 10,
  seed = 7,
  className = "",
}: FloralProps) {
  return (
    <motion.div
      className={`pointer-events-none absolute z-[3] ${position} ${className}`}
      animate={breeze(positive)}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      {kind === "sprig" ? <Sprig flip={flip} seed={seed} /> : <Rose flip={flip} />}
    </motion.div>
  );
}
