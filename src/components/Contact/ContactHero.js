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
      <div className="max-w-6xl  min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] xl:min-h-[calc(100vh-3rem)] h-full mx-auto px-4 flex items-end justify-center pb-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-yellow leading-tight">
            Get in Touch
          </h1>
          <p className="mt-2 text-white text-lg md:text-xl xl:text-2xl font-semibold">
            Have questions about NAO? We’re here to help.
          </p>
        </motion.div>
      </div>

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
