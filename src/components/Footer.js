"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6">
      {/* Purple Newsletter Box */}
     {/* Purple Newsletter Box with White Text */}
<div className="max-w-6xl mx-auto bg-purple-500 text-white rounded-2xl p-8 sm:p-12 text-center mb-16">
  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get discounts instantly</h2>
  <p className="text-sm sm:text-base mb-6 max-w-2xl mx-auto">
    To save you just have to log in to your account and look for the experiences with the green or yellow color code. On your first reservation you can enjoy a <strong className="text-white">10% discount</strong>.
  </p>
  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full sm:w-auto flex-1 px-4 py-2 rounded-full outline-none text-sm text-black"
    />
    <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-900 transition">
      Get started
    </button>
  </div>
</div>


      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {/* Newsletter Column */}
        <div>
          <h3 className="font-semibold mb-2">Sign up for our newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            Don’t worry, we reserve our newsletter for important news only.
          </p>
          <button className="border border-purple-400 text-purple-300 px-4 py-1 rounded-full text-sm hover:bg-purple-500/10 transition">
            Subscribe
          </button>
        </div>

        {/* Help Column */}
        <div>
          <h3 className="font-semibold mb-2">Help and services</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><Link href="#">How does it work</Link></li>
            <li><Link href="#">FAQS</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        {/* Explore Column */}
        <div>
          <h3 className="font-semibold mb-2">To explore</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><Link href="#">Accommodations</Link></li>
            <li><Link href="#">Experiences</Link></li>
            <li><Link href="#">Blog</Link></li>
          </ul>
        </div>

        {/* Other Column */}
        <div>
          <h3 className="font-semibold mb-2">Other possibilities</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><Link href="#">Give away</Link></li>
            <li><Link href="#">Subscribe</Link></li>
          </ul>
          {/* Store Buttons */}
          {/* <div className="flex gap-2 mt-4">
            <Image src="/appstore.png" alt="App Store" width={100} height={30} />
            <Image src="/playstore.png" alt="Google Play" width={100} height={30} />
          </div> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-400">
        <div className="flex justify-center gap-4 mb-2">
          <Link href="#"><i className="fab fa-facebook-f" /></Link>
          <Link href="#"><i className="fab fa-twitter" /></Link>
          <Link href="#"><i className="fab fa-instagram" /></Link>
        </div>
        <p>© {new Date().getFullYear()} Nerowork. All rights reserved.</p>
      </div>
    </footer>
  );
}
