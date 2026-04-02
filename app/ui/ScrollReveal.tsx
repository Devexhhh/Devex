"use client";

import { motion } from "framer-motion"; // Note: Use "motion/react" if you are on the newer v12 API
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    yOffset?: number;     // How far it slides up (default: 30px)
    xOffset?: number;     // How far it slides sideways (default: 0px)
    delay?: number;       // Delay before animating (useful for staggering grids)
    duration?: number;    // How long the animation takes
    once?: boolean;       // If true, it only animates the first time you scroll past it
}

export default function ScrollReveal({
    children,
    className = "",
    yOffset = 40,
    xOffset = 0,
    delay = 0,
    duration = 0.8,
    once = true,
}: ScrollRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset, x: xOffset }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once, margin: "-50px" }} // Triggers when the element is 50px into the viewport
            transition={{
                duration,
                delay,
                ease: [0.25, 1, 0.5, 1] // A custom Apple-style buttery smooth easing curve
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}