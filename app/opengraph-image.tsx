import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Hamburg for Refined Oil Products Trading LLC";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#FFFFFF",
          padding: "70px",
          color: "#0F1E26",
          border: "16px solid #F5F6F7",
        }}
      >
        {/* Header Lockup: Hamburg Droplet Mark + Company Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {/* hamburg-mark.svg Full Color Droplet Mark */}
          <svg
            width="72"
            height="72"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 6C24 6 38 20 38 28C38 35.7 31.7 42 24 42C16.3 42 10 35.7 10 28C10 20 24 6 24 6Z" fill="#D9531E"/>
            <path d="M24 6C24 6 38 20 38 28C38 31.2 36.9 34.1 35.1 36.4C32.4 31.5 27.2 28 21.2 28C18.2 28 15.4 28.9 13.1 30.4C11.1 27 10 22.8 10 28C10 20 24 6 24 6Z" fill="#5E8C2A" opacity="0.85"/>
            <path d="M24 6C24 6 30 14 30 19C30 20.3 29.5 21.5 28.7 22.5C26.5 19.5 22.8 17.5 18.5 17.5C17.6 17.5 16.7 17.6 15.9 17.8C18.2 13.8 24 6 24 6Z" fill="#14618E"/>
            <path d="M24 16C24 16 31 24 31 29C31 32.9 27.9 36 24 36C20.1 36 17 32.9 17 29C17 24 24 16 24 16Z" fill="#E5901C"/>
          </svg>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "42px",
                fontWeight: "800",
                letterSpacing: "0.22em",
                color: "#0F1E26",
                lineHeight: 1,
              }}
            >
              HAMBURG
            </span>
            <span
              style={{
                fontSize: "14px",
                fontFamily: "monospace",
                color: "#56676F",
                letterSpacing: "0.15em",
                marginTop: "6px",
              }}
            >
              REFINED OIL PRODUCTS TRADING LLC
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <span
            style={{
              fontSize: "16px",
              fontFamily: "monospace",
              color: "#56676F",
              letterSpacing: "0.18em",
              fontWeight: "600",
            }}
          >
            DUBAI TRADING DESK & BULK FUEL LOGISTICS
          </span>
          <span
            style={{
              fontSize: "44px",
              fontWeight: "800",
              color: "#0F1E26",
              maxWidth: "980px",
              lineHeight: 1.15,
            }}
          >
            Solvent Neutral Base Oils, Heavy Fuel Oil, Gasoil & Petrochemical Fractions
          </span>
        </div>

        {/* Footer Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "2px solid #E3E6E8",
            paddingTop: "20px",
            fontSize: "14px",
            fontFamily: "monospace",
            color: "#56676F",
          }}
        >
          <span>DUBAI, UNITED ARAB EMIRATES</span>
          <span>REFINED OIL PRODUCTS TRADING DESK</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
