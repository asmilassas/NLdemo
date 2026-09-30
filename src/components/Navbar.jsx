import React, { useState, useEffect } from "react";
import nlLogo from "../assets/nl-logo.png";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "../data.js";

const LINKS = [
  ["Journeys", "journeys"],
  ["Plan", "plan"],
  ["Services", "services"],
  ["Gallery", "gallery"],
  ["Reviews", "reviews"],
  ["Contact", "contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating Centered Capsule Navbar */}
      <header className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-capsule">
          {/* Brand Logo Artwork */}
          <a href="#home" className="nav-brand" aria-label="NL Lanka Travels & Tours Home">
            <img src={nlLogo} alt="NL Lanka Travels & Tours" className="nav-brand-logo" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="nav-links" aria-label="Main Navigation">
            {LINKS.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="nav-link">
                {label}
              </a>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="nav-actions">
            <a
              href={`tel:${COMPANY_INFO.whatsappRaw}`}
              className="nav-phone"
              aria-label={`Call NL Lanka at ${COMPANY_INFO.phoneFormatted}`}
            >
              <span className="phone-icon-box">
                <Phone size={13} />
              </span>
              <span className="phone-number">{COMPANY_INFO.phoneFormatted}</span>
            </a>

            <a href="#plan" className="nav-cta-btn">
              <span>Plan my trip</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            className="nav-burger-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {open && (
          <div className="mobile-menu-overlay" onClick={() => setOpen(false)}>
            <div className="mobile-menu-card" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-menu-header">
                <img src={nlLogo} alt="NL Lanka Travels & Tours" className="mobile-brand-logo" />
                <button
                  className="mobile-close-btn"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mobile-links-list">
                {LINKS.map(([label, id]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="mobile-nav-link"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                ))}
              </div>

              <div className="mobile-menu-footer">
                <a
                  href={`tel:${COMPANY_INFO.whatsappRaw}`}
                  className="mobile-phone-link"
                >
                  <Phone size={16} />
                  <span>{COMPANY_INFO.phoneFormatted}</span>
                </a>
                <a
                  href="#plan"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  onClick={() => setOpen(false)}
                >
                  Plan my trip
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <style>{`
        .nav-wrapper {
          position: fixed;
          top: 18px;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          padding: 0 16px;
          pointer-events: none;
          transition: transform 0.25s ease;
        }

        .nav-capsule {
          pointer-events: auto;
          background: rgba(8, 47, 73, 0.94);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 9999px;
          padding: 6px 10px 6px 14px;
          display: flex;
          align-items: center;
          gap: 18px;
          box-shadow: 0 14px 34px -8px rgba(8, 47, 73, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.08) inset;
          max-width: 100%;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-wrapper.scrolled .nav-capsule {
          background: rgba(8, 47, 73, 0.98);
          box-shadow: 0 16px 40px -6px rgba(8, 47, 73, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.12) inset;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
          padding: 2px 4px 2px 2px;
        }

        .nav-brand-logo {
          height: 38px;
          width: auto;
          max-width: 175px;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.25));
          transition: transform 0.2s ease;
        }

        .nav-brand:hover .nav-brand-logo {
          transform: scale(1.03);
        }

        .mobile-brand-logo {
          height: 36px;
          width: auto;
          max-width: 165px;
          object-fit: contain;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link {
          font-size: 13.5px;
          font-weight: 500;
          color: #CBD5E1;
          padding: 8px 14px;
          border-radius: 9999px;
          transition: all 0.18s ease;
          text-decoration: none;
        }

        .nav-link:hover {
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.08);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-left: 14px;
          border-left: 1px solid rgba(255, 255, 255, 0.14);
        }

        .nav-phone {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          font-weight: 600;
          color: #E0F2FE;
          text-decoration: none;
          transition: color 0.18s ease;
        }

        .nav-phone:hover {
          color: var(--accent-sky);
        }

        .phone-icon-box {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(56, 189, 248, 0.15);
          color: var(--accent-sky);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: var(--accent-sky);
          color: var(--bg-navy-dark);
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 700;
          padding: 8px 18px;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 14px rgba(56, 189, 248, 0.3);
        }

        .nav-cta-btn:hover {
          background-color: #FFFFFF;
          color: var(--bg-navy-dark);
          transform: scale(1.02);
          box-shadow: 0 6px 18px rgba(255, 255, 255, 0.4);
        }

        .nav-burger-btn {
          display: none;
          background: none;
          border: none;
          color: #FFFFFF;
          cursor: pointer;
          padding: 6px;
          border-radius: 8px;
        }

        /* Mobile Menu */
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(11, 34, 56, 0.6);
          backdrop-filter: blur(8px);
          pointer-events: auto;
          z-index: 1001;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px;
          animation: fadeIn 0.2s ease-out;
        }

        .mobile-menu-card {
          width: 100%;
          max-width: 380px;
          background: var(--bg-navy-dark);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.3);
          margin-top: 10px;
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-close-btn {
          background: rgba(255, 255, 255, 0.08);
          border: none;
          color: #FFFFFF;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .mobile-links-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 16px 0;
        }

        .mobile-nav-link {
          font-size: 16px;
          font-weight: 600;
          color: #E2E8F0;
          padding: 10px 14px;
          border-radius: 12px;
          text-decoration: none;
          transition: background 0.15s ease;
        }

        .mobile-nav-link:hover {
          background: rgba(255, 255, 255, 0.08);
          color: var(--accent-sky);
        }

        .mobile-menu-footer {
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .mobile-phone-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: var(--accent-sky);
          font-size: 14.5px;
          font-weight: 600;
          text-decoration: none;
        }

        @media (max-width: 960px) {
          .nav-links, .nav-actions {
            display: none;
          }
          .nav-burger-btn {
            display: block;
          }
          .nav-capsule {
            padding: 6px 10px 6px 12px;
            gap: 12px;
          }
        }

        @media (max-width: 480px) {
          .phone-number {
            display: none;
          }
        }
      `}</style>
    </>
  );
}