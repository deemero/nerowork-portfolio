"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function WorkPage() {
  const [time, setTime] = useState("");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);

  const bibleImages = [
    "/bible1.svg",
    "/bible2.svg",
    "/bible3.svg",
    "/bible4.svg",
    "/bible5.svg",
    "/bible6.svg",
  ];

  const workExperiences = [
    {
      title: "System Developer – Jabatan Bendahari Negeri Sabah",
      year: "2023 - Now",
      desc: "Built government internal systems for budgeting and reporting using modern web technologies.",
      image: "/jbns.png",
    },
    {
      title: "LJD Digital Marketing – Freelance",
      year: "2022 - 2024",
      desc: "Digital Marketing For LJD (Video Editing and Graphic Design).",
      image: "/ljd.png",
    },
    {
      title: "Bible Tracker & Revival System",
      year: "2025 - Now",
      desc: "Developed AI-powered Bible reading tracker with user leaderboard and notification system.",
      image: "/bible1.svg",
    },
    {
      title: "Donation & NGO Systems",
      year: "2024 - Now",
      desc: "Built donation platform with receipt upload, admin approval, and church campaign tracking.",
      image: "/altargive.png",
    },
    {
      title: "E-Commerce App & Website",
      year: "2023 - Now",
      desc: "Designed online store system with payment integration and stock management.",
      image: "/ecommerce.png",
    },
    {
      title: "AI Chatbot – Datuk James Ratib",
      year: "2025 - Now",
      desc: "Created a custom chatbot system with dynamic FAQ for political campaigns.",
      image: "/chatbox.png",
    },
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
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600 blur-[120px] rounded-full opacity-30 animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-700 blur-[100px] rounded-full opacity-20 animate-pulse z-0" />

      <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-4 relative z-10">
        <div>Asia/Kota Kinabalu</div>
        <div>{time}</div>
      </div>

      <Navbar />

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

      {/* Work Experience Detail */}
      <section className="mt-28 max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-12 tracking-wider">
          Work Experience Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {workExperiences.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onClick={() => setSelected(item)}
              className="cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-md hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <span className="text-sm text-gray-300">{item.year}</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-lg w-full border border-white/20 shadow-lg text-white"
              >
                <div className="relative w-full h-52 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
                <p className="text-sm text-gray-300 mb-2">{selected.year}</p>
                <p className="text-gray-200 text-base">{selected.desc}</p>
                <button
                  onClick={() => setSelected(null)}
                  className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
