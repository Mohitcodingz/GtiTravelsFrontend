import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HotelCard from '../components/HotelCard';
import FilterBar from '../components/FilterBar';
import useHotelCatalog from '../hooks/useHotelCatalog';

export default function HotelListingPage({ destinationName, title, subtitle, isRiverside }) {
  const hotelsData = useHotelCatalog();
  const [selectedRating, setSelectedRating] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const hotels = useMemo(() => {
    return hotelsData.filter((h) => {
      let matchDest = true;
      if (isRiverside) {
        matchDest = h.destination.toLowerCase() === 'jim corbett' && (h.isRiverside || h.title.toLowerCase().includes('river'));
      } else if (destinationName) {
        matchDest = h.destination.toLowerCase() === destinationName.toLowerCase();
      }

      const matchRating = selectedRating === 'all' || h.rating === selectedRating;
      const matchSearch =
        searchQuery === '' ||
        h.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (h.overview || '').toLowerCase().includes(searchQuery.toLowerCase());

      return matchDest && matchRating && matchSearch;
    });
  }, [destinationName, isRiverside, selectedRating, searchQuery]);

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
              <Link to="/hotels/">Hotels</Link>
              <span style={{ opacity: 0.5 }}>/</span>
              <span className="atl-breadcrumb-current">{title}</span>
            </nav>
            <span className="atl-kicker-caps">{destinationName} Stays</span>
            <h1 className="atl-page-title-heading" style={{ textAlign: 'left', margin: '8px 0 12px' }}>{title}</h1>
            <p className="atl-page-title-text" style={{ textAlign: 'left', margin: 0, maxWidth: '640px' }}>
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="atl-container" style={{ padding: '50px 20px 80px' }}>
        <FilterBar
          selectedRating={selectedRating}
          onSelectRating={setSelectedRating}
          selectedDestination="all"
          onSelectDestination={() => {}}
          destinationsList={null}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalResults={hotels.length}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '24px'
          }}
        >
          {hotels.map((h) => (
            <HotelCard key={h.slug} hotel={h} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
