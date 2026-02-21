"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const committeeMembers = [
  {
    name: "Dr. Arun Sharma",
    designation: "Former Director",
    organization: "Civil Aviation Authority",
    city: "New Delhi",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=800&q=80",
  },
  {
    name: "Capt. Rohan Mehta",
    designation: "Chief Pilot",
    organization: "National Airlines",
    city: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&q=80",
  },
  {
    name: "Ms. Ananya Iyer",
    designation: "Aviation Policy Expert",
    organization: "Aerospace Think Tank",
    city: "Bengaluru",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
  },
  {
    name: "Mr. Vikram Singh",
    designation: "Head – Training",
    organization: "MRO Solutions Pvt Ltd",
    city: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  },
  {
    name: "Dr. Neelam Verma",
    designation: "Aerospace Professor",
    organization: "National Institute of Aviation",
    city: "Chennai",
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80",
  },
];

export default function NAOCommittee() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl text-center font-bold text-orange">
            NAO Committee
          </h2>
          <p className="mt-4 font-medium md:text-lg ">
            Led by Who’s Who of the Aviation Ecosystem
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="nao-committee-swiper"
          >
            {committeeMembers.map((member) => (
              <SwiperSlide key={member.name}>
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Image */}
                  <div className="h-64 w-full overflow-hidden rounded-t-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 text-center">
                    <h3 className="text-xl font-semibold ">{member.name}</h3>
                    <p className=" font-medium text-[#2d333a]">
                      {member.designation}
                    </p>
                    <p className=" text-gray-600">{member.organization}</p>
                    <p className=" text-gray-500">{member.city}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mt-4 md:mt-6 flex justify-center flex-wrap gap-2 md:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button className="bg-yellow cursor-pointer  w-full md:w-fit hover:bg-[#e6c400] text-black font-medium px-6 py-2.5 rounded-lg transition-colors">
            Eligibility Criteria
          </button>

          <button className="bg-red  cursor-pointer w-full md:w-fit hover:bg-[#b92520] text-white font-medium px-6 py-2.5 rounded-lg transition-colors">
            Nominate Expert
          </button>
        </motion.div>
      </div>
    </section>
  );
}
