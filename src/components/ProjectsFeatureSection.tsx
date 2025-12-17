"use client";

import Image from "next/image";
import TicketButton from "@/components/TicketButton";
import { ParallaxImage } from "./ParallaxImage";

type ProjectsFeatureProps = {
    leftImage: string;
    rightTopImage: string;
    eyebrow?: string;
    title: string;
    body: string;
    buttonHref: string;
    buttonLabel: string;
};

export default function ProjectsFeatureSection({
    leftImage,
    rightTopImage,
    eyebrow = "PROJECTEN",
    title,
    body,
    buttonHref,
    buttonLabel,
}: ProjectsFeatureProps) {
    return (
        <section className="bg-[#e6d7c4] text-[#23352d]">
            <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-14 py-10 sm:py-14 lg:py-20">
                {/* Desktop layout */}
                <div className="hidden lg:grid grid-cols-[1.15fr_0.85fr] gap-12 items-stretch">
                    {/* LEFT BIG IMAGE */}
                    <div className="relative overflow-hidden">
                        <div className="relative aspect-[4/3] w-full ">
                            <ParallaxImage
                                src={leftImage}
                                alt="Project image"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="relative flex flex-col">
                        {/* top small image */}
                        <div className="flex justify-end">
                            <div className="relative  w-[min(420px,32vw)] aspect-[16/9] overflow-hidden">
                                <ParallaxImage 
                                    src={rightTopImage}
                                    alt="Project preview"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* centered content area */}
                        <div className="mt-10 flex-1 grid grid-cols-[1fr_1fr] gap-10 items-center">
                            {/* big title (center-ish) */}
                            <div className="pr-4">
                                <div className="mb-6 text-center font-serif tracking-widest text-[#23352d]/70">
                                    {eyebrow}
                                </div>

                                <h2 className="font-serif leading-[0.92] tracking-wide text-[#23352d] text-[clamp(44px,4.2vw,82px)]">
                                    {title}
                                </h2>
                            </div>

                            {/* paragraph + button */}
                            <div className="pl-2">
                                <p className="text-[#23352d]/80 text-[clamp(14px,1vw,16px)] leading-7">
                                    {body}
                                </p>

                                <div className="mt-7">
                                    <TicketButton
                                        href={buttonHref}
                                        label={buttonLabel}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile / Tablet layout */}
                <div className="lg:hidden space-y-8">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                            src={leftImage}
                            alt="Project image"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="pointer-events-none absolute inset-0 bg-black/5" />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="font-serif tracking-widest text-[#23352d]/70">
                            {eyebrow}
                        </div>

                        <div className="relative w-[46%] aspect-[16/9] overflow-hidden">
                            <Image
                                src={rightTopImage}
                                alt="Project preview"
                                fill
                                className="object-cover"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-black/5" />
                        </div>
                    </div>

                    <h2 className="font-serif leading-[0.92] tracking-wide text-[#23352d] text-[clamp(34px,9vw,54px)]">
                        {title}
                    </h2>

                    <p className="text-[#23352d]/80 text-[15px] leading-7">
                        {body}
                    </p>

                    <TicketButton
                        href={buttonHref}
                        label={buttonLabel}
                    />
                </div>
            </div>
        </section>
    );
}
