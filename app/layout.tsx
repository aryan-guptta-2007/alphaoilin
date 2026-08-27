import type { Metadata } from "next";
import { Archivo, Newsreader, IBM_Plex_Mono } from "next/font/google";
import { TopStrip, Header, CtaBand, Footer } from "@/app/components";
import { FloatingWhatsapp } from "@/app/components/FloatingWhatsapp";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "800"],
  variable: "--font-display",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal"],
  adjustFontFallback: false,
  variable: "--font-body",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hamburg-int.com"),
  title: {
    default: "Hamburg for Refined Oil Products Trading LLC",
    template: "%s | Hamburg for Refined Oil Products Trading LLC",
  },
  description:
    "Premium refined oil products, virgin base oils (SN 150, SN 500, BS 150), industrial lubricants, and distillate fuels trading in Dubai, UAE.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hamburg-int.com",
    siteName: "Hamburg for Refined Oil Products Trading LLC",
    title: "Hamburg for Refined Oil Products Trading LLC",
    description:
      "Premium refined oil products, virgin base oils, industrial lubricants, and distillate fuels trading in Dubai, UAE.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${newsreader.variable} ${ibmPlexMono.variable}`}
    >
      <body className="antialiased bg-paper text-ink flex flex-col min-h-screen font-body">
        <TopStrip />
        <Header />
        <main className="flex-1">{children}</main>
        <CtaBand />
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
