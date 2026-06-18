"use client";

import { motion } from "framer-motion";
import { OrientalArch } from "./OrientalArch";
import { Floral } from "./Floral";
import { ArabicVerse, CoupleInitials, InvitationText } from "./Content";
import { SaveTheDate } from "./SaveTheDate";
import { EventDetails } from "./EventDetails";
import { Countdown } from "./Countdown";

export function Invitation({ visible }: { visible: boolean }) {
  return (
    <motion.main
      className="relative z-10 flex min-h-screen items-center justify-center px-[18px] pb-16 pt-12"
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
      aria-label="Invitation de mariage"
    >
      <div className="relative w-[min(94vw,560px)]">
        {/* floral corners */}
        <Floral kind="sprig" position="left-[-46px] top-[30%] w-[160px]" duration={9} seed={11} />
        <Floral kind="sprig" position="right-[-40px] top-[24%] w-[150px]" flip positive={false} duration={12} seed={23} />
        <Floral kind="rose" position="left-[-40px] bottom-[4%] w-[180px] max-[680px]:w-[120px] max-[680px]:left-[-26px]" flip positive={false} duration={11} />
        <Floral kind="rose" position="right-[-44px] bottom-[2%] w-[190px] max-[680px]:w-[128px] max-[680px]:right-[-26px]" duration={10} />

        <article className="arch-card relative z-[2] overflow-hidden px-9 pb-14 pt-[84px] shadow-card">
          <OrientalArch />
          <ArabicVerse />
          <CoupleInitials />
          <InvitationText />
          <SaveTheDate />
          <EventDetails />
          <Countdown />
        </article>
      </div>
    </motion.main>
  );
}
