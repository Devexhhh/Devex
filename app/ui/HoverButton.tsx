"use client";

import React, { ReactNode } from "react";
import Image from "next/image";

interface HoverButtonProps {
    href: string;
    icon: ReactNode;
    label: string;
    previewImage?: string; // Optional: The screenshot to show on hover
    previewText?: string;  // Optional: Text to show if there's no image
}

export default function HoverButton({ href, icon, label, previewImage, previewText }: HoverButtonProps) {
    return (
        <div className="relative group inline-block">

            {/* 1. The Glassmorphic Button */}
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
          flex items-center gap-2 px-4 py-2 rounded
          bg-white/[0.05] backdrop-blur-md border border-white/10 
          font-mono text-[12px] font-medium text-white/80 
          hover:bg-white/[0.1] hover:text-white hover:border-white/20
          hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]
          transition-all duration-300 no-underline cursor-pointer
        "
            >
                <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                    {icon}
                </span>
                {label}
            </a>

            {/* 2. The Glassmorphic Hover Pop-up Card */}
            <div className="
        absolute bottom-full left-1/2 -translate-x-1/2 mb-3 
        opacity-0 translate-y-2 pointer-events-none 
        group-hover:opacity-100 group-hover:translate-y-0 
        transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] z-50
      ">
                <div className="
          bg-black/50 backdrop-blur-xl border border-white/15 rounded-xl p-1.5 
          shadow-[0_10px_40px_rgba(0,0,0,0.8)]
          flex flex-col items-center justify-center overflow-hidden
        ">
                    {/* Show Image if provided */}
                    {previewImage && (
                        <div className="relative w-32 h-20 rounded-md overflow-hidden border border-white/10">
                            <Image
                                src={previewImage}
                                alt={`${label} preview`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}

                    {/* Show Text if provided */}
                    {previewText && (
                        <span className="px-3 py-1.5 font-mono text-[11px] text-white/90 whitespace-nowrap drop-shadow-md">
                            {previewText}
                        </span>
                    )}
                </div>
            </div>

        </div>
    );
}