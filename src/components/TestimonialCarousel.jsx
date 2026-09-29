import React, { useRef } from 'react';

export default function TestimonialCarousel({ testimonials }) {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    if (!trackRef.current) return;
    const step = 364;
    trackRef.current.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth'
    });
  };

  if (!testimonials || !testimonials.length) return null;

  return (
    <div className="atl-relative">
      <div
        ref={trackRef}
        className="atl-testimonial-track"
        style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          paddingBottom: '8px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {testimonials.map((t, idx) => (
          <React.Fragment key={idx}>
            {t.photo && (
              <div className="atl-testimonial-photo atl-rounded-lg">
                <img src={t.photo} alt={t.name} className="atl-img-cover" loading="lazy" />
              </div>
            )}
            <div className="atl-testimonial-card">
              <div className="atl-testimonial-stars">{t.stars || '★★★★★'}</div>
              <p className="atl-testimonial-quote" style={{ whiteSpace: 'pre-line' }}>
                {t.quote}
              </p>
              <p className="atl-testimonial-name">{t.name}</p>
              <p className="atl-testimonial-place">{t.place}</p>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="atl-testimonial-controls">
        <button
          type="button"
          onClick={() => scroll('left')}
          className="atl-btn-circle-outline"
          aria-label="Previous"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
            <line x1="20" y1="12" x2="4" y2="12" />
            <polyline points="10 18 4 12 10 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scroll('right')}
          className="atl-btn-circle-outline"
          aria-label="Next"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
            <line x1="4" y1="12" x2="20" y2="12" />
            <polyline points="14 6 20 12 14 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
