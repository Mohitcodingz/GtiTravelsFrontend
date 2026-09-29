import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, MessageCircle, Camera } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DatePicker, { formatDateValue, shiftDateValue } from '../components/DatePicker';
import hotelsData from '../data/hotels.json';


export default function HotelDetailPage() {
  const { slug } = useParams();
  const hotel = hotelsData.find((h) => h.slug === slug);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Review read-more state
  const [expandedReviews, setExpandedReviews] = useState({});

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(null);

  // Interactive tab state
  const [activeTab, setActiveTab] = useState('overview');

  // Meal Plan Selector state (EP, CP, MAP, AP)
  const [selectedMealPlan, setSelectedMealPlan] = useState('CP');

  // Quote form state
  const [quoteForm, setQuoteForm] = useState({
    fullName: '',
    phone: '',
    checkIn: '',
    checkOut: ''
  });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  if (!hotel) {
    return <Navigate to="/hotels/" replace />;
  }

  const gallery = hotel.gallery && hotel.gallery.length > 0 ? hotel.gallery : [hotel.heroImage];

  const toggleReview = (idx) => {
    setExpandedReviews((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  const handleQuoteDateChange = (field, value) => {
    setQuoteForm((current) => {
      const nextForm = { ...current, [field]: value };
      if (field === 'checkIn' && nextForm.checkOut && nextForm.checkOut <= value) {
        nextForm.checkOut = shiftDateValue(value, 1);
      }
      return nextForm;
    });
  };

  const openLightboxAt = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <div className="atl-page-wrap">
      {/* Hero Section Container */}
      <div className="atl-hero-wrap" style={{ padding: '16px 16px 0' }}>
        <div
          className="atl-hero-card"
          style={{
            background: '#f8f4ea',
            borderRadius: '32px',
            padding: '20px 24px 28px',
            border: '1px solid rgba(58, 43, 20, 0.15)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.03)'
          }}
        >
          <Header />

          {/* Breadcrumb matching live website */}
          <nav
            className="atl-breadcrumb"
            style={{
              margin: '16px 8px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px'
            }}
          >
            <Link to="/" style={{ color: 'var(--atl-ink-700)' }}>
              Home
            </Link>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="atl-shrink-0"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
            <Link
              to={`/destinations/${hotel.destinationSlug || 'jim-corbett'}/`}
              style={{ color: 'var(--atl-ink-700)' }}
            >
              {hotel.destination}
            </Link>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="atl-shrink-0"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
            <span className="atl-breadcrumb-current">{hotel.title}</span>
          </nav>

          {/* Bento Gallery Grid inside Hero Card */}
          <div className="atl-gallery-wrap">
            <div className="atl-gallery-grid">
              <div
                className="atl-gallery-cell is-featured"
                onClick={() => openLightboxAt(0)}
              >
                <img
                  src={gallery[0]}
                  alt={`${hotel.title} photo 1`}
                  className="atl-img-cover"
                />
                <div className="atl-gallery-hover-hint">
                  <span>✦ Expand View</span>
                </div>
                <div className="atl-gallery-count-badge">
                  <Camera size={13} style={{ color: '#3a2b14' }} />
                  <span>{gallery.length || 18} Photos</span>
                </div>
              </div>
              {gallery.slice(1, 5).map((img, idx) => (
                <div
                  key={idx}
                  className="atl-gallery-cell"
                  onClick={() => openLightboxAt(idx + 1)}
                >
                  <img
                    src={img}
                    alt={`${hotel.title} photo ${idx + 2}`}
                    className="atl-img-cover"
                  />
                  <div className="atl-gallery-hover-hint">
                    <span>✦ Expand</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="atl-lightbox is-open"
          onClick={() => setLightboxOpen(false)}
        >
          <img
            src={gallery[lightboxIndex] || hotel.heroImage}
            alt={`${hotel.title} preview`}
            onClick={(e) => e.stopPropagation()}
          />
          <div
            className="atl-lightbox-controls"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="atl-lightbox-btn"
              aria-label="Previous"
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev > 0 ? prev - 1 : gallery.length - 1
                )
              }
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="atl-shrink-0"
              >
                <line x1="20" y1="12" x2="4" y2="12" />
                <polyline points="10 18 4 12 10 6" />
              </svg>
            </button>
            <span className="atl-lightbox-count">
              {lightboxIndex + 1} / {gallery.length}
            </span>
            <button
              type="button"
              className="atl-lightbox-btn"
              aria-label="Next"
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev < gallery.length - 1 ? prev + 1 : 0
                )
              }
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="atl-shrink-0"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <polyline points="14 6 20 12 14 18" />
              </svg>
            </button>
            <button
              type="button"
              className="atl-lightbox-btn"
              aria-label="Close"
              onClick={() => setLightboxOpen(false)}
              style={{ marginLeft: '12px' }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <main>
        {/* Main 2-Column Section */}
        <section
          className="atl-container"
          style={{ paddingTop: '48px', paddingBottom: '48px' }}
        >
          <div className="atl-grid atl-gap-8 atl-items-start">
            {/* Left 8 Columns */}
            <div className="atl-col-12 atl-lg-col-8">
              {/* Hotel Star, Title, Location & Reviews Header */}
              <div style={{ marginBottom: '32px' }}>
                <div
                  className="atl-flex atl-items-center atl-gap-3"
                  style={{ marginBottom: '8px' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      color: '#eab308',
                      gap: '2px'
                    }}
                  >
                    {Array.from({ length: hotel.starCount || 3 }).map((_, i) => (
                      <svg
                        key={i}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#eab308"
                        stroke="#eab308"
                        strokeWidth="1"
                      >
                        <polygon points="12 2 15 9 22 9.5 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9.5 9 9" />
                      </svg>
                    ))}
                  </div>
                  <span
                    style={{
                      color: 'var(--atl-ink-700)',
                      fontSize: '17px',
                      fontWeight: 500
                    }}
                  >
                    {hotel.ratingLabel || `${hotel.starCount} Star`}
                  </span>
                </div>

                <h1
                  style={{
                    fontFamily: 'var(--atl-font-display)',
                    fontSize: '32px',
                    lineHeight: 1.2,
                    fontWeight: 700,
                    margin: '0 0 8px',
                    color: 'var(--atl-ink-900)'
                  }}
                >
                  {hotel.title}
                </h1>

                <div
                  className="atl-flex atl-items-center atl-gap-6 atl-flex-wrap"
                  style={{ color: 'var(--atl-ink-700)', fontSize: '14.5px' }}
                >
                  <span className="atl-flex atl-items-center atl-gap-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3a2b14"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="atl-shrink-0"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {hotel.location}
                  </span>

                  <span className="atl-flex atl-items-center atl-gap-1">
                    <span style={{ display: 'flex', color: '#eab308' }}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#eab308"
                        stroke="#eab308"
                        strokeWidth="1"
                      >
                        <polygon points="12 2 15 9 22 9.5 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9.5 9 9" />
                      </svg>
                    </span>
                    <strong style={{ color: 'var(--atl-ink-900)' }}>
                      {hotel.reviewScore || '4.2'}
                    </strong>
                    <span>({hotel.reviewCount || '1,500 reviews'})</span>
                  </span>
                </div>
              </div>

              {/* 20% Bespoke Feature: Quick Section Nav Pills */}
              <div className="atl-detail-tabs-bar">
                <a
                  href="#hotel-overview"
                  className={`atl-detail-tab-btn ${activeTab === 'overview' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  ✦ Overview
                </a>
                <a
                  href="#hotel-amenities"
                  className={`atl-detail-tab-btn ${activeTab === 'amenities' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('amenities')}
                >
                  ✦ Amenities
                </a>
              </div>

              {/* Overview Block */}
              <div id="hotel-overview" className="atl-content-block">
                <h3 className="atl-content-block-title">Overview &amp; Character</h3>
                <div className="atl-content-block-text">
                  {hotel.overviewHtml ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: hotel.overviewHtml }}
                    />
                  ) : (
                    <p>{hotel.overview}</p>
                  )}
                </div>
              </div>

              {/* Amenities Block */}
              {hotel.amenities && hotel.amenities.length > 0 && (
                <div id="hotel-amenities" className="atl-content-block">
                  <h3 className="atl-content-block-title">Resort Amenities &amp; Services</h3>
                  <div className="atl-amenity-grid">
                    {hotel.amenities.map((amenity, idx) => (
                      <div key={idx} className="atl-amenity-grid-item">
                        <span className="atl-amenity-grid-icon">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#3a2b14"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="atl-shrink-0"
                          >
                            <circle cx="12" cy="12" r="9" />
                            <polyline points="8 12.5 11 15.5 16 9" />
                          </svg>
                        </span>
                        <span className="atl-amenity-grid-label">
                          {amenity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}


            </div>

            {/* Right 4 Columns: Luxury Concierge Booking Sidebar */}
            <aside className="atl-col-12 atl-lg-col-4">
              <div className="atl-concierge-card">
                {/* Concierge Pricing Header with Dynamic Meal Plan Calculation */}
                {(() => {
                  const baseRate = hotel.rateNum || 3699;
                  const currentPrice = selectedMealPlan === 'EP' ? Math.max(2500, baseRate - 400)
                    : selectedMealPlan === 'CP' ? baseRate
                    : selectedMealPlan === 'MAP' ? baseRate + 800
                    : baseRate + 1400;

                  return (
                    <div className="atl-concierge-header">
                      <div>
                        <span
                          style={{
                            color: 'var(--atl-ink-700)',
                            fontSize: '11px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            display: 'block'
                          }}
                        >
                          Tariff starting at
                        </span>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px', marginTop: '2px' }}>
                          <span
                            style={{
                              fontSize: '24px',
                              fontWeight: 700,
                              color: 'var(--atl-ink-900)',
                              fontFamily: 'Playfair Display, serif'
                            }}
                          >
                            ₹{currentPrice.toLocaleString('en-IN')}
                          </span>
                          <span
                            style={{
                              fontSize: '12px',
                              color: 'var(--atl-ink-700)',
                              fontWeight: 500
                            }}
                          >
                            /nt ({selectedMealPlan})
                          </span>
                        </div>
                      </div>
                      <span className="atl-concierge-verified">
                        <ShieldCheck size={13} style={{ color: '#3a2b14' }} />
                        <span>Verified Partner</span>
                      </span>
                    </div>
                  );
                })()}

                {/* 20% Bespoke Feature: Meal Plan Selector */}
                <div style={{ marginBottom: '16px', background: '#fbf9f4', padding: '12px 14px', borderRadius: '14px', border: '1px solid rgba(208, 197, 175, 0.45)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--atl-ink-700)', letterSpacing: '0.04em' }}>
                      Meal Plan Selection
                    </span>
                    <span style={{ fontSize: '11px', color: '#c97a1a', fontWeight: 700 }}>
                      {selectedMealPlan}
                    </span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                    {[ 
                      { code: 'Free BreakFast', label: '(CP)' },
                      { code: 'Bkfst & Dinner', label: '(MAP)' },
                      { code: 'All Meals', label: '(AP)' }
                    ].map((item) => (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => setSelectedMealPlan(item.code)}
                        style={{
                          padding: '6px 2px',
                          borderRadius: '8px',
                          fontSize: '11.5px',
                          fontWeight: 700,
                          border: selectedMealPlan === item.code ? '1.5px solid #3a2b14' : '1px solid rgba(208, 197, 175, 0.6)',
                          background: selectedMealPlan === item.code ? '#3a2b14' : '#ffffff',
                          color: selectedMealPlan === item.code ? '#ffffff' : 'var(--atl-ink-800)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          textAlign: 'center'
                        }}
                      >
                        <div>{item.code}</div>
                        <div style={{ fontSize: '9.5px', opacity: 0.8, fontWeight: 500 }}>{item.label}</div>
                      </button>
                    ))}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--atl-ink-600)', marginTop: '8px', textAlign: 'center' }}>
                    {selectedMealPlan === 'EP' && 'Room Only (No Meals Included)'} 
                    {selectedMealPlan === 'MAP' && '✦ Breakfast + Dinner Included'}
                    {selectedMealPlan === 'AP' && '✦ All 3 Meals (Breakfast, Lunch & Dinner)'}
                  </div>
                </div>

                {/* Fluent Form style Request A Quote */}
                {quoteSubmitted ? (
                  <div
                    style={{
                      background: '#f7f4ee',
                      padding: '18px',
                      borderRadius: '12px',
                      textAlign: 'center',
                      marginBottom: '20px',
                      border: '1px solid rgba(58, 43, 20, 0.25)'
                    }}
                  >
                    <span
                      style={{
                        color: '#3a2b14',
                        fontWeight: 700,
                        fontSize: '14.5px',
                        display: 'block',
                        marginBottom: '4px'
                      }}
                    >
                      Quote Request Sent!
                    </span>
                    <span
                      style={{
                        color: '#3a2b14',
                        fontSize: '12.5px',
                        lineHeight: 1.5,
                        display: 'block'
                      }}
                    >
                      Our concierge will contact you within 30 mins with the best quote and room choices.
                    </span>
                  </div>
                ) : (
                  <form
                    onSubmit={handleQuoteSubmit}
                    style={{ marginBottom: '18px' }}
                  >
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '8px',
                        marginBottom: '10px'
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={quoteForm.fullName}
                        onChange={(e) =>
                          setQuoteForm({
                            ...quoteForm,
                            fullName: e.target.value
                          })
                        }
                        required
                        className="atl-concierge-input"
                      />
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        value={quoteForm.phone}
                        onChange={(e) =>
                          setQuoteForm({
                            ...quoteForm,
                            phone: e.target.value
                          })
                        }
                        required
                        className="atl-concierge-input"
                      />
                    </div>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '8px',
                        marginBottom: '14px'
                      }}
                    >
                      <DatePicker
                        value={quoteForm.checkIn}
                        min={formatDateValue(new Date())}
                        placeholder="Check-in"
                        onChange={(value) => handleQuoteDateChange('checkIn', value)}
                        className="atl-concierge-input"
                      />
                      <DatePicker
                        value={quoteForm.checkOut}
                        min={quoteForm.checkIn ? shiftDateValue(quoteForm.checkIn, 1) : formatDateValue(new Date())}
                        placeholder="Check-out"
                        align="right"
                        onChange={(value) => handleQuoteDateChange('checkOut', value)}
                        className="atl-concierge-input"
                      />
                    </div>
                    <button
                      type="submit"
                      className="atl-concierge-btn-primary"
                    >
                      <span>Request A Quote</span>
                      <ArrowRight size={16} />
                    </button>

                    {/* Instant WhatsApp Concierge Button */}
                    <a
                      href={`https://wa.me/919315517530?text=${encodeURIComponent(
                        `Hi Atulya Hospitality! I would like to inquire about booking at ${hotel.title} (${selectedMealPlan} plan${quoteForm.checkIn ? `, Check-in: ${quoteForm.checkIn}` : ''}${quoteForm.checkOut ? ` to ${quoteForm.checkOut}` : ''}). Please share available rooms and best rate.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="atl-concierge-btn-whatsapp"
                    >
                      <MessageCircle size={16} />
                      <span>Instant WhatsApp Quote</span>
                    </a>
                  </form>
                )}

                {/* Exclusive Offer card */}
                <div className="atl-booking-offer" style={{ marginTop: '16px' }}>
                  <div className="atl-booking-offer-head">
                    <Sparkles size={16} style={{ color: '#3a2b14' }} />
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: '12px',
                        letterSpacing: '.08em',
                        textTransform: 'uppercase'
                      }}
                    >
                      Atulya Concierge Perks
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', margin: '10px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--atl-ink-800)' }}>
                      <span style={{ color: '#3a2b14' }}>✦</span> Best Direct Rate Guaranteed
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--atl-ink-800)' }}>
                      <span style={{ color: '#3a2b14' }}>✦</span> Forest Dept Safari Permit Assistance
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--atl-ink-800)' }}>
                      <span style={{ color: '#3a2b14' }}>✦</span> Dedicated 24/7 Holiday Expert
                    </div>
                  </div>
                  <p
                    style={{
                      margin: '10px 0 0',
                      color: 'var(--atl-ink-700)',
                      fontSize: '12.5px',
                      lineHeight: 1.55,
                      borderTop: '1px solid rgba(208, 197, 175, 0.3)',
                      paddingTop: '8px'
                    }}
                  >
                    {hotel.offerText ||
                      "Connect with Atulya Hospitality for negotiated resort tariffs, confirmed safari permits and tailored itineraries across Corbett."}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Rooms & Suites Section */}
        {hotel.rooms && hotel.rooms.length > 0 && (
          <section className="atl-container" style={{ paddingBottom: '80px' }}>
            <div className="atl-relative">
              <div
                className="atl-flex atl-items-center"
                style={{
                  justifyContent: 'space-between',
                  marginBottom: '24px'
                }}
              >
                <h3 className="atl-content-block-title" style={{ margin: 0 }}>
                  Rooms &amp; Suites
                </h3>
              </div>
              <div
                className={`atl-room-slide-track ${
                  hotel.rooms.length === 2
                    ? 'atl-room-slide-track-2'
                    : 'atl-room-slide-track-3'
                }`}
              >
                {hotel.rooms.map((room, idx) => (
                  <div key={idx} className="atl-room-slide">
                    <div className="atl-room-slide-media">
                      <img
                        src={room.image || hotel.heroImage}
                        alt={room.name}
                        className="atl-img-cover"
                      />
                    </div>
                    <div className="atl-room-slide-body">
                      <h4 className="atl-room-slide-title">{room.name}</h4>
                      {room.description && (
                        <p className="atl-room-slide-text">
                          {room.description}
                        </p>
                      )}
                      {room.facts && room.facts.length > 0 && (
                        <div className="atl-room-slide-facts">
                          {room.facts.map((fact, fIdx) => (
                            <span key={fIdx} className="atl-room-slide-fact">
                              {fIdx === 0 && (
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="atl-shrink-0"
                                >
                                  <circle cx="12" cy="8" r="4" />
                                  <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
                                </svg>
                              )}
                              {fIdx === 1 && (
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="atl-shrink-0"
                                >
                                  <path d="M2 18v-7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7" />
                                  <path d="M2 18h20" />
                                  <path d="M6 11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
                                </svg>
                              )}
                              {fIdx === 2 && (
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="atl-shrink-0"
                                >
                                  <rect
                                    x="2"
                                    y="8"
                                    width="20"
                                    height="8"
                                    rx="1"
                                  />
                                  <path d="M6 8v4M10 8v4M14 8v4M18 8v4" />
                                </svg>
                              )}
                              {fact}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="atl-room-slide-foot">
                        <div>
                          <span className="atl-room-slide-price">
                            {room.priceStr ||
                              `₹${room.rate.toLocaleString('en-IN')}`}
                          </span>
                          <span className="atl-room-slide-price-unit">
                            per night
                          </span>
                        </div>
                        <div className="atl-room-slide-actions">
                          <a
                            href="tel:+919315517530"
                            aria-label="Call to book"
                            className="atl-icon-btn-fill atl-icon-btn-gold"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="atl-shrink-0"
                            >
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                          </a>
                          <a
                            href={`https://wa.me/919315517530?text=I%20have%20an%20inquiry%20about%20${encodeURIComponent(
                              hotel.title + ' - ' + room.name
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp us"
                            className="atl-icon-btn-fill atl-icon-btn-whatsapp"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Guest Experiences (Reviews) */}
        {hotel.reviews && hotel.reviews.length > 0 && (
          <section className="atl-bg-white atl-section-lg">
            <div className="atl-container">
              <h3
                className="atl-content-block-title"
                style={{ marginBottom: '32px' }}
              >
                Guest Experiences
              </h3>
              <div className="atl-grid atl-gap-8 atl-reviews-grid">
                {hotel.reviews.map((rev, idx) => (
                  <div
                    key={idx}
                    className="atl-col-12 atl-md-col-6 atl-review"
                  >
                    <div className="atl-review-head">
                      <div className="atl-review-avatar atl-review-avatar-initials">
                        {rev.initials || 'G'}
                      </div>
                      <div>
                        <p className="atl-review-name">{rev.author}</p>
                        <p className="atl-review-meta">{rev.meta}</p>
                      </div>
                      <div className="atl-review-stars">
                        {Array.from({ length: rev.stars || 5 }).map(
                          (_, sIdx) => (
                            <svg
                              key={sIdx}
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="#eab308"
                              stroke="#eab308"
                              strokeWidth="1"
                            >
                              <polygon points="12 2 15 9 22 9.5 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9.5 9 9" />
                            </svg>
                          )
                        )}
                      </div>
                    </div>
                    <p
                      className={`atl-review-text ${
                        expandedReviews[idx] ? 'is-expanded' : ''
                      }`}
                    >
                      {rev.text}
                    </p>
                    {rev.text.length > 180 && (
                      <button
                        type="button"
                        className="atl-review-more"
                        onClick={() => toggleReview(idx)}
                      >
                        {expandedReviews[idx] ? 'Show less' : 'Read more'}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs Section */}
        {hotel.faqs && hotel.faqs.length > 0 && (
          <section
            id="faq"
            className="atl-container-narrow atl-text-center"
            style={{ padding: '64px 20px' }}
          >
            <span className="atl-kicker">FAQ</span>
            <h2 className="atl-section-title" style={{ marginBottom: '40px' }}>
              Frequently Asked Questions
            </h2>
            <div className="atl-flex-col atl-gap-3" style={{ textAlign: 'left' }}>
              {hotel.faqs.map((faq, idx) => (
                <div key={idx} className="atl-faq-item">
                  <button
                    type="button"
                    className="atl-faq-question"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span className="atl-faq-question-text">{faq.q}</span>
                    {openFaq === idx ? (
                      <svg
                        className="atl-faq-icon-minus"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3a2b14"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    ) : (
                      <svg
                        className="atl-faq-icon-plus"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3a2b14"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    )}
                  </button>
                  {openFaq === idx && (
                    <p className="atl-faq-answer" style={{ display: 'block' }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
