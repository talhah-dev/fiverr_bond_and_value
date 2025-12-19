"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import SplitText from "./SplitText";

type Testimonial = {
    name: string;
    headline: string;
    body: string;
};

export default function TestimonialsSlider({
    label = "Testimonials",
    title = "WHAT CLIENT SAYS\nABOUT BOND & VALE",
    subtitle = `Discover how our strategic PR and marketing solutions have transformed brands\nworldwide. Hear from our satisfied clients!`,
    testimonials,
    className = "",
}: {
    label?: string;
    title?: string;
    subtitle?: string;
    testimonials: Testimonial[];
    className?: string;
}) {
    const swiperRef = useRef<SwiperType | null>(null);
    const [active, setActive] = useState(0);

    const handleAnimationComplete = () => {
        console.log('!');
    };

    return (
        <section className={["bg-[#e6d7c4] text-[#23352d]", className].join(" ")}>
            <div className="mx-auto max-w-[1450px]  lg:px-14 py-14 lg:py-24">
                {/* label */}
                <div className="flex items-center px-4 justify-center gap-4">
                    <span className="h-[1px] w-10 bg-black/20" />
                    <span className="rounded-full border border-black/15 bg-black/5 px-4 py-1 text-xs tracking-widest">
                        {label}
                    </span>
                    <span className="h-[1px] w-10 bg-black/20" />
                </div>

                {/* heading */}
                <div className="mt-8 text-center px-4">
                    <h2 className="max-w-3xl mx-auto">
                        <SplitText
                            text={title}
                            className="font-[PPPangaia] uppercase leading-[1] md:leading-[1.2] tracking-wide text-[clamp(2.2rem,5vw,3.5rem)] whitespace-pre-line"
                            delay={150}
                            duration={2}
                            splitType="lines"
                            from={{ opacity: 0, y: 100 }}
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                    </h2>
                    <p data-aos="fade-up" className="mx-auto  mt-6 max-w-2xl text-[clamp(0.9rem,1.2vw,1rem)] text-[#23352d]/70 leading-7 whitespace-pre-line">
                        {subtitle}
                    </p>
                </div>

                {/* slider */}
                <div className="mt-12 lg:mt-16" data-aos="fade-up">
                    <Swiper
                        onSwiper={(s) => (swiperRef.current = s)}
                        onSlideChange={(s) => setActive(s.realIndex)}
                        loop
                        centeredSlides
                        slidesPerView={1.08}
                        spaceBetween={16}
                        speed={900} // smoother
                        breakpoints={{
                            768: { slidesPerView: 1.6, spaceBetween: 5 },
                            1024: { slidesPerView: 2.2, spaceBetween: 10 },
                            1280: { slidesPerView: 2.4, spaceBetween: 15 },
                        }}
                        className="!overflow-visible"
                    >
                        {testimonials.map((t, idx) => (
                            <SwiperSlide key={idx}>
                                {({ isActive }) => (
                                    <div
                                        className={[
                                            "transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]",
                                            isActive ? "scale-100 opacity-100" : "scale-[0.92] opacity-80",
                                        ].join(" ")}
                                    >
                                        <Card t={t} />
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* controls (NO line between arrows) */}
                    <div className="mt-10 flex items-center justify-center gap-5">
                        <button
                            type="button"
                            aria-label="Previous"
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/25 bg-transparent text-[#23352d] transition hover:bg-black/5"
                        >
                            <span className="text-xl transition group-hover:-translate-x-[1px]">←</span>
                        </button>

                        <button
                            type="button"
                            aria-label="Next"
                            onClick={() => swiperRef.current?.slideNext()}
                            className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/25 bg-[#23352d] text-[#e6d7c4] transition hover:bg-[#1b2a24]"
                        >
                            <span className="text-xl transition group-hover:translate-x-[1px]">→</span>
                        </button>
                    </div>

                    {/* small dots (optional, clean) */}
                    {/* <div className="mt-5 flex justify-center gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => swiperRef.current?.slideToLoop(i)}
                                className={[
                                    "h-2 w-2 rounded-full transition",
                                    i === active ? "bg-[#23352d]" : "bg-black/20 hover:bg-black/30",
                                ].join(" ")}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
}

function Card({ t }: { t: Testimonial }) {
    return (
        <div className="relative border border-black/15 bg-[#24352f] text-[#e6d7c4] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-start justify-between gap-6">
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-4xl leading-none opacity-90 select-none">”</div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-6">
                    <div className="text-[clamp(1.05rem,1.4vw,1.25rem)] font-semibold">
                        {t.headline}
                    </div>
                    <p className="mt-4 text-[clamp(0.92rem,1.1vw,1rem)] leading-7 text-[#e6d7c4]/85">
                        {t.body}
                    </p>
                </div>
            </div>

            {/* subtle sheen */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(800px_circle_at_30%_0%,#fff,transparent_55%)]" />
        </div>
    );
}
