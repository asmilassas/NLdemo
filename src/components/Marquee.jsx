import React from 'react';

const destinations = [
  'Sigiriya',
  'Ella',
  'Kandy',
  'Galle',
  'Yala',
  'Mirissa',
  'Nuwara Eliya',
  'Trincomalee',
  'Bentota',
  'Dambulla',
  'Udawalawe',
  'Tangalle'
];

export default function Marquee() {
  /* Duplicate enough for seamless loop */
  const items = [...destinations, ...destinations, ...destinations, ...destinations];

  return (
    <div
      style={{
        backgroundColor: 'var(--royal)',
        color: '#FFFFFF',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: '14px 0',
        position: 'relative'
      }}
    >
      <div
        style={{
          display: 'inline-block',
          animation: 'marqueeScroll 40s linear infinite'
        }}
      >
        {items.map((name, idx) => (
          <span
            key={idx}
            style={{
              marginRight: '28px',
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.04em'
            }}
          >
            {name}{' '}
            <span style={{ color: 'var(--gold)', margin: '0 6px' }}>✦</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
