import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { REVIEWS } from "../data.js";

export default function Reviews() {
  const [i, setI] = useState(0);
  const r = REVIEWS[i];
  const go = (n) => setI((i + n + REVIEWS.length) % REVIEWS.length);
  return (
    <section id="reviews" className="section-spacing bg-white">
      <div className="container rv">
        <div className="eyebrow"><span>Guest reviews</span></div>
        <div><Quote size={40} color="#0D3E8C" /></div>
        <blockquote key={i} className="animate-fade-in">{r.quote}</blockquote>
        <div className="stars">{Array.from({ length: r.stars }).map((_, k) => <Star key={k} size={18} fill="#E5A932" strokeWidth={0} />)}</div>
        <p style={{ marginTop: 10 }}><b style={{ color: "var(--navy)" }}>{r.author}</b> · <span style={{ color: "var(--text-muted)" }}>{r.country} · {r.trip}</span></p>
        <div className="rv-nav">
          <button onClick={() => go(-1)} aria-label="Previous review"><ChevronLeft size={20} /></button>
          <button onClick={() => go(1)} aria-label="Next review"><ChevronRight size={20} /></button>
        </div>
      </div>
    </section>
  );
}
