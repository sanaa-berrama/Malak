/**
 * Single source of truth for the invitation content.
 * Change everything about the wedding here — no need to touch components.
 */

export interface WeddingConfig {
  initials: { left: string; right: string };
  verse: { arabic: string; sourceArabic: string; sourceFrench: string };
  intro: string;
  /** ISO string with timezone offset — drives both copy and the live countdown */
  dateISO: string;
  calendar: {
    monthLabel: string;
    /** 6 days leading up to, then the wedding day is highlighted with the heart */
    leadingDays: { n: number; muted: boolean }[];
    highlightDay: number;
  };
  details: {
    dateLine: { top: string; main: string };
    timeLine: { top: string; main: string };
    venue: { name: string; area: string };
  };
  mapsQuery: string;
  footer: string;
}

export const wedding: WeddingConfig = {
  initials: { left: "Y", right: "M" },
  verse: {
    arabic: "وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    sourceArabic: "سورة الروم، آية ٢١",
    sourceFrench: "Sourate Ar-Rûm · verset 21",
  },
  intro:
    "Avec la bénédiction d'Allah, nous avons le plaisir de vous convier à la célébration de notre mariage.",
  dateISO: "2026-07-04T17:00:00+01:00", // Alger (UTC+1)
  calendar: {
    monthLabel: "July 2026",
    leadingDays: [
      { n: 28, muted: true },
      { n: 29, muted: true },
      { n: 30, muted: true },
      { n: 1, muted: false },
      { n: 2, muted: false },
      { n: 3, muted: false },
    ],
    highlightDay: 4,
  },
  details: {
    dateLine: { top: "Samedi", main: "4 juillet 2026" },
    timeLine: { top: "À partir de", main: "17h00" },
    venue: { name: "Villa La Maurèsque", area: "Béni Messous, Alger" },
  },
  mapsQuery: "Villa La Mauresque Beni Messous Alger",
  footer: "Avec amour, Y & M",
};

export const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
