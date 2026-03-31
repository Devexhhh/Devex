"use client";
import PixelCard from "@/app/ui/PixelCard";
import GlassIcons from "@/app/ui/GlassIcons";
import HorizontalSeparator from "@/app/ui/HorizontalSeparator";

export default function ContactSection() {
  // Data for the 3D Glass Icons
  const sideQuestItems = [
    { icon: <span className="text-2xl">X</span>, color: 'purple', label: 'Anime' },
    { icon: <span className="text-2xl">Y</span>, color: 'blue', label: 'Gaming' },
    { icon: <span className="text-2xl">Z</span>, color: 'orange', label: 'Drawing' },
  ];

  return (
    <>
      <section id="contact" className="px-6">

        {/* Removed animate-float-3 completely since the arrow no longer needs to float */}
        <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); } 
        }
        .animate-float-1 { animation: float 6s ease-in-out infinite; }
        .animate-float-2 { animation: float 6s ease-in-out infinite 3s; }
      `}</style>

        {/* 04 Side-Quests Sub-section */}
        <HorizontalSeparator className="mt-16 pb-16" />
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-[13px] text-white/40">04 ■</span>
          <h2 className="font-mono text-[18px] text-[#f1f0ff]">Side-Quests</h2>
        </div>

        <div className="mb-10 mt-15">
          <GlassIcons
            items={sideQuestItems}
            className="!flex !justify-center !gap-30 !py-8"
          />
        </div>
        <HorizontalSeparator className="mt-16 pb-16" />

        {/* Pixelated Hover Contact Card */}
        <PixelCard
          colors="#3b0764,#5b21b6,#7c3aed"
          gap={12}
          speed={40}
          className="group !w-full !max-w-xl !h-[420px] !aspect-auto mx-auto !bg-transparent !border-white/15 !rounded-2xl shadow-2xl noisy-glass"
        >
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center z-10 pointer-events-none">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,10,12,0.6)_0%,transparent_100%)] pointer-events-none" />

            <h3 className="font-mono text-[18px] text-white mb-2 relative z-10 tracking-wide drop-shadow-lg">Made it this far?</h3>
            <p className="font-mono text-[13px] text-white/70 mb-10 relative z-10 drop-shadow-md">Let&apos;s build something together.</p>

            <div className="flex items-center gap-5 mb-10 relative z-10 pointer-events-auto">

              {/* YOU CARD WRAPPER */}
              <div className="transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-[130px] z-20">
                <div className="animate-float-1 flex flex-col items-center gap-3">
                  <div className="w-20 h-24 rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center rotate-6 shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:scale-105 hover:rotate-3 cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden border border-white/10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/80 mt-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                  </div>
                  <span className="font-mono text-[13px] text-white/90 font-bold drop-shadow-md tracking-wide">You</span>
                </div>
              </div>

              {/* ARROWS - Removed float animation, combined into a single static div that only rotates on hover */}
              <div className="text-white/50 mx-1 text-2xl mt-[-24px] drop-shadow-lg transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:rotate-180 z-10">
                ⇄
              </div>

              {/* ME CARD WRAPPER */}
              <div className="transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-x-[130px] z-20">
                <div className="animate-float-2 flex flex-col items-center gap-3">
                  <div className="w-20 h-24 rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center -rotate-6 shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:scale-105 hover:-rotate-3 cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border border-white/20">
                      <span className="text-[18px] drop-shadow-md">🥷</span>
                    </div>
                  </div>
                  <span className="font-mono text-[13px] text-white/90 font-bold drop-shadow-md tracking-wide">Me</span>
                </div>
              </div>

            </div>

            <button className="relative z-10 px-7 py-3 rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-md font-mono text-[14px] text-white hover:bg-white/[0.1] hover:border-white/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] pointer-events-auto cursor-pointer">
              Start a Project
            </button>

          </div>
        </PixelCard>
      </section>
      <HorizontalSeparator className="mt-16" />
    </>
  );
}