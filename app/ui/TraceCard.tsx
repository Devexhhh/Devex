"use client";
import React from "react";

export default function TraceCard() {
    return (
        <div className="flex justify-center items-center p-10">

            {/* Outer wrapper: hides the spinning gradient outside the borders */}
            <div className="relative w-80 h-[400px] rounded-2xl overflow-hidden group cursor-pointer bg-[#050505] shadow-2xl">

                {/* 1. The static subtle border (Visible when not hovering) */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 z-10 transition-opacity duration-500 group-hover:opacity-0" />

                {/* 2. The spinning gradient beam (Visible on hover) */}
                <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 
          bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_70%,#8b5cf6_100%)] 
          animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                />

                {/* 3. The inner dark card (Creates the "border" effect by blocking the center of the spinning gradient) */}
                <div className="absolute inset-[1px] bg-[#0a0a0c] rounded-[15px] z-20 flex flex-col p-8">

                    <div className="flex-1">
                        <div className="w-12 h-12 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
                            <span className="text-xl">⚡</span>
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white mb-3">High Performance</h3>
                        <p className="text-sm font-mono text-white/50 leading-relaxed">
                            Engineered with zero compromises. Optimizing rendering cycles and eliminating unnecessary repaints.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[11px] text-violet-400 font-medium">
                        <span>EXPLORE CORE</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>

                </div>
            </div>
        </div>
    );
}