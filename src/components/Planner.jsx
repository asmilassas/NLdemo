import React, { useState } from "react";
import { ArrowRight, Sparkles, MessageSquare, Check, Calendar, Users, MapPin } from "lucide-react";
import { MAP_DESTINATIONS, COMPANY_INFO } from "../data.js";

const LEVELS = [
  ["Comfort", 70],
  ["Premium", 110],
  ["Luxury", 180]
];

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
    <section id="plan" className="section-spacing planner-section">
      <div className="container">
        {/* Header */}
        <div className="section-header center">
          <div className="eyebrow-badge">
            <span className="tag">Interactive</span>
            <span>Trip Planner</span>
          </div>
          <h2 className="section-title">Build your trip in seconds</h2>
          <p className="section-desc center">
            Move the sliders and watch your estimate update, then send the plan straight to us on WhatsApp.
          </p>
        </div>

        {/* 2-Column Planner Box */}
        <div className="planner-layout">
          {/* Controls Box */}
          <div className="planner-controls card-white">
            {/* Days Slider */}
            <div className="planner-field">
              <div className="field-label-row">
                <span className="field-title">
                  <Calendar size={15} color="#0284C7" />
                  <span>Duration</span>
                </span>
                <span className="field-value-badge">{days} Days</span>
              </div>
              <input
                type="range"
                min="3"
                max="14"
                value={days}
                onChange={(e) => setDays(+e.target.value)}
                className="sky-slider"
                aria-label="Trip duration in days"
              />
              <div className="slider-limits">
                <span>3 days (quick getaway)</span>
                <span>14 days (grand circuit)</span>
              </div>
            </div>

            {/* Travellers Counter */}
            <div className="planner-field">
              <div className="field-label-row">
                <span className="field-title">
                  <Users size={15} color="#0284C7" />
                  <span>Travellers</span>
                </span>
              </div>
              <div className="stepper-wrap">
                <button
                  type="button"
                  onClick={() => setTrav(Math.max(1, trav - 1))}
                  aria-label="Fewer travellers"
                  className="step-btn"
                >
                  −
                </button>
                <span className="step-val">{trav} {trav === 1 ? "Person" : "People"}</span>
                <button
                  type="button"
                  onClick={() => setTrav(Math.min(8, trav + 1))}
                  aria-label="More travellers"
                  className="step-btn"
                >
                  +
                </button>
              </div>
            </div>

            {/* Comfort Level */}
            <div className="planner-field">
              <div className="field-label-row">
                <span className="field-title">
                  <Sparkles size={15} color="#0284C7" />
                  <span>Comfort Level</span>
                </span>
              </div>
              <div className="chips-row">
                {LEVELS.map(([name], k) => (
                  <button
                    key={name}
                    type="button"
                    className={`level-pill ${k === lvl ? "active" : ""}`}
                    onClick={() => setLvl(k)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Stops Selection */}
            <div className="planner-field">
              <div className="field-label-row">
                <span className="field-title">
                  <MapPin size={15} color="#0284C7" />
                  <span>Select Stops Along the Way</span>
                </span>
              </div>
              <div className="chips-row">
                {MAP_DESTINATIONS.map((d, k) => {
                  const isPicked = picks.includes(k);
                  return (
                    <button
                      key={d.n}
                      type="button"
                      className={`stop-pill ${isPicked ? "active" : ""}`}
                      onClick={() => toggle(k)}
                    >
                      {isPicked && <Check size={13} strokeWidth={3} />}
                      <span>{d.n}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Estimate Card (Navy Surface with Sky-Blue Highlights) */}
          <div className="planner-summary">
            <div className="summary-badge">Live Quote Estimate</div>

            <div className="summary-total-wrap">
              <div className="summary-amount">${total.toLocaleString()}</div>
              <div className="summary-per-person">
                about ${perPerson.toLocaleString()} per person · {days} days · {trav} traveller{trav > 1 ? "s" : ""}
              </div>
            </div>

            <div className="summary-route-box">
              <div className="route-box-title">Selected Route:</div>
              <div className="route-chain">
                <span className="route-node">CMB</span>
                {stops.map((s) => (
                  <React.Fragment key={s}>
                    <span className="chain-arrow">→</span>
                    <span className="route-node">{s}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span>Send this plan on WhatsApp</span>
              <ArrowRight size={17} />
            </a>

            <p className="summary-footnote">
              Estimate includes private air-conditioned vehicle, fuel, highway tolls, driver accommodation &amp; 24/7 concierge assistance. Final quote confirmed after consultation.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .planner-section {
          background: #F4FBFF;
          border-bottom: 1px solid var(--border-subtle);
        }

        .planner-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 32px;
          align-items: start;
        }

        .planner-controls {
          padding: 36px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .planner-field {
          display: flex;
          flex-direction: column;
        }

        .field-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .field-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 700;
          color: var(--text-heading);
        }

        .field-value-badge {
          background: var(--bg-pale-blue);
          color: var(--accent-strong-blue);
          font-size: 13px;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 9999px;
        }

        .sky-slider {
          width: 100%;
          height: 8px;
          accent-color: var(--accent-strong-blue);
          cursor: pointer;
          border-radius: 9999px;
        }

        .slider-limits {
          display: flex;
          justify-content: space-between;
          font-size: 11.5px;
          color: var(--text-body);
          margin-top: 8px;
          font-weight: 500;
        }

        .stepper-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .step-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid var(--border-subtle);
          background: #FFFFFF;
          color: var(--text-heading);
          font-size: 20px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .step-btn:hover {
          background: var(--bg-pale-blue);
          border-color: var(--accent-strong-blue);
          color: var(--accent-strong-blue);
        }

        .step-val {
          font-size: 17px;
          font-weight: 700;
          color: var(--text-heading);
          min-width: 80px;
          text-align: center;
        }

        .chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .level-pill, .stop-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border-radius: 9999px;
          border: 1px solid var(--border-subtle);
          background: #FFFFFF;
          color: var(--text-heading);
          font-family: var(--font-sans);
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .level-pill:hover, .stop-pill:hover {
          border-color: var(--accent-strong-blue);
          color: var(--accent-strong-blue);
        }

        .level-pill.active, .stop-pill.active {
          background: var(--bg-navy-dark);
          color: #FFFFFF;
          border-color: var(--bg-navy-dark);
          box-shadow: 0 4px 12px rgba(8, 47, 73, 0.2);
        }

        /* Estimate Summary Box */
        .planner-summary {
          background: var(--bg-navy-dark);
          color: #FFFFFF;
          border-radius: 28px;
          padding: 36px;
          box-shadow: 0 24px 56px -12px rgba(8, 47, 73, 0.4);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .summary-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--accent-sky);
          background: rgba(56, 189, 248, 0.12);
          padding: 4px 12px;
          border-radius: 9999px;
          margin-bottom: 20px;
        }

        .summary-total-wrap {
          margin-bottom: 24px;
        }

        .summary-amount {
          font-family: var(--font-sans);
          font-size: clamp(48px, 6vw, 68px);
          font-weight: 800;
          color: var(--accent-sky);
          line-height: 1;
          letter-spacing: -0.03em;
          margin-bottom: 8px;
        }

        .summary-per-person {
          font-size: 14px;
          color: #CBD5E1;
          font-weight: 500;
        }

        .summary-route-box {
          background: rgba(255, 255, 255, 0.06);
          border: 1px dashed rgba(255, 255, 255, 0.18);
          border-radius: 16px;
          padding: 16px;
          margin-bottom: 28px;
        }

        .route-box-title {
          font-size: 12px;
          font-weight: 700;
          color: var(--accent-sky);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }

        .route-chain {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
          font-size: 13px;
          font-weight: 700;
          color: #FFFFFF;
        }

        .chain-arrow {
          color: var(--accent-sky);
        }

        .summary-footnote {
          font-size: 12px;
          color: #94A3B8;
          line-height: 1.5;
          margin-top: 16px;
          text-align: center;
        }

        @media (max-width: 900px) {
          .planner-layout {
            grid-template-columns: 1fr;
          }
          .planner-controls {
            padding: 24px;
          }
          .planner-summary {
            padding: 28px;
          }
        }
      `}</style>
    </section>
  );
}