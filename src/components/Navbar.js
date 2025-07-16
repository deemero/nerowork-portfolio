"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar({ toggleTheme, theme }) {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "/main" },
    { label: "About", path: "/about" },
    { label: "Work", path: "/work" },
    { label: "Service", path: "/service" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex justify-center mb-12">
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 bg-black/5 dark:bg-black/30 px-6 py-3 rounded-full border border-black/10 dark:border-white/10 backdrop-blur-md shadow-lg text-sm w-full sm:w-auto">
        
        {/* Logo */}
        {/* <div className="mr-4 cursor-pointer" onClick={() => router.push("/main")}>
          <Image
            src="/nerowork-logon.png"
            alt="Nerowork Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div> */}

        {/* Nav Items */}
        {navItems.map((item, index) => {
          const isActive = pathname === item.path;

          return (
            <motion.span
              key={index}
              onClick={() => router.push(item.path)}
              whileHover={{
                scale: 1.15,
                textShadow: "0px 0px 8px rgba(0, 255, 255, 0.8)",
                color: theme === "dark" ? "#00FFFF" : "#0077FF",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className={`cursor-pointer px-2 py-1 rounded-md font-semibold tracking-wide transition-all duration-300 ${
                isActive
                  ? "text-cyan-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]"
                  : ""
              }`}
            >
              {item.label}
            </motion.span>
          );
        })}

        {/* Theme Toggle */}
        <div
          onClick={toggleTheme}
          className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-all duration-300"
        >
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            className={`w-5 h-5 rounded-full shadow-md transform ${
              theme === "dark"
                ? "bg-blue-400 translate-x-6"
                : "bg-yellow-300 translate-x-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
