"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { nasalization } from "@/fonts/nasalization";

export default function ContactHero() {
  return (
    <section
      className="relative bg-cover bg-center "
      style={{
        backgroundImage: "url('/contact/Contact_Hero.png')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl  min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] xl:min-h-[calc(100vh-3rem)] h-full mx-auto px-4 flex  items-end   relative"></div>

      {/* Bottom Gradient Strip */}
      <div
        className="absolute bottom-0 left-0 w-full h-2"
        style={{
          backgroundImage: "url('/hero/Hero_Strip.svg')",
          backgroundSize: "cover",
        }}
      />
    </section>
  );
}
