"use client";

import { motion } from "framer-motion";
import { Heart, Cake, HeartHandshake } from "lucide-react";
import AnimatedSection from "../shared/animations/AnimatedSection";
import StaggerContainer from "../shared/animations/StaggerContainer";
import StaggerItem from "../shared/animations/StaggerItem";

const moments = [
  {
    icon: Heart,
    title: "Secret Confession",
    desc: "Ungkapkan perasaan tanpa rasa canggung. Buat halaman spesial yang hanya bisa dibaca oleh dia seorang.",
  },
  {
    icon: Cake,
    title: "Birthday Surprise",
    desc: "Kejutan tengah malam dengan hitung mundur otomatis. Surat digital yang muncul tepat di hari istimewanya.",
  },
  {
    icon: HeartHandshake,
    title: "Apology Letter",
    desc: "Permintaan maaf yang tulus dan berkesan. Rangkai kata-kata dengan latar musik favorit kalian berdua.",
  },
];

export default function Momen() {
  return (
    <AnimatedSection className="relative z-10 bg-white/60 backdrop-blur-[2px] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
            Sempurna Untuk Setiap Momen
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Apapun perasaanmu, selalu ada cara indah untuk menyampaikannya.
          </p>
        </div>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {moments.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -6 }}
                  className="group h-full rounded-2xl border border-amber-200/30 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all hover:border-amber-300/50 hover:bg-white/90 hover:shadow-xl hover:shadow-amber-200/20"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 text-amber-500 shadow-sm backdrop-blur-sm transition group-hover:scale-110 group-hover:from-amber-200 group-hover:to-orange-200">
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
