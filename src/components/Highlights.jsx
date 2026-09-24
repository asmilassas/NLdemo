import React from "react";
import { TRUST_POINTS } from "../data.js";

export default function Highlights() {
  return (
    <section className="section-spacing bg-white" style={{ paddingTop: 72, paddingBottom: 72 }}>
      <div className="container cards4">
        {TRUST_POINTS.map((t) => (
          <div className="card" key={t.label}>
            <div className="num">{t.num}</div>
            <h4>{t.label}</h4>
            <p>{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
