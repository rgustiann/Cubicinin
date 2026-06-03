import type { Metadata } from "next";
import MeshGradient from "@/components/MeshGradient";
import NoiseOverlay from "@/components/NoiseOverlay";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
      <Navbar />
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
