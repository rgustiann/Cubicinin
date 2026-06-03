"use client";

import { Palette, FileText, Link2, Sparkles } from "lucide-react";
import AnimatedSection from "../shared/animations/AnimatedSection";
import StaggerContainer from "../shared/animations/StaggerContainer";
import StaggerItem from "../shared/animations/StaggerItem";

const steps = [
  {
    icon: Palette,
    step: "1",
    title: "Pilih Tema Visual",
    desc: "Tentukan suasana suratmu — dari vintage, modern minimalis, hingga playful dengan animasi bintang.",
  },
  {
    icon: FileText,
    step: "2",
    title: "Kirim Teks & Musik",
    desc: "Tulis pesanmu dan sertakan link lagu YouTube/Spotify favorit yang akan menemani momen haru.",
  },
  {
    icon: Link2,
    step: "3",
    title: "Link Surat Siap",
    desc: "Dalam 24 jam, link surat digitalmu sudah jadi. Tinggal kirim ke dia — atau biarkan dia yang menemukan.",
  },
];

export default function HowItWorksSurat() {
  return (
    <AnimatedSection className="relative z-10 bg-white/60 backdrop-blur-[2px] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-200/50 bg-amber-50/80 px-4 py-1 text-xs font-medium text-amber-700 backdrop-blur-md">
            <Sparkles className="h-3 w-3" />
            Cara Kerja
          </div>
          <h2 className="font-serif text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
            Tiga Langkah Mudah
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Dari ide hingga tautan siap kirim — lebih cepat dari yang kamu
            bayangkan.
          </p>
        </div>

        <StaggerContainer className="relative mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.title}>
                <div className="relative flex flex-col items-center text-center">
                  {i < steps.length - 1 && (
                    <div className="absolute top-8 left-[calc(50%+3rem)] hidden h-px w-[calc(100%-6rem)] bg-gradient-to-r from-amber-300/40 to-transparent md:block" />
                  )}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-200/30 bg-white/80 backdrop-blur-xl shadow-sm">
                    <Icon className="h-7 w-7 text-amber-500" />
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border border-amber-200/40 bg-white/90 text-xs font-bold text-amber-600 backdrop-blur-md shadow-sm">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-black">
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
