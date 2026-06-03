"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const serviceLinks = [
  { label: "Website Sekolah Gratis", href: "/layanan/website-sekolah" },
  { label: "Undangan Digital Premium", href: "#" },
  { label: "Surat Digital", href: "#" },
];

export default function Footer() {
  return (
    <motion.footer
      id="kontak"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative z-10 border-t border-gray-100/50"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <span className="bg-gradient-to-r from-primary to-pink-300 bg-clip-text text-lg font-bold tracking-tight text-transparent">
              Cubicinin
            </span>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Pabrik pengalaman digital Anda. Dari undangan, surat digital,
              hingga website — kami wujudkan dengan hati.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-700">
              Layanan
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-700">
              Ikuti Kami
            </h4>
            <div className="flex gap-3">
              {["Instagram", "Facebook", "TikTok"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="rounded-xl border border-gray-200/50 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-gray-600 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-white/90 hover:text-gray-900"
                >
                  {platform}
                </a>
              ))}
            </div>
            <a
              href="mailto:halo@cubicinin.id"
              className="mt-4 block text-sm text-gray-500 underline underline-offset-2 transition-colors hover:text-primary"
            >
              halo@cubicinin.id
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100/50 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Cubicinin. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
}
