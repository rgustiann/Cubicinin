"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/6281234567890?text=Halo%20Cubicinin,%20saya%20ingin%20memesan%20Surat%20Digital.";

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

export default function HeroSurat() {
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
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200/50 bg-amber-50/80 px-4 py-1.5 text-xs font-medium text-amber-700 backdrop-blur-md"
            >
              <Sparkles className="h-3 w-3" />
              Digital Love Letter
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-serif text-3xl leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl"
            >
              Sampaikan Perasaan yang{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">
                Tak Sempat Terucap
              </span>
              .
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-base leading-relaxed text-gray-600 sm:mt-5 sm:text-lg"
            >
              Ucapkan selamat ulang tahun, minta maaf, atau confess perasaanmu
              lewat halaman web interaktif yang personal, lengkap dengan lagu
              favorit kalian.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-400 px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:shadow-lg hover:shadow-amber-300/30"
              >
                <Sparkles className="h-4 w-4" />
                Pesan Surat Digital (Hanya Rp 49.000)
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
              <div className="relative rounded-2xl border border-amber-200/30 bg-gradient-to-br from-white/90 via-amber-50/50 to-white/90 p-5 shadow-xl backdrop-blur-xl sm:p-7">
                {/* Music player bar */}
                <div className="mb-4 flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                    <div className="h-2 w-2 rounded-full bg-amber-400" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 w-28 rounded-full bg-white/80" />
                    <div className="mt-1 h-1.5 w-20 rounded-full bg-white/60" />
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-4 w-0.5 animate-pulse rounded-full bg-amber-400"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Envelope icon */}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 shadow-inner">
                  <svg
                    className="h-8 w-8 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>

                {/* Text preview */}
                <div className="space-y-2 text-center">
                  <div className="h-2 w-36 rounded-full bg-amber-200 mx-auto" />
                  <div className="h-2 w-44 rounded-full bg-amber-100 mx-auto" />
                  <div className="h-2 w-28 rounded-full bg-amber-100 mx-auto" />
                  <div className="mt-4 h-px w-full bg-amber-200/50" />
                  <div className="flex items-center justify-center gap-1 text-xs text-amber-500">
                    <Sparkles className="h-3 w-3" />
                    <span>cubicinin.com/untuk/kamu</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border border-amber-200/20 bg-amber-50/20" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
