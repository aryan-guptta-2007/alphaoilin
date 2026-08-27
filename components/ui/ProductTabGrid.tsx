import React from "react";
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
  return (
    <nav
      aria-label="Product section navigation tabs"
      className={`flex flex-wrap justify-center gap-3 w-full max-w-4xl mx-auto ${className}`.trim()}
    >
      {productNavItems.map((item) => {
        const isActive = item.slug === currentSlug;
        return (
          <Link
            key={item.slug}
            href={item.href}
            className={`h-[48px] px-4 font-display font-semibold text-[13px] uppercase tracking-wider inline-flex items-center justify-center transition-colors shrink-0 ${
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
  );
};

export default ProductTabGrid;
