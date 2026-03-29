"use client";
import BorderGlow from "@/app/ui/BorderGlow";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  status: string;
  color: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <BorderGlow
      edgeSensitivity={55}
      // coneSpread={40}
      fillOpacity={0}         // <-- Ensure this is exactly 0
      glowRadius={12}
      glowIntensity={1}

      glowColor="260 80 60"
      backgroundColor="0f0f11"
      borderRadius={12}
      colors={['#7c3aed', '#a855f7', '#38bdf8']}
      className="w-full h-full group !border-white/5 hover:!border-white/10 transition-colors duration-300 noisy-glass"
    >
      <div className="p-5 flex flex-col h-full w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-mono font-bold text-[16px] text-white">{project.title}</h3>
          <div className="flex gap-2 text-white/30">
            <span className="cursor-pointer hover:text-white transition-colors">📌</span>
            <span className="cursor-pointer hover:text-white transition-colors">🔗</span>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="w-full h-40 rounded-lg mb-5 overflow-hidden border border-white/5 relative flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, #111, ${project.color}20)` }}>
          <span className="font-mono text-white/20 text-xs">Thumbnail</span>
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            {/* Mock Tech Icons */}
            <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[10px]">⚛</div>
            <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[10px]">TS</div>
            <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[10px]">S</div>
          </div>

          <span className="font-mono text-[10px] px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 flex items-center gap-1.5 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            {project.status}
          </span>
        </div>

        <p className="font-mono text-[12px] text-white/40 leading-relaxed">
          {project.desc}
        </p>
      </div>
    </BorderGlow>
  );
}