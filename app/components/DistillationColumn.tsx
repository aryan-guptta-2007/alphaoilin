import React from "react";
import Link from "next/link";
import { tradeDirectoryProducts } from "@/lib/products";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const DistillationColumn: React.FC = () => {
  return (
    <div className="w-full bg-card border border-rule text-ink p-4 sm:p-8 flex flex-col gap-6">
      {/* Directory Header */}
      <div className="flex flex-col gap-2 border-b border-rule pb-4">
        <Eyebrow>Product directory</Eyebrow>
        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink tracking-tight">
          What we trade
        </h3>
        <p className="font-mono text-xs text-slate">
          Commercial energy commodities, base stocks, and specialty chemicals
        </p>
      </div>

      {/* Directory Rows List (Alphabetical, No Temperature Badges) */}
      <div className="flex flex-col border border-rule relative divide-y divide-rule bg-card">
        {tradeDirectoryProducts.map((product, index) => (
          <Link
            key={product.id}
            href={product.href}
            className="group relative flex items-center justify-between p-4 bg-card hover:bg-linen transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber gap-3 min-h-[44px]"
            aria-label={`${product.name} - ${product.note}`}
          >
            {/* Product Details: Index, Swatch, Name, and Note */}
            <div className="flex items-start sm:items-center gap-3 w-full min-w-0 flex-1">
              {/* Index & Swatch */}
              <div className="flex items-center gap-2 shrink-0 pt-0.5 sm:pt-0">
                <span className="font-mono text-xs text-slate font-bold w-5">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span
                  className="w-3.5 h-3.5 shrink-0 border border-black/10"
                  style={{ backgroundColor: product.swatchColor }}
                  aria-hidden="true"
                />
              </div>

              {/* Line 1: Product Name, Line 2: Note */}
              <div className="flex flex-col min-w-0 flex-1">
                <span className="font-display font-bold text-base text-ink group-hover:text-amber transition-colors break-words">
                  {product.name}
                </span>
                <span className="font-mono text-xs text-slate pt-0.5 leading-normal">
                  {product.note}
                </span>
              </div>
            </div>

            {/* Right Arrow */}
            <div className="flex items-center justify-end shrink-0 pl-2">
              <svg
                width="16"
                height="16"
                className="w-4 h-4 text-amber transform group-hover:translate-x-1.5 transition-transform duration-200 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DistillationColumn;
