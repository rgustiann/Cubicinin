import Navbar from "@/components/agency/Navbar";
import MeshGradient from "@/components/shared/MeshGradient";
import NoiseOverlay from "@/components/shared/NoiseOverlay";
import HeroAgency from "@/components/agency/HeroAgency";
import ServicesCatalog from "@/components/agency/ServicesCatalog";
import HowItWorks from "@/components/agency/HowItWorks";
import CTAAgency from "@/components/agency/CTAAgency";
import Footer from "@/components/shared/Footer";

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
