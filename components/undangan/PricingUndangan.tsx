"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import AnimatedSection from "../shared/animations/AnimatedSection";
import StaggerContainer from "../shared/animations/StaggerContainer";
import StaggerItem from "../shared/animations/StaggerItem";

const plans = [
  {
    name: "Paket Silver",
    price: "Rp 350K",
    tagline: "Fitur esensial untuk momen berkesan",
    features: [
      "Desain undangan premium (3 revisi)",
      "RSVP otomatis ke WhatsApp",
      "Navigasi Google Maps",
      "Amplop digital (transfer)",
      "Galeri foto (10 foto)",
      "Durasi 3 bulan online",
      "Waktu pengerjaan 3 hari",
    ],
    highlighted: false,
  },
  {
    name: "Paket Gold",
    price: "Rp 650K",
    tagline: "Fitur lengkap tanpa batas",
    features: [
      "Desain undangan premium (revisi tak terbatas)",
      "RSVP otomatis ke WhatsApp",
      "Navigasi Google Maps",
      "Amplop digital (transfer & e-wallet)",
      "Galeri foto & video (tanpa batas)",
      "Custom lagu latar",
      "Domain khusus nama-pasangan.com",
      "Durasi 12 bulan online",
      "Waktu pengerjaan 5 hari",
    ],
    highlighted: true,
  },
];

export default function PricingUndangan() {
  return (
    <AnimatedSection className="relative z-10 bg-white/60 backdrop-blur-[2px] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
            Pilih Paket Momen Anda
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Sesuaikan dengan kebutuhan — semua paket sudah termasuk desain
            premium dan dukungan penuh.
          </p>
        </div>

        <StaggerContainer className="mt-12 grid gap-8 lg:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                whileHover={{ scale: 1.03, y: -6 }}
                className={`relative h-full rounded-2xl border p-8 shadow-sm backdrop-blur-xl transition-all ${
                  plan.highlighted
                    ? "border-rose-300/50 bg-gradient-to-b from-white/90 to-rose-50/80 hover:shadow-xl hover:shadow-rose-200/20"
                    : "border-gray-200/50 bg-white/80 hover:border-rose-200/40 hover:shadow-xl hover:shadow-rose-200/10"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-1 text-xs font-semibold text-white shadow-sm">
                    <Sparkles className="h-3 w-3" />
                    Paling Populer
                  </div>
                )}

                <div className={plan.highlighted ? "pt-2" : ""}>
                  <h3 className="text-xl font-bold text-black">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{plan.tagline}</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-black">
                      {plan.price}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-sm text-gray-600">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="https://wa.me/6281234567890?text=Halo%20Cubicinin,%20saya%20tertarik%20dengan%20Undangan%20Digital%20Premium."
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold shadow-sm transition-all ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:shadow-lg hover:shadow-rose-300/30"
                        : "border border-gray-200/50 bg-white/90 text-gray-900 hover:border-rose-200/40 hover:shadow-md"
                    }`}
                  >
                    Pilih {plan.name}
                  </motion.a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
