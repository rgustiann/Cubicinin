"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "../shared/animations/AnimatedSection";
import StaggerContainer from "../shared/animations/StaggerContainer";
import StaggerItem from "../shared/animations/StaggerItem";

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
    <AnimatedSection className="relative z-10 bg-white/60 backdrop-blur-[2px] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <StaggerContainer className="mt-10 space-y-3" delay={0.1}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <StaggerItem key={i}>
                <div className="overflow-hidden rounded-2xl border border-gray-200/50 bg-white/80 backdrop-blur-xl">
                  <motion.button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-900 sm:text-base"
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                    aria-expanded={isOpen}
                  >
                    {faq.q}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" as const }}
                    >
                      <ChevronDown className="h-5 w-5 shrink-0 text-gray-400" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.3, ease: "easeInOut" as const },
                          opacity: { duration: 0.25, ease: "easeInOut" as const },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-gray-200/50 px-5 py-4 text-sm leading-relaxed text-gray-600">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
