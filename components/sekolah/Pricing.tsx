"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import AnimatedSection from "../shared/animations/AnimatedSection";
import StaggerContainer from "../shared/animations/StaggerContainer";
import StaggerItem from "../shared/animations/StaggerItem";

const items = [
  { label: "Biaya Desain & Pembuatan Web", value: "Rp 0", free: true },
  { label: "Biaya Jasa Input Konten Awal", value: "Rp 0", free: true },
  {
    label: "Sewa Server & Perpanjangan Domain",
    value: "Rp 750.000 / Tahun",
    free: false,
  },
];

export default function Pricing() {
  return (
    <AnimatedSection className="relative z-10 bg-white/60 backdrop-blur-[2px] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
            Transparansi Biaya Kami
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Tidak ada biaya tersembunyi. Hanya satu biaya tahunan yang
            transparan.
          </p>
        </div>

        <StaggerContainer
          className="mt-10 overflow-hidden rounded-2xl border border-gray-200/50 bg-white/80 shadow-sm backdrop-blur-xl"
          delay={0.15}
        >
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-b border-gray-200/50 bg-white/80 px-6 py-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">Rincian Biaya</h3>
          </motion.div>

          <ul>
            {items.map((item) => (
              <StaggerItem key={item.label}>
                <motion.li
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="flex items-center justify-between border-b border-gray-100/50 px-6 py-4 transition-colors last:border-0 sm:px-8"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: item.free ? 0 : 90 }}
                      className={`flex h-6 w-6 items-center justify-center rounded-full border border-gray-200/50 backdrop-blur-sm ${
                        item.free ? "bg-green-500/20" : "bg-primary/20"
                      }`}
                    >
                      {item.free ? (
                        <Check className="h-4 w-4 text-green-400" />
                      ) : (
                        <X className="h-4 w-4 text-primary" />
                      )}
                    </motion.div>
                    <span className="text-sm font-medium text-gray-700 sm:text-base">
                      {item.label}
                    </span>
                  </div>
                  <span
                    className={`ml-4 whitespace-nowrap text-sm font-semibold sm:text-base ${
                      item.free ? "text-green-400" : "text-primary"
                    }`}
                  >
                    {item.value}
                  </span>
                </motion.li>
              </StaggerItem>
            ))}
          </ul>
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
