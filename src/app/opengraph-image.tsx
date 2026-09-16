import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.roleLine}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#0B0F14",
          color: "#E8EAED",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#2DD4BF",
          }}
        >
          Computer Science · FUTA
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#9AA3AD",
            }}
          >
            {site.roleLine}
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 900,
              fontSize: 28,
              lineHeight: 1.4,
              color: "#9AA3AD",
            }}
          >
            Building data-driven solutions through analytics, machine learning,
            and financial modelling.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#2DD4BF",
            fontSize: 24,
          }}
        >
          <div
            style={{
              width: 48,
              height: 4,
              background: "#2DD4BF",
              borderRadius: 2,
            }}
          />
          Portfolio
        </div>
      </div>
    ),
    { ...size },
  );
}
