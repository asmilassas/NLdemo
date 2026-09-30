import React, { useState } from "react";
import { ArrowRight, Star, ShieldCheck, Check, Plane, MapPin, Sparkles, Clock, Compass } from "lucide-react";
import { MAP_DESTINATIONS, COMPANY_INFO } from "../data.js";

const STATS = [
  ["12+", "Years experience"],
  ["3,500+", "Happy guests"],
  ["4.9★", "Average rating"]
];

const MONTHS = [
  "Any month",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export default function Hero() {
  const [dest, setDest] = useState("Anywhere in Sri Lanka");
  const [when, setWhen] = useState("Any month");
  const [pax, setPax] = useState("2");

  const msg = `Hello NL Lanka, I would like a free quote: ${dest}, ${when}, ${pax} traveller(s).`;
  const wa = "https://wa.me/" + COMPANY_INFO.whatsappRaw + "?text=" + encodeURIComponent(msg);

  return (
    <section id="home" className="hero-section">
      {/* Subtle Sky-Blue Ambient Glows & Vertical Bands */}
      <div className="hero-glow-container">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-bands"></div>
      </div>

      <div className="container hero-container">
        {/* Centered Headline & Copy */}
        <div className="hero-header-box">
          {/* Eyebrow Badge */}
          <div className="eyebrow-pill">
            <span className="eyebrow-tag">Bespoke</span>
            <span className="eyebrow-title">NL Lanka Travel &amp; Tours · Negombo</span>
            <span className="eyebrow-arrow">›</span>
          </div>

          <h1 className="hero-title">
            Sri Lanka, <span className="hero-highlight">routed</span><br />
            your way.
          </h1>

          <p className="hero-subtitle">
            Private journeys with local chauffeur-guides. Tell us what you love and we will build the route around you.
          </p>

          <div className="hero-actions">
            <a href="#plan" className="btn btn-primary btn-lg">
              <span>Build my trip</span>
              <ArrowRight size={17} />
            </a>
            <a href="#journeys" className="btn btn-secondary btn-lg">
              <span>See journeys</span>
            </a>
          </div>

          {/* Quick stats pills */}
          <div className="hero-stats-row">
            {STATS.map(([num, label]) => (
              <div key={label} className="hero-stat-pill">
                <b>{num}</b>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Large Rounded Visual Panel below Hero content (with depth cards) */}
        <div className="hero-panel-wrapper">
          {/* Floating Card: Verified Guides (Top-Left) */}
          <div className="hero-float-card float-top-left animate-float-slow">
            <div className="float-badge-icon">
              <Check size={14} strokeWidth={3} />
            </div>
            <div>
              <div className="float-title">Verified Chauffeur-Guides</div>
              <div className="float-desc">
                <Star size={12} fill="#F59E0B" color="#F59E0B" />
                <span>4.9★ Rated (3,500+ guests)</span>
              </div>
            </div>
          </div>

          {/* Floating Card: 24/7 Airport Pickup (Top-Right) */}
          <div className="hero-float-card float-top-right animate-float-delayed">
            <div className="float-badge-icon" style={{ backgroundColor: "#0284C7" }}>
              <Plane size={14} />
            </div>
            <div>
              <div className="float-title">CMB Airport Meet &amp; Greet</div>
              <div className="float-desc">
                <Clock size={12} color="#0284C7" />
                <span>15 min from Negombo HQ</span>
              </div>
            </div>
          </div>

          {/* Floating Card: 100% Custom (Bottom-Left) */}
          <div className="hero-float-card float-bottom-left animate-float-delayed">
            <div className="float-badge-icon" style={{ backgroundColor: "#082F49" }}>
              <Compass size={14} />
            </div>
            <div>
              <div className="float-title">100% Private Pacing</div>
              <div className="float-desc">
                <span>9 Provinces · Stop anytime</span>
              </div>
            </div>
          </div>

          {/* The Main Rounded Visual Surface */}
          <div className="hero-showcase-panel">
            {/* Visual Header Strip */}
            <div className="showcase-topbar">
              <div className="showcase-status">
                <span className="live-dot"></span>
                <span>Private Itinerary Showcase · Sigiriya Lion Rock Fortress</span>
              </div>
              <span className="showcase-code">CMB → SGR → KDY → ELL</span>
            </div>

            {/* Visual Photo Area */}
            <div className="showcase-photo-container">
              <img
                src="/images/destination-sigiriya.jpg"
                alt="Sigiriya Lion Rock Citadel, Sri Lanka"
                className="img-cover"
                loading="eager"
              />
              <div className="photo-scrim"></div>
              <div className="photo-caption-tag">
                <MapPin size={13} />
                <span>Sigiriya, Cultural Triangle · Ancient UNESCO Citadel</span>
              </div>
            </div>

            {/* Integrated Quick Quote Card */}
            <div className="showcase-quote-box">
              <div className="quote-box-header">
                <div className="quote-title">
                  <ShieldCheck size={18} color="#0284C7" />
                  <span>Get a Free Custom Quote</span>
                </div>
                <div className="quote-tag">No Surge Pricing · Direct Negombo Desk</div>
              </div>

              <div className="quote-fields-grid">
                <div className="quote-field">
                  <label htmlFor="hero-dest">Destination</label>
                  <select
                    id="hero-dest"
                    value={dest}
                    onChange={(e) => setDest(e.target.value)}
                    className="form-control"
                  >
                    <option>Anywhere in Sri Lanka</option>
                    {MAP_DESTINATIONS.map((d) => (
                      <option key={d.n} value={d.n}>
                        {d.n} ({d.tag})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="quote-field">
                  <label htmlFor="hero-when">When</label>
                  <select
                    id="hero-when"
                    value={when}
                    onChange={(e) => setWhen(e.target.value)}
                    className="form-control"
                  >
                    {MONTHS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="quote-field">
                  <label htmlFor="hero-pax">Travellers</label>
                  <select
                    id="hero-pax"
                    value={pax}
                    onChange={(e) => setPax(e.target.value)}
                    className="form-control"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Traveller" : "Travellers"}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="quote-field action-field">
                  <label>&nbsp;</label>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <span>Request on WhatsApp</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: 130px;
          padding-bottom: 80px;
          background: linear-gradient(180deg, #F4FBFF 0%, #FFFFFF 100%);
          overflow: hidden;
        }

        .hero-container {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-header-box {
          max-width: 820px;
          text-align: center;
          margin-bottom: 56px;
        }

        .eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-subtle);
          padding: 6px 16px 6px 8px;
          border-radius: 9999px;
          box-shadow: 0 4px 16px rgba(2, 132, 199, 0.08);
          margin-bottom: 24px;
          transition: transform 0.2s ease;
        }

        .eyebrow-pill:hover {
          transform: translateY(-1px);
          border-color: var(--accent-sky);
        }

        .eyebrow-tag {
          background: var(--bg-navy-dark);
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .eyebrow-title {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-heading);
        }

        .eyebrow-arrow {
          font-size: 14px;
          color: var(--accent-strong-blue);
          font-weight: bold;
        }

        .hero-title {
          font-size: clamp(38px, 6vw, 76px);
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text-heading);
          margin-bottom: 20px;
        }

        .hero-highlight {
          color: var(--accent-strong-blue);
          position: relative;
          display: inline-block;
        }

        .hero-subtitle {
          font-size: clamp(16px, 2vw, 18px);
          color: var(--text-body);
          max-width: 600px;
          margin: 0 auto 36px;
          line-height: 1.6;
          font-weight: 500;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .hero-stats-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-stat-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(224, 242, 254, 0.45);
          border: 1px solid var(--border-subtle);
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 12.5px;
          color: var(--text-heading);
        }

        .hero-stat-pill b {
          color: var(--accent-strong-blue);
          font-weight: 800;
        }

        /* Large Rounded Visual Panel below Hero */
        .hero-panel-wrapper {
          position: relative;
          width: 100%;
          max-width: 1040px;
          margin: 0 auto;
        }

        .hero-showcase-panel {
          background: #FFFFFF;
          border-radius: 28px;
          border: 1px solid var(--border-subtle);
          box-shadow: 0 24px 64px -12px rgba(2, 132, 199, 0.16), 0 0 0 1px rgba(255, 255, 255, 0.8) inset;
          overflow: hidden;
          position: relative;
          z-index: 10;
        }

        .showcase-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 24px;
          background: #FAFDFF;
          border-bottom: 1px solid var(--border-subtle);
          font-size: 12px;
          color: var(--text-body);
        }

        .showcase-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: var(--text-heading);
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-sky);
          box-shadow: 0 0 8px var(--accent-sky);
        }

        .showcase-code {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--accent-strong-blue);
          letter-spacing: 0.05em;
        }

        .showcase-photo-container {
          position: relative;
          height: 380px;
          overflow: hidden;
        }

        .photo-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(8, 47, 73, 0.05) 0%, rgba(8, 47, 73, 0.5) 100%);
        }

        .photo-caption-tag {
          position: absolute;
          left: 20px;
          bottom: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(8, 47, 73, 0.85);
          backdrop-filter: blur(8px);
          color: #FFFFFF;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        /* Quick Quote Box */
        .showcase-quote-box {
          padding: 24px;
          background: #FFFFFF;
          border-top: 1px solid var(--border-subtle);
        }

        .quote-box-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 8px;
        }

        .quote-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          font-weight: 800;
          color: var(--text-heading);
        }

        .quote-tag {
          font-size: 12px;
          font-weight: 600;
          color: var(--accent-strong-blue);
          background: var(--bg-pale-blue);
          padding: 4px 12px;
          border-radius: 9999px;
        }

        .quote-fields-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.3fr;
          gap: 14px;
          align-items: end;
        }

        .quote-field label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-body);
          margin-bottom: 6px;
        }

        /* Floating Overlapping Cards */
        .hero-float-card {
          position: absolute;
          z-index: 25;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border: 1px solid #FFFFFF;
          border-radius: 9999px;
          padding: 8px 16px 8px 10px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 20px 40px -10px rgba(8, 47, 73, 0.18), 0 0 0 1px rgba(255, 255, 255, 0.9) inset;
        }

        .float-top-left {
          top: 30px;
          left: -32px;
        }

        .float-top-right {
          top: 60px;
          right: -36px;
        }

        .float-bottom-left {
          top: 52%;
          left: -38px;
        }

        .float-badge-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--accent-strong-blue);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .float-title {
          font-size: 13px;
          font-weight: 800;
          color: var(--text-heading);
          line-height: 1.2;
        }

        .float-desc {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: var(--text-body);
          font-weight: 600;
        }

        @media (max-width: 1160px) {
          .float-top-left { left: 8px; top: 12px; }
          .float-top-right { right: 8px; top: 12px; }
          .float-bottom-left { display: none; }
        }

        @media (max-width: 900px) {
          .quote-fields-grid {
            grid-template-columns: 1fr 1fr;
          }
          .hero-float-card {
            display: none;
          }
          .showcase-photo-container {
            height: 280px;
          }
        }

        @media (max-width: 640px) {
          .showcase-topbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            padding: 10px 16px;
          }
          .showcase-status {
            font-size: 11.5px;
          }
          .showcase-code {
            display: none;
          }
        }

        @media (max-width: 560px) {
          .hero-section {
            padding-top: 100px;
            padding-bottom: 50px;
          }
          .quote-fields-grid {
            grid-template-columns: 1fr;
          }
          .showcase-photo-container {
            height: 220px;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}