"use client";

export default function HorizontalSeparator({ className = "" }: { className?: string }) {
    return (
        // Outer container just takes up the 1px vertical space so margins (mt-16) work.
        <div className={`relative w-full h-px ${className}`}>

            {/* THE FIX: 
                On mobile, the schematic borders are offset by 20px on each side (total 40px).
                On md screens, they are offset by 40px on each side (total 80px).
                Using w-[calc(...)] forces the crosshairs to sit exactly on those HUD border lines!
            */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[calc(100vw-40px)] md:w-[calc(100vw-80px)] max-w-[800px] h-px flex items-center pointer-events-none z-10">

                {/* 1. Center Line (inside the layout boundary) */}
                <div className="absolute inset-x-0 h-px bg-black/10 dark:bg-white/10 transition-colors duration-300" />

                {/* 2. Left Bleed Line (shoots off to the left edge of the monitor) */}
                <div className="absolute right-full w-[50vw] h-px bg-black/10 dark:bg-white/10 transition-colors duration-300" />

                {/* 3. Right Bleed Line (shoots off to the right edge of the monitor) */}
                <div className="absolute left-full w-[50vw] h-px bg-black/10 dark:bg-white/10 transition-colors duration-300" />

                {/* 4. Left Crosshair (Locked perfectly to the mathematical left border) */}
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className="absolute -left-[7.5px] text-black/20 dark:text-white/20 transition-colors duration-300"
                >
                    <path d="M7.5 0V15M0 7.5H15" stroke="currentColor" strokeWidth="1" />
                </svg>

                {/* 5. Right Crosshair (Locked perfectly to the mathematical right border) */}
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className="absolute -right-[7.5px] text-black/30 dark:text-white/20 transition-colors duration-300"
                >
                    <path d="M7.5 0V15M0 7.5H15" stroke="currentColor" strokeWidth="1" />
                </svg>

            </div>
        </div>
    );
}