// app/projects/page.tsx

import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";// Adjust import path if needed
import Navbar from "@/components/Navbar";         // Adjust import path if needed
import BottomDock from "@/components/BottomDock";  // Adjust import path if needed
import Link from "next/link";
import Footer from "@/components/Footer";
import PageLayout from "@/components/PageLayout";
import HorizontalSeparator from "../ui/HorizontalSeparator";

export default function ProjectsPage() {
    return (
        <>
            <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
                {/* Keep the consistent layout elements */}
                <Navbar />
                <BottomDock />
                <PageLayout>
                    {/* Main Content Container matching your home page width */}
                    <div className="relative z-10 w-full max-w-[800px] mx-auto px-6 pt-[120px] pb-[120px] border-x border-transparent lg:transparent min-h-screen">

                        {/* Header Section */}
                        <div className="mb-12">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 font-mono text-[12px] text-white/50 hover:text-violet-400 transition-colors mb-8"
                            >
                                ← BACK TO HOME
                            </Link>

                            <h1
                                className="font-display font-bold text-[#f1f0ff] leading-tight"
                                style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
                            >
                                All Projects
                            </h1>
                            <p className="font-mono text-[13px] text-white/40 mt-4">
                                A complete archive of the things I&apos;ve built, designed, and deployed.
                            </p>
                        </div>

                        {/* The Full Grid mapping over ALL projects */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {PROJECTS.map((p) => (
                                <ProjectCard key={p.title} project={p} />
                            ))}
                        </div>
                        <HorizontalSeparator className="mt-12" />
                        <div className="pt-10 -mb-25">
                            <Footer />
                        </div>
                    </div>
                </PageLayout>
            </main>
        </>
    );
}