import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  productsData,
  productNavItems,
  COA_FOOTNOTE,
} from "@/lib/products";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SpecTable } from "@/components/ui/SpecTable";
import { PageHero } from "@/components/ui/PageHero";
import type { Metadata } from "next";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = productsData[params.slug];
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} Specs & Trading`,
    description: product.tagline,
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = productsData[params.slug];

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* H1 Heading at top of page */}
      <PageHero
        title={product.name}
        description={product.tagline}
        badge={`TEMP CUT: ${product.distillationTemp}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />

      {/* Main Content Area */}
      <section className="py-11 lg:py-16 bg-paper">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start w-full min-w-0 max-w-full">
            {/* 1. Far Left Column: Sticky Product Directory Sidebar (240px wide on desktop, top: 96px) */}
            <aside className="w-full lg:w-[240px] shrink-0 min-w-0 max-w-full lg:sticky lg:top-[96px] lg:self-start z-10">
              <div className="bg-linen border border-rule p-3 sm:p-4 flex flex-col gap-3 w-full min-w-0 max-w-full">
                <h3 className="font-mono text-xs uppercase tracking-eyebrow text-slate font-bold border-b border-rule pb-2 hidden lg:block">
                  Product Directory
                </h3>

                {/* Mobile & Desktop Nav Wrapper */}
                <div className="relative w-full min-w-0 max-w-full overflow-x-auto lg:overflow-x-visible no-scrollbar pb-1.5 lg:pb-0">
                  {/* Vertical Sidebar on desktop (>=lg), Horizontal Scrolling Chip Row with horizontal padding on mobile (<lg) */}
                  <nav
                    aria-label="Product directory navigation"
                    className="flex lg:flex-col gap-2 px-1 lg:px-0 w-full min-w-0 max-w-full"
                  >
                    {productNavItems.map((item) => {
                      const isCurrent = item.slug === product.slug;
                      return (
                        <Link
                          key={item.slug}
                          href={item.href}
                          className={`transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber whitespace-nowrap text-xs font-mono shrink-0 lg:shrink ${
                            isCurrent
                              ? "bg-card text-ink font-bold border-l-4 border-amber border-y border-r border-rule p-2.5"
                              : "bg-paper lg:bg-transparent text-slate hover:text-ink hover:bg-card p-2.5 border border-rule lg:border-none"
                          }`}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Right Edge Gradient Fade Mask Overlay on Mobile */}
                  <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-linen to-transparent opacity-90 lg:hidden" />
                </div>
              </div>
            </aside>

            {/* 2. Main Body Content Column */}
            <main className="flex-1 w-full min-w-0 max-w-full flex flex-col gap-12 lg:gap-16">
              {/* Top Two-Column Section: Image (Left 45%) & Content (Right 55%) */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center w-full min-w-0 max-w-full">
                {/* LEFT COLUMN (45%): SVG illustration centred, max-width 240px on mobile, 360px on desktop */}
                <div className="w-full lg:w-[45%] shrink-0 min-w-0 max-w-full flex items-center justify-center p-4 sm:p-8 lg:p-12">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width="360"
                    height="360"
                    className="w-full max-w-[240px] lg:max-w-[360px] h-auto object-contain mx-auto"
                  />
                </div>

                {/* RIGHT COLUMN (55%): Stacked Description, MSDS Cards, Contact Us Button */}
                <div className="w-full lg:w-[55%] min-w-0 max-w-full flex flex-col justify-center gap-6">
                  {/* Description paragraphs */}
                  <div className="flex flex-col gap-3 font-body text-sm sm:text-base text-slate leading-relaxed font-light w-full min-w-0 max-w-full">
                    {product.introParagraphs.map((para, idx) => (
                      <p key={idx} className="w-full min-w-0 max-w-full">{para}</p>
                    ))}
                  </div>

                  {/* MSDS Download Cards */}
                  <div className="flex flex-col gap-3 pt-2 w-full min-w-0 max-w-full">
                    {product.msdsCards.map((card, idx) => (
                      /* TODO: Point to real MSDS PDF when provided by client */
                      <a
                        key={idx}
                        href={card.url}
                        download
                        className="bg-card hover:bg-linen border border-rule transition-colors p-3.5 sm:p-4 flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber w-full min-w-0 max-w-full"
                      >
                        {/* Download icon in a tinted square on the left */}
                        <div className="w-10 h-10 shrink-0 bg-amber/10 text-amber flex items-center justify-center border border-amber/20 group-hover:bg-amber group-hover:text-white transition-colors">
                          <svg
                            width="18"
                            height="18"
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

                        {/* PDF icon */}
                        <div className="text-flame shrink-0">
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="10" y1="13" x2="14" y2="13" />
                            <line x1="10" y1="17" x2="14" y2="17" />
                          </svg>
                        </div>

                        {/* Two lines of text */}
                        <div className="flex flex-col min-w-0">
                          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-slate font-medium">
                            MATERIAL SAFETY DATA SHEET
                          </span>
                          <span className="font-display font-bold text-sm sm:text-base text-ink group-hover:text-amber transition-colors truncate">
                            {card.title}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* "CONTACT US" button in amber outline with amber text, not filled */}
                  <div className="pt-2 w-full min-w-0 max-w-full">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-bold px-6 py-3.5 border-2 border-amber text-amber hover:bg-amber hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                    >
                      CONTACT US
                    </Link>
                  </div>
                </div>
              </div>

              {/* Full Width Section below both columns: Grade Chips */}
              <div className="flex flex-col gap-6 border-t border-rule pt-10 w-full min-w-0 max-w-full">
                <div className="flex flex-col gap-1 w-full min-w-0 max-w-full">
                  <Eyebrow>CERTIFICATE OF ANALYSIS (COA)</Eyebrow>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-ink tracking-tight">
                    Product Grades & COA Downloads
                  </h2>
                </div>

                <div className="flex flex-col gap-6 w-full min-w-0 max-w-full">
                  {product.gradeGroups.map((group, groupIdx) => (
                    <div key={groupIdx} className="flex flex-col gap-3 w-full min-w-0 max-w-full">
                      {group.groupName && (
                        <h3 className="font-mono text-xs uppercase tracking-eyebrow text-slate font-bold">
                          {group.groupName}
                        </h3>
                      )}
                      <div className="flex flex-wrap gap-2.5 w-full min-w-0 max-w-full">
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
                            /* TODO: Point to real COA PDF provided by client */
                            <a
                              key={gradeIdx}
                              href={coaPath}
                              download
                              className="bg-card border border-rule text-ink font-mono text-xs font-medium px-3.5 py-2 inline-flex items-center gap-2 transition-colors hover:bg-linen hover:border-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber max-w-full"
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

              {/* Full Width Section below grade chips: Specification Table */}
              <div className="flex flex-col gap-8 border-t border-rule pt-10 w-full min-w-0 max-w-full">
                {product.specTables.map((table, tIdx) => (
                  <div key={tIdx} className="flex flex-col gap-3 w-full min-w-0 max-w-full">
                    <h3 className="font-mono text-xs uppercase tracking-eyebrow text-slate font-bold">
                      {table.label}
                    </h3>
                    <SpecTable columns={table.columns} data={table.rows} />
                    <p className="font-mono text-[11px] text-slate italic pt-1 w-full min-w-0 max-w-full">
                      * {COA_FOOTNOTE}
                    </p>
                  </div>
                ))}
              </div>

              {/* Full Width Section: Applications & Packing Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-rule pt-10 w-full min-w-0 max-w-full">
                {/* Applications */}
                <div className="bg-linen border border-rule p-5 sm:p-[28px] flex flex-col gap-4 w-full min-w-0 max-w-full">
                  <Eyebrow>APPLICATIONS</Eyebrow>
                  <h3 className="font-display font-bold text-lg text-ink">
                    Industrial & commercial use
                  </h3>
                  <ul className="flex flex-col gap-2.5 font-body text-sm text-slate leading-relaxed font-light w-full min-w-0 max-w-full">
                    {product.applications.map((app, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5 w-full min-w-0 max-w-full">
                        <span className="text-amber font-bold shrink-0 mt-0.5">•</span>
                        <span className="w-full min-w-0 max-w-full">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Packing Options */}
                <div className="bg-linen border border-rule p-5 sm:p-[28px] flex flex-col gap-4 w-full min-w-0 max-w-full">
                  <Eyebrow>PACKAGING</Eyebrow>
                  <h3 className="font-display font-bold text-lg text-ink">
                    Packing and container options
                  </h3>
                  <ul className="flex flex-col gap-2.5 font-mono text-xs text-slate uppercase w-full min-w-0 max-w-full">
                    {product.packingOptions.map((pack, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-center gap-2 border-b border-rule pb-2 w-full min-w-0 max-w-full"
                      >
                        <span
                          className="w-1.5 h-1.5 bg-amber shrink-0"
                          aria-hidden="true"
                        />
                        <span className="w-full min-w-0 max-w-full">{pack}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </main>
          </div>
        </Container>
      </section>
    </>
  );
}
