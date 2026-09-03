import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SpecTable } from "@/components/ui/SpecTable";
import { DistillationColumn } from "./components/DistillationColumn";
import {
  tradeFacts,
  howWeWorkSteps,
  productsData,
  COA_FOOTNOTE,
  refineryCuts,
} from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dubai Trading Desk | Refined Oil Products & Virgin Base Oils",
  description:
    "Hamburg Refined Oil Products Trading LLC in Dubai trades Group I virgin base oils (SN 150, SN 500, BS 150), industrial lubricants, and distillate fuels.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section: Flat Warm Off-White Page Background */}
      <section className="py-8 sm:py-11 lg:py-16 bg-paper border-b border-rule">
        <Container>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 w-full min-w-0 max-w-full">
            {/* Hero Left Column: Sticky on desktop (>=1024px) at top: 96px */}
            <div className="lg:col-span-6 w-full min-w-0 max-w-full">
              <div className="lg:sticky lg:top-[96px] flex flex-col gap-5 pt-2">
                <Eyebrow className="text-slate">DUBAI TRADING DESK</Eyebrow>

                <h1 className="font-display font-extrabold text-[30px] sm:text-4xl lg:text-[42px] tracking-tight lg:tracking-[-0.025em] text-ink leading-tight break-words max-w-full">
                  Refined oil products and bulk fuel from&nbsp;Dubai
                </h1>

                <p className="font-body text-slate text-base sm:text-[17px] leading-relaxed font-light max-w-[65ch] max-w-full">
                  Hamburg Refined Oil Products Trading LLC is a Dubai energy trading firm. We deliver virgin base oils, industrial lubricants, and gas oil from Gulf refineries to international ports.
                </p>

                {/* Both CTAs full width on mobile, stacked with 12px gap, 44px min tap height */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full max-w-full pb-[88px] lg:pb-0">
                  <Button
                    variant="amber"
                    href="/contact"
                    className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center text-center focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
                  >
                    Request Commercial Quote
                  </Button>
                  <Button
                    variant="ink"
                    href="#products-directory"
                    className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center text-center focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
                  >
                    View Products
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Right Column: Product Directory (What We Trade) */}
            <div id="products-directory" className="lg:col-span-6 w-full min-w-0 max-w-full">
              <DistillationColumn />
            </div>
          </div>

          {/* Refinery Section: How the products are made */}
          <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-rule flex flex-col gap-6 sm:gap-8 w-full min-w-0 max-w-full">
            <div className="flex flex-col gap-2 max-w-[65ch] max-w-full">
              <Eyebrow className="text-slate">How the products are made</Eyebrow>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
                One barrel, five cuts.
              </h2>
              <p className="font-body text-slate text-base sm:text-[17px] leading-relaxed font-light">
                Crude is heated and separated in a distillation column, and each fraction comes off at its own boiling range. Everything Hamburg trades comes off that column, from naphtha at the top to bitumen at the bottom.
              </p>
            </div>

            {/* Schematic band on --linen background, full width of content column */}
            <div className="bg-linen border border-rule p-4 sm:p-8 w-full min-w-0 max-w-full">
              {/* Desktop / Tablet Landscape SVG Schematic (Plain <img>, alt text, no animation) */}
              <div className="hidden md:block w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/refinery.svg"
                  alt="Schematic of a crude oil distillation column showing product cuts by boiling range from naphtha to bitumen"
                  width="900"
                  height="460"
                  className="w-full h-auto object-contain mx-auto block"
                />
              </div>

              {/* Mobile Vertical Distillation Column (HTML/CSS from product data) */}
              <div className="md:hidden flex flex-col w-full bg-card border border-rule p-4 sm:p-5">
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-rule font-mono text-[10px] text-slate uppercase tracking-wider">
                  <span>LIGHT FRACTIONS (TOP)</span>
                  <span>DISTILLATION CUTS</span>
                </div>

                <div className="flex flex-col">
                  {refineryCuts.map((cut, idx) => {
                    const isFirst = idx === 0;
                    const isLast = idx === refineryCuts.length - 1;

                    return (
                      <Link
                        key={cut.slug}
                        href={cut.href}
                        className="flex items-center gap-3.5 py-3 group hover:bg-linen transition-colors -mx-2 px-2"
                      >
                        {/* Vertical column segment visual */}
                        <div className="relative flex items-center shrink-0">
                          <div
                            className={`w-4 h-12 shrink-0 border border-black/10 transition-transform group-hover:scale-x-110 ${
                              isFirst
                                ? "rounded-t-md"
                                : isLast
                                ? "rounded-b-sm"
                                : ""
                            }`}
                            style={{ backgroundColor: cut.color }}
                            aria-hidden="true"
                          />
                          <div
                            className="w-3 h-[2px] shrink-0"
                            style={{ backgroundColor: cut.color }}
                            aria-hidden="true"
                          />
                        </div>

                        {/* Product Name & Boiling Range beside segment */}
                        <div className="flex flex-col flex-1 min-w-0">
                          <span className="font-display font-bold text-base text-ink group-hover:text-amber transition-colors">
                            {cut.name}
                          </span>
                          <span className="font-mono text-xs text-slate pt-0.5">
                            {cut.tempRange}
                          </span>
                        </div>

                        {/* Right link arrow */}
                        <svg
                          width="16"
                          height="16"
                          className="w-4 h-4 text-amber transform group-hover:translate-x-1 transition-transform shrink-0"
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
                      </Link>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-3 mt-2 border-t border-rule font-mono text-[10px] text-slate uppercase tracking-wider">
                  <span>HEAVY RESIDUE (BOTTOM)</span>
                  <span>5 FRACTIONS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Four Labelled Trade Facts (24px padding on mobile, single column) */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-rule grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full min-w-0 max-w-full">
            {tradeFacts.map((tf, idx) => (
              <div
                key={idx}
                className="bg-linen border-l-4 border-l-amber border border-rule p-6 sm:p-[28px] flex flex-col justify-between h-full hover:border-amber transition-colors w-full min-w-0 max-w-full"
              >
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-eyebrow text-amber">
                    {tf.label}
                  </span>
                  <h3 className="font-display font-bold text-lg text-ink leading-snug">
                    {tf.fact}
                  </h3>
                </div>
                <p className="font-body text-slate text-base leading-relaxed font-light mt-3">
                  {tf.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* "How We Work" Section (Single Column Process Cards on Mobile) */}
      <section className="py-8 sm:py-11 lg:py-16 bg-linen border-b border-rule">
        <Container>
          <div className="flex flex-col gap-8 sm:gap-10 w-full min-w-0 max-w-full">
            <div className="flex flex-col gap-2 max-w-[65ch] max-w-full">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
                How an order moves
              </h2>
              <p className="font-body text-slate text-base sm:text-[17px] leading-relaxed font-light max-w-[65ch] max-w-full">
                From refinery procurement to laboratory testing and vessel chartering, we handle each stage of physical delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch w-full min-w-0 max-w-full">
              {howWeWorkSteps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="bg-card border border-rule p-6 sm:p-[28px] flex flex-col justify-between h-full hover:border-amber transition-colors w-full min-w-0 max-w-full"
                >
                  <div className="flex flex-col gap-3">
                    <div className="border-b border-rule pb-3">
                      <span className="font-mono text-xl font-extrabold text-slate/50">
                        {step.stepNumber}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-ink">
                      {step.title}
                    </h3>

                    <p className="font-body text-slate text-base font-light leading-relaxed max-w-[65ch] max-w-full">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 220px Full-Bleed Duotone Image Band Section on Mobile */}
      <section
        className="relative w-full h-[220px] sm:h-[320px] lg:h-[380px] bg-paper overflow-hidden border-t border-b border-rule flex items-center justify-center"
      >
        <Image
          src="/images/product-tanker.jpg"
          alt="Product tanker vessel at berth in industrial harbor"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="object-cover grayscale filter contrast-125 opacity-[0.06]"
        />
        <Container className="relative z-10 text-center max-w-3xl px-4">
          <p className="font-display font-bold text-lg sm:text-2xl lg:text-3xl text-ink tracking-tight">
            Vessel chartering and bulk discharge port logistics across global trade routes.
          </p>
        </Container>
      </section>

      {/* Virgin Base Oil Specs Table Section */}
      <section className="py-8 sm:py-11 lg:py-16 bg-paper border-b border-rule">
        <Container>
          <div className="flex flex-col gap-6 w-full min-w-0 max-w-full">
            <div className="flex flex-col gap-2">
              <Eyebrow className="text-slate">VIRGIN BASE OILS</Eyebrow>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
                Group I Solvent Neutral Specifications
              </h2>
              <p className="font-body text-slate text-base font-light max-w-[65ch] max-w-full">
                Technical properties for SN 150, SN 500, and Bright Stock BS 150 sourced directly from Gulf refining complexes.
              </p>
            </div>

            <div className="flex flex-col gap-2 w-full min-w-0 max-w-full">
              <span className="font-mono text-xs text-slate uppercase tracking-wider block sm:hidden">
                Scroll to see all columns →
              </span>
              <SpecTable
                columns={productsData["base-oil"].specTables[0].columns}
                data={productsData["base-oil"].specTables[0].rows}
              />
              <p className="font-mono text-xs text-slate italic pt-1">
                * {COA_FOOTNOTE}
              </p>
            </div>

            <div className="pt-2">
              <Button variant="amber" href="/products/base-oil">
                View Full Base Oil Data Sheet & Downloads
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
