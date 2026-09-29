import React, { useState } from 'react';
import { Calendar, Clock, Users, ShieldCheck, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DatePicker, { formatDateValue } from '../components/DatePicker';
import safariData from '../data/safari.json';

export default function SafariBookingPage() {
  const [zone, setZone] = useState('Jungle Safari Corbett');
  const [shift, setShift] = useState('Morning');
  const [date, setDate] = useState('');
  const [dateError, setDateError] = useState(false);
  const [persons, setPersons] = useState('4');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      setDateError(true);
      return;
    }
    setSubmitted(true);
  };

  const whatsappInquiry = encodeURIComponent(
    `Hello Atulya Hospitality,\nI want to book Jim Corbett Safari:\n` +
    // `• Zone: ${zone}\n` +
    `• Shift: ${shift}\n` +
    `• Date: ${date || 'Flexible'}\n` +
    `• Persons: ${persons}\n` +
    (name ? `• Name: ${name}\n` : '') +
    (phone ? `• Phone: ${phone}\n` : '')
  );

  return (
    <div className="atl-page-wrap atl-safari-page">
      {/* Hero Section Container */}
      <div className="atl-hero-wrap" style={{ padding: '16px 16px 0' }}>
        <div
          className="atl-hero-card"
          style={{
            background: '#f8f4ea',
            borderRadius: '32px',
            padding: '20px 24px 32px',
            border: '1px solid rgba(58, 43, 20, 0.15)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.03)'
          }}
        >
          <Header />

          {/* Safari Hero Banner */}
          <div
            style={{
              position: 'relative',
              height: '380px',
              marginTop: '16px',
              borderRadius: '24px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          >
            <img
              src="/images/home_hero_image_3.webp"
              alt="Jim Corbett Tiger Safari"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(20,23,24,0.92) 0%, rgba(20,23,24,0.5) 60%, rgba(0,0,0,0.2) 100%)'
              }}
            />

            <div className="atl-container" style={{ position: 'relative', zIndex: 2, color: '#ffffff', padding: '0 32px' }}>
              <div style={{ maxWidth: '640px' }}>
                <span
                  style={{
                    background: 'var(--atl-gold)',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    display: 'inline-block',
                    marginBottom: '12px'
                  }}
                >
                  Official Booking Counter
                </span>
                <h1 style={{ fontSize: 'clamp(32px, 4.8vw, 54px)', color: '#ffffff', marginBottom: '14px', fontFamily: 'Playfair Display, serif' }}>
                  Jim Corbett Safari Booking
                </h1>
                <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
                  Authorized Open-Top 4x4 Jeep &amp; Canter Safaris. Book official permits with experienced naturalist drivers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="atl-container" style={{ padding: '60px 20px 80px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.8fr) minmax(320px, 1.1fr)',
            gap: '48px',
            alignItems: 'start'
          }}
          className="atl-safari-layout"
        >
          {/* Left Column: Zones & Pricing */}
          <div className="atl-safari-context">
            {/* Pricing Matrix */}
            <section style={{ marginBottom: '44px' }}>
              <h2 style={{ fontSize: '26px', marginBottom: '18px' }}>
                Official Safari Tariffs &amp;
                Pricing
              </h2>
              <div style={{ display: 'grid', gap: '16px' }}>
                {safariData.pricingTable.map((pt, i) => (
                  <div
                    key={i}
                    style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      padding: '20px 24px',
                      border: '1px solid rgba(208, 197, 175, 0.4)',
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '14px'
                    }}
                  >
                    <div>
                      <h4 style={{ fontSize: '17px', margin: '0 0 4px', color: 'var(--atl-ink-900)' }}>
                        {pt.type}
                      </h4>
                      <p style={{ fontSize: '13px', color: 'var(--atl-ink-500)', margin: 0 }}>
                        {pt.detail}
                      </p>
                    </div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--atl-gold-deep)', fontFamily: 'Playfair Display, serif' }}>
                      {pt.price}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Timings */}
            <section style={{ marginBottom: '44px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>
                Safari Timings &amp; Shifts
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div style={{ background: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid rgba(208, 197, 175, 0.4)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--atl-gold)', fontWeight: 700, marginBottom: '6px' }}>
                    <Clock size={18} />
                    <span>Morning Shift</span>
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--atl-ink-900)' }}>
                    {safariData.timing.morning}
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--atl-ink-500)', margin: '4px 0 0' }}>
                    Best for early bird calls and dawn tiger prowls.
                  </p>
                </div>

                <div style={{ background: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid rgba(208, 197, 175, 0.4)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--atl-gold)', fontWeight: 700, marginBottom: '6px' }}>
                    <Clock size={18} />
                    <span>Afternoon Shift</span>
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--atl-ink-900)' }}>
                    {safariData.timing.afternoon}
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--atl-ink-500)', margin: '4px 0 0' }}>
                    Ideal for waterhole sightings and afternoon herd activity.
                  </p>
                </div>
              </div>
            </section>

            {/* Core Safari Zones */}
            <section style={{ marginBottom: '44px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>
                Safari Tourism Zones Guide
              </h3>
              <div style={{ display: 'grid', gap: '16px' }}>
                {safariData.zones.map((z, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      padding: '20px 24px',
                      border: '1px solid rgba(208, 197, 175, 0.4)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <h4 style={{ fontSize: '18px', margin: 0, color: 'var(--atl-ink-900)' }}>{z.name}</h4>
                      <span style={{ fontSize: '11.5px', background: 'var(--atl-cream-100)', color: 'var(--atl-gold-deep)', fontWeight: 700, padding: '3px 8px', borderRadius: '6px' }}>
                        {z.status}
                      </span>
                    </div>
                    <div style={{ fontSize: '12.5px', color: 'var(--atl-gold)', fontWeight: 600, marginBottom: '6px' }}>
                      {z.gate} · {z.type}
                    </div>
                    <p style={{ fontSize: '13.5px', color: 'var(--atl-ink-700)', margin: 0, lineHeight: 1.6 }}>
                      {z.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Important Guidelines */}
            <section style={{ background: '#f5f0e3', padding: '24px', borderRadius: '20px', border: '1px solid rgba(208, 197, 175, 0.5)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--atl-gold-deep)', fontWeight: 700, marginBottom: '12px' }}>
                <AlertCircle size={18} />
                <span>Important Booking Regulations</span>
              </div>
              <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '13.5px', color: 'var(--atl-ink-700)', lineHeight: 1.7 }}>
                {safariData.guidelines.map((g, i) => (
                  <li key={i} style={{ marginBottom: '6px' }}>{g}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column: Safari Reservation Form */}
          <div className="atl-safari-reservation">
            <div
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(208, 197, 175, 0.5)',
                boxShadow: 'var(--atl-shadow-card)',
                padding: '32px 28px',
                position: 'sticky',
                top: '100px'
              }}
            >
              {/* <div style={{ borderBottom: '1px solid rgba(208, 197, 175, 0.3)', paddingBottom: '18px', marginBottom: '22px' }}>
                <span style={{ fontSize: '12px', color: 'var(--atl-ink-500)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                  Reserve Official Permit
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '4px' }}>
                  <span style={{ fontSize: '32px', fontWeight: 700, color: 'var(--atl-gold-deep)', fontFamily: 'Playfair Display, serif' }}>
                    ₹8,000
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--atl-ink-500)' }}>/ Jeep (All Inclusive)</span>
                </div>
              </div> */}

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <CheckCircle2 size={44} style={{ color: 'var(--atl-gold)', margin: '0 auto 12px' }} />
                  <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>Safari Request Received!</h4>
                  <p style={{ fontSize: '13px', color: 'var(--atl-ink-700)', lineHeight: 1.6, marginBottom: '16px' }}>
                    Our forest permit desk will contact you to collect traveler IDs and confirm your slot.
                  </p>
                  <a
                    href={`https://wa.me/919315517530?text=${whatsappInquiry}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="atl-btn atl-btn-whatsapp atl-btn-block"
                    style={{ justifyContent: 'center' }}
                  >
                    <MessageCircle size={16} />
                    <span>Connect on WhatsApp Now</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--atl-ink-700)', display: 'block', marginBottom: '6px' }}>
                      Preferred Zone
                    </label>
                    <button
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid rgba(208, 197, 175, 0.8)', fontSize: '13px', background: '#fff', outline: 'none' }}
                    >{zone}</button>
                    {/* <select
                      value={zone}
                      onChange={(e) => setZone(e.target.value)}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid rgba(208, 197, 175, 0.8)', fontSize: '13px', background: '#fff', outline: 'none' }}
                    >
                      {safariData.zones.map((z, i) => (
                        <option key={i} value={z.name}>{z.name} ({z.type})</option>
                      ))}
                    </select> */}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--atl-ink-700)', display: 'block', marginBottom: '6px' }}>
                        Shift
                      </label>
                      <select
                        value={shift}
                        onChange={(e) => setShift(e.target.value)}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid rgba(208, 197, 175, 0.8)', fontSize: '13px', background: '#fff', outline: 'none' }}
                      >
                        <option value="Morning">Morning (06:00 AM)</option>
                        <option value="Afternoon">Afternoon (02:30 PM)</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--atl-ink-700)', display: 'block', marginBottom: '6px' }}>
                        Date of Safari
                      </label>
                      <div className="date-picker-wrapper">
                        <DatePicker
                          value={date}
                          onChange={(value) => {
                            setDate(value);
                            setDateError(false);
                          }}
                          min={formatDateValue(new Date())}
                          error={dateError}
                          required
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            borderRadius: '10px',
                            border: '1px solid rgba(208, 197, 175, 0.8)',
                            fontSize: '13px',
                            outline: 'none'
                          }}
                        />
                      </div>
                      {dateError && <span className="atl-date-picker-error">Please select a safari date.</span>}
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--atl-ink-700)', display: 'block', marginBottom: '6px' }}>
                      Number of Persons (Max 6 per Jeep)
                    </label>
                    <select
                      value={persons}
                      onChange={(e) => setPersons(e.target.value)}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid rgba(208, 197, 175, 0.8)', fontSize: '13px', background: '#fff', outline: 'none' }}
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="5">5 Persons</option>
                      <option value="6">6 Persons (Full Jeep)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--atl-ink-700)', display: 'block', marginBottom: '6px' }}>
                      Lead Traveler Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vikramaditya Singh"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid rgba(208, 197, 175, 0.8)', fontSize: '13px', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--atl-ink-700)', display: 'block', marginBottom: '6px' }}>
                      Email
                    </label>
                    <input
                      type="tel"
                      placeholder="John@gmail.com"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid rgba(208, 197, 175, 0.8)', fontSize: '13px', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--atl-ink-700)', display: 'block', marginBottom: '6px' }}>
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid rgba(208, 197, 175, 0.8)', fontSize: '13px', outline: 'none' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="atl-btn atl-btn-gold atl-btn-block"
                    style={{ justifyContent: 'center', padding: '14px', borderRadius: '12px', fontSize: '15px' }}
                  >
                    Request Safari Permits
                  </button>

                  <a
                    href={`https://wa.me/919315517530?text=${whatsappInquiry}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="atl-btn atl-btn-whatsapp atl-btn-block"
                    style={{ justifyContent: 'center', padding: '12px', borderRadius: '12px', fontSize: '14px' }}
                  >
                    <MessageCircle size={16} />
                    <span>Instant Safari WhatsApp Help</span>
                  </a>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '11px', color: 'var(--atl-ink-500)', marginTop: '4px' }}>
                    <ShieldCheck size={14} style={{ color: 'var(--atl-green)' }} />
                    <span>Authorized Forest Department Booking Desk</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
