import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f1513",
          color: "#e6ede8",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#f2b134",
            }}
          />
          <div style={{ fontSize: 26, color: "#94a59b" }}>{site.name}</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            fontWeight: 600,
            lineHeight: 1.04,
            letterSpacing: "-0.035em",
          }}
        >
          <div>Desenho a interface</div>
          <div>e respondo por ela</div>
          <div>em produção.</div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#94a59b" }}>
          {`${site.role}. 12 anos, São Paulo.`}
        </div>
      </div>
    ),
    size,
  );
}
