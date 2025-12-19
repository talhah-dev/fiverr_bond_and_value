"use client";

import Wrapper from "@/app/Wrapper";
import Header from "@/components/Header";
import { ParallaxImage } from "@/components/ParallaxImage";
import Image from "next/image";
import React from "react";

type SubBlogProps = {
    title?: string;
    category?: string;
    date?: string;
    heroImage?: string;
};

export default function SubBlog({
    title = "3 Essential New Build Tips!",
    category = "New Build Tips",
    date = "May 29, 2025",
    heroImage = "/img2.jpg",
}: SubBlogProps) {
    return (
        <Wrapper>
            <main className="bg-[#e6d7c4] text-[#23352d]">
                <Header />
                {/* Top Header Area */}
                <section className="relative">
                    <div className="mx-auto max-w-[1400px] px-4 md:px-10 pt-14 md:pt-20">
                        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_0.7fr] items-start">
                            {/* Left: Big Title */}
                            <h1 className="font-[PPPangaia] uppercase tracking-wide leading-[0.95] text-[clamp(1.6rem,5.5vw,3.3rem)]">
                                {title}
                            </h1>

                            {/* Right: Meta */}
                            <div className="flex md:justify-end gap-16 text-sm uppercase tracking-widest text-[#23352d]/65">
                                <div className="text-right">
                                    <div className="mt-2">{category}</div>
                                </div>
                                <div className="text-right">
                                    <div className="mt-2">{date}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="mx-auto max-w-[1400px] px-4 md:px-10 mt-10 md:mt-14 pb-10 md:pb-14">
                        <div className="relative overflow-hidden ">
                            <div className="relative aspect-[21/9] md:aspect-[24/9] w-full">
                                {/* Use next/image in your project if you want */}
                                <ParallaxImage
                                speed={30}
                                    src={heroImage}
                                    alt={title}
                                    className="rounded-lg h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="mx-auto max-w-[1400px] px-4 md:px-10 pb-20 md:pb-28">
                    <article className="space-y-10 text-[#23352d]/80 leading-7">
                        {/* Block 1 */}
                        <div className="space-y-3">
                            <h2 className="font-serif text-[clamp(1.5rem,2.6vw,2rem)] text-[#23352d]">
                                1) Plan your layout before you build
                            </h2>
                            <p>
                                Before you commit to walls, wiring, or plumbing, define how you want to
                                live in the space. Think about daily routines, storage, lighting, and how
                                rooms connect. A well-planned layout prevents expensive changes later and
                                keeps your home functional long-term.
                            </p>
                        </div>

                        {/* Block 2 */}
                        <div className="space-y-3">
                            <h2 className="font-serif text-[clamp(1.5rem,2.6vw,2rem)] text-[#23352d]">
                                2) Choose timeless materials first
                            </h2>
                            <p>
                                Trends come and go, but your core finishes stay for years. Prioritize
                                neutral, high-quality materials for floors, cabinetry, and large surfaces.
                                You can always add trend accents through décor, art, lighting, and textiles.
                            </p>
                        </div>

                        {/* Block 3 */}
                        <div className="space-y-3">
                            <h2 className="font-serif text-[clamp(1.5rem,2.6vw,2rem)] text-[#23352d]">
                                3) Don’t underestimate lighting
                            </h2>
                            <p>
                                Great interiors are built with layers of light: functional, ambient, and
                                accent. Plan your lighting early so wiring is positioned correctly. Combine
                                ceiling lights with wall lights and warm indirect lighting to create a calm,
                                premium atmosphere.
                            </p>
                        </div>

                        {/* Optional extra block */}
                        <div className="pt-6 border-t border-black/10">
                            <h3 className="font-serif text-xl text-[#23352d]">Final note</h3>
                            <p className="mt-3">
                                A new build is the perfect moment to design intentionally. If you want help
                                translating your ideas into a cohesive interior plan, we can support you
                                with strategy, visuals, and guidance from start to finish.
                            </p>
                        </div>
                    </article>
                </section>
            </main>
        </Wrapper>
    );
}
