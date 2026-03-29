"use client";
import PixelCard from "@/app/ui/PixelCard";
import GlassIcons from "@/app/ui/GlassIcons";// Adjust path if it's in @/app/ui/GlassIcons

export default function ContactSection() {
  // Data for the 3D Glass Icons
  const meCoreItems = [
    { icon: <span className="text-2xl">X</span>, color: 'purple', label: 'Anime' },
    { icon: <span className="text-2xl">Y</span>, color: 'blue', label: 'Components' },
    { icon: <span className="text-2xl">Z</span>, color: 'orange', label: 'Garden' },
  ];

  return (
    <section id="contact" className="px-6 py-16 relative">

      {/* Scope all the custom keyframes here */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-1 { animation: float 5s ease-in-out infinite; }
        .animate-float-2 { animation: float 5s ease-in-out infinite 2.5s; }
        .animate-float-3 { animation: float 4s ease-in-out infinite 1s; }
      `}</style>

      {/* 04 Me-Core Sub-section */}
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-[13px] text-white/40">04 ■</span>
        <h2 className="font-mono text-[18px] text-[#f1f0ff]">Me-Core</h2>
      </div>

      {/* Replaced the static map with your new 3D GlassIcons component */}
      <div className="mb-20">
        <GlassIcons
          items={meCoreItems}
          // Adjusting the gap and layout to perfectly center the 3 items 
          className="!flex !justify-center !gap-22 !py-8"
        />
      </div>

      {/* Pixelated Hover Contact Card */}
      <PixelCard
        colors="#3b0764,#5b21b6,#7c3aed"
        gap={12}
        speed={40}
        // Swapped solid bg for transparent + noisy-glass
        className="!w-full !max-w-xl !h-[420px] !aspect-auto mx-auto !bg-transparent !border-white/15 !rounded-2xl shadow-2xl noisy-glass"
      >
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center z-10 pointer-events-none">

          {/* STRONGER Vignette shield: Darkens the center of the canvas so text is readable */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,10,12,0.6)_0%,transparent_100%)] pointer-events-none" />

          {/* Brighter text with drop shadows */}
          <h3 className="font-mono text-[18px] text-white mb-2 relative z-10 tracking-wide drop-shadow-lg">Made it this far?</h3>
          <p className="font-mono text-[13px] text-white/70 mb-10 relative z-10 drop-shadow-md">Let&apos;s build something together.</p>

          <div className="flex items-center gap-5 mb-10 relative z-10 pointer-events-auto">

            <div className="animate-float-1 flex flex-col items-center gap-3">
              {/* Added glassmorphism (backdrop-blur) and brighter borders */}
              <div className="w-20 h-24 rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center rotate-6 shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-transform hover:scale-105 hover:rotate-3 cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden border border-white/10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/80 mt-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
              </div>
              <span className="font-mono text-[13px] text-white/90 font-bold drop-shadow-md tracking-wide">You</span>
            </div>

            {/* Brighter arrows */}
            <div className="animate-float-3 text-white/50 mx-1 text-2xl mt-[-24px] drop-shadow-lg">
              ⇄
            </div>

            <div className="animate-float-2 flex flex-col items-center gap-3">
              <div className="w-20 h-24 rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center -rotate-6 shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-transform hover:scale-105 hover:-rotate-3 cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border border-white/20">
                  <span className="text-[18px] drop-shadow-md">🥷</span>
                </div>
              </div>
              <span className="font-mono text-[13px] text-white/90 font-bold drop-shadow-md tracking-wide">Me</span>
            </div>

          </div>

          {/* Button stands out better with a glass background */}
          <button className="relative z-10 px-7 py-3 rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-md font-mono text-[14px] text-white hover:bg-white/[0.1] hover:border-white/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] pointer-events-auto cursor-pointer">
            Start a Project
          </button>

        </div>
      </PixelCard>

    </section>
  );
}