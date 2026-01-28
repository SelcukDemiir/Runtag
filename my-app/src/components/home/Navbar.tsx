"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Ana Sayfa", href: "#top" },
  { label: "Projeler", href: "#projects" },
  { label: "Ekipler", href: "#crews" },
  { label: "Hakkımızda", href: "#process" },
  { label: "İletişim", href: "#join" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-3 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-black/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
            : "border-white/10 bg-white/5 backdrop-blur-xl"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-white">
            R
          </div>
          <span className="text-sm font-semibold text-white">Runtagg</span>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side CTA */}
        <div className="flex items-center gap-2">
          <button className="hidden rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 sm:inline-flex">
            Giriş Yap
          </button>
          <button className="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-pink-400">
            Başla
          </button>
        </div>
      </div>
    </header>
  );
}

