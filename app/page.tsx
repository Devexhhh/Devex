import PageLayout from "@/components/PageLayout";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SoftAurora from "./ui/SoftAurora";
import BottomDock from "@/components/BottomDock";

export default function Home() {
  return (
    <>
      {/* 1. The WebGL Aurora Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={0.5}
          color1="#f7f7f7"
          color2="#e100ff"
          noiseFrequency={2.5}
          noiseAmplitude={2}
          bandHeight={0.5}
          bandSpread={2}
          octaveDecay={0.2}
          layerOffset={0.8}
          colorSpeed={2}
          enableMouseInteraction
          mouseInfluence={0.25}
        />
      </div>

      {/* 2. Darkening blend layer so your text remains readable */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[#050505]/70 mix-blend-multiply" />

      <Navbar />
      <BottomDock />

      <PageLayout>
        <HeroSection />
        <ExperienceSection />
        <WorkSection />
        <ContactSection />
        <Footer />
      </PageLayout>
    </>
  );
}