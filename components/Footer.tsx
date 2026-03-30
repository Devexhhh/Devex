"use client";

import { motion } from "motion/react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // The outer wrapper provides the padding so the card floats above the dock
    <div className="w-full px-4 md:px-6 pt-6 pb-29 flex justify-center">

      {/* The Floating Glass Island */}
      <footer className="relative w-full max-w-5xl border border-white/10 bg-[#0a0a0c]/40 backdrop-blur-2xl rounded-[40px] overflow-hidden noisy-glass p-8 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">

        {/* 1. The Light Leak Top Border (Now contained inside the rounded card) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[1px]" />

        {/* Soft radial glow at the top center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/10 blur-[100px] pointer-events-none rounded-full" />

        {/* 2. Massive Background Watermark */}
        <div className="absolute -bottom-0 md:-bottom-0 left-0 w-full flex justify-center pointer-events-none select-none opacity-[0.03]">
          <h1 className="text-[22vw] md:text-[14vw] font-display font-black leading-none tracking-tighter text-white">
            DEVEX
          </h1>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-12">

          {/* Left Side: Status & Branding */}
          <div className="flex flex-col items-center md:items-start gap-6">

            {/* Blinking Live Status */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md shadow-inner w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[10px] text-white/60 uppercase tracking-widest mt-[1px]">
                Available for Work
              </span>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h2 className="font-display text-2xl md:text-3xl text-white tracking-tight mb-2 drop-shadow-md">Devex.</h2>
              <p className="font-mono text-[13px] text-white/40 text-center md:text-left">
                Crafting digital experiences.
              </p>
            </div>
          </div>

          {/* Right Side: Back to Top & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-8">

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center w-14 h-14 rounded-full border border-white/15 bg-black/40 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.5)] hover:bg-white/[0.05] hover:border-violet-500/50 transition-all duration-300 cursor-pointer"
            >
              <svg
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                className="text-white/50 group-hover:text-white transition-colors"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </motion.button>

            <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
              <span className="font-mono text-[11px] text-white/30 tracking-wider">
                © {new Date().getFullYear()} ALL RIGHTS RESERVED.
              </span>
              <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">
                Built by Devex. Obviously.
              </span>
            </div>

          </div>

        </div>
      </footer>
    </div>
  );
}