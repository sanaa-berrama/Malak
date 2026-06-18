"use client";

import { useMemo } from "react";
import { seededRandom } from "@/lib/rng";

export function AmbientBackground() {
  const motes = useMemo(() => {
    const rand = seededRandom(20260704);
    return Array.from({ length: 14 }, () => {
      const size = 2 + rand() * 5;
      return {
        size,
        left: rand() * 100,
        duration: 16 + rand() * 16,
        delay: rand() * 16,
      };
    });
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="wash absolute inset-[-10%]" />
      <div className="rays absolute left-1/2 top-[-30%] h-[160vmax] w-[160vmax] -translate-x-1/2 animate-rayspin opacity-70" />
      <div className="leaf-shadow absolute left-[-90px] top-[6%] h-[520px] w-[340px] animate-sway1" />
      <div className="leaf-shadow absolute right-[-80px] top-[30%] h-[460px] w-[300px] animate-sway2" />
      <div className="leaf-shadow absolute bottom-[-60px] left-[8%] h-[380px] w-[260px] animate-sway1" />
      {motes.map((m, i) => (
        <span
          key={i}
          className="mote absolute bottom-[-20px] animate-floatUp"
          style={{
            width: m.size,
            height: m.size,
            left: `${m.left}vw`,
            animationDuration: `${m.duration}s`,
            animationDelay: `${m.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
