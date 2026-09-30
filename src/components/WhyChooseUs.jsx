import React from "react";
import { ShieldCheck, Clock, MapPin, Sparkles, Award, Compass, HeartHandshake } from "lucide-react";
import { WHY_CHOOSE_US } from "../data.js";

const ICONS = [ShieldCheck, Compass, Clock, Award, Sparkles, MapPin];

export default function WhyChooseUs() {
  return (
    <section className="section-spacing why-choose-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center">
          <div className="dark-badge">
            <span>Why NL Lanka</span>
          </div>
          <h2 className="dark-title">Why Travellers Choose Us</h2>
          <p className="dark-desc">
            Everything you need for a safe, stress-free and truly unforgettable journey across Sri Lanka.
          </p>
        </div>

        {/* 3-Column Glassmorphism Feature Grid */}
        <div className="why-grid">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div className="why-card" key={item.title}>
                <div className="why-card-top">
                  <div className="why-icon-box">
                    <Icon size={20} />
                  </div>
                  <span className="why-badge">{item.badge}</span>
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .why-choose-section {
          background-color: var(--bg-navy-dark);
          color: #FFFFFF;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          overflow: hidden;
        }

        .dark-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: var(--accent-sky);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 5px 16px;
          border-radius: 9999px;
          margin-bottom: 16px;
        }

        .dark-title {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 14px;
        }

        .dark-desc {
          font-size: 16px;
          color: #94A3B8;
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
        }

        .why-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 32px 28px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
        }

        .why-card:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(56, 189, 248, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
        }

        .why-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .why-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.2);
          color: var(--accent-sky);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .why-badge {
          font-size: 11px;
          font-weight: 700;
          color: #CBD5E1;
          background: rgba(255, 255, 255, 0.06);
          padding: 4px 10px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .why-card-title {
          font-size: 18px;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 10px;
          line-height: 1.25;
        }

        .why-card-desc {
          font-size: 14px;
          color: #94A3B8;
          line-height: 1.6;
        }

        @media (max-width: 960px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
          .why-card {
            padding: 24px 20px;
          }
        }
      `}</style>
    </section>
  );
}
