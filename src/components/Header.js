"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Participate", href: "/participate" },
  { label: "Resources", href: "/resources" },
  { label: "Partners", href: "/partners" },
  // { label: "People", href: "/people" },
  { label: "Contact", href: "/contact" },
];

const socialIcons = [
  {
    src: "/header/Facebook.svg",
    alt: "Facebook",
    href: "https://www.facebook.com/nao.aviationolympiad",
  },
  { src: "/header/X.svg", alt: "X", href: "https://x.com/aviaolympiad" },
  {
    src: "/header/Instagram.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/nao.aviationolympiad",
  },
  {
    src: "/header/LinkedIn.svg",
    alt: "LinkedIn",
    href: "https://www.linkedin.com/showcase/aviationolympiad",
  },
];

const phoneNumbers = ["+91 92112 29927", "+91 97739 87836", "+91 93463 70858"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPhoneIndex, setCurrentPhoneIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const [showDonate, setShowDonate] = useState(false);

  const currentPhone = phoneNumbers[currentPhoneIndex];

  const router = useRouter();
  const pathname = usePathname();

  const isHome =
    pathname === "/" ||
    pathname === "/privacy-policy" ||
    pathname === "/terms-and-conditions" ||
    pathname === "/refund-policy";

  // Timer: cycle through numbers only when not hovered
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentPhoneIndex((prev) => (prev + 1) % phoneNumbers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, phoneNumbers.length]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50 overflow-hidden">
      {/* Top Gradient Bar */}
      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-white h-8 md:h-12 flex w-full items-center"
        style={{
          backgroundImage: "url('/header/Top_Strip.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-6xl w-full mx-auto px-4 flex justify-between items-center">
          <span className="text-xs lg:text-base">
            1st Pan India Aviation Olympiad
          </span>

          <div className="hidden md:flex items-center gap-4">
            {/* Phone number with hover pause */}
            <span
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="cursor-default"
            >
              {currentPhone}
            </span>
            <span>| nao@thecso.in</span>

            <button
              onClick={() => setShowDonate(true)}
              className="bg-linear-to-r cursor-pointer from-[#2da9b9] to-[#0366e2] text-white px-3 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              Donate Now
            </button>

            <div className="flex gap-2">
              {socialIcons.map((icon, i) => (
                <motion.a
                  key={i}
                  target="_blank"
                  href={icon.href}
                  className="w-6 h-6 hover:scale-110 transition-all duration-300 relative"
                >
                  <Image src={icon.src} alt={icon.alt} fill />
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/+919211229927"
                target="_blank"
                className="w-6 h-6 bg-[#ffffff] rounded-full hover:scale-110 transition-all duration-300 flex justify-center items-center p-1 relative"
              >
                <FaWhatsapp className="text-[#384f5d]" />
              </motion.a>
              <motion.a
                href="mailto:nao@thecso.in"
                target="_blank"
                className="w-6 h-6 bg-[#ffffff] rounded-full hover:scale-110 transition-all duration-300 flex justify-center items-center p-1 relative"
              >
                <MdOutlineEmail className="text-[#384f5d]" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md backdrop-blur-sm" : "bg-transparent"
        } border-none`}
      >
        <div className="max-w-6xl mx-auto px-4 py-2 lg:py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-end gap-1 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <div className="relative h-10 lg:h-16 w-24 lg:w-40">
              <Image
                src={
                  isHome || isScrolled
                    ? "/header/logo.svg"
                    : "/header/logo-white.png"
                }
                alt="National Aviation Olympiad"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 xl:gap-10">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.label}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={item.href}
                    className={`transition-colors duration-300 ${
                      isHome
                        ? `${isActive ? "font-bold" : ""} text-black`
                        : isScrolled
                          ? `${isActive ? "font-bold" : ""} text-black`
                          : `${isActive ? "font-bold" : ""} text-white`
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`md:hidden flex text-3xl flex-col gap-1 transition-colors ${
              isScrolled || isHome ? "text-[#2d333a]" : "text-white"
            }`}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35 }}
              className="fixed top-0 font-medium right-0 h-full w-80 bg-white/70 backdrop-blur-xl z-50 p-6 flex flex-col"
            >
              {/* Close */}
              <button
                onClick={() => setMenuOpen(false)}
                className="self-end mb-4 text-black font-semibold text-2xl"
              >
                ✕
              </button>

              {/* Navigation */}
              <nav className="flex flex-col gap-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`text-lg transition-colors ${
                        pathname === item.href
                          ? "font-semibold text-white font-bold"
                          : "text-[#2d333a] hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="h-px bg-black/10 mb-6" />

              {/* Contact Info (Mobile) */}
              <div className="mt-6 text-[#2d333a] space-y-2">
                <p>{currentPhone}</p>
                <p>nao@thecso.in</p>

                <div className="flex gap-3 pt-2">
                  {socialIcons.map((icon, i) => (
                    <a key={i} href={icon.href} className="w-8 h-8 relative">
                      <Image src={icon.src} alt={icon.alt} fill />
                    </a>
                  ))}
                  <a
                    href="https://wa.me/+919211229927"
                    target="_blank"
                    className="w-8 h-8 bg-[#ffffff] rounded-full flex justify-center items-center relative"
                  >
                    <FaWhatsapp className="text-[#384f5d] text-xl" />
                  </a>
                  <a
                    href="mailto:nao@thecso.in"
                    target="_blank"
                    className="w-8 h-8 bg-[#ffffff] rounded-full flex justify-center items-center relative"
                  >
                    <MdOutlineEmail className="text-[#384f5d] text-xl" />
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {showDonate && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-9999 p-4 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white overflow-hidden rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] md:max-h-188 h-full relative"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <button
                onClick={() => setShowDonate(false)}
                className="absolute top-3 right-7 text-gray-600 hover:text-black text-3xl font-bold"
              >
                ×
              </button>
              <iframe
                width="100%"
                height="100%"
                src="https://zohosecurepay.in/checkout/fq35wqxe-8t0it3x73g4s1/Donate-Now"
                style={{ border: "none" }}
                title="Donate Now"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}

