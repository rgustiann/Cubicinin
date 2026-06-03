"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Apakah ini benar-benar gratis?",
    a: "Ya, kami mensubsidi biaya pembuatan website. Anda hanya membayar biaya sewa server dan perpanjangan domain sebesar Rp 750.000 per tahun agar website tetap online.",
  },
  {
    q: "Apa syarat domain .sch.id?",
    a: "Dokumen yang diperlukan: SK Pendirian Sekolah, KTP Kepala Sekolah, dan Surat Kuasa. Kami akan membantu mengurus seluruh prosesnya.",
  },
  {
    q: "Berapa lama prosesnya?",
    a: "Proses pembuatan website memakan waktu 3-7 hari kerja setelah seluruh data dan dokumen lengkap dari pihak sekolah.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          Pertanyaan yang Sering Diajukan
        </h2>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-gray-200"
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-900 transition hover:bg-gray-50 sm:text-base"
                  aria-expanded={isOpen}
                >
                  {faq.q}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gray-400 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <p className="border-t border-gray-100 px-5 py-4 text-sm leading-relaxed text-gray-600">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
