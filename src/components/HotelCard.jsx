import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, ArrowRight, MessageCircle } from 'lucide-react';
import { getStartingRate } from '../utils/mealPlans';

export default function HotelCard({ hotel }) {
  const startingRate = getStartingRate(hotel);

  return (
    <div
      className="atl-hotel-card"
      style={{
        background: '#ffffff',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid rgba(58, 43, 20, 0.4)',
        boxShadow: 'var(--atl-shadow-card)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease'
      }}
    >
      {/* Card Image Media */}
      <div
        style={{
          position: 'relative',
          height: '240px',
          overflow: 'hidden',
          backgroundColor: '#eae5d8'
        }}
      >
        <Link to={`/hotel/${hotel.slug}/`}>
          <img
            src={hotel.heroImage}
            alt={hotel.title}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease'
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </Link>

        {/* Floating Badges */}
        <div
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            display: 'flex',
            gap: '8px'
          }}
        >
          <span
            style={{
              background: 'rgba(25, 28, 29, 0.75)',
              backdropFilter: 'blur(8px)',
              color: '#fff',
              fontSize: '11px',
              fontWeight: 600,
              padding: '4px 10px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <MapPin size={11} style={{ color: '#3a2b14' }} />
            {hotel.destination}
          </span>

          <span
            style={{
              background: 'rgba(115, 92, 0, 0.9)',
              backdropFilter: 'blur(8px)',
              color: '#fff',
              fontSize: '11px',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Star size={11} fill="#fff" />
            {hotel.rating.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div
        style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between'
        }}
      >
        <div>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '8px',
              fontFamily: 'Playfair Display, serif',
              lineHeight: 1.3
            }}
          >
            <Link to={`/hotel/${hotel.slug}/`} style={{ color: 'var(--atl-ink-900)' }}>
              {hotel.title}
            </Link>
          </h3>

          <p
            style={{
              color: 'var(--atl-ink-500)',
              fontSize: '13px',
              lineHeight: 1.6,
              marginBottom: '16px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {hotel.overview}
          </p>

          {/* Location Context Badge: Riverside / Cityside */}
          <div style={{ margin: '8px 0 16px' }}>
            <span
              style={{
                background: 'rgba(58, 43, 20, 0.08)',
                color: '#3a2b14',
                fontSize: '11px',
                fontWeight: 600,
                padding: '4px 12px',
                borderRadius: '9999px',
                border: '1px solid rgba(58, 43, 20, 0.2)',
                display: 'inline-flex',
                alignItems: 'center',
                letterSpacing: '0.02em'
              }}
            >
              {hotel.isRiverside ||
              hotel.title.toLowerCase().includes('river') ||
              hotel.overview?.toLowerCase().includes('kosi') ||
              hotel.overview?.toLowerCase().includes('ramganga') ||
              hotel.overview?.toLowerCase().includes('riverside')
                ? 'Riverside'
                : 'Cityside'}
            </span>
          </div>
        </div>

        {/* Pricing & CTA Row */}
        <div
          style={{
            borderTop: '1px solid rgba(58, 43, 20, 0.3)',
            paddingTop: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          <div>
            <span style={{ fontSize: '11px', color: 'var(--atl-ink-500)', display: 'block' }}>
              Starting from
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--atl-gold-deep)',
                  fontFamily: 'Playfair Display, serif'
                }}
              >
                {startingRate > 0 ? `₹${startingRate.toLocaleString('en-IN')}` : 'Rates on request'}
              </span>
              {startingRate > 0 && (
                <span style={{ fontSize: '11px', color: 'var(--atl-ink-500)' }}>/night</span>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <a
              href={`https://wa.me/919717327225?text=Hello%20GTI%20Travels%20Pvt.%20Ltd.,%20I%20am%20interested%20in%20booking%20${encodeURIComponent(hotel.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="atl-btn atl-btn-whatsapp"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              title="Quick WhatsApp Booking"
            >
              <MessageCircle size={17} />
            </a>

            <Link
              to={`/hotel/${hotel.slug}/`}
              className="atl-btn atl-btn-dark"
              style={{
                padding: '9px 16px',
                fontSize: '13px',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Details</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
