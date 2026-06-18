"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { wedding } from "@/lib/config";

export function EnvelopeIntro({
  onOpened,
  onClickOpen,
}: {
  /** fires after the full open animation, to reveal the invitation */
  onOpened: () => void;
  /** fires immediately on click (e.g. to play the chime) */
  onClickOpen?: () => void;
}) {
  const [opening, setOpening] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    onClickOpen?.();
    setOpening(true);
    window.setTimeout(() => setDismissed(true), 1600);
    window.setTimeout(() => onOpened(), 2100);
  };

  const { left, right } = wedding.initials;

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.section
          className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-9 p-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
          aria-label="Ouverture de l'invitation"
        >
          {/* eyebrow */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            <div className="font-garamond text-[12px] uppercase tracking-[0.45em] text-gold-deep">
              Vous êtes cordialement
            </div>
            <div className="mt-2.5 font-serif font-medium italic text-ink" style={{ fontSize: "clamp(26px,5vw,40px)" }}>
              Vous êtes invité(e)
            </div>
            <div className="mt-1.5 font-serif font-semibold tracking-[0.12em] text-gold-deep" style={{ fontSize: "clamp(20px,4vw,26px)" }}>
              {left} &amp; {right}
            </div>
          </motion.div>

          {/* envelope */}
          <motion.div
            style={{ perspective: 1400 }}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            <div
              className={`envelope relative aspect-[1.5/1] w-[min(86vw,380px)] drop-shadow-[0_30px_45px_rgba(120,98,64,.28)] ${opening ? "opening" : ""}`}
            >
              <div className="absolute inset-0 rounded-lg border border-gold/50 bg-gradient-to-br from-[#F6EFE2] to-[#EFE5D2] shadow-[inset_0_0_40px_rgba(176,141,87,.12)]" />

              {/* letter that rises */}
              <div className="env-letter absolute inset-x-[6%] top-[5%] z-[2] flex h-[150%] flex-col items-center gap-2.5 rounded-md border border-gold/40 bg-gradient-to-b from-white to-ivory-cream pt-[14%] shadow-[0_8px_24px_rgba(120,98,64,.16)]">
                <div className="font-serif text-[38px] font-semibold tracking-[0.08em] text-gold-deep">
                  {left} <span className="italic text-gold">&amp;</span> {right}
                </div>
                <div className="h-px w-[54px] bg-gold opacity-60" />
                <div className="font-arabic-display text-[18px] text-ink-soft">وَجَعَلَ بَيْنَكُم مَّوَدَّةً</div>
                <div className="font-script text-[24px] text-gold-deep">Save the Date</div>
              </div>

              {/* front flaps */}
              <div className="flap-left absolute inset-0 z-[3] rounded-lg bg-gradient-to-tr from-[#EBDFC8] to-[#F2E8D6]" />
              <div className="flap-right absolute inset-0 z-[3] rounded-lg bg-gradient-to-bl from-[#EBDFC8] to-[#F2E8D6]" />
              <div className="flap-bottom absolute inset-0 z-[3] rounded-lg bg-gradient-to-t from-[#EADDC4] to-[#F4EBDB]" />

              {/* top flap */}
              <div className="flap-top absolute inset-x-0 top-0 z-[6] h-[52%] border-b border-gold/30 bg-gradient-to-b from-[#F6EFE2] to-[#ECE0CB]" />

              {/* wax seal */}
              <div className="seal absolute left-1/2 top-[40%] z-[8] h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2">
                <div className="seal-half left absolute inset-0 rounded-full shadow-seal" style={{ background: "radial-gradient(circle at 35% 30%,#caa776,#9c6f3b 60%,#7e5526)" }} />
                <div className="seal-half right absolute inset-0 rounded-full shadow-seal" style={{ background: "radial-gradient(circle at 35% 30%,#caa776,#9c6f3b 60%,#7e5526)" }} />
                <div className="seal-ring absolute inset-[7px] rounded-full border-[1.5px] border-dashed border-[#f7ecd8]/55" />
                <div className="seal-emblem absolute inset-0 z-[1] flex items-center justify-center font-serif text-[24px] font-semibold tracking-[1px] text-[#f7ecd8] [text-shadow:0_1px_2px_rgba(70,45,15,.6)]">
                  {left}&amp;{right}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.button
            onClick={handleOpen}
            className="group relative overflow-hidden rounded-[40px] bg-gradient-to-br from-gold to-gold-deep px-[34px] py-4 font-garamond text-[13px] uppercase tracking-[0.32em] text-ivory-cream shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:tracking-[0.38em] hover:shadow-[0_18px_40px_rgba(176,141,87,.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: opening ? 0 : 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            disabled={opening}
          >
            <span className="absolute left-[-130%] top-0 h-full w-[60%] -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/55 to-transparent transition-all duration-700 group-hover:left-[160%]" />
            Ouvrir l&apos;invitation
          </motion.button>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
