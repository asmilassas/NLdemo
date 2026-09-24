import React, { useState } from "react";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";
import { MAP_DESTINATIONS, COMPANY_INFO } from "../data.js";

const STATS = [["12+", "Years experience"], ["3,500+", "Happy guests"], ["4.9★", "Average rating"]];
const MONTHS = ["Any month", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function Hero() {
  const [dest, setDest] = useState("Anywhere in Sri Lanka");
  const [when, setWhen] = useState("Any month");
  const [pax, setPax] = useState("2");

  const msg = `Hello NL Lanka, I would like a free quote: ${dest}, ${when}, ${pax} traveller(s).`;
  const wa = "https://wa.me/" + COMPANY_INFO.whatsappRaw + "?text=" + encodeURIComponent(msg);

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow"><span>NL Lanka Travel &amp; Tours · Negombo</span></div>
          <h1>Sri Lanka, <em>routed</em><br />your way.</h1>
          <p className="lead">Private journeys with local chauffeur-guides. Tell us what you love and we will build the route around you.</p>
          <div className="row">
            <a href="#plan" className="btn btn-primary btn-lg">Build my trip <ArrowRight size={18} /></a>
            <a href="#journeys" className="btn btn-outline btn-lg">See journeys</a>
          </div>
          <div className="stats">
            {STATS.map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}
          </div>
        </div>

        <div className="hp">
          <div className="hp-photo">
            <img className="img-cover" src="/images/destination-sigiriya.jpg" alt="Sigiriya Lion Rock, Sri Lanka" />
          </div>
          <div className="hp-chip"><Star size={15} fill="#E5A932" strokeWidth={0} /> 4.9 rated by 3,500+ guests</div>

          <div className="hp-card">
            <div className="hp-card-title"><ShieldCheck size={18} color="#0D3E8C" /> Get a free custom quote</div>
            <div className="hp-fields">
              <label>Destination
                <select value={dest} onChange={(e) => setDest(e.target.value)}>
                  <option>Anywhere in Sri Lanka</option>
                  {MAP_DESTINATIONS.map((d) => <option key={d.n}>{d.n}</option>)}
                </select>
              </label>
              <label>When
                <select value={when} onChange={(e) => setWhen(e.target.value)}>
                  {MONTHS.map((m) => <option key={m}>{m}</option>)}
                </select>
              </label>
              <label>Travellers
                <select value={pax} onChange={(e) => setPax(e.target.value)}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </label>
            </div>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-primary hp-btn">Request quote on WhatsApp <ArrowRight size={16} /></a>
          </div>
        </div>
      </div>
      <style>{`
        .hp { position: relative; height: 560px; }
        .hp-photo { position: absolute; inset: 0 0 60px 0; border-radius: 28px; overflow: hidden; box-shadow: 0 24px 60px rgba(7, 21, 48, 0.25); }
        .hp-photo:after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(7, 21, 48, 0) 55%, rgba(7, 21, 48, 0.45)); }
        .hp-chip { position: absolute; right: 18px; top: 18px; z-index: 2; display: flex; align-items: center; gap: 7px; background: #fff; color: #071530; font: 600 13.5px Inter, sans-serif; padding: 9px 15px; border-radius: 999px; box-shadow: 0 10px 28px rgba(7, 21, 48, 0.2); }
        .hp-card { position: absolute; left: 24px; right: 24px; bottom: 0; z-index: 2; background: #fff; border-radius: 20px; padding: 20px 22px; box-shadow: 0 20px 50px rgba(7, 21, 48, 0.25); border: 1px solid #E2E8F0; }
        .hp-card-title { display: flex; align-items: center; gap: 8px; font: 700 17px Fraunces, serif; color: #071530; margin-bottom: 14px; }
        .hp-fields { display: grid; grid-template-columns: 1.3fr 1fr 0.7fr; gap: 12px; }
        .hp-fields label { display: block; font: 600 11px ui-monospace, Menlo, monospace; letter-spacing: .1em; text-transform: uppercase; color: #64748B; }
        .hp-fields select { width: 100%; margin-top: 6px; padding: 11px 10px; border: 1px solid #CBD5E1; border-radius: 10px; background: #F8FAFC; color: #071530; font: 500 14.5px Inter, sans-serif; }
        .hp-fields select:focus { outline: 2px solid #0D3E8C; outline-offset: 1px; }
        .hp-btn { width: 100%; justify-content: center; margin-top: 14px; }
        @media (max-width: 900px) { .hp { height: 520px; } }
        @media (max-width: 560px) { .hp { height: auto; } .hp-photo { position: relative; inset: auto; height: 260px; } .hp-card { position: relative; left: auto; right: auto; margin-top: -40px; } .hp-fields { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}