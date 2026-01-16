"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Participate", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Partners", href: "#" },
  { label: "Contact", href: "#" },
];

const socialIcons = [
  { src: "/header/Facebook.svg", alt: "Facebook", href: "#" },
  { src: "/header/X.svg", alt: "X", href: "#" },
  { src: "/header/Instagram.svg", alt: "Instagram", href: "#" },
  { src: "/header/Linkedin.svg", alt: "LinkedIn", href: "#" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full  fixed top-0 z-50">
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
        }}
      >
        <div className="max-w-6xl w-full mx-auto px-4 flex justify-between items-center">
          <span className="text-xs lg:text-base">
            1st Pan India Aviation Olympiad
          </span>

          <div className="hidden md:flex items-center gap-4">
            <span>+91- 92112 29927 | nao@thecso.in</span>

            <div className="flex gap-2">
              {socialIcons.map((icon, i) => (
                <motion.a
                  key={i}
                  href={icon.href}
                  className="w-6 h-6 hover:scale-110 transition-all duration-300 relative"
                >
                  <Image src={icon.src} alt={icon.alt} fill />
                </motion.a>
              ))}
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
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-2 lg:py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-10 lg:h-16 w-40 relative"
          >
            <Image
              src="/header/logo.svg"
              alt="National Aviation Olympiad"
              fill
              priority
              className="object-contain object-left"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 xl:gap-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="text-[#2d333a] hover:text-[#d42c26] transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex text-[#2d333a] text-3xl flex-col gap-1"
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
              <nav className="flex  flex-col gap-6">
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
                      className="text-lg text-[#2d333a] hover:text-[#d42c26]"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="h-px bg-black/10 mb-6" />

              {/* Contact Info (Mobile) */}
              <div className="mt-6  text-[#2d333a] space-y-2">
                <p>+91- 92112 29927</p>
                <p>nao@thecso.in</p>

                <div className="flex gap-3 pt-2">
                  {socialIcons.map((icon, i) => (
                    <a key={i} href={icon.href} className="w-8 h-8 relative">
                      <Image src={icon.src} alt={icon.alt} fill />
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
