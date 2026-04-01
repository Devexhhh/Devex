// app/ui/BackgroundFade.tsx
"use client";

import { motion } from "framer-motion"; // or "motion/react" depending on your version
import { ReactNode } from "react";

export default function BackgroundFade({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // A 1.5 second easeInOut gives the WebGL time to load and feels highly premium
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}