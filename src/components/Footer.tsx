"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import TicketButton from "@/components/TicketButton";
import { ParallaxImage } from "./ParallaxImage";
import SplitText from "./SplitText";
import DecryptedText from "./DecryptedText";

type InstaItem = {
    src: string;
    label: string;
};

const instaItems = [
    { src: "/img3.png", label: "Editorial" },
    { src: "/img10.jpg", label: "Workspace" },
    { src: "/img5.jpg", label: "Business" },
    { src: "/img6.jpg", label: "Strategy" },
    { src: "/img7.jpg", label: "Branding" },
    { src: "/img8.jpg", label: "Analytics" },
];


export default function Footer() {
    const handleAnimationComplete = () => {
    };
    return (
        <footer className="relative bg-[#fef2e1] text-[#4a5246] overflow-hidden">
            <div className="mx-auto max-w-[1450px] px-4 md:px-6 lg:px-14 pt-20 pb-10 md:pb-44">
                <div className="grid grid-cols-1  lg:grid-cols-2 md:gap-14 gap-8">
                    <h2 className="">
                        <SplitText
                            text="plan an introductory meeting for your own interior"
                            className="font-[PPPangaia] uppercase  !text-start leading-tight text-[clamp(2rem,5.5vw,3rem)] max-w-xl"
                            delay={150}
                            duration={2}
                            splitType="lines"
                            from={{ opacity: 0, y: 100 }}
                            onLetterAnimationComplete={handleAnimationComplete}
                        />

                    </h2>

                    <form className="space-y-2">
                        <div className="grid grid-cols-2 md:gap-4 gap-2">
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm text-[#4a5246]/90"
                                >
                                    Email Address
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
                                    Phone
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
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={1}
                                className="w-full bg-[#e2d3c0]/70 mt-1 px-4 py-2.5 outline-none resize-none"
                            />
                        </div>

                        <p className="text-sm text-[#4a5246]/90 mb-5">
                            By clicking Let's Bond, you agree to our Terms and Conditions and Privacy Policy
                        </p>

                        <TicketButton href="/contact" label="Let's Bond" />
                    </form>


                </div>

                <div className="md:mt-20 mt-16 ">
                    <div className="mb-4 flex items-center justify-between">
                        <div className="text-sm tracking-wide text-[#4a5346]">
                            Instagram Highlights
                        </div>

                        <div className="flex md:gap-4 gap-2">
                            {[
                                { href: "https://www.instagram.com/bondandvale", Icon: Instagram, label: "Instagram" },
                                { href: "https://www.facebook.com/share/1BS1H9f9mn/?mibextid=wwXIfr", Icon: Facebook, label: "Facebook" },
                                { href: "https://www.linkedin.com/company/bond-vale", Icon: Linkedin, label: "LinkedIn" },
                            ].map(({ href, Icon, label }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="md:h-11 h-10 w-10 md:w-11 flex items-center justify-center rounded-full border border-black/30 text-[#4a5246]/70 hover:text-[#4a5246]"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 md:gap-4 gap-2">
                        {instaItems.map((item, i) => (
                            <div
                                key={i}
                                className="group relative h-32 overflow-hidden"
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
                                    className="object-cover h-full md:hidden "
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
                    <p className="md:block hidden">Portfolio</p>

                    <div className="flex md:justify-center justify-between gap-6">
                        <Link href="/terms-and-conditions" className="underline">
                            <DecryptedText text="Terms and Conditions" className="text-[#485045] underline " useOriginalCharsOnly animateOn="hover" parentClassName="text-[#485045] cursor-pointer underline    " speed={50} />
                        </Link>
                        <Link href="/privacy-policy" className="underline">
                            <DecryptedText text="Privacy Policy" className="text-[#485045] underline " useOriginalCharsOnly
                                animateOn="hover" parentClassName="text-[#485045] cursor-pointer underline  " speed={50} />
                        </Link>
                    </div>

                    <div className="flex justify-end md:flex-row flex-col text-center md:text-start gap-6">
                        <span>© 2025 Bond & Value. All rights reserved</span>
                        <span className="underline md:block hidden">Website by Quzex</span>
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
