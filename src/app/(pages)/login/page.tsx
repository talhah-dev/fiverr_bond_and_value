"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Wrapper from "@/app/Wrapper";
import Header from "@/components/Header";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function AdminLoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(true);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (loading) return;
        setLoading(true);

        try {
            // Optional: allow ?callbackURL=... in the URL, else default to /dashboard
            const callbackURL =
                searchParams.get("callbackURL") ?? `${window.location.origin}/dashboard`;

            const { data, error } = await authClient.signIn.email({
                email,
                password,
                rememberMe,
                callbackURL,
            });

            if (error) {
                // You can customize based on error.code / error.message if Better Auth provides it
                alert(error.message || "Invalid email or password.");
                setLoading(false);
                return;
            }

            // If Better Auth redirects automatically via callbackURL, you may not need this.
            // But keeping it is fine as a fallback:
            router.push("/dashboard");
        } catch (err: any) {
            alert(err?.message || "Something went wrong. Please try again.");
            setLoading(false);
        }
    };

    return (
        <Wrapper>
            <main className="min-h-screen bg-[#e6d7c4] text-[#23352d]">
                <Header />

                <section className="mx-auto max-w-[1450px] px-4 lg:px-14 pt-14 lg:pt-20 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                        {/* Left intro */}
                        <div className="pt-6">
                            <div className="text-xs uppercase tracking-[0.22em] text-[#23352d]/60">
                                Admin Access
                            </div>

                            <h1 className="mt-5 font-[PPPangaia] uppercase leading-[0.92] tracking-wide text-[clamp(2.2rem,4.8vw,3.8rem)]">
                                Sign in to the Admin Panel
                            </h1>

                            <p className="mt-5 max-w-xl text-[#23352d]/75 leading-7">
                                This area is restricted. Use your admin credentials to manage
                                content and site updates.
                            </p>

                            <div className="mt-10 flex flex-wrap items-center gap-3">
                                <span className="rounded-full border border-black/10 bg-white/10 px-4 py-2 text-sm text-[#23352d]/80">
                                    Secure Access
                                </span>
                                <span className="rounded-full border border-black/10 bg-white/10 px-4 py-2 text-sm text-[#23352d]/80">
                                    Role Protected
                                </span>
                            </div>
                        </div>

                        {/* Right card */}
                        <div className="border border-black/10 bg-white/10">
                            <div className="p-6 sm:p-8">
                                <div className="flex items-start justify-between gap-6">
                                    <div>
                                        <div className="text-xs uppercase tracking-[0.22em] text-[#23352d]/60">
                                            Login
                                        </div>
                                        <h2 className="mt-3 font-serif text-2xl leading-tight">
                                            Admin Credentials
                                        </h2>
                                    </div>

                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/20">
                                        <Lock className="h-5 w-5 text-[#23352d]/70" />
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                                    {/* Email */}
                                    <div>
                                        <label className="block text-[10px] uppercase tracking-[0.22em] text-[#23352d]/60">
                                            Email
                                        </label>
                                        <div className="mt-2 flex items-center gap-3 border border-black/10 bg-white/20 px-4 py-3">
                                            <Mail className="h-4 w-4 text-[#23352d]/60" />
                                            <input
                                                type="email"
                                                required
                                                placeholder="admin@bondandvale.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                autoComplete="email"
                                                className="w-full bg-transparent text-[#23352d] placeholder:text-[#23352d]/45 outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label className="block text-[10px] uppercase tracking-[0.22em] text-[#23352d]/60">
                                            Password
                                        </label>
                                        <div className="mt-2 flex items-center gap-3 border border-black/10 bg-white/20 px-4 py-3">
                                            <Lock className="h-4 w-4 text-[#23352d]/60" />
                                            <input
                                                type={showPass ? "text" : "password"}
                                                required
                                                placeholder="••••••••••"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                autoComplete="current-password"
                                                className="w-full bg-transparent text-[#23352d] placeholder:text-[#23352d]/45 outline-none"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPass((v) => !v)}
                                                className="text-[#23352d]/60 hover:text-[#23352d]"
                                                aria-label={showPass ? "Hide password" : "Show password"}
                                            >
                                                {showPass ? (
                                                    <EyeOff className="h-4 w-4" />
                                                ) : (
                                                    <Eye className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Remember + back */}
                                    <div className="flex items-center justify-between gap-4 pt-2">
                                        <label className="flex items-center gap-2 text-sm text-[#23352d]/70">
                                            <input
                                                type="checkbox"
                                                checked={rememberMe}
                                                onChange={(e) => setRememberMe(e.target.checked)}
                                                className="h-4 w-4 accent-[#3f4b3f]"
                                            />
                                            Remember me
                                        </label>

                                        <Link
                                            href="/"
                                            className="text-sm uppercase tracking-widest text-[#23352d]/60 hover:text-[#23352d]"
                                        >
                                            Back to site
                                        </Link>
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="mt-2 inline-flex w-full items-center justify-center gap-3 rounded-full border border-black/15 bg-[#3f4b3f] px-6 py-3 text-sm text-[#e6d7c4] hover:opacity-90 transition disabled:opacity-60"
                                    >
                                        {loading ? "Signing in..." : "Sign In"}
                                        <ArrowRight className="h-4 w-4" />
                                    </button>

                                    {/* Small note */}
                                    <p className="pt-4 text-xs text-[#23352d]/55 leading-5">
                                        By signing in, you confirm you are authorized to access this
                                        administration area.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Wrapper>
    );
}
