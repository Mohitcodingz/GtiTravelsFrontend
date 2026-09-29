import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Heart, Award, Users, CheckCircle2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import siteData from '../data/siteData.json';

export default function AboutPage() {
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
              <span className="atl-breadcrumb-current">About Us</span>
            </nav>
            <span className="atl-kicker-caps">Our Purpose &amp; Heritage</span>
            <h1 className="atl-page-title-heading" style={{ margin: '8px auto 12px' }}>Crafting Unforgettable Escapes Across Wilderness &amp; Lakes</h1>
            <p className="atl-page-title-text" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Atulya Hospitality is a premium travel company built on the simple philosophy that where you stay shapes the soul of your entire journey.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="atl-container" style={{ padding: '80px 20px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          <div>
            <span style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--atl-gold)', fontWeight: 700, display: 'block', marginBottom: '10px' }}>
              Our Story
            </span>
            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>
              Born in Kumaon, Crafted for Discerned Travelers
            </h2>
            <p style={{ color: 'var(--atl-ink-700)', fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
              Started with a deep affection for the untamed jungles of Corbett and the tranquil pine valleys of Nainital, Atulya Hospitality emerged to bridge the gap between commercial hotel listings and genuinely bespoke, hospitable travel.
            </p>
            <p style={{ color: 'var(--atl-ink-700)', fontSize: '16px', lineHeight: 1.8, marginBottom: '24px' }}>
              Every property in our portfolio is personally audited by our concierge team for hygiene, culinary excellence, natural serenity, and genuine customer care. We eliminate booking friction by securing the guaranteed best direct tariffs and authentic safari permits.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <div style={{ background: '#fff', padding: '16px', borderRadius: '14px', border: '1px solid rgba(208, 197, 175, 0.4)' }}>
                <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--atl-gold-deep)', fontFamily: 'Playfair Display, serif' }}>
                  50+
                </div>
                <div style={{ fontSize: '13px', color: 'var(--atl-ink-500)', marginTop: '4px' }}>
                  Verified Boutique &amp; Luxury Stays
                </div>
              </div>
              <div style={{ background: '#fff', padding: '16px', borderRadius: '14px', border: '1px solid rgba(208, 197, 175, 0.4)' }}>
                <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--atl-gold-deep)', fontFamily: 'Playfair Display, serif' }}>
                  10k+
                </div>
                <div style={{ fontSize: '13px', color: 'var(--atl-ink-500)', marginTop: '4px' }}>
                  Happy Travelers Hosted
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderRadius: '28px', overflow: 'hidden', boxShadow: 'var(--atl-shadow-float)' }}>
            <img
              src="/images/team-banner-bg-1024x341.jpg"
              alt="Atulya Hospitality Experience"
              style={{ width: '100%', height: '460px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div style={{ background: '#f8f4ea', padding: '80px 0' }}>
        <div className="atl-container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '14px' }}>Our Core Commitments</h2>
            <p style={{ color: 'var(--atl-ink-700)', fontSize: '15px' }}>
              What sets Atulya Hospitality apart on every single journey.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#ffffff', borderRadius: '20px', padding: '32px 24px', border: '1px solid rgba(208, 197, 175, 0.4)' }}>
              <ShieldCheck size={32} style={{ color: 'var(--atl-gold)', marginBottom: '16px' }} />
              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>100% Verified Quality</h3>
              <p style={{ color: 'var(--atl-ink-700)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                We do not list properties blindly. Each resort, villa, and tented camp undergoes strict physical inspection before joining our collection.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '20px', padding: '32px 24px', border: '1px solid rgba(208, 197, 175, 0.4)' }}>
              <Award size={32} style={{ color: 'var(--atl-gold)', marginBottom: '16px' }} />
              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Guaranteed Best Tariffs</h3>
              <p style={{ color: 'var(--atl-ink-700)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                Direct contractual agreements with resort owners ensure you never overpay or encounter hidden fees when booking with us.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '20px', padding: '32px 24px', border: '1px solid rgba(208, 197, 175, 0.4)' }}>
              <Users size={32} style={{ color: 'var(--atl-gold)', marginBottom: '16px' }} />
              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Local Wildlife Naturalists</h3>
              <p style={{ color: 'var(--atl-ink-700)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                Our safari drivers and wilderness guides boast decades of experience tracking wildlife tracks across the Corbett and Ranthambore landscapes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
