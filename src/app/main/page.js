"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function MainPage() {
  const [text, setText] = useState("");
  const fullText = "Design engineer by day, creative by night";
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [time, setTime] = useState("");
  const router = useRouter();

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typing);
        setShowSubtitle(true);
      }
    }, 50);
    return () => clearInterval(typing);
  }, []);

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

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <main
      className={`min-h-screen px-6 sm:px-16 py-10 font-sans relative overflow-hidden transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-black text-white"
          : "bg-gradient-to-b from-white to-gray-100 text-black"
      }`}
    >
      {/* Background Glow */}
      {theme === "dark" && (
        <>
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600 blur-[120px] rounded-full opacity-30 animate-pulse z-0" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-600 blur-[100px] rounded-full opacity-20 animate-pulse z-0" />
        </>
      )}

      {/* Time Bar */}
      <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-6 relative z-10">
        <div>Asia/Kota Kinabalu</div>
        <div>{time}</div>
      </div>

      {/* Navbar */}
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mb-6"
        >
          <span className="bg-white text-black dark:bg-white dark:text-black px-3 py-1 text-xs font-medium rounded-full shadow-md">
            ✨ Empowering indie creators
          </span>
        </motion.div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-white text-center">
          Design engineer by <span className="text-purple-400">day</span>, creative by <span className="text-purple-400">night</span>
        </h1>

        {showSubtitle && (
          <>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="mt-6 text-sm sm:text-base text-gray-300 text-center"
            >
              <span className="text-white">We let designers</span>{" "}
              <span className="text-purple-400 font-semibold">code</span>{" "}
              <span className="text-white">and developers</span>{" "}
              <span className="text-pink-400 font-semibold">design</span>.
              <br />
              <span className="text-gray-400">
                Build fast and beautifully with the Design System.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="mt-8 flex justify-center"
            >
              <button
                onClick={() => router.push("#about")}
                className="flex items-center gap-2 px-5 py-2 bg-white/5 dark:bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition backdrop-blur-md"
              >
                <Image
                  src="/avatar.png"
                  alt="Avatar"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-sm">About – Nero</span>
              </button>
            </motion.div>

            {/* My Drone Video Section */}
         {/* My Drone Video Section */}
<div className="mt-16 text-center relative z-10">
  <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-4">
    My drone x video editing project
  </h2>
 <div className="relative overflow-hidden max-w-3xl mx-auto rounded-lg shadow-lg aspect-video">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/1VL1vfM5Tcw?autoplay=1&mute=1"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>

</div>

          </>
        )}
      </div>
    </main>
  );
}
