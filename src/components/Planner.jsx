import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { MAP_DESTINATIONS, COMPANY_INFO } from "../data.js";

/* Change this one colour to make the Plan section lighter or darker grey */
const BG = "#A9B1BD";

const LEVELS = [["Comfort", 70], ["Premium", 110], ["Luxury", 180]];

export default function Planner() {
  const [days, setDays] = useState(7);
  const [trav, setTrav] = useState(2);
  const [lvl, setLvl] = useState(1);
  const [picks, setPicks] = useState([0, 1, 2]);

  const perPerson = Math.round(days * (LEVELS[lvl][1] + 90 / trav));
  const total = perPerson * trav;
  const stops = MAP_DESTINATIONS.filter((_, k) => picks.includes(k)).map((d) => d.n);
  const toggle = (k) => setPicks(picks.includes(k) ? picks.filter((v) => v !== k) : [...picks, k]);
  const msg = `Hello NL Lanka, I would like a quote: ${days} days, ${trav} traveller(s), ${LEVELS[lvl][0]} level, route CMB${stops.map((s) => " > " + s).join("")}. Estimate shown: $${total}.`;
  const wa = "https://wa.me/" + COMPANY_INFO.whatsappRaw + "?text=" + encodeURIComponent(msg);

  return (
    <section id="plan" className="section-spacing" style={{ background: BG }}>
      <div className="container">
        <div className="section-header">
          <div className="eyebrow"><span>Trip planner</span></div>
          <h2 className="section-title">Build your trip in seconds</h2>
          <p className="section-desc">Move the sliders and watch your estimate update, then send the plan straight to us on WhatsApp.</p>
        </div>
        <div className="plan">
          <div className="ctl">
            <div><label>Days <span>{days}</span></label>
              <input type="range" min="3" max="14" value={days} onChange={(e) => setDays(+e.target.value)} /></div>
            <div><label>Travellers</label>
              <div className="stp">
                <button onClick={() => setTrav(Math.max(1, trav - 1))} aria-label="Fewer travellers">−</button>
                <b>{trav}</b>
                <button onClick={() => setTrav(Math.min(8, trav + 1))} aria-label="More travellers">+</button>
              </div></div>
            <div><label>Comfort level</label>
              <div className="chips" style={{ marginBottom: 0 }}>
                {LEVELS.map(([n], k) => <button key={n} className={"chip" + (k === lvl ? " on" : "")} onClick={() => setLvl(k)}>{n}</button>)}
              </div></div>
            <div><label>Stops</label>
              <div className="chips" style={{ marginBottom: 0 }}>
                {MAP_DESTINATIONS.map((d, k) => <button key={d.n} className={"chip" + (picks.includes(k) ? " on" : "")} onClick={() => toggle(k)}>{d.n}</button>)}
              </div></div>
          </div>
          <div className="est">
            <span className="mono" style={{ color: "#B5C4E0" }}>Estimated total</span>
            <div className="big">${total.toLocaleString()}</div>
            <div className="sub">about ${perPerson.toLocaleString()} per person · {days} days · {trav} traveller{trav > 1 ? "s" : ""}</div>
            <div className="rp"><b style={{ color: "var(--gold)" }}>Route: </b>CMB{stops.map((s) => " → " + s).join("")}</div>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Send this plan <ArrowRight size={18} /></a>
            <p className="note">Estimate only. Your final quote is confirmed after a free consultation.</p>
          </div>
        </div>
      </div>
      {/* Dark text so the heading is readable on medium grey */}
      <style>{`
        #plan .section-title { color: #071530; }
        #plan .section-desc { color: #0F172A; }
        #plan .eyebrow { color: #071530; }
        #plan .est { box-shadow: 0 16px 36px rgba(7, 21, 48, 0.28); }
      `}</style>
    </section>
  );
}