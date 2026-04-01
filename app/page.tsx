import PageLayout from "@/components/PageLayout";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SoftAurora from "./ui/SoftAurora";
import BottomDock from "@/components/BottomDock";
import BackgroundFade from "@/app/ui/BackgroundFade"; // <-- Import it
import ScrollReveal from "./ui/ScrollReveal";
import HorizontalSeparator from "./ui/HorizontalSeparator";
import ActivityGrid from "@/components/ActivityGrid";

export default function Home() {
  return (
    <>
      {/* Wrap the fixed background in the fade component */}
      <BackgroundFade className="fixed inset-0 pointer-events-none z-0">
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
          mouseInfluence={0.4}
        />
      </BackgroundFade>

      <div className="fixed inset-0 pointer-events-none z-0 bg-[#050505]/70 mix-blend-multiply" />

      <Navbar />
      <BottomDock />

      <PageLayout>
        <ScrollReveal yOffset={20}>
          <HeroSection />
        </ScrollReveal>

        <ScrollReveal>
          <div className="px-6">
            <HorizontalSeparator className="mt-16" />
            <ActivityGrid />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <ExperienceSection />
        </ScrollReveal>

        <ScrollReveal>
          <WorkSection />
        </ScrollReveal>

        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>

        <Footer />
      </PageLayout>
    </>
  );
}