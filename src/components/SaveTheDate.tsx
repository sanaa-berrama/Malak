import { DAYS_OF_WEEK, wedding } from "@/lib/config";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";

function DottedHeart({ day }: { day: number }) {
  return (
    <span className="relative mx-auto inline-flex h-[54px] w-[54px] items-center justify-center">
      <svg viewBox="0 0 60 56" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
        <path
          d="M30 51 C 6 34 3 17 14 9 C 22 3 30 9 30 16 C 30 9 38 3 46 9 C 57 17 54 34 30 51 Z"
          fill="none"
          stroke="#C8A97E"
          strokeWidth={1.6}
          strokeDasharray="2 4.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="relative z-[2]">{day}</span>
    </span>
  );
}

export function SaveTheDate() {
  const { monthLabel, leadingDays, highlightDay } = wedding.calendar;
  return (
    <Reveal className="mt-11 flex flex-col items-center">
      <h2 className="pl-[0.5em] text-center font-garamond font-medium uppercase tracking-[0.5em] text-gold-deep" style={{ fontSize: "clamp(15px,3.4vw,19px)" }}>
        {monthLabel}
      </h2>
      <Ornament className="mt-4" />

      <div className="mx-auto mt-4 grid w-full max-w-[430px] grid-cols-7 gap-x-0.5 gap-y-1.5 text-center">
        {DAYS_OF_WEEK.map((d) => (
          <div key={d} className="pb-1.5 font-serif text-[clamp(13px,2.8vw,16px)] font-semibold italic text-ink-soft">
            {d}
          </div>
        ))}
        {leadingDays.map((d) => (
          <div
            key={d.n + (d.muted ? "-m" : "")}
            className={`py-2 font-serif text-[clamp(19px,4.4vw,26px)] font-medium ${d.muted ? "text-[#bdb3a2]" : "text-ink"}`}
          >
            {d.n}
          </div>
        ))}
        <div className="py-2 font-serif text-[clamp(19px,4.4vw,26px)] font-semibold text-gold-deep">
          <DottedHeart day={highlightDay} />
        </div>
      </div>

      <span className="mx-auto mt-0.5 h-[42px] border-l-2 border-dotted border-gold opacity-80" />
      <p
        className="mt-1 text-center font-script leading-none text-gold-deep"
        style={{ fontSize: "clamp(34px,8vw,52px)", filter: "drop-shadow(0 2px 6px rgba(176,141,87,.25))" }}
      >
        Save the Date
      </p>
    </Reveal>
  );
}
