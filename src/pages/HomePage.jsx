import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Compass, MapPin, Sparkles, CheckCircle2, ChevronRight, ShieldCheck, Calendar, Users, Eye, HelpCircle, Trees, Waves, Mountain, Castle, PhoneCall, Star, Check } from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FaqAccordion from '../components/FaqAccordion';

import destinationsData from '../data/destinations.json';
import siteData from '../data/siteData.json';

export default function HomePage() {
  const navigate = useNavigate();

  // Interactive Collections filter
  const [selectedCollection, setSelectedCollection] = useState('all');

  // 5 Signature Destinations with metadata
  const featuredDestinations = [
    {
      slug: 'jim-corbett',
      name: 'Jim Corbett',
      collection: 'wildlife',
      tag: 'Tiger Reserve • 25+ Resorts',
      badge: 'Riverside & Safari',
      state: 'Uttarakhand',
      image: '/images/jim-corbett-atulya.jpg',
      description: 'Discover jungle safaris, riverside resorts and peaceful forest surroundings in Jim Corbett, an exciting wildlife destination for families, couples and nature lovers seeking memorable getaways.'
    },
    {
      slug: 'nainital',
      name: 'Nainital',
      collection: 'hills',
      tag: 'Scenic Lakes & Colonial Stays',
      badge: 'Lakeside Serenity',
      state: 'Uttarakhand',
      image: '/images/nainital-atulya.jpg',
      description: 'Explore beautiful Nainital Lake, lively Mall Road and scenic mountain views while enjoying a refreshing hill holiday surrounded by nature, local attractions and charming stays.'
    },
    {
      slug: 'bhimtal',
      name: 'Bhimtal',
      collection: 'hills',
      tag: 'Quiet Waterfront Escape',
      badge: 'Tranquil Waters',
      state: 'Uttarakhand',
      image: '/images/fba300e0-8988-4170-9e14-3e06ef193c12-2-1.webp',
      description: 'Enjoy peaceful Bhimtal Lake, green hills and beautiful mountain views in a quieter hill destination offering relaxing stays, scenic surroundings and refreshing experiences close to nature.'
    },
    {
      slug: 'mukteshwar',
      name: 'Mukteshwar',
      collection: 'hills',
      tag: 'Himalayan Sunrise Panoramas',
      badge: '360° Mountain Peaks',
      state: 'Uttarakhand',
      image: '/images/Mukteshwar.webp',
      description: 'Experience Himalayan views, peaceful forests and fresh mountain surroundings in Mukteshwar, a charming hill destination for travellers looking for nature, relaxation and a slower escape.'
    },
    {
      slug: 'ranthambore',
      name: 'Ranthambore',
      collection: 'heritage',
      tag: 'Historic Forts & Tiger Safaris',
      badge: 'Royal Wilderness',
      state: 'Rajasthan',
      image: '/images/ranthambore-atulya.jpg',
      description: 'Experience exciting tiger safaris, historic Ranthambore Fort and beautiful forest landscapes in this famous Rajasthan wildlife destination, combining nature, adventure and heritage in one journey.'
    }
  ];

  const filteredDestinations = selectedCollection === 'all'
    ? featuredDestinations
    : selectedCollection === 'riverside'
      ? featuredDestinations.filter(d => d.slug === 'jim-corbett')
      : selectedCollection === 'wildlife'
        ? featuredDestinations.filter(d => d.slug === 'jim-corbett' || d.slug === 'ranthambore')
        : selectedCollection === 'hills'
          ? featuredDestinations.filter(d => d.slug === 'nainital' || d.slug === 'bhimtal' || d.slug === 'mukteshwar')
          : featuredDestinations;

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
            boxShadow: '0 20px 50px rgba(0,0,0,0.04)',
            position: 'relative'
          }}
        >
          {/* Top Navbar */}
          <Header />

          {/* Hero Main Content */}
          <div
            className="atl-container atl-hero-content-container"
            style={{
              paddingTop: '20px',
              paddingBottom: '8px'
            }}
          >
            <div className="atl-grid atl-hero-grid atl-items-stretch">
              {/* Left Column: White Hero Card & 3 Stat Cards */}
              <div className="atl-col-12 atl-lg-col-6 atl-flex-col atl-hero-left-col" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="atl-hero-white-card">
                  <div className="atl-hero-kicker-pill">
                    <Sparkles size={13} style={{ color: '#3a2b14' }} />
                    <span>JIM CORBETT SAFARIS & WILDLIFE EXPERIENCES</span>
                  </div>

                  <h1
                    className="atl-section-title"
                    style={{
                      fontSize: 'clamp(25px, 3.6vw, 42px)',
                      lineHeight: 1.12,
                      margin: '0 0 8px',
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--atl-ink-900)'
                    }}
                  >
                    Your Experience,<br />
                    <span style={{ fontStyle: 'italic', fontWeight: 600 }}>Our Commitment</span>{' '}
                    <span style={{ color: '#3a2b14' }}>✦</span>
                  </h1>

                  <div className="atl-gold-divider-tapered"></div>

                  <p
                    className="atl-page-title-text"
                    style={{
                      textAlign: 'left',
                      maxWidth: '470px',
                      margin: '0 0 28px',
                      color: 'var(--atl-ink-700)',
                      fontSize: '15.5px',
                      lineHeight: 1.68
                    }}
                  >
                    We guide you to visit the best season for Jim Corbett National Park Safari to enjoy fully.Wild Journey Corbett, a part of GTI Travels Pvt. Ltd. provides travel assistance to domestic and international visitors traveling to Corbett. Our services include hotel bookings, tour packages, and jungle safari booking assistance.
                  </p>

                  <div className="atl-hero-btn-group">
                    <Link
                      to="/hotels/"
                      className="atl-btn atl-btn-dark"
                      style={{
                        borderRadius: '9999px',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: '#3a2b14',
                        color: '#ffffff',
                        boxShadow: '0 6px 18px rgba(0,0,0,0.16)'
                      }}
                    >
                      <span>Stay wity Us</span>
                      <ArrowRight size={17} className="atl-shrink-0" />
                    </Link>

                    <Link
                      to="/tour-packages/"
                      className="atl-btn atl-btn-outline"
                      style={{
                        borderRadius: '9999px',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        borderColor: 'rgba(58, 43, 20, 0.45)',
                        color: 'var(--atl-ink-900)'
                      }}
                    >
                      <span>Memorable Tour</span>
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* 3 Compact Stat Cards */}
                <div className="atl-home-stats-grid">
                  <div
                    className="atl-stat-card atl-stat-card-dark atl-hero-stat-card"
                    style={{
                      position: 'relative',
                      background: '#3a2b14',
                      border: '1px solid rgba(58, 43, 20, 0.4)'
                    }}
                  >
                    <span className="atl-stat-mark" style={{ color: '#ffffff', position: 'absolute', display: 'inline-block', transition: 'transform 0.3s ease' }}>
                      ✦
                    </span>
                    <div className="atl-stat-value" style={{ color: '#ffffff', fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
                      45k+
                    </div>
                    <div className="atl-stat-label" style={{ color: 'rgba(255,255,255,0.78)', fontWeight: 500 }}>
                      Happy Guests
                    </div>
                  </div>

                  <div
                    className="atl-stat-card atl-stat-card-light atl-hero-stat-card"
                    style={{
                      position: 'relative',
                      background: '#ffffff',
                      border: '1px solid rgba(58, 43, 20, 0.12)'
                    }}
                  >
                    <span className="atl-stat-mark" style={{ color: '#3a2b14', position: 'absolute', display: 'inline-block', transition: 'transform 0.3s ease' }}>
                      ✦
                    </span>
                    <div className="atl-stat-value" style={{ color: 'var(--atl-ink-900)', fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
                      52+
                    </div>
                    <div className="atl-stat-label" style={{ color: 'var(--atl-ink-700)', fontWeight: 500 }}>
                     Resort Tie-Ups
                    </div>
                  </div>

                  <div
                    className="atl-stat-card atl-stat-card-light atl-hero-stat-card"
                    style={{
                      position: 'relative',
                      background: '#ffffff',
                      border: '1px solid rgba(58, 43, 20, 0.12)'
                    }}
                  >
                    <span className="atl-stat-mark" style={{ color: '#3a2b14', position: 'absolute', display: 'inline-block', transition: 'transform 0.3s ease' }}>
                      ✦
                    </span>
                    <div className="atl-stat-value" style={{ color: 'var(--atl-ink-900)', fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
                      19+
                    </div>
                    <div className="atl-stat-label" style={{ color: 'var(--atl-ink-700)', fontWeight: 500 }}>
                      Years in Hospitality
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Immovable 2x2 Quad Visual Grid with Equal Ratio Boxes */}
              <div className="atl-col-12 atl-lg-col-6 atl-hero-quad-col" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <div className="atl-hero-quad-wrap">

                  {/* Row 1 - Box 1: Wildlife Safari */}
                  <Link to="/jim-corbett-safari-booking/" className="atl-hero-quad-box" aria-label="Book Jungle Safari">
                    <img
                      src="/images/forJungleSafari.jpg"
                      alt="Forest Reserve & Wildlife Safari"
                      loading="eager"
                    />
                    <div className="atl-hero-quad-overlay" />
                    <div className="atl-hero-quad-badge">
                      <span>Jungle Safari</span>
                    </div>
                  </Link>

                  {/* Row 2 - Box 2: Kosi Riverfront */}
                  <Link to="/resorts-in-jim-corbett/" className="atl-hero-quad-box" aria-label="View Riverfront Resorts">
                    <img
                      src="images/forHotelBooking.jpg"
                      alt="Kosi Riverfront Resort Experience"
                      loading="eager"
                    />
                    <div className="atl-hero-quad-overlay" />
                    <div className="atl-hero-quad-badge">
                      <span>Hotel Booking</span>
                    </div>
                  </Link>

                  {/* Row 2 - Box 1: Signature Sanctuary */}
                  <Link to="/hotels/" className="atl-hero-quad-box" aria-label="Explore Signature Resorts">
                    <img
                      src="/images/forTour.jpg"
                      alt="Signature Resort Sanctuary"
                      loading="eager"
                    />
                    <div className="atl-hero-quad-overlay" />
                    <div className="atl-hero-quad-badge">
                      <span>Tour Package</span>
                    </div>
                  </Link>




                  {/* Row 2 - Box 2: Scenic Nature & Mountains */}
                  <Link to="/destinations/" className="atl-hero-quad-box" aria-label="Explore Curated Destinations">
                    <img
                      src="/images/forGroupBooking.jpg"
                      alt="Scenic Nature & Heritage Stays"
                      loading="eager"
                    />
                    <div className="atl-hero-quad-overlay" />
                    <div className="atl-hero-quad-badge">
                      <span>Group Booking</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* 1. About Us Section (Bespoke Bento Arrangement with Interactive Pillar Cards) */}
        <section className="atl-container atl-grid atl-gap-10 atl-items-center" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
          <div className="atl-col-12 atl-lg-col-5">
            <span className="atl-kicker">✦ Our Approach & Commitment✦</span>
            <h2 className="atl-section-title" style={{ margin: '10px 0 16px', lineHeight: 1.18 }}>
              Your Corbett Journey, Planned With Care
            </h2>

            <div style={{
              borderLeft: '3px solid #3a2b14',
              paddingLeft: '18px',
              margin: '0 0 20px',
              background: 'rgba(58, 43, 20, 0.05)',
              paddingTop: '10px',
              paddingBottom: '10px',
              borderRadius: '0 12px 12px 0'
            }}>
              <p style={{
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontSize: '17px',
                color: '#3a2b14',
                margin: 0,
                lineHeight: 1.55
              }}>
                "Reliable travel assistance for a comfortable, informed, and memorable Corbett experience"
              </p>
            </div>

            <p style={{ color: 'var(--atl-ink-700)', fontSize: '15px', lineHeight: '26px', margin: '0 0 24px' }}>
             Wild Journey Corbett is a private travel service provider helping guests plan and enjoy their Corbett experience through reliable hotel, tour, and safari booking assistance. We are not affiliated with the Forest Department or Corbett Tiger Reserve.

Based in Delhi, our team of experienced travel professionals assists guests throughout their travel planning and booking process. From choosing the right stay and planning tours to understanding safari booking procedures, we provide clear and timely assistance at every step.

We also help guests understand applicable park rules, regulations, guidelines, and Do’s and Don’ts, so they can travel responsibly and with greater confidence. Whether you are travelling solo, with family, friends, or as part of a group, our goal is to make your Corbett visit comfortable, organized, and memorable.
            </p>

            {/* <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/about/" className="atl-btn atl-btn-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span>Discover Our Story</span>
                <ArrowRight size={16} className="atl-shrink-0" />
              </Link>
              <a href="#explore-destinations" className="atl-btn atl-btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span>Explore Stays</span>
                <ChevronRight size={16} />
              </a>
            </div> */}  
          </div>

          {/* Right Column: 3 Interactive Bento Pillar Cards */}
          <div className="atl-col-12 atl-lg-col-7" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className="atl-about-pillar-card">
              <div className="atl-pillar-icon-box">
                <ShieldCheck size={22} style={{ color: '#3a2b14' }} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <h4 style={{ fontSize: '17px', fontWeight: 700, margin: 0, color: 'var(--atl-ink-900)' }}>
                    100% Physically Verified Properties
                  </h4>
                  <span style={{ fontSize: '10.5px', background: 'rgba(58, 43, 20, 0.12)', color: '#3a2b14', padding: '2px 8px', borderRadius: '9999px', fontWeight: 700 }}>
                    Certified
                  </span>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--atl-ink-700)', margin: 0, lineHeight: 1.55 }}>
                  Every hotel, riverside resort, and safari cottage is personally inspected on-ground for hygiene, bed comfort, river/jungle views, and dining quality.
                </p>
              </div>
            </div>

            <div className="atl-about-pillar-card">
              <div className="atl-pillar-icon-box">
                <Trees size={22} style={{ color: '#3a2b14' }} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <h4 style={{ fontSize: '17px', fontWeight: 700, margin: 0, color: 'var(--atl-ink-900)' }}>
                    Guaranteed Safari Permits &amp; Certified Naturalists
                  </h4>
                  <span style={{ fontSize: '10.5px', background: 'rgba(58, 43, 20, 0.12)', color: '#3a2b14', padding: '2px 8px', borderRadius: '9999px', fontWeight: 700 }}>
                    Official
                  </span>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--atl-ink-700)', margin: 0, lineHeight: 1.55 }}>
                  Official Forest Department liaison for Jim Corbett (Bijrani, Dhikala, Jhirna, Dhela) and Ranthambore gypsy permits with top-rated tracking naturalists.
                </p>
              </div>
            </div>

            <div className="atl-about-pillar-card">
              <div className="atl-pillar-icon-box">
                <PhoneCall size={20} style={{ color: '#3a2b14' }} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <h4 style={{ fontSize: '17px', fontWeight: 700, margin: 0, color: 'var(--atl-ink-900)' }}>
                    Dedicated 24/7 Vacation Specialist
                  </h4>
                  <span style={{ fontSize: '10.5px', background: 'rgba(58, 43, 20, 0.12)', color: '#3a2b14', padding: '2px 8px', borderRadius: '9999px', fontWeight: 700 }}>
                    Concierge
                  </span>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--atl-ink-700)', margin: 0, lineHeight: 1.55 }}>
                  From tailored meal plans (CP/MAP/AP) to private transfers and safari zone coordination, your dedicated travel host is a message away.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Partner Strip / Continuous Moving Logos Marquee with Soft Edge Masks */}
        <section className="atl-bg-cream-100" style={{ padding: '24px 0 28px', borderTop: '1px solid rgba(208, 197, 175, 0.3)', borderBottom: '1px solid rgba(208, 197, 175, 0.3)' }}>
          <div className="atl-container atl-text-center" style={{ marginBottom: '18px' }}>
            <span style={{
              fontSize: '11.5px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#3a2b14',
              opacity: 0.85
            }}>
              Trusted Hospitality Partners &amp; Premier Resorts
            </span>
          </div>
          <div className="atl-marquee-fade-wrap">
            <div className="atl-logo-marquee-wrap">
              <div className="atl-logo-marquee-track">
                <div className="atl-logo-marquee-set">
                  <img src="/images/2-logo.png" alt="Partner logo" className="atl-logo-marquee-img" />
                  <img src="/images/3-logo.png" alt="Partner logo" className="atl-logo-marquee-img" />
                  <img src="/images/6-logo.png" alt="Partner logo" className="atl-logo-marquee-img" />
                  <img src="/images/4-logo-1.png" alt="Partner logo" className="atl-logo-marquee-img" />
                  <img src="/images/1-logo.png" alt="Partner logo" className="atl-logo-marquee-img" />
                  <img src="/images/5-logo-2.png" alt="Partner logo" className="atl-logo-marquee-img" />
                </div>
                <div className="atl-logo-marquee-set" aria-hidden="true">
                  <img src="/images/2-logo.png" alt="Partner logo" className="atl-logo-marquee-img" />
                  <img src="/images/3-logo.png" alt="Partner logo" className="atl-logo-marquee-img" />
                  <img src="/images/6-logo.png" alt="Partner logo" className="atl-logo-marquee-img" />
                  <img src="/images/4-logo-1.png" alt="Partner logo" className="atl-logo-marquee-img" />
                  <img src="/images/1-logo.png" alt="Partner logo" className="atl-logo-marquee-img" />
                  <img src="/images/5-logo-2.png" alt="Partner logo" className="atl-logo-marquee-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Featured / Explore Destinations with Interactive Curated Collection Filters */}
        <section id="explore-destinations" className="atl-container" style={{ paddingTop: '56px', paddingBottom: '56px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
            <div>
              <span className="atl-kicker">Curated Stays</span>
              <h2 className="atl-section-title">Sightseeing in Corbett</h2>
            </div>

            {/* Curated Collection Filter Chips */}
            {/* <div className="atl-destination-filter-bar" style={{ margin: 0 }}>
              <button
                type="button"
                className={`atl-filter-chip ${selectedCollection === 'all' ? 'is-active' : ''}`}
                onClick={() => setSelectedCollection('all')}
              >
                <span>All Retreats</span>
              </button>
              <button
                type="button"
                className={`atl-filter-chip ${selectedCollection === 'riverside' ? 'is-active' : ''}`}
                onClick={() => setSelectedCollection('riverside')}
              >
                <Waves size={14} />
                <span>Riverside Sanctuaries</span>
              </button>
              <button
                type="button"
                className={`atl-filter-chip ${selectedCollection === 'wildlife' ? 'is-active' : ''}`}
                onClick={() => setSelectedCollection('wildlife')}
              >
                <Trees size={14} />
                <span>Tiger Reserves &amp; Safaris</span>
              </button>
              <button
                type="button"
                className={`atl-filter-chip ${selectedCollection === 'hills' ? 'is-active' : ''}`}
                onClick={() => setSelectedCollection('hills')}
              >
                <Mountain size={14} />
                <span>Himalayan Lakes &amp; Hills</span>
              </button>
            </div> */}
          </div>

          {/* Bespoke Dynamic Destination Layout: Flagship Spotlight + Quad Grid */}
          {selectedCollection === 'all' ? (
            <div>
              {/* Flagship Destination Spotlight (Jim Corbett) */}
              <div className="atl-spotlight-dest-wrap">
                {/* <div className="atl-spotlight-media" style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src="/images/jim-corbett-atulya.jpg"
                    alt="Jim Corbett National Park"
                  />
                </div> */}

                {/* <div className="atl-spotlight-body">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '12px' }}>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#c97a1a' }}>
                        Uttarakhand • 25+ Handpicked Stays
                      </span>
                      <span style={{ background: 'rgba(58, 43, 20, 0.12)', border: '1px solid rgba(58, 43, 20, 0.35)', padding: '3px 10px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, color: '#3a2b14' }}>
                        ★ Top Choice
                      </span>
                    </div>

                    <h3 style={{ fontSize: 'clamp(24px, 2.5vw, 32px)', fontFamily: 'Playfair Display, serif', fontWeight: 700, margin: '0 0 12px', color: 'var(--atl-ink-900)', lineHeight: 1.2 }}>
                      Jim Corbett National Park
                    </h3>

                    <p style={{ fontSize: '14.5px', color: 'var(--atl-ink-700)', lineHeight: 1.65, margin: '0 0 20px' }}>
                      India’s legendary tiger reserve offering riverside retreats along the clean Kosi river, luxury swimming pool villas in Dhikuli, and guaranteed morning open-gypsy safari permits across Bijrani, Dhikala and Jhirna zones.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '24px', background: 'rgba(58, 43, 20, 0.06)', padding: '12px 14px', borderRadius: '14px', border: '1px solid rgba(58, 43, 20, 0.25)' }}>
                      <div>
                        <span style={{ fontSize: '10.5px', color: 'var(--atl-ink-500)', textTransform: 'uppercase', display: 'block', fontWeight: 600 }}>Curated Stays</span>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--atl-ink-900)' }}>25+ Resorts</span>
                      </div>
                      <div>
                        <span style={{ fontSize: '10.5px', color: 'var(--atl-ink-500)', textTransform: 'uppercase', display: 'block', fontWeight: 600 }}>Best Season</span>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--atl-ink-900)' }}>Oct – Jun</span>
                      </div>
                      <div>
                        <span style={{ fontSize: '10.5px', color: 'var(--atl-ink-500)', textTransform: 'uppercase', display: 'block', fontWeight: 600 }}>Starting From</span>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: '#3a2b14' }}>₹3,699/nt</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <Link to="/destinations/jim-corbett/" className="atl-btn atl-btn-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '9999px', fontSize: '14px' }}>
                      <span>Explore Corbett Resorts</span>
                      <ArrowRight size={15} />
                    </Link>
                    <Link to="/jim-corbett-safari-booking/" className="atl-btn atl-btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '11px 20px', borderRadius: '9999px', fontSize: '13.5px' }}>
                      <span>Safari Permits</span>
                      <ChevronRight size={15} />
                    </Link>
                  </div>
                </div> */}
              </div>

              {/* 4 Companion Destinations Grid */}
              <div className="atl-grid atl-gap-6">
                {/* Nainital */}
                <div className="atl-col-12 atl-md-col-6 atl-lg-col-3">
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Link   aria-label="Explore Nainital" className="atl-retreat-card-media" style={{ borderRadius: '22px', overflow: 'hidden', height: '220px' }}>
                      <img src="/images/forCorbettWaterfall.jpg" alt="CorbettWaterfal" className="atl-img-cover" style={{ transition: 'transform 0.4s ease' }} />
                      <div className="atl-retreat-card-badge atl-badge" style={{ borderRadius: '9999px', fontSize: '11px', fontWeight: 600 }}>
                        Corbett
                      </div>
                      <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(25, 28, 29, 0.85)', backdropFilter: 'blur(6px)', color: '#ffffff', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 500 }}>
                        Emerald Lake Views
                      </div>
                    </Link>
                    <div className="atl-retreat-card-foot" style={{ marginTop: '12px' }}>
                      <div>
                        <span style={{ fontSize: '10.5px', fontWeight: 700, textTransform: 'uppercase', color: '#c97a1a' }}>NATURE ESCAPE</span>
                        <h3 className="atl-retreat-card-title" style={{ fontSize: '19px', margin: '2px 0 4px' }}>CorbettWaterfal</h3>
                        <p className="atl-retreat-card-text" style={{ fontSize: '13px', lineHeight: 1.45 }}>Scenic cascade surrounded by lush forest.</p>
                      </div>
                      <Link  aria-label="Explore Nainital" className="atl-btn-circle" style={{ flexShrink: 0 }}>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Bhimtal */}
                <div className="atl-col-12 atl-md-col-6 atl-lg-col-3">
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Link   aria-label="Explore Bhimtal" className="atl-retreat-card-media" style={{ borderRadius: '22px', overflow: 'hidden', height: '220px' }}>
                      <img src="/images/forDhangarhiMuseum.jpg" alt="DhangarhiMuseum" className="atl-img-cover" style={{ transition: 'transform 0.4s ease' }} />
                      <div className="atl-retreat-card-badge atl-badge" style={{ borderRadius: '9999px', fontSize: '11px', fontWeight: 600 }}>
                        Corbett
                      </div>
                      <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(25, 28, 29, 0.85)', backdropFilter: 'blur(6px)', color: '#ffffff', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 500 }}>
                        Island Lake &amp; Kayaking
                      </div>
                    </Link>
                    <div className="atl-retreat-card-foot" style={{ marginTop: '12px' }}>
                      <div>
                        <span style={{ fontSize: '10.5px', fontWeight: 700, textTransform: 'uppercase', color: '#c97a1a' }}>WILDLIFE HERITAGE</span>
                        <h3 className="atl-retreat-card-title" style={{ fontSize: '19px', margin: '2px 0 4px' }}>Dhangarhi Museum</h3>
                        <p className="atl-retreat-card-text" style={{ fontSize: '13px', lineHeight: 1.45 }}>Explore Corbett's wildlife and natural heritage.</p>
                      </div>
                      <Link   aria-label="Explore Bhimtal" className="atl-btn-circle" style={{ flexShrink: 0 }}>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mukteshwar */}
                <div className="atl-col-12 atl-md-col-6 atl-lg-col-3">
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Link   aria-label="Explore Mukteshwar" className="atl-retreat-card-media" style={{ borderRadius: '22px', overflow: 'hidden', height: '220px' }}>
                      <img src="/images/forGarjiyaDeviTemple.jpg" alt="GarjiyaDeviTemple" className="atl-img-cover" style={{ transition: 'transform 0.4s ease' }} />
                      <div className="atl-retreat-card-badge atl-badge" style={{ borderRadius: '9999px', fontSize: '11px', fontWeight: 600 }}>
                        Corbett
                      </div>
                      <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(25, 28, 29, 0.85)', backdropFilter: 'blur(6px)', color: '#ffffff', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 500 }}>
                        Himalayan Sunrise Peaks
                      </div>
                    </Link>
                    <div className="atl-retreat-card-foot" style={{ marginTop: '12px' }}>
                      <div>
                        <span style={{ fontSize: '10.5px', fontWeight: 700, textTransform: 'uppercase', color: '#c97a1a' }}>SPIRITUAL LANDMARK</span>
                        <h3 className="atl-retreat-card-title" style={{ fontSize: '19px', margin: '2px 0 4px' }}>Garjiya Devi Temple</h3>
                        <p className="atl-retreat-card-text" style={{ fontSize: '13px', lineHeight: 1.45 }}>Sacred riverside temple on the Kosi River.</p>
                      </div>
                      <Link  aria-label="Explore Mukteshwar" className="atl-btn-circle" style={{ flexShrink: 0 }}>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Ranthambore */}
                <div className="atl-col-12 atl-md-col-6 atl-lg-col-3">
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Link   aria-label="Explore Ranthambore" className="atl-retreat-card-media" style={{ borderRadius: '22px', overflow: 'hidden', height: '220px' }}>
                      <img src="/images/forCorbettMuseum.jpg" alt="CorbettMuseum" className="atl-img-cover" style={{ transition: 'transform 0.4s ease' }} />
                      <div className="atl-retreat-card-badge atl-badge" style={{ borderRadius: '9999px', fontSize: '11px', fontWeight: 600 }}>
                        Kaladhungi
                      </div>
                      <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(25, 28, 29, 0.85)', backdropFilter: 'blur(6px)', color: '#ffffff', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 500 }}>
                        Royal Fort &amp; Tigers
                      </div>
                    </Link>
                    <div className="atl-retreat-card-foot" style={{ marginTop: '12px' }}>
                      <div>
                        <span style={{ fontSize: '10.5px', fontWeight: 700, textTransform: 'uppercase', color: '#c97a1a' }}>CORBETT HERITAGE</span>
                        <h3 className="atl-retreat-card-title" style={{ fontSize: '19px', margin: '2px 0 4px' }}>Corbett Museum</h3>
                        <p className="atl-retreat-card-text" style={{ fontSize: '13px', lineHeight: 1.45 }}>Discover the legacy of Jim Corbett.</p>
                      </div>
                      <Link   aria-label="Explore Ranthambore" className="atl-btn-circle" style={{ flexShrink: 0 }}>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="atl-grid atl-gap-6">
              {filteredDestinations.map((d) => (
                <div key={d.slug} className="atl-col-12 atl-md-col-6 atl-lg-col-4">
                  <Link to={`/destinations/${d.slug}/`} aria-label={`Explore ${d.name}`} className="atl-retreat-card-media" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                    <img src={d.image} alt={d.name} className="atl-img-cover" style={{ transition: 'transform 0.4s ease' }} />
                    <div className="atl-retreat-card-badge atl-badge" style={{ borderRadius: '9999px', fontSize: '12px', fontWeight: 600 }}>
                      {d.state}
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      background: 'rgba(25, 28, 29, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: '#ffffff',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '11.5px',
                      fontWeight: 500,
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      {d.tag}
                    </div>
                  </Link>
                  <div className="atl-retreat-card-foot" style={{ marginTop: '14px' }}>
                    <div>
                      <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#c97a1a' }}>
                        {d.badge}
                      </span>
                      <h3 className="atl-retreat-card-title" style={{ fontSize: '20px', margin: '2px 0 4px' }}>{d.name}</h3>
                      <p className="atl-retreat-card-text" style={{ fontSize: '13.5px', lineHeight: 1.5 }}>{d.description}</p>
                    </div>
                    <Link to={`/destinations/${d.slug}/`} aria-label={`Explore ${d.name}`} className="atl-btn-circle" style={{ flexShrink: 0 }}>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 4. The Atulya Advantage (Bespoke Connected 4-Step Journey Rail) */}
        <section className="atl-container" style={{ paddingBottom: '60px' }}>
          <div className="atl-text-center" style={{ marginBottom: '44px' }}>
            <span className="atl-kicker">✦ The Atulya Difference</span>
            <h2 className="atl-section-title" style={{ margin: '8px 0 12px' }}>
              Why Discerning Travelers Book With Atulya
            </h2>
            <p style={{ maxWidth: '620px', margin: '0 auto', color: 'var(--atl-ink-700)', fontSize: '15.5px' }}>
              Unlike impersonal booking engines, we combine handpicked resort contracts with on-ground safari naturalists and a direct concierge.
            </p>
          </div>

          <div className="atl-journey-rail-wrap">
            <div className="atl-journey-rail-line" />

            {/* Step 1 */}
            <div className="atl-journey-node-card">
              <span className="atl-advantage-watermark">01</span>
              <div>
                <div className="atl-journey-node-pip">01</div>
                <div className="atl-advantage-badge">
                  <CheckCircle2 size={13} />
                  <span>Verified Luxury</span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--atl-ink-900)', marginTop: '14px', marginBottom: '8px' }}>
                  Physically Inspected Stays
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--atl-ink-700)', lineHeight: 1.6, margin: 0 }}>
                  Every hotel and riverside cottage is personally reviewed on-ground for hygiene, bed comfort, river/jungle views, and dining standards.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="atl-journey-node-card">
              <span className="atl-advantage-watermark">02</span>
              <div>
                <div className="atl-journey-node-pip">02</div>
                <div className="atl-advantage-badge">
                  <ShieldCheck size={13} />
                  <span>Safari Priority</span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--atl-ink-900)', marginTop: '14px', marginBottom: '8px' }}>
                  Guaranteed Forest Permits
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--atl-ink-700)', lineHeight: 1.6, margin: 0 }}>
                  Official Forest Department liaison for Jim Corbett &amp; Ranthambore open-gypsy morning and evening safari permits with expert naturalists.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="atl-journey-node-card">
              <span className="atl-advantage-watermark">03</span>
              <div>
                <div className="atl-journey-node-pip">03</div>
                <div className="atl-advantage-badge">
                  <Sparkles size={13} />
                  <span>Best Tariff</span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--atl-ink-900)', marginTop: '14px', marginBottom: '8px' }}>
                  Direct Resort Contracts
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--atl-ink-700)', lineHeight: 1.6, margin: 0 }}>
                  Direct partnership unlocks custom meal plans (CP, MAP, AP) and exclusive corporate &amp; family group discounts without OTA markups.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="atl-journey-node-card">
              <span className="atl-advantage-watermark">04</span>
              <div>
                <div className="atl-journey-node-pip">04</div>
                <div className="atl-advantage-badge">
                  <Users size={13} />
                  <span>On-Trip Host</span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--atl-ink-900)', marginTop: '14px', marginBottom: '8px' }}>
                  24/7 Dedicated Concierge
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--atl-ink-700)', lineHeight: 1.6, margin: 0 }}>
                  From driver coordination to early check-in and safari zone pickups, your dedicated vacation specialist is reachable in one click.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Signature Travel Experiences (With Crown Centerpiece Card) */}
        <section className="atl-container atl-text-center" style={{ paddingBottom: '60px' }}>
          <span className="atl-kicker">✦ Experiences</span>
          <h2 className="atl-section-title" style={{ marginBottom: '12px' }}>
            Signature Travel Experiences
          </h2>
          <p style={{ maxWidth: '560px', margin: '0 auto 44px', color: 'var(--atl-ink-700)', fontSize: '15.5px' }}>
            From sanctuary tiger safaris to lakeside heritage getaways, explore bespoke hospitality designed around your journey.
          </p>

          <div className="atl-grid atl-gap-6" style={{ textAlign: 'left', alignItems: 'stretch' }}>
            {/* Card 1: Hotel & Resort Booking (Ivory) */}
            <div className="atl-col-12 atl-md-col-4 atl-experience-card atl-experience-card-elevated" style={{ background: 'var(--atl-white)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="atl-experience-icon" style={{ background: 'rgba(58, 43, 20, 0.12)', borderRadius: '16px', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                    <polygon points="12 2 21 8 3 8" />
                    <line x1="4" y1="8" x2="4" y2="19" />
                    <line x1="8" y1="8" x2="8" y2="19" />
                    <line x1="12" y1="8" x2="12" y2="19" />
                    <line x1="16" y1="8" x2="16" y2="19" />
                    <line x1="20" y1="8" x2="20" y2="19" />
                    <line x1="3" y1="21" x2="21" y2="21" />
                  </svg>
                </div>
                <h3 className="atl-experience-title" style={{ fontSize: '20px', marginBottom: '10px' }}>Hotel &amp; Resort Booking</h3>
                <p className="atl-experience-text" style={{ fontSize: '14px', marginBottom: '18px' }}>
                  Handpicked stays across wildlife, hill and leisure destinations tailored to your preference.
                </p>
                <ul style={{ margin: '0 0 24px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--atl-ink-700)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#c97a1a' }}>✦</span> Verified Luxury &amp; Riverside Stays
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#c97a1a' }}>✦</span> Best Available Direct Tariff
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#c97a1a' }}>✦</span> Transparent Amenities &amp; Views
                  </li>
                </ul>
              </div>
              <Link to="/hotels/" className="atl-btn atl-btn-outline atl-btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', alignSelf: 'flex-start' }}>
                <span>Explore Stays</span>
                <ArrowRight size={14} className="atl-shrink-0" />
              </Link>
            </div>

            {/* Card 2: Safari Bookings (Crown Centerpiece - Obsidian & Gold) */}
            <div className="atl-col-12 atl-md-col-4 atl-experience-card-crown" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: '#3a2b14', color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  boxShadow: '0 4px 12px rgba(58, 43, 20, 0.35)'
                }}>
                  ★ Atulya Signature
                </div>
                <div className="atl-experience-icon" style={{ background: 'rgba(58, 43, 20, 0.16)', borderRadius: '16px', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', border: '1px solid rgba(58, 43, 20, 0.45)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                    <circle cx="12" cy="12" r="9" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88" fill="#3a2b14" />
                  </svg>
                </div>
                <h3 className="atl-experience-title" style={{ fontSize: '21px', marginBottom: '10px', color: '#ffffff' }}>Safari Bookings</h3>
                <p className="atl-experience-text" style={{ fontSize: '14px', marginBottom: '18px', color: 'rgba(255,255,255,0.85)' }}>
                  Assistance with Jim Corbett &amp; Ranthambore Jeep and Canter safari permits and bookings.
                </p>
                <ul style={{ margin: '0 0 24px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.9)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#3a2b14' }}>✦</span> Official Forest Dept Permit Support
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#3a2b14' }}>✦</span> Expert Certified Naturalist Guides
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#3a2b14' }}>✦</span> Morning &amp; Afternoon Zone Shifts
                  </li>
                </ul>
              </div>
              <Link to="/jim-corbett-safari-booking/" className="atl-btn atl-btn-dark atl-btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', alignSelf: 'flex-start', background: '#3a2b14', color: '#ffffff', fontWeight: 700, border: 'none' }}>
                <span>Book Safari</span>
                <ArrowRight size={14} className="atl-shrink-0" />
              </Link>
            </div>

            {/* Card 3: Group & Corporate Travel (Ivory) */}
            <div className="atl-col-12 atl-md-col-4 atl-experience-card atl-experience-card-elevated" style={{ background: 'var(--atl-white)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="atl-experience-icon" style={{ background: 'rgba(58, 43, 20, 0.12)', borderRadius: '16px', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                    <circle cx="12" cy="7" r="2.6" />
                    <circle cx="12" cy="17" r="2.6" />
                    <circle cx="7" cy="12" r="2.6" />
                    <circle cx="17" cy="12" r="2.6" />
                    <circle cx="12" cy="12" r="2" fill="#3a2b14" stroke="none" />
                  </svg>
                </div>
                <h3 className="atl-experience-title" style={{ fontSize: '20px', marginBottom: '10px' }}>Group &amp; Corporate Travel</h3>
                <p className="atl-experience-text" style={{ fontSize: '14px', marginBottom: '18px' }}>
                  Resort stays and travel planning for groups, corporate offsites and celebrations.
                </p>
                <ul style={{ margin: '0 0 24px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--atl-ink-700)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#c97a1a' }}>✦</span> Customized Offsite Itineraries
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#c97a1a' }}>✦</span> Conference &amp; Banquet Facilities
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#c97a1a' }}>✦</span> Dedicated On-Ground Coordinator
                  </li>
                </ul>
              </div>
              <Link to="/contact/" className="atl-btn atl-btn-outline atl-btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', alignSelf: 'flex-start' }}>
                <span>Inquire Group</span>
                <ArrowRight size={14} className="atl-shrink-0" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Why Choose Us / Why Travelers Choose Our Retreats (Interactive Strip + Dual Badges) */}
        {/* <section className="atl-container atl-grid atl-gap-10 atl-items-center" style={{ paddingBottom: '60px' }}>
          <div className="atl-col-12 atl-lg-col-6">
            <span className="atl-kicker">✦ Why Choose Us</span>
            <div style={{ margin: '8px 0 28px' }}>
              <h2 className="atl-section-title" style={{ margin: 0 }}>Why Travelers Choose Our Retreats</h2>
            </div>
            <div className="atl-flex-col atl-gap-4">
              <div className="atl-why-item-interactive">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  <span className="atl-why-number">01</span>
                </div>
                <div>
                  <h4 className="atl-why-title" style={{ fontSize: '18px', marginBottom: '6px', color: 'var(--atl-ink-900)' }}>
                    Curated Hotel &amp; Resort Selection
                  </h4>
                  <p className="atl-why-text" style={{ fontSize: '14px', lineHeight: 1.6, margin: 0, color: 'var(--atl-ink-700)' }}>
                    GTI Travels Pvt. Ltd. carefully selects premium hotels, riverside cottages, and wildlife lodges to ensure exceptional comfort, verified hygiene, and scenic beauty.
                  </p>
                </div>
              </div>

              <div className="atl-why-item-interactive">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  <span className="atl-why-number">02</span>
                </div>
                <div>
                  <h4 className="atl-why-title" style={{ fontSize: '18px', marginBottom: '6px', color: 'var(--atl-ink-900)' }}>
                    Personalized Safari &amp; Holiday Planning
                  </h4>
                  <p className="atl-why-text" style={{ fontSize: '14px', lineHeight: 1.6, margin: 0, color: 'var(--atl-ink-700)' }}>
                    Every itinerary is tailored to your dates, group size, and travel style—from romantic jungle getaways to family vacations with confirmed safari slots.
                  </p>
                </div>
              </div>

              <div className="atl-why-item-interactive">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  <span className="atl-why-number">03</span>
                </div>
                <div>
                  <h4 className="atl-why-title" style={{ fontSize: '18px', marginBottom: '6px', color: 'var(--atl-ink-900)' }}>
                    Dedicated On-Trip Travel Assistance
                  </h4>
                  <p className="atl-why-text" style={{ fontSize: '14px', lineHeight: 1.6, margin: 0, color: 'var(--atl-ink-700)' }}>
                    Our destination specialists assist you before, during, and after your trip, ensuring smooth check-ins, safari pickups, and a truly stress-free holiday.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="atl-col-12 atl-lg-col-6 atl-rounded-lg" style={{ position: 'relative', minHeight: '400px', height: '100%' }}>
            <img
              src="/images/home_Why-Choose-Us.webp"
              alt="Traveler overlooking a heritage valley"
              className="atl-img-cover"
              style={{ borderRadius: '26px', boxShadow: '0 16px 36px rgba(0,0,0,0.08)' }}
            />

            {/* Floating Trust Badge 1: Top Right */}
        {/* <div style={{
              position: 'absolute',
              top: '18px',
              right: '18px',
              background: 'rgba(25, 28, 29, 0.88)',
              backdropFilter: 'blur(8px)',
              color: '#ffffff',
              padding: '8px 14px',
              borderRadius: '9999px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid rgba(58, 43, 20, 0.45)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
            }}>
              <span className="atl-pulse-dot" />
              <span style={{ fontSize: '12px', fontWeight: 600 }}>100% Forest Dept Registered</span>
            </div> */}

        {/* Overlaid Floating Trust Card: Bottom Left */}
        {/* <div className="atl-floating-trust-badge" style={{ bottom: '20px', left: '20px' }}>
              <div style={{
                background: '#3a2b14', color: '#ffffff',
                borderRadius: '12px',
                padding: '10px 14px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ fontSize: '18px', fontWeight: 800, fontFamily: 'Playfair Display, serif' }}>16+</span>
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Years</span>
              </div>
              <div>
                <div style={{ color: '#f59e0b', fontSize: '12px', marginBottom: '2px' }}>
                  ★ ★ ★ ★ ★
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--atl-ink-900)' }}>
                  10,000+ Journeys Crafted
                </div>
                <div style={{ fontSize: '12px', color: 'var(--atl-ink-700)' }}>
                  100% Handpicked Indian Stays
                </div>
              </div>
            </div> */}
        {/* </div> */}
        {/* </section> */}

        {/* 7. 20% Bespoke Feature: Safari Zones Insider Exploration Strip */}
        {/* <section className="atl-container" style={{ paddingBottom: '60px' }}>
          <div className="atl-text-center" style={{ marginBottom: '40px' }}>
            <span className="atl-kicker">✦ Sanctuary Insider</span>
            <h2 className="atl-section-title" style={{ margin: '8px 0 10px' }}>
              Jim Corbett &amp; Ranthambore Safari Zones
            </h2>
            <p style={{ maxWidth: '580px', margin: '0 auto', color: 'var(--atl-ink-700)', fontSize: '15px' }}>
              Choose the right safari zone for your dates, wildlife interests, and resort location with our insider guide.
            </p>
          </div> */}

        {/* <div className="atl-grid atl-gap-6">
            <div className="atl-col-12 atl-md-col-6 atl-lg-col-3 atl-safari-zone-card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#c97a1a', textTransform: 'uppercase' }}>Jim Corbett</span>
                  <span style={{ fontSize: '11px', background: '#3a2b14', color: '#ffffff', fontWeight: 700, padding: '3px 8px', borderRadius: '6px' }}>Prime Zone</span>
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--atl-ink-900)', margin: '0 0 6px' }}>Bijrani Zone</h3>
                <div style={{ fontSize: '11.5px', color: '#3a2b14', fontWeight: 600, marginBottom: '8px' }}>
                  🐅 Bengal Tiger Prime Territory • Oct – Jun
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--atl-ink-700)', lineHeight: 1.55 }}>
                  Dense sal forest, stream crossings &amp; open chaur grasslands. Highest tiger sightings per gypsy trail.
                </p>
              </div>
              <Link to="/jim-corbett-safari-booking/" className="atl-btn atl-btn-dark atl-btn-sm" style={{ alignSelf: 'flex-start', marginTop: '14px', borderRadius: '9999px', fontSize: '12.5px' }}>
                <span>Book Bijrani Permit</span>
              </Link>
            </div>

            <div className="atl-col-12 atl-md-col-6 atl-lg-col-3 atl-safari-zone-card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#c97a1a', textTransform: 'uppercase' }}>Jim Corbett</span>
                  <span style={{ fontSize: '11px', background: '#3a2b14', color: '#ffffff', fontWeight: 700, padding: '3px 8px', borderRadius: '6px' }}>Canter / Stay</span>
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--atl-ink-900)', margin: '0 0 6px' }}>Dhikala Zone</h3>
                <div style={{ fontSize: '11.5px', color: '#3a2b14', fontWeight: 600, marginBottom: '8px' }}>
                  🐘 Ramganga River &amp; Herds • Nov – Jun
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--atl-ink-700)', lineHeight: 1.55 }}>
                  The deepest core sector alongside the scenic river. Historic forest rest houses, elephant herds, and marsh crocodiles.
                </p>
              </div>
              <Link to="/jim-corbett-safari-booking/" className="atl-btn atl-btn-dark atl-btn-sm" style={{ alignSelf: 'flex-start', marginTop: '14px', borderRadius: '9999px', fontSize: '12.5px' }}>
                <span>Book Dhikala Permit</span>
              </Link>
            </div>

            <div className="atl-col-12 atl-md-col-6 atl-lg-col-3 atl-safari-zone-card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#c97a1a', textTransform: 'uppercase' }}>Jim Corbett</span>
                  <span style={{ fontSize: '11px', background: '#e5e0d3', color: 'var(--atl-ink-900)', fontWeight: 700, padding: '3px 8px', borderRadius: '6px' }}>365 Days</span>
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--atl-ink-900)', margin: '0 0 6px' }}>Jhirna &amp; Dhela</h3>
                <div style={{ fontSize: '11.5px', color: '#3a2b14', fontWeight: 600, marginBottom: '8px' }}>
                  🌿 Buffer Sanctuary • Open All Year
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--atl-ink-700)', lineHeight: 1.55 }}>
                  Southern jungle buffer open 365 days a year. Rich birdwatching, sloth bears, wild boars, and calm riverbed trails.
                </p>
              </div>
              <Link to="/jim-corbett-safari-booking/" className="atl-btn atl-btn-dark atl-btn-sm" style={{ alignSelf: 'flex-start', marginTop: '14px', borderRadius: '9999px', fontSize: '12.5px' }}>
                <span>Book Jhirna Permit</span>
              </Link>
            </div>

            <div className="atl-col-12 atl-md-col-6 atl-lg-col-3 atl-safari-zone-card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#c97a1a', textTransform: 'uppercase' }}>Ranthambore</span>
                  <span style={{ fontSize: '11px', background: '#3a2b14', color: '#ffffff', fontWeight: 700, padding: '3px 8px', borderRadius: '6px' }}>Zones 1-5</span>
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--atl-ink-900)', margin: '0 0 6px' }}>Ranthambore Core</h3>
                <div style={{ fontSize: '11.5px', color: '#3a2b14', fontWeight: 600, marginBottom: '8px' }}>
                  🏰 Royal Fort &amp; Lakes • Oct – Jun
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--atl-ink-700)', lineHeight: 1.55 }}>
                  Historic 10th-century fort backdrop, Padam Talao lakes, and high royal tiger density with open Jeep &amp; Canter safaris.
                </p>
              </div>
              <Link to="/destinations/ranthambore/" className="atl-btn atl-btn-dark atl-btn-sm" style={{ alignSelf: 'flex-start', marginTop: '14px', borderRadius: '9999px', fontSize: '12.5px' }}>
                <span>Explore Ranthambore</span>
              </Link>
            </div>
          </div>
        </section> */}

        {/* 8. Regards from Travelers (Testimonials Carousel with Rating Header) */}
        <section id="testimonials" className="atl-bg-cream-100" style={{ background: 'var(--atl-cream-pill)', padding: '56px 0' }}>
          <div className="atl-container">
            <div className="atl-text-center" style={{ marginBottom: '40px' }}>
              <span className="atl-kicker">✦ Guest Reviews</span>
              <h2 className="atl-section-title" style={{ fontSize: '34px', margin: '8px 0 10px' }}>
                Regards from Travelers
              </h2>
              <p style={{ color: 'var(--atl-ink-700)', fontSize: '15px' }}>
                ⭐ 4.9/5 Average Guest Rating • Trusted by over 10,000+ happy travelers across India
              </p>
            </div>
            <TestimonialCarousel testimonials={siteData.testimonials} />
          </div>
        </section>

        {/* 9. Frequently Asked Questions (FAQ Accordion with Fast-Contact Prompt) */}
        <section id="faq" className="atl-container-narrow atl-text-center" style={{ padding: '56px 0' }}>
          <span className="atl-kicker">✦ FAQ</span>
          <h2 className="atl-section-title" style={{ marginBottom: '36px' }}>
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={siteData.faqs} />

          {/* WhatsApp / Direct Specialist Inquiry Prompt */}
          <div style={{
            marginTop: '40px',
            padding: '20px 28px',
            background: 'var(--atl-white)',
            borderRadius: '20px',
            border: '1px solid rgba(58, 43, 20, 0.35)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(0,0,0,0.03)'
          }}>
            <span style={{ fontSize: '14.5px', color: 'var(--atl-ink-700)', fontWeight: 500 }}>
              Have specific travel dates or a custom group requirement?
            </span>
            <a
              href="https://wa.me/919717327225?text=Hello%20GTI%20Travels%20Pvt.%20Ltd.,%20I%20have%20a%20question%20about%20booking%20a%20stay."
              target="_blank"
              rel="noopener noreferrer"
              className="atl-btn atl-btn-dark atl-btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '9999px', padding: '10px 20px' }}
            >
              <span className="atl-pulse-dot" />
              <span>Chat with Specialist</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </section>

        {/* 10. News & Articles From GTI Travels Pvt. Ltd. (Editorial Dual Showcase) */}
        {/* <section className="atl-container atl-grid atl-gap-10" style={{ paddingBottom: '64px', alignItems: 'center' }}> */}
        {/* <div className="atl-col-12 atl-lg-col-4">
            <span className="atl-kicker">✦ Blog &amp; Stories</span>
            <h2 className="atl-section-title" style={{ margin: '10px 0 16px', lineHeight: 1.2 }}>
              News &amp; Articles From Atulya
            </h2>
            <p style={{ color: 'var(--atl-ink-700)', fontSize: '15px', lineHeight: '25px', margin: '0 0 24px' }}>
              Inspiring travel guides, sanctuary wildlife tips, and riverside stories from travelers who discovered unforgettable retreats across India.
            </p>
            <Link to="/blog/" className="atl-btn atl-btn-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '9999px' }}>
              <span>Explore Our Blog</span>
              <ArrowRight size={16} className="atl-shrink-0" />
            </Link>
          </div>

          <div className="atl-col-12 atl-lg-col-8 atl-grid atl-gap-6">
            <div className="atl-col-12 atl-md-col-6">
              <Link to="/riverside-resorts-in-jim-corbett/" className="atl-journal-item" style={{ borderRadius: '22px', padding: '18px', border: '1px solid rgba(208, 197, 175, 0.45)', display: 'flex', flexDirection: 'column', height: '100%', background: '#ffffff', transition: 'all 0.3s ease' }}>
                <div className="atl-journal-item-media" style={{ borderRadius: '16px', overflow: 'hidden', height: '180px', marginBottom: '14px' }}>
                  <img
                    src="/images/goa-atulya-300x240.jpg"
                    className="atl-img-cover"
                    alt="Riverside Resorts in Jim Corbett"
                    style={{ transition: 'transform 0.4s ease' }}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#c97a1a',
                    background: 'rgba(58, 43, 20, 0.12)',
                    padding: '3px 8px',
                    borderRadius: '6px'
                  }}>
                    Corbett Guide
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--atl-ink-500)' }}>4 min read</span>
                </div>
                <h3 className="atl-journal-item-title" style={{ fontSize: '17px', marginBottom: '6px' }}>
                  Riverside Resorts in Jim Corbett
                </h3>
                <p className="atl-journal-item-text" style={{ fontSize: '13.5px', lineHeight: 1.5, marginBottom: '14px', flex: 1 }}>
                  Jim Corbett is an abode to enchanting Riverside Resorts along the clean pebble banks of the Kosi river...
                </p>
                <span className="atl-link-arrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: 'var(--atl-gold-deep)' }}>
                  Read Full Guide <ArrowRight size={14} className="atl-shrink-0" />
                </span>
              </Link>
            </div>

            <div className="atl-col-12 atl-md-col-6">
              <Link to="/jim-corbett-safari-booking/" className="atl-journal-item" style={{ borderRadius: '22px', padding: '18px', border: '1px solid rgba(208, 197, 175, 0.45)', display: 'flex', flexDirection: 'column', height: '100%', background: '#ffffff', transition: 'all 0.3s ease' }}>
                <div className="atl-journal-item-media" style={{ borderRadius: '16px', overflow: 'hidden', height: '180px', marginBottom: '14px' }}>
                  <img
                    src="/images/jim-corbett-atulya.jpg"
                    className="atl-img-cover"
                    alt="Safari Zones & Gypsy Booking Guide"
                    style={{ transition: 'transform 0.4s ease' }}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#3a2b14',
                    background: 'rgba(58, 43, 20, 0.12)',
                    padding: '3px 8px',
                    borderRadius: '6px'
                  }}>
                    Wildlife Tips
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--atl-ink-500)' }}>5 min read</span>
                </div>
                <h3 className="atl-journal-item-title" style={{ fontSize: '17px', marginBottom: '6px' }}>
                  Safari Zones &amp; Gypsy Booking Guide
                </h3>
                <p className="atl-journal-item-text" style={{ fontSize: '13.5px', lineHeight: 1.5, marginBottom: '14px', flex: 1 }}>
                  Everything you need to know about Bijrani, Dhikala, and Jhirna morning shifts and permit timings...
                </p>
                <span className="atl-link-arrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: 'var(--atl-gold-deep)' }}>
                  Read Full Guide <ArrowRight size={14} className="atl-shrink-0" />
                </span>
              </Link>
            </div>
          </div> */}
        {/* </section> */}
      </main>

      {/* Footer Component (includes 'Plan Your Next Stay' CTA banner + Complete Footer Links) */}
      <Footer />
    </div>
  );
}
