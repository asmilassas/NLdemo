import React from "react";
import { Check, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { SERVICES } from "../data.js";

export default function Services() {
  return (
    <section id="services" className="section-spacing services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center">
          <div className="eyebrow-badge">
            <span className="tag">Services</span>
            <span>Complete Island Support</span>
          </div>
          <h2 className="section-title">Everything for the journey</h2>
          <p className="section-desc center">
            From the moment you land to your last sunset, one team looks after every detail.
          </p>
        </div>

        {/* Alternating Text and Visual Rows inspired by Collective OS */}
        <div className="services-rows-container">
          {SERVICES.map((s, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={s.num}
                className={`service-row ${isReversed ? "row-reversed" : ""}`}
              >
                {/* Content Column */}
                <div className="service-content-side">
                  <div className="service-step-badge">
                    <span className="step-num">Step {s.num}</span>
                  </div>

                  <h3 className="service-row-title">{s.title}</h3>
                  <p className="service-row-desc">{s.desc}</p>

                  <ul className="service-features-list">
                    {s.features.map((f) => (
                      <li key={f} className="service-feature-item">
                        <div className="feature-check-icon">
                          <Check size={13} strokeWidth={3} />
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#plan" className="btn btn-secondary btn-sm service-learn-btn">
                    <span>Plan with this service</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

                {/* Visual Column with Glow Effect */}
                <div className="service-visual-side">
                  <div className="service-visual-glow"></div>
                  <div className="service-visual-card card-white">
                    <div className="service-img-wrapper">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="img-cover"
                        loading="lazy"
                      />
                      <div className="service-card-tag">
                        <Sparkles size={12} color="#0284C7" />
                        <span>NL Lanka Signature</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-section {
          background: #FFFFFF;
          border-bottom: 1px solid var(--border-subtle);
        }

        .services-rows-container {
          display: flex;
          flex-direction: column;
          gap: 88px;
          margin-top: 32px;
        }

        .service-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .service-row.row-reversed {
          direction: rtl;
        }

        .service-row.row-reversed > * {
          direction: ltr;
        }

        /* Content Side */
        .service-step-badge {
          display: inline-block;
          margin-bottom: 14px;
        }

        .step-num {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--accent-strong-blue);
          background: var(--bg-pale-blue);
          padding: 4px 12px;
          border-radius: 9999px;
        }

        .service-row-title {
          font-size: clamp(24px, 3.2vw, 32px);
          font-weight: 800;
          color: var(--text-heading);
          margin-bottom: 14px;
          line-height: 1.2;
        }

        .service-row-desc {
          font-size: 16px;
          color: var(--text-body);
          line-height: 1.6;
          margin-bottom: 24px;
          max-width: 520px;
        }

        .service-features-list {
          list-style: none;
          padding: 0;
          margin: 0 0 28px 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .service-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14.5px;
          font-weight: 600;
          color: var(--text-heading);
        }

        .feature-check-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--bg-pale-blue);
          color: var(--accent-strong-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .service-learn-btn {
          align-self: flex-start;
        }

        /* Visual Side with ambient glow */
        .service-visual-side {
          position: relative;
        }

        .service-visual-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(224, 242, 254, 0.35) 50%, transparent 75%);
          filter: blur(32px);
          z-index: 0;
          border-radius: 40px;
        }

        .service-visual-card {
          position: relative;
          z-index: 1;
          border-radius: 28px;
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          box-shadow: 0 16px 40px -10px rgba(2, 132, 199, 0.14);
        }

        .service-img-wrapper {
          position: relative;
          height: 320px;
          overflow: hidden;
        }

        .service-img-wrapper img {
          transition: transform 0.5s ease;
        }

        .service-visual-card:hover .service-img-wrapper img {
          transform: scale(1.05);
        }

        .service-card-tag {
          position: absolute;
          bottom: 16px;
          left: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(8px);
          color: var(--text-heading);
          font-size: 11.5px;
          font-weight: 700;
          padding: 5px 14px;
          border-radius: 9999px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        @media (max-width: 900px) {
          .service-row {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .service-row.row-reversed {
            direction: ltr;
          }
          .services-rows-container {
            gap: 64px;
          }
          .service-img-wrapper {
            height: 240px;
          }
        }
      `}</style>
    </section>
  );
}