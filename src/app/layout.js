// ❌ JANGAN letak "use client" di sini!
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingWhatsAppLogo from "@/components/FloatingWhatsAppLogo";
import ClientWrapper from "@/components/ClientWrapper"; // Tambah ini

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nerowork",
  description: "Make us Unity With Bless.",
  icons: {
    icon: "/nerowork-logon.png", // atau .png jika itu yang kau guna
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-black text-white transition-all duration-500`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
