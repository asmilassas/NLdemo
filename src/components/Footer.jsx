import React from "react";
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import nlLogo from "../assets/nl-logo.png";
import { COMPANY_INFO, SOCIAL_LINKS } from "../data.js";

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const platformIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  WhatsApp: MessageCircle
};

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Journeys", href: "#journeys" },
    { label: "Trip Planner", href: "#plan" },
    { label: "About Us", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ];

  const serviceLinks = [
    "Private Custom Tours",
    "Chauffeur-Guide Service",
    "Airport Transfers",
    "Hotel & Resort Booking",
    "Honeymoon Packages"
  ];

  return (
    <footer className="site-footer">
      {/* Pre-Footer Call to Action Strip (matching reference's high impact banner) */}
      <div className="pre-footer-banner">
        <div className="container">
          <div className="pre-footer-content">
            <h2 className="pre-footer-heading">Your Sri Lanka Journey Starts Here</h2>
            <p className="pre-footer-sub">
              Build your own custom itinerary or chat with our travel desk for a free expert consultation.
            </p>
            <div className="pre-footer-actions">
              <a href="#plan" className="btn btn-primary btn-lg">
                <span>Customize Your Trip</span>
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-secondary btn-lg">
                <span>Talk to Our Team</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer */}
      <div className="main-footer-body">
        <div className="container">
          <div className="footer-columns-grid">
            {/* Col 1: Brand & Tagline */}
            <div className="footer-brand-col">
              <div className="footer-brand-header">
                <img
                  src={nlLogo}
                  alt="NL Lanka Travels & Tours"
                  style={{
                    height: "46px",
                    width: "auto",
                    maxWidth: "200px",
                    objectFit: "contain",
                    display: "block",
                    filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))"
                  }}
                />
              </div>

              <p className="footer-brand-desc">
                {COMPANY_INFO.tagline}. Based in {COMPANY_INFO.location}, delivering bespoke private journeys across all nine provinces of Sri Lanka since 2014.
              </p>

              {/* Social Media Links */}
              <div className="footer-social-row">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = platformIcons[social.platform];
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="footer-social-pill"
                    >
                      {Icon ? <Icon size={17} /> : null}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="footer-col-heading">Quick Links</h4>
              <ul className="footer-links-list">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4 className="footer-col-heading">Services</h4>
              <ul className="footer-links-list">
                {serviceLinks.map((svc) => (
                  <li key={svc}>
                    <a href="#services" className="footer-link">
                      {svc}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h4 className="footer-col-heading">Contact Us</h4>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <Phone size={16} color="var(--accent-sky)" />
                  <a href={`tel:${COMPANY_INFO.whatsappRaw}`} className="footer-contact-link">
                    {COMPANY_INFO.phoneFormatted}
                  </a>
                </div>

                <div className="footer-contact-item">
                  <Mail size={16} color="var(--accent-sky)" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="footer-contact-link">
                    {COMPANY_INFO.email}
                  </a>
                </div>

                <div className="footer-contact-item">
                  <MapPin size={16} color="var(--accent-sky)" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span className="footer-contact-text">
                    {COMPANY_INFO.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <span>&copy; {new Date().getFullYear()} {COMPANY_INFO.fullName}. All rights reserved.</span>
          <span>Crafted with care in Negombo, Sri Lanka</span>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: var(--bg-navy-dark);
          color: #FFFFFF;
          position: relative;
        }

        /* Pre-Footer Banner */
        .pre-footer-banner {
          background: #FFFFFF;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          padding: 64px 0;
          text-align: center;
        }

        .pre-footer-content {
          max-width: 640px;
          margin: 0 auto;
        }

        .pre-footer-heading {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          color: var(--text-heading);
          margin-bottom: 12px;
          letter-spacing: -0.025em;
        }

        .pre-footer-sub {
          font-size: 16px;
          color: var(--text-body);
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .pre-footer-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* Main Footer Body */
        .main-footer-body {
          padding: 72px 0 48px;
        }

        .footer-columns-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 0.8fr 1fr;
          gap: 48px;
        }

        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .footer-brand-desc {
          font-size: 14px;
          color: #CBD5E1;
          line-height: 1.6;
          max-width: 320px;
          margin-bottom: 24px;
        }

        .footer-social-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-social-pill {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .footer-social-pill:hover {
          background: var(--accent-sky);
          border-color: var(--accent-sky);
          color: var(--bg-navy-dark);
          transform: translateY(-2px);
        }

        .footer-col-heading {
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--accent-sky);
          margin-bottom: 20px;
        }

        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          font-size: 14px;
          color: #CBD5E1;
          text-decoration: none;
          transition: color 0.18s ease;
        }

        .footer-link:hover {
          color: #FFFFFF;
        }

        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .footer-contact-link {
          font-size: 14px;
          color: #E2E8F0;
          text-decoration: none;
          transition: color 0.18s ease;
        }

        .footer-contact-link:hover {
          color: var(--accent-sky);
        }

        .footer-contact-text {
          font-size: 13.5px;
          color: #CBD5E1;
          line-height: 1.5;
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 24px 0;
        }

        .footer-bottom-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 13px;
          color: #94A3B8;
        }

        @media (max-width: 960px) {
          .footer-columns-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 560px) {
          .footer-columns-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}