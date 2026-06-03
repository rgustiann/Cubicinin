import type { Metadata } from "next";
import MeshGradient from "@/components/shared/MeshGradient";
import NoiseOverlay from "@/components/shared/NoiseOverlay";
import NavbarSurat from "@/components/surat/NavbarSurat";
import HeroSurat from "@/components/surat/HeroSurat";
import Momen from "@/components/surat/Momen";
import FeaturesSurat from "@/components/surat/FeaturesSurat";
import HowItWorksSurat from "@/components/surat/HowItWorksSurat";
import SuratCTA from "@/components/surat/SuratCTA";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Surat Digital - Cubicinin",
  description:
    "Kirim surat digital interaktif dengan musik latar, animasi, dan tautan personal. Cocok untuk confession, ucapan ulang tahun, atau permintaan maaf.",
};

export default function SuratDigitalPage() {
  return (
    <>
      <MeshGradient />
      <NoiseOverlay />
      <NavbarSurat />
      <main className="relative z-10 flex-1">
        <HeroSurat />
        <Momen />
        <FeaturesSurat />
        <HowItWorksSurat />
        <SuratCTA />
      </main>
      <Footer />
    </>
  );
}
