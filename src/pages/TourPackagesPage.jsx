import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const tourPackagesData = [
  {
    slug: 'corbett-nainital',
    title: 'Corbett Nainital',
    destination: 'jim-corbett',
    destinationLabel: 'Jim Corbett',
    duration: '03 Nights & 04 Days',
    image: '/images/ranthambore-atulya.jpg',
    description: 'Come to Uttarakhand and see the beautiful combination of Jungles, Lakes & Hill Stations by visiting Nainital & Jim Corbett. Check out the below details and connect with us for further details or to customise you package.',
    tags: ['Family', 'Best Deal'],
    price: '₹5,999',
    priceUnit: 'per person'
  },
  {
    slug: 'corbett-wildlife-safari',
    title: 'Corbett Wildlife Safari',
    destination: 'jim-corbett',
    destinationLabel: 'Jim Corbett',
    duration: '02 Nights & 03 Days',
    image: '/images/jim-corbett-atulya.jpg',
    description: 'Immerse yourself in the dense sal forests of Jim Corbett with thrilling open Jeep safaris, luxury riverside stays, birdwatching, and nature walks designed for wildlife enthusiasts.',
    tags: ['Wildlife', 'Adventure'],
    price: '₹4,499',
    priceUnit: 'per person'
  },
  {
    slug: 'nainital-lake-retreat',
    title: 'Nainital Lake Retreat',
    destination: 'jim-corbett',
    destinationLabel: 'Jim Corbett',
    duration: '03 Nights & 04 Days',
    image: '/images/nainital-atulya.jpg',
    description: 'Discover the tranquil emerald waters of Naini and Bhimtal lakes, panoramic Himalayan vistas, colonial charm, and peaceful boutique mountain retreats in the Kumaon hills.',
    tags: ['Family', 'Scenic Stay'],
    price: '₹6,499',
    priceUnit: 'per person'
  }
];

