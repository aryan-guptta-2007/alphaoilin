import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-paper border-t border-rule/30 pt-12 md:pt-16">
      <Container className="pb-[80px]">
        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">
          {/* Column 1: Company + Address + Phone + Email */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-ink border border-amber/40 flex items-center justify-center p-1">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-amber"
                >
                  <path
                    d="M16 2L4 9V23L16 30L28 23V9L16 2Z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  />
                  <path d="M16 8L22 12V20L16 24L10 20V12L16 8Z" fill="#D9531E" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-[.24em] text-paper uppercase">
                  {siteConfig.name}
                </span>
                <span className="font-display text-[10px] text-mist uppercase tracking-wider font-semibold">
                  {siteConfig.legalName}
                </span>
              </div>
            </div>

            <p className="font-body text-mist text-sm font-light leading-relaxed max-w-md">
              {siteConfig.tagline}
            </p>

            <div className="font-display text-xs text-mist uppercase tracking-wider flex flex-col gap-2.5 pt-2 font-medium">
              <div className="flex items-start gap-2">
                <span className="text-mist/90 font-bold shrink-0">ADDR:</span>
                <span className="text-mist normal-case font-body">{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-mist/90 font-bold shrink-0">TEL:</span>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="hover:text-amber transition-colors font-mono"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-mist/90 font-bold shrink-0">EMAIL:</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-amber transition-colors lowercase font-mono"
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

          {/* Column 2: Product Links */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-display text-xs uppercase tracking-wider text-paper font-bold border-b border-steel/60 pb-1.5">
              REFINED OIL PRODUCTS
            </h4>
            <ul className="flex flex-col gap-2.5 font-display text-sm font-medium">
              {siteConfig.productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-mist hover:text-amber hover:translate-x-1 inline-block transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-display text-xs uppercase tracking-wider text-paper font-bold border-b border-steel/60 pb-1.5">
              COMPANY NAVIGATION
            </h4>
            <ul className="flex flex-col gap-2.5 font-display text-sm font-medium">
              {siteConfig.companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-mist hover:text-amber hover:translate-x-1 inline-block transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mono Copyright Bar */}
        <div className="border-t border-slate/30 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-display text-[11px] uppercase tracking-wider text-mist font-medium">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <span>DUBAI, UNITED ARAB EMIRATES</span>
            <span>SHARP CORNERS IDENTITY</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
