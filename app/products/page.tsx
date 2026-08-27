import React from "react";
import Link from "next/link";
import { productsData, productNavItems, COA_FOOTNOTE } from "@/lib/products";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SpecTable } from "@/components/ui/SpecTable";
import { ProductTabGrid } from "@/components/ui/ProductTabGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Hamburg for Refined Oil Products Trading LLC",
  description:
    "Explore our portfolio of refined oil products, virgin base oils, industrial lubricants, gas oil, and heavy fuel oils.",
};

export default function ProductsIndexPage() {
  const firstProduct = productsData["base-oil"];

  return (
    <section className="py-6 lg:py-10 bg-paper min-h-screen">
      <Container className="px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:gap-12 w-full max-w-4xl mx-auto">
          {/* 1. Page Title "PRODUCTS" - Centred, Archivo 800, 38px, uppercase, ink. Nothing above it. */}
          <h1 className="font-display font-extrabold text-[38px] lg:text-[48px] text-ink uppercase text-center leading-none tracking-tight pt-2">
            PRODUCTS
          </h1>

          {/* 2. Product Tab Grid - Immediately below title */}
          <ProductTabGrid currentSlug="base-oil" />

          {/* 3. First Product's Full Content Inline */}
          {firstProduct && (
            <div className="flex flex-col gap-10 lg:gap-[64px] w-full pt-16 sm:pt-20 lg:pt-12">
              {/* ITEM 1: Product Illustration */}
              <div className="w-full flex justify-center my-8 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={firstProduct.imageSrc}
                  alt={firstProduct.imageAlt}
                  width="360"
                  height="360"
                  className="h-[200px] w-auto object-contain mx-auto block"
                />
              </div>

              {/* ITEM 2: Product Name */}
              <h2 className="font-display font-extrabold text-[26px] text-ink leading-[1.15] text-left">
                {firstProduct.name}
              </h2>

              {/* ITEM 3: Description */}
              <div className="flex flex-col gap-4 font-body text-base text-slate leading-relaxed font-light max-w-[65ch]">
                {firstProduct.introParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* ITEM 4: MSDS Download Cards */}
              {firstProduct.msdsCards && firstProduct.msdsCards.length > 0 && (
                <div className="flex flex-col gap-3 w-full pt-2">
                  {firstProduct.msdsCards.map((card, idx) => (
                    <a
                      key={idx}
                      href={card.url}
                      download
                      className="h-[64px] bg-card hover:bg-linen border border-rule transition-colors p-2.5 flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber w-full min-w-0 max-w-full"
                    >
                      <div className="w-[48px] h-[48px] shrink-0 bg-amber/10 text-amber flex items-center justify-center border border-amber/20 group-hover:bg-amber group-hover:text-white transition-colors">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </div>
                      <div className="flex flex-col min-w-0 flex-1 justify-center">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-slate font-medium leading-none mb-1">
                          MATERIAL SAFETY DATA SHEET
                        </span>
                        <span className="font-display font-semibold text-[15px] text-ink group-hover:text-amber transition-colors leading-snug break-words whitespace-normal">
                          {card.title}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {/* ITEM 5: REQUEST A QUOTE Button */}
              <div className="w-full pt-1">
                <Link
                  href="/contact"
                  className="w-full h-[52px] inline-flex items-center justify-center font-display font-bold text-sm uppercase tracking-wider border-2 border-amber text-amber hover:bg-amber hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                >
                  REQUEST A QUOTE
                </Link>
              </div>

              {/* ITEM 6: Product Grades & COA */}
              <div className="flex flex-col gap-4 border-t border-rule pt-8 lg:pt-10 w-full">
                <h3 className="font-display font-bold text-xl text-ink tracking-tight">
                  Product Grades & COA Downloads
                </h3>
                <div className="flex flex-col gap-6 w-full">
                  {firstProduct.gradeGroups.map((group, groupIdx) => (
                    <div key={groupIdx} className="flex flex-col gap-3 w-full">
                      {group.groupName && (
                        <h4 className="font-mono text-xs uppercase tracking-eyebrow text-slate font-bold">
                          {group.groupName}
                        </h4>
                      )}
                      <div className="flex flex-wrap gap-2.5 w-full">
                        {group.grades.map((grade, gradeIdx) => {
                          const coaPath =
                            grade.pdfUrl ||
                            `/docs/coa/${
                              grade.slug ||
                              grade.name
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, "-")
                            }.pdf`;
                          return (
                            <a
                              key={gradeIdx}
                              href={coaPath}
                              download
                              className="h-[44px] bg-card border border-rule text-ink font-mono text-xs font-medium px-4 inline-flex items-center gap-2 transition-colors hover:bg-linen hover:border-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber shrink-0"
                              title={`Download COA PDF for ${grade.name}`}
                            >
                              <span>{grade.name}</span>
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-slate group-hover:text-amber shrink-0"
                              >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                              </svg>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ITEM 7: Specification Table */}
              <div className="flex flex-col gap-4 border-t border-rule pt-8 lg:pt-10 w-full">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display font-bold text-xl text-ink tracking-tight">
                    Specifications
                  </h3>
                  {firstProduct.distillationTemp && (
                    <span className="font-mono text-xs text-amber bg-amber/10 border border-amber/30 px-3 py-1 uppercase font-semibold">
                      TEMP CUT: {firstProduct.distillationTemp}
                    </span>
                  )}
                </div>

                <span className="font-mono text-xs text-slate uppercase block">
                  Scroll for all columns
                </span>

                <div className="flex flex-col gap-8 w-full">
                  {firstProduct.specTables.map((table, tIdx) => (
                    <div key={tIdx} className="flex flex-col gap-3 w-full">
                      {table.label && table.label !== "Technical Specifications" && (
                        <h4 className="font-mono text-xs uppercase tracking-eyebrow text-slate font-bold">
                          {table.label}
                        </h4>
                      )}
                      <SpecTable columns={table.columns} data={table.rows} />
                      <p className="font-mono text-xs text-slate italic pt-1">
                        * {COA_FOOTNOTE}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ITEM 8: Applications & Packing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 border-t border-rule pt-8 lg:pt-10 w-full">
                {/* Applications */}
                <div className="bg-linen border border-rule p-6 sm:p-7 flex flex-col gap-4 w-full">
                  <Eyebrow className="text-slate">APPLICATIONS</Eyebrow>
                  <h3 className="font-display font-bold text-lg text-ink">
                    Industrial & commercial use
                  </h3>
                  <ul className="flex flex-col gap-2.5 font-body text-base text-slate leading-relaxed font-light w-full">
                    {firstProduct.applications.map((app, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5 w-full">
                        <span className="text-amber font-bold shrink-0 mt-0.5">•</span>
                        <span className="w-full">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Packing Options */}
                <div className="bg-linen border border-rule p-6 sm:p-7 flex flex-col gap-4 w-full">
                  <Eyebrow className="text-slate">PACKAGING</Eyebrow>
                  <h3 className="font-display font-bold text-lg text-ink">
                    Packing and container options
                  </h3>
                  <ul className="flex flex-col gap-2.5 font-mono text-xs text-slate uppercase w-full">
                    {firstProduct.packingOptions.map((pack, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-center gap-2 border-b border-rule pb-2 w-full"
                      >
                        <span
                          className="w-1.5 h-1.5 bg-amber shrink-0"
                          aria-hidden="true"
                        />
                        <span className="w-full">{pack}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ITEM 9: Other Products */}
              <div className="flex flex-col gap-4 border-t border-rule pt-8 lg:pt-10 w-full">
                <h3 className="font-display font-bold text-xl text-ink tracking-tight">
                  Other Products
                </h3>
                <div className="flex flex-col divide-y divide-rule border-y border-rule w-full">
                  {productNavItems.map((item) => {
                    const isCurrent = item.slug === firstProduct.slug;
                    return (
                      <Link
                        key={item.slug}
                        href={item.href}
                        className={`py-3.5 flex items-center justify-between font-display text-sm min-h-[44px] transition-colors ${
                          isCurrent
                            ? "text-amber font-bold pointer-events-none"
                            : "text-ink hover:text-amber"
                        }`}
                      >
                        <span>{item.name}</span>
                        <span className="font-mono text-xs text-slate">→</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