export default function TourPackagesPage() {
  const [selectedDestination, setSelectedDestination] = useState('all');

  const filteredPackages = useMemo(() => {
    if (selectedDestination === 'all') return tourPackagesData;
    return tourPackagesData.filter((pkg) => pkg.destination === selectedDestination);
  }, [selectedDestination]);

  return (
    <div className="atl-page-wrap">
      {/* Hero Section Container */}
      <div className="atl-hero-wrap" style={{ padding: '16px 16px 0' }}>
        <div
          className="atl-hero-card"
          style={{
            background: '#f8f4ea',
            borderRadius: '32px',
            padding: '20px 24px 40px',
            border: '1px solid rgba(58, 43, 20, 0.15)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.03)'
          }}
        >
          <Header />
          <div className="atl-page-title" style={{ textAlign: 'left', padding: '24px 8px 8px' }}>
            <span className="atl-kicker-caps">Tours &amp; Packages</span>
            <h1 className="atl-page-title-heading" style={{ textAlign: 'left', margin: '8px 0 12px' }}>
              Curated Tour Packages
            </h1>
            <p className="atl-page-title-text" style={{ textAlign: 'left', margin: 0, maxWidth: '640px' }}>
              All-inclusive itineraries across our destinations — jungle safaris, hill retreats, riverside stays and island escapes, planned end to end.
            </p>
          </div>
        </div>
      </div>

      <main>
        {/* Section 1: Filter Bar & Tour Grid (Matching Image 1) */}
        <section className="atl-container" style={{ paddingTop: '40px' }}>
          <div className="atl-filter-bar">
            <div className="atl-filter-group">
              <button
                type="button"
                className={`atl-filter-btn ${selectedDestination === 'all' ? 'is-active' : ''}`}
                onClick={() => setSelectedDestination('all')}
              >
                All Destinations
              </button>
              <button
                type="button"
                className={`atl-filter-btn ${selectedDestination === 'jim-corbett' ? 'is-active' : ''}`}
                onClick={() => setSelectedDestination('jim-corbett')}
              >
                Jim Corbett
              </button>
            </div>
            <span id="atl-tour-results" className="atl-filter-results">
              {filteredPackages.length} {filteredPackages.length === 1 ? 'package found' : 'packages found'}
            </span>
          </div>
        </section>

        <section className="atl-container" style={{ paddingTop: '32px', paddingBottom: '96px' }}>
          <div id="atl-tour-grid" className="atl-grid atl-gap-6">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.slug}
                className="atl-col-12 atl-md-col-6 atl-lg-col-4 atl-lift-card"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <Link
                  to={`/tour/${pkg.slug}/`}
                  aria-label={pkg.title}
                  className="atl-tour-card-media"
                >
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="atl-img-cover"
                    loading="lazy"
                  />
                  <span className="atl-badge atl-tour-card-tag-left">{pkg.destinationLabel}</span>
                  <span className="atl-tour-card-tag-right">{pkg.duration}</span>
                </Link>

                <div className="atl-tour-card-body">
                  <h3 className="atl-tour-card-title">{pkg.title}</h3>
                  <p className="atl-tour-card-text">{pkg.description}</p>

                  <div className="atl-tour-tags">
                    {pkg.tags.map((tag, idx) => (
                      <span key={idx} className="atl-tour-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="atl-tour-card-foot">
                    {/* <span>
                      <span className="atl-tour-card-price" style={{ fontSize: '24px', fontWeight: 700 }}>
                        {pkg.price}
                      </span>
                      <span className="atl-tour-card-price-unit" style={{ fontSize: '13px', fontWeight: 500 }}>
                        {pkg.priceUnit}
                      </span>
                    </span> */}
                    <Link
                      to={`/tour/${pkg.slug}/`}
                      className="atl-btn atl-btn-dark atl-btn-sm"
                    >
                      <span>Explore More</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <polyline points="14 6 20 12 14 18" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div id="atl-tour-empty" className="atl-empty-state">
              <p>No packages match this destination yet — try another filter.</p>
            </div>
          )}
        </section>

        {/* Section 2: Why Travel With Us (Matching Image 2) */}
        <section className="atl-bg-white atl-border-y atl-section-lg">
          <div className="atl-container">
            <div className="atl-section-head-center">
              <span className="atl-kicker-caps">Why Travel With Us</span>
              <h2 className="atl-section-title" style={{ fontSize: '28px' }}>
                Every Detail, Planned For You
              </h2>
            </div>
            <div className="atl-grid atl-gap-6">
              <div
                className="atl-col-12 atl-md-col-4"
                style={{
                  background: 'var(--atl-cream-pill)',
                  borderRadius: '16px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div className="atl-promise-icon atl-promise-icon-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="18" cy="5" r="2" />
                    <path d="M8 19h7a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-1" />
                  </svg>
                </div>
                <h4 className="atl-promise-title" style={{ fontSize: '19px' }}>
                  End-to-End Planning
                </h4>
                <p className="atl-promise-text">
                  Stays, transfers, permits and activities bundled into one itinerary.
                </p>
              </div>

              <div
                className="atl-col-12 atl-md-col-4"
                style={{
                  background: 'var(--atl-cream-pill)',
                  borderRadius: '16px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div className="atl-promise-icon atl-promise-icon-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                    <path d="M12 2l1.5 6L20 12l-6.5 4L12 22l-1.5-6L4 12l6.5-4z" />
                  </svg>
                </div>
                <h4 className="atl-promise-title" style={{ fontSize: '19px' }}>
                  Transparent Pricing
                </h4>
                <p className="atl-promise-text">
                  No hidden costs — every inclusion is listed before you book.
                </p>
              </div>

              <div
                className="atl-col-12 atl-md-col-4"
                style={{
                  background: 'var(--atl-cream-pill)',
                  borderRadius: '16px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div className="atl-promise-icon atl-promise-icon-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                    <path d="M4 17v-5a8 8 0 0 1 16 0v5" />
                    <rect x="2" y="16" width="4.5" height="6" rx="2" />
                    <rect x="17.5" y="16" width="4.5" height="6" rx="2" />
                    <path d="M20 19a4 4 0 0 1-4 4h-2" />
                  </svg>
                </div>
                <h4 className="atl-promise-title" style={{ fontSize: '19px' }}>
                  24x7 Support
                </h4>
                <p className="atl-promise-text">
                  A dedicated specialist on call throughout your trip.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Let Us Build Your Itinerary CTA Banner (Matching Image 3) */}
        <section className="atl-container atl-section-lg">
          <div className="atl-cta-panel">
            <div className="atl-cta-glow"></div>
            <div className="atl-cta-flex">
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '520px', textAlign: 'left' }}>
                <span className="atl-cta-eyebrow">Not Sure Which Package?</span>
                <h2 className="atl-cta-title">Let Us Build Your Itinerary</h2>
                <p className="atl-cta-text">
                  Tell us your dates and destinations — our specialists will tailor a package around them.
                </p>
              </div>
              <a
                href="tel:+919315517530"
                className="atl-btn atl-btn-gold"
                style={{ position: 'relative', flexShrink: 0 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now: 9315517530
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
