import Navbar from "@/components/Navbar";
import MeshGradient from "@/components/MeshGradient";
import NoiseOverlay from "@/components/NoiseOverlay";
import HeroAgency from "@/components/HeroAgency";
import ServicesCatalog from "@/components/ServicesCatalog";
import HowItWorks from "@/components/HowItWorks";
import CTAAgency from "@/components/CTAAgency";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <MeshGradient />
      <NoiseOverlay />
      <Navbar />
      <main className="relative z-10 flex-1">
        <HeroAgency />
        <ServicesCatalog />
        <HowItWorks />
        <CTAAgency />
      </main>
      <Footer />
    </>
  );
}
