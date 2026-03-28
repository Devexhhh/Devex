import { PROJECTS } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function WorkSection() {
  return (
    <section id="work" className="px-6 pb-20">
      <p className="font-mono text-[11px] text-violet-500 tracking-[0.12em] mb-2 uppercase">
        03 ■
      </p>
      <h2
        className="font-display font-bold text-[#f1f0ff] leading-tight mb-3"
        style={{ fontSize: "clamp(28px, 5vw, 40px)" }}
      >
        Featured Work
      </h2>
      <p className="font-mono text-[13px] text-white/30 mb-10 tracking-wide">
        Things I&apos;ve built and shipped.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PROJECTS.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>

      <div className="mt-10 flex justify-center">
        <button className="
          inline-flex items-center gap-2 px-6 py-3 rounded-xl
          font-mono text-[13px] tracking-wide text-white/55
          bg-transparent border border-white/10
          hover:border-white/25 hover:text-white/85 hover:-translate-y-0.5
          transition-all duration-200 cursor-pointer
        ">
          ⌘ View All Projects
        </button>
      </div>
    </section>
  );
}
