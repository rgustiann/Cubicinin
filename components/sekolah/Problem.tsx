"use client";

import { motion } from "framer-motion";
import { DollarSign, Monitor, Globe } from "lucide-react";
import AnimatedSection from "../shared/animations/AnimatedSection";
import StaggerContainer from "../shared/animations/StaggerContainer";
import StaggerItem from "../shared/animations/StaggerItem";

const problems = [
  {
    icon: DollarSign,
    title: "Biaya Agensi Mahal",
    desc: "Pembuatan website sekolah di agensi bisa menghabiskan puluhan hingga ratusan juta rupiah — tidak terjangkau untuk banyak sekolah.",
  },
  {
    icon: Monitor,
    title: "Sulit Dikelola Guru",
    desc: "Website yang rumit membuat guru malas mengupdate konten. Akibatnya website jadi usang dan tidak terurus.",
  },
  {
    icon: Globe,
    title: "Bingung Urus Domain .sch.id",
    desc: "Proses pendaftaran domain .sch.id berbelit dan memakan waktu — banyak sekolah menyerah di tengah jalan.",
  },
];

export default function Problem() {
  return (
    <AnimatedSection className="relative z-10 bg-white/60 backdrop-blur-[2px] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
            Mengapa Banyak Sekolah Kesulitan Memiliki Website?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Kami memahami hambatan yang selama ini menghalangi sekolah
            mendapatkan website impian.
          </p>
        </div>

        <StaggerContainer className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -6 }}
                  className="h-full rounded-2xl border border-gray-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-white/90 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200/50 bg-white/80 backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-primary" />
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
