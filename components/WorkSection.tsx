import { PROJECTS } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function WorkSection() {
  // Limits to only the first 2 projects
  const featuredProjects = PROJECTS.slice(0, 2);

  return (
    <section id="work" className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full pt-12 sm:pt-16">
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <span className="font-mono text-[12px] sm:text-[13px] text-black/40 dark:text-white/40 transition-colors duration-300">03 ■</span>
        <h2 className="font-mono text-[16px] sm:text-[18px] text-black dark:text-[#f1f0ff] transition-colors duration-300">Featured Work</h2>
      </div>

      {/* Increased gap on larger screens for better breathing room */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {featuredProjects.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>

      <div className="mt-10 sm:mt-12 flex justify-center">
        <Link
          href="/projects"
          className="group flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#0a0a0c]/80 font-mono font-semibold text-[11px] sm:text-[12px] tracking-widest text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/[0.05] hover:text-black/70 dark:hover:text-white hover:border-violet-500/40 transition-all duration-300 backdrop-blur-md shadow-xl"
        >
          <span>VIEW ALL PROJECTS</span>
          <span className="text-black/30 dark:text-white/30 group-hover:text-violet-600 dark:group-hover:text-violet-400 group-hover:translate-x-1.5 transition-all duration-300">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}