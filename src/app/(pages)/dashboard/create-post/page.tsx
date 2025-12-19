"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    Upload,
    Save,
    Eye,
    FileText,
} from "lucide-react";
import Wrapper from "@/app/Wrapper";
import Header from "@/components/Header";

export default function CreatePostPage() {
    const [status, setStatus] = useState<"draft" | "published">("draft");

    return (
        <main className="min-h-screen bg-[#e6d7c4] text-[#23352d]">
            <Header />

            <section className="mx-auto max-w-[1450px] px-4 lg:px-14 pt-14 lg:pt-20 pb-24">
                {/* Header */}
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-[#23352d]/60">
                            Admin / Blog
                        </div>
                        <h1 className="mt-4 font-[PPPangaia] uppercase leading-[0.95] tracking-wide text-[clamp(2rem,4vw,3.2rem)]">
                            Create Post
                        </h1>
                    </div>

                    <div className="flex gap-3">
                        <Link
                            href="/dashboard"
                            className="text-sm uppercase tracking-widest text-[#23352d]/70 hover:text-[#23352d]"
                        >
                            Back to Dashboard
                        </Link>
                    </div>
                </div>

                {/* Form */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.6fr_0.4fr] gap-10">
                    {/* LEFT – CONTENT */}
                    <div className="space-y-8">
                        {/* Title */}
                        <div>
                            <label className="text-xs uppercase tracking-[0.22em] text-[#23352d]/60">
                                Post Title
                            </label>
                            <input
                                type="text"
                                placeholder="Enter blog title"
                                className="mt-2 w-full border border-black/10 bg-white/20 px-5 py-4 text-lg outline-none focus:border-black/20"
                            />
                        </div>

                        <div>
                            <label className="text-xs uppercase tracking-[0.22em] text-[#23352d]/60">
                                Category
                            </label>
                            <input
                                type="text"
                                placeholder="post category (eg: Trend, Sports )"
                                className="mt-2 w-full border border-black/10 bg-white/20 px-5 py-3 text-sm outline-none focus:border-black/20"
                            />
                        </div>

                        {/* Excerpt */}
                        <div>
                            <label className="text-xs uppercase tracking-[0.22em] text-[#23352d]/60">
                                Excerpt
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Short summary shown on blog listing"
                                className="mt-2 w-full border border-black/10 bg-white/20 px-5 py-4 outline-none focus:border-black/20"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <label className="text-xs uppercase tracking-[0.22em] text-[#23352d]/60">
                                Content
                            </label>
                            <textarea
                                rows={14}
                                placeholder="Write the full blog content here..."
                                className="mt-2 w-full border border-black/10 bg-white/20 px-5 py-4 leading-7 outline-none focus:border-black/20"
                            />
                        </div>

                        {/* SEO */}
                        <div className="border-t border-black/10 pt-8">
                            <div className="text-xs uppercase tracking-[0.22em] text-[#23352d]/60">
                                SEO 
                            </div>

                            <div className="mt-4 space-y-4">
                                <input
                                    type="text"
                                    placeholder="Meta title"
                                    className="w-full border border-black/10 bg-white/20 px-5 py-3 text-sm outline-none"
                                />
                                <textarea
                                    rows={2}
                                    placeholder="Meta description"
                                    className="w-full border border-black/10 bg-white/20 px-5 py-3 text-sm outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT – SIDEBAR */}
                    <div className="space-y-6">
                        {/* Publish Box */}
                        <div className="border border-black/10 bg-white/10 p-6">
                            <div className="flex items-center justify-between">
                                <h3 className="font-serif text-xl">Publish</h3>
                                <FileText className="h-5 w-5 text-[#23352d]/60" />
                            </div>

                            <div className="mt-6 flex flex-col gap-3">
                                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white/20 px-4 py-3 text-sm hover:bg-white/30">
                                    <Save className="h-4 w-4" />
                                    Save Draft
                                </button>

                                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-[#3f4b3f] px-4 py-3 text-sm text-[#e6d7c4] hover:opacity-90">
                                    <ArrowRight className="h-4 w-4" />
                                    Publish
                                </button>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="border border-black/10 bg-white/10 p-6">
                            <div className="flex items-center justify-between">
                                <h3 className="font-serif text-xl">Featured Image</h3>
                                <Eye className="h-5 w-5 text-[#23352d]/60" />
                            </div>

                            <div className="mt-4 flex flex-col items-center justify-center border border-dashed border-black/20 bg-white/20 px-4 py-10 text-center">
                                <Upload className="h-6 w-6 text-[#23352d]/50" />
                                <p className="mt-2 text-sm text-[#23352d]/60">
                                    Upload image
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
