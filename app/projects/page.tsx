import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
import BottomDock from "@/components/BottomDock";
import Link from "next/link";
import Footer from "@/components/Footer";
import PageLayout from "@/components/PageLayout";
import HorizontalSeparator from "@/app/ui/HorizontalSeparator";
import FloatingLines from "@/app/ui/FloatingLines";
import BackgroundFade from "../ui/BackgroundFade";

export default function ProjectsPage() {
    return (
        <>
            {/* Background */}
            <BackgroundFade className="fixed inset-0 z-0 opacity-30 sm:opacity-40 dark:opacity-60">
                <FloatingLines
                    enabledWaves={["top", "middle", "bottom"]}
                    lineCount={5}
                    lineDistance={5}
                    bendRadius={5}
                    bendStrength={-0.5}
                    interactive={true}
                    parallax={true}
                    linesGradient={["#7c3aed", "#a855f7", "#38bdf8"]}
                />
            </BackgroundFade>

            {/* Gradient Mask */}
            <div className="fixed inset-0 z-0 bg-gradient-to-b from-gray-50/80 via-transparent to-gray-50/90 dark:from-[#050505]/80 dark:via-transparent dark:to-[#050505]/90 pointer-events-none" />

            <Navbar />
            <BottomDock />

            <PageLayout>
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-[100px] sm:pt-[110px] md:pt-[120px]">

                    {/* Header */}
                    <div className="mb-10 sm:mb-12">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-[12px] text-black/50 hover:text-violet-600 dark:text-white/50 dark:hover:text-violet-400 transition-colors mb-6 sm:mb-8"
                        >
                            ← BACK TO HOME
                        </Link>

                        <h1
                            className="font-display font-mono text-black dark:text-[#f1f0ff] tracking-tight"
                            style={{ fontSize: "clamp(28px, 6vw, 36px)" }}
                        >
                            All Projects
                        </h1>

                        <p className="font-mono text-[12px] sm:text-[13px] text-black/60 dark:text-white/50 mt-3 sm:mt-4 max-w-[500px]">
                            A complete archive of the things I&apos;ve built, designed, and deployed.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {PROJECTS.map((p) => (
                            <ProjectCard key={p.title} project={p} />
                        ))}
                    </div>

                    <HorizontalSeparator className="mt-10 sm:mt-12" />
                </div>

                <Footer />
            </PageLayout>
        </>
    );
}