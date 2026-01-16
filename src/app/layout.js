import Header from "@/components/Header";
import "./globals.css";

import { Inter_Tight } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata = {
  title: {
    default: "National Aviation Olympiad 2026 | NAO India",
    template: "%s | National Aviation Olympiad",
  },
  description:
    "National Aviation Olympiad 2026 – Igniting young minds, elevating India's skies. Open for students of Classes 8th–12th. August 2026 to December 2026.",
  keywords: [
    "National Aviation Olympiad",
    "NAO India",
    "Aviation Olympiad",
    "Student Aviation Competition",
    "STEM Olympiad India",
    "Aviation Education",
    "Classes 8 to 12",
  ],
  authors: [{ name: "National Aviation Olympiad" }],
  creator: "National Aviation Olympiad",
  publisher: "NAO India",
  metadataBase: new URL("https://nationalaviationolympiad.com/"),
  openGraph: {
    title: "National Aviation Olympiad 2026",
    description:
      "Igniting young minds, elevating India's skies. Aviation Olympiad for Classes 8th–12th.",
    url: "https://nationalaviationolympiad.com/",
    siteName: "National Aviation Olympiad",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "National Aviation Olympiad 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-white ${inter.variable} text-[#2d333a]`}>
        <Header />
        <main className="mt-8 md:mt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
