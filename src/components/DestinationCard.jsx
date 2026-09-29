import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function DestinationCard({ destination }) {
  return (
    <Link
      to={`/destinations/${destination.slug}/`}
      className="atl-destination-card"
      style={{
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        height: '380px',
        display: 'block',
        boxShadow: 'var(--atl-shadow-card)',
        textDecoration: 'none'
      }}
    >
      <img
        src={destination.image}
        alt={destination.name}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.5s ease'
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />

      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(20,23,24,0.92) 0%, rgba(20,23,24,0.3) 50%, rgba(0,0,0,0) 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '28px',
          color: '#ffffff'
        }}
      >
        <span
          style={{
            color: '#e9c349',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '1.2px',
            fontWeight: 700,
            marginBottom: '6px'
          }}
        >
          {destination.state}
        </span>

        <h3
          style={{
            fontSize: '26px',
            fontWeight: 700,
            color: '#ffffff',
            margin: '0 0 8px',
            fontFamily: 'Playfair Display, serif'
          }}
        >
          {destination.shortName}
        </h3>

        <p
          style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.8)',
            margin: '0 0 16px',
            lineHeight: 1.5,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {destination.tagline}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#fff', fontSize: '13px', fontWeight: 600 }}>
          <span>Explore Stays &amp; Activities</span>
          <ArrowUpRight size={15} style={{ color: '#e9c349' }} />
        </div>
      </div>
    </Link>
  );
}
