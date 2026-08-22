"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-steel/60 text-paper w-full max-w-full">
      <Container className="flex items-center justify-between h-[60px] gap-2">
        {/* Logo Lockup Left: Logo mark + HAMBURG wordmark only below 640px */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink min-w-0 min-h-[44px]">
          {/* Client Droplet Logo Mark (36px height) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/hamburg-mark-white.svg"
            alt="Hamburg logo mark"
            width="36"
            height="36"
            className="h-[36px] w-auto shrink-0"
          />

          <div className="flex flex-col min-w-0">
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-[.16em] sm:tracking-[.22em] text-paper leading-none uppercase truncate">
              {siteConfig.name}
            </span>
            <span className="font-mono text-[9px] text-slate uppercase tracking-wider leading-tight pt-0.5 truncate hidden sm:block">
              {siteConfig.legalName}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Right */}
        <nav className="hidden lg:flex items-center gap-7 font-display text-xs sm:text-sm font-semibold uppercase tracking-button h-full">
          {siteConfig.navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center h-full transition-colors border-b-2 min-h-[44px] ${
                  active
                    ? "border-amber text-paper"
                    : "border-transparent text-mist hover:text-paper hover:border-amber"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="font-display text-xs uppercase tracking-wider font-bold text-amber border border-amber/60 hover:border-amber hover:bg-amber hover:text-ink transition-colors px-4 py-2.5 min-h-[44px] inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          >
            Request Quote
          </Link>
        </div>

        {/* Hamburger Toggle Button (at least 44x44px) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-paper hover:text-amber focus:outline-none shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            width="24"
            height="24"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile Menu Full-Screen Overlay Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] z-50 bg-ink text-paper flex flex-col justify-between p-6 overflow-y-auto">
          <nav className="flex flex-col w-full font-display font-bold text-[20px] uppercase tracking-wider">
            {siteConfig.navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`h-[56px] flex items-center px-4 border-b border-steel/40 transition-colors ${
                    active
                      ? "text-amber bg-steel/30 border-amber"
                      : "text-paper hover:text-amber hover:bg-steel/20"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-steel/60 flex flex-col gap-4 w-full">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full h-[56px] inline-flex items-center justify-center font-display font-bold text-sm uppercase tracking-wider bg-amber text-ink hover:bg-[#d48216] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            >
              Request Quote
            </Link>
            <div className="font-mono text-xs text-slate uppercase flex flex-col gap-1.5 pt-2">
              <span>TEL: {siteConfig.phone}</span>
              <span>HOURS: {siteConfig.hours}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
