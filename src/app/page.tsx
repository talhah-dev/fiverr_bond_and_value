"use client";

import { useEffect, useRef } from "react";
import HomePage from "./(pages)/home/page";
import ClickSpark from "@/components/ClickSpark";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 800, delay: 100 });

    const lenis = new Lenis({ autoRaf: true });
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <ClickSpark
      sparkColor="#4a5a52"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <HomePage />
    </ClickSpark>
  );
}
