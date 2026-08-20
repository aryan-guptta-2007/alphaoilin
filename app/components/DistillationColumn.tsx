import React from "react";
import Link from "next/link";
import { distillationProducts } from "@/lib/products";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const DistillationColumn: React.FC = () => {
  return (
    <div className="w-full bg-card border border-rule text-ink p-5 sm:p-8 flex flex-col gap-6">
      {/* Column Header */}
      <div className="flex flex-col gap-2 border-b border-rule pb-4">
        <div className="flex items-center justify-between">
          <Eyebrow>By boiling range</Eyebrow>
          <span className="font-mono text-[10px] text-amber uppercase tracking-widest bg-amber/10 px-2 py-0.5 border border-amber/30 font-semibold">
            LIGHT → HEAVY
          </span>
        </div>
        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink tracking-tight">
          The cut list
        </h3>
        <p className="font-mono text-xs text-slate">
          Products ordered by boiling point (lightest fractions at top)
        </p>
      </div>

      {/* Distillation Rows List */}
      <div className="flex flex-col border border-rule relative divide-y divide-rule bg-card">
        {distillationProducts.map((product, index) => (
          <Link
            key={product.id}
            href={product.href}
            className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 sm:p-4 bg-card hover:bg-linen transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            aria-label={`${product.name}, boiling range ${product.tempRange}`}
          >
            <div className="flex items-start sm:items-center gap-3.5 w-full sm:w-auto">
              {/* Index & Swatch */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-mono text-[11px] text-slate font-bold w-5">
                  0{index + 1}
                </span>
                <span
                  className="w-3.5 h-3.5 shrink-0 border border-black/10"
                  style={{ backgroundColor: product.swatchColor }}
                  aria-hidden="true"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-display font-bold text-sm sm:text-base text-ink group-hover:text-amber transition-colors">
                    {product.name}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-slate truncate">
                  {product.note}
                </span>
              </div>
            </div>

            {/* Temp & Action Arrow Right */}
            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto mt-2 sm:mt-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-rule shrink-0">
              <span className="font-mono text-xs font-semibold text-amber bg-amber/10 px-2 py-1 border border-amber/30">
                {product.tempRange}
              </span>
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

      {/* Column Footer Spec Note */}
      <div className="border-t border-rule pt-3 flex items-center justify-between font-mono text-[11px] text-slate uppercase">
        <span>THERMAL DISTILLATION SPECS</span>
        <span className="text-amber font-semibold">ATM / VAC CUTS</span>
      </div>
    </div>
  );
};

export default DistillationColumn;
