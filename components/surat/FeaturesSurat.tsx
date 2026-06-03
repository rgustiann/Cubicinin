"use client";

import { motion } from "framer-motion";
import { Link2, Music, Star, ShieldCheck, Sparkles } from "lucide-react";
import AnimatedSection from "../shared/animations/AnimatedSection";
import StaggerContainer from "../shared/animations/StaggerContainer";
import StaggerItem from "../shared/animations/StaggerItem";

const features = [
  {
    icon: Link2,
    title: "Custom Link",
    desc: "Dapatkan tautan unik seperti cubicinin.com/untuk/nama-dia yang bisa kamu bagikan kapan saja.",
  },
  {
    icon: Music,
    title: "Pemutar Musik Latar",
    desc: "Lagu indie/R&B favorit kalian berdua otomatis berputar saat halaman dibuka. Bikin makin haru!",
  },
  {
    icon: Star,
    title: "Animasi Interaktif",
    desc: "Teks muncul perlahan, efek bintang jatuh, dan kejutan animasi lain yang bikin surat makin hidup.",
  },
  {
    icon: ShieldCheck,
    title: "Garansi Kerahasiaan",
    desc: "Jika kamu memilih opsi anonim, identitasmu 100% aman. Hanya dia yang bisa membaca pesanmu.",
  },
];

export default function FeaturesSurat() {
  return (
    <AnimatedSection className="relative z-10 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-200/50 bg-amber-50/80 px-4 py-1 text-xs font-medium text-amber-700 backdrop-blur-md">
            <Sparkles className="h-3 w-3" />
            Keistimewaan
          </div>
          <h2 className="font-serif text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
            Apa yang Membuatnya Spesial?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Bukan sekadar teks — setiap surat digital dirangkai dengan hati dan
            sentuhan teknologi.
          </p>
        </div>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="group flex items-start gap-4 rounded-2xl border border-amber-200/20 bg-white/80 p-5 shadow-sm backdrop-blur-xl transition-all hover:border-amber-300/40 hover:bg-white/90 hover:shadow-lg hover:shadow-amber-200/15"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 text-amber-500 shadow-sm backdrop-blur-sm transition group-hover:scale-110 group-hover:from-amber-200 group-hover:to-orange-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
