import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Hot Daily Deals — the bin store where the price drops every day, Orange NJ";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#F4F0E7",
          color: "#1C1F1D",
          fontFamily: "Georgia, serif",
          padding: 80,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 8, color: "#6B716B", marginBottom: 28, fontFamily: "sans-serif" }}>
          MAIN STREET · ORANGE, NJ
        </div>
        <div style={{ fontSize: 92, lineHeight: 1, fontWeight: 600 }}>The price drops</div>
        <div style={{ fontSize: 92, lineHeight: 1.1, fontStyle: "italic", color: "#2C8C7D" }}>
          every single day.
        </div>
        <div style={{ fontSize: 30, color: "#3A413D", marginTop: 36, fontFamily: "sans-serif" }}>
          Hot Daily Deals · a bin store
        </div>
      </div>
    ),
    { ...size }
  );
}
