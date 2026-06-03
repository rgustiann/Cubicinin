"use client";

import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/6281234567890?text=Halo%20Cubicinin,%20saya%20tertarik%20untuk%20berkonsultasi.";

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

export default function HeroAgency() {
  return (
    <section className="relative z-10 overflow-hidden">
      <motion.div
        className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-44"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200/50 bg-white/80 px-4 py-1.5 text-xs font-medium text-gray-700 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Digital Experience Agency
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl leading-tight tracking-tight text-black sm:text-5xl lg:text-7xl"
          >
            Pabrik Pengalaman{" "}
            <span className="bg-gradient-to-r from-primary via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Digital
            </span>{" "}
            Anda.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg"
          >
            Dari undangan pernikahan yang elegan, surat digital yang berkesan,
            hingga website instansi profesional. Kami meracik teknologi menjadi
            pengalaman manis untuk setiap momen Anda.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="#layanan"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300/50 bg-white/90 px-7 py-3.5 text-base font-semibold text-gray-900 shadow-sm backdrop-blur-md transition-all hover:border-gray-300/70 hover:bg-white/95 hover:shadow-xl hover:shadow-primary/20"
            >
              Eksplorasi Layanan
              <ArrowDown className="h-4 w-4" />
            </motion.a>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200/50 bg-white/80 px-7 py-3.5 text-base font-semibold text-gray-700 shadow-sm backdrop-blur-md transition-all hover:border-gray-300/60 hover:bg-white/95 hover:text-gray-900 hover:shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
              Konsultasi Gratis
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
