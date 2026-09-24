import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import logo from '../assets/logo.png';
import { COMPANY_INFO, SOCIAL_LINKS } from '../data.js';

/* Map platform names to Lucide icons */
/* lucide-react v1 removed brand icons, so these are inline SVGs */
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

const platformIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  TikTok: null, // will use custom SVG below
  WhatsApp: MessageCircle
};

function TikTokIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Journeys', href: '#journeys' },
    { label: 'Trip Planner', href: '#plan' },
    { label: 'About Us', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  const serviceLinks = [
    'Private Custom Tours',
    'Chauffeur-Guide Service',
    'Airport Transfers',
    'Hotel & Resort Booking',
    'Honeymoon Packages'
  ];

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-navy)',
        color: '#FFFFFF',
        position: 'relative'
      }}
    >
      {/* Pre-footer CTA strip */}
      <div
        style={{
          backgroundColor: 'var(--royal)',
          padding: '48px 0',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 700,
              marginBottom: '12px',
              color: '#FFFFFF'
            }}
          >
            Your Sri Lanka Journey Starts Here
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#C8DBFA',
              marginBottom: '28px',
              maxWidth: '540px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Build your own custom itinerary or chat with our travel desk for a
            free expert consultation.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <a href="#plan" className="btn btn-primary">
              <span>Customize Your Trip</span>
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Talk to Our Team</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer columns */}
      <div style={{ padding: '64px 0 40px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 0.8fr 0.8fr 1fr',
              gap: '48px'
            }}
            className="footer-grid"
          >
            {/* Col 1: Brand */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  marginBottom: '20px'
                }}
              >
                <img
                  src={logo}
                  alt="NL Lanka"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    objectFit: 'cover',
                    backgroundColor: '#FFFFFF'
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontSize: '20px',
                      fontWeight: 800,
                      lineHeight: 1
                    }}
                  >
                    NL Lanka
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)'
                    }}
                  >
                    Travel & Tours
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: '#94A3B8',
                  maxWidth: '300px',
                  marginBottom: '24px'
                }}
              >
                {COMPANY_INFO.tagline}. Based in {COMPANY_INFO.location},
                delivering bespoke private journeys across all nine provinces of
                Sri Lanka since 2014.
              </p>

              {/* Social Icons */}
              <div style={{ display: 'flex', gap: '12px' }}>
                {SOCIAL_LINKS.map((social) => {
                  const Icon = platformIcons[social.platform];
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#CBD5E1',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          'var(--gold)';
                        e.currentTarget.style.color = '#1A1300';
                        e.currentTarget.style.borderColor = 'var(--gold)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          'rgba(255, 255, 255, 0.06)';
                        e.currentTarget.style.color = '#CBD5E1';
                        e.currentTarget.style.borderColor =
                          'rgba(255, 255, 255, 0.12)';
                      }}
                    >
                      {social.platform === 'TikTok' ? (
                        <TikTokIcon size={18} />
                      ) : Icon ? (
                        <Icon size={18} />
                      ) : null}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '20px',
                  color: '#FFFFFF'
                }}
              >
                Quick Links
              </h4>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: '14px',
                        color: '#94A3B8',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = 'var(--gold)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = '#94A3B8')
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '20px',
                  color: '#FFFFFF'
                }}
              >
                Services
              </h4>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                {serviceLinks.map((svc) => (
                  <li key={svc}>
                    <a
                      href="#services"
                      style={{
                        fontSize: '14px',
                        color: '#94A3B8',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = 'var(--gold)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = '#94A3B8')
                      }
                    >
                      {svc}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h4
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '20px',
                  color: '#FFFFFF'
                }}
              >
                Contact Us
              </h4>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <Phone size={16} color="var(--gold)" />
                  <a
                    href={'tel:' + COMPANY_INFO.whatsappRaw}
                    style={{ fontSize: '14px', color: '#CBD5E1' }}
                  >
                    {COMPANY_INFO.phoneFormatted}
                  </a>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <Mail size={16} color="var(--gold)" />
                  <a
                    href={'mailto:' + COMPANY_INFO.email}
                    style={{ fontSize: '14px', color: '#CBD5E1' }}
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}
                >
                  <MapPin
                    size={16}
                    color="var(--gold)"
                    style={{ marginTop: '3px', flexShrink: 0 }}
                  />
                  <span style={{ fontSize: '14px', color: '#94A3B8' }}>
                    {COMPANY_INFO.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '20px 0'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            fontSize: '13px',
            color: '#64748B'
          }}
        >
          <span>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.fullName}. All
            rights reserved.
          </span>
          <span>Crafted with care in Negombo, Sri Lanka</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}