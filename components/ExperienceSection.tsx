import { EXPERIENCE } from "@/lib/data";
import Tag from "./Tag";

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-20">
      <p className="font-mono text-[11px] text-violet-500 tracking-[0.12em] mb-2 uppercase">
        01 ■
      </p>
      <h2
        className="font-display font-bold text-[#f1f0ff] leading-tight mb-12"
        style={{ fontSize: "clamp(28px, 5vw, 40px)" }}
      >
        Experience
      </h2>

      <div className="flex flex-col gap-4">
        {EXPERIENCE.map((exp, i) => (
          <div
            key={i}
            className="
              group relative border border-white/[0.07] rounded-2xl p-7
              bg-white/[0.01] hover:bg-white/[0.03]
              hover:border-violet-500/25 transition-all duration-300
            "
          >
            {/* Top accent line on hover */}
            <div className="
              absolute top-0 left-0 right-0 h-px rounded-t-2xl
              bg-gradient-to-r from-violet-500/0 via-violet-500/50 to-violet-500/0
              opacity-0 group-hover:opacity-100 transition-opacity duration-300
            " />

            <div className="flex justify-between items-start flex-wrap gap-3 mb-4">
              <div>
                <h3 className="font-display font-bold text-[18px] text-[#f1f0ff] mb-1.5 tracking-tight">
                  {exp.role}
                </h3>
                <span className="font-mono text-[12px] text-violet-400 tracking-wide">
                  {exp.company}
                </span>
              </div>
              <span className="font-mono text-[12px] text-white/25 tracking-wide mt-1">
                {exp.period}
              </span>
            </div>

            <p className="text-[14px] text-white/45 leading-relaxed mb-5">
              {exp.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map((t) => <Tag key={t} accent>{t}</Tag>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
