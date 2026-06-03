"use client";

import { motion } from "framer-motion";
import { Smartphone, MessageCircle, ChevronDown } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/6281234567890?text=Halo%20Cubicinin,%20saya%20tertarik%20dengan%20layanan%20Undangan%20Digital%20Premium.";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function HeroUndangan() {
  return (
    <section className="relative z-10 overflow-hidden">
      <motion.div
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-200/50 bg-rose-50/80 px-4 py-1.5 text-xs font-medium text-rose-600 backdrop-blur-md"
            >
              <HeartIcon />
              Premium Digital Invitation
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-serif text-3xl leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl"
            >
              Sebarkan Kabar Bahagia dengan{" "}
              <span className="bg-gradient-to-r from-rose-500 to-pink-400 bg-clip-text text-transparent">
                Elegan
              </span>
              .
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-base leading-relaxed text-gray-600 sm:mt-5 sm:text-lg"
            >
              Undangan pernikahan digital interaktif dengan desain premium. Buat
              tamu Anda terkesan sebelum acara dimulai.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <motion.a
                href="#katalog"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:shadow-lg hover:shadow-rose-300/30"
              >
                Lihat Katalog Desain
                <ChevronDown className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200/50 bg-white/80 px-6 py-3 text-base font-semibold text-gray-700 shadow-sm backdrop-blur-md transition-all hover:border-gray-300/60 hover:bg-white/95 hover:text-gray-900 hover:shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                Konsultasi via WA
              </motion.a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="relative"
            >
              <div className="relative mx-auto w-56 rounded-[2.5rem] border-4 border-gray-800 bg-white p-3 shadow-2xl sm:w-64">
                <div className="mb-2 flex items-center justify-center">
                  <div className="h-1.5 w-16 rounded-full bg-gray-800" />
                </div>
                <div className="overflow-hidden rounded-xl bg-gradient-to-b from-rose-50 to-white">
                  <div className="p-4 text-center">
                    <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-gradient-to-br from-rose-300 to-pink-200" />
                    <div className="h-2 w-24 rounded-full bg-gray-200 mx-auto" />
                    <div className="mt-2 h-2 w-32 rounded-full bg-gray-100 mx-auto" />
                    <div className="mt-4 space-y-2">
                      <div className="h-1.5 w-full rounded-full bg-rose-100" />
                      <div className="h-1.5 w-3/4 rounded-full bg-rose-100" />
                      <div className="h-1.5 w-5/6 rounded-full bg-rose-100" />
                    </div>
                    <div className="mt-4 mx-auto h-8 w-24 rounded-full bg-gradient-to-r from-rose-400 to-pink-400" />
                    <div className="mt-3 flex justify-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-rose-300" />
                      <div className="h-2 w-2 rounded-full bg-rose-200" />
                      <div className="h-2 w-2 rounded-full bg-rose-300" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[2.5rem] border border-rose-200/40 bg-rose-50/30" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function HeartIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}
