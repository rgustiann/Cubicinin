"use client";

import { BookOpen, Building2, GraduationCap, Library, Microscope, Music } from "lucide-react";
import Marquee from "../shared/Marquee";
import AnimatedSection from "../shared/animations/AnimatedSection";

const schools = [
  { name: "SMKN 1 Jakarta", icon: Building2 },
  { name: "SMA Prestasi Bangsa", icon: GraduationCap },
  { name: "MAN 2 Surabaya", icon: BookOpen },
  { name: "SD IT Al-Fath", icon: Library },
  { name: "SMPN 5 Bandung", icon: Microscope },
  { name: "SMK Seni Budaya", icon: Music },
];

const card = (s: (typeof schools)[number]) => {
  const Icon = s.icon;
  return (
    <div
      key={s.name}
      className="flex items-center gap-3 rounded-xl border border-gray-200/50 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-md"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200/50 bg-white/80 backdrop-blur-sm">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <span className="whitespace-nowrap text-sm font-medium text-gray-600">
        {s.name}
      </span>
    </div>
  );
};

export default function Showcase() {
  return (
    <AnimatedSection className="relative z-10 bg-white/60 backdrop-blur-[2px]">
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
              Sekolah yang Sudah Bergabung
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Bergabung dengan puluhan sekolah lain yang telah memiliki website
              profesional gratis.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <Marquee direction="left" speed={30}>
            {schools.map(card)}
          </Marquee>
          <Marquee direction="right" speed={25}>
            {schools.map(card)}
          </Marquee>
        </div>
      </div>
    </AnimatedSection>
  );
}
