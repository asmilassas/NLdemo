import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { MAP_DESTINATIONS } from "../data.js";

const ISLE = "M140 12C160 8 175 22 172 40C180 60 200 75 205 100C215 130 222 160 228 190C240 230 250 260 240 300C232 340 215 370 190 395C175 410 155 405 140 390C115 372 100 340 95 310C88 270 92 230 100 200C105 170 95 140 105 110C112 85 118 60 128 40C130 28 134 18 140 12Z";
const AIRPORT = { x: 98, y: 210 };
const STATS = [["12+", "Years experience"], ["3,500+", "Happy guests"], ["4.9★", "Average rating"]];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const p = MAP_DESTINATIONS[idx];
  const path = `M${AIRPORT.x} ${AIRPORT.y}Q${(AIRPORT.x + p.x) / 2 - 30} ${(AIRPORT.y + p.y) / 2 - 30} ${p.x} ${p.y}`;
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow"><span>NL Lanka Travel &amp; Tours · Negombo</span></div>
          <h1>Sri Lanka, <em>routed</em><br />your way.</h1>
          <p className="lead">Private journeys with local chauffeur-guides. Pick a stop on the map and see where your trip could begin.</p>
          <div className="row">
            <a href="#plan" className="btn btn-primary btn-lg">Build my trip <ArrowRight size={18} /></a>
            <a href="#journeys" className="btn btn-outline btn-lg">See journeys</a>
          </div>
          <div className="stats">
            {STATS.map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}
          </div>
        </div>
        <div className="mapc">
          <svg viewBox="0 0 300 420" className="map" role="img" aria-label="Map of Sri Lanka with tour stops">
            <defs>
              <linearGradient id="isle" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#1556C8" /><stop offset="1" stopColor="#0D3E8C" />
              </linearGradient>
            </defs>
            {[1, 2, 3].map((k) => <ellipse key={k} cx="150" cy="210" rx={60 + k * 50} ry={90 + k * 55} fill="none" stroke="rgba(255,255,255,.08)" />)}
            <path d={ISLE} fill="url(#isle)" stroke="#E5A932" strokeWidth="2.5" strokeLinejoin="round" />
            <path key={"r" + idx} d={path} className="fl" fill="none" />
            <text x={AIRPORT.x - 6} y={AIRPORT.y + 4} fontSize="12" fill="#E5A932" textAnchor="end">✈ CMB</text>
            {MAP_DESTINATIONS.map((d, k) => (
              <g key={d.n} className={"pin" + (k === idx ? " on" : "")} onClick={() => setIdx(k)}>
                <circle cx={d.x} cy={d.y} r="14" fill="transparent" />
                {k === idx && <circle className="ring" cx={d.x} cy={d.y} r="5" />}
                <circle className="d" cx={d.x} cy={d.y} r={k === idx ? 6 : 4} />
                <text x={d.x + 11} y={d.y + 4}>{d.n}</text>
              </g>
            ))}
          </svg>
          <div className="pass">
            <img src={p.image} alt={p.n} />
            <div style={{ flex: 1 }}>
              <span className="mono">CMB → {p.c}</span>
              <h3>{p.n}</h3>
              <p>{p.t}</p>
              <span className="mono" style={{ color: "var(--gold-text)" }}>Best {p.b} · {p.d} days · from ${p.p}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
