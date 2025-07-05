"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaGithub,
} from "react-icons/fa";

export default function ContactPage() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Kuala_Lumpur",
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      icon: <FaFacebook />,
      url: "https://facebook.com/yourusername",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/yourusername",
      color: "hover:text-pink-500",
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/60123456789",
      color: "hover:text-green-400",
    },
    {
      icon: <FaTiktok />,
      url: "https://tiktok.com/@yourusername",
      color: "hover:text-white",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/yourusername",
      color: "hover:text-gray-400",
    },
  ];

  return (
    <main className="min-h-screen px-6 sm:px-16 py-10 font-sans relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-black text-white transition-colors duration-500">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600 blur-[120px] rounded-full opacity-30 animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-600 blur-[100px] rounded-full opacity-20 animate-pulse z-0" />

      {/* Time & Navbar */}
      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-6 relative z-10">
        <span>Asia/Kota Kinabalu</span>
        <span>{time}</span>
      </div>
      <Navbar />

      {/* Contact Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center mt-10 relative z-10"
      >
        <h1 className="text-4xl font-bold text-white">Let's Connect 🤝</h1>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Need a website, app, or creative content? Reach out to me anytime.
          I’m open for freelance work, collaborations, and cool projects 🚀
        </p>
      </motion.div>

      {/* Social Icons Section */}
      <section className="mt-16 max-w-3xl mx-auto text-center relative z-10">
        <div className="flex flex-wrap justify-center gap-8 text-5xl">
          {socialLinks.map((item, index) => (
           <motion.a
  key={index}
  href={item.url}
  target="_blank"
  rel="noopener noreferrer"
  className={`transition ${item.color}`}
  whileHover={{ scale: 1.2, rotate: 5 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  {item.icon}
</motion.a>

          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 text-sm text-gray-400"
        >
          💬 I usually reply within a day. Let's build something amazing together ✨
        </motion.p>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-center text-xs text-gray-500 relative z-10">
        © {new Date().getFullYear()} Nerowork. Powered by passion and purpose.
      </footer>
    </main>
  );
}
