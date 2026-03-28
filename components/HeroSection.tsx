"use client";
import ActivityGrid from "./ActivityGrid";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-36 pb-20 px-6">

      {/* Status */}
      <div className="fade-in fade-in-1 flex items-center gap-2 mb-5">
        <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot inline-block shrink-0" />
        <span className="font-mono text-[12px] text-white/40 tracking-[0.08em]">
          India · Available for work
        </span>
      </div>

      <p className="fade-in fade-in-1 font-mono text-[13px] text-white/30 mb-3 tracking-[0.06em]">
        Namaste. I&apos;m
      </p>

      <h1
        className="fade-in fade-in-2 font-display font-extrabold leading-none tracking-tighter mb-4 text-[#f1f0ff]"
        style={{ fontSize: "clamp(56px, 10vw, 100px)" }}
      >
        <span className="shimmer-text">Vansh</span>
      </h1>

      <h2
        className="fade-in fade-in-2 font-display font-semibold text-white/30 tracking-tight mb-8"
        style={{ fontSize: "clamp(18px, 3vw, 26px)" }}
      >
        — A Design Engineer
      </h2>

      <p className="fade-in fade-in-3 text-[15px] text-white/55 leading-[1.8] max-w-[520px] mb-3">
        I build interfaces that look good and feel effortless to use.
        Designing in code, I bring experiences to life with Motion.
      </p>
      <p className="fade-in fade-in-3 text-[15px] text-white/35 leading-[1.8] max-w-[520px] mb-12">
        If you like my work or just want to chat tech, I&apos;m around.
      </p>

      <div className="fade-in fade-in-4 flex gap-3 flex-wrap">
        <button className="
          inline-flex items-center gap-2 px-6 py-3 rounded-xl
          font-mono text-[13px] tracking-wide text-white
          bg-violet-700 border border-violet-500/60
          hover:bg-violet-600 hover:-translate-y-0.5
          hover:shadow-[0_8px_28px_rgba(124,58,237,0.35)]
          transition-all duration-200 cursor-pointer
        ">
          ↗ Resume
        </button>
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="
            inline-flex items-center gap-2 px-6 py-3 rounded-xl
            font-mono text-[13px] tracking-wide text-white/60
            bg-transparent border border-white/10
            hover:border-white/25 hover:text-white/90 hover:-translate-y-0.5
            transition-all duration-200 cursor-pointer
          "
        >
          ✉ Write Mail
        </button>
      </div>

      <ActivityGrid />
    </section>
  );
}
