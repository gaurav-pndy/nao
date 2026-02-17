"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Participate", href: "/participate" },
  { label: "Resources", href: "/resources" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

const resources = [
  { label: "Study Materials", href: "#" },
  { label: "Question Banks", href: "#" },
  { label: "Video Tutorials", href: "#" },
  { label: "Practice Tests", href: "#" },
  { label: "Syllabus", href: "#" },
  { label: "FAQs", href: "#" },
];

const socialIcons = [
  { src: "/footer/facebook.svg", alt: "Facebook", href: "#" },
  { src: "/footer/x.svg", alt: "X", href: "#" },
  { src: "/footer/instagram.svg", alt: "Instagram", href: "#" },
  { src: "/footer/linkedIn.svg", alt: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="relative pt-12 mt-12 bg-cover"
      style={{
        backgroundImage: "url('/footer/Footer_BG.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.9fr_0.9fr] gap-10 pb-12">
          {/* Organised by */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="col-span-2 md:col-span-1"
          >
            <h4 className="font-bold text-xl mb-6">Organised by</h4>

            <div className="relative w-32 h-10 mb-4">
              <Image
                src="/footer/CSO.png"
                alt="Centre for Scientific Outreach"
                fill
                className="object-contain"
              />
            </div>

            <p className=" text-slate-700 text-justify text-sm leading-5 mb-4">
              National Aviation Olympiad is India’s premier aviation education
              awareness movement conceived and organized by the Centre for
              Scientific Outreach (CSO) to inspire the next generation of
              aviation professionals.
            </p>

            <a
              href="https://www.thecso.in"
              target="_blank"
              rel="noreferrer"
              className=" text-slate-700 text-sm hover:text-orange transition-all duration-300"
            >
              www.thecso.in
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.4 }}
          >
            <h4 className="font-bold text-xl  mb-6">Quick Links</h4>

            <ul className="space-y-2 lg:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className=" text-slate-700 text-sm hover:text-orange transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <h4 className="font-bold text-xl mb-6">Resources</h4>

            <ul className="space-y-2 lg:space-y-3">
              {resources.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className=" text-slate-700 text-sm hover:text-orange-500 transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="col-span-2 md:col-span-1"
          >
            <h4 className="font-bold text-xl mb-6">Contact Us</h4>

            <ul className="space-y-2 lg:space-y-3 text-sm text-slate-700">
              <li className="flex gap-3 items-start">
                <BsEnvelopeFill className="text-lg  mt-1" />
                <div className="leading-5 flex flex-col">
                  <a
                    href="mailto:hello@cso.in"
                    className="hover:text-orange transition-all duration-300"
                  >
                    hello@thecso.in
                  </a>
                  <a
                    href="mailto:nao@thecso.in"
                    className="hover:text-orange transition-all duration-300"
                  >
                    nao@thecso.in
                  </a>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <FaPhoneAlt className="text-lg  mt-1" />
                <div className="leading-5s flex flex-col">
                  <a
                    href="tel:+919211229927"
                    className="hover:text-orange transition-all duration-300"
                  >
                    +91- 92112 29927
                  </a>
                  <a
                    href="tel:+919773987836"
                    className="hover:text-orange transition-all duration-300"
                  >
                    +91- 97739 87836
                  </a>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <SlGlobe className=" text-xl md:text-3xl  mt-0.5 h-fit" />
                <p className="leading-5">
                  NAO Secretariat <br />
                  B-1, Third Floor, Greater Kailash Enclave – II, <br />
                  New Delhi – 110 048, India.
                </p>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex gap-2 mt-2 lg:mt-6">
              {socialIcons.map((icon, i) => (
                <a
                  key={i}
                  href={icon.href}
                  className="w-8 h-8 rounded-full  flex items-center justify-center hover:scale-110 transition-all duration-300"
                >
                  <img src={icon.src} alt={icon.alt} className="" />
                </a>
              ))}
              <motion.a
                href="https://wa.me/+919211229927"
                target="_blank"
                className="w-8 h-8 bg-black rounded-full hover:scale-110 transition-all duration-300 flex justify-center items-center p-1 relative"
              >
                <FaWhatsapp className="text-white text-lg" />
              </motion.a>
              <motion.a
                href="mailto:nao@thecso.in"
                target="_blank"
                className="w-8 h-8 bg-black rounded-full hover:scale-110 transition-all duration-300 flex justify-center items-center p-1 relative"
              >
                <MdOutlineEmail className="text-white text-lg" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" bg-[#f5f5fa]  py-4 ">
        <div className="max-w-5xl  mx-auto px-4 flex flex-col lg:flex-row justify-between items-center font-semibold text-slate-600 gap-4 text-sm md:text-base lg:gap-10 text-center md:text-left">
          <p>
            © 2026{" "}
            <span className="text-orange ">National Aviation Olympiad</span>.
            All rights reserved.
          </p>

          <div className="flex flex-row justify-between items-center  gap-4 md:gap-6 lg:gap-10">
            <Link
              href="#"
              className="hover:text-orange transition-all duration-300"
            >
              Privacy policy
            </Link>
            <Link
              href="#"
              className="hover:text-orange transition-all duration-300"
            >
              Terms and Conditions
            </Link>
            <Link
              href="#"
              className="hover:text-orange transition-all duration-300"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Strip */}
      <div
        className="absolute bottom-0 left-0 w-full h-2"
        style={{
          backgroundImage: "url('/footer/Footer_Strip.svg')",
          backgroundSize: "cover",
        }}
      />
    </footer>
  );
}
