// @flow strict
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-4 z-50">
      <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 backdrop-blur-xl shadow-[0_20px_120px_-60px_rgba(0,0,0,0.7)]">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight text-white">
            <span className="bg-gradient-to-r from-[#d50032] via-[#e8414c] to-[#1d4f91] bg-clip-text text-transparent">
              MARK CIRINEO
            </span>
          </Link>
        </div>

        <ul className="hidden items-center gap-2 text-sm font-medium text-white md:flex">
          {links.map((link) => {
            const isActive =
              pathname === link.href || (pathname?.startsWith(link.href) && link.href !== "/");

            return (
              <li key={link.href}>
                <Link
                  className={`rounded-full px-4 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 ${
                    isActive ? "bg-white/15 text-[#d50032]" : "text-white"
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
          <Link
            href="/contact"
            className="hidden rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:border-[#d50032] hover:text-[#d50032] md:inline-flex"
          >
            Let&apos;s talk
          </Link>
          <Link
            href="/projects"
            className="rounded-full bg-gradient-to-r from-[#d50032] via-[#e8414c] to-[#1d4f91] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_10px_50px_-20px_rgba(213,0,50,0.45)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            View work
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
