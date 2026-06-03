import type { Metadata } from "next";
import MeshGradient from "@/components/shared/MeshGradient";
import NoiseOverlay from "@/components/shared/NoiseOverlay";
import NavbarSekolah from "@/components/sekolah/NavbarSekolah";
import Hero from "@/components/sekolah/Hero";
import Showcase from "@/components/sekolah/Showcase";
import Problem from "@/components/sekolah/Problem";
import Features from "@/components/sekolah/Features";
import Pricing from "@/components/sekolah/Pricing";
import FAQ from "@/components/sekolah/FAQ";
import CTA from "@/components/sekolah/CTA";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Website Sekolah Gratis - Cubicinin",
  description:
    "Dapatkan website sekolah profesional GRATIS. Bayar hanya untuk sewa server & domain tahunan. Cepat, elegan, dan terima beres.",
};

export default function WebsiteSekolahPage() {
  return (
    <>
      <MeshGradient />
      <NoiseOverlay />
      <NavbarSekolah />
      <main className="relative z-10 flex-1">
        <Hero />
        <Showcase />
        <Problem />
        <Features />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
