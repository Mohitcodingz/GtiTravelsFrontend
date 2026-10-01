import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LegalPage({ type }) {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions';

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
          <div className="atl-page-title" style={{ textAlign: 'center', padding: '24px 8px 8px' }}>
            <nav className="atl-breadcrumb" style={{ justifyContent: 'center', marginBottom: '14px' }}>
              <Link to="/">Home</Link>
              <span style={{ opacity: 0.5 }}>/</span>
              <span className="atl-breadcrumb-current">{title}</span>
            </nav>
            <span className="atl-kicker-caps">Legal &amp; Policies</span>
            <h1 className="atl-page-title-heading" style={{ margin: '8px auto 12px' }}>{title}</h1>
            <p className="atl-page-title-text" style={{ margin: '0 auto', maxWidth: '640px' }}>
              {isPrivacy
                ? 'How we collect, use, and protect your information when you book a stay with GTI Travels Pvt. Ltd.'
                : 'The terms and conditions that apply when you book and stay with GTI Travels Pvt. Ltd.'}
            </p>
          </div>
        </div>
      </div>

      <div className="atl-container" style={{ padding: '60px 20px 90px', maxWidth: '860px' }}>
        <div
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '44px 36px',
            border: '1px solid rgba(208, 197, 175, 0.4)',
            boxShadow: 'var(--atl-shadow-card)',
            color: 'var(--atl-ink-700)',
            lineHeight: 1.8,
            fontSize: '15px'
          }}
        >
          {isPrivacy ? (
            <div>
              <h3 style={{ fontSize: '20px', color: 'var(--atl-ink-900)', marginBottom: '12px' }}>1. Information We Collect</h3>
              <p style={{ marginBottom: '20px' }}>
                GTI Travels Pvt. Ltd. collects information necessary to confirm your travel reservations, including your name, contact phone number, email address, identity proof details (required for government forest department safari permits), and stay preferences.
              </p>

              <h3 style={{ fontSize: '20px', color: 'var(--atl-ink-900)', marginBottom: '12px' }}>2. Use of Information</h3>
              <p style={{ marginBottom: '20px' }}>
                We use your contact details solely to confirm hotel rooms, issue authorized safari permits, send booking vouchers, and communicate pertinent itinerary updates. We do not sell or rent personal information to unauthorized third-party commercial marketing entities.
              </p>

              <h3 style={{ fontSize: '20px', color: 'var(--atl-ink-900)', marginBottom: '12px' }}>3. Data Security</h3>
              <p style={{ marginBottom: '20px' }}>
                All sensitive guest data transmitted for safari permit booking is handled through encrypted, secure systems and retained strictly in compliance with applicable wildlife conservation tourism guidelines.
              </p>

              <h3 style={{ fontSize: '20px', color: 'var(--atl-ink-900)', marginBottom: '12px' }}>4. Contact Us</h3>
              <p>
                If you have any questions regarding your data privacy, please reach out to us at <strong>contact@globaltourismindia.com</strong> or call <strong>+91-9717327225</strong>.
              </p>
            </div>
          ) : (
            <div>
              <h3 style={{ fontSize: '20px', color: 'var(--atl-ink-900)', marginBottom: '12px' }}>1. Booking &amp; Reservation Confirmation</h3>
              <p style={{ marginBottom: '20px' }}>
                Bookings made through GTI Travels Pvt. Ltd. are confirmed upon receipt of advance deposit and issuance of an official booking voucher. Rates quoted include specified meal plans and mandatory taxes as listed on your invoice.
              </p>

              <h3 style={{ fontSize: '20px', color: 'var(--atl-ink-900)', marginBottom: '12px' }}>2. Wildlife Safari Regulations</h3>
              <p style={{ marginBottom: '20px' }}>
                Safari bookings in Jim Corbett and Ranthambore are strictly governed by state forest department rules. Safari permits once issued are non-transferable, non-refundable, and non-amendable. Guests must present the exact original government ID submitted during registration.
              </p>

              <h3 style={{ fontSize: '20px', color: 'var(--atl-ink-900)', marginBottom: '12px' }}>3. Cancellation &amp; Refund Policy</h3>
              <p style={{ marginBottom: '20px' }}>
                Resort cancellation policies vary depending on the partner hotel and peak season guidelines. Generally, cancellations received 15+ days prior to check-in are eligible for a refund after deduction of administrative charges. No refunds apply for no-shows or cancellations within 7 days of arrival.
              </p>

              <h3 style={{ fontSize: '20px', color: 'var(--atl-ink-900)', marginBottom: '12px' }}>4. Jurisdiction</h3>
              <p>
                Any legal disputes arising out of bookings or services provided by GTI Travels Pvt. Ltd. shall be subject to the exclusive jurisdiction of the competent courts in Ramnagar, Nainital District, Uttarakhand.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
