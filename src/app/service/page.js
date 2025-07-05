"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default function ServicePage() {
  const [time, setTime] = useState("");
  const router = useRouter();

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

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center mt-10 relative z-10"
      >
        <h1 className="text-4xl font-bold text-white">My Services</h1>
        <p className="text-gray-400 mt-2">Creative solutions for your digital growth</p>
      </motion.div>

      {/* Service Overview Cards */}
      <section className="mt-16 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 relative z-10">
        {/* Website */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-md hover:shadow-xl transition"
        >
          <h2 className="text-xl font-semibold text-purple-300 mb-2">Website Development</h2>
          <p className="text-gray-300 text-sm">
            I build websites using Next.js, Tailwind, Supabase, and more.
          </p>
          <button
            onClick={() => router.push("https://wa.me/60123456789")}
            className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-full transition"
          >
            See More
          </button>
        </motion.div>

        {/* Mobile App */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-md hover:shadow-xl transition"
        >
          <h2 className="text-xl font-semibold text-blue-400 mb-2">Mobile App Development</h2>
          <p className="text-gray-300 text-sm">
            I create modern mobile apps with React Native and Supabase backend.
          </p>
          <button
            onClick={() => router.push("https://instagram.com/yourprofile")}
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-full transition"
          >
            See More
          </button>
        </motion.div>

        {/* Video Editing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-md hover:shadow-xl transition col-span-1 sm:col-span-2"
        >
          <h2 className="text-xl font-semibold text-pink-400 mb-2">Video Editing & Digital Marketing</h2>
          <p className="text-gray-300 text-sm">
            Engaging drone edits, TikTok reels & marketing visuals to boost your brand.
          </p>
          <button
            onClick={() => router.push("https://www.tiktok.com/@yourusername")}
            className="mt-4 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm rounded-full transition"
          >
            See More
          </button>
        </motion.div>
      </section>

      {/* Website Catalog */}
      <section className="mt-24 max-w-6xl mx-auto relative z-10">
        <h2 className="text-2xl font-bold text-center text-purple-300 mb-10">Website Catalog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="text-center">
              <Image
                src={`/catalog/web${n}.jpg`}
                alt={`Website ${n}`}
                width={300}
                height={200}
                className="rounded-lg shadow-lg mx-auto"
              />
              <p className="mt-2 text-sm text-gray-300">Project {n} description</p>
            </div>
          ))}
        </div>
        {/* Baris bawah */}
        <div className="mt-10 text-center">
          <Image
            src="/catalog/web5.jpg"
            alt="Website 5"
            width={600}
            height={300}
            className="rounded-lg shadow-lg mx-auto"
          />
          <p className="mt-2 text-sm text-gray-300">Landing page with full animation</p>
        </div>
      </section>

      {/* Mobile App Catalog */}
      <section className="mt-24 max-w-6xl mx-auto relative z-10">
        <h2 className="text-2xl font-bold text-center text-blue-400 mb-10">Mobile App Catalog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="text-center">
              <Image
                src={`/catalog/app${n}.jpg`}
                alt={`App ${n}`}
                width={300}
                height={200}
                className="rounded-lg shadow-lg mx-auto"
              />
              <p className="mt-2 text-sm text-gray-300">App {n} description</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Image
            src="/catalog/app5.jpg"
            alt="App 5"
            width={600}
            height={300}
            className="rounded-lg shadow-lg mx-auto"
          />
          <p className="mt-2 text-sm text-gray-300">Cross-platform app with backend</p>
        </div>
      </section>

      {/* Video Editing Catalog */}
      <section className="mt-24 max-w-6xl mx-auto relative z-10 pb-24">
        <h2 className="text-2xl font-bold text-center text-pink-400 mb-10">Video Editing Catalog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="text-center">
              <Image
                src={`/catalog/video${n}.jpg`}
                alt={`Video ${n}`}
                width={300}
                height={200}
                className="rounded-lg shadow-lg mx-auto"
              />
              <p className="mt-2 text-sm text-gray-300">Drone edit {n}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Image
            src="/catalog/video5.jpg"
            alt="Video 5"
            width={600}
            height={300}
            className="rounded-lg shadow-lg mx-auto"
          />
          <p className="mt-2 text-sm text-gray-300">Promo video with cinematic edit</p>
        </div>
      </section>
    </main>
  );
}
