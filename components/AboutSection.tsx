"use client";
import { ME_CORE_ITEMS } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="px-6 pb-20">
      <p className="font-mono text-[11px] text-violet-500 tracking-[0.12em] mb-2 uppercase">
        04 ■
      </p>
      <h2
        className="font-display font-bold text-[#f1f0ff] leading-tight mb-10"
        style={{ fontSize: "clamp(28px, 5vw, 40px)" }}
      >
        Me-Core
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {ME_CORE_ITEMS.map(({ label, icon }) => (
          <div
            key={label}
            className="
              group border border-white/[0.07] rounded-2xl p-6 text-center
              bg-white/[0.01] cursor-pointer
              hover:border-violet-500/30 hover:bg-violet-500/[0.03]
              transition-all duration-200
            "
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
              {icon}
            </div>
            <p className="font-display font-semibold text-[14px] text-white/60 group-hover:text-white/80 transition-colors">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
