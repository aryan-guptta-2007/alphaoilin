import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  productsData,
  productNavItems,
  COA_FOOTNOTE,
} from "@/lib/products";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
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

      {/* Main Content Area: Two-Column Layout (Sticky Left Sidebar, Structured Right Content Column) */}
      <section className="py-11 lg:py-16 bg-paper">
        <Container>
          <div className="flex flex-col min-[940px]:flex-row gap-8 lg:gap-12 items-start">
            {/* 1. Left Column: Sticky Product Navigation Sidebar (240px wide on desktop, top: 96px) */}
            <aside className="w-full min-[940px]:w-[240px] shrink-0 min-[940px]:sticky min-[940px]:top-[96px] min-[940px]:self-start z-10">
              <div className="bg-linen border border-rule p-4 flex flex-col gap-3">
                <h3 className="font-mono text-xs uppercase tracking-eyebrow text-slate font-bold border-b border-rule pb-2 hidden min-[940px]:block">
                  Product Directory
                </h3>

                {/* Vertical Sidebar on desktop (>=940px), Horizontal Scrolling Chip Row below 940px */}
                <nav
                  aria-label="Product range navigation"
                  className="flex min-[940px]:flex-col overflow-x-auto min-[940px]:overflow-x-visible gap-2 pb-2 min-[940px]:pb-0 no-scrollbar"
                >
                  {productNavItems.map((item) => {
                    const isCurrent = item.slug === product.slug;
                    return (
                      <Link
                        key={item.slug}
                        href={item.href}
                        className={`transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber whitespace-nowrap text-xs font-mono shrink-0 min-[940px]:shrink ${
                          isCurrent
                            ? "bg-card text-ink font-bold border-l-4 border-amber border-y border-r border-rule p-2.5"
                            : "bg-paper min-[940px]:bg-transparent text-slate hover:text-ink hover:bg-card p-2.5 border border-rule min-[940px]:border-none"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* 2. Right Column (Structured Top to Bottom) */}
            <main className="flex-1 min-w-0 flex flex-col gap-8 lg:gap-10">
              {/* (a) Product Photograph, 3:2, full width of content column */}
              <div className="flex flex-col gap-2">
                <div className="relative w-full aspect-[3/2] overflow-hidden border border-rule bg-linen">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={900}
                    height={600}
                    quality={80}
                    priority
                    className="object-cover w-full h-full grayscale-[0.2] sepia-[0.05] contrast-[1.05]"
                  />
                </div>
                {product.imageCaption && (
                  <span className="font-mono text-xs text-slate">
                    {product.imageCaption}
                  </span>
                )}
              </div>

              {/* (b) H1 Product Name */}
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-ink tracking-tight">
                {product.name}
              </h1>

              {/* (c) Two or Three Paragraphs of Description */}
              <div className="flex flex-col gap-4 font-body text-base sm:text-lg text-slate leading-relaxed font-light max-w-[65ch]">
                {product.introParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* (d) Button Row: "Download MSDS" (ink outline) and "Request a quote" (amber, links to /contact) */}
              <div className="flex flex-wrap items-center gap-4 border-b border-rule pb-8">
                {/* TODO: Point to real MSDS PDF when provided by client */}
                <Button
                  variant="ink"
                  href={product.msdsUrl || `/docs/msds/${product.slug}.pdf`}
                  download
                  className="inline-flex items-center gap-2"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download MSDS</span>
                </Button>
                <Button variant="amber" href="/contact">
                  Request a quote
                </Button>
              </div>

              {/* 3. Grade Chips, grouped by base oil group */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <Eyebrow>CERTIFICATE OF ANALYSIS (COA)</Eyebrow>
                  <h2 className="font-display font-bold text-xl text-ink tracking-tight">
                    Product Grades & COA Downloads
                  </h2>
                </div>

                <div className="flex flex-col gap-6">
                  {product.gradeGroups.map((group, groupIdx) => (
                    <div key={groupIdx} className="flex flex-col gap-3">
                      {group.groupName && (
                        <h3 className="font-mono text-xs uppercase tracking-eyebrow text-slate font-bold">
                          {group.groupName}
                        </h3>
                      )}
                      <div className="flex flex-wrap gap-2.5">
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
                              className="bg-card border border-rule text-ink font-mono text-xs font-medium px-3.5 py-2 inline-flex items-center gap-2 transition-colors hover:bg-linen hover:border-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
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

              {/* 4. Specification Tables */}
              <div className="flex flex-col gap-8 border-t border-rule pt-8">
                {product.specTables.map((table, tIdx) => (
                  <div key={tIdx} className="flex flex-col gap-3">
                    <h3 className="font-mono text-xs uppercase tracking-eyebrow text-slate font-bold">
                      {table.label}
                    </h3>
                    <SpecTable columns={table.columns} data={table.rows} />
                    <p className="font-mono text-[11px] text-slate italic pt-1">
                      * {COA_FOOTNOTE}
                    </p>
                  </div>
                ))}
              </div>

              {/* 5. Applications & Packing Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-rule pt-8">
                {/* Applications */}
                <div className="bg-linen border border-rule p-[28px] flex flex-col gap-4">
                  <Eyebrow>APPLICATIONS</Eyebrow>
                  <h3 className="font-display font-bold text-lg text-ink">
                    Industrial & commercial use
                  </h3>
                  <ul className="flex flex-col gap-2.5 font-body text-sm text-slate leading-relaxed font-light">
                    {product.applications.map((app, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5">
                        <span className="text-amber font-bold shrink-0 mt-0.5">•</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Packing Options */}
                <div className="bg-linen border border-rule p-[28px] flex flex-col gap-4">
                  <Eyebrow>PACKAGING</Eyebrow>
                  <h3 className="font-display font-bold text-lg text-ink">
                    Packing and container options
                  </h3>
                  <ul className="flex flex-col gap-2.5 font-mono text-xs text-slate uppercase">
                    {product.packingOptions.map((pack, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-center gap-2 border-b border-rule pb-2"
                      >
                        <span
                          className="w-1.5 h-1.5 bg-amber shrink-0"
                          aria-hidden="true"
                        />
                        <span>{pack}</span>
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
