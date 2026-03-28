export default function ContactSection() {
  return (
    <section id="contact" className="px-6 pb-28">
      <div className="
        relative overflow-hidden rounded-[20px] text-center
        border border-white/[0.07] bg-violet-600/[0.03]
        px-8 py-20
      ">
        {/* Soft glow */}
        <div className="
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(124,58,237,0.1),transparent)]
        " />

        {/* Avatar pair */}
        <div className="relative flex justify-center items-center gap-5 mb-8">
          <div className="flex flex-col items-center gap-2">
            <div className="
              w-14 h-14 rounded-full flex items-center justify-center text-2xl
              bg-violet-600/30 border-2 border-violet-500/40
            ">🥷</div>
            <span className="font-mono text-[11px] text-white/30">Me</span>
          </div>

          <span className="text-xl text-white/15 mb-5">⇄</span>

          <div className="flex flex-col items-center gap-2">
            <div className="
              w-14 h-14 rounded-full flex items-center justify-center text-2xl
              bg-white/[0.05] border-2 border-white/10
            ">👤</div>
            <span className="font-mono text-[11px] text-white/30">You</span>
          </div>
        </div>

        <h2
          className="relative font-display font-bold text-[#f1f0ff] mb-3"
          style={{ fontSize: "clamp(24px, 4vw, 38px)" }}
        >
          Made it this far?
        </h2>
        <p className="relative text-[15px] text-white/35 mb-10 font-sans">
          Let&apos;s build something together.
        </p>

        <button className="
          relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
          font-mono text-[13px] text-white tracking-wide
          bg-violet-700 border border-violet-500/60
          hover:bg-violet-600 hover:-translate-y-0.5
          hover:shadow-[0_8px_28px_rgba(124,58,237,0.35)]
          transition-all duration-200 cursor-pointer
        ">
          ↗ Start a Project
        </button>
      </div>
    </section>
  );
}
