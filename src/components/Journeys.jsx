import React, { useState } from "react";
import { Clock, Users, ArrowRight } from "lucide-react";
import { JOURNEYS } from "../data.js";

const CATS = ["All", ...Array.from(new Set(JOURNEYS.map((j) => j.cat)))];

export default function Journeys() {
  const [cat, setCat] = useState("All");
  const list = JOURNEYS.filter((j) => cat === "All" || j.cat === cat);
  return (
    <section id="journeys" className="section-spacing bg-white">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow"><span>Journeys</span></div>
          <h2 className="section-title">Pick your journey</h2>
          <p className="section-desc">Popular routes our guests love. Every one can be changed to suit your dates and interests.</p>
        </div>
        <div className="chips">
          {CATS.map((c) => <button key={c} className={"chip" + (c === cat ? " on" : "")} onClick={() => setCat(c)}>{c}</button>)}
        </div>
        <div className="tgrid">
          {list.map((j) => (
            <article className="tk" key={j.id}>
              <div className="tk-img">
                <img className="img-cover" src={j.image} alt={j.title} loading="lazy" />
                <span className="tag">{j.cat}</span>
              </div>
              <div className="tk-b">
                <h3>{j.title}</h3>
                <div className="rt"><span>COLOMBO</span><i /><span>{j.code}</span></div>
                <p>{j.desc}</p>
                <div className="meta">
                  <span><Clock size={14} /> {j.days} days</span>
                  <span><Users size={14} /> Private guide</span>
                </div>
              </div>
              <div className="tk-f">
                <div className="pr"><small>from </small>${j.fromPrice}</div>
                <a href="#plan" className="btn btn-outline btn-sm">Plan this <ArrowRight size={15} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
