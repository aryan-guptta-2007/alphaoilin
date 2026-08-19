import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  productsData,
  distillationProducts,
  COA_FOOTNOTE,
} from "@/lib/products";
import { siteConfig } from "@/lib/site";
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
        imageSrc="/images/lab-sample.jpg"
        imageAlt="Laboratory oil sample testing analysis"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />

      {/* Main Content Area: Left Sidebar (Range), Body (Specs + Applications), Right Sidebar (Docs + Quote) */}
      <section className="py-11 lg:py-16 bg-paper">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Sidebar: Product-Range Navigation */}
            <aside className="lg:col-span-3 flex flex-col gap-6">
              <div className="bg-mist/50 border border-steel/20 p-5 flex flex-col gap-4">
                <h3 className="font-display font-bold text-base text-ink">
                  Cut list
                </h3>

                <nav
                  aria-label="Product range navigation"
                  className="flex flex-col gap-1 font-mono text-xs uppercase"
                >
                  {distillationProducts.map((p) => {
                    const isCurrent = p.slug === product.slug;
                    return (
                      <Link
                        key={p.slug}
                        href={p.href}
                        className={`flex items-center justify-between p-2.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber ${
                          isCurrent
                            ? "bg-steel text-paper font-bold border-l-4 border-amber"
                            : "text-slate hover:bg-steel/10 hover:text-ink"
                        }`}
                      >
                        <span className="truncate pr-2">{p.name.split("(")[0]}</span>
                        <span
                          className="w-2 h-2 shrink-0 border border-white/20"
                          style={{ backgroundColor: p.swatchColor }}
                          aria-hidden="true"
                        />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Direct Trading Desk Help */}
              <div className="bg-steel text-paper p-5 border border-steel/80 flex flex-col gap-3">
                <p className="font-body text-xs text-mist leading-relaxed font-light max-w-[65ch]">
                  Need viscosity blending or tanker scheduling? Contact our Dubai trading desk directly.
                </p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="font-mono text-xs text-amber font-semibold hover:underline"
                >
                  TEL: {siteConfig.phone}
                </a>
              </div>
            </aside>

            {/* Main Body Column: Technical Description & Spec Tables */}
            <main className="lg:col-span-6 flex flex-col gap-8">
              {/* Intro Paragraphs */}
              <article className="flex flex-col gap-4 font-body text-base sm:text-lg text-slate leading-relaxed font-light max-w-[65ch]">
                <h2 className="font-display font-bold text-xl sm:text-2xl text-ink tracking-tight mb-1">
                  Product overview
                </h2>
                {product.introParagraphs.map((para, idx) => (
                  <p key={idx} className="max-w-[65ch]">{para}</p>
                ))}
              </article>

              {/* Spec Tables */}
              <div className="flex flex-col gap-8">
                {product.specTables.map((table, tIdx) => (
                  <div key={tIdx} className="flex flex-col gap-3">
                    <h3 className="font-mono text-xs uppercase tracking-eyebrow text-steel font-bold">
                      {table.label}
                    </h3>

                    <SpecTable columns={table.columns} data={table.rows} />

                    {/* Mandated COA Typical Values Footnote */}
                    <p className="font-mono text-[11px] text-slate italic pt-1">
                      * {COA_FOOTNOTE}
                    </p>
                  </div>
                ))}
              </div>

              {/* Industrial Applications */}
              <div className="flex flex-col gap-4 pt-4 border-t border-steel/15">
                <h3 className="font-display font-extrabold text-2xl text-ink tracking-tight">
                  Applications and end uses
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-body text-slate text-base">
                  {product.applications.map((app, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-flame mt-2 shrink-0" aria-hidden="true" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </main>

            {/* Right Sidebar: Documents, Packing Options & Quote Request Box */}
            <aside className="lg:col-span-3 flex flex-col gap-8">
              {/* Documents Box */}
              {/* TODO: Replace placeholder # links with real PDF URLs */}
              <div className="bg-mist/40 border border-steel/20 p-5 flex flex-col gap-4">
                <Eyebrow>DOCUMENTS</Eyebrow>
                <h4 className="font-display font-bold text-base text-ink">
                  Documents and TDS
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {product.documents.map((doc, dIdx) => (
                    <li key={dIdx}>
                      <a
                        href={doc.url}
                        className="group flex items-start gap-2.5 p-2 bg-paper border border-steel/10 hover:border-amber transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                      >
                        <svg
                          width="16"
                          height="16"
                          className="w-4 h-4 text-flame mt-0.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="square"
                            strokeLinejoin="miter"
                            strokeWidth="2"
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        <div className="flex flex-col min-w-0">
                          <span className="font-display font-semibold text-xs text-ink group-hover:text-amber transition-colors truncate">
                            {doc.title}
                          </span>
                          <span className="font-mono text-[10px] text-slate">
                            {doc.type} • {doc.size}
                          </span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Packing Options */}
              <div className="bg-mist/40 border border-steel/20 p-5 flex flex-col gap-4">
                <Eyebrow>PACKAGING</Eyebrow>
                <h4 className="font-display font-bold text-base text-ink">
                  Packing and container options
                </h4>
                <ul className="flex flex-col gap-2.5 font-mono text-xs text-slate uppercase">
                  {product.packingOptions.map((pack, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2 border-b border-steel/10 pb-2">
                      <span className="w-1.5 h-1.5 bg-amber shrink-0" aria-hidden="true" />
                      <span>{pack}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote Request Box */}
              <div className="bg-ink text-paper p-6 border border-steel flex flex-col gap-4">
                <Eyebrow onDark>COMMERCIAL INQUIRY</Eyebrow>
                <h4 className="font-display font-bold text-xl text-paper">
                  Request pricing for this product
                </h4>
                <p className="font-body text-xs text-mist leading-relaxed font-light">
                  Submit target volume and discharge port for immediate spot pricing and COA confirmation.
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  <Button variant="amber" href="/contact" className="w-full text-center">
                    Request Quote
                  </Button>
                  <Button
                    variant="ghost"
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center"
                  >
                    WhatsApp Desk
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
