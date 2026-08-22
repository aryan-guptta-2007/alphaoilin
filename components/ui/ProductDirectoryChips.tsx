"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

export interface NavItem {
  slug: string;
  name: string;
  href: string;
}

interface ProductDirectoryChipsProps {
  items: NavItem[];
  currentSlug: string;
}

export const ProductDirectoryChips: React.FC<ProductDirectoryChipsProps> = ({
  items,
  currentSlug,
}) => {
  const activeRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (activeRef.current) {
      try {
        activeRef.current.scrollIntoView({ inline: "center", block: "nearest" });
      } catch {
        // Fallback for environments without scrollIntoView options
      }
    }
  }, [currentSlug]);

  return (
    <div className="relative w-full min-w-0 max-w-full overflow-x-auto no-scrollbar pb-1 -mx-3 px-3">
      <nav
        aria-label="Product directory mobile navigation"
        className="flex items-center gap-2 whitespace-nowrap min-w-max"
      >
        {items.map((item) => {
          const isCurrent = item.slug === currentSlug;
          return (
            <Link
              key={item.slug}
              href={item.href}
              ref={isCurrent ? activeRef : undefined}
              className={`transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber text-xs font-mono shrink-0 min-h-[44px] inline-flex items-center px-3.5 py-2 ${
                isCurrent
                  ? "bg-card text-ink font-bold border-l-4 border-amber border-y border-r border-rule"
                  : "bg-paper text-slate hover:text-ink hover:bg-card border border-rule"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-linen to-transparent opacity-90" />
    </div>
  );
};

export default ProductDirectoryChips;
