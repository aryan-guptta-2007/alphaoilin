"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

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

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-steel/60 text-paper">
      <Container className="flex items-center justify-between h-[68px]">
        {/* Logo Lockup Left */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          {/* SVG Logo Mark */}
          <div className="w-8 h-8 bg-steel border border-amber/40 flex items-center justify-center p-1 shrink-0 group-hover:border-amber transition-colors">
            <svg
              width="40"
              height="40"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-amber"
            >
              <path
                d="M16 2L4 9V23L16 30L28 23V9L16 2Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="miter"
              />
              <path d="M16 8L22 12V20L16 24L10 20V12L16 8Z" fill="#D9531E" />
              <path d="M16 12L19 14V18L16 20L13 18V14L16 12Z" fill="#E5901C" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl tracking-[.22em] text-paper leading-none uppercase">
              {siteConfig.name}
            </span>
            <span className="font-mono text-[9px] text-slate uppercase tracking-wider leading-tight pt-0.5">
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
                className={`relative flex items-center h-full transition-colors border-b-2 ${
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
            className="font-display text-xs uppercase tracking-wider font-bold text-amber border border-amber/60 hover:border-amber hover:bg-amber hover:text-ink transition-colors px-3.5 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          >
            Request Quote
          </Link>
        </div>

        {/* Hamburger Toggle (below lg) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-paper hover:text-amber focus:outline-none"
          aria-label="Toggle navigation menu"
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

      {/* Mobile Menu Dropdown (below lg) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-ink border-b border-steel py-6 px-4">
          <Container className="flex flex-col gap-4">
            <nav className="flex flex-col gap-3 font-display font-semibold text-base uppercase tracking-button">
              {siteConfig.navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 px-3 border-l-2 transition-colors ${
                      active
                        ? "border-amber text-paper bg-steel/40"
                        : "border-transparent text-mist hover:text-paper hover:border-amber hover:bg-steel/20"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-steel/60 flex flex-col gap-3">
              <Button
                variant="amber"
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center"
              >
                Request Quote
              </Button>
              <div className="font-mono text-xs text-slate uppercase pt-2 flex flex-col gap-1">
                <span>TEL: {siteConfig.phone}</span>
                <span>HOURS: {siteConfig.hours}</span>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
