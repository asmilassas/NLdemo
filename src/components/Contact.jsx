import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data.js';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const whatsappUrl =
    'https://wa.me/' +
    COMPANY_INFO.whatsappRaw +
    '?text=' +
    encodeURIComponent(COMPANY_INFO.whatsappPrefill);

  return (
    <section
      id="contact"
      className="section-spacing"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '56px',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* ── Left Column: Contact Info ── */}
          <div>
            <div className="eyebrow">
              <span>Ready For Take-Off?</span>
            </div>
            <h2 className="section-title">
              Tell Us Your Dream, We Build The Route
            </h2>
            <p className="section-desc" style={{ marginBottom: '32px' }}>
              Send an enquiry for a free custom itinerary proposal and
              transparent quote. Our local travel specialists respond within 24
              hours.
            </p>

            {/* Contact detail cards */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginBottom: '36px'
              }}
            >
              {/* Phone */}
              <ContactCard
                icon={<Phone size={20} />}
                iconBg="var(--royal-light)"
                iconColor="var(--royal)"
                label="Direct Telephone"
                href={'tel:' + COMPANY_INFO.whatsappRaw}
                value={COMPANY_INFO.phoneFormatted}
              />
              {/* Email */}
              <ContactCard
                icon={<Mail size={20} />}
                iconBg="var(--gold-tint)"
                iconColor="var(--gold-text)"
                label="Email Inquiries"
                href={'mailto:' + COMPANY_INFO.email}
                value={COMPANY_INFO.email}
              />
              {/* Address */}
              <ContactCard
                icon={<MapPin size={20} />}
                iconBg="var(--royal-light)"
                iconColor="var(--royal)"
                label="Headquarters"
                value={COMPANY_INFO.address}
              />
            </div>

            {/* WhatsApp Banner */}
            <div
              style={{
                backgroundColor: 'var(--bg-navy)',
                color: '#FFFFFF',
                borderRadius: '16px',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                flexWrap: 'wrap'
              }}
            >
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700 }}>
                  Prefer immediate WhatsApp chat?
                </div>
                <div style={{ fontSize: '13px', color: '#94A3B8' }}>
                  Our travel desk is active right now.
                </div>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                aria-label="Chat with NL Lanka on WhatsApp"
              >
                <MessageCircle size={16} />
                <span>Chat Now</span>
              </a>
            </div>
          </div>

          {/* ── Right Column: Enquiry Form ── */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-md)',
              overflow: 'hidden'
            }}
          >
            {/* Boarding-pass header */}
            <div
              style={{
                backgroundColor: 'var(--royal)',
                color: '#FFFFFF',
                padding: '18px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'var(--gold)'
                  }}
                >
                  Boarding Pass No. NL-2026
                </div>
                <div
                  style={{
                    fontSize: '17px',
                    fontWeight: 700,
                    fontFamily: "'Fraunces', serif"
                  }}
                >
                  Custom Itinerary Enquiry
                </div>
              </div>
              <span style={{ fontSize: '20px', color: 'var(--gold)' }}>✈</span>
            </div>

            <div style={{ padding: '32px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(34, 197, 94, 0.12)',
                      color: '#16A34A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px'
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>
                  <h3
                    style={{
                      fontSize: '24px',
                      color: 'var(--royal)',
                      marginBottom: '8px'
                    }}
                  >
                    Thank You, {formData.name || 'Traveller'}!
                  </h3>
                  <p
                    style={{
                      fontSize: '15px',
                      color: 'var(--text-muted)',
                      maxWidth: '400px',
                      margin: '0 auto 24px'
                    }}
                  >
                    Your itinerary request has been submitted. A private trip
                    coordinator will reach out shortly via email.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        dates: '',
                        notes: ''
                      });
                    }}
                    className="btn btn-outline btn-sm"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px'
                  }}
                >
                  <Field label="Lead Passenger Full Name *">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      className="form-control"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </Field>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px'
                    }}
                    className="form-row"
                  >
                    <Field label="Email Address *">
                      <input
                        type="email"
                        required
                        placeholder="sarah@example.com"
                        className="form-control"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </Field>
                    <Field label="WhatsApp / Phone">
                      <input
                        type="tel"
                        placeholder="+44 7123 456789"
                        className="form-control"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </Field>
                  </div>

                  <Field label="Estimated Travel Dates or Month">
                    <input
                      type="text"
                      placeholder="e.g. November 2026 (approx 10 days)"
                      className="form-control"
                      value={formData.dates}
                      onChange={(e) =>
                        setFormData({ ...formData, dates: e.target.value })
                      }
                    />
                  </Field>

                  <Field label="Trip Preferences & Destinations">
                    <textarea
                      id="inquiry-notes"
                      rows={4}
                      placeholder="Tell us where you wish to go, number of travellers, or any special requests..."
                      className="form-control"
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                    />
                  </Field>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '15px' }}
                  >
                    <span>Submit Itinerary Request</span>
                    <Send size={16} />
                  </button>

                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                      textAlign: 'center'
                    }}
                  >
                    We respect your privacy. No spam. 100% free itinerary design
                    with zero obligation.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 500px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ── Small helper components ── */

function Field({ label, children }) {
  return (
    <div>
      <label
        style={{
          display: 'block',
          fontSize: '13.5px',
          fontWeight: 600,
          marginBottom: '6px'
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function ContactCard({ icon, iconBg, iconColor, label, href, value }) {
  const inner = (
    <>
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '12px',
          backgroundColor: iconBg,
          color: iconColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontSize: '12px',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}
        >
          {label}
        </div>
        <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--royal)' }}>
          {value}
        </div>
      </div>
    </>
  );

  const wrapStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px',
    backgroundColor: '#FFFFFF',
    borderRadius: '14px',
    border: '1px solid var(--border-light)',
    boxShadow: 'var(--shadow-sm)'
  };

  if (href) {
    return (
      <a href={href} style={wrapStyle}>
        {inner}
      </a>
    );
  }
  return <div style={wrapStyle}>{inner}</div>;
}
