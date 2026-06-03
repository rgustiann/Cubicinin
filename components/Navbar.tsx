"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/6281234567890?text=Halo%20Cubicinin,%20saya%20tertarik%20untuk%20berkonsultasi.";

const navLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 flex items-center justify-between rounded-2xl border border-gray-200/50 bg-white/80 px-4 py-2.5 backdrop-blur-xl sm:px-6"
        >
          <Link href="/" className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-primary to-pink-300 bg-clip-text text-lg font-bold tracking-tight text-transparent sm:text-xl">
              Cubicinin
            </span>
          </Link>

          <div className="hidden items-center gap-8 sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {link.label}
              </Link>
            ))}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300/50 bg-white/90 px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur-md transition-all hover:border-gray-300/70 hover:bg-white/95 hover:shadow-lg hover:shadow-primary/20"
            >
              Hubungi Kami
            </motion.a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="text-gray-600 sm:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" as const }}
            className="mx-auto max-w-6xl overflow-hidden px-4 sm:px-6 lg:px-8"
          >
            <div className="mt-2 rounded-2xl border border-gray-200/50 bg-white/80 px-4 py-4 backdrop-blur-xl">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block w-full rounded-xl border border-gray-300/50 bg-white/90 px-4 py-2.5 text-center text-sm font-semibold text-gray-900 backdrop-blur-md"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
