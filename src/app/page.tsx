"use client";

import { useEffect, useRef } from "react";
import HomePage from "./(pages)/home/page";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <HomePage />;
}
