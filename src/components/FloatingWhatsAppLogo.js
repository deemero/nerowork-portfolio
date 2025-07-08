"use client";
import Image from "next/image";

export default function FloatingWhatsAppLogo() {
  return (
    <a
      href="https://wa.me/60132291201"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Image
        src="/nerowork-logo.png" // Logo anda
        alt="Contact via WhatsApp"
        width={60}
        height={60}
        className="rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      />
    </a>
  );
}
