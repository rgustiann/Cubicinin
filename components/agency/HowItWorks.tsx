"use client";

import { Search, MessageSquare, Rocket } from "lucide-react";
import AnimatedSection from "./animations/AnimatedSection";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";

const steps = [
  {
    icon: Search,
    step: "1",
    title: "Pilih Layanan",
    desc: "Tentukan layanan digital yang sesuai dengan kebutuhan Anda dari katalog kami.",
  },
  {
    icon: MessageSquare,
    step: "2",
    title: "Konsultasi & Pengumpulan Data",
    desc: "Kami berdiskusi dengan Anda untuk memahami detail, mengumpulkan data, dan menyusun konsep.",
  },
  {
    icon: Rocket,
    step: "3",
    title: "Review & Peluncuran",
    desc: "Kami kerjakan, Anda review. Setelah sesuai, kami luncurkan dan serahkan sepenuhnya.",
  },
];

export default function HowItWorks() {
  return (
    <AnimatedSection id="cara-kerja" className="relative z-10 bg-white/60 backdrop-blur-[2px] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
            Proses Transparan, Hasil Maksimal
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Tiga langkah sederhana untuk mewujudkan proyek digital Anda.
          </p>
        </div>

        <StaggerContainer className="relative mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.title}>
                <div className="relative flex flex-col items-center text-center">
                  {i < steps.length - 1 && (
                    <div className="absolute top-8 left-[calc(50%+3rem)] hidden h-px w-[calc(100%-6rem)] bg-gradient-to-r from-primary/40 to-transparent md:block" />
                  )}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200/50 bg-white/80 backdrop-blur-xl shadow-sm">
                    <Icon className="h-7 w-7 text-primary" />
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border border-gray-300/50 bg-white/90 text-xs font-bold text-gray-900 backdrop-blur-md shadow-sm">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {step.desc}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
