"use client";

import { motion } from "framer-motion";
import { GraduationCap, Heart, MessageCircle } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "../shared/animations/AnimatedSection";
import StaggerContainer from "../shared/animations/StaggerContainer";
import StaggerItem from "../shared/animations/StaggerItem";

const services = [
  {
    icon: GraduationCap,
    title: "Website Sekolah Gratis",
    desc: "Digitalisasi sekolah tanpa biaya ratusan juta. Dapatkan website profesional GRATIS, bayar hanya sewa server tahunan.",
    href: "/layanan/website-sekolah",
  },
  {
    icon: Heart,
    title: "Undangan Digital Premium",
    desc: "Sebarkan momen bahagia Anda dengan elegan. Undangan pernikahan, akikah, dan acara spesial lainnya dalam bentuk digital yang memukau.",
    href: "/layanan/undangan-digital",
  },
  {
    icon: MessageCircle,
    title: "Surat Digital (Confess/Ucapan)",
    desc: "Sampaikan perasaan tak terucap lewat halaman interaktif. Surat digital untuk confess, ucapan terima kasih, atau pesan spesial.",
    href: "/layanan/surat-digital",
  },
];

export default function ServicesCatalog() {
  return (
    <AnimatedSection id="layanan" className="relative z-10 bg-white/60 backdrop-blur-[2px] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
            Katalog Layanan Cubicinin
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Pilih layanan digital yang Anda butuhkan hari ini.
          </p>
        </div>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -8 }}
                  className="group relative h-full rounded-2xl border border-gray-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all hover:border-primary/40 hover:bg-white/90 hover:shadow-2xl hover:shadow-primary/15"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-purple-600/30 text-white shadow-sm backdrop-blur-sm transition group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {service.desc}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
                  >
                    Lihat Detail &rarr;
                  </Link>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
