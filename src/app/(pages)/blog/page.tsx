"use client";

import React from "react";
import Link from "next/link";
import Wrapper from "@/app/Wrapper";
import Header from "@/components/Header";
import DecryptedText from "@/components/DecryptedText";
import TabLoader from "@/components/Loader";

type BlogItem = {
    title: string;
    category: string;
    date: string;
    readTime: string;
    href: string;
};

const BLOGS: BlogItem[] = [
    {
        href: "/blog/eerste-blogpost",
        category: "Trend",
        title: "Branding 101 — How to Build a Powerful and Memorable Brand",
        date: "June 17, 2025",
        readTime: "2m",

    },
    {
        href: "/blog/minimalistisch-wonen",
        category: "Trend",
        title: "Digital Marketing Trends 2024 - What Your Brand Needs to Stay Ahead",
        date: "June 17, 2025",
        readTime: "2m",
    },
    {
        href: "/blog/duurzaam-design",
        category: "Trend",
        title: "The Power of PR — How Strategic Public Relations Can Transform Your Brand",
        date: "June 17, 2025",
        readTime: "2m",
    },
    {
        href: "/blog/eerste-blogpost",
        category: "Trend",
        title: "What is the Difference Between PR and Marketing?",
        date: "June 17, 2025",
        readTime: "2m",

    },
    {
        href: "/blog/minimalistisch-wonen",
        category: "Trend",
        title: "Branding 101 — How to Build a Powerful and Memorable Brand",
        date: "June 17, 2025",
        readTime: "2m",
    },
    {
        href: "/blog/duurzaam-design",
        category: "Trend",
        title: "Digital Marketing Trends 2024 — What Your Brand Needs to Stay Ahead",
        date: "June 17, 2025",
        readTime: "2m",
    },
];

export default function Blog() {
    return (
        <Wrapper>
            {/* <TabLoader direction="top" speed={1.4} /> */}
            <section className="bg-[#eadcc9] text-[#23352d]">
                <Header />
                <div className="mx-auto max-w-[1400px] px-4 md:px-10 py-14 md:py-20">
                    {/* Top intro */}
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="font-[PPPangaia] text-lg font-semibold tracking-widest uppercase text-[#23352d]/70">
                            Blogs
                        </div>

                        <p className="mt-6  leading-6 md:leading-7 text-[#23352d]/60">
                            Welcome to the Bond & Vale blog! Here I share the latest interior design trends, clever styling tips, and practical advice for both the office and the home. Whether you're looking for creative ideas, helpful guides, or just a dose of inspiration, you'll find it here. Enjoy!
                        </p>
                    </div>

                    {/* List */}
                    <div className="mt-14 md:mt-16">
                        {BLOGS.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.href}
                                className="group block border-b border-[#23352d]/45"
                            >
                                <div className="py-8 md:py-10">
                                    {/* Big title */}
                                    <h2 className="text-center font-[PPPangaia] uppercase tracking-wide leading-[1.1] md:leading-[1.2] text-[clamp(1.2rem,5.7vw,2rem)] text-[#485045] transition-colors duration-300">
                                        <DecryptedText
                                            text={item.title}
                                            className=""
                                            useOriginalCharsOnly
                                            animateOn="hover"
                                            parentClassName="text-[#485045] cursor-pointer"
                                            speed={50}
                                        />
                                    </h2>

                                    {/* Meta row */}
                                    <div className="mt-4 flex items-center justify-center gap-10 md:gap-16 text-[#23352d]/60">
                                        <span>{item.category}</span>
                                        <span>{item.date}</span>
                                        <span>{item.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </Wrapper>
    );
}
