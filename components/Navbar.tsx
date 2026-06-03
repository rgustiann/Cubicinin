"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20program%20Website%20Sekolah%20Gratis";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <span className="text-lg font-bold tracking-tight text-blue-700 sm:text-xl">
          PendidikanDigital.id
        </span>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 sm:inline-flex"
        >
          Konsultasi Gratis
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-100 px-4 pb-4 pt-2 sm:hidden">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-lg bg-blue-700 px-4 py-2.5 text-center text-sm font-semibold text-white"
          >
            Konsultasi Gratis
          </a>
        </div>
      )}
    </nav>
  );
}
