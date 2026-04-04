"use client";

import PixelCard from "@/app/ui/PixelCard";
import HorizontalSeparator from "@/app/ui/HorizontalSeparator";
import ParallaxCard from "@/app/ui/ParallaxCard";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/lib/imagesData";

export default function ContactSection() {
  return (
    <>
      {/* Wrapper padding updated to be fluid */}
      <section id="contact" className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">

        <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); } 
        }
        .animate-float-1 { animation: float 6s ease-in-out infinite; }
        .animate-float-2 { animation: float 6s ease-in-out infinite 3s; }
      `}</style>

        {/* 04 Side-Quests Sub-section */}
        <HorizontalSeparator className="mt-12 sm:mt-16 pb-12 sm:pb-16" />
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-[12px] sm:text-[13px] text-black/40 dark:text-white/40 transition-colors duration-300">04 ■</span>
          <h2 className="font-mono text-[16px] sm:text-[18px] text-black dark:text-[#f1f0ff] transition-colors duration-300">Side-Quests</h2>
        </div>

        {/* Parallax Card linked to Side-Quests page */}
        {/* Adjusted left/right padding for mobile so card has more room */}
        <div className="w-full my-8 sm:my-12 relative z-20 px-0 sm:px-10">
          <Link href="/side-quests" className="outline-none focus:outline-none block w-full">
            <ParallaxCard />
          </Link>
        </div>

        <HorizontalSeparator className="mt-12 sm:mt-16 pb-12 sm:pb-16" />

        {/* Pixelated Hover Contact Card */}
        <PixelCard
          colors="#3b0764,#5b21b6,#7c3aed"
          gap={12}
          speed={40}
          className="group !w-full !max-w-xl !h-[380px] sm:!h-[420px] !aspect-auto mx-auto !bg-transparent !border-black/10 dark:!border-white/15 !rounded-2xl shadow-xl dark:shadow-2xl noisy-glass transition-colors duration-300"
        >
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center z-10 pointer-events-none p-4 text-center">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(10,10,12,0.6)_0%,transparent_100%)] pointer-events-none transition-colors duration-300" />

            <h3 className="font-mono text-[16px] sm:text-[18px] text-black dark:text-white mb-2 relative z-10 tracking-wide drop-shadow-sm dark:drop-shadow-lg transition-colors duration-300">Made it this far?</h3>
            <p className="font-mono text-[12px] sm:text-[13px] text-black/70 dark:text-white/70 mb-8 sm:mb-10 relative z-10 drop-shadow-sm dark:drop-shadow-md transition-colors duration-300">Let&apos;s build something together.</p>

            <div className="flex items-center gap-3 sm:gap-5 mb-8 sm:mb-10 relative z-10 pointer-events-auto">

              {/* YOU CARD WRAPPER - Responsive Translation */}
              <div className="transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-[75px] sm:group-hover:translate-x-[130px] z-20">
                <div className="animate-float-1 flex flex-col items-center gap-2 sm:gap-3">
                  <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-2xl border border-black/10 dark:border-white/20 bg-white/40 dark:bg-black/40 backdrop-blur-md flex items-center justify-center rotate-6 shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:scale-105 hover:rotate-3 cursor-pointer">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 relative rounded-full overflow-hidden border border-black/10 dark:border-white/10">
                      <Image
                        src={IMAGES.avatars.user}
                        alt="User"
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                  </div>
                  <span className="font-mono text-[11px] sm:text-[13px] text-black/90 dark:text-white/90 font-bold drop-shadow-md tracking-wide transition-colors duration-300">You</span>
                </div>
              </div>

              {/* ARROWS */}
              <div className="text-black/40 dark:text-white/50 mx-1 text-xl sm:text-2xl mt-[-20px] sm:mt-[-24px] drop-shadow-sm dark:drop-shadow-lg transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:rotate-180 z-10">
                ⇄
              </div>

              {/* ME CARD WRAPPER - Responsive Translation */}
              <div className="transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-x-[75px] sm:group-hover:-translate-x-[130px] z-20">
                <div className="animate-float-2 flex flex-col items-center gap-2 sm:gap-3">
                  <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-2xl border border-black/10 dark:border-white/20 bg-white/40 dark:bg-black/40 backdrop-blur-md flex items-center justify-center -rotate-6 shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:scale-105 hover:-rotate-3 cursor-pointer">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 relative rounded-full overflow-hidden border border-black/10 dark:border-white/20">
                      <Image
                        src={IMAGES.avatars.me}
                        alt="Me"
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                  </div>
                  <span className="font-mono text-[11px] sm:text-[13px] text-black/90 dark:text-white/90 font-bold drop-shadow-md tracking-wide transition-colors duration-300">Me</span>
                </div>
              </div>

            </div>

            <button className="relative z-10 px-5 sm:px-7 py-2 sm:py-3 rounded-xl border border-black/20 dark:border-white/20 bg-black/[0.05] dark:bg-white/[0.05] backdrop-blur-md font-mono text-[13px] sm:text-[14px] text-black dark:text-white hover:bg-black/[0.1] hover:border-black/40 dark:hover:bg-white/[0.1] dark:hover:border-white/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] pointer-events-auto cursor-pointer">
              Start a Project
            </button>

          </div>
        </PixelCard>
      </section>
      <HorizontalSeparator className="mt-12 sm:mt-16" />
    </>
  );
}