"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import TicketButton from "@/components/TicketButton";

import { motion } from "framer-motion";
import { ParallaxImage } from "./ParallaxImage";

type InstaItem = {
    src: string;
    label: string;
};

export default function Footer({
    instaItems,
}: {
    instaItems: InstaItem[];
}) {
    return (
        <footer className="relative bg-[#fef2e1] text-[#4a5246] overflow-hidden">
            <div className="mx-auto max-w-[1450px] px-4 md:px-6 lg:px-14 pt-20 pb-10 md:pb-44">
                {/* TOP CONTACT SECTION */}
                <div className="grid grid-cols-1  lg:grid-cols-2 md:gap-14 gap-8">
                    <h2 className="font-[PPPangaia]   leading-tight text-[clamp(2rem,5.5vw,3rem)] max-w-xl">
                        PLAN EEN KENNISMAKING
                        VOOR JE EIGEN
                        INTERIEUR
                    </h2>

                    <form className="space-y-2">
                        <div className="grid grid-cols-2 md:gap-4 gap-2">
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm text-[#4a5246]/90"
                                >
                                    Email adres
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="w-full bg-[#e2d3c0]/70 mt-1 px-4 py-2.5 outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="phone"
                                    className="text-sm text-[#4a5246]/90"
                                >
                                    Telefoon nummer
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    className="w-full bg-[#e2d3c0]/70 mt-1 px-4 py-2.5 outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="message"
                                className="text-sm text-[#4a5246]/90"
                            >
                                Bericht
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={1}
                                className="w-full bg-[#e2d3c0]/70 mt-1 px-4 py-2.5 outline-none resize-none"
                            />
                        </div>

                        <p className="text-sm text-[#4a5246]/90 mb-5">
                            Geef uw informatie op en ik bel u zo snel mogelijk op!
                        </p>

                        <TicketButton href="/contact" label="Verzenden" />
                    </form>


                </div>

                {/* INSTAGRAM HIGHLIGHTS */}
                <div className="md:mt-20 mt-16 ">
                    <div className="mb-4  flex items-center justify-between">
                        <div className="text-sm tracking-wide text-[#4a5346]">
                            Instagram Highlights
                        </div>
                        <div className="flex md:gap-4 gap-2">
                            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                                <div
                                    key={i}
                                    className="md:h-11 h-10 w-10 md:w-11 flex items-center justify-center rounded-full border border-black/30 text-[#4a5246]/70 hover:text-[#4a5246]"
                                >
                                    <Icon size={18} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 md:gap-4 gap-2">
                        {instaItems.map((item, i) => (
                            <div
                                key={i}
                                className="group relative aspect-[4/2.5] overflow-hidden"
                            >
                                <ParallaxImage
                                    src={item.src}
                                    alt={item.label}
                                    className="object-cover md:block hidden"
                                />

                                <Image
                                    width={500}
                                    height={500} 
                                    src={item.src}
                                    alt={item.label}
                                    className="object-cover md:hidden"
                                />

                                <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-sm text-white drop-shadow">
                                        {item.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center text-sm text-[#4a5346]">
                    <div>Hellendoorn</div>

                    <div className="flex justify-center gap-6">
                        <Link href="/algemene-voorwaarden" className="underline">
                            Algemene Voorwaarden
                        </Link>
                        <Link href="/privacy-beleid" className="underline">
                            Privacy Beleid
                        </Link>
                    </div>

                    <div className="flex justify-end gap-6">
                        <span>© 2025 TA Design. All rights reserved</span>
                        <span className="underline">Website by Paramor</span>
                    </div>
                </div>

            </div>

            <HalfCutBrandText text="Bond & Value" />
        </footer>
    );
}


function HalfCutBrandText({ text = "Bond & Value" }: { text?: string }) {
    return (
        <div className="pointer-events-none md:block hidden absolute bottom-0 left-0 w-full">
            {/* this is the “window” that only shows half */}
            <div className="h-[10vw] sm:min-h-[80px] min-h-[20px] max-h-[140px] overflow-hidden">
                <div
                    className="flex justify-center"
                >
                    <span
                        className="
              whitespace-nowrap
              font-serif
              leading-none
              tracking-tight
              text-[#485045]
              sm:text-[15vw]
              text-[16vw]
            "
                    >
                        {text}
                    </span>
                </div>
            </div>
        </div>
    );
}
