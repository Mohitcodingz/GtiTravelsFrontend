import React, { useState, useMemo } from 'react';
import { MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import DatePicker, { formatDateValue, shiftDateValue } from './DatePicker';

export default function BookingSidebar({ hotel, selectedRoom, onSelectRoom }) {
  // Today and tomorrow defaults
  const today = formatDateValue(new Date());
  const tomorrow = shiftDateValue(today, 1);

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState('2');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Active room rate
  const activeRoom = selectedRoom || (hotel.rooms && hotel.rooms[0]) || { name: 'Deluxe Room', rate: hotel.rateNum };
  const rate = activeRoom.rate || hotel.rateNum;

  // Nights calculation
  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 1;
    const a = new Date(checkIn);
    const b = new Date(checkOut);
    const diff = Math.round((b - a) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  }, [checkIn, checkOut]);

  const totalPrice = nights * rate;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Atulya Hospitality,\nI would like to book:\n` +
    `• Hotel: ${hotel.title}\n` +
    `• Room: ${activeRoom.name}\n` +
    `• Check-in: ${checkIn}\n` +
    `• Check-out: ${checkOut} (${nights} night${nights > 1 ? 's' : ''})\n` +
    `• Guests: ${guests}\n` +
    (guestName ? `• Name: ${guestName}\n` : '') +
    (guestPhone ? `• Phone: ${guestPhone}\n` : '') +
    `• Estimated Total: ₹${totalPrice.toLocaleString('en-IN')}`
  );

  return (
    <div
      className="atl-booking-sidebar"
      style={{
        background: '#ffffff',
        borderRadius: '24px',
        border: '1px solid rgba(58, 43, 20, 0.5)',
        boxShadow: 'var(--atl-shadow-card)',
        padding: '32px 28px',
        position: 'sticky',
        top: '100px'
      }}
    >
      {/* Price Header */}
      <div style={{ borderBottom: '1px solid rgba(58, 43, 20, 0.3)', paddingBottom: '20px', marginBottom: '24px' }}>
        <span style={{ fontSize: '12px', color: 'var(--atl-ink-500)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
          Direct Booking Best Rate
        </span>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '4px' }}>
          <span
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: 'var(--atl-gold-deep)',
              fontFamily: 'Playfair Display, serif'
            }}
          >
            ₹{rate.toLocaleString('en-IN')}
          </span>
          <span style={{ fontSize: '13px', color: 'var(--atl-ink-500)' }}>/ night (incl. breakfast)</span>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--atl-gold)', fontWeight: 600, marginTop: '4px' }}>
          Selected: {activeRoom.name}
        </div>
      </div>

      {submitted ? (
        <div
          style={{
            background: 'var(--atl-cream-pill)',
            borderRadius: '16px',
            padding: '24px',
            textAlign: 'center',
            border: '1px solid var(--atl-gold-light)'
          }}
        >
          <CheckCircle2 size={44} style={{ color: 'var(--atl-gold)', margin: '0 auto 12px' }} />
          <h4 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--atl-ink-900)' }}>
            Booking Request Received!
          </h4>
          <p style={{ fontSize: '13px', color: 'var(--atl-ink-700)', lineHeight: 1.6, marginBottom: '16px' }}>
            We are holding the <strong>{activeRoom.name}</strong> for {nights} {nights === 1 ? 'night' : 'nights'}. Our concierge will contact you shortly to confirm your booking.
          </p>
          <a
            href={`https://wa.me/919315517530?text=${whatsappMessage}`}
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
          {/* Dates Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--atl-ink-700)', display: 'block', marginBottom: '6px' }}>
                Check-in
              </label>
              <DatePicker
                value={checkIn}
                min={today}
                onChange={(nextCheckIn) => {
                  setCheckIn(nextCheckIn);
                  if (checkOut <= nextCheckIn) setCheckOut(shiftDateValue(nextCheckIn, 1));
                }}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: '1px solid rgba(58, 43, 20, 0.8)',
                  fontSize: '13px',
                  fontFamily: 'inherit',
                  outline: 'none'
                }}
              />
            </div>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--atl-ink-700)', display: 'block', marginBottom: '6px' }}>
                Check-out
              </label>
              <DatePicker
                value={checkOut}
                min={shiftDateValue(checkIn || today, 1)}
                onChange={setCheckOut}
                align="right"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: '1px solid rgba(58, 43, 20, 0.8)',
                  fontSize: '13px',
                  fontFamily: 'inherit',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--atl-ink-700)', display: 'block', marginBottom: '6px' }}>
              Guests &amp; Rooms
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '10px',
                border: '1px solid rgba(58, 43, 20, 0.8)',
                fontSize: '13px',
                fontFamily: 'inherit',
                outline: 'none',
                background: '#fff'
              }}
            >
              <option value="1">1 Guest (1 Room)</option>
              <option value="2">2 Guests (1 Room)</option>
              <option value="3">3 Guests (1 Room with extra bed)</option>
              <option value="4">4 Guests (2 Rooms)</option>
              <option value="5+">5+ Guests (Group booking)</option>
            </select>
          </div>

          {/* Guest Name & Phone */}
          <div>
            <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--atl-ink-700)', display: 'block', marginBottom: '6px' }}>
              Your Name
            </label>
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '10px',
                border: '1px solid rgba(58, 43, 20, 0.8)',
                fontSize: '13px',
                fontFamily: 'inherit',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--atl-ink-700)', display: 'block', marginBottom: '6px' }}>
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              value={guestPhone}
              onChange={(e) => setGuestPhone(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '10px',
                border: '1px solid rgba(58, 43, 20, 0.8)',
                fontSize: '13px',
                fontFamily: 'inherit',
                outline: 'none'
              }}
            />
          </div>

          {/* Pricing Summary Calculation */}
          <div
            style={{
              background: 'var(--atl-surface)',
              borderRadius: '12px',
              padding: '16px',
              marginTop: '4px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--atl-ink-700)', marginBottom: '8px' }}>
              <span>₹{rate.toLocaleString('en-IN')} × {nights} {nights === 1 ? 'night' : 'nights'}</span>
              <span>₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--atl-ink-700)', marginBottom: '12px' }}>
              <span>Taxes &amp; Service Fees</span>
              <span style={{ color: 'var(--atl-green)', fontWeight: 600 }}>Included</span>
            </div>
            <div
              style={{
                borderTop: '1px solid rgba(58, 43, 20, 0.4)',
                paddingTop: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 700,
                fontSize: '16px',
                color: 'var(--atl-ink-900)'
              }}
            >
              <span>Estimated Total</span>
              <span style={{ color: 'var(--atl-gold-deep)' }}>₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <button
            type="submit"
            className="atl-btn atl-btn-gold atl-btn-block"
            style={{ justifyContent: 'center', padding: '14px', borderRadius: '12px', fontSize: '15px' }}
          >
            Reserve Your Stay
          </button>

          <a
            href={`https://wa.me/919315517530?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="atl-btn atl-btn-whatsapp atl-btn-block"
            style={{ justifyContent: 'center', padding: '12px', borderRadius: '12px', fontSize: '14px' }}
          >
            <MessageCircle size={16} />
            <span>Instant WhatsApp Inquiry</span>
          </a>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              fontSize: '11px',
              color: 'var(--atl-ink-500)',
              marginTop: '8px'
            }}
          >
            <ShieldCheck size={14} style={{ color: 'var(--atl-green)' }} />
            <span>100% Verified Stays · No Booking Fee · Direct Support</span>
          </div>
        </form>
      )}
    </div>
  );
}
