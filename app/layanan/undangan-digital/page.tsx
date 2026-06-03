import type { Metadata } from "next";
import MeshGradient from "@/components/shared/MeshGradient";
import NoiseOverlay from "@/components/shared/NoiseOverlay";
import NavbarUndangan from "@/components/undangan/NavbarUndangan";
import HeroUndangan from "@/components/undangan/HeroUndangan";
import FeaturesUndangan from "@/components/undangan/FeaturesUndangan";
import PricingUndangan from "@/components/undangan/PricingUndangan";
import CTAUndangan from "@/components/undangan/CTAUndangan";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Undangan Digital Premium - Cubicinin",
  description:
    "Undangan pernikahan digital interaktif dengan desain premium. RSVP otomatis, navigasi peta, amplop digital, dan galeri foto.",
};

export default function UndanganDigitalPage() {
  return (
    <>
      <MeshGradient />
      <NoiseOverlay />
      <NavbarUndangan />
      <main className="relative z-10 flex-1">
        <HeroUndangan />
        <FeaturesUndangan />
        <PricingUndangan />
        <CTAUndangan />
      </main>
      <Footer />
    </>
  );
}
