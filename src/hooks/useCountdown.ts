"use client";

import { useEffect, useState } from "react";

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
}

const ZERO: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0, done: false };

const calc = (target: number): TimeLeft => {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
    done: diff === 0,
  };
};

/**
 * Live countdown to an ISO target date.
 *
 * Starts from a fixed ZERO state so the server-rendered HTML and the first
 * client render match (no hydration mismatch), then computes the real value
 * on mount and ticks every second. The invitation is hidden until the
 * envelope is opened, so the brief zero state is never visible.
 */
export function useCountdown(targetISO: string): TimeLeft {
  const target = new Date(targetISO).getTime();
  const [time, setTime] = useState<TimeLeft>(ZERO);

  useEffect(() => {
    setTime(calc(target));
    const id = setInterval(() => setTime(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return time;
}
