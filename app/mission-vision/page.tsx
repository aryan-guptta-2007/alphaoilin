import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission, Vision & Principles — HAMBURG",
  description:
    "Explore the concrete mission, vision, and three oil-trading operating principles guiding Hamburg Refined Oil Products Trading LLC.",
};

export default function MissionVisionPage() {
  return (
    <>
      <PageHero
        title="Mission and operating principles"
        description="Commitments governing our Dubai trading desk, product quality testing, and vessel deliveries."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Mission & Vision" },
        ]}
      />

      {/* Mission & Vision Section */}
      <section className="py-11 lg:py-16 bg-paper border-b border-rule">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-linen border border-rule p-[28px] flex flex-col gap-4 border-t-4 border-t-flame">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-ink tracking-tight">
                Batch-verified oil supply
              </h2>
              <p className="font-body text-slate text-base leading-relaxed font-light max-w-[65ch]">
                To supply virgin base oils, industrial lubricants, and refined fuels from regional Gulf refineries to international buyers. We deliver binding laboratory testing and clear commercial terms on every parcel.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-linen border border-rule p-[28px] flex flex-col gap-4 border-t-4 border-t-amber">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-ink tracking-tight">
                Reliable Dubai energy trading
              </h2>
              <p className="font-body text-slate text-base leading-relaxed font-light max-w-[65ch]">
                To build a dependable Dubai energy trading desk. Buyers and vessel operators know us for technical compliance, spot execution, and complete QA paperwork.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Three Operating Principles */}
      <section className="py-11 lg:py-16 bg-linen border-b border-rule">
        <Container>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2 max-w-[65ch]">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
                Commercial principles
              </h2>
              <p className="font-body text-slate text-base font-light leading-relaxed">
                Operating rules that govern every refinery purchase order, COA inspection, and vessel charter.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Principle 01 */}
              <div className="bg-card border border-rule p-[28px] flex flex-col gap-3 relative">
                <span className="font-mono text-xs font-bold text-flame uppercase tracking-eyebrow">
                  PRINCIPLE 01
                </span>
                <h3 className="font-display font-bold text-lg text-ink">
                  Binding COA on every parcel
                </h3>
                <p className="font-body text-slate text-sm leading-relaxed font-light max-w-[65ch]">
                  Published typical values never substitute for batch testing. Every physical shipment is tested by independent labs before tank loading, with a binding COA issued for your parcel.
                </p>
              </div>

              {/* Principle 02 */}
              <div className="bg-card border border-rule p-[28px] flex flex-col gap-3 relative">
                <span className="font-mono text-xs font-bold text-amber uppercase tracking-eyebrow">
                  PRINCIPLE 02
                </span>
                <h3 className="font-display font-bold text-lg text-ink">
                  Direct refinery sourcing
                </h3>
                <p className="font-body text-slate text-sm leading-relaxed font-light max-w-[65ch]">
                  We work without broker chains. All physical oil products come directly from Gulf refineries, ensuring clear cut points and origin paperwork.
                </p>
              </div>

              {/* Principle 03 */}
              <div className="bg-card border border-rule p-[28px] flex flex-col gap-3 relative">
                <span className="font-mono text-xs font-bold text-moss uppercase tracking-eyebrow">
                  PRINCIPLE 03
                </span>
                <h3 className="font-display font-bold text-lg text-ink">
                  Marine fuel and environmental standards
                </h3>
                <p className="font-body text-slate text-sm leading-relaxed font-light max-w-[65ch]">
                  We follow marine fuel sulfur limits (IMO 2020 0.5% max and 10PPM ULSD), double-wall flexitank specs, and ISO tank procedures for safe handling.
                </p>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <Button variant="amber" href="/contact">
                Speak With Our Trading Desk
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
