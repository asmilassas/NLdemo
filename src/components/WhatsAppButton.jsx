import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data.js';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl =
    'https://wa.me/' +
    COMPANY_INFO.whatsappRaw +
    '?text=' +
    encodeURIComponent(COMPANY_INFO.whatsappPrefill);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: '#25D366',
        color: '#FFFFFF',
        borderRadius: '9999px',
        padding: hovered ? '14px 22px 14px 18px' : '14px',
        boxShadow: hovered
          ? '0 12px 32px rgba(37, 211, 102, 0.5)'
          : '0 6px 20px rgba(37, 211, 102, 0.35)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hovered ? 'scale(1.06)' : 'scale(1)',
        textDecoration: 'none',
        cursor: 'pointer'
      }}
    >
      <MessageCircle
        size={26}
        fill="#FFFFFF"
        color="#25D366"
        strokeWidth={0}
        style={{ flexShrink: 0 }}
      />
      {hovered && (
        <span
          style={{
            fontSize: '14px',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          Chat with us
        </span>
      )}
    </a>
  );
}
