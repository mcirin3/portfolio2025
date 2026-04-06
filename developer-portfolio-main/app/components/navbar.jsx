// @flow strict
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/pokedex", label: "TCG Collection" },
  { href: "/education", label: "Education" },
  // { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
];

function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("zekrom");
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("pokemon-theme") || "zekrom";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when at top
      if (currentScrollY < 50) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, [lastScrollY]);

  const toggleTheme = () => {
    const newTheme = theme === "zekrom" ? "reshiram" : "zekrom";
    setTheme(newTheme);
    localStorage.setItem("pokemon-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const isActiveLink = (href) =>
    pathname === href || (pathname?.startsWith(href) && href !== "/");

  return (
    <nav
      className={`sticky top-4 z-50 transition-all duration-300 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-y-3 rounded-2xl border border-white/5 bg-white/5 px-3 py-3 backdrop-blur-xl shadow-[0_20px_120px_-60px_rgba(0,0,0,0.7)] sm:px-4">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-lg font-bold tracking-tight text-white sm:text-2xl">
            <span className="bg-gradient-to-r from-[#00e5ff] via-[#4dd2ff] to-[#6e7bff] bg-clip-text text-transparent">
              MARK CIRINEO
            </span>
          </Link>
        </div>

        <ul className="hidden items-center gap-2 text-sm font-medium text-white md:flex">
          {links.map((link) => {
            const isActive = isActiveLink(link.href);

            return (
              <li key={link.href}>
                <Link
                  className={`rounded-full px-4 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 ${
                    isActive ? "bg-white/15 text-[#00e5ff]" : "text-white"
                  }`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="rounded-full border border-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:border-white/30 hover:bg-white/10"
              title={`Switch to ${theme === "zekrom" ? "Reshiram" : "Zekrom"} mode`}
            >
              {theme === "zekrom" ? "⚫ Zekrom" : "⚪ Reshiram"}
            </button>
          )}
          <Link
            href="/contact"
            className="hidden rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:border-[#00e5ff] hover:text-[#00e5ff] md:inline-flex"
          >
            Let&apos;s talk
          </Link>
          <Link
            href="/projects"
            className="rounded-full bg-gradient-to-r from-[#00e5ff] via-[#4dd2ff] to-[#6e7bff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_10px_50px_-20px_rgba(0,229,255,0.42)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            View work
          </Link>
        </div>

        <ul className="flex w-full items-center gap-2 overflow-x-auto pb-1 text-xs font-semibold uppercase tracking-[0.08em] text-white/80 md:hidden">
          {links.map((link) => {
            const isActive = isActiveLink(link.href);

            return (
              <li key={link.href} className="shrink-0">
                <Link
                  href={link.href}
                  className={`inline-flex rounded-full border px-3 py-1.5 transition-colors duration-200 ${
                    isActive
                      ? "border-[#00e5ff]/60 bg-[#00e5ff]/20 text-[#d8fbff]"
                      : "border-white/10 bg-white/5 text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
