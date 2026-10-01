import React from 'react';
import { Phone } from 'lucide-react';

export default function MobileStickyBar() {
  return (
    <div className="atl-mobile-sticky-bar" aria-label="Quick Contact Bar">
      <div className="atl-mobile-sticky-inner"  >
        {/* Phone Button */}
        <a
          href="tel:+919717327225"
          className="atl-mobile-sticky-btn"
          aria-label="Call GTI Travels Pvt. Ltd."
        >
          <Phone size={17} strokeWidth={2.2} className="atl-shrink-0" />
          <span >PHONE</span>
        </a>

        {/* Subtle Divider */}
        <div className="atl-mobile-sticky-divider" aria-hidden="true" />

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919717327225?text=Hello%20GTI%20Travels%20Pvt.%20Ltd.,%20I%20want%20to%20inquire%20about%20a%20stay."
          target="_blank"
          rel="noopener noreferrer"
          className="atl-mobile-sticky-btn"
          aria-label="Chat on WhatsApp"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="atl-shrink-0"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <span>WHATSAPP</span>
        </a>
      </div>
    </div>
  );
}
