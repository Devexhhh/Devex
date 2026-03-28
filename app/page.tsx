import PageLayout from "@/components/PageLayout";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Top violet radial bloom */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% -10%, rgba(124,58,237,0.18) 0%, transparent 70%)",
        }}
      />

      <Navbar />

      <PageLayout>
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </PageLayout>
    </>
  );
}
