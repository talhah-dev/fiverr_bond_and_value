"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Wrapper from "@/app/Wrapper";
import Header from "@/components/Header";
import DecryptedText from "@/components/DecryptedText";

type BlogDoc = {
    _id: string;
    title: string;
    slug: string;
    category: string;
    readTime?: string;
    publishedAt?: string | null;
    createdAt: string;
};

export default function Blog() {
    const [blogs, setBlogs] = useState<BlogDoc[]>([]);
    const [loading, setLoading] = useState(true);
    const [errMsg, setErrMsg] = useState("");

    const formatPrettyDate = (iso?: string | null) => {
        if (!iso) return "";
        const d = new Date(iso);
        if (Number.isNaN(d.getTime())) return iso;

        return d.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
        });
    };

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            setErrMsg("");

            try {
                // only published posts for public blog page
                const res = await axios.get("/api/blog?status=published&limit=50&page=1");
                if (res.data?.success) {
                    setBlogs(res.data.posts || []);
                } else {
                    setErrMsg(res.data?.message || "Failed to load blogs");
                }
            } catch (e: any) {
                setErrMsg(e?.response?.data?.message || e?.message || "Failed to load blogs");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <Wrapper>
            <section className="bg-[#eadcc9] text-[#23352d]">
                <Header />

                <div className="mx-auto max-w-[1400px] px-4 md:px-10 py-14 md:py-20">
                    {/* Top intro */}
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="font-[PPPangaia] text-lg font-semibold tracking-widest uppercase text-[#23352d]/70">
                            Blogs
                        </div>

                        <p className="mt-6 leading-6 md:leading-7 text-[#23352d]/60">
                            Welcome to the Bond &amp; Vale blog! Here I share the latest interior
                            design trends, clever styling tips, and practical advice for both the
                            office and the home. Whether you're looking for creative ideas, helpful
                            guides, or just a dose of inspiration, you'll find it here. Enjoy!
                        </p>
                    </div>

                    {/* States */}
                    {loading && (
                        <div className="mt-14 text-center text-sm text-[#23352d]/60">
                            Loading posts…
                        </div>
                    )}

                    {!loading && errMsg && (
                        <div className="mt-14 text-center text-sm text-red-700/80">
                            {errMsg}
                        </div>
                    )}

                    {!loading && !errMsg && blogs.length === 0 && (
                        <div className="mt-14 text-center text-sm text-[#23352d]/60">
                            No posts yet.
                        </div>
                    )}

                    {/* List */}
                    {!loading && !errMsg && blogs.length > 0 && (
                        <div className="mt-14 md:mt-16">
                            {blogs.map((item) => {
                                const date = formatPrettyDate(item.publishedAt || item.createdAt);
                                const readTime = item.readTime || "—";

                                return (
                                    <Link
                                        key={item._id}
                                        href={`/blog/${item.slug}`}
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
                                                <span>{date}</span>
                                                <span>{readTime}</span>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>
        </Wrapper>
    );
}
