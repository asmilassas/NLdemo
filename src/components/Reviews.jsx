import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { REVIEWS } from "../data.js";

export default function Reviews() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevReview = () => {
    setActiveIdx((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const nextReview = () => {
    setActiveIdx((prev) => (prev + 1) % REVIEWS.length);
  };

  return (
    <section id="reviews" className="section-spacing reviews-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center">
          <div className="eyebrow-badge">
            <span className="tag">Testimonials</span>
            <span>Guest Stories</span>
          </div>
          <h2 className="section-title">Loved by Travellers Worldwide</h2>
          <p className="section-desc center">
            Real feedback from guests who explored Sri Lanka with our private chauffeur-guides.
          </p>
        </div>

        {/* 3-Column / Responsive Cards Grid (like reference) */}
        <div className="reviews-cards-grid">
          {REVIEWS.map((r, idx) => (
            <div
              key={r.author}
              className={`review-card card-white ${idx === activeIdx ? "highlight-active" : ""}`}
            >
              <div className="stars-row">
                {Array.from({ length: r.stars }).map((_, k) => (
                  <Star
                    key={k}
                    size={16}
                    fill="#F59E0B"
                    color="#F59E0B"
                    strokeWidth={0}
                  />
                ))}
              </div>

              <blockquote className="review-quote-text">
                “{r.quote}”
              </blockquote>

              <div className="review-author-row">
                <div className="author-avatar-initials">
                  {r.author.charAt(0)}
                </div>
                <div>
                  <div className="author-name">{r.author}</div>
                  <div className="author-details">
                    <span>{r.country}</span>
                    <span className="details-dot">•</span>
                    <span>{r.trip}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Carousel Indicator */}
        <div className="reviews-carousel-nav">
          <button
            onClick={prevReview}
            className="carousel-arrow-btn"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="carousel-dots">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                className={`dot-pill ${idx === activeIdx ? "active" : ""}`}
                onClick={() => setActiveIdx(idx)}
                aria-label={`Jump to review ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextReview}
            className="carousel-arrow-btn"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .reviews-section {
          background: #FFFFFF;
          border-bottom: 1px solid var(--border-subtle);
        }

        .reviews-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .review-card {
          padding: 36px 32px;
          border-radius: 28px;
          border: 1px solid var(--border-subtle);
          background: #FFFFFF;
          box-shadow: 0 4px 24px rgba(11, 34, 56, 0.03);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .review-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px -10px rgba(2, 132, 199, 0.12);
          border-color: var(--accent-sky);
        }

        .stars-row {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 20px;
        }

        .review-quote-text {
          font-size: 16px;
          line-height: 1.65;
          color: var(--text-heading);
          font-weight: 500;
          margin: 0 0 28px 0;
          flex: 1;
        }

        .review-author-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 20px;
          border-top: 1px solid var(--border-subtle);
        }

        .author-avatar-initials {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-pale-blue);
          color: var(--accent-strong-blue);
          font-family: var(--font-sans);
          font-weight: 800;
          font-size: 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .author-name {
          font-size: 15.5px;
          font-weight: 800;
          color: var(--text-heading);
          line-height: 1.2;
          margin-bottom: 3px;
        }

        .author-details {
          font-size: 12.5px;
          color: var(--text-body);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .details-dot {
          color: #94A3B8;
        }

        .reviews-carousel-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 40px;
        }

        .carousel-arrow-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid var(--border-subtle);
          background: #FFFFFF;
          color: var(--text-heading);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .carousel-arrow-btn:hover {
          background: var(--bg-pale-blue);
          border-color: var(--accent-strong-blue);
          color: var(--accent-strong-blue);
        }

        .carousel-dots {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dot-pill {
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          border: none;
          background: var(--border-subtle);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .dot-pill.active {
          width: 24px;
          background: var(--accent-strong-blue);
        }

        @media (max-width: 900px) {
          .reviews-cards-grid {
            grid-template-columns: 1fr;
          }
          .review-card {
            padding: 26px 22px;
          }
        }
      `}</style>
    </section>
  );
}
