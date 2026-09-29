import React, { useState } from 'react';

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  if (!items || !items.length) return null;

  return (
    <div className="atl-flex-col atl-gap-3" style={{ textAlign: 'left' }}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`atl-faq-item ${isOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="atl-faq-question"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
            >
              <span className="atl-faq-question-text">{item.q}</span>
              {isOpen ? (
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
            <p className="atl-faq-answer">{item.a}</p>
          </div>
        );
      })}
    </div>
  );
}
