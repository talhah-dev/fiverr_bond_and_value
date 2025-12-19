"use client";

import React from "react";
import Link from "next/link";
import {
    FileText,
    Upload,
    Plus,
    Eye,
    Pencil,
    Trash2,
    MessageSquare,
    Image as ImageIcon,
    Form,
    Book,
} from "lucide-react";
import Wrapper from "@/app/Wrapper";
import Header from "@/components/Header";

const stats = [
    { label: "Form Submissions", value: 42, icon: MessageSquare },
    { label: "Published Blogs", value: 18, icon: FileText },
    { label: "Draft Posts", value: 5, icon: FileText },
];

const blogs = [
    {
        title: "Pay-on-Success: Redefining PR",
        status: "Published",
        date: "2024-03-21",
    },
    {
        title: "Building Reputation That Lasts",
        status: "Published",
        date: "2024-03-10",
    },
    {
        title: "Narrative-led Investor Relations",
        status: "Draft",
        date: "2024-03-02",
    },
];

export default function AdminDashboard() {
    return (
        <main className="min-h-screen bg-[#e6d7c4] text-[#23352d]">
            <Header />

            <section className="mx-auto max-w-[1450px] px-4 lg:px-14 pt-14 lg:pt-20 pb-24">
                {/* Heading */}
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-[#23352d]/60">
                            Admin Dashboard
                        </div>
                        <h1 className="mt-4 font-[PPPangaia] uppercase leading-[0.95] tracking-wide text-[clamp(2.2rem,4.5vw,3.6rem)]">
                            Control Center
                        </h1>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                        <Link
                            href="/dashboard/create-post"
                            className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-[#3f4b3f] px-5 py-3 text-sm text-[#e6d7c4] hover:opacity-90 transition"
                        >
                            <Plus className="h-4 w-4" />
                            Create Post
                        </Link>
                        <Link
                            href="/dashboard/submissions"
                            className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/20 px-5 py-3 text-sm text-[#23352d] hover:bg-white/30 transition"
                        >
                            <Book className="h-4 w-4" />
                            Form Submissions
                        </Link>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {stats.map((s) => (
                        <div
                            key={s.label}
                            className="border border-black/10 bg-white/10 px-5 py-6"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-serif text-3xl leading-none">
                                        {s.value}
                                    </div>
                                    <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#23352d]/60">
                                        {s.label}
                                    </div>
                                </div>
                                <s.icon className="h-5 w-5 text-[#23352d]/50" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Blog Table */}
                <div className="mt-16">
                    <div className="flex items-center justify-between">
                        <h2 className="font-serif text-2xl">Blog Posts</h2>
                        <Link
                            href="/admin/blogs"
                            className="text-sm uppercase tracking-widest text-[#23352d]/60 hover:text-[#23352d]"
                        >
                            View all
                        </Link>
                    </div>

                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-black/10 text-left text-xs uppercase tracking-[0.22em] text-[#23352d]/60">
                                    <th className="pb-4">Title</th>
                                    <th className="pb-4">Status</th>
                                    <th className="pb-4">Date</th>
                                    <th className="pb-4 text-right">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {blogs.map((blog) => (
                                    <tr
                                        key={blog.title}
                                        className="border-b border-black/5"
                                    >
                                        <td className="py-4 font-medium">
                                            {blog.title}
                                        </td>
                                        <td className="py-4">
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs ${blog.status === "Published"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                                    }`}
                                            >
                                                {blog.status}
                                            </span>
                                        </td>
                                        <td className="py-4 text-[#23352d]/70">
                                            {blog.date}
                                        </td>
                                        <td className="py-4">
                                            <div className="flex justify-end gap-3">
                                                <button className="text-[#23352d]/60 hover:text-[#23352d]">
                                                    <Eye className="h-4 w-4" />
                                                </button>
                                                <button className="text-[#23352d]/60 hover:text-[#23352d]">
                                                    <Pencil className="h-4 w-4" />
                                                </button>
                                                <button className="text-red-600/70 hover:text-red-700">
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    );
}
