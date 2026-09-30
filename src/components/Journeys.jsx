import React, { useState } from "react";
import { Clock, Users, ArrowRight, Compass } from "lucide-react";
import { JOURNEYS } from "../data.js";

const CATS = ["All", ...Array.from(new Set(JOURNEYS.map((j) => j.cat)))];

export default function Journeys() {
  const [cat, setCat] = useState("All");
  const list = JOURNEYS.filter((j) => cat === "All" || j.cat === cat);

  return (
    <section id="journeys" className="section-spacing journeys-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center">
          <div className="eyebrow-badge">
            <span className="tag">Journeys</span>
            <span>Handcrafted Itineraries</span>
          </div>
          <h2 className="section-title">Pick your journey</h2>
          <p className="section-desc center">
            Popular routes our guests love. Every one can be changed to suit your dates and interests.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="journeys-filter-row">
          {CATS.map((c) => (
            <button
              key={c}
              className={`filter-pill ${c === cat ? "active" : ""}`}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* 3-Column / Responsive Card Grid */}
        <div className="journeys-grid">
          {list.map((j) => (
            <article className="journey-card" key={j.id}>
              {/* Card Image with zoom effect */}
              <div className="journey-img-container">
                <img
                  className="img-cover journey-img"
                  src={j.image}
                  alt={j.title}
                  loading="lazy"
                />
                <div className="journey-img-scrim"></div>
                <span className="journey-cat-badge">{j.cat}</span>
              </div>

              {/* Card Body */}
              <div className="journey-body">
                <div className="journey-route-pill">
                  <span>COLOMBO</span>
                  <span className="route-arrow">→</span>
                  <span>{j.code}</span>
                </div>

                <h3 className="journey-title">{j.title}</h3>
                <p className="journey-desc">{j.desc}</p>

                <div className="journey-meta-row">
                  <div className="meta-chip">
                    <Clock size={13} color="#0284C7" />
                    <span>{j.days} days</span>
                  </div>
                  <div className="meta-chip">
                    <Users size={13} color="#0284C7" />
                    <span>Private guide</span>
                  </div>
                </div>
              </div>

              {/* Card Footer with Pricing and Action */}
              <div className="journey-footer">
                <div className="journey-price-wrap">
                  <span className="price-prefix">from</span>
                  <span className="price-val">${j.fromPrice}</span>
                </div>

                <a href="#plan" className="btn btn-primary btn-sm">
                  <span>Plan this</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .journeys-section {
          background: #FFFFFF;
          border-bottom: 1px solid var(--border-subtle);
        }

        .journeys-filter-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 48px;
        }

        .filter-pill {
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          color: var(--text-body);
          padding: 9px 22px;
          border-radius: 9999px;
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .filter-pill:hover {
          border-color: var(--accent-strong-blue);
          color: var(--accent-strong-blue);
          transform: translateY(-1px);
        }

        .filter-pill.active {
          background: var(--bg-navy-dark);
          border-color: var(--bg-navy-dark);
          color: #FFFFFF;
          box-shadow: 0 4px 14px rgba(8, 47, 73, 0.2);
        }

        .journeys-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 28px;
        }

        .journey-card {
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(11, 34, 56, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .journey-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px -8px rgba(2, 132, 199, 0.16);
          border-color: var(--accent-sky);
        }

        .journey-img-container {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .journey-img {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .journey-card:hover .journey-img {
          transform: scale(1.06);
        }

        .journey-img-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(8, 47, 73, 0) 60%, rgba(8, 47, 73, 0.4) 100%);
        }

        .journey-cat-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          color: var(--text-heading);
          font-size: 11.5px;
          font-weight: 700;
          padding: 5px 14px;
          border-radius: 9999px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .journey-body {
          padding: 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .journey-route-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-pale-blue);
          color: var(--accent-strong-blue);
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 9999px;
          margin-bottom: 12px;
          align-self: flex-start;
        }

        .route-arrow {
          color: var(--accent-sky);
        }

        .journey-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-heading);
          margin-bottom: 8px;
          line-height: 1.25;
        }

        .journey-desc {
          font-size: 14.5px;
          color: var(--text-body);
          line-height: 1.55;
          margin-bottom: 20px;
          flex: 1;
        }

        .journey-meta-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .meta-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #F8FAFC;
          border: 1px solid var(--border-subtle);
          padding: 5px 12px;
          border-radius: 9999px;
          font-size: 12.5px;
          font-weight: 600;
          color: var(--text-body);
        }

        .journey-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          border-top: 1px solid var(--border-subtle);
          background: #FAFDFF;
        }

        .journey-price-wrap {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .price-prefix {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-body);
        }

        .price-val {
          font-size: 26px;
          font-weight: 800;
          font-family: var(--font-sans);
          color: var(--accent-strong-blue);
          letter-spacing: -0.02em;
        }

        @media (max-width: 640px) {
          .journeys-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
