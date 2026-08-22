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
import { ProductDirectoryChips } from "@/components/ui/ProductDirectoryChips";
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
      {/* 1. Breadcrumbs & 2. H1 Product Name in PageHero */}
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

      {/* Main Content Section */}
      <section className="py-8 sm:py-11 lg:py-16 bg-paper">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start w-full min-w-0 max-w-full">
            {/* Desktop Left Sidebar Directory (>=lg) */}
            <aside className="hidden lg:block w-[240px] shrink-0 sticky top-[96px] self-start z-10">
              <div className="bg-linen border border-rule p-4 flex flex-col gap-3 w-full">
                <h3 className="font-mono text-xs uppercase tracking-eyebrow text-slate font-bold border-b border-rule pb-2">
                  Product Directory
                </h3>
                <nav
                  aria-label="Product directory desktop navigation"
                  className="flex flex-col gap-2"
                >
                  {productNavItems.map((item) => {
                    const isCurrent = item.slug === product.slug;
                    return (
                      <Link
                        key={item.slug}
                        href={item.href}
                        className={`transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber text-xs font-mono min-h-[44px] inline-flex items-center px-3 ${
                          isCurrent
                            ? "bg-card text-ink font-bold border-l-4 border-amber border-y border-r border-rule"
                            : "bg-transparent text-slate hover:text-ink hover:bg-card border-none"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Main Content Area (Matches exact mobile order requirement) */}
            <main className="flex-1 w-full min-w-0 max-w-full flex flex-col gap-8 lg:gap-12">
              {/* 3. Description Paragraphs */}
              <div className="flex flex-col gap-3 font-body text-base text-slate leading-relaxed font-light w-full min-w-0 max-w-full">
                {product.introParagraphs.map((para, idx) => (
                  <p key={idx} className="w-full min-w-0 max-w-full">{para}</p>
                ))}
              </div>

              {/* 4. Product SVG Illustration: Centered, max-width 200px on mobile, 360px on desktop */}
              <div className="w-full min-w-0 max-w-full flex justify-center py-2 sm:py-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width="360"
                  height="360"
                  className="w-full max-w-[200px] lg:max-w-[360px] h-auto object-contain mx-auto block"
                />
              </div>

              {/* 5. Product Directory Chips (Mobile scroll row below lg) */}
              <div className="lg:hidden w-full min-w-0 max-w-full">
                <div className="bg-linen border border-rule p-3 flex flex-col gap-2.5 w-full min-w-0 max-w-full">
                  <h3 className="font-mono text-xs uppercase tracking-eyebrow text-slate font-bold">
                    Product Directory
                  </h3>
                  <ProductDirectoryChips
                    items={productNavItems}
                    currentSlug={product.slug}
                  />
                </div>
              </div>

              {/* 6. Grade Chips */}
              <div className="flex flex-col gap-4 border-t border-rule pt-8 w-full min-w-0 max-w-full">
                <div className="flex flex-col gap-1 w-full min-w-0 max-w-full">
                  <Eyebrow className="text-slate">CERTIFICATE OF ANALYSIS (COA)</Eyebrow>
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
                      <div className="flex flex-wrap gap-2 w-full min-w-0 max-w-full">
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
                              className="bg-card border border-rule text-ink font-mono text-xs font-medium px-4 py-2.5 min-h-[44px] inline-flex items-center gap-2 transition-colors hover:bg-linen hover:border-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber max-w-full"
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

              {/* 7. MSDS Cards: Stacked 12px gap, 44px min tap height, wrapping text */}
              <div className="flex flex-col gap-3 border-t border-rule pt-8 w-full min-w-0 max-w-full">
                <h3 className="font-mono text-xs uppercase tracking-eyebrow text-slate font-bold">
                  Material Safety Data Sheets
                </h3>
                <div className="flex flex-col gap-3 w-full min-w-0 max-w-full">
                  {product.msdsCards.map((card, idx) => (
                    <a
                      key={idx}
                      href={card.url}
                      download
                      className="bg-card hover:bg-linen border border-rule transition-colors p-4 flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber w-full min-w-0 max-w-full min-h-[56px]"
                    >
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

                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-slate font-medium">
                          MATERIAL SAFETY DATA SHEET
                        </span>
                        <span className="font-display font-bold text-base text-ink group-hover:text-amber transition-colors break-words whitespace-normal">
                          {card.title}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="pt-2 w-full min-w-0 max-w-full">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-bold px-6 py-3.5 border-2 border-amber text-amber hover:bg-amber hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber min-h-[44px]"
                  >
                    CONTACT US
                  </Link>
                </div>
              </div>

              {/* 8. Spec Tables */}
              <div className="flex flex-col gap-8 border-t border-rule pt-8 w-full min-w-0 max-w-full">
                {product.specTables.map((table, tIdx) => (
                  <div key={tIdx} className="flex flex-col gap-3 w-full min-w-0 max-w-full">
                    <h3 className="font-mono text-xs uppercase tracking-eyebrow text-slate font-bold">
                      {table.label}
                    </h3>
                    <span className="font-mono text-xs text-slate uppercase block sm:hidden">
                      Scroll to see all columns →
                    </span>
                    <SpecTable columns={table.columns} data={table.rows} />
                    <p className="font-mono text-xs text-slate italic pt-1 w-full min-w-0 max-w-full">
                      * {COA_FOOTNOTE}
                    </p>
                  </div>
                ))}
              </div>

              {/* 9. Applications & 10. Packing Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-rule pt-8 w-full min-w-0 max-w-full">
                {/* Applications */}
                <div className="bg-linen border border-rule p-6 sm:p-[28px] flex flex-col gap-4 w-full min-w-0 max-w-full">
                  <Eyebrow className="text-slate">APPLICATIONS</Eyebrow>
                  <h3 className="font-display font-bold text-lg text-ink">
                    Industrial & commercial use
                  </h3>
                  <ul className="flex flex-col gap-2.5 font-body text-base text-slate leading-relaxed font-light w-full min-w-0 max-w-full">
                    {product.applications.map((app, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5 w-full min-w-0 max-w-full">
                        <span className="text-amber font-bold shrink-0 mt-0.5">•</span>
                        <span className="w-full min-w-0 max-w-full">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Packing Options */}
                <div className="bg-linen border border-rule p-6 sm:p-[28px] flex flex-col gap-4 w-full min-w-0 max-w-full">
                  <Eyebrow className="text-slate">PACKAGING</Eyebrow>
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
