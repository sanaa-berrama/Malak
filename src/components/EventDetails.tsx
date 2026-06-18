import { Calendar, Clock, MapPin } from "lucide-react";
import { wedding } from "@/lib/config";
import { Reveal } from "./Reveal";

function Detail({
  icon,
  top,
  main,
}: {
  icon: React.ReactNode;
  top: string;
  main: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 px-2.5 py-1.5 text-center">
      <span className="text-gold-deep">{icon}</span>
      <span className="font-serif leading-snug text-ink" style={{ fontSize: "clamp(14px,3vw,17px)" }}>
        <b className="mb-0.5 block font-semibold tracking-[0.04em] text-gold-deep" style={{ fontSize: "0.92em" }}>
          {top}
        </b>
        {main}
      </span>
    </div>
  );
}

const VSep = () => <div className="w-px bg-gradient-to-b from-transparent via-gold to-transparent max-[520px]:hidden" />;

export function EventDetails() {
  const { dateLine, timeLine, venue } = wedding.details;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    wedding.mapsQuery
  )}`;

  return (
    <Reveal className="mt-11 flex w-full flex-col items-center">
      <div className="mx-auto grid max-w-[480px] grid-cols-[1fr_1px_1fr_1px_1fr] items-stretch max-[520px]:grid-cols-1 max-[520px]:gap-3.5">
        <Detail icon={<Calendar size={26} strokeWidth={1.5} />} top={dateLine.top} main={dateLine.main} />
        <VSep />
        <Detail icon={<Clock size={26} strokeWidth={1.5} />} top={timeLine.top} main={timeLine.main} />
        <VSep />
        <Detail icon={<MapPin size={26} strokeWidth={1.5} />} top={venue.name} main={venue.area} />
      </div>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 inline-flex items-center gap-2.5 rounded-[40px] border border-gold bg-white/40 px-[26px] py-3 font-garamond text-[12px] uppercase tracking-[0.2em] text-gold-deep transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-br hover:from-gold hover:to-gold-deep hover:text-white hover:shadow-gold"
      >
        <MapPin size={17} strokeWidth={1.6} className="transition-transform duration-300 group-hover:scale-110" />
        Voir sur Google Maps
      </a>
    </Reveal>
  );
}
