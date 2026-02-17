"use client";

import "swiper/css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const highlights = [
  {
    quote:
      "The NAO is envisioned as a nationwide initiative to inspire and prepare India’s youth for emerging opportunities in aviation, space technology and defence innovation. At a time when India is advancing as a global leader in aviation and aerospace, such early engagement is both timely and essential",
    name: "Shri. C. P. Radhakrishnan\n Hon’ble Vice President of India",
    image: "/CP_Radhakrishnan.jpeg",
  },
  {
    quote:
      "I extend my heartfelt congratulations to the organizers for convening this landmark event at a time when India’s aviation sector is posed for unprecedented expansion, reflecting the nation’s rising aspirations, economic vitality, and global connectivity.",
    name: " Dr. V. K. Saraswat\n Member, NITI Aayog",
    image: "/VK_Saraswat.jpeg",
  },
];

export default function NAOHighlights() {
  return (
    <section className="mt-32 py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange">
            NAO Highlights
          </h2>
          <p className="mt-3 md:text-lg font-medium text-gray-600">
            Appreciations & Citations received by National Aviation Olympiad
          </p>
        </motion.div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          slidesPerView={1}
          loop
          className="rounded-2xl nao-highlights-swiper"
        >
          {highlights.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative bg-blue text-white rounded-2xl p-10 md:p-14 min-h-80 flex flex-col justify-between gap-10"
              >
                {" "}
                {/* Quote */}
                <p className="text-center text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                  “{item.quote}”
                </p>
                {/* Footer */}
                <div className=" flex items-center justify-between">
                  {/* Name */}
                  <span className=" md:text-xl font-medium text-yellow max-w-[70%] whitespace-pre-line">
                    {item.name}
                  </span>

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 md:w-32 md:h-32 object-top rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
