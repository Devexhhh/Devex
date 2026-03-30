import ActivityGrid from "./ActivityGrid";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-20 pb-24 px-6">
      {/* <div className="flex items-center gap-3 mb-6 font-mono text-[13px] text-white/50">
        <span>📍 India : 8:20:35 pm</span>
        <div className="ml-auto flex gap-4">
          <span className="cursor-pointer hover:text-white transition-colors">GH</span>
          <span className="cursor-pointer hover:text-white transition-colors">IN</span>
          <span className="cursor-pointer hover:text-white transition-colors">TW</span>
        </div>
      </div> */}

      <p className="font-mono text-[13px] text-white/40 mb-2 mt-5">
        Namaste. I&apos;m
      </p>

      <h1 className="font-sans font-medium text-[#f1f0ff] mb-8" style={{ fontSize: "clamp(32px, 5vw, 44px)" }}>
        Vansh <span className="text-white/30 font-light">— A Design Engineer</span>
      </h1>

      <p className="font-mono text-[14px] text-white/60 leading-[1.8] max-w-[600px] mb-6">
        I build interfaces that look good and feel effortless to use. Designing in code, I bring experiences to life with <span className="text-white border-b border-white/20 pb-[1px]">Motion</span>.
      </p>

      <p className="font-mono text-[14px] text-white/60 leading-[1.8] max-w-[600px] mb-10">
        If you like my work or just want to chat tech, I&apos;m around.
      </p>

      <div className="flex gap-4 flex-wrap mb-16">
        <button className="
          group flex items-center gap-2 px-4 py-2 rounded-full 
          border border-white/10 bg-transparent
          font-mono text-[12px] text-white/70 
          hover:bg-white/[0.04] hover:text-white hover:border-white/20
          transition-all duration-200
        ">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
          Resume.
        </button>

        {/* Changed from a <button onClick={...}> to an <a> tag for server-side compatibility */}
        <a
          href="#contact"
          className="
          group flex items-center gap-2 px-4 py-2 rounded-full 
          border border-white/10 bg-transparent
          font-mono text-[12px] text-white/70 
          hover:bg-white/[0.04] hover:text-white hover:border-white/20
          transition-all duration-200 no-underline
        ">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" /></svg>
          Write Mail
        </a>
      </div>

      {/* This async Server Component can now safely render here */}
      <ActivityGrid />
    </section>
  );
}