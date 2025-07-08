"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ModalPreview from "@/components/ModalPreview";

export default function WebsiteCatalog() {
  const [previewItem, setPreviewItem] = useState(null);

  const catalog = [
    {
      title: "Landing Page",
      price: "RM199",
      desc: `Landing Page
ONLY RM199 – Seriously? YES!

 What You Get:
- 1 Custom Web Page
- Floating WhatsApp Button
- Fully Responsive Design
- Smooth Animation Design
- Modern & Clean Layout
- Suitable for Any Type of Business

Domain not included
Fast delivery. Stunning look. Affordable price.

Don't miss it — RM199 only.
Message us now to book your slot! `,
      image: "/landing-websites.jpg",
      wa: "https://wa.me/60132291201?text=I%20want%20Landing%20Page%20Basic",
      sample: "https://chatbox-ct.vercel.app/",
    },
    {
      title: "Landing Page Plus +",
      price: "RM299",
      desc: `Landing Page Plus for Only RM299 
Want your business to stand out without breaking the bank?

-2 Custom Pages
-Floating WhatsApp Button
-Fully Responsive Design
-Smooth Animations & Modern Look
-Includes Booking System
-Free Domain Setup
-Free Hosting Setup

Perfect for small businesses, freelancers, personal brands, and home-based services!

Get connected, look professional — all for just RM299!
Message us now before slots run out! `,
      image: "/landing-websitesplus.jpg",
      wa: "https://wa.me/60132291201?text=I%20want%20Company%20Profile%20Website",
      sample: "https://chatbox-ct.vercel.app/",
    },
    {
      title: "Entry Website",
      price: "RM499",
      desc: `WEBSITES ONLY RM499!

Nerowork Service – Limited Time Offer

What's Included:

- 1 Custom Page (Homestay, Car Rental, Online Store, etc.)
- Professional Landing Page with Modern Design
- About Us Page
- Contact Us Page
- Simple Booking Form (connected to WhatsApp)
- Responsive Design
- Your Info & Images Included
- Social Media Links
- Basic SEO
- Favicon & Logo Setup

FREE BONUSES:
- QR Code to Your Website
- Google Maps Embed
- Basic Copywriting

Perfect For:
- Homestays
- Car & Van Rental
- Boutiques & Tailors
- Clinics, Salons, Makeup Artists
- Local Product Sellers
- Freelancers

RM499 one-time payment – 100% owned by you.
WhatsApp us now: 013-229 1201`,
      image: "/entry-websites.png",
      wa: "https://wa.me/60132291201?text=I%20want%20Entry%20Website",
      sample: "https://ljdweb.vercel.app/",
    },
    {
      title: "Premium Website",
      price: "RM1399",
      desc: `Website RM1399 – Full System Package!
Includes:
✔️ Booking System
✔️ Admin Panel
✔️ Login System
✔️ Database Setup
✔️ 2 Custom Pages

Perfect for homestays, service-based businesses, or online systems.
Modern & responsive design – ready to use!

Limited Time Offer – Chat with us now!`,
      image: "/advance-website.png",
      wa: "https://wa.me/60132291201?text=I%20want%20Church%20Website",
      sample: "https://altar-give.vercel.app/",
    },
    {
      title: "Advance Website",
      price: "RM2499",
      desc: `Website RM2499 – Premium Business System
Everything you need to run your business smoothly!

Includes:
✔️ Booking System
✔️ Admin Dashboard
✔️ Database Setup
✔️ 5 Custom Pages
✔️ Login System
✔️ Admin Panel + User Panel
✔️ QR Payment Integration

Ideal for service-based businesses, product sellers, clinics, beauty brands, or any online system.
Professional design, fast setup, mobile-friendly!

Own your system. One-time payment.
Limited Time Offer – Contact us now!`,
      image: "/premium-website.png",
      wa: "https://wa.me/60132291201?text=I%20want%20Donation%20Platform",
      sample: "https://www.biblerevivalz.com/",
    },
    {
      title: "Custom Website (Premium Plus)",
      price: "Custom Price",
      desc: `Custom Design. Custom Features. Custom Price.

Looking for something beyond basic?
We build websites that fit your brand, your style, and your business needs.

Popular Features:
✔️ AI Integration
✔️ Product Showcase
✔️ Modern UI/UX
✔️ Smart Search
✔️ Dark Mode Design
✔️ Full Custom System – You decide!

Perfect for:
Fashion Brands | E-commerce | Portfolios | Tech Startups | AI Projects | & More

Let’s build your dream website.
Contact us for a free consultation!
#NeroworkService | Trusted & Professional`,
      image: "/custom-website.png",
      wa: "https://wa.me/60132291201?text=I%20want%20Donation%20Platform",
      sample: "https://www.malaysiaairportcabtaxi.com/",
    },
  ];

  return (
    <section className="mt-24 max-w-6xl mx-auto px-4 relative z-10">
      <h2 className="text-2xl font-bold text-center text-purple-300 mb-10">
        Website Catalog
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {catalog.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white/5 border border-white/10 rounded-xl p-4 text-center shadow-md hover:shadow-purple-400/30 transition backdrop-blur-md"
          >
            <div
              onClick={() => setPreviewItem(item)}
              className="cursor-pointer overflow-hidden rounded-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                className="rounded-lg w-full h-[200px] object-cover brightness-75 hover:brightness-100 transition"
              />
            </div>
            <h3 className="text-lg font-bold text-purple-300 mt-3">{item.title}</h3>
            <p className="text-blue-400 font-semibold">{item.price}</p>
            <p className="text-sm text-gray-300 mt-1 line-clamp-2">{item.desc}</p>
            <div className="mt-4 flex justify-center gap-3 flex-wrap">
              <a
                href={item.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full transition"
              >
                WhatsApp Order
              </a>
              <a
                href={item.sample}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 hover:bg-purple-600 text-white text-sm px-4 py-2 rounded-full transition"
              >
                View Sample
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL COMPONENT */}
      <ModalPreview item={previewItem} onClose={() => setPreviewItem(null)} />
    </section>
  );
}
