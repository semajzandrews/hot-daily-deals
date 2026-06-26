import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 64, height: 64 };
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
          background: "#2C8C7D",
          color: "#F4F0E7",
          fontSize: 38,
          fontWeight: 700,
          fontFamily: "Georgia, serif",
          borderRadius: 14,
        }}
      >
        $
      </div>
    ),
    { ...size }
  );
}
