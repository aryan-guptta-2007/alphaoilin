import { ImageResponse } from "next/og";
import { logo512Base64 } from "./logo512b64";

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
        {/* Header Lockup: Hamburg Logo + Company Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo512Base64}
            alt="Hamburg"
            width="100"
            height="112"
            style={{ width: "100px", height: "112px" }}
          />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "44px",
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
                marginTop: "8px",
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
