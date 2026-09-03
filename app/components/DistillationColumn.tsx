import React from "react";
import Link from "next/link";
import { distillationProducts } from "@/lib/products";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const DistillationColumn: React.FC = () => {
  return (
    <div className="w-full bg-card border border-rule text-ink p-4 sm:p-8 flex flex-col gap-6">
      {/* Column Header */}
      <div className="flex flex-col gap-2 border-b border-rule pb-4">
        <div className="flex items-center justify-between">
          <Eyebrow>By boiling range</Eyebrow>
          <span className="font-mono text-[10px] text-slate uppercase tracking-widest bg-linen px-2 py-0.5 border border-rule font-semibold">
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
            className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-card hover:bg-linen transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber gap-3 min-h-[44px]"
            aria-label={`${product.name}, boiling range ${product.tempRange}`}
          >
            {/* Desktop & Mobile Main Row Stack */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full min-w-0">
              <div className="flex items-start gap-3 w-full sm:w-auto min-w-0">
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
            </div>

            {/* Line 3 on mobile: Temp Badge & Arrow aligned left */}
            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto shrink-0 pt-1 sm:pt-0">
              <span className="font-mono text-xs font-semibold text-ink bg-linen group-hover:bg-amber/10 group-hover:text-amber group-hover:border-amber/30 px-2.5 py-1 border border-rule transition-colors">
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
      <div className="border-t border-rule pt-3 flex items-center justify-between font-mono text-xs text-slate uppercase">
        <span>THERMAL DISTILLATION SPECS</span>
        <span className="text-slate font-semibold">ATM / VAC CUTS</span>
      </div>
    </div>
  );
};

export default DistillationColumn;
