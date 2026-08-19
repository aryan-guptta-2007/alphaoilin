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
          backgroundColor: "#07171E",
          backgroundImage: "linear-gradient(168deg, #07171E 0%, #0F2C39 100%)",
          padding: "70px",
          color: "#F6F8F5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              backgroundColor: "#0F2C39",
              border: "2px solid #E5901C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2L4 9V23L16 30L28 23V9L16 2Z"
                stroke="#E5901C"
                strokeWidth="2.5"
              />
              <path d="M16 8L22 12V20L16 24L10 20V12L16 8Z" fill="#D9531E" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "36px",
                fontWeight: "800",
                letterSpacing: "0.2em",
                color: "#F6F8F5",
              }}
            >
              HAMBURG
            </span>
            <span
              style={{
                fontSize: "14px",
                fontFamily: "monospace",
                color: "#3D5B66",
                letterSpacing: "0.15em",
              }}
            >
              REFINED OIL PRODUCTS TRADING LLC
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <span
            style={{
              fontSize: "16px",
              fontFamily: "monospace",
              color: "#E5901C",
              letterSpacing: "0.18em",
            }}
          >
            DUBAI TRADING DESK & REFINED PRODUCTS
          </span>
          <span
            style={{
              fontSize: "46px",
              fontWeight: "800",
              color: "#F6F8F5",
              maxWidth: "960px",
              lineHeight: 1.15,
            }}
          >
            High-Grade Base Oils, Industrial Lubricants & Fuel Trading
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #3D5B66",
            paddingTop: "20px",
            fontSize: "14px",
            fontFamily: "monospace",
            color: "#E9EDEA",
          }}
        >
          <span>DUBAI, UNITED ARAB EMIRATES</span>
          <span>REFINED OIL PRODUCTS & FUEL TRADING</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
