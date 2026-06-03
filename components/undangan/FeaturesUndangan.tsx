"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, MapPin, Gift, Image as ImageIcon, Sparkles } from "lucide-react";
import AnimatedSection from "../shared/animations/AnimatedSection";
import StaggerContainer from "../shared/animations/StaggerContainer";
import StaggerItem from "../shared/animations/StaggerItem";

const features = [
  {
    icon: ClipboardCheck,
    title: "RSVP Otomatis",
    desc: "Konfirmasi kehadiran tamu masuk langsung ke WhatsApp Anda. Pantau siapa saja yang akan hadir secara real-time.",
  },
  {
    icon: MapPin,
    title: "Navigasi Peta Terintegrasi",
    desc: "Tamu bisa langsung membuka lokasi acara via Google Maps dari undangan. Tidak perlu buka aplikasi terpisah.",
  },
  {
    icon: Gift,
    title: "Amplop Digital",
    desc: "Fitur cashless wedding gift / angpao online. Tamu bisa mengirim hadiah langsung melalui OVO, GoPay, atau transfer bank.",
  },
  {
    icon: ImageIcon,
    title: "Galeri Perjalanan Cinta",
    desc: "Slider foto & video pre-wedding interaktif. Ceritakan perjalanan cinta Anda dalam galeri yang memukau.",
  },
];

export default function FeaturesUndangan() {
  return (
    <AnimatedSection
      id="katalog"
      className="relative z-10 bg-white/60 backdrop-blur-[2px] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-rose-200/50 bg-rose-50/80 px-4 py-1 text-xs font-medium text-rose-600 backdrop-blur-md">
            <Sparkles className="h-3 w-3" />
            Fitur Unggulan
          </div>
          <h2 className="font-serif text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
            Lebih dari Sekadar Undangan Biasa
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Setiap fitur dirancang untuk memberikan kemudahan dan kesan
            eksklusif bagi Anda dan tamu undangan.
          </p>
        </div>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="group h-full rounded-2xl border border-rose-200/30 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all hover:border-rose-300/50 hover:bg-white/90 hover:shadow-xl hover:shadow-rose-200/20"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 text-rose-500 shadow-sm backdrop-blur-sm transition group-hover:scale-110 group-hover:from-rose-200 group-hover:to-pink-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
