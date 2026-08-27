import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-paper border-t border-rule/30 pt-12 md:pt-16">
      <Container className="pb-[96px]">
        {/* Single column on mobile, 32px gap between groups (gap-8), 3-column grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pb-12 md:pb-16">
          {/* Group 1: Address & Contact Block */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/hamburg-logo-96.png"
                alt="Hamburg"
                width="96"
                height="107"
                className="h-[36px] w-auto shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-[.24em] text-paper uppercase">
                  {siteConfig.name}
                </span>
                <span className="font-display text-[10px] text-mist uppercase tracking-wider font-semibold">
                  {siteConfig.legalName}
                </span>
              </div>
            </div>

            <p className="font-body text-mist text-base font-light leading-relaxed max-w-md">
              {siteConfig.tagline}
            </p>

            <div className="font-display text-xs text-mist uppercase tracking-wider flex flex-col gap-3 pt-2 font-medium">
              <div className="flex items-start gap-2">
                <span className="text-mist/90 font-bold shrink-0">ADDR:</span>
                <span className="text-mist normal-case font-body text-base">{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-mist/90 font-bold shrink-0">TEL:</span>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="hover:text-amber transition-colors font-mono min-h-[44px] inline-flex items-center"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-mist/90 font-bold shrink-0">EMAIL:</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-amber transition-colors lowercase font-mono min-h-[44px] inline-flex items-center"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-mist/90 font-bold shrink-0">HOURS:</span>
                <span className="text-mist">{siteConfig.hours}</span>
              </div>
            </div>
          </div>

          {/* Group 2: Refined Oil Products Links */}
          <div className="md:col-span-4 flex flex-col gap-4 pt-4 md:pt-0">
            <h4 className="font-display text-xs uppercase tracking-wider text-paper font-bold border-b border-steel/60 pb-2">
              REFINED OIL PRODUCTS
            </h4>
            <ul className="flex flex-col gap-3 font-display text-sm font-medium">
              {siteConfig.productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-mist hover:text-amber hover:translate-x-1 inline-flex items-center min-h-[44px] transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 3: Company Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-4 pt-4 md:pt-0">
            <h4 className="font-display text-xs uppercase tracking-wider text-paper font-bold border-b border-steel/60 pb-2">
              COMPANY NAVIGATION
            </h4>
            <ul className="flex flex-col gap-3 font-display text-sm font-medium">
              {siteConfig.companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-mist hover:text-amber hover:translate-x-1 inline-flex items-center min-h-[44px] transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mono Copyright Bar with 96px bottom padding clearance */}
        <div className="border-t border-slate/30 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-display text-[11px] uppercase tracking-wider text-mist font-medium">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>DUBAI, UNITED ARAB EMIRATES</span>
            <span>SHARP CORNERS IDENTITY</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
