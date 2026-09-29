import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DestinationCard from '../components/DestinationCard';
import destinationsData from '../data/destinations.json';

export default function DestinationsPage() {
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
          <div className="atl-page-title" style={{ textAlign: 'left', padding: '24px 8px 8px' }}>
            <nav className="atl-breadcrumb" style={{ marginBottom: '14px' }}>
              <Link to="/">Home</Link>
              <span style={{ opacity: 0.5 }}>/</span>
              <span className="atl-breadcrumb-current">Destinations</span>
            </nav>
            <span className="atl-kicker-caps">Where We Host You</span>
            <h1 className="atl-page-title-heading" style={{ textAlign: 'left', margin: '8px 0 12px' }}>Explore Our Destinations</h1>
            <p className="atl-page-title-text" style={{ textAlign: 'left', margin: 0, maxWidth: '640px' }}>
              From the deep tiger wilderness of Jim Corbett and Ranthambore to the serene lake hills of Nainital, Bhimtal, and Mukteshwar — discover authentic stays in iconic regions.
            </p>
          </div>
        </div>
      </div>

      <div className="atl-container" style={{ padding: '60px 20px 90px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}
        >
          {destinationsData.map((d) => (
            <DestinationCard key={d.slug} destination={d} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
