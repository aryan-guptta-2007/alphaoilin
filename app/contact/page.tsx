import React from "react";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "./ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Commercial Desk",
  description:
    "Contact Hamburg Refined Oil Products Trading LLC in Dubai, UAE. Submit commercial spot parcel quotes and COA inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact our trading desk"
        description="Speak directly with our Dubai energy trading desk for spot parcel availability, viscosity specs, and port logistics."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      {/* Contact Main Grid Section */}
      <section className="py-8 sm:py-11 lg:py-16 bg-paper">
        <Container>
          {/* Office Details Block sits above the form on mobile (grid-cols-1) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start w-full min-w-0 max-w-full">
            {/* Office Details Block (First on mobile) */}
            <div className="lg:col-span-5 flex flex-col gap-6 w-full min-w-0 max-w-full">
              <div className="bg-linen border border-rule p-5 sm:p-6 flex flex-col gap-5 w-full min-w-0 max-w-full">
                <h2 className="font-display font-bold text-xl sm:text-2xl text-ink tracking-tight">
                  Office and contact details
                </h2>

                <div className="font-mono text-xs text-slate uppercase space-y-4 pt-2">
                  <div className="flex flex-col gap-1 border-b border-rule pb-3">
                    <span className="text-amber font-bold">PHYSICAL ADDRESS:</span>
                    <span className="text-ink normal-case font-body text-base">
                      {siteConfig.address}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 border-b border-rule pb-3">
                    <span className="text-amber font-bold">TELEPHONE:</span>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                      className="text-ink text-base font-semibold hover:text-amber transition-colors min-h-[44px] inline-flex items-center"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>

                  <div className="flex flex-col gap-1 border-b border-rule pb-3">
                    <span className="text-amber font-bold">COMMERCIAL EMAIL:</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-ink text-base font-semibold hover:text-amber transition-colors lowercase min-h-[44px] inline-flex items-center"
                    >
                      {siteConfig.email}
                    </a>
                  </div>

                  <div className="flex flex-col gap-1 border-b border-rule pb-3">
                    <span className="text-amber font-bold">WHATSAPP DIRECT DESK:</span>
                    <a
                      href={siteConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-moss text-base font-semibold hover:underline min-h-[44px] inline-flex items-center"
                    >
                      Instant WhatsApp Chat →
                    </a>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-amber font-bold">TRADING DESK HOURS:</span>
                    <span className="text-ink text-base font-medium">
                      {siteConfig.hours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Callout Box */}
              <div className="bg-linen text-ink p-5 sm:p-[28px] border border-rule flex flex-col gap-4 w-full min-w-0 max-w-full">
                <Eyebrow className="text-slate">SPOT PARCEL DISPATCH</Eyebrow>
                <h3 className="font-display font-bold text-xl text-ink">
                  Spot order inquiries
                </h3>
                <p className="font-body text-base text-slate leading-relaxed font-light">
                  For urgent vessel laycan confirmations or spot flexitank orders, contact our desk via WhatsApp for real-time response.
                </p>
                <div className="pt-2 w-full">
                  <Button
                    variant="amber"
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[48px] inline-flex items-center justify-center text-center"
                  >
                    Open WhatsApp Chat
                  </Button>
                </div>
              </div>
            </div>

            {/* Interactive Quote Request Form (Second on mobile) */}
            <div className="lg:col-span-7 w-full min-w-0 max-w-full">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
