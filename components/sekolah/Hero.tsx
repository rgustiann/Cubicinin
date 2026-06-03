"use client";

import { motion } from "framer-motion";
import { Monitor, ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20program%20Website%20Sekolah%20Gratis";

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
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="relative z-10 overflow-hidden">
      <motion.div
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <motion.h1
              variants={itemVariants}
              className="font-serif text-3xl leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl"
            >
              Bawa Sekolah Anda ke Era Digital{" "}
              <span className="bg-gradient-to-r from-primary to-pink-300 bg-clip-text text-transparent">
                Tanpa Biaya Ratusan Juta
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-base leading-relaxed text-gray-700 sm:mt-6 sm:text-lg"
            >
              Dapatkan website sekolah profesional secara{" "}
              <strong className="text-primary">GRATIS</strong>. Anda hanya
              perlu berinvestasi pada biaya pemeliharaan server tahunan. Cepat,
              elegan, dan terima beres.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300/50 bg-white/90 px-6 py-3 text-base font-semibold text-gray-900 shadow-sm backdrop-blur-md transition-all hover:border-primary/40 hover:bg-white/95 hover:shadow-xl hover:shadow-primary/20"
              >
                Klaim Website Gratis Sekarang
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              className="relative w-full max-w-lg"
            >
              <div className="rounded-2xl border border-gray-200/50 bg-white/80 p-2 shadow-lg backdrop-blur-xl">
                <div className="flex items-center gap-1.5 border-b border-gray-200/50 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  <span className="ml-2 text-xs text-gray-400">
                    smkn1-prestasi.sch.id
                  </span>
                </div>
                <div className="flex aspect-[4/3] items-center justify-center">
                  <Monitor className="h-16 w-16 text-primary/30 sm:h-24 sm:w-24" />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border border-primary/10 bg-primary/5" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
