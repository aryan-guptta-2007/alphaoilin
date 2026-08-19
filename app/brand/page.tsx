import React from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Identity & Logo Concepts",
  description:
    "Review and compare the three brand identity logo concepts and color palette tokens for Hamburg Refined Oil Products Trading LLC.",
};

export default function BrandShowcasePage() {
  const colors = [
    { name: "Ink", hex: "#07171E", bg: "bg-ink", text: "text-white", role: "Primary text, dark backgrounds" },
    { name: "Steel", hex: "#0F2C39", bg: "bg-steel", text: "text-white", role: "Table headers, borders, footer background" },
    { name: "Slate", hex: "#3D5B66", bg: "bg-slate", text: "text-white", role: "Secondary copy, structural borders" },
    { name: "Mist", hex: "#E9EDEA", bg: "bg-mist", text: "text-ink", role: "Light background panels, subtle highlights" },
    { name: "Paper", hex: "#F6F8F5", bg: "bg-paper", text: "text-ink", role: "Default page background" },
    { name: "Blue", hex: "#14618E", bg: "bg-blue", text: "text-white", role: "Secondary accent element" },
    { name: "Moss", hex: "#5E8C2A", bg: "bg-moss", text: "text-white", role: "QA passed status & WhatsApp action" },
    { name: "Amber", hex: "#E5901C", bg: "bg-amber", text: "text-ink", role: "Primary callout buttons, dark eyebrows" },
    { name: "Flame", hex: "#D9531E", bg: "bg-flame", text: "text-white", role: "Light section eyebrows & brand mark accent" },
  ];

  return (
    <>
      <PageHero
        title="Brand Identity & Concepts"
        description="Review and compare the three brand identity logo concepts and color palette swatches."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Brand Identity" },
        ]}
      />

      {/* Three Logo Concepts Comparison Section */}
      <section className="py-16 sm:py-24 bg-paper border-b border-steel/15">
        <Container>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <Eyebrow>LOGO CONCEPTS EVALUATION</Eyebrow>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
                Brand Mark Explorations
              </h2>
              <p className="font-body text-slate text-lg font-light max-w-3xl">
                Concept A has been officially selected and approved for site-wide use.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Concept A (Approved) */}
              <div className="bg-paper border-2 border-amber p-8 flex flex-col gap-6 relative shadow-md">
                <div className="absolute top-4 right-4 bg-amber text-ink font-mono text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest">
                  APPROVED MARK
                </div>

                <div className="w-20 h-20 bg-ink border border-amber/40 flex items-center justify-center p-3">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path
                      d="M16 2L4 9V23L16 30L28 23V9L16 2Z"
                      stroke="#0F2C39"
                      strokeWidth="2.5"
                    />
                    <path d="M16 8L22 12V20L16 24L10 20V12L16 8Z" fill="#D9531E" />
                    <path d="M16 12L19 14V18L16 20L13 18V14L16 12Z" fill="#E5901C" />
                  </svg>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs font-bold text-amber uppercase">
                    CONCEPT A — SELECTED
                  </span>
                  <h3 className="font-display font-bold text-xl text-ink">
                    Geometric Hexagon Refined Seal
                  </h3>
                  <p className="font-body text-slate text-sm leading-relaxed font-light">
                    An angular outer vessel geometry enclosing a flame core and amber drop center. Symbolizes chemical stability, refinery precision, and heavy industrial oil trading.
                  </p>
                </div>
              </div>

              {/* Concept B */}
              <div className="bg-paper border border-steel/20 p-8 flex flex-col gap-6 ">
                <div className="w-20 h-20 bg-ink border border-steel/40 flex items-center justify-center p-3">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <rect x="4" y="4" width="24" height="24" stroke="#3D5B66" strokeWidth="2" />
                    <path d="M10 8V24" stroke="#E5901C" strokeWidth="3" />
                    <path d="M22 8V24" stroke="#E5901C" strokeWidth="3" />
                    <path d="M10 16H22" stroke="#D9531E" strokeWidth="3" />
                  </svg>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs font-bold text-slate uppercase">
                    CONCEPT B — ALTERNATE
                  </span>
                  <h3 className="font-display font-bold text-xl text-ink">
                    Refinery Column Monogram
                  </h3>
                  <p className="font-body text-slate text-sm leading-relaxed font-light">
                    A structural &apos;H&apos; monogram formed by parallel distillation lines and flame crossbeam. Emphasizes engineering infrastructure and technical cut points.
                  </p>
                </div>
              </div>

              {/* Concept C */}
              <div className="bg-paper border border-steel/20 p-8 flex flex-col gap-6 ">
                <div className="w-20 h-20 bg-ink border border-steel/40 flex items-center justify-center p-3">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path d="M6 10L16 4L26 10" stroke="#D9531E" strokeWidth="3" />
                    <path d="M6 16L16 10L26 16" stroke="#E5901C" strokeWidth="3" />
                    <path d="M6 22L16 16L26 22" stroke="#14618E" strokeWidth="3" />
                  </svg>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs font-bold text-slate uppercase">
                    CONCEPT C — ALTERNATE
                  </span>
                  <h3 className="font-display font-bold text-xl text-ink">
                    Sharp Chevron H Industrial Seal
                  </h3>
                  <p className="font-body text-slate text-sm leading-relaxed font-light">
                    Stacked angular chevrons representing maritime shipping vectors and Gulf refinery exports. Modern high-contrast directional mark.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Color Palette Tokens Swatch Section */}
      <section className="py-16 sm:py-24 bg-mist/30">
        <Container>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <Eyebrow>COLOR SYSTEM TOKENS</Eyebrow>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
                Design System Palette Swatches
              </h2>
              <p className="font-body text-slate text-lg font-light max-w-3xl">
                Strict color token names and exact hex values enforced across Tailwind configuration and global CSS.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {colors.map((c) => (
                <div
                  key={c.name}
                  className="bg-paper border border-steel/20 p-5 flex flex-col gap-4 shadow-sm"
                >
                  <div className={`${c.bg} ${c.text} h-24 p-3 flex flex-col justify-between border border-steel/10`}>
                    <span className="font-display font-bold text-sm uppercase">
                      {c.name}
                    </span>
                    <span className="font-mono text-xs tracking-wider ">
                      {c.hex}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[11px] font-bold text-steel uppercase">
                      Class: bg-{c.name.toLowerCase()} / text-{c.name.toLowerCase()}
                    </span>
                    <span className="font-body text-xs text-slate font-light">
                      {c.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 flex justify-center">
              <Button variant="ink" href="/contact">
                Contact Commercial Desk
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
