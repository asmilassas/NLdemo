import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, Star, ShieldCheck, Check, Plane, MapPin, Clock, Compass, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
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

const HERO_BG_SLIDES = [
  {
    image: "/images/hero/sigiriya-rock-fortress.jpg",
    title: "Sigiriya Rock Fortress",
    location: "Cultural Triangle · UNESCO World Heritage",
    subtitle: "Climb the ancient Lion Rock citadel at sunrise",
    route: "CMB → SIGIRIYA",
    tag: "Ancient Wonder",
    objectPosition: "center 36%"
  },
  {
    image: "/images/hero/ella-nine-arch-bridge.jpg",
    title: "Nine Arch Bridge",
    location: "Ella Highlands · Demodara Gap",
    subtitle: "Iconic colonial stone viaduct in misty cloud forests",
    route: "KDY → ELLA",
    tag: "Scenic Hill Train",
    objectPosition: "center 42%"
  },
  {
    image: "/images/hero/kandy-dalada-maligawa.jpg",
    title: "Temple of the Tooth Relic",
    location: "Kandy · Sacred Royal Capital",
    subtitle: "Revered Buddhist heritage surrounded by tea-carpeted hills",
    route: "SIGIRIYA → KANDY",
    tag: "Living Heritage",
    objectPosition: "center 40%"
  },
  {
    image: "/images/hero/nuwara-eliya-tea.jpg",
    title: "Ceylon Tea Terraces",
    location: "Nuwara Eliya · Little England",
    subtitle: "Emerald highland plantations, cool mist and waterfalls",
    route: "KANDY → NUWARA ELIYA",
    tag: "Highland Estates",
    objectPosition: "center 40%"
  },
  {
    image: "/images/hero/galle-fort-lighthouse.jpg",
    title: "Historic Galle Fort Ramparts",
    location: "Southern Coast · UNESCO Living Fortress",
    subtitle: "Dutch colonial bastions and ocean sunsets",
    route: "MIRISSA → GALLE",
    tag: "Colonial Coast",
    objectPosition: "center 44%"
  },
  {
    image: "/images/hero/mirissa-coconut-tree-hill.jpg",
    title: "Coconut Tree Hill & Mirissa",
    location: "Southern Province · Palm Bay",
    subtitle: "Turquoise Indian Ocean swells and whale safaris",
    route: "YALA → MIRISSA",
    tag: "Tropical Beaches",
    objectPosition: "center 46%"
  },
  {
    image: "/images/hero/bentota-madu-river.jpg",
    title: "Madu River Safari & Bentota",
    location: "South-West Coast · Mangrove Lagoon",
    subtitle: "Boat safaris through mangrove tunnels",
    route: "COLOMBO → BENTOTA",
    tag: "Coastal Lagoon",
    objectPosition: "center 50%"
  },
  {
    image: "/images/hero/colombo-lotus-tower.jpg",
    title: "Colombo Skyline & Lotus Tower",
    location: "Western Province · Commercial Capital",
    subtitle: "Vibrant seaside promenade and modern cityscapes",
    route: "CMB AIRPORT → COLOMBO",
    tag: "Urban Capital",
    objectPosition: "center 40%"
  },
  {
    image: "/images/hero/negombo-dutch-canal.jpg",
    title: "Negombo Lagoon & Dutch Canal",
    location: "Negombo · Our Hometown (15 min from CMB)",
    subtitle: "Traditional catamarans and beachside seafood",
    route: "CMB AIRPORT → NEGOMBO",
    tag: "Negombo Roots",
    objectPosition: "center 50%"
  }
];

