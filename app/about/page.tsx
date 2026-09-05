/**
 * FORBIDDEN UNVERIFIED CLAIMS (Do not reinstate until client confirms with documentation):
 * - Specific test methods: ASTM, EN test methods, ISO standards (e.g., ASTM D445, EN 590, EN 12591)
 * - Third-party inspection firms: SGS, Saybolt, Intertek (use generic "an independent inspection agency")
 * - Quality/Management Certifications: ISO 9001, ISO 14001, ISO 45001
 * - Stock warehouse photos not belonging to the company
 */

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import { howWeWorkSteps } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Hamburg Refined Oil Products Trading LLC, our Gulf refinery sourcing protocols, and strict quality documentation.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Refined oil products trading from Dubai"
        description="Hamburg Refined Oil Products Trading LLC is an independent energy trading firm in Dubai, UAE. We trade base oils, industrial lubricants, and distillate fuels."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* Corporate Overview Section */}
      <section className="py-11 lg:py-16 bg-paper border-b border-rule">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-start w-full min-w-0 max-w-full">
            <div className="lg:col-span-7 w-full min-w-0 max-w-full flex flex-col gap-5 font-body text-slate text-sm sm:text-[17px] leading-[1.6] font-light">
              <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-[28px] text-ink tracking-tight">
                Supply chains from the Gulf to global discharge ports
              </h2>
              <p className="max-w-[65ch] max-w-full">
                Headquartered at Tejasvi Business Center in Garhoud Deira, Dubai, Hamburg Refined Oil Products Trading LLC connects Gulf refinery production with industrial buyers. We focus on Group I solvent neutral base oils (SN 150, SN 500, Bright Stock BS 150), process fluids, bitumen, and gas oils.
              </p>
              <p className="max-w-[65ch] max-w-full">
                We maintain direct relationships with refineries across the Gulf. We work without unnecessary intermediaries so your commercial terms and delivery schedules remain clear.
              </p>

              <div className="pt-3 flex flex-wrap gap-3">
                <Button variant="amber" href="/contact">
                  Contact Our Trading Desk
                </Button>
                <Button variant="ink" href="/products">
                  Explore Products
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 w-full min-w-0 max-w-full flex flex-col gap-6">
              <div className="bg-linen border border-rule p-6 flex flex-col gap-5 w-full min-w-0 max-w-full">
                <h3 className="font-display font-bold text-lg text-ink">
                  Refinery contracts and batch testing
                </h3>
                <div className="flex flex-col gap-4 font-body text-sm text-slate leading-relaxed">
                  <div className="border-l-2 border-amber pl-4 py-1">
                    <h4 className="font-display font-bold text-ink text-base">Direct Refinery Contracts</h4>
                    <p className="max-w-[65ch] max-w-full">We source physical parcels directly from Gulf refining complexes, ensuring origin traceability.</p>
                  </div>
                  <div className="border-l-2 border-flame pl-4 py-1">
                    <h4 className="font-display font-bold text-ink text-base">Independent Laboratory Testing</h4>
                    <p className="max-w-[65ch] max-w-full">Every bulk parcel is sampled and tested by an independent inspection agency before loading.</p>
                  </div>
                  <div className="border-l-2 border-moss pl-4 py-1">
                    <h4 className="font-display font-bold text-ink text-base">Standardized Packaging</h4>
                    <p className="max-w-[65ch] max-w-full">Logistics via flexitanks, ISO tank containers, steel drums, or vessel chartering based on discharge port capability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Documentation Matters Section */}
      <section className="py-11 lg:py-16 bg-linen border-b border-rule">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-center w-full min-w-0 max-w-full">
            <div className="lg:col-span-5 w-full min-w-0 max-w-full bg-card text-ink p-[28px] border border-rule flex flex-col gap-4">
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink">
                Why paperwork matters in oil trading
              </h3>
              <p className="font-body text-slate text-sm leading-relaxed font-light max-w-[65ch] max-w-full">
                In lubricant blending and fuel combustion, off-spec viscosity or flash points cause equipment damage.
              </p>
              <div className="font-mono text-xs text-amber uppercase tracking-eyebrow border-t border-rule pt-4 flex flex-col gap-2 font-semibold">
                <span>✓ CERTIFICATE OF ANALYSIS ON EVERY PARCEL</span>
                <span>✓ BATCH TEST RESULTS ON EVERY PARCEL</span>
                <span>✓ BATCH RETENTION SAMPLES</span>
              </div>
            </div>

            <div className="lg:col-span-7 w-full min-w-0 max-w-full flex flex-col gap-5 font-body text-slate text-base sm:text-lg leading-relaxed font-light">
              <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-[28px] text-ink tracking-tight">
                Certificate of Analysis on every parcel
              </h2>
              <p className="max-w-[65ch] max-w-full">
                Published data sheets list typical values. Every physical parcel we deliver comes with a binding Certificate of Analysis issued at vessel loading.
              </p>
              <p className="max-w-[65ch] max-w-full">
                Each shipment includes Material Safety Data Sheets (SDS), Certificates of Origin, Bills of Lading, and pre-shipment quality reports for customs clearance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Three-Card "How We Work" Section */}
      <section className="py-11 lg:py-16 bg-paper border-b border-rule">
        <Container>
          <div className="flex flex-col gap-10 w-full min-w-0 max-w-full">
            <div className="flex flex-col gap-2 max-w-[65ch] max-w-full">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
                How an order moves
              </h2>
              <p className="font-body text-slate text-base font-light leading-relaxed">
                A clear execution protocol for bulk oil supply and port clearance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch w-full min-w-0 max-w-full">
              {howWeWorkSteps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="bg-card border border-rule p-[28px] flex flex-col justify-between h-full hover:border-amber transition-colors w-full min-w-0 max-w-full"
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

                    <p className="font-body text-slate text-sm sm:text-base font-light leading-[1.6] max-w-[65ch] max-w-full">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Group Section: Part of the United Oil group */}
      <section id="group" className="py-11 lg:py-16 bg-linen border-b border-rule">
        <Container>
          <div className="flex flex-col gap-8 lg:gap-10 w-full min-w-0 max-w-full">
            <div className="flex flex-col gap-4 max-w-[65ch] max-w-full">
              <Eyebrow className="text-slate">PARENT COMPANY</Eyebrow>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-ink tracking-tight">
                Part of the United Oil group
              </h2>
              <div className="flex flex-col gap-4 font-body text-slate text-base sm:text-[17px] leading-relaxed font-light">
                <p>
                  Hamburg for Refined Oil Products Trading LLC is the Dubai trading arm of the United Oil group. The group was established in 2018 and operates on three functions: sourcing, refining and trading petroleum and petrochemical products.
                </p>
                <p>
                  Refining and production are carried out at the group&apos;s facilities in Basra, Iraq, which include a hybrid petrochemical complex, a laboratory, and an R&amp;D division. The group operates warehousing at Safwan and a fleet of tankers, road tankers and ISO tanks for product movement across the UAE, Iraq, Saudi Arabia, Kuwait and India.
                </p>
                <p>
                  Trading from Dubai gives buyers a Gulf contracting point, with product coming from the group&apos;s own refining operations rather than the open market.
                </p>
              </div>
            </div>

            {/* Three-item model: Source, Refine, Trade */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch w-full min-w-0 max-w-full pt-2">
              <div className="bg-card border border-rule p-6 sm:p-7 flex flex-col gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-eyebrow text-amber">
                  FUNCTION 01
                </span>
                <h3 className="font-display font-bold text-xl text-ink">
                  Source
                </h3>
                <p className="font-body text-slate text-base font-light leading-relaxed">
                  Direct crude and feedstock sourcing from regional production to feed group refining infrastructure.
                </p>
              </div>

              <div className="bg-card border border-rule p-6 sm:p-7 flex flex-col gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-eyebrow text-amber">
                  FUNCTION 02
                </span>
                <h3 className="font-display font-bold text-xl text-ink">
                  Refine
                </h3>
                <p className="font-body text-slate text-base font-light leading-relaxed">
                  Processing and quality blending at the group&apos;s Basra complex with dedicated laboratory testing and R&amp;D.
                </p>
              </div>

              <div className="bg-card border border-rule p-6 sm:p-7 flex flex-col gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-eyebrow text-amber">
                  FUNCTION 03
                </span>
                <h3 className="font-display font-bold text-xl text-ink">
                  Trade
                </h3>
                <p className="font-body text-slate text-base font-light leading-relaxed">
                  Commercial contracting and international distribution managed through the Dubai trading desk.
                </p>
              </div>
            </div>

            {/* TODO: Add ISO certification content here once client confirms publication approval */}
          </div>
        </Container>
      </section>
    </>
  );
}
