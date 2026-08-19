import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SpecTable, SpecTableColumn } from "@/components/ui/SpecTable";
import { DistillationColumn } from "@/app/components/DistillationColumn";
import { tradeFacts, howWeWorkSteps, baseOilSpecs } from "@/lib/products";

export default function Home() {
  const baseOilColumns: SpecTableColumn[] = [
    { key: "grade", header: "Grade / Solvent Neutral" },
    { key: "viscosity40", header: "Viscosity @ 40°C (cSt)" },
    { key: "viscosity100", header: "Viscosity @ 100°C (cSt)" },
    { key: "viscosityIndex", header: "Viscosity Index" },
    { key: "flashPoint", header: "Flash Point (COC)" },
    { key: "pourPoint", header: "Pour Point" },
    { key: "color", header: "ASTM Color", align: "center" },
  ];

  const baseOilTableData = baseOilSpecs.map((spec) => ({
    grade: <span className="font-bold text-amber">{spec.grade}</span>,
    viscosity40: spec.viscosity40,
    viscosity100: spec.viscosity100,
    viscosityIndex: spec.viscosityIndex,
    flashPoint: spec.flashPoint,
    pourPoint: spec.pourPoint,
    color: (
      <span className="px-2 py-0.5 text-[11px] bg-steel text-paper font-semibold uppercase">
        {spec.color}
      </span>
    ),
  }));

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hamburg for Refined Oil Products Trading LLC",
    legalName: "Refined Oil Products Trading LLC",
    url: "https://hamburg-int.com",
    logo: "https://hamburg-int.com/logo.svg",
    telephone: "+971 55 515 6779",
    email: "info@hamburg-int.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tejasvi Business Center, Office G12, Garhoud Deira",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    openingHours: "Su-Th 09:00-18:00",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* Hero Section with Duotone Tank Farm Photography Background */}
      <section className="relative py-11 lg:py-16 bg-paper border-b border-steel/15 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden bg-ink pointer-events-none">
          <Image
            src="/images/tank-farm.jpg"
            alt="Oil storage tank farm at dusk"
            fill
            sizes="100vw"
            priority
            className="object-cover grayscale filter contrast-125 opacity-[0.18] mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-ink/80 mix-blend-multiply" />
        </div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Hero Left Column (Sticky on Desktop) */}
            <div className="lg:col-span-6 flex flex-col gap-5 pt-2 lg:sticky lg:top-[96px] lg:self-start">
              <Eyebrow>DUBAI TRADING DESK</Eyebrow>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] tracking-tight lg:tracking-[-0.025em] text-ink leading-tight sm:leading-none break-words max-w-full">
                Refined oil products and bulk fuel from&nbsp;Dubai
              </h1>

              <p className="font-body text-slate text-sm sm:text-[17px] leading-[1.6] font-light max-w-[65ch]">
                Hamburg Refined Oil Products Trading LLC is a Dubai energy trading firm. We deliver virgin base oils, industrial lubricants, and gas oil from Gulf refineries to international ports.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  variant="amber"
                  href="/contact"
                  className="focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
                >
                  Request Commercial Quote
                </Button>
                <Button
                  variant="ink"
                  href="#distillation"
                  className="focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
                >
                  View Cut List
                </Button>
              </div>
            </div>

            {/* Hero Right Column: Signature Distillation Column Element */}
            <div id="distillation" className="lg:col-span-6 w-full">
              <DistillationColumn />
            </div>
          </div>

          {/* Four Labelled Trade Facts (28px padding, equal height, high WCAG AA contrast) */}
          <div className="mt-16 pt-8 border-t border-steel/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {tradeFacts.map((tf, idx) => (
              <div
                key={idx}
                className="bg-steel border-l-4 border-l-amber border border-steel/60 p-[28px] flex flex-col justify-between h-full hover:border-amber transition-colors"
              >
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-eyebrow text-amber">
                    {tf.label}
                  </span>
                  <h3 className="font-display font-bold text-lg text-paper leading-snug">
                    {tf.fact}
                  </h3>
                </div>
                <p className="font-body text-mist text-sm leading-[1.6] font-light mt-3">
                  {tf.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* "How We Work" Section */}
      <section className="py-11 lg:py-16 bg-paper border-b border-steel/15">
        <Container>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2 max-w-[65ch]">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
                How an order moves
              </h2>
              <p className="font-body text-slate text-base sm:text-[17px] leading-[1.6] font-light max-w-[65ch]">
                From refinery procurement to laboratory testing and vessel chartering, we handle each stage of physical delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {howWeWorkSteps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="bg-mist/40 border border-steel/30 p-[28px] flex flex-col justify-between h-full hover:border-amber transition-colors"
                >
                  <div className="flex flex-col gap-3">
                    <div className="border-b border-steel/15 pb-3">
                      <span className="font-mono text-xl font-extrabold text-steel/40">
                        {step.stepNumber}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-ink">
                      {step.title}
                    </h3>

                    <p className="font-body text-slate text-sm sm:text-base font-light leading-[1.6] max-w-[65ch]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 380px Full-Bleed Duotone Image Band Section */}
      <section
        className="relative w-full h-[380px] bg-ink overflow-hidden border-t border-b border-steel flex items-center justify-center"
        style={{ height: "380px", position: "relative" }}
      >
        <Image
          src="/images/product-tanker.jpg"
          alt="Product tanker vessel at berth in industrial harbor"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="object-cover grayscale filter contrast-125 opacity-[0.18] mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-ink/85 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-dark-grid pointer-events-none" />
        <Container className="relative z-10 text-center max-w-3xl px-4">
          <p className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-paper tracking-tight">
            Vessel chartering and bulk discharge port logistics across global trade routes.
          </p>
        </Container>
      </section>

      {/* Base Oil Grades Table Section */}
      <section className="py-11 lg:py-16 bg-paper">
        <Container>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="flex flex-col gap-2 max-w-[65ch]">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
                  Group I base oil specifications
                </h2>
                <p className="font-body text-slate text-base font-light leading-relaxed">
                  Technical specification parameters for SN 150, SN 500, and Bright Stock BS 150 base oils.
                </p>
              </div>
              <Button variant="ink" href="/docs/product-list.pdf" target="_blank" rel="noopener noreferrer" className="shrink-0 text-xs py-2.5 px-4">
                Download PDF Catalog ↓
              </Button>
            </div>

            <SpecTable
              columns={baseOilColumns}
              data={baseOilTableData}
              caption="TABLE 1.0 — VIRGIN GROUP I BASE OIL TYPICAL VALUES (ASTM METHOD TESTED)"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
