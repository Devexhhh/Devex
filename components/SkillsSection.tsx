import { SKILLS } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section className="px-6 pb-20">
      <p className="font-mono text-[11px] text-violet-500 tracking-[0.12em] mb-2 uppercase">
        02 ■
      </p>
      <h2
        className="font-display font-bold text-[#f1f0ff] leading-tight mb-10"
        style={{ fontSize: "clamp(28px, 5vw, 40px)" }}
      >
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {SKILLS.map((s) => (
          <span
            key={s}
            className="
              inline-flex items-center px-4 py-2 rounded-full
              border border-white/10 bg-white/[0.02]
              font-mono text-[13px] text-white/55
              hover:border-violet-500/45 hover:text-violet-300 hover:bg-violet-500/[0.07]
              transition-all duration-200 cursor-default
            "
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
