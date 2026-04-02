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
          bg-black/[0.05] dark:bg-white/[0.05] backdrop-blur-md border border-black/10 dark:border-white/10 
          font-mono text-[12px] font-medium text-black/80 dark:text-white/80 
          hover:bg-black/[0.1] dark:hover:bg-white/[0.1] hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20
          hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]
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
          bg-white/90 dark:bg-black/50 backdrop-blur-xl border border-black/10 dark:border-white/15 rounded-xl p-1.5 
          shadow-[0_10px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.8)]
          flex flex-col items-center justify-center overflow-hidden transition-colors duration-300
        ">
                    {previewImage && (
                        // 1. Removed fixed width and aspect ratio (no w-48 or aspect-video).
                        // 2. Added 'flex' so the div tightly wraps the image without extra whitespace.
                        <div className="relative rounded-lg overflow-hidden border border-black/10 dark:border-white/10 flex shadow-xl">
                            <Image
                                src={previewImage}
                                alt={`${label} preview`}
                                // We use 0 for width/height but override it with CSS so it keeps its native aspect ratio safely
                                width={0}
                                height={0}
                                sizes="100vw"
                                quality={100}
                                // 3. w-auto and h-auto let the image shape itself.
                                // 4. max-w and max-h act as limits so it gets much larger than before, but doesn't break the screen.
                                className="w-auto h-auto max-w-[260px] sm:max-w-[360px] max-h-[240px] md:max-h-[300px]"
                            />
                        </div>
                    )}

                    {/* Show Text if provided */}
                    {previewText && (
                        <span className="px-3 py-1.5 font-mono text-[11px] text-black/90 dark:text-white/90 whitespace-nowrap drop-shadow-sm dark:drop-shadow-md transition-colors duration-300">
                            {previewText}
                        </span>
                    )}
                </div>
            </div>

        </div>
    );
}