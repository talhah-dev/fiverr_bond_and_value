"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type TabLoaderProps = {
    direction?: "top" | "bottom";
    speed?: number; // seconds
    delay?: number; // optional, seconds before it starts leaving
};

export default function TabLoader({
    direction = "top",
    speed = 0.9,
    delay = 0.3,
}: TabLoaderProps) {
    const [visible, setVisible] = useState(true);

    // lock scroll while loader visible
    useEffect(() => {
        if (!visible) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [visible]);

    // auto hide
    useEffect(() => {
        const t = window.setTimeout(() => setVisible(false), (delay + 0.05) * 1000);
        return () => window.clearTimeout(t);
    }, [delay]);

    const exitY = direction === "top" ? "-100%" : "100%";

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f241f]"
                    aria-label="Loading"
                    role="status"
                    initial={{ y: 0 }}
                    animate={{ y: 0 }}
                    exit={{
                        y: exitY,
                        transition: { duration: speed, ease: [0.22, 1, 0.36, 1] },
                    }}
                    onAnimationComplete={(def) => {
                        // when exit finishes, ensure we fully unmount
                        if (def === "exit") setVisible(false);
                    }}
                >
                    <Image
                        src="/loaderlogo.svg"
                        alt="Bond & Value"
                        width={420}
                        height={120}
                        priority
                        className="max-w-4xl w-full h-auto px-6"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
