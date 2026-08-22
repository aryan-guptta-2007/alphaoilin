import React from "react";
import Link from "next/link";
import { distillationProducts, productsData } from "@/lib/products";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refined Oil Products",
  description:
    "Explore our portfolio of refined oil products, base oils, industrial lubricants, gas oil, and heavy distillates.",
};

export default function ProductsIndexPage() {
  return (
    <>
      <PageHero
        title="Refined oil products"
        description="Product directory ordered by distillation boiling range from lightest fractions to heavy residual products."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />

      {/* Product Index Section */}
      <section className="py-11 lg:py-16 bg-paper">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {distillationProducts.map((p, idx) => {
              const detail = productsData[p.slug];
              return (
                <Link
                  key={p.slug}
                  href={p.href}
                  className="group bg-linen border border-rule p-[28px] flex flex-col justify-between h-full hover:border-amber transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-rule pb-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm font-bold text-slate">
                          0{idx + 1}
                        </span>
                        <span
                          className="w-3.5 h-3.5 border border-black/10 shrink-0"
                          style={{ backgroundColor: p.swatchColor }}
                          aria-hidden="true"
                        />
                        <Eyebrow>{p.name.split("(")[0]}</Eyebrow>
                      </div>
                      <span className="font-mono text-xs font-semibold text-amber bg-amber/10 px-2.5 py-0.5 border border-amber/30 shrink-0">
                        {p.tempRange}
                      </span>
                    </div>

                    {/* SVG Thumbnail at 140px, centred above the product name */}
                    <div className="w-full flex items-center justify-center py-4 my-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.imageSrc}
                        alt={p.imageAlt}
                        width="140"
                        height="140"
                        className="w-[140px] h-[140px] object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h2 className="font-display font-extrabold text-xl sm:text-2xl text-ink group-hover:text-amber transition-colors text-center sm:text-left">
                      {detail ? detail.name : p.name}
                    </h2>

                    <p className="font-body text-slate text-sm sm:text-base font-light leading-[1.6] max-w-[65ch]">
                      {detail ? detail.tagline : p.note}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-rule flex items-center justify-between">
                    <span className="font-display text-xs text-slate uppercase font-bold tracking-wider">
                      ASTM & EN TESTED
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-ink group-hover:text-amber transition-colors uppercase tracking-wider">
                      <span>View Specifications</span>
                      <svg
                        width="16"
                        height="16"
                        className="w-4 h-4 text-amber transform group-hover:translate-x-1 transition-transform duration-200 shrink-0"
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
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
