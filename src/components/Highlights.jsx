import React from "react";
import { Award, Users, Star, Compass } from "lucide-react";
import { TRUST_POINTS } from "../data.js";

const ICONS = [Award, Users, Star, Compass];

export default function Highlights() {
  return (
    <section className="section-spacing bg-white highlights-section">
      <div className="container">
        <div className="highlights-grid">
          {TRUST_POINTS.map((t, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div className="card-white highlight-card" key={t.label}>
                <div className="highlight-card-top">
                  <span className="highlight-num">{t.num}</span>
                  <div className="highlight-icon-box">
                    <Icon size={18} />
                  </div>
                </div>
                <h3 className="highlight-title">{t.label}</h3>
                <p className="highlight-desc">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .highlights-section {
          padding-top: 60px;
          padding-bottom: 60px;
          background: #FFFFFF;
          border-bottom: 1px solid var(--border-subtle);
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .highlight-card {
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          border-radius: 24px;
          border: 1px solid var(--border-subtle);
          background: #FFFFFF;
          box-shadow: 0 4px 20px rgba(11, 34, 56, 0.03);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .highlight-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(2, 132, 199, 0.09);
          border-color: var(--accent-sky);
        }

        .highlight-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .highlight-num {
          font-family: var(--font-sans);
          font-weight: 800;
          font-size: 34px;
          line-height: 1;
          color: var(--accent-strong-blue);
          letter-spacing: -0.02em;
        }

        .highlight-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: var(--bg-pale-blue);
          color: var(--accent-strong-blue);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .highlight-title {
          font-size: 17px;
          font-weight: 800;
          color: var(--text-heading);
          margin-bottom: 8px;
        }

        .highlight-desc {
          font-size: 14px;
          color: var(--text-body);
          line-height: 1.55;
        }

        @media (max-width: 1024px) {
          .highlights-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .highlights-grid {
            grid-template-columns: 1fr;
          }
          .highlight-card {
            padding: 22px 20px;
          }
        }
      `}</style>
    </section>
  );
}
