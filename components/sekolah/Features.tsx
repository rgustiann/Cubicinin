"use client";

import { motion } from "framer-motion";
import { Palette, Users, BadgeCheck } from "lucide-react";
import AnimatedSection from "../shared/animations/AnimatedSection";
import StaggerContainer from "../shared/animations/StaggerContainer";
import StaggerItem from "../shared/animations/StaggerItem";

const features = [
  {
    icon: Palette,
    title: "Desain Premium & Responsif",
    desc: "Tampilan elegan yang menyesuaikan di HP, tablet, maupun desktop. Mencerminkan kredibilitas sekolah Anda.",
  },
  {
    icon: Users,
    title: "Sistem Admin Super Mudah",
    desc: "Guru non-teknis pun bisa mengelola konten dengan mudah. Tinggal klik, tulis, dan publish — tanpa ribet.",
  },
  {
    icon: BadgeCheck,
    title: "Bantuan Pendaftaran Domain .sch.id",
    desc: "Kami uruskan seluruh proses pendaftaran domain .sch.id dari awal hingga aktif. Anda tinggal tanda tangan.",
  },
];

export default function Features() {
  return (
    <AnimatedSection className="relative z-10 bg-white/60 backdrop-blur-[2px] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
            Solusi Cerdas untuk Sekolah Anda
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Kami hadirkan solusi lengkap agar sekolah Anda bisa online tanpa
            pusing urusan teknis.
          </p>
        </div>

        <StaggerContainer className="mt-10 grid gap-8 lg:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -6 }}
                  className="group relative h-full rounded-2xl border border-gray-200/50 bg-white/80 p-6 text-center shadow-sm backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-white/90 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200/50 bg-white/80 shadow-sm backdrop-blur-sm transition group-hover:scale-110 group-hover:border-primary/30 group-hover:bg-white/95 group-hover:shadow-lg">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
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
