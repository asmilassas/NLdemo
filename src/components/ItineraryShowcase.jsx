import React, { useState } from "react";
import { ArrowRight, Star, ShieldCheck, Check, Plane, MapPin, Clock, Compass } from "lucide-react";
import { MAP_DESTINATIONS, COMPANY_INFO } from "../data.js";

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

export default function ItineraryShowcase() {
  const [dest, setDest] = useState("Anywhere in Sri Lanka");
  const [when, setWhen] = useState("Any month");
  const [pax, setPax] = useState("2");

  const msg = `Hello NL Lanka, I would like a free quote: ${dest}, ${when}, ${pax} traveller(s).`;
  const wa = "https://wa.me/" + COMPANY_INFO.whatsappRaw + "?text=" + encodeURIComponent(msg);

  return (
    <section className="showcase-section">
      <div className="container">
        <div className="showcase-panel-wrapper">
          {/* Floating Card: Verified Guides (Top-Left) */}
          <div className="showcase-float-card float-top-left animate-float-slow">
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
          <div className="showcase-float-card float-top-right animate-float-delayed">
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

          {/* Floating Card: 100% Custom (Left-Center) */}
          <div className="showcase-float-card float-bottom-left animate-float-delayed">
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
          <div className="showcase-panel card-white">
            {/* Visual Header Strip */}
            <div className="showcase-topbar">
              <div className="showcase-status">
                <span className="live-dot"></span>
                <span>Private Itinerary Showcase · Nine Arch Bridge</span>
              </div>
              <div className="showcase-route-group">
                <span className="showcase-tag-badge">Scenic Hill Train</span>
                <span className="showcase-code">KDY → ELLA</span>
              </div>
            </div>

            {/* Visual Photo Area */}
            <div className="showcase-photo-container">
              <img
                src="/images/hero/ella-nine-arch-bridge.jpg"
                alt="Nine Arch Bridge, Ella, Sri Lanka"
                className="img-cover showcase-img"
                loading="eager"
              />
              <div className="photo-scrim"></div>
              <div className="photo-caption-tag">
                <MapPin size={13} color="var(--accent-sky)" />
                <span>Nine Arch Bridge · Demodara Gap, Ella Highlands</span>
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
                  <label htmlFor="showcase-dest">Destination</label>
                  <select
                    id="showcase-dest"
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
                  <label htmlFor="showcase-when">When</label>
                  <select
                    id="showcase-when"
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
                  <label htmlFor="showcase-pax">Travellers</label>
                  <select
                    id="showcase-pax"
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
        .showcase-section {
          position: relative;
          z-index: 10;
          background: #F4FBFF;
          padding-top: 0;
          padding-bottom: 72px;
          margin-top: -38px;
        }

        .showcase-panel-wrapper {
          position: relative;
          width: 100%;
          max-width: 1060px;
          margin: 0 auto;
        }

        .showcase-panel {
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
          padding: 13px 24px;
          background: #FAFDFF;
          border-bottom: 1px solid var(--border-subtle);
          font-size: 12.5px;
          color: var(--text-body);
        }

        .showcase-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          color: var(--text-heading);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-sky);
          box-shadow: 0 0 8px var(--accent-sky);
          flex-shrink: 0;
        }

        .showcase-route-group {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .showcase-tag-badge {
          background: var(--bg-pale-blue);
          color: var(--accent-strong-blue);
          font-size: 11px;
          font-weight: 700;
          padding: 2px 10px;
          border-radius: 9999px;
        }

        .showcase-code {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--bg-navy-dark);
          letter-spacing: 0.05em;
        }

        .showcase-photo-container {
          position: relative;
          height: 380px;
          overflow: hidden;
          background: var(--bg-navy-dark);
        }

        .showcase-img {
          transition: transform 0.6s ease;
        }

        .showcase-panel:hover .showcase-img {
          transform: scale(1.03);
        }

        .photo-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(8, 47, 73, 0.05) 0%, rgba(8, 47, 73, 0.45) 100%);
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
          font-size: 12.5px;
          font-weight: 600;
          padding: 6px 16px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

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

        /* Floating Overlapping Badges */
        .showcase-float-card {
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
          top: 24px;
          left: -32px;
        }

        .float-top-right {
          top: 48px;
          right: -36px;
        }

        .float-bottom-left {
          top: 50%;
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
          .showcase-section {
            margin-top: 0;
            padding-top: 16px;
          }
          .quote-fields-grid {
            grid-template-columns: 1fr 1fr;
          }
          .showcase-float-card {
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
          .showcase-code {
            display: none;
          }
        }

        @media (max-width: 560px) {
          .quote-fields-grid {
            grid-template-columns: 1fr;
          }
          .showcase-photo-container {
            height: 220px;
          }
        }
      `}</style>
    </section>
  );
}
