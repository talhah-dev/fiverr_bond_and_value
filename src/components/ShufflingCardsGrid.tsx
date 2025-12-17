"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type CardItem = {
    id: string;
    type?: "logo" | "image";
    title?: string | undefined;
    img?: string;
};

function randInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickUniqueIndices(count: number, maxExclusive: number) {
    const set = new Set<number>();
    while (set.size < count) set.add(randInt(0, maxExclusive - 1));
    return Array.from(set);
}

function swap<T>(arr: T[], i: number, j: number) {
    const next = [...arr];
    const tmp = next[i];
    next[i] = next[j];
    next[j] = tmp;
    return next;
}

export default function ShufflingCardsGrid({
    items,
    intervalMs = 2200,          // ✅ holds ~2.2s
    movesPerTick = 3,            // ✅ only 2–4 cards move each cycle
    animDuration = 1.2,          // ✅ slow movement
    className = "",
}: {
    items: CardItem[];
    intervalMs?: number;
    movesPerTick?: number;       // how many swaps per tick
    animDuration?: number;
    className?: string;
}) {
    const [order, setOrder] = useState(items.map((i) => i.id));

    const byId = useMemo(() => {
        const map = new Map<string, CardItem>();
        items.forEach((i) => map.set(i.id, i));
        return map;
    }, [items]);

    useEffect(() => {
        setOrder(items.map((i) => i.id));
    }, [items]);

    useEffect(() => {
        const t = setInterval(() => {
            setOrder((prev) => {
                const n = prev.length;
                if (n < 2) return prev;

                // number of swaps this tick (2..4 feels good)
                const swaps = Math.min(Math.max(movesPerTick, 1), Math.floor(n / 2));

                let next = [...prev];

                for (let s = 0; s < swaps; s++) {
                    // pick two different indices to swap
                    const [i, j] = pickUniqueIndices(2, n);
                    next = swap(next, i, j);
                }

                return next;
            });
        }, intervalMs);

        return () => clearInterval(t);
    }, [intervalMs, movesPerTick]);

    const orderedItems = order.map((id) => byId.get(id)!).filter(Boolean);

    return (
        <div className={className}>
            <div
                className="
          grid gap-5
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-6
        "
            >
                {orderedItems.map((item) => (
                    <motion.div
                        key={item.id}
                        layout
                        transition={{
                            duration: animDuration,                 // ✅ slower
                            ease: [0.22, 1, 0.36, 1],               // ✅ smooth (expo-ish)
                        }}
                        className="
              aspect-square w-full
              border border-black/20
              bg-[#e6d7c4]
              overflow-hidden
              flex items-center justify-center
            "
                    >
                        {item.type === "image" && item.img ? (
                            <img
                                src={item.img}
                                alt={item.title ?? "card"}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <div className="px-4 text-center font-serif text-[#23352d] text-[clamp(16px,1.2vw,22px)] whitespace-pre-line">
                                {item.title}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
