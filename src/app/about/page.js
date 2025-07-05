"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { TypeAnimation } from "react-type-animation";

const skills = [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React / Next.js", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js", level: 70 },
  { name: "Supabase", level: 75 },
];

const experiences = [
  {
    title: "System Builder – Nerowork",
    year: "2024 - Kini",
    desc: "Bangunkan sistem AI seperti Bible Tracker, sistem derma & kuiz digital untuk komuniti gereja.",
  },
  {
    title: "IT Assistant – Klinik XYZ",
    year: "2022 - 2023",
    desc: "Urus sistem ICT, laporan kerosakan & bina borang laporan moden.",
  },
];

export default function AboutPage() {
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

  return (
    <main className="min-h-screen px-6 sm:px-16 py-10 font-sans relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-black text-white transition-colors duration-500">
      
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600 blur-[120px] rounded-full opacity-30 animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-600 blur-[100px] rounded-full opacity-20 animate-pulse z-0" />

      {/* Clock & Navbar */}
      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-6 relative z-10">
        <span>Asia/Kota Kinabalu</span>
        <span>{time}</span>
      </div>
      <Navbar />

      {/* Logo & Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-10 relative z-10"
      >
        <Image
          src="/Nerowork-logon.png"
          alt="Logo Nerowork"
          width={200}
          height={200}
          className="mx-auto hover:scale-105 transition duration-500"
        />
        <h1 className="text-4xl font-extrabold mt-4">Nerowork</h1>
        <TypeAnimation
          sequence={[
            "Building AI Solutions", 2000,
            "Church Systems", 2000,
            "Donation Platforms", 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="block mt-2 text-blue-400 text-sm"
        />
      </motion.div>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center max-w-2xl mx-auto mt-6 text-gray-300 text-base leading-relaxed relative z-10"
      >
        Nerowork ialah syarikat pembangunan sistem digital dari Sabah.
        Dibangunkan oleh satu individu tetapi diurus seperti syarikat startup
        moden. Fokus kepada sistem Alkitab AI, platform komuniti & derma pintar.
      </motion.p>

      {/* Skills */}
      <section className="mt-16 max-w-3xl mx-auto relative z-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-300">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <div className="flex justify-between mb-1 text-sm">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mt-20 max-w-3xl mx-auto relative z-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-300">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.3 }}
              className="border-l-4 border-blue-500 pl-4 hover:shadow-xl transition-all"
            >
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-400">{exp.year}</p>
              <p className="text-gray-300 mt-1">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
