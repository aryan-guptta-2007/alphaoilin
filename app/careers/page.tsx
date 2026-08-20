import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { openRoles } from "@/lib/careers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Hamburg Refined Oil Products Trading LLC in Dubai. Explore current openings on our oil trading desk and logistics operations.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Open positions"
        description="Join our Dubai physical oil trading, quality inspection, and maritime logistics teams."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers" },
        ]}
      />

      {/* Careers Content & Roles List */}
      <section className="py-11 lg:py-16 bg-paper">
        <Container>
          <div className="flex flex-col gap-10">
            {/* Short Intro */}
            <div className="max-w-[65ch] flex flex-col gap-3 font-body text-slate text-base sm:text-lg leading-relaxed font-light">
              <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-[28px] text-ink tracking-tight">
                Oil trading operations in Dubai
              </h2>
              <p className="max-w-[65ch]">
                Hamburg Refined Oil Products Trading LLC hires for technical and trading roles. We operate a commercial desk in Garhoud Deira, Dubai. Our team handles refinery contracts, lab reports, and vessel chartering.
              </p>
            </div>

            {/* Open Roles List */}
            <div className="flex flex-col gap-8 pt-4 border-t border-rule">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-extrabold text-2xl text-ink tracking-tight">
                  Current Open Positions ({openRoles.length})
                </h3>
                <span className="font-mono text-xs text-slate uppercase">
                  DUBAI DESK ON-SITE
                </span>
              </div>

              <div className="flex flex-col gap-6">
                {openRoles.map((role) => {
                  const contactUrl = `/contact?role=${encodeURIComponent(role.title)}`;
                  return (
                    <div
                      key={role.id}
                      className="bg-linen border border-rule p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-amber transition-colors"
                    >
                      <div className="flex flex-col gap-3 max-w-3xl">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="font-mono text-xs font-bold text-amber uppercase bg-amber/10 px-2.5 py-0.5 border border-amber/20">
                            {role.department}
                          </span>
                          <span className="font-mono text-xs text-slate uppercase">
                            📍 {role.location}
                          </span>
                          <span className="font-mono text-xs text-slate uppercase">
                            • {role.experience}
                          </span>
                        </div>

                        <h4 className="font-display font-bold text-2xl text-ink">
                          {role.title}
                        </h4>

                        <p className="font-body text-slate text-base leading-relaxed font-light">
                          {role.summary}
                        </p>

                        <div className="pt-2">
                          <span className="font-mono text-xs font-semibold text-steel uppercase block mb-1">
                            Key Responsibilities:
                          </span>
                          <ul className="list-disc list-inside font-body text-sm text-slate space-y-1">
                            {role.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-steel/15 flex flex-col gap-2">
                        <Button
                          variant="amber"
                          href={contactUrl}
                          className="w-full text-center"
                        >
                          Apply for Position →
                        </Button>
                        <span className="font-mono text-[11px] text-slate text-center uppercase">
                          PRE-FILLED INQUIRY
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
