"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import FloatingWhatsAppLogo from "@/components/FloatingWhatsAppLogo";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  return (
    <>
      {children}
      {!isLanding && <Footer />}
      {!isLanding && <FloatingWhatsAppLogo />}
    </>
  );
}
