import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  badge?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  breadcrumbs,
  badge,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="relative bg-dark-gradient border-b border-steel min-h-[180px] lg:min-h-[240px] flex items-center py-6 lg:py-8 overflow-hidden">
      {/* Background Image inside PageHero at low opacity (18%) with ink multiply overlay */}
      {imageSrc && (
        <div className="absolute inset-0 z-0 overflow-hidden bg-ink pointer-events-none">
          <Image
            src={imageSrc}
            alt={imageAlt || "Refined oil products analysis"}
            fill
            sizes="100vw"
            priority
            className="object-cover grayscale filter contrast-125 opacity-[0.18] mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-ink/80 mix-blend-multiply" />
        </div>
      )}

      <Container className="relative z-10 w-full">
        <div className="flex flex-col gap-2.5 max-w-[60ch]">
          {/* Breadcrumb (Small, Muted) */}
          <nav
            aria-label="Breadcrumb"
            className="font-mono text-xs uppercase tracking-wider text-mist/70 flex items-center gap-2 flex-wrap"
          >
            {breadcrumbs.map((item, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <React.Fragment key={idx}>
                  {idx > 0 && <span className="text-mist/40">/</span>}
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="hover:text-amber transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-amber"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className={isLast ? "text-amber font-semibold" : ""}>
                      {item.label}
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          {/* Badge (Optional) */}
          {badge && (
            <div>
              <span className="font-mono text-xs text-amber bg-amber/10 px-2.5 py-0.5 border border-amber/30 uppercase">
                {badge}
              </span>
            </div>
          )}

          {/* H1 Sitting at 40px desktop / 30px mobile */}
          <h1 className="font-display font-extrabold text-[30px] lg:text-[40px] tracking-tight lg:tracking-[-0.025em] text-paper leading-tight">
            {title}
          </h1>

          {/* Description line at max 60 characters */}
          {description && (
            <p className="font-body text-mist text-base sm:text-lg font-light leading-relaxed max-w-[60ch]">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default PageHero;
