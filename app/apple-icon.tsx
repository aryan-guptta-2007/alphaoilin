import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#07171E",
          padding: "20px",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 2L4 9V23L16 30L28 23V9L16 2Z"
            stroke="#0F2C39"
            strokeWidth="2.5"
          />
          <path d="M16 8L22 12V20L16 24L10 20V12L16 8Z" fill="#D9531E" />
          <path d="M16 12L19 14V18L16 20L13 18V14L16 12Z" fill="#E5901C" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
