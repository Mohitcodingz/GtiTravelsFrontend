import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import toursData from '../data/tours.json';

export default function TourDetailPage() {
  const { slug } = useParams();
  const tour = toursData.find((t) => t.slug === slug);

  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!tour) return <Navigate to="/tour-packages/" replace />;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="atl-page-wrap">
      {/* Top Hero Container matching live site */}
      <div className="atl-hero-wrap" style={{ padding: '16px 16px 0' }}>
        <div
          className="atl-hero-card"
          style={{
            background: '#f8f4ea',
            borderRadius: '32px',
            padding: '20px 24px 36px',
            border: '1px solid rgba(58, 43, 20, 0.15)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.03)'
          }}
        >
          <Header />

          {/* Breadcrumb */}
          <nav className="atl-breadcrumb" style={{ padding: '24px 8px 12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
            <Link to="/" style={{ color: 'var(--atl-ink-700)' }}>Home</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
              <polyline points="9 18 15 12 9 6" />
            </svg>
            <Link to="/tour-packages/" style={{ color: 'var(--atl-ink-700)' }}>Tours</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
              <polyline points="9 18 15 12 9 6" />
            </svg>
            <span className="atl-breadcrumb-current">{tour.title}</span>
          </nav>

          {/* Hero Content Section */}
          <section style={{ padding: '8px 8px 16px' }}>
            <div className="atl-grid atl-gap-6 atl-items-start">
              {/* Left Column (8 cols) */}
              <div className="atl-col-12 atl-lg-col-8">
                <h1 style={{ fontFamily: 'var(--atl-font-display)', fontSize: '32px', lineHeight: 1.1, fontWeight: 700, margin: '0 0 16px', color: 'var(--atl-ink-900)' }}>
                  {tour.title}
                </h1>

                <div className="atl-flex atl-items-center atl-gap-3 atl-flex-wrap" style={{ marginBottom: '24px' }}>
                  <span className="atl-badge" style={{ background: 'var(--atl-cream-100)', color: 'var(--atl-ink-900)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                      <circle cx="12" cy="12" r="9" />
                      <polyline points="12 7 12 12 16 14" />
                    </svg>
                    {tour.duration}
                  </span>

                  <span className="atl-badge" style={{ background: 'var(--atl-cream-100)', color: 'var(--atl-ink-900)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                      <path d="M3 20l5-14 4 8 3-6 6 12" />
                      <circle cx="8" cy="6" r="1.6" />
                    </svg>
                    {tour.destination}
                  </span>
                </div>

                <div className="atl-rounded-lg" style={{ aspectRatio: '16/9', overflow: 'hidden', borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,.1)' }}>
                  <img src={tour.image} alt={tour.title} className="atl-img-cover" />
                </div>

                <div className="atl-content-block-text" style={{ marginTop: '28px', maxWidth: '680px' }}>
                  {Array.isArray(tour.description) ? (
                    tour.description.map((p, idx) => <p key={idx}>{p}</p>)
                  ) : (
                    <p>{tour.description}</p>
                  )}
                </div>
              </div>

              {/* Right Column (4 cols): Sticky Booking Sidebar */}
              <div className="atl-col-12 atl-lg-col-4">
                <div className="atl-flex-col atl-gap-5" style={{ position: 'sticky', top: '24px' }}>
                  <div className="atl-booking-sidebar">
                    <div className="atl-booking-price-row">
                      <div>
                        <span style={{ color: 'var(--atl-ink-700)', fontSize: '12px' }}>Starting at</span>
                        <div className="atl-booking-price" style={{ fontSize: '28px', fontWeight: 700, color: 'var(--atl-gold)' }}>
                          {tour.price} <span className="atl-booking-price-unit" style={{ fontSize: '14px', color: 'var(--atl-ink-900)' }}>{tour.priceUnit || '/person'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="atl-sidebar-contact">
                      <a href="tel:+919717327225" className="atl-sidebar-contact-row" style={{ textDecoration: 'none' }}>
                        <span className="atl-sidebar-contact-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </span>
                        <div>
                          <span className="atl-sidebar-contact-label">Phone</span>
                          <span className="atl-sidebar-contact-value">+91-9717327225</span>
                        </div>
                      </a>
                      <a href="mailto:contact@globaltourismindia.com" className="atl-sidebar-contact-row" style={{ textDecoration: 'none' }}>
                        <span className="atl-sidebar-contact-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m2 7 10 6 10-6" />
                          </svg>
                        </span>
                        <div>
                          <span className="atl-sidebar-contact-label">Email</span>
                          <span className="atl-sidebar-contact-value">contact@globaltourismindia.com</span>
                        </div>
                      </a>
                    </div>

                    <h3 style={{ fontFamily: 'var(--atl-font-display)', fontSize: '20px', fontWeight: 700, margin: '24px 0 16px', color: 'var(--atl-ink-900)' }}>
                      Enquire About This Package
                    </h3>

                    {submitted ? (
                      <div style={{ background: '#e8f5e9', padding: '16px', borderRadius: '10px', textAlign: 'center' }}>
                        <span style={{ color: '#2e7d32', fontWeight: 700, fontSize: '14px', display: 'block', marginBottom: '4px' }}>
                          Inquiry Sent!
                        </span>
                        <span style={{ color: '#1b5e20', fontSize: '12.5px' }}>
                          Our specialist will get back to you with the detailed itinerary shortly.
                        </span>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--atl-ink-900)', marginBottom: '4px' }}>
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            required
                            placeholder="Enter Your First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '13.5px', outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--atl-ink-900)', marginBottom: '4px' }}>
                            Phone/Mobile *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="Mobile Number"
                            value={formData.phone}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '13.5px', outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--atl-ink-900)', marginBottom: '4px' }}>
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '13.5px', outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--atl-ink-900)', marginBottom: '4px' }}>
                            Message
                          </label>
                          <textarea
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '13.5px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                          />
                        </div>

                        <button
                          type="submit"
                          style={{
                            backgroundColor: '#1a7efb',
                            color: '#ffffff',
                            width: '100%',
                            padding: '13px',
                            borderRadius: '6px',
                            fontWeight: 700,
                            fontSize: '14.5px',
                            border: 'none',
                            cursor: 'pointer',
                            marginTop: '6px',
                            transition: 'background-color 0.2s'
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#000000')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1a7efb')}
                        >
                          Submit
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <main>
        {/* Section 2: Package Includes (Dark Band) */}
        {tour.packageIncludes && tour.packageIncludes.length > 0 && (
          <section className="atl-includes-band" style={{ marginTop: '50px' }}>
            <div className="atl-container">
              <h2 style={{ fontFamily: 'var(--atl-font-display)', fontSize: '26px', fontWeight: 700, color: '#fff', margin: '0 0 40px' }}>
                Package Includes
              </h2>
              <div className="atl-includes-grid atl-includes-grid-cols-3">
                {tour.packageIncludes.map((inc, idx) => (
                  <div key={idx} className="atl-includes-item">
                    <span className="atl-includes-num">{inc.num}</span>
                    <div className="atl-includes-icon">
                      {idx === 0 && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8cf87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                          <path d="M3 21h18" /><path d="M5 21V10l7-6 7 6v11" /><rect x="9" y="13" width="6" height="8" /><path d="M9 9h.01M15 9h.01" />
                        </svg>
                      )}
                      {idx === 1 && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8cf87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                          <path d="M7 2v6a2 2 0 0 0 4 0V2" /><path d="M9 8v13" /><path d="M17 2c-2 2-2 5-2 7a2 2 0 0 0 2 2v10" />
                        </svg>
                      )}
                      {idx === 2 && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8cf87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                          <path d="M3 16V9l2-5h14l2 5v7" /><path d="M3 16h18" /><circle cx="7.5" cy="16" r="1.8" /><circle cx="16.5" cy="16" r="1.8" /><path d="M5 9h14" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="atl-includes-title">{inc.title}</h3>
                      <p className="atl-includes-text">{inc.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 3: Itinerary */}
        {tour.itinerary && tour.itinerary.length > 0 && (
          <section className="atl-container atl-section-lg">
            <div style={{ marginBottom: '48px', maxWidth: '600px' }}>
              <span className="atl-kicker-caps">Day By Day</span>
              <h2 style={{ fontFamily: 'var(--atl-font-display)', fontSize: '26px', fontWeight: 700, margin: '12px 0 0' }}>
                Itinerary
              </h2>
            </div>
            <div className="atl-flex-col atl-gap-8">
              {tour.itinerary.map((day, idx) => {
                const isReversed = idx % 2 === 1;
                return (
                  <div key={idx} className={`atl-itinerary-card ${isReversed ? 'is-reversed' : ''}`}>
                    <div className="atl-itinerary-media">
                      <img src={day.image || tour.image} alt={day.title} className="atl-img-cover" loading="lazy" />
                      <span className="atl-itinerary-day-badge">{day.day}</span>
                    </div>
                    <div className="atl-itinerary-body">
                      <span className="atl-itinerary-watermark">{day.watermark || `0${idx + 1}`}</span>
                      <span className="atl-kicker-caps">{day.kicker || `${day.day} of ${tour.itinerary.length}`}</span>
                      <h3 className="atl-itinerary-title">{day.title}</h3>
                      <p className="atl-itinerary-text">{day.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Section 4: What's Covered */}
        <section className="atl-bg-white atl-border-t" style={{ padding: '64px 0' }}>
          <div className="atl-container">
            <div style={{ marginBottom: '40px' }}>
              <span className="atl-kicker-caps">Good To Know</span>
              <h2 style={{ fontFamily: 'var(--atl-font-display)', fontSize: '26px', fontWeight: 700, margin: '12px 0 0' }}>
                What's Covered
              </h2>
            </div>
            <div className="atl-grid atl-gap-6">
              {/* Inclusions Card */}
              <div className="atl-col-12 atl-md-col-6 atl-covered-card">
                <div className="atl-covered-icon" style={{ background: 'rgba(18,110,12,.12)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#126e0c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="8 12.5 11 15.5 16 9" />
                  </svg>
                </div>
                <h3 className="atl-covered-title">Inclusions</h3>
                <div className="atl-covered-content">
                  <ul>
                    {tour.inclusions.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Exclusions & Other Information Card */}
              <div className="atl-col-12 atl-md-col-6 atl-covered-card">
                <div className="atl-covered-icon" style={{ background: 'rgba(179,68,30,.12)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b3441e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                    <circle cx="12" cy="12" r="9" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                </div>
                <h3 className="atl-covered-title">Exclusions</h3>
                <div className="atl-covered-content">
                  <ul>
                    {tour.exclusions.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ height: '1px', background: 'var(--atl-outline)', margin: '4px 0' }} />

                <div className="atl-covered-icon" style={{ background: 'rgba(115,92,0,.12)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                    <circle cx="12" cy="12" r="9" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                <h3 className="atl-covered-title">Other Information</h3>
                <div className="atl-covered-content">
                  <ul>
                    {tour.otherInfo.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  {tour.disclaimer && (
                    <p style={{ marginTop: '12px', fontSize: '13px', color: 'var(--atl-ink-700)' }}>
                      {tour.disclaimer}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Why Book With Us */}
        <section className="atl-section-lg" style={{ background: '#faf5e6' }}>
          <div className="atl-container">
            <div className="atl-section-head-center">
              <span className="atl-kicker-caps">Why Book With Us</span>
              <h2 className="atl-section-title" style={{ fontSize: '28px' }}>
                Trust Built Into Every Trip
              </h2>
            </div>
            <div className="atl-grid atl-gap-6">
              <div className="atl-col-12 atl-md-col-4 atl-promise-card">
                <div className="atl-promise-icon atl-promise-icon-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                    <path d="M4 17v-5a8 8 0 0 1 16 0v5" />
                    <rect x="2" y="16" width="4.5" height="6" rx="2" />
                    <rect x="17.5" y="16" width="4.5" height="6" rx="2" />
                    <path d="M20 19a4 4 0 0 1-4 4h-2" />
                  </svg>
                </div>
                <h4 className="atl-promise-title">24 x 7 Assistance</h4>
                <p className="atl-promise-text">Dedicated support to attend to every query and assist you around the clock.</p>
              </div>

              <div className="atl-col-12 atl-md-col-4 atl-promise-card">
                <div className="atl-promise-icon atl-promise-icon-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                    <rect x="9.5" y="2" width="4" height="9" rx="1" transform="rotate(45 11.5 6.5)" />
                    <line x1="4" y1="20" x2="11" y2="13" />
                    <line x1="2" y1="22" x2="7" y2="17" />
                  </svg>
                </div>
                <h4 className="atl-promise-title">Ethical Working Manner</h4>
                <p className="atl-promise-text">We work very ethically &amp; never overcharge for anything.</p>
              </div>

              <div className="atl-col-12 atl-md-col-4 atl-promise-card">
                <div className="atl-promise-icon atl-promise-icon-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                    <path d="M12 5C10 3.5 7 3 4 3v15c3 0 6 .5 8 2 2-1.5 5-2 8-2V3c-3 0-6 .5-8 2z" />
                    <line x1="12" y1="5" x2="12" y2="20" />
                  </svg>
                </div>
                <h4 className="atl-promise-title">Best Destination Knowledge</h4>
                <p className="atl-promise-text">We know every destination from its core.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
