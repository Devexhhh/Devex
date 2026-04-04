"use client";

import { motion } from "motion/react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Added pb-[100px] on mobile to clear the bottom dock!
    <div className="w-full px-4 sm:px-6 pt-6 pb-[100px] sm:pb-32 flex justify-center">

      {/* Scaled padding for mobile (p-6) up to desktop (p-14) */}
      <footer className="relative w-full max-w-5xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-[#0a0a0c]/40 backdrop-blur-2xl rounded-[30px] md:rounded-[40px] overflow-hidden noisy-glass p-6 sm:p-8 md:p-14 shadow-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-colors duration-300">

        {/* 1. The Light Leak Top Border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-black/20 dark:via-white/40 to-transparent blur-[1px] transition-colors duration-300" />

        {/* Soft radial glow at the top center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[150px] md:h-[300px] bg-violet-500/10 blur-[100px] pointer-events-none rounded-full" />

        {/* 2. Massive Background Watermark - Scaled text sizes safely */}
        <div className="absolute -bottom-0 left-0 w-full flex justify-center pointer-events-none select-none opacity-[0.03] overflow-hidden">
          <h1 className="text-[24vw] sm:text-[20vw] md:text-[14vw] font-display font-black leading-none tracking-tighter text-black dark:text-white transition-colors duration-300 transform translate-y-4 md:translate-y-0">
            DEVEX
          </h1>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-12 text-center md:text-left">

          {/* Left Side: Status & Branding */}
          <div className="flex flex-col items-center md:items-start gap-5 md:gap-6">

            {/* Blinking Live Status */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-md shadow-inner w-fit transition-colors duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[10px] text-black/60 dark:text-white/60 uppercase tracking-widest mt-[1px] transition-colors duration-300">
                Available for Work
              </span>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h2 className="font-display text-2xl md:text-3xl text-black dark:text-white tracking-tight mb-2 drop-shadow-sm dark:drop-shadow-md transition-colors duration-300">Devex.</h2>
              <p className="font-mono text-[12px] sm:text-[13px] text-black/50 dark:text-white/40 transition-colors duration-300">
                Crafting digital experiences.
              </p>
            </div>
          </div>

          {/* Right Side: Back to Top & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-6 md:gap-8">

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-black/10 dark:border-white/15 bg-white/40 dark:bg-black/40 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)] hover:bg-black/[0.05] dark:hover:bg-white/[0.05] hover:border-violet-500/50 transition-all duration-300 cursor-pointer"
            >
              <svg
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                className="text-black/50 group-hover:text-black dark:text-white/50 dark:group-hover:text-white transition-colors"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </motion.button>

            <div className="flex flex-col items-center md:items-end gap-1 md:gap-2">
              <span className="font-mono text-[10px] sm:text-[11px] text-black/40 dark:text-white/30 tracking-wider transition-colors duration-300">
                © {new Date().getFullYear()} ALL RIGHTS RESERVED.
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] text-black/30 dark:text-white/20 tracking-widest uppercase transition-colors duration-300">
                Built by Devex. Obviously.
              </span>
            </div>

          </div>

        </div>
      </footer>
    </div>
  );
}