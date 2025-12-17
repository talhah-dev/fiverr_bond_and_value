"use client";

import Image from "next/image";

export default function TabLoader() {
    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f241f]"
            aria-label="Loading"
            role="status"
        >
            <Image
                src="/loaderlogo.svg"
                alt="Bond & Vale"
                width={420}
                height={120}
                priority
                className="max-w-4xl w-full h-auto"
            />
        </div>
    );
}
