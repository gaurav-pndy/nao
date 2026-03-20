"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AviationCareerPathways() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold text-orange mb-8"
        >
          150+ Aviation Career Pathways
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="leading-relaxed text-center mb-6"
        >
          NAO introduces students to the full spectrum of aviation careers — from
          cockpit to ground operations, from aerospace engineering to drone
          technology, from air traffic control to sustainable aviation fuel
          research. Through our partner platform{' '}
          <Link
            href="https://www.careerinaviation.com"
            target="_blank"
            className="text-blue underline"
          >
            www.careerinaviation.com
          </Link>, students can explore detailed career maps across every domain
          of aviation.
        </motion.p>
      </div>
    </section>
  );
}
