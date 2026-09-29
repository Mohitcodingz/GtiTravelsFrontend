import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="atl-footer">
      {/* Ready When You Are CTA */}
      <div className="atl-footer-cta-wrap">
        <div className="atl-footer-cta">
          <div className="atl-footer-cta-copy">
            <span className="atl-footer-cta-kicker">Ready When You Are</span>
            <h2 className="atl-footer-cta-title">Plan Your Next Stay</h2>
            <p className="atl-footer-cta-text">
              Find the right stay for your next getaway with handpicked options, personalised recommendations and seamless booking assistance from Atulya Hospitality.
            </p>
            <div className="atl-flex atl-items-center atl-gap-3 atl-flex-wrap" style={{ marginBottom: '32px' }}>
              <span className="atl-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                24*7 Support
              </span>
              <span className="atl-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Booking Assistance
              </span>
            </div>
            <div className="atl-footer-cta-actions">
              <Link to="/hotels/" className="atl-btn atl-btn-gold">
                <span>Book A Stay</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14 6 20 12 14 18" />
                </svg>
              </Link>
              <a href="tel:+919315517530" className="atl-footer-cta-phone">
                9315517530
              </a>
            </div>
          </div>
          <div className="atl-footer-cta-media">
            <img
              src="/images/Golden-Waterhole-Villa.webp"
              alt="Heritage retreat photo"
              className="atl-img-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="atl-footer-links">
        <div className="atl-footer-links-grid">
          <div className="atl-footer-brand">
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '18px' }} aria-label="GTI Travels Pvt. Ltd. - Home">
              <img
                src="/images/GtiLogo.png"
                alt="GTI Travels Pvt. Ltd."
                width="180"
                height="56"
                style={{ objectFit: 'contain', display: 'block' }}
              />
            </Link>
            <p className="atl-footer-brand-text">
              From luxury resorts to scenic hillside stays, GTI Travels brings you carefully selected hotels and resorts across India, chosen for their comfort, location and memorable travel experiences.
            </p>
            <div className="atl-footer-social">
              <a href="https://www.facebook.com/atulyahospitality/" aria-label="Facebook" className="atl-icon-btn" target="_blank" rel="noopener noreferrer">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/atulya_hospitality/" aria-label="Instagram" className="atl-icon-btn" target="_blank" rel="noopener noreferrer">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
              </a>
              <a href="https://twitter.com/Atulya2230" aria-label="Twitter" className="atl-icon-btn" target="_blank" rel="noopener noreferrer">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="atl-footer-col">
            <h5 className="atl-footer-col-title">Navigate</h5>
            <div className="atl-footer-col-links">
              <Link to="/">Home</Link>
              <Link to="/hotels/">Hotels</Link>
              <Link to="/destinations/">Destinations</Link>
              <Link to="/about/">About Us</Link>
              <Link to="/contact/">Contact</Link>
            </div>
          </div>

          <div className="atl-footer-col">
            <h5 className="atl-footer-col-title">Discover</h5>
            <div className="atl-footer-col-links">
              <Link to="/blog/">Blog</Link>
              <Link to="/">Gallery</Link>
              <a href="#testimonials">Testimonials</a>
              <a href="#faq">FAQs</a>
            </div>
          </div>

          <div className="atl-footer-col-contact">
            <h5 className="atl-footer-col-title">Contact</h5>
            <div className="atl-footer-contact-list">
              <div className="atl-footer-contact-row">
                <span className="atl-footer-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href="tel:+919315517530" className="atl-footer-contact-text" style={{ color: 'inherit' }}>
                  9315517530
                </a>
              </div>
              <div className="atl-footer-contact-row is-start">
                <span className="atl-footer-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="atl-footer-contact-text">
                  Delhi – 663, 2nd Floor, Kakrola Housing Complex, Near Dwarka Mor, New Delhi – 110078
                </span>
              </div>
              <div className="atl-footer-contact-row">
                <span className="atl-footer-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 6 10-6" />
                  </svg>
                </span>
                <a href="mailto:sales@atulyahospitality.com" className="atl-footer-contact-text" style={{ color: 'inherit' }}>
                  sales@atulyahospitality.com
                </a>
              </div>
              <div className="atl-footer-contact-row">
                <span className="atl-footer-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </span>
                <a
                  href="https://wa.me/919315517530?text=Hello%20GTI%20Travels,%20I%20want%20to%20inquire%20about%20a%20stay."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="atl-footer-contact-text"
                  style={{ color: 'inherit' }}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="atl-footer-bottom">
          <p className="atl-footer-copyright">
            ©Copyright <Link to="/">GTI Travels Pvt. Ltd.</Link>. All rights reserved. 2026
          </p>
          <div className="atl-footer-legal-links">
            <Link to="/privacy-policy/">Privacy &amp; Policy</Link>
            <Link to="/terms-conditions/">Terms &amp; Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
