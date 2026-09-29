import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CreditCard, Building2, CheckCircle2, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PaymentDetailsPage() {
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
              <span className="atl-breadcrumb-current">Payment Details</span>
            </nav>
            <span className="atl-kicker-caps">Official Accounts</span>
            <h1 className="atl-page-title-heading" style={{ maxWidth: '820px', margin: '8px auto 12px' }}>Payment Details &amp; Wire Info</h1>
            <p className="atl-page-title-text" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Make secure payments for your verified resort stays and authorized safari permits through our authorized corporate banking channels.
            </p>
          </div>
        </div>
      </div>

      <div className="atl-container" style={{ padding: '60px 20px 80px', maxWidth: '840px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Bank Transfer Card */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '36px 32px',
              border: '1px solid rgba(208, 197, 175, 0.5)',
              boxShadow: 'var(--atl-shadow-card)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <Building2 size={28} style={{ color: 'var(--atl-gold)' }} />
              <div>
                <h3 style={{ fontSize: '20px', margin: 0, color: 'var(--atl-ink-900)' }}>
                  Bank Transfer / NEFT / RTGS / IMPS
                </h3>
                <span style={{ fontSize: '12px', color: 'var(--atl-ink-500)' }}>Official Current Account</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--atl-ink-500)', display: 'block' }}>Account Name</span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--atl-ink-900)' }}>ATULYA HOSPITALITY</span>
              </div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--atl-ink-500)', display: 'block' }}>Bank Name</span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--atl-ink-900)' }}>HDFC Bank</span>
              </div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--atl-ink-500)', display: 'block' }}>Account Number</span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--atl-gold-deep)' }}>50200088921456</span>
              </div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--atl-ink-500)', display: 'block' }}>IFSC Code</span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--atl-ink-900)' }}>HDFC0001234</span>
              </div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--atl-ink-500)', display: 'block' }}>Account Type</span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--atl-ink-900)' }}>Current Account</span>
              </div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--atl-ink-500)', display: 'block' }}>Branch</span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--atl-ink-900)' }}>Ramnagar, Nainital</span>
              </div>
            </div>
          </div>

          {/* UPI Payments */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '36px 32px',
              border: '1px solid rgba(208, 197, 175, 0.5)',
              boxShadow: 'var(--atl-shadow-card)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <CreditCard size={28} style={{ color: 'var(--atl-gold)' }} />
              <div>
                <h3 style={{ fontSize: '20px', margin: 0, color: 'var(--atl-ink-900)' }}>
                  Instant UPI Transfer
                </h3>
                <span style={{ fontSize: '12px', color: 'var(--atl-ink-500)' }}>Google Pay, PhonePe, Paytm, BHIM</span>
              </div>
            </div>

            <div style={{ background: 'var(--atl-surface)', padding: '16px 20px', borderRadius: '14px', border: '1px dashed var(--atl-gold)' }}>
              <span style={{ fontSize: '12px', color: 'var(--atl-ink-500)', display: 'block' }}>Official VPA / UPI ID</span>
              <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--atl-gold-deep)' }}>
                atulyahospitality@hdfcbank
              </span>
            </div>
          </div>

          {/* Payment Verification Instructions */}
          <div
            style={{
              background: '#f8f4ea',
              borderRadius: '20px',
              padding: '28px',
              border: '1px solid rgba(208, 197, 175, 0.6)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--atl-gold-deep)', fontWeight: 700, marginBottom: '12px' }}>
              <ShieldCheck size={20} />
              <span>Payment Confirmation Protocol</span>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--atl-ink-700)', lineHeight: 1.7, margin: 0 }}>
              After executing your transfer, please share the transaction UTR / screenshot with your booking representative via WhatsApp at <strong>+91-9315517530</strong> or email <strong>booking@atulyahospitality.com</strong>. Your official booking confirmation voucher and safari permits will be issued immediately upon receipt.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
