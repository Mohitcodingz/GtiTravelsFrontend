import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Sync is-nav-menu-open class on body
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('is-nav-menu-open');
    } else {
      document.body.classList.remove('is-nav-menu-open');
    }
  }, [mobileMenuOpen]);

  return (
    <div className="atl-nav-row">
      <nav className="atl-navbar">
        {/* Brand Logo */}
        <Link to="/" className="atl-navbar-logo" style={{ textDecoration: 'none',width:'150px' }} aria-label="GTI Travels Pvt. Ltd. - Home">
          <img
            src="/images/GtiLogo.png"
            alt="GTI Travels Pvt. Ltd."
            width="170"
            height="52"
            style={{ objectFit: 'contain', display: 'block' }}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="atl-nav-links">
          <Link
            to="/"
            className={`atl-nav-link ${location.pathname === '/' ? 'is-active' : ''}`}
          >
            Home
          </Link>

<Link
            to="/jim-corbett-safari-booking/"
            className={`atl-nav-link ${location.pathname.startsWith('/jim-corbett-safari-booking') ? 'is-active' : ''}`}
          >
            Jungle Safari
          </Link>

          <Link to="/hotels/" className={`atl-nav-link ${location.pathname.startsWith('/hotel') ? 'is-active' : ''}`}>
            Hotel Booking
          </Link>

          <Link to="/tour-packages/" className={`atl-nav-link ${location.pathname.startsWith('/tour') ? 'is-active' : ''}`}>
            Tour Package
          </Link>

          

          <Link
            to="/payment-details/"
            className={`atl-nav-link ${location.pathname.startsWith('/payment-details') ? 'is-active' : ''}`}
          >
            Pay Now
          </Link>

          <Link
            to="/contact/"
            className={`atl-nav-link ${location.pathname.startsWith('/contact') ? 'is-active' : ''}`}
          >
            Contact Us
          </Link>
        </div>

        {/* Phone CTA */}
        <div className="atl-nav-cta">
          <a
            href="tel:+919717327225"
            className="atl-btn atl-btn-dark atl-btn-sm"
          >
            <Phone size={15} className="atl-shrink-0" />
            <span>Call +91-9717327225</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="atl-nav-hamburger"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Slide-down Panel */}
      <div className={`atl-nav-mobile-panel ${mobileMenuOpen ? 'is-open' : ''}`}>
        <Link to="/" className="atl-nav-mobile-link">
          Home
        </Link>
  <Link to="/jim-corbett-safari-booking/" className={`atl-nav-mobile-link ${location.pathname.startsWith('/jim-corbett-safari-booking') ? 'is-active' : ''}`}>
         Jungle Safari
        </Link>
        <Link to="/hotels/" className={`atl-nav-mobile-link ${location.pathname.startsWith('/hotel') ? 'is-active' : ''}`}>
          Hotel Booking
        </Link>
        <Link to="/tour-packages/" className={`atl-nav-mobile-link ${location.pathname.startsWith('/tour') ? 'is-active' : ''}`}>
          Tour Package
        </Link>
      
        <Link to="/payment-details/" className={`atl-nav-mobile-link ${location.pathname.startsWith('/payment-details') ? 'is-active' : ''}`}>
          Pay Now
        </Link>
        <Link to="/contact/" className={`atl-nav-mobile-link ${location.pathname.startsWith('/contact') ? 'is-active' : ''}`}>
          Contact Us
        </Link>

        {/* Mobile Action Buttons */}
        <div className="atl-nav-mobile-actions" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
          <a
            href="tel:+919717327225"
            className="atl-btn atl-btn-dark atl-btn-block"
            style={{ justifyContent: 'center' }}
          >
            <Phone size={15} />
            <span>Call +91-9717327225</span>
          </a>
        </div>
      </div>
    </div>
  );
}
