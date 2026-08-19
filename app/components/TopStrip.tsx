import React from "react";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export const TopStrip: React.FC = () => {
  return (
    <div className="bg-ink text-mist border-b border-steel/40 text-[11.5px] font-mono uppercase tracking-eyebrow py-2 hidden md:block">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-2 truncate pr-4">
          <span className="w-1.5 h-1.5 bg-amber inline-block shrink-0" />
          <span className="truncate">{siteConfig.address}</span>
        </div>
        <div className="flex items-center gap-6 shrink-0">
          <span>HOURS: {siteConfig.hours}</span>
          <span className="text-steel">|</span>
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
            className="hover:text-amber transition-colors"
          >
            TEL: {siteConfig.phone}
          </a>
        </div>
      </Container>
    </div>
  );
};

export default TopStrip;
