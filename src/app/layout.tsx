import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  EB_Garamond,
  Amiri,
  Aref_Ruqaa,
  Pinyon_Script,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-garamond",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const aref = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-aref",
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Y & M — Invitation de mariage",
  description:
    "Avec la bénédiction d'Allah, nous avons le plaisir de vous convier à la célébration de notre mariage. Samedi 4 juillet 2026 — Villa La Maurèsque, Béni Messous, Alger.",
  openGraph: {
    title: "Y & M — Invitation de mariage",
    description: "Samedi 4 juillet 2026 — Villa La Maurèsque, Béni Messous, Alger.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F5F0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${cormorant.variable} ${garamond.variable} ${amiri.variable} ${aref.variable} ${pinyon.variable} font-serif locked`}
      >
        {children}
      </body>
    </html>
  );
}
