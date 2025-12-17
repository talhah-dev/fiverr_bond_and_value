"use client";

import Link from "next/link";
import TicketButton from "@/components/TicketButton";

type BlogItem = {
    href: string;
    category: string;
    title: string;
    excerpt: string;
};

export default function BlogSection({
    title = "BLOGS & NIEUWS",
    intro,
    items,
    buttonHref = "/blog",
    buttonLabel = "Alle blogs",
}: {
    title?: string;
    intro: string;
    items: BlogItem[];
    buttonHref?: string;
    buttonLabel?: string;
}) {
    return (
        <section className="bg-[#e6d7c4] text-[#23352d]">
            <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-14 py-12 lg:py-16">
                {/* Title */}
                <h2 className="font-serif tracking-wide leading-[0.9] text-[clamp(44px,6vw,90px)]">
                    {title}
                </h2>

                {/* Divider */}
                <div className="mt-6 h-px w-full bg-[#23352d]/40" />

                {/* Content */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-10 lg:gap-16">
                    {/* Left intro */}
                    <div className="flex">
                        <p className="max-w-md text-[#23352d]/70 text-[15px] leading-7">
                            {intro}
                        </p>
                    </div>

                    {/* Right list */}
                    <div className="flex flex-col">
                        <div className="divide-y divide-[#23352d]/25 border-t border-[#23352d]/0">
                            {items.map((item) => (
                                <Link
                                    key={item.href + item.title}
                                    href={item.href}
                                    className="group grid grid-cols-1 md:grid-cols-[1.1fr_1.5fr] gap-3 md:gap-8 py-7"
                                >
                                    <div>
                                        <div className="text-[#23352d]/55 text-sm mb-2">
                                            {item.category}
                                        </div>
                                        <div className="font-serif text-[#23352d] text-[clamp(20px,2.2vw,28px)] leading-[1.05]">
                                            {item.title}
                                        </div>
                                    </div>

                                    <div className="md:text-right text-[#23352d]/70 text-[15px] leading-7">
                                        {item.excerpt}
                                        <span className="ml-2 inline-block opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                                            →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Button aligned to bottom-right */}
                        <div className="mt-8 flex justify-start lg:justify-end">
                            <TicketButton
                                href={buttonHref}
                                label={buttonLabel}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
