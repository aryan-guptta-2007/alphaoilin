import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
};

export default function NotFound() {
  return (
    <div className="py-20 lg:py-32 bg-paper text-ink flex-1 flex items-center">
      <Container className="w-full">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6 bg-mist/40 border border-steel/20 p-8 sm:p-12">
          <span className="font-mono text-4xl sm:text-6xl font-extrabold text-flame tracking-widest">
            404
          </span>

          <SectionHead
            align="center"
            eyebrow="DESTINATION UNRESOLVED"
            title="Page Not Found"
            description="The requested URL or technical specification resource does not exist on our trading desk server or has been relocated."
          />

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button variant="amber" href="/">
              Return to Homepage
            </Button>
            <Button variant="ink" href="/products">
              View Products Catalog
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
