import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "../data.js";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    notes: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const whatsappUrl =
    "https://wa.me/" +
    COMPANY_INFO.whatsappRaw +
    "?text=" +
    encodeURIComponent(COMPANY_INFO.whatsappPrefill);

  return (
    <section id="contact" className="section-spacing contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Contact Info & Value Props */}
          <div className="contact-info-col">
            <div className="eyebrow-badge">
              <span className="tag">Enquiries</span>
              <span>Ready for Take-Off?</span>
            </div>

            <h2 className="section-title">
              Tell Us Your Dream, We Build The Route
            </h2>

            <p className="section-desc" style={{ marginBottom: "32px" }}>
              Send an enquiry for a free custom itinerary proposal and transparent quote. Our local travel specialists respond within 24 hours.
            </p>

            {/* Contact Detail Cards */}
            <div className="contact-cards-stack">
              <a
                href={`tel:${COMPANY_INFO.whatsappRaw}`}
                className="contact-card-item card-white"
                aria-label={`Call ${COMPANY_INFO.phoneFormatted}`}
              >
                <div className="contact-icon-box">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="contact-card-label">Direct Telephone</div>
                  <div className="contact-card-val">{COMPANY_INFO.phoneFormatted}</div>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="contact-card-item card-white"
                aria-label={`Email ${COMPANY_INFO.email}`}
              >
                <div className="contact-icon-box" style={{ background: "#EFF6FF", color: "#2563EB" }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div className="contact-card-label">Email Inquiries</div>
                  <div className="contact-card-val">{COMPANY_INFO.email}</div>
                </div>
              </a>

              <div className="contact-card-item card-white">
                <div className="contact-icon-box" style={{ background: "#F0FDF4", color: "#16A34A" }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="contact-card-label">Headquarters</div>
                  <div className="contact-card-val" style={{ fontSize: "14px", fontWeight: "600" }}>
                    {COMPANY_INFO.address}
                  </div>
                </div>
              </div>
            </div>

            {/* Immediate WhatsApp Desk Banner */}
            <div className="contact-whatsapp-banner">
              <div>
                <div className="banner-title">Prefer immediate WhatsApp chat?</div>
                <div className="banner-desc">Our travel desk is active right now.</div>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                aria-label="Chat with NL Lanka on WhatsApp"
              >
                <MessageCircle size={16} />
                <span>Chat Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Custom Enquiry Form Card */}
          <div className="contact-form-card card-white">
            {/* Header bar */}
            <div className="form-card-topbar">
              <div>
                <div className="topbar-tag">Boarding Pass No. NL-2026</div>
                <div className="topbar-title">Custom Itinerary Enquiry</div>
              </div>
              <span className="topbar-plane">✈</span>
            </div>

            <div className="form-card-body">
              {submitted ? (
                <div className="submission-success-box">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="success-heading">
                    Thank You, {formData.name || "Traveller"}!
                  </h3>
                  <p className="success-message">
                    Your itinerary request has been submitted. A private trip coordinator will reach out shortly via email.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        dates: "",
                        notes: ""
                      });
                    }}
                    className="btn btn-outline btn-sm"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="enquiry-form">
                  <div className="form-group">
                    <label htmlFor="input-name">Lead Passenger Full Name *</label>
                    <input
                      id="input-name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      className="form-control"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="input-email">Email Address *</label>
                      <input
                        id="input-email"
                        type="email"
                        required
                        placeholder="sarah@example.com"
                        className="form-control"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="input-phone">WhatsApp / Phone</label>
                      <input
                        id="input-phone"
                        type="tel"
                        placeholder="+44 7123 456789"
                        className="form-control"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="input-dates">Estimated Travel Dates or Month</label>
                    <input
                      id="input-dates"
                      type="text"
                      placeholder="e.g. November 2026 (approx 10 days)"
                      className="form-control"
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="input-notes">Trip Preferences &amp; Destinations</label>
                    <textarea
                      id="input-notes"
                      rows={4}
                      placeholder="Tell us where you wish to go, number of travellers, or any special requests..."
                      className="form-control"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <span>Submit Itinerary Request</span>
                    <Send size={16} />
                  </button>

                  <div className="privacy-note">
                    We respect your privacy. No spam. 100% free itinerary design with zero obligation.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: #F4FBFF;
          border-bottom: 1px solid var(--border-subtle);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        .contact-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 32px;
        }

        .contact-card-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 20px;
          border-radius: 20px;
          border: 1px solid var(--border-subtle);
          background: #FFFFFF;
          text-decoration: none;
          box-shadow: 0 2px 10px rgba(11, 34, 56, 0.03);
          transition: all 0.2s ease;
        }

        .contact-card-item:hover {
          transform: translateY(-2px);
          border-color: var(--accent-sky);
          box-shadow: 0 10px 24px rgba(2, 132, 199, 0.08);
        }

        .contact-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--bg-pale-blue);
          color: var(--accent-strong-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-card-label {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-body);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 2px;
        }

        .contact-card-val {
          font-size: 16px;
          font-weight: 700;
          color: var(--text-heading);
        }

        .contact-whatsapp-banner {
          background: var(--bg-navy-dark);
          color: #FFFFFF;
          border-radius: 20px;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          box-shadow: 0 12px 32px rgba(8, 47, 73, 0.25);
        }

        .banner-title {
          font-size: 15px;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 2px;
        }

        .banner-desc {
          font-size: 13px;
          color: #94A3B8;
        }

        /* Right Column: Boarding Pass Form Card */
        .contact-form-card {
          border-radius: 28px;
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          box-shadow: 0 16px 48px -8px rgba(2, 132, 199, 0.12);
        }

        .form-card-topbar {
          background: var(--bg-navy-dark);
          color: #FFFFFF;
          padding: 20px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .topbar-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--accent-sky);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 2px;
        }

        .topbar-title {
          font-size: 18px;
          font-weight: 800;
          color: #FFFFFF;
        }

        .topbar-plane {
          font-size: 24px;
          color: var(--accent-sky);
        }

        .form-card-body {
          padding: 32px;
        }

        .enquiry-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: var(--text-heading);
          margin-bottom: 6px;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .privacy-note {
          font-size: 12px;
          color: var(--text-body);
          text-align: center;
          line-height: 1.5;
        }

        /* Success State */
        .submission-success-box {
          text-align: center;
          padding: 40px 16px;
        }

        .success-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(34, 197, 94, 0.12);
          color: #16A34A;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .success-heading {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-heading);
          margin-bottom: 10px;
        }

        .success-message {
          font-size: 15px;
          color: var(--text-body);
          max-width: 400px;
          margin: 0 auto 28px;
          line-height: 1.6;
        }

        @media (max-width: 960px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        @media (max-width: 520px) {
          .form-row-2 {
            grid-template-columns: 1fr;
          }
          .form-card-body {
            padding: 22px;
          }
        }
      `}</style>
    </section>
  );
}