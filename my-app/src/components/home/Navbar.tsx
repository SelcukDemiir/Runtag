"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Ana Sayfa", href: "#top" },
  { label: "Hizmetler", href: "#projects" },
  { label: "Ekip", href: "#crews" },
  { label: "Hakkımızda", href: "#process" },
  { label: "İletişim", href: "#join" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          className={`relative flex items-center justify-between rounded-full px-2 py-1.5 transition-all duration-500 ${
            scrolled
              ? "border border-white/[0.08] bg-black/60 shadow-[0_4px_30px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-2xl"
              : "border border-white/[0.06] bg-white/[0.03] shadow-[0_4px_24px_rgba(0,0,0,0.15)] backdrop-blur-xl"
          }`}
        >
          {/* Inner glow effect */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.07] to-transparent opacity-60" />

          {/* Logo */}
          <a href="#top" className="relative flex items-center gap-2.5 pl-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-sm font-bold text-white shadow-[0_2px_10px_rgba(236,72,153,0.4)]">
              R
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="text-sm font-semibold tracking-tight text-white">
                Runtagg
              </span>
              <span className="text-[10px] text-white/50">Tech Studio</span>
            </div>
          </a>

          {/* Center: Navigation Pills */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
            <div className="flex items-center gap-1 rounded-full bg-white/[0.04] p-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative rounded-full px-4 py-2 text-[13px] font-medium text-white/70 transition-all duration-200 hover:text-white"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 rounded-full bg-white/[0.08] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          {/* Right side CTA */}
          <div className="relative flex items-center gap-2 pr-1">
            <a
              href="#join"
              className="hidden rounded-full px-4 py-2 text-[13px] font-medium text-white/70 transition-colors hover:text-white sm:inline-flex"
            >
              Giriş Yap
            </a>
            <a
              href="#join"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_2px_12px_rgba(236,72,153,0.35)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(236,72,153,0.5)]"
            >
              <span className="relative z-10">Başlayın</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

