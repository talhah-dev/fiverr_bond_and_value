"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type DoorRevealSectionProps = {
    children: React.ReactNode;
    className?: string;

    /** The “door” background (usually your big typography / image) */
    background?: React.ReactNode;

    /** Total scroll height for the effect (bigger = slower/more dramatic) */
    heightVh?: number;
};

export default function DoorRevealSection({
    children,
    background,
    className = "",
    heightVh = 220,
}: DoorRevealSectionProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Doors open mainly in the first half of the scroll
    const topY = useTransform(scrollYProgress, [0, 0.55], ["0%", "-105%"]);
    const bottomY = useTransform(scrollYProgress, [0, 0.55], ["0%", "105%"]);

    // Text fades in while doors open
    const textOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.15, 0.55], [20, 0]);

    // Optional: fade everything out near the end (nice “leave”)
    const sceneOpacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

    return (
        <section
            ref={ref}
            className={`relative w-full ${className}`}
            style={{ height: `${heightVh}vh` }}
        >
            {/* Sticky viewport for the whole effect */}
            <motion.div
                style={{ opacity: sceneOpacity }}
                className="sticky top-0 h-[100dvh] w-full overflow-hidden"
            >
                {/* Center content (revealed) */}
                <motion.div
                    style={{ opacity: textOpacity, y: textY }}
                    className="absolute inset-0 z-[2] flex items-center justify-center px-6"
                >
                    <div className="max-w-3xl text-center">{children}</div>
                </motion.div>

                {/* TOP DOOR */}
                <motion.div
                    style={{ y: topY }}
                    className="absolute left-0 top-0 z-[3] h-1/2 w-full overflow-hidden"
                >
                    <div className="h-[200%] w-full">{background}</div>
                </motion.div>

                {/* BOTTOM DOOR */}
                <motion.div
                    style={{ y: bottomY }}
                    className="absolute left-0 bottom-0 z-[3] h-1/2 w-full overflow-hidden"
                >
                    {/* Move the background up so the lower half shows correctly */}
                    <div className="-translate-y-1/2 h-[200%] w-full">{background}</div>
                </motion.div>
            </motion.div>
        </section>
    );
}
