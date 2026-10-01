import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
            padding: '20px 24px 40px',
            border: '1px solid rgba(58, 43, 20, 0.15)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.03)'
          }}
        >
          <Header />
          <div className="atl-page-title" style={{ textAlign: 'center', padding: '36px 8px 12px' }}>
            <span
              className="atl-kicker-caps"
              style={{
                color: '#3a2b14',
                letterSpacing: '0.12em',
                fontWeight: 700,
                fontSize: '12px',
                display: 'block',
                marginBottom: '8px'
              }}
            >
              GET IN TOUCH
            </span>
            <h1
              className="atl-page-title-heading"
              style={{
                textAlign: 'center',
                margin: '8px auto 14px',
                fontFamily: 'var(--atl-font-display)',
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: 600,
                color: 'var(--atl-ink-900)'
              }}
            >
              We'd Love to Hear From You
            </h1>
            <p
              className="atl-page-title-text"
              style={{
                textAlign: 'center',
                margin: '0 auto',
                maxWidth: '640px',
                fontSize: '16px',
                lineHeight: 1.6,
                color: 'var(--atl-ink-700)'
              }}
            >
              Our team is always there to assist you with best planning for your vacation.
            </p>
          </div>
        </div>
      </div>

      <main>
        {/* Main 2-Column Contact Section */}
        <section
          id="lead-form"
          className="atl-container-content atl-section-lg atl-grid atl-gap-10 atl-items-start"
          style={{ paddingTop: '56px', paddingBottom: '64px' }}
        >
          {/* Left Column: Form Card */}
          <div className="atl-col-12 atl-lg-col-7 atl-contact-form-card" style={{ padding: '40px 36px', borderRadius: '24px' }}>
            <h2
              style={{
                fontFamily: 'var(--atl-font-display)',
                fontSize: '28px',
                fontWeight: 600,
                margin: '0 0 32px',
                color: 'var(--atl-ink-900)'
              }}
            >
              Send Us a Message
            </h2>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '36px 16px' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#e8f5e9',
                    color: '#2e7d32',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '28px'
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '10px', color: 'var(--atl-ink-900)' }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ color: 'var(--atl-ink-700)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                  Thank you for reaching out to GTI Travels Pvt. Ltd. Our travel concierge will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ firstName: '', email: '', phone: '', message: '' });
                  }}
                  style={{
                    backgroundColor: '#1a7efb',
                    color: '#ffffff',
                    padding: '12px 28px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '28px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--atl-ink-900)',
                      marginBottom: '6px'
                    }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter Your First Name"
                    required
                    className="atl-input-underline"
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1.5px solid #d1d5db',
                      outline: 'none',
                      padding: '10px 0',
                      fontSize: '15px',
                      color: 'var(--atl-ink-900)'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--atl-ink-900)',
                      marginBottom: '6px'
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="atl-input-underline"
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1.5px solid #d1d5db',
                      outline: 'none',
                      padding: '10px 0',
                      fontSize: '15px',
                      color: 'var(--atl-ink-900)'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--atl-ink-900)',
                      marginBottom: '6px'
                    }}
                  >
                    Phone/Mobile
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    required
                    className="atl-input-underline"
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1.5px solid #d1d5db',
                      outline: 'none',
                      padding: '10px 0',
                      fontSize: '15px',
                      color: 'var(--atl-ink-900)'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--atl-ink-900)',
                      marginBottom: '6px'
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="atl-input-underline"
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1.5px solid #d1d5db',
                      outline: 'none',
                      padding: '10px 0',
                      fontSize: '15px',
                      color: 'var(--atl-ink-900)',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: '#1a7efb',
                    color: '#ffffff',
                    width: '100%',
                    padding: '14px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '15px',
                    border: 'none',
                    cursor: 'pointer',
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

          {/* Right Column: Contact Details & Hours */}
          <div className="atl-col-12 atl-lg-col-5 atl-flex-col atl-gap-4">
            {/* Dark Card */}
            <div className="atl-contact-info-card" style={{ borderRadius: '24px', padding: '36px 32px' }}>
              <h3
                style={{
                  fontFamily: 'var(--atl-font-display)',
                  fontSize: '22px',
                  fontWeight: 600,
                  margin: '0 0 8px',
                  color: '#ffffff'
                }}
              >
                Contact Details
              </h3>

              <div className="atl-flex atl-items-center atl-gap-4">
                <span className="atl-contact-info-icon" style={{ background: 'rgba(255, 255, 255, 0.08)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9c349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <span className="atl-contact-info-label" style={{ color: '#e9c349' }}>Phone</span>
                  <span className="atl-contact-info-value">
                    <a href="tel:+919717327225" style={{ color: '#ffffff', textDecoration: 'none' }}>
                      +91-9717327225
                    </a>
                  </span>
                </div>
              </div>

              <div className="atl-flex atl-items-center atl-gap-4">
                <span className="atl-contact-info-icon" style={{ background: 'rgba(255, 255, 255, 0.08)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9c349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 6 10-6" />
                  </svg>
                </span>
                <div>
                  <span className="atl-contact-info-label" style={{ color: '#e9c349' }}>Email</span>
                  <span className="atl-contact-info-value">
                    <a href="mailto:contact@globaltourismindia.com" style={{ color: '#ffffff', textDecoration: 'none' }}>
                      contact@globaltourismindia.com
                    </a>
                  </span>
                </div>
              </div>

              <div className="atl-flex atl-items-start atl-gap-4">
                <span className="atl-contact-info-icon" style={{ background: 'rgba(255, 255, 255, 0.08)', marginTop: '2px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9c349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <span className="atl-contact-info-label" style={{ color: '#e9c349' }}>Office</span>
                  <span className="atl-contact-info-value" style={{ lineHeight: 1.45, display: 'block', fontSize: '14.5px' }}>
                    314, Laxmi Deep Building, District Centre, Laxmi Nagar, New Delhi, India - 110092
                  </span>
                </div>
              </div>

              <div className="atl-flex atl-items-start atl-gap-4">
                <span className="atl-contact-info-icon" style={{ background: 'rgba(255, 255, 255, 0.08)', marginTop: '2px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9c349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <span className="atl-contact-info-label" style={{ color: '#e9c349' }}>Office 2</span>
                  <span className="atl-contact-info-value" style={{ lineHeight: 1.45, display: 'block', fontSize: '14.5px' }}>
                    Jim Corbett – Dhikuli Village, Near Manu Maharani Resort, Jim Corbett National Park.
                  </span>
                </div>
              </div>

              <a
                href="https://wa.me/919717327225?text=I%20have%20an%20inquiry%20about%20Contact"
                target="_blank"
                rel="noopener noreferrer"
                className="atl-whatsapp-btn"
                style={{
                  backgroundColor: '#25d366',
                  color: '#ffffff',
                  borderRadius: '9999px',
                  padding: '14px',
                  fontWeight: 700,
                  fontSize: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  textDecoration: 'none',
                  marginTop: '10px',
                  transition: 'filter 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(0.92)')}
                onMouseLeave={(e) => (e.currentTarget.style.filter = 'none')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Operating Hours Card */}
            <div
              className="atl-contact-hours-card"
              style={{
                borderRadius: '16px',
                padding: '20px 24px',
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3a2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 16 14" />
              </svg>
              <div>
                <span className="atl-contact-hours-title" style={{ fontSize: '15px', fontWeight: 700, color: 'var(--atl-ink-900)' }}>
                  24*7 - All Days
                </span>
                <span className="atl-contact-hours-text" style={{ fontSize: '13px', color: 'var(--atl-ink-700)', display: 'block', marginTop: '2px' }}>
                  We are always available on Call
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section className="atl-container-content" style={{ paddingBottom: '96px' }}>
          <div
            className="atl-map-frame"
            style={{
              height: '420px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              border: '1px solid #e5e7eb',
              background: '#f3f4f6'
            }}
          >
            <iframe
              title="GTI Travels Pvt. Ltd. Office Location"
              src="https://www.google.com/maps?q=314,+Laxmi+Deep+Building,+District+Centre,+Laxmi+Nagar,+New+Delhi+-+110092&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
