"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useCallback, useRef, useState } from "react";

/**
 * Small floating control. When enabled, exposes a soft 4-note chime
 * through the returned `play` callback (used by the envelope open).
 */
export function useChime() {
  const ctxRef = useRef<AudioContext | null>(null);
  const [enabled, setEnabled] = useState(false);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      if (next && !ctxRef.current) {
        const Ctor =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        ctxRef.current = new Ctor();
      }
      return next;
    });
  }, []);

  const play = useCallback(() => {
    const ctx = ctxRef.current;
    if (!enabled || !ctx) return;
    const now = ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      osc.connect(gain);
      gain.connect(ctx.destination);
      const t = now + i * 0.12;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.12, t + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.4);
      osc.start(t);
      osc.stop(t + 1.5);
    });
  }, [enabled]);

  return { enabled, toggle, play };
}

export function SoundToggle({
  enabled,
  onToggle,
}: {
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label={enabled ? "Désactiver le son" : "Activer le son"}
      title={enabled ? "Son activé" : "Son désactivé"}
      className="fixed right-[18px] top-[18px] z-40 flex h-[42px] w-[42px] items-center justify-center rounded-full border border-gold/50 bg-white/60 backdrop-blur transition-transform hover:scale-110 hover:bg-white/85"
      style={{ color: enabled ? "#B08D57" : "#c9bda3" }}
    >
      {enabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  );
}
