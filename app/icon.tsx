import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 6C24 6 38 20 38 28C38 35.7 31.7 42 24 42C16.3 42 10 35.7 10 28C10 20 24 6 24 6Z" fill="#D9531E"/>
          <path d="M24 16C24 16 31 24 31 29C31 32.9 27.9 36 24 36C20.1 36 17 32.9 17 29C17 24 24 16 24 16Z" fill="#E5901C"/>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
