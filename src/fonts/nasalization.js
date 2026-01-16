// src/fonts/nasalization.ts
import localFont from "next/font/local";

export const nasalization = localFont({
  src: [
    {
      path: "../../public/fonts/NasalizationRg.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nasalization",
  display: "swap",
});
