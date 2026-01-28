"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const typewriterTexts = [
  "Ekibimize katıl, sen de bunun bir parçası ol.",
  "Sitenizin bakımı, yapımı... Hepsini yapalım.",
  "Indie oyunlarımıza bakmak ister misiniz?",
  "Hayalinizdeki projeyi birlikte geliştirelim.",
];

function Typewriter() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typewriterTexts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentText.length) {
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
          }
        }
      },
      isDeleting ? 30 : 60
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <span className="text-white">
      {typewriterTexts[textIndex].slice(0, charIndex)}
      <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-pink-400 align-middle" />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center pt-24 pb-24 sm:pb-28"
    >
      {/* Background video */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          src="/hero-bg.mov"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 flex w-full items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        {/* Liquid Glass Card - minimal blur */}
        <div className="relative w-full max-w-3xl rounded-[28px] border border-white/10 bg-black/20 px-8 py-12 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:px-12 sm:py-14">
          {/* Subtle top edge highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="relative space-y-6 text-center">
            {/* Main Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
              Runtagg Tech Studio
            </h1>

            {/* Subtitle */}
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-white/60">
              Crew Based Tech Studio
            </p>

            {/* Typewriter */}
            <div className="mx-auto h-16 max-w-xl text-lg font-medium sm:text-xl lg:text-2xl">
              <Typewriter />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#join"
                className="rounded-full bg-pink-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(236,72,153,0.4)] transition hover:bg-pink-400"
              >
                Başlayalım
              </a>
              <a
                href="#projects"
                className="group flex items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white"
              >
                Projelerimiz
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

