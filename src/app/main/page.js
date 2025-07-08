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
{/* Pricing Section - Upgraded with Animation */}
<section className="mt-24 px-4 relative z-10 text-center">
<motion.h2
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-3xl sm:text-5xl font-bold tracking-wide text-white drop-shadow-[0_1px_3px_rgba(255,255,255,0.1)] mb-6"
>
  Pricing
</motion.h2>


  <motion.p
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.8 }}
    className="text-gray-400 mb-10"
  >
    Choose the plan that fits your goals.
  </motion.p>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
    {/* Pricing Card */}
    {[
      {
        name: "Simple",
        price: "Free",
        bg: "bg-pink-400/90",
        features: [
          "✔ For up to 20 businesses",
          "✔ Mobile + Website Setup",
          "✔ Drone preview only",
          "✔ Email Support",
        ],
        btnText: "Get Started Free",
      },
      {
        name: "Efficient",
        price: "RM250+",
        bg: "bg-cyan-300/90",
        features: [
          "✔ Everything in Simple",
          "✔ Custom Website or App",
          "✔ 1x Drone Shoot & Edit",
          "✔ Monthly Support",
        ],
        btnText: "Get Efficient Plan",
      },
      {
        name: "Team",
        price: "RM500+",
        bg: "bg-yellow-300/90",
        features: [
          "✔ Everything in Efficient",
          "✔ Website + App + Video Package",
          "✔ Social Media Boost",
          "✔ Priority Support",
        ],
        btnText: "Get Team Plan",
      },
    ].map((plan, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2, duration: 0.8 }}
        whileHover={{ scale: 1.06 }}
        className={`${plan.bg} text-black rounded-2xl p-6 shadow-2xl transition-all duration-300 border-2 border-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] backdrop-blur-lg`}
      >
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-xl font-semibold mb-4">{plan.price}</p>
        <ul className="text-sm space-y-2 text-black/80 mb-6 text-left">
          {plan.features.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>
        <button className="w-full bg-black text-white py-2 px-4 rounded-full hover:ring-2 hover:ring-white transition">
          {plan.btnText}
        </button>
      </motion.div>
    ))}
  </div>

  {/* See More Button */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.8 }}
    className="mt-14"
  >
 <button
  onClick={() => window.location.href = '/service'}
  className="px-5 py-2 rounded-full text-sm font-medium text-white bg-transparent border border-white/15 hover:border-white/30 hover:bg-white/5 backdrop-blur-md shadow-sm hover:shadow-md transition duration-300"
>
  See Full Package
</button>

  </motion.div>
</section>

{/* About Nerowork Section */}
<section className="mt-24 max-w-4xl mx-auto text-center px-4 relative z-10">
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-wide drop-shadow-sm"
  >
    Why Choose Nerowork?
  </motion.h3>

  <motion.p
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="text-gray-400 text-sm sm:text-base leading-relaxed"
  >
    At <span className="text-white font-semibold">Nerowork</span>, we combine technical precision with creative execution. From mobile apps to drone visuals, we provide end-to-end digital solutions that are affordable, impactful, and designed for growth.
    <br /><br />
    Whether you're a startup, creator, or business owner — we craft custom solutions that actually work. No bloated prices, no unnecessary fluff — just clean design and powerful results.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="mt-8"
  >

  </motion.div>
</section>

{/* Nerowork Highlights Section */}
<section className="mt-20 max-w-6xl mx-auto px-4 relative z-10">
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
    {/* Mission */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:shadow-lg hover:border-white/20 transition"
    >
      <h4 className="text-xl font-semibold mb-3 text-purple-300"> Our Mission</h4>
      <p className="text-sm text-gray-300">
        Empower creators, businesses, and teams through clean design and functional digital solutions that scale.
      </p>
    </motion.div>

    {/* Vision */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:shadow-lg hover:border-white/20 transition"
    >
      <h4 className="text-xl font-semibold mb-3 text-cyan-300"> Our Vision</h4>
      <p className="text-sm text-gray-300">
        To become East Malaysia’s most trusted tech partner — building bold ideas, one pixel at a time.
      </p>
    </motion.div>

    {/* Solutions */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:shadow-lg hover:border-white/20 transition"
    >
      <h4 className="text-xl font-semibold mb-3 text-yellow-300"> Our Solutions</h4>
      <p className="text-sm text-gray-300">
        Mobile Apps · Websites · Drone Content · Digital Marketing · Branding. All built to perform, not just to impress.
      </p>
    </motion.div>
  </div>
</section>



</div>

          </>
        )}
      </div>
    </main>
  );
}
