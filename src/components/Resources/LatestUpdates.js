"use client";

import Image from "next/image";
import Link from "next/link";

const updates = [
  {
    id: 1,
    title: "NAO 2026 Registrations Open Soon",
    date: "TBD",
    excerpt: "Placeholder",
    image: "/resources/updates/Latest_Update_02.png",
    href: "#",
  },
  {
    id: 2,
    title: "NAO Expert Committee Announcement",
    date: "TBD",
    excerpt: "Placeholder",
    image: "/resources/updates/Latest_Update_01.png",
    href: "#",
  },
  {
    id: 3,
    title: "Syllabus & Sample Papers Released",
    date: "TBD",
    excerpt: "Placeholder",
    image: "/resources/updates/Latest_Update_02.png",
    href: "#",
  },
];

export default function LatestUpdates() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-center font-bold text-orange mb-2">
          News & Updates #Blog Section
        </h2>
        <p className="text-center text-lg text-slate-700 mb-8">
          Stay informed with the latest from NAO
        </p>

        {/* Scrollable cards */}
        <div className="relative">
          {/* left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent" />
          {/* right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent" />

          <div
            className="flex space-x-4 overflow-x-auto pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {updates.map((item) => (
              <div
                key={item.id}
                className="min-w-[260px] bg-white rounded-xl shadow flex-shrink-0 flex flex-col transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative w-full aspect-video rounded-t-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  {/* gradient overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-lg leading-tight">
                    {item.title}
                  </h3>
                  <span className="text-xs text-orange-500 mt-1">
                    {item.date}
                  </span>
                  <p
                    className="mt-2 text-sm text-slate-700 overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.excerpt}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-auto text-blue-600 hover:underline text-sm font-semibold"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
