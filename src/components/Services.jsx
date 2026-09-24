import React from "react";
import { Check } from "lucide-react";
import { SERVICES } from "../data.js";

export default function Services() {
  return (
    <section id="services" className="section-spacing bg-white">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow"><span>Services</span></div>
          <h2 className="section-title">Everything for the journey</h2>
          <p className="section-desc">From the moment you land to your last sunset, one team looks after every detail.</p>
        </div>
        <div style={{ borderTop: "1px solid var(--border-light)" }}>
          {SERVICES.map((s) => (
            <div className="svc-row" key={s.num}>
              <div className="n">{s.num}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>{s.features.map((f) => <li key={f}><Check size={15} /> {f}</li>)}</ul>
              </div>
              <div className="svc-img"><img className="img-cover" src={s.image} alt={s.title} loading="lazy" /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}