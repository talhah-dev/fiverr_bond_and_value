"use client";

import Link from "next/link";
import TicketButton from "@/components/TicketButton";
import DecryptedText from "./DecryptedText";
import SplitText from "./SplitText";

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

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <section className="bg-[#e6d7c4] text-[#485044]">
            <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-14 py-12 lg:py-16">
                {/* Title */}
                <h2 className="" >
                    <SplitText
                        text={title}
                        className="font-[PPPangaia] uppercase tracking-wide  leading-[0.9] text-[clamp(2rem,6vw,3.5rem)]"
                        delay={150}
                        duration={2}
                        splitType="lines"
                        from={{ opacity: 0, y: 100 }}
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </h2>

                {/* Divider */}
                <div className="mt-6 h-px w-full bg-[#485044]/40" />

                {/* Content */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-10 lg:gap-16">
                    {/* Left intro */}
                    <div className="flex md:pt-7">
                        <p data-aos="fade-up"
                            className="max-w-md text-[#485044]/70 ">
                            {intro}
                        </p>
                    </div>

                    {/* Right list */}
                    <div className="flex flex-col">
                        <div className="divide-y divide-[#485044]/25 border-t border-[#485044]/0">
                            {items.map((item) => (
                                <Link
                                    key={item.href + item.title}
                                    href={item.href}
                                    data-aos="fade-up"
                                    className="group grid grid-cols-1 md:items-end md:grid-cols-[1.1fr_1.5fr] gap-3 md:gap-8 py-7"
                                >
                                    <div>
                                        <div className="text-[#485044]/85 mb-2">
                                            {item.category}
                                        </div>
                                        <div className="font-serif ">
                                            <DecryptedText text={item.title} className="" useOriginalCharsOnly animateOn="hover" parentClassName="text-[#485044] text-lg cursor-pointer" speed={50} />
                                        </div>
                                    </div>

                                    <div className="md:text-right text-[#485044]/70 text-[15px] leading-7">
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
