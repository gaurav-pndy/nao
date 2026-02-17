"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaSearch,
  FaHandshake,
  FaLeaf,
  FaIndustry,
  FaNetworkWired,
} from "react-icons/fa";

const cards = [
  {
    title: "Brand Visibility",
    desc: "Massive reach across schools, digital, and media platforms.",
    icon: FaSearch,
    bg: "bg-[#453880]",
  },
  {
    title: "Direct Engagement",
    desc: "Connect with India’s emerging youth, educators, and parents.",
    icon: FaHandshake,
    bg: "bg-[#96408f]",
  },
  {
    title: "CSR Alignment",
    desc: "Deliver on STEM, youth empowerment, and SDG 4 (Quality Education).",
    icon: FaLeaf,
    bg: "bg-[#0069b2]",
  },
  {
    title: "Industry Leadership",
    desc: "Shape and support India’s aviation growth.",
    icon: FaIndustry,
    bg: "bg-[#63b24a]",
  },
  {
    title: "High-impact Networking",
    desc: "Connect with government, industry, academia, and global leaders.",
    icon: FaNetworkWired,
    bg: "bg-[#d48e20]",
  },
];

export default function WhyPartner() {
  const router = useRouter();

  return (
    <section className="py-12 relative">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-8 max-w-3xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold  text-orange mb-4">
            Why Partner with NAO
          </h2>
          <p className="mt-4 font-medium md:text-lg max-w-3xl mx-auto text-center ">
            Explore your partnership opportunities with NAO and take advantage
            of an aviation movement building India’s largest aviation talent
            pipeline.
          </p>
        </div>

        {/* Cards */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const [isFlipped, setIsFlipped] = useState(false);

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className=" perspective-1000"
                onMouseEnter={() => setIsFlipped(true)}
                onMouseLeave={() => setIsFlipped(false)}
              >
                <motion.div
                  className={`rounded-3xl h-56 lg:h-64 relative text-white flex flex-col justify-between  ${card.bg}`}
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                    stiffness: 80,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front */}
                  <div
                    className="flex absolute inset-0 p-6  flex-col justify-between h-full  gap-4"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <h3 className="text-3xl font-semibold">{card.title}</h3>
                    <div className="flex justify-end">
                      <card.icon className="text-7xl" />
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 p-6  flex flex-col justify-between h-full  gap-4"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <h3 className=" text-xl font-medium">{card.desc}</h3>
                    <div className="flex justify-end">
                      <card.icon className="text-7xl" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* CTA */}
          <Link
            href={"/partners"}
            className="md:absolute text-center  bottom-2 text-xl right-2 bg-yellow w-full md:w-fit hover:bg-[#e6c400] text-black font-medium px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
          >
            Partner with us
          </Link>
        </div>
      </div>
    </section>
  );
}
