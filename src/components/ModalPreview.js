// components/ModalPreview.js
"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ModalPreview({ item, onClose }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="max-w-4xl w-full bg-white/5 border border-white/10 rounded-xl p-6 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-purple-300 mb-1">{item.title}</h3>
            <p className="text-blue-400 font-semibold mb-4 text-lg">{item.price}</p>
            <p className="text-sm text-gray-300 whitespace-pre-line leading-relaxed mb-6">
              {item.details || item.desc}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
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
            <p className="text-center text-xs text-gray-500 mt-4">Click outside to close</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
