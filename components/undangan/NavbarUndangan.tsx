"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Heart } from "lucide-react";
import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/6281234567890?text=Halo%20Cubicinin,%20saya%20tertarik%20dengan%20layanan%20Undangan%20Digital%20Premium.";

export default function NavbarUndangan() {
  return (
    <nav className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 flex items-center justify-between rounded-2xl border border-rose-200/30 bg-white/80 px-4 py-2.5 backdrop-blur-xl sm:px-6"
        >
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-rose-400" />
            <span className="text-sm font-semibold text-gray-900 sm:text-base">
              Cubicinin
            </span>
            <span className="hidden text-sm text-gray-400 sm:inline">|</span>
            <span className="hidden text-sm text-gray-500 sm:inline">
              Undangan Digital
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Kembali ke Beranda</span>
              <span className="sm:hidden">Beranda</span>
            </Link>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-lg hover:shadow-rose-300/30"
            >
              Pesan Sekarang
            </motion.a>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
