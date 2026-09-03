"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { productNavItems } from "@/lib/products";

interface ProductTabGridProps {
  currentSlug?: string;
  className?: string;
}

export const ProductTabGrid: React.FC<ProductTabGridProps> = ({
  currentSlug,
  className = "",
}) => {
  const activeTabRef = useRef<HTMLAnchorElement>(null);
  const scrollContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrollToActive = () => {
      if (activeTabRef.current && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const activeEl = activeTabRef.current;

        const scrollLeft =
          activeEl.offsetLeft -
          container.offsetWidth / 2 +
          activeEl.offsetWidth / 2;

        container.scrollTo({
          left: Math.max(0, scrollLeft),
          behavior: "smooth",
        });
      }
    };

    scrollToActive();
    const timer = setTimeout(scrollToActive, 100);
    return () => clearTimeout(timer);
  }, [currentSlug]);

  return (
    <div
      className={`relative w-full max-w-4xl mx-auto -mx-5 sm:-mx-6 lg:mx-auto w-[calc(100%+2.5rem)] sm:w-[calc(100%+3rem)] lg:w-full ${className}`.trim()}
    >
      {/* Horizontally scrollable single row on mobile (48px tall), wrapped centred grid at 1024px+ */}
      <nav
        ref={scrollContainerRef}
        aria-label="Product section navigation tabs"
        className="flex items-center gap-3 overflow-x-auto no-scrollbar px-4 lg:px-0 lg:flex-wrap lg:justify-center lg:overflow-visible w-full h-[48px] lg:h-auto"
      >
        {productNavItems.map((item) => {
          const isActive = item.slug === currentSlug;
          return (
            <Link
              key={item.slug}
              ref={isActive ? activeTabRef : null}
              href={item.href}
              className={`h-[48px] px-4 font-display font-semibold text-[13px] uppercase tracking-wider inline-flex items-center justify-center transition-colors shrink-0 whitespace-nowrap ${
                isActive
                  ? "bg-amber text-ink font-bold border-none"
                  : "bg-white text-ink border border-rule hover:border-amber hover:bg-linen"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Fade on the right edge for mobile horizontal scroll indicator */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-paper to-transparent lg:hidden"
        aria-hidden="true"
      />
    </div>
  );
};

export default ProductTabGrid;
