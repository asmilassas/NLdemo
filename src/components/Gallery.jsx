import React from "react";
import { MapPin, Camera } from "lucide-react";
import { GALLERY } from "../data.js";

export default function Gallery() {
  return (
    <section id="gallery" className="section-spacing gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center">
          <div className="eyebrow-badge">
            <span className="tag">Visuals</span>
            <span>Moments from the Island</span>
          </div>
          <h2 className="section-title">Moments from the island</h2>
          <p className="section-desc center">
            A glimpse of what waits for you on the road across Sri Lanka.
          </p>
        </div>

        {/* 3-Column Image Grid with Soft Rounded Containers */}
        <div className="gallery-grid">
          {GALLERY.map((g) => (
            <figure className="gallery-item-card" key={g.title}>
              <div className="gallery-img-box">
                <img
                  className="img-cover gallery-img"
                  src={g.src}
                  alt={g.title}
                  loading="lazy"
                />
                <div className="gallery-scrim"></div>
                <div className="gallery-overlay-info">
                  <span className="gallery-title">{g.title}</span>
                  <span className="gallery-subtitle">
                    <MapPin size={13} color="var(--accent-sky)" />
                    <span>{g.subtitle}</span>
                  </span>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-section {
          background: #F4FBFF;
          border-bottom: 1px solid var(--border-subtle);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .gallery-item-card {
          margin: 0;
          border-radius: 24px;
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          box-shadow: 0 4px 20px rgba(11, 34, 56, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-item-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px -10px rgba(2, 132, 199, 0.16);
          border-color: var(--accent-sky);
        }

        .gallery-img-box {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .gallery-img {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-item-card:hover .gallery-img {
          transform: scale(1.08);
        }

        .gallery-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(8, 47, 73, 0.8) 100%);
        }

        .gallery-overlay-info {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 24px 20px 18px;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .gallery-title {
          font-family: var(--font-sans);
          font-weight: 800;
          font-size: 17px;
          color: #FFFFFF;
          line-height: 1.25;
        }

        .gallery-subtitle {
          font-size: 13px;
          color: #CBD5E1;
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: 500;
        }

        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .gallery-img-box {
            height: 240px;
          }
        }

        @media (max-width: 540px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
          .gallery-img-box {
            height: 220px;
          }
        }
      `}</style>
    </section>
  );
}
