"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const [step, setStep] = useState(0); // 0: NEROWORK, 1: Logo, 2: Main content
  const router = useRouter();

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 2000),
      setTimeout(() => setStep(2), 5000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="nerowork"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-widest"
            >
              NEROWORK
            </motion.h1>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px]">
              <Image
                src="/Nerowork-logon.png"
                alt="Nerowork Logo"
                fill
                className="rounded-full object-contain"
                sizes="(max-width: 640px) 140px, (max-width: 768px) 200px, 240px"
              />
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center flex flex-col items-center gap-6"
          >
            <h1 className="text-3xl sm:text-4xl font-bold">Welcome to NEROWORK</h1>
            <p className="text-gray-300 px-4">
              Explore my work, experience, and packages.
            </p>

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => router.push("/main")}
  className="relative mt-6 px-8 py-4 text-white text-base sm:text-lg font-semibold rounded-full bg-transparent border-none focus:outline-none group transition-all duration-300 ease-in-out"
>
  {/* Text Only */}
  <span className="relative z-10">Enter Website</span>

  {/* Glowing Neon Ring – Hidden until Hover */}
  <span className="absolute w-[130%] h-[130%] -left-[15%] -top-[15%] rounded-full border border-white opacity-0 blur-[2px] group-hover:opacity-30 animate-rotate-glow transition-all duration-1000 pointer-events-none" />

  {/* Soft Background Glow Inside */}
  <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 blur-sm transition-all duration-1000" />
</motion.button>


          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
