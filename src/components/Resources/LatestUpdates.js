"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import Link from "next/link";

const updates = [
  {
    id: 1,
    title: "Who can participate in the National Aviation Olympiad?",
    excerpt:
      "The National Aviation Olympiad is open to all students currently enrolled in Classes 8 through 12 in any recognized school across India. Students must be registered through their school or individually with proper documentation.",
    image: "/resources/updates/Latest_Update_02.png",
    href: "#",
  },
  {
    id: 2,
    title: "What study materials are provided?",
    excerpt:
      "The National Aviation Olympiad is open to all students currently enrolled in Classes 8 through 12 in any recognized school across India. Students must be registered through their school or individually with proper documentation.",
    image: "/resources/updates/Latest_Update_01.png",
    href: "#",
  },
  {
    id: 3,
    title: "Who can participate in the National Aviation Olympiad?",
    excerpt:
      "The National Aviation Olympiad is open to all students currently enrolled in Classes 8 through 12 in any recognized school across India. Students must be registered through their school or individually with proper documentation.",
    image: "/resources/updates/Latest_Update_02.png",
    href: "#",
  },
  {
    id: 4,
    title: "What study materials are provided?",
    excerpt:
      "The National Aviation Olympiad is open to all students currently enrolled in Classes 8 through 12 in any recognized school across India. Students must be registered through their school or individually with proper documentation.",
    image: "/resources/updates/Latest_Update_01.png",
    href: "#",
  },
];

export default function LatestUpdates() {
  return (
    <section className="py-12 ">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-center font-bold text-orange mb-8">
          Latest Updates
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".updates-prev",
            nextEl: ".updates-next",
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {updates.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white   overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative h-74 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover h-full"
                  />
                </div>

                {/* Content */}
                <div className=" rounded-xl mt-2 flex flex-col flex-1">
                  <h3 className="font-semibold text-2xl  p-4 min-h-26 bg-[#f7f7f7] ">
                    {item.title}
                  </h3>

                  <div className="bg-[#fefefe] p-4">
                    <p className=" mb-2  flex-1">{item.excerpt}</p>

                    <Link
                      href={item.href}
                      className=" text-blue-600   hover:underline"
                    >
                      Know More...
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Controls */}
        <div className="flex justify-end items-center gap-3 mt-8">
          <button className="updates-prev min-w-32 cursor-pointer hover:bg-blue-800 transition-all duration-300 px-4 py-2 rounded-md bg-[#0061e5] text-white ">
            Previous
          </button>

          <span className="px-3 py-2 border rounded-md font-medium">01</span>

          <button className="updates-next min-w-32 cursor-pointer hover:bg-blue-800 transition-all duration-300 px-4 py-2 rounded-md bg-[#0061e5] text-white ">
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
