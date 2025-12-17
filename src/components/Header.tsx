"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight, X, Instagram, Facebook, Linkedin } from "lucide-react";
import DecryptedText from '@/components/DecryptedText'


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navId = useId();

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((v) => !v);

  // ESC closes
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // GSAP open/close animation
  useEffect(() => {
    const overlay = overlayRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!overlay || !left || !right) return;

    // create timeline once
    if (!tlRef.current) {
      gsap.set(overlay, { autoAlpha: 0, pointerEvents: "none" });
      gsap.set(left, { yPercent: -100, autoAlpha: 1 });
      gsap.set(right, { yPercent: -100, autoAlpha: 1 });

      const tl = gsap.timeline({ paused: true });

      // overlay fade in
      tl.to(overlay, { autoAlpha: 1, duration: 0.15, ease: "power1.out" }, 0);

      // left panel first (from top)
      tl.to(
        left,
        { yPercent: 0, duration: 0.55, ease: "expo.out" },
        0
      );

      // right panel after 500ms
      tl.to(
        right,
        { yPercent: 0, duration: 0.55, ease: "expo.out" },
        0.1
      );

      tlRef.current = tl;
    }

    const tl = tlRef.current;

    if (menuOpen) {
      gsap.set(overlay, { pointerEvents: "auto" });
      tl.play(0);
    } else {
      // close animation (reverse)
      tl.reverse();
      // disable pointer events once fully hidden
      tl.eventCallback("onReverseComplete", () => {
        gsap.set(overlay, { pointerEvents: "none" });
      });
    }
  }, [menuOpen]);

  const menuItems = [
    { href: "/", label: "HOME" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ];

  return (
    <>
      {/* TOP NAVBAR (keep your Webflow classes, Tailwind for layout) */}
      <header className="navbar relative z-[999] w-full">
        <div
          className="w-full"
        >
          <div className="mx-auto flex h-24 w-full max-w-[1400px] items-center justify-between px-6">
            <div className="copyright-text lg:flex hidden items-center">
              <div className="text_rg-button text-white/90">Bonf & Value©</div>
            </div>

            <Link
              href="/"
              aria-current="page"
              className="ta-logo w-inline-block w--current flex items-center justify-center"
              onClick={closeMenu}
            >
              <Image
                src="/logoicon.webp"
                alt="Logo TA Creatives &amp; Design"
                width={200}
                height={200}
                className="w-auto invert"
              />
            </Link>

            <nav className="navbar-items hidden items-center gap-10 lg:flex">
              <Link href="/" className="text_rg-button text-white/90 hover:text-white">

                <DecryptedText text="Home" className="text-white " useOriginalCharsOnly animateOn="hover" parentClassName="text-white cursor-pointer" speed={50} />
              </Link>
              <Link href="/services" className="text_rg-button text-white/90 hover:text-white">
                <DecryptedText text="Services" className="text-white " useOriginalCharsOnly animateOn="hover" parentClassName="text-white cursor-pointer" speed={50} />
                
              </Link>
              <Link href="/blog" className="text_rg-button text-white/90 hover:text-white">
                <DecryptedText text="Blog" className="text-white " useOriginalCharsOnly animateOn="hover" parentClassName="text-white cursor-pointer" speed={50} />
                
              </Link>
              <Link href="/contact" className="text_rg-button text-white/90 hover:text-white">
                <DecryptedText text="Contact" className="text-white " useOriginalCharsOnly animateOn="hover" parentClassName="text-white cursor-pointer" speed={50} />
                
              </Link>
            </nav>

            <div className="navbar-wrapper-40 flex items-center gap-8">
              <Link
                href="/contact"
                className="contact-button hidden items-center gap-3 lg:inline-flex"
                onClick={closeMenu}
              >
                <div className="text_rg-button text-white/90 hover:text-white">
                <DecryptedText text="Let's Bond" className="text-white " useOriginalCharsOnly animateOn="hover" parentClassName="text-white cursor-pointer" speed={50} />
                  
                </div>
                <ArrowRight className="h-4 w-4 text-white/90" />
              </Link>

              <button
                type="button"
                className="cursor-pointer text-white/90 hover:text-white"
                aria-expanded={menuOpen}
                aria-controls={navId}
                onClick={toggleMenu}
              >
               <DecryptedText text="menu" className="text-white " useOriginalCharsOnly animateOn="hover" parentClassName="text-white cursor-pointer" speed={50} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FULLSCREEN MENU OVERLAY */}
      <div
        id={navId}
        ref={overlayRef}
        className="nav-menu fixed inset-0 z-[1000] h-screen w-screen"
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 bg-black/10"
          onClick={closeMenu}
        />

        <div className="menu-wrapper fixed inset-0 z-[9999] w-[100vw] h-[100dvh] min-h-[100svh] overflow-hidden">
          <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2">
            {/* LEFT PANEL */}
            <div
              ref={leftRef}
              className="h-full bg-[#e8ddcf] overflow-hidden"
            >
              {/* IMPORTANT: make this a full-height flex column */}
              <div className="flex h-full flex-col">
                <button
                  type="button"
                  onClick={closeMenu}
                  className="lg:hidden flex items-end justify-end cursor-pointer"
                >
                  <span className="text-[#23352d] px-5 font-medium pt-5">Close</span>
                </button>
                {menuItems.map((item) => (
                  <Link
                    key={item.href + item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="
    menu-link group relative flex flex-1 items-center
    border-b border-black/20
    px-[clamp(1rem,3vw,2.5rem)]
  "
                  >
                    {/* LEFT ARROW (appears from left) */}
                    <span
                      className="
      pointer-events-none absolute left-[clamp(1rem,3vw,2.5rem)]
      top-1/2 -translate-y-1/2
      opacity-0 -translate-x-3
      transition-all duration-300 ease-out
      group-hover:opacity-100 group-hover:translate-x-0
    "
                    >
                      <ArrowRight className="h-[clamp(1.25rem,2.5vw,1.75rem)] w-[clamp(1.25rem,2.5vw,1.75rem)] text-[#23352d]/60" />
                    </span>

                    <div className="flex w-full items-center justify-between">
                      {/* TEXT (moves right on hover) */}
                      <div
                        className="
        font-serif leading-[0.95] text-[#23352d]
        text-[clamp(2.2rem,6vw,3.5rem)]
        transition-transform duration-300 ease-out
        group-hover:translate-x-[clamp(2.25rem,4vw,3.25rem)]
      "
                      >
                        {item.label}
                      </div>

                      <ArrowRight
                        className="
        h-[clamp(1.25rem,2.5vw,1.75rem)] w-[clamp(1.25rem,2.5vw,1.75rem)]
        text-[#23352d]/60
        transition-opacity duration-300 ease-out
        group-hover:opacity-0
      "
                      />
                    </div>
                  </Link>

                ))}
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div
              ref={rightRef}
              className="lg:block hidden relative  h-full bg-[#3f4b3f] text-white overflow-hidden"
            >
              {/* Use justify-between so content fills full height */}
              <div className="flex h-full flex-col justify-between px-[clamp(1rem,3vw,2.5rem)] py-[clamp(1rem,3vh,2.5rem)]">
                {/* TOP ROW */}
                <div className="relative flex items-start justify-center">
                  <Image
                    src="/logoicon.webp"
                    alt="Logo TA Creatives &amp; Design"
                    width={200}
                    height={200}
                    className="w-auto invert"
                  />

                  <button
                    type="button"
                    onClick={closeMenu}
                    className="absolute right-0 top-0 inline-flex cursor-pointer items-center gap-2 text-white/90 hover:text-white"
                  >
                     <DecryptedText text="close" className="text-white " useOriginalCharsOnly animateOn="hover" parentClassName="text-white cursor-pointer" speed={50} />
                  </button>
                </div>

                {/* MIDDLE (auto centered) */}
                <div className="flex flex-col items-center gap-[clamp(1rem,2.5vh,2rem)]">
                  <div className="menu-img w-full max-w-[min(380px,70vw)]">
                    <Image
                      src="https://cdn.prod.website-files.com/6798cba3ff70cd53ac01b30a/67b0e0fb00250a4417094f4c_portretfoto.webp"
                      width={500}
                      height={500}
                      loading="lazy"
                      alt="Portret foto van Anne Tijhof"
                      className=" h-[60vh] mx-auto mb-5 w-auto object-cover"
                    />
                  </div>

                  <div className="socials-wrapper flex items-center gap-[clamp(0.75rem,2vw,1.5rem)]">
                    <Link
                      href="https://www.instagram.com/tadesign.nl/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-white
                         h-[clamp(2.5rem,5vh,3rem)] w-[clamp(2.5rem,5vh,3rem)]"
                    >
                      <Instagram className="h-6 w-6" />
                    </Link>

                    <a
                      href="https://www.tiktok.com/@ta.creatives.design"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="TikTok"
                      className="inline-flex items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-white
                         h-[clamp(2.5rem,5vh,3rem)] w-[clamp(2.5rem,5vh,3rem)]"
                    >
                      <span className="text-lg font-semibold">t</span>
                    </a>

                    <a
                      href="https://www.facebook.com/p/TA-Creatives-Design-100086778818977/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-white
                         h-[clamp(2.5rem,5vh,3rem)] w-[clamp(2.5rem,5vh,3rem)]"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/anne-tijhof-2a1176198/?originalSubdomain=nl"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-white
                         h-[clamp(2.5rem,5vh,3rem)] w-[clamp(2.5rem,5vh,3rem)]"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>

                {/* BOTTOM ROW */}
                <div className="menu-info-details flex w-full items-center justify-between text-white/80 text-[clamp(0.85rem,1.2vw,1rem)]">
                  <div className="text_rg-text">Hellendoorn</div>

                  <div className="menu-legals flex gap-[clamp(0.75rem,2vw,1.5rem)]">
                    <Link
                      href="/algemene-voorwaarden"
                      className="text_rg-button underline underline-offset-4 hover:text-white"
                      onClick={closeMenu}
                    >
                      Algemene Voorwaarden
                    </Link>
                    <Link
                      href="/privacy-beleid"
                      className="text_rg-button underline underline-offset-4 hover:text-white"
                      onClick={closeMenu}
                    >
                      Privacy Beleid
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* end right */}
          </div>
        </div>

      </div>
    </>
  );
}
