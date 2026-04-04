"use client";

import Dock from "@/app/ui/Dock";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function BottomDock() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const dockItems = [
        {
            label: 'Home',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            ),
            onClick: () => {
                if (pathname === "/") {
                    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
                } else {
                    router.push("/");
                }
            }
        },

        {
            label: 'Journal',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    <path d="M8 7h6" />
                    <path d="M8 11h8" />
                </svg>
            ),
            onClick: () => {
                if (pathname === "/") {
                    scrollTo("experience");
                } else {
                    router.push("/#experience");
                }
            }
        },

        { isSeparator: true },

        {
            label: 'GitHub',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.4a11.9 11.9 0 0 0-6 0C7.1 1.7 6 2 6 2a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.6 8.4c0 5.6 3.35 6.6 6.5 7a4.8 4.8 0 0 0-1 3.03V22" />
                    <path d="M9 20c-5 1.5-5-2.5-7-3" />
                </svg>
            ),
            onClick: () => window.open("https://github.com/Devexhhh", "_blank")
        },

        {
            label: 'LinkedIn',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            ),
            onClick: () => window.open("https://www.linkedin.com/in/kumar-sujal-a09515301/", "_blank")
        },

        {
            label: 'X (Twitter)',
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
            ),
            onClick: () => window.open("https://x.com/devexxh", "_blank")
        },
        { isSeparator: true },
        {
            label: 'Theme',
            icon: mounted && resolvedTheme === 'light' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
            ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
            ),
            onClick: () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
        }
    ];

    return (
        // FIX: Increased bg opacity to /90, added backdrop-blur-xl, and added a soft upward shadow
        <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-gray-50/90 dark:bg-[#050505]/90 border-t border-black/10 dark:border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_-10px_30px_rgba(0,0,0,0.4)] pb-safe pt-2">
            <div className="w-full max-w-lg px-4 pb-2">
                <Dock items={dockItems} className="scale-90 sm:scale-100 origin-bottom" />
            </div>
        </div>
    );
}