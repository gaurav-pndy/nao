"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function ConnectWithUs() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl font-medium mb-6"
        >
          Follow NAO for updates, stories, and community engagement
        </motion.p>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <SocialIcon href="https://www.facebook.com/nao.aviationolympiad">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="https://x.com/aviaolympiad">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/nao.aviationolympiad">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/showcase/aviationolympiad">
            <FaLinkedinIn />
          </SocialIcon>
          <SocialIcon href="https://wa.me/919211229927">
            <FaWhatsapp />
          </SocialIcon>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ href, children }) {
  return (
    <Link href={href} target="_blank" className="text-2xl text-gray-700 hover:text-blue-600 transition-colors">
      <div className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
        {children}
      </div>
    </Link>
  );
}