export default function Hero() {
  const [dest, setDest] = useState("Anywhere in Sri Lanka");
  const [when, setWhen] = useState("Any month");
  const [pax, setPax] = useState("2");
  const [slideIdx, setSlideIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  // Auto-advance slides every 5.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      // Fade out text first
      setTextVisible(false);
      // After text fade-out, change slide
      setTimeout(() => {
        setSlideIdx((prev) => (prev + 1) % HERO_BG_SLIDES.length);
        // Fade text back in
        setTimeout(() => setTextVisible(true), 100);
      }, 400);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const currentSlide = HERO_BG_SLIDES[slideIdx];

  const prevSlide = useCallback(() => {
    setTextVisible(false);
    setTimeout(() => {
      setSlideIdx((prev) => (prev - 1 + HERO_BG_SLIDES.length) % HERO_BG_SLIDES.length);
      setTimeout(() => setTextVisible(true), 100);
    }, 300);
  }, []);

  const nextSlide = useCallback(() => {
    setTextVisible(false);
    setTimeout(() => {
      setSlideIdx((prev) => (prev + 1) % HERO_BG_SLIDES.length);
      setTimeout(() => setTextVisible(true), 100);
    }, 300);
  }, []);

  const msg = `Hello NL Lanka, I would like a free quote: ${dest}, ${when}, ${pax} traveller(s).`;
  const wa = "https://wa.me/" + COMPANY_INFO.whatsappRaw + "?text=" + encodeURIComponent(msg);

  return (
    <section id="home" className="hero-cinematic">
      {/* ─── Full-width Background Image Slideshow ─── */}
      <div className="hero-bg-container">
        {HERO_BG_SLIDES.map((slide, idx) => (
          <div
            key={slide.image}
            className={`hero-bg-slide ${idx === slideIdx ? "active" : ""}`}
            aria-hidden={idx !== slideIdx}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="hero-bg-img"
              style={{ objectPosition: slide.objectPosition }}
              loading={idx === 0 ? "eager" : "lazy"}
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* ─── Light Readability Overlay ─── */}
      <div className="hero-readability-overlay"></div>

      {/* ─── Bottom Fade to Page Background ─── */}
      <div className="hero-bottom-fade"></div>

      {/* ─── Hero Content (z-indexed above background) ─── */}
      <div className="container hero-content-layer">

        {/* Current Destination Tag (top) */}
        <div className={`hero-destination-tag ${textVisible ? "visible" : ""}`}>
          <Sparkles size={13} color="#38BDF8" />
          <span className="hero-dest-tag-text">{currentSlide.tag}</span>
          <span className="hero-dest-tag-separator">·</span>
          <span className="hero-dest-tag-location">{currentSlide.location}</span>
        </div>

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

        {/* Slide-specific context line */}
        <div className={`hero-slide-context ${textVisible ? "visible" : ""}`}>
          <MapPin size={14} color="#0284C7" />
          <span className="hero-context-title">{currentSlide.title}</span>
          <span className="hero-context-sep">—</span>
          <span className="hero-context-sub">{currentSlide.subtitle}</span>
        </div>

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

        {/* Slide Navigation & Indicators */}
        <div className="hero-slide-nav">
          <button
            type="button"
            onClick={prevSlide}
            className="hero-nav-arrow"
            aria-label="Previous destination"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="hero-dots">
            {HERO_BG_SLIDES.map((slide, idx) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => {
                  setTextVisible(false);
                  setTimeout(() => {
                    setSlideIdx(idx);
                    setTimeout(() => setTextVisible(true), 100);
                  }, 300);
                }}
                className={`hero-dot ${idx === slideIdx ? "active" : ""}`}
                aria-label={`View ${slide.title}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            className="hero-nav-arrow"
            aria-label="Next destination"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* ─── Showcase Panel (overlapping into hero bottom) ─── */}
      <div className="container hero-showcase-wrapper">
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

          {/* Floating Card: Airport Pickup (Top-Right) */}
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

          {/* Floating Card: 100% Custom (Left-Center) */}
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
          <div
            className="hero-showcase-panel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Visual Header Strip with Dynamic Route Information */}
            <div className="showcase-topbar">
              <div className="showcase-status">
                <span className="live-dot"></span>
                <span>Private Itinerary Showcase · {currentSlide.title}</span>
              </div>
              <div className="showcase-route-group">
                <span className="showcase-tag-badge">{currentSlide.tag}</span>
                <span className="showcase-code">{currentSlide.route}</span>
              </div>
            </div>

            {/* Visual Photo Area with Loop Transition */}
            <div className="showcase-photo-container">
              {HERO_BG_SLIDES.map((slide, idx) => (
                <div
                  key={slide.image}
                  className={`showcase-slide ${idx === slideIdx ? "active" : ""}`}
                  aria-hidden={idx !== slideIdx}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="img-cover slide-img"
                    style={{ objectPosition: slide.objectPosition }}
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                  <div className="photo-scrim"></div>
                </div>
              ))}

              {/* Slide Overlay Text Caption */}
              <div className="slide-content-overlay">
                <div className={`slide-text-group ${textVisible ? "visible" : ""}`}>
                  <div className="slide-tag-pill">
                    <Sparkles size={12} color="var(--accent-sky)" />
                    <span>{currentSlide.tag}</span>
                  </div>
                  <h3 className="slide-title-text">{currentSlide.title}</h3>
                  <div className="slide-subtitle-row">
                    <div className="photo-caption-tag">
                      <MapPin size={13} color="var(--accent-sky)" />
                      <span>{currentSlide.location}</span>
                    </div>
                    <span className="slide-desc-pill">{currentSlide.subtitle}</span>
                  </div>
                </div>
              </div>

              {/* Prev / Next Slide Navigation Controls */}
              <div className="slide-nav-controls">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="slide-arrow-btn"
                  aria-label="Previous destination"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="slide-arrow-btn"
                  aria-label="Next destination"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Slide Position Indicator Dots */}
              <div className="slide-dots-container">
                {HERO_BG_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => {
                      setTextVisible(false);
                      setTimeout(() => {
                        setSlideIdx(idx);
                        setTimeout(() => setTextVisible(true), 100);
                      }, 300);
                    }}
                    className={`slide-dot-pill ${idx === slideIdx ? "active" : ""}`}
                    aria-label={`View ${slide.title}`}
                  />
                ))}
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
        /* ═══════════════════════════════════════════════
           CINEMATIC HERO WITH FULL-BACKGROUND SLIDESHOW
           ═══════════════════════════════════════════════ */

        .hero-cinematic {
          position: relative;
          min-height: 780px;
          overflow: hidden;
          background: #0B2238;
        }

        /* ── Background Slides ── */
        .hero-bg-container {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-bg-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1400ms cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity, transform;
        }

        .hero-bg-slide.active {
          opacity: 1;
        }

        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1);
          transition: transform 6000ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-bg-slide.active .hero-bg-img {
          transform: scale(1.04);
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-bg-slide {
            transition: opacity 300ms ease;
          }
          .hero-bg-img {
            transition: none !important;
          }
          .hero-bg-slide.active .hero-bg-img {
            transform: scale(1) !important;
          }
        }

        /* ── Light Readability Overlay ── */
        .hero-readability-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(244, 250, 253, 0.82) 0%,
            rgba(244, 250, 253, 0.68) 30%,
            rgba(238, 248, 253, 0.72) 60%,
            rgba(241, 249, 252, 0.80) 80%,
            rgba(244, 251, 255, 0.92) 100%
          );
          pointer-events: none;
        }

        /* ── Bottom Fade to Page BG ── */
        .hero-bottom-fade {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 200px;
          z-index: 3;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(244, 251, 255, 0.5) 30%,
            rgba(244, 251, 255, 0.9) 70%,
            #F4FBFF 100%
          );
          pointer-events: none;
        }

        /* ── Hero Content Layer ── */
        .hero-content-layer {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding-top: 130px;
          padding-bottom: 40px;
        }

        /* ── Destination Context Tag (top, animates per slide) ── */
        .hero-destination-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(8, 47, 73, 0.06);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(214, 234, 245, 0.6);
          padding: 5px 16px;
          border-radius: 9999px;
          margin-bottom: 14px;
          font-size: 12.5px;
          font-weight: 600;
          color: var(--text-body);
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 500ms ease, transform 500ms ease;
        }

        .hero-destination-tag.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-dest-tag-text {
          color: var(--accent-strong-blue);
          font-weight: 800;
        }

        .hero-dest-tag-separator {
          color: var(--border-subtle);
        }

        .hero-dest-tag-location {
          color: var(--text-body);
        }

        /* ── Eyebrow Pill ── */
        .eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.88);
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

        /* ── Hero Title ── */
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

        /* ── Hero Subtitle ── */
        .hero-subtitle {
          font-size: clamp(16px, 2vw, 18px);
          color: var(--text-body);
          max-width: 600px;
          margin: 0 auto 20px;
          line-height: 1.6;
          font-weight: 500;
        }

        /* ── Slide Context Line (changes per slide) ── */
        .hero-slide-context {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(214, 234, 245, 0.5);
          padding: 8px 20px;
          border-radius: 9999px;
          margin-bottom: 32px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-heading);
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 500ms ease, transform 500ms ease;
        }

        .hero-slide-context.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-context-title {
          color: var(--accent-strong-blue);
          font-weight: 800;
        }

        .hero-context-sep {
          color: var(--border-subtle);
          font-weight: 400;
        }

        .hero-context-sub {
          color: var(--text-body);
          font-weight: 500;
        }

        /* ── Hero Actions ── */
        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        /* ── Stats Row ── */
        .hero-stats-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .hero-stat-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
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

        /* ── Slide Navigation (dots + arrows) below stats ── */
        .hero-slide-nav {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .hero-nav-arrow {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid var(--border-subtle);
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          color: var(--text-heading);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .hero-nav-arrow:hover {
          background: var(--accent-sky);
          color: #FFFFFF;
          border-color: var(--accent-sky);
          transform: scale(1.08);
        }

        .hero-dots {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          border: none;
          background: rgba(8, 47, 73, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .hero-dot.active {
          width: 24px;
          background: var(--accent-sky);
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
        }

        /* ── Showcase Panel Wrapper ── */
        .hero-showcase-wrapper {
          position: relative;
          z-index: 10;
          padding-bottom: 80px;
        }

        .hero-panel-wrapper {
          position: relative;
          width: 100%;
          max-width: 1060px;
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
          animation: live-pulse 2s ease-in-out infinite;
        }

        @keyframes live-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
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

        /* ── Photo Area with Loop ── */
        .showcase-photo-container {
          position: relative;
          height: 420px;
          overflow: hidden;
          background: var(--bg-navy-dark);
        }

        .showcase-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1200ms cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        .showcase-slide.active {
          opacity: 1;
          pointer-events: auto;
        }

        .slide-img {
          transform: scale(1);
          transition: transform 6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .showcase-slide.active .slide-img {
          transform: scale(1.05);
        }

        .photo-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(8, 47, 73, 0.1) 0%, rgba(8, 47, 73, 0.3) 40%, rgba(8, 47, 73, 0.75) 100%);
        }

        /* ── Overlay Text ── */
        .slide-content-overlay {
          position: absolute;
          left: 28px;
          bottom: 24px;
          right: 28px;
          z-index: 5;
          display: flex;
          flex-direction: column;
          gap: 6px;
          color: #FFFFFF;
          pointer-events: none;
        }

        .slide-text-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 500ms ease, transform 500ms ease;
        }

        .slide-text-group.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(8, 47, 73, 0.85);
          backdrop-filter: blur(10px);
          color: #FFFFFF;
          font-size: 11.5px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          width: fit-content;
        }

        .slide-title-text {
          font-size: clamp(22px, 3.2vw, 32px);
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.15;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }

        .slide-subtitle-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .photo-caption-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          color: var(--text-heading);
          font-size: 12.5px;
          font-weight: 700;
          padding: 5px 14px;
          border-radius: 9999px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .slide-desc-pill {
          background: rgba(8, 47, 73, 0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #E2E8F0;
          font-size: 12.5px;
          font-weight: 500;
          padding: 5px 14px;
          border-radius: 9999px;
        }

        /* ── Slide Nav Controls (Prev/Next) ── */
        .slide-nav-controls {
          position: absolute;
          right: 24px;
          top: 20px;
          z-index: 6;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .slide-arrow-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(8, 47, 73, 0.75);
          backdrop-filter: blur(10px);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .slide-arrow-btn:hover {
          background: var(--accent-sky);
          color: var(--bg-navy-dark);
          border-color: var(--accent-sky);
          transform: scale(1.06);
        }

        /* ── Position Dots ── */
        .slide-dots-container {
          position: absolute;
          right: 24px;
          bottom: 24px;
          z-index: 6;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .slide-dot-pill {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          border: none;
          background: rgba(255, 255, 255, 0.45);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .slide-dot-pill.active {
          width: 22px;
          background: var(--accent-sky);
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.6);
        }

        /* ── Quick Quote Box ── */
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

        /* ── Floating Overlapping Cards ── */
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

        /* ═══ Responsive ═══ */

        @media (max-width: 1160px) {
          .float-top-left { left: 8px; top: 12px; }
          .float-top-right { right: 8px; top: 12px; }
          .float-bottom-left { display: none; }
        }

        @media (max-width: 900px) {
          .hero-cinematic {
            min-height: 680px;
          }
          .quote-fields-grid {
            grid-template-columns: 1fr 1fr;
          }
          .hero-float-card {
            display: none;
          }
          .showcase-photo-container {
            height: 320px;
          }
          .hero-slide-context {
            font-size: 12.5px;
            padding: 6px 14px;
          }
        }

        @media (max-width: 640px) {
          .hero-cinematic {
            min-height: 620px;
          }
          .hero-content-layer {
            padding-top: 100px;
          }
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
          .slide-content-overlay {
            left: 16px;
            bottom: 16px;
            right: 16px;
          }
          .slide-desc-pill {
            display: none;
          }
          .slide-dots-container {
            display: none;
          }
          .hero-destination-tag {
            font-size: 11px;
            padding: 4px 12px;
            gap: 5px;
          }
          .hero-slide-context {
            font-size: 11.5px;
            padding: 6px 12px;
            gap: 6px;
            flex-wrap: wrap;
            justify-content: center;
          }
          .hero-context-sep,
          .hero-context-sub {
            display: none;
          }
        }

        @media (max-width: 560px) {
          .hero-content-layer {
            padding-top: 90px;
            padding-bottom: 24px;
          }
          .quote-fields-grid {
            grid-template-columns: 1fr;
          }
          .showcase-photo-container {
            height: 250px;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions .btn {
            width: 100%;
          }
          .hero-slide-nav {
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
}