import { PROJECTS } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function WorkSection() {
  return (
    <section id="work" className="px-6 py-16">
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-[13px] text-white/40">03 ■</span>
        <h2 className="font-mono text-[18px] text-[#f1f0ff]">Featured Work</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="flex items-center gap-2 px-6 py-2 rounded-md bg-white text-black font-mono text-[12px] font-semibold hover:bg-white/90 transition-colors">
          ❖ VIEW ALL PROJECTS
        </button>
      </div>
    </section>
  );
}