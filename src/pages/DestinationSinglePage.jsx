import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Calendar, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HotelCard from '../components/HotelCard';
import destinationsData from '../data/destinations.json';
import hotelsData from '../data/hotels.json';

export default function DestinationSinglePage() {
  const { slug } = useParams();
  const destination = destinationsData.find((d) => d.slug === slug);

  if (!destination) {
    return <Navigate to="/destinations/" replace />;
  }

  // Filter hotels in this destination
  const destinationHotels = hotelsData.filter(
    (h) => h.destination.toLowerCase() === destination.shortName.toLowerCase()
  );

  return (
    <div className="atl-page-wrap">
      {/* Hero Section Container */}
      <div className="atl-hero-wrap" style={{ padding: '16px 16px 0' }}>
        <div
          className="atl-hero-card"
          style={{
            background: '#f8f4ea',
            borderRadius: '32px',
            padding: '20px 24px 32px',
            border: '1px solid rgba(58, 43, 20, 0.15)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.03)'
          }}
        >
          <Header />

          {/* Hero Banner with Destination Background */}
          <div
            style={{
              position: 'relative',
              height: '380px',
              marginTop: '16px',
              borderRadius: '24px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          >
            <img
              src={destination.image}
              alt={destination.name}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(20,23,24,0.92) 0%, rgba(20,23,24,0.5) 60%, rgba(0,0,0,0.2) 100%)'
              }}
            />

            <div className="atl-container" style={{ position: 'relative', zIndex: 2, color: '#ffffff', padding: '0 32px' }}>
              <div style={{ maxWidth: '640px' }}>
                <span
                  style={{
                    background: 'rgba(58, 43, 20, 0.9)',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    display: 'inline-block',
                    marginBottom: '12px'
                  }}
                >
                  {destination.state} · Regional Guide
                </span>
                <h1 style={{ fontSize: 'clamp(34px, 5vw, 56px)', color: '#ffffff', marginBottom: '14px', fontFamily: 'Playfair Display, serif' }}>
                  {destination.name}
                </h1>
                <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
                  {destination.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destination Overview & Info Cards */}
      <div className="atl-container" style={{ padding: '60px 20px 40px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.8fr) minmax(280px, 1fr)',
            gap: '40px',
            alignItems: 'start'
          }}
          className="atl-dest-overview-grid"
        >
          <div>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>
              About {destination.shortName}
            </h2>
            <p style={{ color: 'var(--atl-ink-700)', fontSize: '16px', lineHeight: 1.8, marginBottom: '24px' }}>
              {destination.description}
            </p>

            <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Key Highlights &amp; Activities</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '32px' }}>
              {destination.highlights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: '#ffffff',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(208, 197, 175, 0.4)'
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: 'var(--atl-gold)', flexShrink: 0 }} />
                  <span style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--atl-ink-900)' }}>{h}</span>
                </div>
              ))}
            </div>

            {/* Special Safari Link for Jim Corbett & Ranthambore */}
            {destination.slug === 'jim-corbett' && (
              <div
                style={{
                  background: 'var(--atl-cream)',
                  border: '1px solid var(--atl-gold-light)',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px'
                }}
              >
                <div>
                  <h4 style={{ fontSize: '18px', margin: '0 0 4px', color: 'var(--atl-ink-900)' }}>
                    Planning a Jim Corbett Tiger Safari?
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--atl-ink-700)', margin: 0 }}>
                    Book authorized Jeep &amp; Canter safaris across Bijrani, Dhikala, Jhirna &amp; Dhela zones.
                  </p>
                </div>
                <Link
                  to="/jim-corbett-safari-booking/"
                  className="atl-btn atl-btn-dark atl-btn-sm"
                  style={{ borderRadius: '9999px', padding: '10px 18px' }}
                >
                  <span>Book Safari Permits</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            )}
          </div>

          {/* Quick Info Box */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '28px',
              border: '1px solid rgba(208, 197, 175, 0.5)',
              boxShadow: 'var(--atl-shadow-card)'
            }}
          >
            <h3 style={{ fontSize: '20px', marginBottom: '20px', borderBottom: '1px solid rgba(208, 197, 175, 0.3)', paddingBottom: '12px' }}>
              Travel Fast Facts
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--atl-ink-500)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Best Time to Visit
                </span>
                <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--atl-ink-900)', marginTop: '2px' }}>
                  {destination.bestTime}
                </div>
              </div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--atl-ink-500)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Handpicked Stays Available
                </span>
                <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--atl-gold-deep)', marginTop: '2px' }}>
                  {destinationHotels.length} Verified Properties
                </div>
              </div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--atl-ink-500)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Concierge Hotline
                </span>
                <a href="tel:+919315517530" style={{ fontSize: '16px', fontWeight: 700, color: 'var(--atl-ink-900)', display: 'block', marginTop: '2px' }}>
                  +91-9315517530
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resorts & Hotels in this Destination */}
      <div style={{ background: '#f5f0e3', padding: '70px 0 90px' }}>
        <div className="atl-container">
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--atl-gold)', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
              Curated Selection
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', margin: 0 }}>
              Top Resorts &amp; Stays in {destination.shortName}
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px'
            }}
          >
            {destinationHotels.map((h) => (
              <HotelCard key={h.slug} hotel={h} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
