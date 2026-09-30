import React from "react";
import { Award, Compass, HeartHandshake, MapPin, ArrowRight } from "lucide-react";

const POINTS = [
  {
    icon: Compass,
    title: "Local route experts",
    desc: "Born and raised in Sri Lanka, our guides know the hidden viewpoints, the best tables and the quiet roads."
  },
  {
    icon: HeartHandshake,
    title: "Personal, never rushed",
    desc: "Every trip is private and built around your pace, not a fixed group schedule."
  },
  {
    icon: Award,
    title: "Licensed and insured",
    desc: "Certified chauffeur-guides, modern air-conditioned vehicles and full tourist insurance."
  }
];

export default function About() {
  return (
    <section id="about" className="section-spacing about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left: Overlapping Photo Composition */}
          <div className="about-media-col">
            <div className="media-frame-main">
              <img
                src="/images/destination-sigiriya.jpg"
                alt="Sigiriya Lion Rock rising above the jungle"
                className="img-cover"
                loading="lazy"
              />
              <div className="media-overlay-gradient"></div>
            </div>

            <div className="media-frame-secondary">
              <img
                src="/images/gallery-train.jpg"
                alt="Blue train crossing the Nine Arch Bridge in Ella"
                className="img-cover"
                loading="lazy"
              />
            </div>

            {/* Overlapping Badge */}
            <div className="about-floating-badge animate-float-slow">
              <div className="badge-highlight">15 min</div>
              <div className="badge-label">
                <MapPin size={13} color="#0284C7" />
                <span>from CMB Airport</span>
              </div>
            </div>
          </div>

          {/* Right: Content & Key Points */}
          <div className="about-content-col">
            <div className="eyebrow-badge">
              <span className="tag">About Us</span>
              <span>About NL Lanka</span>
            </div>

            <h2 className="section-title">
              Your Negombo-based team for the whole island
            </h2>

            <p className="section-desc" style={{ marginBottom: "28px" }}>
              Based in Negombo, minutes from the airport, we plan private tours, airport transfers and stays with people we know personally, so your holiday runs smoothly from arrival to departure.
            </p>

            <div className="about-points-list">
              {POINTS.map(({ icon: Icon, title, desc }) => (
                <div className="about-point-item" key={title}>
                  <div className="point-icon-box">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="point-title">{title}</h3>
                    <p className="point-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "36px" }}>
              <a href="#contact" className="btn btn-primary btn-lg">
                <span>Talk to our team</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: #F4FBFF;
          border-bottom: 1px solid var(--border-subtle);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        /* Photo Composition */
        .about-media-col {
          position: relative;
          padding-bottom: 40px;
          padding-right: 28px;
        }

        .media-frame-main {
          height: 480px;
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          border: 1px solid var(--border-subtle);
          box-shadow: 0 20px 48px -12px rgba(2, 132, 199, 0.15);
        }

        .media-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 65%, rgba(8, 47, 73, 0.35) 100%);
        }

        .media-frame-secondary {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 46%;
          height: 190px;
          border-radius: 20px;
          overflow: hidden;
          border: 5px solid #FFFFFF;
          box-shadow: 0 16px 36px rgba(8, 47, 73, 0.18);
        }

        .about-floating-badge {
          position: absolute;
          left: 20px;
          top: 24px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border: 1px solid #FFFFFF;
          border-radius: 20px;
          padding: 12px 18px;
          box-shadow: 0 12px 32px rgba(8, 47, 73, 0.14);
        }

        .badge-highlight {
          font-family: var(--font-sans);
          font-weight: 800;
          font-size: 22px;
          color: var(--accent-strong-blue);
          line-height: 1;
          margin-bottom: 4px;
        }

        .badge-label {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          font-weight: 600;
          color: var(--text-body);
        }

        /* Points List */
        .about-points-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about-point-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .point-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: var(--bg-pale-blue);
          color: var(--accent-strong-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(2, 132, 199, 0.1);
        }

        .point-title {
          font-size: 17px;
          font-weight: 800;
          color: var(--text-heading);
          margin-bottom: 4px;
        }

        .point-desc {
          font-size: 14.5px;
          color: var(--text-body);
          line-height: 1.55;
        }

        @media (max-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .about-media-col {
            padding-right: 0;
          }
          .media-frame-main {
            height: 380px;
          }
          .media-frame-secondary {
            height: 150px;
          }
        }
      `}</style>
    </section>
  );
}