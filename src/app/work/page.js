"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function WorkPage() {
  const [time, setTime] = useState("");
  const [current, setCurrent] = useState(0);

  const bibleImages = [
    "/bible1.svg",
    "/bible2.svg",
    "/bible3.svg",
    "/bible4.svg",
    "/bible5.svg",
    "/bible6.svg",
  ];

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

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % bibleImages.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + bibleImages.length) % bibleImages.length);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#101010] to-[#0d0d0d] text-white px-4 sm:px-10 pt-6 pb-20 overflow-hidden font-sans relative">
      {/* Floating Background Glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600 blur-[120px] rounded-full opacity-30 animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-700 blur-[100px] rounded-full opacity-20 animate-pulse z-0" />

      {/* Topbar */}
      <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-4 relative z-10">
        <div>Asia/Kota Kinabalu</div>
        <div>{time}</div>
      </div>

      <Navbar />

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-20 mb-12 relative z-10"
      >
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
          Design engineer by <span className="text-purple-400">day</span>,<br />
          <span className="text-pink-400">creative by night</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-3">
          Empowering indie creators to build fast and beautifully with the Design System
        </p>
        <p className="text-sm text-gray-500 italic">
          “We let designers code and developers design.”
        </p>
      </motion.div>

      {/* Gallery */}
      <div className="relative max-w-5xl mx-auto mt-8 h-[520px] z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(255,255,255,0.1)] bg-[#111111]">
              <Image
                src={bibleImages[current]}
                alt={`Bible Screenshot ${current + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 transition"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 transition"
        >
          ▶
        </button>
      </div>

      {/* Indicator */}
      <div className="flex justify-center mt-6 space-x-2 relative z-10">
        {bibleImages.map((_, index) => (
          <motion.div
            key={index}
            animate={{
              scale: index === current ? 1.5 : 1,
              opacity: index === current ? 1 : 0.5,
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`h-2.5 w-2.5 rounded-full ${
              index === current ? "bg-purple-500 shadow-md" : "bg-gray-600"
            }`}
          />
        ))}
      </div>

      {/* Bottom Card Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="max-w-3xl mx-auto mt-16 text-center text-sm text-gray-400 leading-relaxed relative z-10"
      >
        Development of a flexible and highly customizable design system using{" "}
        <span className="text-white font-semibold">Next.js</span> for front-end and{" "}
        <span className="text-white font-semibold">Figma</span> for design collaboration.
        <br />
        <a
          href="#"
          className="inline-block mt-3 text-purple-400 hover:underline font-medium transition"
        >
          Read case study →
        </a>
      </motion.div>
    </main>
  );
}
